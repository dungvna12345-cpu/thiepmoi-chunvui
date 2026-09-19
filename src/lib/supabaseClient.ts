import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 
  '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('your-project')
);

// Singleton Supabase client
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : null;

export interface WeddingWish {
  id: string;
  name: string;
  relation: string;
  message: string;
  emoji: string;
  created_at: string;
}

export interface WeddingRsvp {
  id: string;
  name: string;
  phone: string;
  side: 'groom' | 'bride';
  guests_count: number;
  attending: 'yes' | 'no';
  note?: string;
  created_at: string;
}

// Initial default wishes to make the guestbook feel warm and lively
const DEFAULT_WISHES: WeddingWish[] = [
  {
    id: 'wish-1',
    name: 'Gia đình Bác Hai',
    relation: 'Người thân',
    message: 'Chúc hai cháu Thành Nhớ & Ngọc Ngân trăm năm hạnh phúc, răng long đầu bạc, vạn sự cát tường viên mãn!',
    emoji: '💐',
    created_at: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
  },
  {
    id: 'wish-2',
    name: 'Hội bạn thân Đại học',
    relation: 'Bạn chú rể',
    message: 'Chúc mừng người anh em Thành Nhớ đã tìm được bến đỗ tuyệt vời cùng cô dâu xinh đẹp Ngọc Ngân. Mãi mãi hạnh phúc nhé!',
    emoji: '🥂',
    created_at: new Date(Date.now() - 3600000 * 12).toISOString(),
  },
  {
    id: 'wish-3',
    name: 'Hương Ly & Minh Tú',
    relation: 'Bạn cô dâu',
    message: 'Cô dâu Ngọc Ngân hôm nay lộng lẫy và kiêu sa quá đỗi! Chúc hai bạn một hành trình hôn nhân ngập tràn mật ngọt và tiếng cười!',
    emoji: '❤️',
    created_at: new Date(Date.now() - 3600000 * 4).toISOString(),
  }
];

// Helper functions for Wishes
export async function getWishes(): Promise<WeddingWish[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('wishes')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        return data as WeddingWish[];
      }
    } catch (e) {
      console.warn('Could not fetch from Supabase, falling back to local storage:', e);
    }
  }

  // Fallback to localStorage
  if (typeof window !== 'undefined') {
    const local = localStorage.getItem('wedding_wishes_mineque');
    if (local) {
      try {
        return JSON.parse(local);
      } catch {
        // ignore
      }
    }
    localStorage.setItem('wedding_wishes_mineque', JSON.stringify(DEFAULT_WISHES));
  }
  return DEFAULT_WISHES;
}

export async function addWish(wish: Omit<WeddingWish, 'id' | 'created_at'>): Promise<WeddingWish> {
  const newWish: WeddingWish = {
    ...wish,
    id: 'wish-' + Date.now(),
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('wishes')
        .insert([
          {
            name: wish.name,
            relation: wish.relation,
            message: wish.message,
            emoji: wish.emoji,
          }
        ])
        .select()
        .single();
      if (!error && data) {
        return data as WeddingWish;
      }
    } catch (e) {
      console.warn('Could not insert to Supabase, saving locally:', e);
    }
  }

  // Fallback save in localStorage
  if (typeof window !== 'undefined') {
    const existing = await getWishes();
    const updated = [newWish, ...existing];
    localStorage.setItem('wedding_wishes_mineque', JSON.stringify(updated));
  }
  return newWish;
}

// Helper functions for RSVP
export async function getRsvps(): Promise<WeddingRsvp[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('rsvps')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) {
        return data as WeddingRsvp[];
      }
    } catch (e) {
      console.warn('Could not fetch RSVPs from Supabase:', e);
    }
  }

  if (typeof window !== 'undefined') {
    const local = localStorage.getItem('wedding_rsvps_mineque');
    if (local) {
      try {
        return JSON.parse(local);
      } catch {
        // ignore
      }
    }
  }
  return [];
}

export async function addRsvp(rsvp: Omit<WeddingRsvp, 'id' | 'created_at'>): Promise<WeddingRsvp> {
  const newRsvp: WeddingRsvp = {
    ...rsvp,
    id: 'rsvp-' + Date.now(),
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('rsvps')
        .insert([rsvp])
        .select()
        .single();
      if (!error && data) {
        return data as WeddingRsvp;
      }
    } catch (e) {
      console.warn('Could not insert RSVP to Supabase:', e);
    }
  }

  if (typeof window !== 'undefined') {
    const existing = await getRsvps();
    const updated = [newRsvp, ...existing];
    localStorage.setItem('wedding_rsvps_mineque', JSON.stringify(updated));
  }
  return newRsvp;
}

// Helper for Heart Likes count
export async function getHeartLikes(): Promise<number> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data } = await supabase
        .from('likes')
        .select('count')
        .eq('id', 1)
        .single();
      if (data) return data.count;
    } catch (e) {
      console.warn('Could not fetch likes:', e);
    }
  }

  if (typeof window !== 'undefined') {
    const val = localStorage.getItem('wedding_heart_likes');
    return val ? parseInt(val, 10) : 999;
  }
  return 999;
}

export async function incrementHeartLikes(): Promise<number> {
  let count = 999;
  if (typeof window !== 'undefined') {
    const val = localStorage.getItem('wedding_heart_likes');
    count = (val ? parseInt(val, 10) : 999) + 1;
    localStorage.setItem('wedding_heart_likes', count.toString());
  }

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.rpc('increment_likes');
    } catch {
      // ignore
    }
  }
  return count;
}

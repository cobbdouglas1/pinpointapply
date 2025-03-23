
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/lib/supabase';

export type UserProfile = Omit<Tables['users'], 'created_at'>;

export const getUserProfile = async (): Promise<UserProfile | null> => {
  try {
    const { data: user } = await supabase.auth.getUser();
    
    if (!user.user) {
      return null;
    }
    
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.user.id)
      .single();
    
    if (error) throw error;
    
    return data as UserProfile;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export const updateUserProfile = async (profile: Partial<UserProfile>): Promise<UserProfile> => {
  try {
    const { data: user } = await supabase.auth.getUser();
    
    if (!user.user) {
      throw new Error('User not authenticated');
    }
    
    const { data, error } = await supabase
      .from('users')
      .update(profile)
      .eq('id', user.user.id)
      .select()
      .single();
    
    if (error) throw error;
    
    return data as UserProfile;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

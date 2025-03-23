
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/lib/supabase';

export type UserProfile = Omit<Tables['users'], 'created_at'>;

export const getUserProfile = async (): Promise<UserProfile | null> => {
  try {
    const { data: authUser } = await supabase.auth.getUser();
    
    if (!authUser.user) {
      return null;
    }
    
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', authUser.user.id)
      .single();
    
    if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned"
      throw error;
    }
    
    return data as UserProfile;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export const updateUserProfile = async (profile: Partial<UserProfile>): Promise<UserProfile> => {
  try {
    const { data: authUser } = await supabase.auth.getUser();
    
    if (!authUser.user) {
      throw new Error('User not authenticated');
    }
    
    // Check if user profile exists
    const existingProfile = await getUserProfile();
    
    if (existingProfile) {
      // Update existing profile
      const { data, error } = await supabase
        .from('users')
        .update(profile)
        .eq('id', authUser.user.id)
        .select()
        .single();
      
      if (error) throw error;
      return data as UserProfile;
    } else {
      // Create new profile
      const newProfile = {
        id: authUser.user.id,
        ...profile,
      };
      
      const { data, error } = await supabase
        .from('users')
        .insert(newProfile)
        .select()
        .single();
      
      if (error) throw error;
      return data as UserProfile;
    }
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

export const createUserProfile = async (profile: Partial<UserProfile>): Promise<UserProfile> => {
  try {
    const { data: authUser } = await supabase.auth.getUser();
    
    if (!authUser.user) {
      throw new Error('User not authenticated');
    }
    
    // Create user profile
    const newProfile = {
      id: authUser.user.id,
      ...profile,
    };
    
    const { data, error } = await supabase
      .from('users')
      .insert(newProfile)
      .select()
      .single();
    
    if (error) throw error;
    return data as UserProfile;
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};

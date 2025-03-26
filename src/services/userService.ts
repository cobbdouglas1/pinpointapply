
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
      // For updates, we can use partial data since we're only updating specific fields
      const { data, error } = await supabase
        .from('users')
        .update(profile)
        .eq('id', authUser.user.id)
        .select()
        .single();
      
      if (error) throw error;
      return data as UserProfile;
    } else {
      // For new profiles, we need to ensure all required fields are present
      // Make sure we have values for all required fields
      if (!profile.email || !profile.full_name || !profile.phone || 
          !profile.location_city || !profile.location_country) {
        throw new Error('Missing required fields for user profile');
      }
      
      const newProfile = {
        id: authUser.user.id,
        email: profile.email,
        full_name: profile.full_name,
        phone: profile.phone,
        location_city: profile.location_city,
        location_country: profile.location_country,
        professional_headline: profile.professional_headline || null,
        linkedin_url: profile.linkedin_url || null,
        github_url: profile.github_url || null,
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
    
    // For new profiles, we need to ensure all required fields are present
    // Make sure we have values for all required fields
    if (!profile.email || !profile.full_name || !profile.phone || 
        !profile.location_city || !profile.location_country) {
      throw new Error('Missing required fields for user profile');
    }
    
    // Create user profile with all required fields
    const newProfile = {
      id: authUser.user.id,
      email: profile.email,
      full_name: profile.full_name,
      phone: profile.phone,
      location_city: profile.location_city,
      location_country: profile.location_country,
      professional_headline: profile.professional_headline || null,
      linkedin_url: profile.linkedin_url || null,
      github_url: profile.github_url || null,
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

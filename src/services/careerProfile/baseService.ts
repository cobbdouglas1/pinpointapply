
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/lib/supabase';

export type CareerProfile = Tables<'career_profiles'>;

export const getCareerProfile = async (): Promise<CareerProfile | null> => {
  try {
    const { data: user } = await supabase.auth.getUser();
    
    if (!user.user) {
      return null;
    }
    
    const { data, error } = await supabase
      .from('career_profiles')
      .select('*')
      .eq('user_id', user.user.id)
      .single();
    
    if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned"
      throw error;
    }
    
    return data as CareerProfile;
  } catch (error) {
    console.error('Error fetching career profile:', error);
    throw error;
  }
};

export const upsertCareerProfile = async (profile: Partial<CareerProfile>): Promise<CareerProfile> => {
  try {
    const { data: user } = await supabase.auth.getUser();
    
    if (!user.user) {
      throw new Error('User not authenticated');
    }
    
    // Check if profile exists
    const existingProfile = await getCareerProfile();
    
    if (existingProfile) {
      // Update existing profile
      const { data, error } = await supabase
        .from('career_profiles')
        .update(profile)
        .eq('user_id', user.user.id)
        .select()
        .single();
      
      if (error) throw error;
      return data as CareerProfile;
    } else {
      // Check if user exists in users table
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('id')
        .eq('id', user.user.id)
        .single();
      
      if (userError && userError.code !== 'PGRST116') {
        throw userError;
      }
      
      if (!userData) {
        throw new Error('User profile must be created before career profile');
      }
      
      // Create new profile
      const newProfile = {
        user_id: user.user.id,
        skills_hard: [],
        skills_soft: [],
        work_experience: [],
        education: [],
        languages: [],
        ...profile,
      };
      
      const { data, error } = await supabase
        .from('career_profiles')
        .insert(newProfile)
        .select()
        .single();
      
      if (error) throw error;
      return data as CareerProfile;
    }
  } catch (error) {
    console.error('Error upserting career profile:', error);
    throw error;
  }
};

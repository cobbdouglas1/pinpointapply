
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/lib/supabase';

export type CareerProfile = Omit<Tables['career_profiles'], 'created_at'>;

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

export const addWorkExperience = async (experience: any): Promise<CareerProfile> => {
  try {
    const profile = await getCareerProfile();
    
    if (!profile) {
      throw new Error('Career profile not found');
    }
    
    const workExperience = profile.work_experience || [];
    workExperience.push(experience);
    
    return await upsertCareerProfile({ work_experience: workExperience });
  } catch (error) {
    console.error('Error adding work experience:', error);
    throw error;
  }
};

export const updateWorkExperience = async (index: number, experience: any): Promise<CareerProfile> => {
  try {
    const profile = await getCareerProfile();
    
    if (!profile || !profile.work_experience) {
      throw new Error('Work experience not found');
    }
    
    const workExperience = [...profile.work_experience];
    workExperience[index] = experience;
    
    return await upsertCareerProfile({ work_experience: workExperience });
  } catch (error) {
    console.error('Error updating work experience:', error);
    throw error;
  }
};

export const deleteWorkExperience = async (index: number): Promise<CareerProfile> => {
  try {
    const profile = await getCareerProfile();
    
    if (!profile || !profile.work_experience) {
      throw new Error('Work experience not found');
    }
    
    const workExperience = [...profile.work_experience];
    workExperience.splice(index, 1);
    
    return await upsertCareerProfile({ work_experience: workExperience });
  } catch (error) {
    console.error('Error deleting work experience:', error);
    throw error;
  }
};

// Similar functions can be created for education, certifications, projects, etc.
// Example for education
export const addEducation = async (education: any): Promise<CareerProfile> => {
  try {
    const profile = await getCareerProfile();
    
    if (!profile) {
      throw new Error('Career profile not found');
    }
    
    const educationList = profile.education || [];
    educationList.push(education);
    
    return await upsertCareerProfile({ education: educationList });
  } catch (error) {
    console.error('Error adding education:', error);
    throw error;
  }
};

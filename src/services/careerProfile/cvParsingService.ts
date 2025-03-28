
import { supabase } from '@/integrations/supabase/client';
import { upsertCareerProfile } from './baseService';
import type { CareerProfile } from './baseService';

export const populateProfileFromCV = async (parsedData: any): Promise<CareerProfile> => {
  try {
    // Get current user
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      throw new Error('User not authenticated');
    }
    
    // Update user profile with basic information
    if (parsedData.fullName || parsedData.email || parsedData.phone || parsedData.location) {
      const locationParts = parsedData.location ? parsedData.location.split(',').map((part: string) => part.trim()) : ['', ''];
      
      const userProfileData = {
        full_name: parsedData.fullName || '',
        email: parsedData.email || '',
        phone: parsedData.phone || '',
        location_city: locationParts[0] || '',
        location_country: locationParts[1] || '',
        professional_headline: parsedData.headline || '',
      };
      
      // Only include non-empty fields
      const filteredUserData = Object.fromEntries(
        Object.entries(userProfileData).filter(([_, value]) => value !== '')
      );
      
      if (Object.keys(filteredUserData).length > 0) {
        const { error } = await supabase
          .from('users')
          .update(filteredUserData)
          .eq('id', userData.user.id);
        
        if (error) throw error;
      }
    }
    
    // Prepare career profile data
    const careerProfileData: Partial<CareerProfile> = {
      user_id: userData.user.id,
      career_objective: parsedData.careerObjective || '',
      skills_hard: Array.isArray(parsedData.skills_hard) ? parsedData.skills_hard : [],
      skills_soft: Array.isArray(parsedData.skills_soft) ? parsedData.skills_soft : [],
      work_experience: Array.isArray(parsedData.work_experience) ? parsedData.work_experience : [],
      education: Array.isArray(parsedData.education) ? parsedData.education : [],
      languages: Array.isArray(parsedData.languages) ? parsedData.languages : [],
    };
    
    // Use upsertCareerProfile to create or update the profile
    return await upsertCareerProfile(careerProfileData);
  } catch (error) {
    console.error('Error populating profile from CV:', error);
    throw error;
  }
};

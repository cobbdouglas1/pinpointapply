
import { getCareerProfile, upsertCareerProfile } from './baseService';
import type { CareerProfile } from './baseService';

export const addWorkExperience = async (experience: any): Promise<CareerProfile> => {
  try {
    const profile = await getCareerProfile();
    
    if (!profile) {
      throw new Error('Career profile not found');
    }
    
    // Ensure work_experience is an array before attempting to use push
    const workExperience = Array.isArray(profile.work_experience) 
      ? [...profile.work_experience] 
      : [];
    
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
    
    if (!profile) {
      throw new Error('Career profile not found');
    }
    
    // Ensure work_experience is an array and has the element at the specified index
    if (!Array.isArray(profile.work_experience) || !profile.work_experience[index]) {
      throw new Error('Work experience entry not found');
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
    
    if (!profile) {
      throw new Error('Career profile not found');
    }
    
    // Ensure work_experience is an array and has the element at the specified index
    if (!Array.isArray(profile.work_experience) || !profile.work_experience[index]) {
      throw new Error('Work experience entry not found');
    }
    
    const workExperience = [...profile.work_experience];
    workExperience.splice(index, 1);
    
    return await upsertCareerProfile({ work_experience: workExperience });
  } catch (error) {
    console.error('Error deleting work experience:', error);
    throw error;
  }
};

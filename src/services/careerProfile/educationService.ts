
import { getCareerProfile, upsertCareerProfile } from './baseService';
import type { CareerProfile } from './baseService';

export const addEducation = async (education: any): Promise<CareerProfile> => {
  try {
    const profile = await getCareerProfile();
    
    if (!profile) {
      throw new Error('Career profile not found');
    }
    
    // Ensure education is an array before attempting to use push
    const educationList = Array.isArray(profile.education) 
      ? [...profile.education] 
      : [];
    
    educationList.push(education);
    
    return await upsertCareerProfile({ education: educationList });
  } catch (error) {
    console.error('Error adding education:', error);
    throw error;
  }
};

export const updateEducation = async (index: number, education: any): Promise<CareerProfile> => {
  try {
    const profile = await getCareerProfile();
    
    if (!profile) {
      throw new Error('Career profile not found');
    }
    
    // Ensure education is an array and has the element at the specified index
    if (!Array.isArray(profile.education) || !profile.education[index]) {
      throw new Error('Education entry not found');
    }
    
    const educationList = [...profile.education];
    educationList[index] = education;
    
    return await upsertCareerProfile({ education: educationList });
  } catch (error) {
    console.error('Error updating education:', error);
    throw error;
  }
};

export const deleteEducation = async (index: number): Promise<CareerProfile> => {
  try {
    const profile = await getCareerProfile();
    
    if (!profile) {
      throw new Error('Career profile not found');
    }
    
    // Ensure education is an array and has the element at the specified index
    if (!Array.isArray(profile.education) || !profile.education[index]) {
      throw new Error('Education entry not found');
    }
    
    const educationList = [...profile.education];
    educationList.splice(index, 1);
    
    return await upsertCareerProfile({ education: educationList });
  } catch (error) {
    console.error('Error deleting education:', error);
    throw error;
  }
};

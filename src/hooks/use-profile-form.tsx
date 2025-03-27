
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { useAuthContext } from '@/context/AuthContext';
import { 
  getUserProfile, 
  updateUserProfile, 
  createUserProfile 
} from '@/services/userService';
import { 
  getCareerProfile, 
  upsertCareerProfile, 
  populateProfileFromCV 
} from '@/services/careerProfileService';

export const useProfileForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 10;
  const { toast } = useToast();
  const { user, loading } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasExistingProfile, setHasExistingProfile] = useState(false);
  
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      headline: "",
      linkedin: "",
      github: "",
      careerObjective: "",
      // Additional form fields would be added here
    }
  });
  
  useEffect(() => {
    const loadUserData = async () => {
      if (!user) return;
      
      try {
        setIsLoading(true);
        setError(null);
        
        // Load user profile data
        const userProfile = await getUserProfile();
        if (userProfile) {
          form.setValue('fullName', userProfile.full_name);
          form.setValue('email', userProfile.email);
          form.setValue('phone', userProfile.phone);
          form.setValue('location', `${userProfile.location_city}, ${userProfile.location_country}`);
          form.setValue('headline', userProfile.professional_headline || '');
          form.setValue('linkedin', userProfile.linkedin_url || '');
          form.setValue('github', userProfile.github_url || '');
        }
        
        // Load career profile data
        const careerProfile = await getCareerProfile();
        setHasExistingProfile(!!careerProfile);
        
        if (careerProfile) {
          form.setValue('careerObjective', careerProfile.career_objective || '');
          // If there's an existing profile, start at step 1 (basic info)
          if (currentStep === 0) setCurrentStep(1);
          // Load other career profile data into form
          // This would include work experience, education, skills, etc.
        }
      } catch (error) {
        console.error('Error loading user data:', error);
        setError('Failed to load your profile data. Please try again later.');
        toast({
          title: "Error",
          description: "Failed to load your profile data",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    if (user && !loading) {
      loadUserData();
    }
  }, [user, loading, form, toast, currentStep]);
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (currentStep === 1) {
      // Go back to start options
      setCurrentStep(0);
    }
  };
  
  const handleStartFromScratch = () => {
    if (hasExistingProfile) {
      // If they already have a profile, confirm they want to edit it
      toast({
        title: "Existing Profile Found",
        description: "You're editing your existing career profile.",
      });
    }
    setCurrentStep(1); // Move to basic info step
  };
  
  const handleCVParseComplete = async (parsedData: any) => {
    try {
      setIsLoading(true);
      
      // Populate profile with parsed data
      await populateProfileFromCV(parsedData);
      
      // Reload user data to show the populated form
      const userProfile = await getUserProfile();
      if (userProfile) {
        form.setValue('fullName', userProfile.full_name);
        form.setValue('email', userProfile.email);
        form.setValue('phone', userProfile.phone);
        form.setValue('location', `${userProfile.location_city}, ${userProfile.location_country}`);
        form.setValue('headline', userProfile.professional_headline || '');
        form.setValue('linkedin', userProfile.linkedin_url || '');
        form.setValue('github', userProfile.github_url || '');
      }
      
      // Load career profile data
      const careerProfile = await getCareerProfile();
      if (careerProfile) {
        form.setValue('careerObjective', careerProfile.career_objective || '');
        // Load other career profile data into form
      }
      
      toast({
        title: "Success",
        description: "Your profile has been pre-filled with information from your CV.",
      });
      
      // Move to the first step to review pre-filled data
      setCurrentStep(1);
    } catch (error: any) {
      console.error('Error processing CV data:', error);
      setError(`Failed to process CV data: ${error.message || 'Unknown error'}`);
      toast({
        title: "Error",
        description: `Failed to process CV data: ${error.message || 'Unknown error'}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const onSubmit = async (data: any) => {
    try {
      setIsSubmitting(true);
      setError(null);
      
      if (currentStep === 1) {
        // Parse location into city and country
        let locationCity = '';
        let locationCountry = '';
        
        if (data.location && data.location.includes(',')) {
          const [city, country] = data.location.split(',').map((s: string) => s.trim());
          locationCity = city;
          locationCountry = country;
        } else {
          // If no comma, assume it's all city
          locationCity = data.location.trim();
          locationCountry = '';
        }
        
        // Save basic info to users table
        try {
          const existingProfile = await getUserProfile();
          
          const userData = {
            full_name: data.fullName,
            email: data.email,
            phone: data.phone,
            location_city: locationCity,
            location_country: locationCountry || '',
            professional_headline: data.headline,
            linkedin_url: data.linkedin,
            github_url: data.github,
          };
          
          if (existingProfile) {
            await updateUserProfile(userData);
          } else {
            await createUserProfile(userData);
          }
          
          toast({
            title: "Success",
            description: "Basic information saved successfully",
          });
          
          nextStep();
        } catch (error: any) {
          console.error('Error saving user profile:', error);
          setError(`Failed to save profile: ${error.message || 'Unknown error'}`);
          toast({
            title: "Error",
            description: `Failed to save your profile data: ${error.message || 'Unknown error'}`,
            variant: "destructive",
          });
          return;
        }
      } else if (currentStep === 2) {
        // Save career objective to career_profiles table
        try {
          await upsertCareerProfile({
            career_objective: data.careerObjective,
          });
          
          toast({
            title: "Success",
            description: "Career objective saved successfully",
          });
          
          nextStep();
        } catch (error: any) {
          console.error('Error saving career objective:', error);
          setError(`Failed to save career objective: ${error.message || 'Unknown error'}`);
          toast({
            title: "Error",
            description: `Failed to save your career objective: ${error.message || 'Unknown error'}`,
            variant: "destructive",
          });
          return;
        }
      } else if (currentStep === totalSteps) {
        // Final save of all profile data
        toast({
          title: "Success",
          description: "Your career profile has been saved",
        });
      } else {
        // Save other steps and proceed
        nextStep();
      }
    } catch (error: any) {
      console.error('Error saving profile:', error);
      setError(`An unexpected error occurred: ${error.message || 'Unknown error'}`);
      toast({
        title: "Error",
        description: "Failed to save your profile data",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    currentStep,
    totalSteps,
    form,
    error,
    isLoading,
    isSubmitting,
    hasExistingProfile,
    prevStep,
    nextStep,
    handleStartFromScratch,
    handleCVParseComplete,
    onSubmit
  };
};

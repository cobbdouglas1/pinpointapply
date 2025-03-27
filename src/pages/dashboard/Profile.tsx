
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import DashboardLayout from '@/components/dashboard/Dashboard';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Save } from 'lucide-react';
import { Form } from "@/components/ui/form";
import ProfileStepContent from '@/components/profile/ProfileStepContent';
import { getUserProfile, updateUserProfile, createUserProfile } from '@/services/userService';
import { getCareerProfile, upsertCareerProfile, populateProfileFromCV } from '@/services/careerProfileService';
import { useToast } from '@/hooks/use-toast';
import { useAuthContext } from '@/context/AuthContext';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import ProfileStartOptions from '@/components/profile/ProfileStartOptions';
import CVUploadParser from '@/components/profile/CVUploadParser';

const ProfilePage = () => {
  const [currentStep, setCurrentStep] = useState(0); // Changed from 1 to 0 to show start options first
  const totalSteps = 10;
  const { toast } = useToast();
  const { user, loading } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCVUpload, setShowCVUpload] = useState(false);
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
  
  const handleUploadCV = () => {
    setShowCVUpload(true);
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
      setShowCVUpload(false);
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
  
  const getStepName = (step: number) => {
    switch(step) {
      case 0: return "Choose Start Option";
      case 1: return "Basic Information";
      case 2: return "Career Objective";
      case 3: return "Work Experience";
      case 4: return "Education & Certifications";
      case 5: return "Skills & Competencies";
      case 6: return "Projects & Portfolio";
      case 7: return "Extracurricular Activities";
      case 8: return "Awards & Achievements";
      case 9: return "Languages";
      case 10: return "Additional Information";
      default: return "";
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
  
  if (loading || isLoading) {
    return (
      <DashboardLayout title="Career Profile">
        <div className="flex justify-center items-center h-64">
          <p>Loading your profile data...</p>
        </div>
      </DashboardLayout>
    );
  }
  
  return (
    <DashboardLayout title="Career Profile">
      <div className="grid grid-cols-1 gap-6 animate-fade-in">
        {currentStep === 0 && !showCVUpload && (
          <Card>
            <CardHeader>
              <CardTitle>Create Your Career Profile</CardTitle>
              <CardDescription>
                Choose how you want to start building your career profile
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileStartOptions 
                onSelectUploadCV={handleUploadCV}
                onSelectStartFromScratch={handleStartFromScratch}
              />
            </CardContent>
          </Card>
        )}
        
        {showCVUpload && (
          <CVUploadParser 
            onParseComplete={handleCVParseComplete}
            onCancel={() => setShowCVUpload(false)}
          />
        )}
        
        {currentStep > 0 && !showCVUpload && (
          <Card>
            <CardHeader>
              <CardTitle>Complete Your Career Profile</CardTitle>
              <CardDescription>
                Step {currentStep} of {totalSteps}: {getStepName(currentStep)}
              </CardDescription>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="space-y-4">
                  {error && (
                    <Alert variant="destructive" className="mb-4">
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  <ProfileStepContent currentStep={currentStep} form={form} />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    type="button"
                    variant="outline" 
                    onClick={prevStep} 
                    disabled={isSubmitting}
                  >
                    Previous
                  </Button>
                  {currentStep < totalSteps ? (
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Saving...' : 'Next'} {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  ) : (
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Saving...' : 'Save Profile'} {!isSubmitting && <Save className="ml-2 h-4 w-4" />}
                    </Button>
                  )}
                </CardFooter>
              </form>
            </Form>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;

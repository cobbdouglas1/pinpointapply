
import React, { useEffect } from 'react';
import DashboardLayout from '@/components/dashboard/Dashboard';
import ProfileStartWrapper from '@/components/profile/ProfileStartWrapper';
import ProfileFormWrapper from '@/components/profile/ProfileFormWrapper';
import { useProfileForm } from '@/hooks/use-profile-form';
import { initializeStorage } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

const ProfilePage = () => {
  const {
    currentStep,
    totalSteps,
    form,
    error,
    isLoading,
    isSubmitting,
    hasExistingProfile,
    prevStep,
    handleStartFromScratch,
    handleCVParseComplete,
    onSubmit
  } = useProfileForm();
  
  const { toast } = useToast();
  
  // Extract form loading state
  const formLoading = form.formState.isLoading;
  
  // Initialize storage when component mounts
  useEffect(() => {
    initializeStorage().catch(error => {
      console.error('Failed to initialize storage:', error);
      toast({
        title: "Storage Initialization Failed",
        description: "There was an issue setting up the file upload system. Please try again later.",
        variant: "destructive",
      });
    });
  }, [toast]);
  
  if (formLoading || isLoading) {
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
        {currentStep === 0 && (
          <ProfileStartWrapper 
            hasExistingProfile={hasExistingProfile}
            onStartFromScratch={handleStartFromScratch}
            onCVParseComplete={handleCVParseComplete}
          />
        )}
        
        {currentStep > 0 && (
          <ProfileFormWrapper
            currentStep={currentStep}
            totalSteps={totalSteps}
            form={form}
            error={error}
            isSubmitting={isSubmitting}
            onPrevStep={prevStep}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;

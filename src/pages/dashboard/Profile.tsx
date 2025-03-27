
import React from 'react';
import DashboardLayout from '@/components/dashboard/Dashboard';
import ProfileStartWrapper from '@/components/profile/ProfileStartWrapper';
import ProfileFormWrapper from '@/components/profile/ProfileFormWrapper';
import { useProfileForm } from '@/hooks/use-profile-form';

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
  
  const { loading } = useProfileForm().form.formState;
  
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

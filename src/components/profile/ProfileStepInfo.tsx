
import React from 'react';
import { CardDescription, CardTitle } from '@/components/ui/card';
import ProfileProgressBar from './ProfileProgressBar';

interface ProfileStepInfoProps {
  currentStep: number;
  totalSteps: number;
}

const ProfileStepInfo = ({ currentStep, totalSteps }: ProfileStepInfoProps) => {
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

  return (
    <>
      <CardTitle>Complete Your Career Profile</CardTitle>
      <CardDescription>
        Step {currentStep} of {totalSteps}: {getStepName(currentStep)}
      </CardDescription>
      <ProfileProgressBar currentStep={currentStep} totalSteps={totalSteps} />
    </>
  );
};

export default ProfileStepInfo;

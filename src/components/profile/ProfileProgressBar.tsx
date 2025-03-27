
import React from 'react';

interface ProfileProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProfileProgressBar = ({ currentStep, totalSteps }: ProfileProgressBarProps) => {
  return (
    <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
      <div 
        className="bg-primary h-2 rounded-full transition-all duration-300" 
        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
      ></div>
    </div>
  );
};

export default ProfileProgressBar;

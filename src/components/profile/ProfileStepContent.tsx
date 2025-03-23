
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import StepBasicInfo from './StepBasicInfo';
import StepCareerObjective from './StepCareerObjective';
import StepWorkExperience from './StepWorkExperience';
import StepEducation from './StepEducation';
import StepSkills from './StepSkills';
import StepProjects from './StepProjects';
import StepActivities from './StepActivities';
import StepAwards from './StepAwards';
import StepLanguages from './StepLanguages';
import StepAdditionalInfo from './StepAdditionalInfo';

interface ProfileStepContentProps {
  currentStep: number;
  form: UseFormReturn<any>;
}

const ProfileStepContent = ({ currentStep, form }: ProfileStepContentProps) => {
  switch (currentStep) {
    case 1:
      return <StepBasicInfo form={form} />;
    case 2:
      return <StepCareerObjective form={form} />;
    case 3:
      return <StepWorkExperience form={form} />;
    case 4:
      return <StepEducation form={form} />;
    case 5:
      return <StepSkills form={form} />;
    case 6:
      return <StepProjects form={form} />;
    case 7:
      return <StepActivities form={form} />;
    case 8:
      return <StepAwards form={form} />;
    case 9:
      return <StepLanguages form={form} />;
    case 10:
      return <StepAdditionalInfo form={form} />;
    default:
      return null;
  }
};

export default ProfileStepContent;

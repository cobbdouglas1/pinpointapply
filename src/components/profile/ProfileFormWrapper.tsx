
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Save } from 'lucide-react';
import { Form } from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import ProfileStepContent from './ProfileStepContent';
import ProfileStepInfo from './ProfileStepInfo';

interface ProfileFormWrapperProps {
  currentStep: number;
  totalSteps: number;
  form: UseFormReturn<any>;
  error: string | null;
  isSubmitting: boolean;
  onPrevStep: () => void;
  onSubmit: (data: any) => Promise<void>;
}

const ProfileFormWrapper = ({
  currentStep,
  totalSteps,
  form,
  error,
  isSubmitting,
  onPrevStep,
  onSubmit
}: ProfileFormWrapperProps) => {
  return (
    <Card>
      <CardHeader>
        <ProfileStepInfo currentStep={currentStep} totalSteps={totalSteps} />
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
              onClick={onPrevStep} 
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
  );
};

export default ProfileFormWrapper;

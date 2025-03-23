
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import DashboardLayout from '@/components/dashboard/Dashboard';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Save } from 'lucide-react';
import { Form } from "@/components/ui/form";
import ProfileStepContent from '@/components/profile/ProfileStepContent';

const ProfilePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 10;
  
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
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const getStepName = (step: number) => {
    switch(step) {
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
    <DashboardLayout title="Career Profile">
      <div className="grid grid-cols-1 gap-6 animate-fade-in">
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
            <form onSubmit={form.handleSubmit(() => console.log("Form submitted"))}>
              <CardContent className="space-y-4">
                <ProfileStepContent currentStep={currentStep} form={form} />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  type="button"
                  variant="outline" 
                  onClick={prevStep} 
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                {currentStep < totalSteps ? (
                  <Button type="button" onClick={nextStep}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="submit">
                    Save Profile <Save className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;

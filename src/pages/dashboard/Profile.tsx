
import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/Dashboard';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Save } from 'lucide-react';

const ProfilePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
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
  
  return (
    <DashboardLayout title="Career Profile">
      <div className="grid grid-cols-1 gap-6 animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle>Complete Your Career Profile</CardTitle>
            <CardDescription>
              Step {currentStep} of {totalSteps}: {currentStep === 1 ? "Basic Information" : 
                currentStep === 2 ? "Education" : 
                currentStep === 3 ? "Work Experience" : "Skills & Preferences"}
            </CardDescription>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentStep === 1 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Professional Title</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Software Engineer" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="City, Country" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">About Me</label>
                  <textarea className="w-full p-2 border rounded-md" rows={4} placeholder="Brief professional summary..."></textarea>
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium mb-1">Highest Degree</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Bachelor's</option>
                    <option>Master's</option>
                    <option>PhD</option>
                    <option>High School</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Institution</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="University name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Field of Study</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Computer Science" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">From Year</label>
                    <input type="text" className="w-full p-2 border rounded-md" placeholder="2018" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">To Year</label>
                    <input type="text" className="w-full p-2 border rounded-md" placeholder="2022" />
                  </div>
                </div>
                <Button type="button" variant="outline" size="sm" className="mt-2">
                  + Add Another Education
                </Button>
              </div>
            )}
            
            {currentStep === 3 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium mb-1">Company Name</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Company Inc." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Position</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Software Engineer" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">From Date</label>
                    <input type="text" className="w-full p-2 border rounded-md" placeholder="Jan 2020" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">To Date</label>
                    <input type="text" className="w-full p-2 border rounded-md" placeholder="Present" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Responsibilities & Achievements</label>
                  <textarea className="w-full p-2 border rounded-md" rows={4} placeholder="Describe your role and key achievements..."></textarea>
                </div>
                <Button type="button" variant="outline" size="sm" className="mt-2">
                  + Add Another Experience
                </Button>
              </div>
            )}
            
            {currentStep === 4 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium mb-1">Skills (comma separated)</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="React, JavaScript, UI/UX, Project Management" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Languages</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="English (Fluent), Spanish (Intermediate)" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Preferred Job Types</label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <div className="flex items-center">
                      <input type="checkbox" id="fulltime" className="mr-2" />
                      <label htmlFor="fulltime">Full-time</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="parttime" className="mr-2" />
                      <label htmlFor="parttime">Part-time</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="contract" className="mr-2" />
                      <label htmlFor="contract">Contract</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="remote" className="mr-2" />
                      <label htmlFor="remote">Remote</label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Preferred Industries</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Tech, Finance, Healthcare" />
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={prevStep} 
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            {currentStep < totalSteps ? (
              <Button onClick={nextStep}>
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button>
                Save Profile <Save className="ml-2 h-4 w-4" />
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;

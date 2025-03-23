
import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/Dashboard';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Save } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ProfilePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 10;
  
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
          <CardContent className="space-y-4">
            {currentStep === 1 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <FormLabel className="block text-sm font-medium mb-1">Full Name *</FormLabel>
                  <Input type="text" placeholder="John Doe" />
                </div>
                <div>
                  <FormLabel className="block text-sm font-medium mb-1">Email Address *</FormLabel>
                  <Input type="email" placeholder="email@example.com" />
                </div>
                <div>
                  <FormLabel className="block text-sm font-medium mb-1">Phone Number *</FormLabel>
                  <Input type="tel" placeholder="+1 234 567 8901" />
                </div>
                <div>
                  <FormLabel className="block text-sm font-medium mb-1">Location *</FormLabel>
                  <Input type="text" placeholder="City, Country" />
                </div>
                <div>
                  <FormLabel className="block text-sm font-medium mb-1">Professional Headline (Optional)</FormLabel>
                  <Input type="text" placeholder="Senior Software Engineer" />
                  <FormDescription className="text-xs text-gray-500 mt-1">
                    A short title that describes your professional identity
                  </FormDescription>
                </div>
                <div>
                  <FormLabel className="block text-sm font-medium mb-1">LinkedIn (Optional)</FormLabel>
                  <Input type="url" placeholder="https://linkedin.com/in/username" />
                </div>
                <div>
                  <FormLabel className="block text-sm font-medium mb-1">GitHub/Portfolio (Optional)</FormLabel>
                  <Input type="url" placeholder="https://github.com/username" />
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <FormLabel className="block text-sm font-medium mb-1">Career Objective/Personal Summary *</FormLabel>
                  <Textarea 
                    rows={5} 
                    placeholder="Write a brief summary of your career goals, professional identity, and what makes you unique..."
                  />
                  <FormDescription className="text-xs text-gray-500 mt-1">
                    This will appear at the top of your CV and helps employers understand your professional brand
                  </FormDescription>
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <div className="space-y-4 animate-fade-in">
                <div className="border p-4 rounded-md">
                  <h3 className="font-medium mb-3">Work Experience 1</h3>
                  <div className="space-y-3">
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Company/Organization *</FormLabel>
                      <Input type="text" placeholder="Company Inc." />
                    </div>
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Job Title *</FormLabel>
                      <Input type="text" placeholder="Software Engineer" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <FormLabel className="block text-sm font-medium mb-1">Start Date *</FormLabel>
                        <Input type="text" placeholder="Jan 2020" />
                      </div>
                      <div>
                        <FormLabel className="block text-sm font-medium mb-1">End Date *</FormLabel>
                        <Input type="text" placeholder="Present" />
                      </div>
                    </div>
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Location</FormLabel>
                      <Input type="text" placeholder="City, Country" />
                    </div>
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Responsibilities & Achievements *</FormLabel>
                      <Textarea 
                        rows={4} 
                        placeholder="Describe your role, responsibilities, key achievements, and impact..."
                      />
                    </div>
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Key Projects/Initiatives (Optional)</FormLabel>
                      <Textarea 
                        rows={3} 
                        placeholder="Describe any notable projects you worked on and their outcomes..."
                      />
                    </div>
                  </div>
                </div>
                <Button type="button" variant="outline" size="sm" className="mt-2">
                  + Add Another Work Experience
                </Button>
              </div>
            )}
            
            {currentStep === 4 && (
              <div className="space-y-4 animate-fade-in">
                <div className="border p-4 rounded-md">
                  <h3 className="font-medium mb-3">Education 1</h3>
                  <div className="space-y-3">
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Degree *</FormLabel>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select degree" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bachelor">Bachelor's</SelectItem>
                          <SelectItem value="master">Master's</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                          <SelectItem value="associate">Associate's</SelectItem>
                          <SelectItem value="highschool">High School</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Institution *</FormLabel>
                      <Input type="text" placeholder="University of Example" />
                    </div>
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Field of Study/Major *</FormLabel>
                      <Input type="text" placeholder="Computer Science" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <FormLabel className="block text-sm font-medium mb-1">Start Year *</FormLabel>
                        <Input type="text" placeholder="2016" />
                      </div>
                      <div>
                        <FormLabel className="block text-sm font-medium mb-1">Graduation Year *</FormLabel>
                        <Input type="text" placeholder="2020" />
                      </div>
                    </div>
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Relevant Coursework (Optional)</FormLabel>
                      <Input type="text" placeholder="Data Structures, Algorithms, Machine Learning" />
                    </div>
                  </div>
                </div>
                <div className="border p-4 rounded-md mt-4">
                  <h3 className="font-medium mb-3">Certifications (Optional)</h3>
                  <div className="space-y-3">
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Certification Name</FormLabel>
                      <Input type="text" placeholder="AWS Certified Solutions Architect" />
                    </div>
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Issuing Organization</FormLabel>
                      <Input type="text" placeholder="Amazon Web Services" />
                    </div>
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Date Obtained</FormLabel>
                      <Input type="text" placeholder="June 2021" />
                    </div>
                  </div>
                </div>
                <Button type="button" variant="outline" size="sm" className="mt-2">
                  + Add Another Education/Certification
                </Button>
              </div>
            )}
            
            {currentStep === 5 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <FormLabel className="block text-sm font-medium mb-1">Hard Skills (Technical) *</FormLabel>
                  <Textarea 
                    rows={3} 
                    placeholder="React, JavaScript, Python, SQL, AWS, Docker, CI/CD, etc."
                  />
                  <FormDescription className="text-xs text-gray-500 mt-1">
                    List your technical or role-specific skills, separated by commas
                  </FormDescription>
                </div>
                <div>
                  <FormLabel className="block text-sm font-medium mb-1">Soft Skills *</FormLabel>
                  <Textarea 
                    rows={3} 
                    placeholder="Communication, Leadership, Problem-solving, Teamwork, Adaptability, etc."
                  />
                  <FormDescription className="text-xs text-gray-500 mt-1">
                    List your interpersonal and transferable skills, separated by commas
                  </FormDescription>
                </div>
                <div className="border p-4 rounded-md">
                  <h3 className="font-medium mb-3">Skill Proficiency (Optional)</h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <FormLabel className="block text-sm font-medium mb-1">Skill</FormLabel>
                        <Input type="text" placeholder="JavaScript" />
                      </div>
                      <div>
                        <FormLabel className="block text-sm font-medium mb-1">Proficiency</FormLabel>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="expert">Expert</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <Button type="button" variant="outline" size="sm" className="mt-3">
                    + Add Another Skill
                  </Button>
                </div>
              </div>
            )}
            
            {currentStep === 6 && (
              <div className="space-y-4 animate-fade-in">
                <div className="border p-4 rounded-md">
                  <h3 className="font-medium mb-3">Project 1 (Optional)</h3>
                  <div className="space-y-3">
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Project Title</FormLabel>
                      <Input type="text" placeholder="E-commerce Platform" />
                    </div>
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Your Role</FormLabel>
                      <Input type="text" placeholder="Lead Developer" />
                    </div>
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Description</FormLabel>
                      <Textarea 
                        rows={4} 
                        placeholder="Describe the project goals, technologies used, and outcomes..."
                      />
                    </div>
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Demo/Repository Link</FormLabel>
                      <Input type="url" placeholder="https://github.com/username/project" />
                    </div>
                  </div>
                </div>
                <Button type="button" variant="outline" size="sm" className="mt-2">
                  + Add Another Project
                </Button>
              </div>
            )}
            
            {currentStep === 7 && (
              <div className="space-y-4 animate-fade-in">
                <div className="border p-4 rounded-md">
                  <h3 className="font-medium mb-3">Extracurricular Activity/Volunteering (Optional)</h3>
                  <div className="space-y-3">
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Organization/Group</FormLabel>
                      <Input type="text" placeholder="Coding Mentorship Program" />
                    </div>
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Position/Role</FormLabel>
                      <Input type="text" placeholder="Volunteer Mentor" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <FormLabel className="block text-sm font-medium mb-1">From</FormLabel>
                        <Input type="text" placeholder="January 2022" />
                      </div>
                      <div>
                        <FormLabel className="block text-sm font-medium mb-1">To</FormLabel>
                        <Input type="text" placeholder="Present" />
                      </div>
                    </div>
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Contributions/Achievements</FormLabel>
                      <Textarea 
                        rows={3} 
                        placeholder="Describe your role and key contributions..."
                      />
                    </div>
                  </div>
                </div>
                <Button type="button" variant="outline" size="sm" className="mt-2">
                  + Add Another Activity
                </Button>
              </div>
            )}
            
            {currentStep === 8 && (
              <div className="space-y-4 animate-fade-in">
                <div className="border p-4 rounded-md">
                  <h3 className="font-medium mb-3">Award/Achievement (Optional)</h3>
                  <div className="space-y-3">
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Award Title</FormLabel>
                      <Input type="text" placeholder="Best Innovative Solution Award" />
                    </div>
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Issuing Organization</FormLabel>
                      <Input type="text" placeholder="Tech Innovation Summit" />
                    </div>
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Date</FormLabel>
                      <Input type="text" placeholder="November 2022" />
                    </div>
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Description (Optional)</FormLabel>
                      <Textarea 
                        rows={2} 
                        placeholder="Briefly describe the award criteria and your achievement..."
                      />
                    </div>
                  </div>
                </div>
                <Button type="button" variant="outline" size="sm" className="mt-2">
                  + Add Another Award
                </Button>
              </div>
            )}
            
            {currentStep === 9 && (
              <div className="space-y-4 animate-fade-in">
                <div className="border p-4 rounded-md">
                  <h3 className="font-medium mb-3">Language Proficiency</h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <FormLabel className="block text-sm font-medium mb-1">Language</FormLabel>
                        <Input type="text" placeholder="English" />
                      </div>
                      <div>
                        <FormLabel className="block text-sm font-medium mb-1">Proficiency</FormLabel>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="native">Native</SelectItem>
                            <SelectItem value="fluent">Fluent</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="basic">Basic</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <Button type="button" variant="outline" size="sm" className="mt-3">
                    + Add Another Language
                  </Button>
                </div>
              </div>
            )}
            
            {currentStep === 10 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <FormLabel className="block text-sm font-medium mb-1">Publications (Optional)</FormLabel>
                  <Textarea 
                    rows={3} 
                    placeholder="List any articles, papers, or books you've published..."
                  />
                </div>
                <div>
                  <FormLabel className="block text-sm font-medium mb-1">Speaking Engagements (Optional)</FormLabel>
                  <Textarea 
                    rows={3} 
                    placeholder="List any conferences, webinars, or events where you've spoken..."
                  />
                </div>
                <div>
                  <FormLabel className="block text-sm font-medium mb-1">Patents (Optional)</FormLabel>
                  <Textarea 
                    rows={2} 
                    placeholder="List any patents you hold or have applied for..."
                  />
                </div>
                <div>
                  <FormLabel className="block text-sm font-medium mb-1">References/Testimonials (Optional)</FormLabel>
                  <Textarea 
                    rows={3} 
                    placeholder="Add references or testimonials from colleagues or supervisors..."
                  />
                </div>
                <div>
                  <FormLabel className="block text-sm font-medium mb-1">Career Gap Explanation (Optional)</FormLabel>
                  <Textarea 
                    rows={3} 
                    placeholder="If you have gaps in your career history, you can explain them here..."
                  />
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

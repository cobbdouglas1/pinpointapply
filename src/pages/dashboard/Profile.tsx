import { useState } from 'react';
import { useForm } from 'react-hook-form';
import DashboardLayout from '@/components/dashboard/Dashboard';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Save } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

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
                {currentStep === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="email@example.com" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+1 234 567 8901" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location *</FormLabel>
                          <FormControl>
                            <Input placeholder="City, Country" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="headline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Professional Headline (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Senior Software Engineer" {...field} />
                          </FormControl>
                          <FormDescription>
                            A short title that describes your professional identity
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="linkedin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>LinkedIn (Optional)</FormLabel>
                          <FormControl>
                            <Input type="url" placeholder="https://linkedin.com/in/username" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="github"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>GitHub/Portfolio (Optional)</FormLabel>
                          <FormControl>
                            <Input type="url" placeholder="https://github.com/username" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {currentStep === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <FormField
                      control={form.control}
                      name="careerObjective"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Career Objective/Personal Summary *</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={5} 
                              placeholder="Write a brief summary of your career goals, professional identity, and what makes you unique..."
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            This will appear at the top of your CV and helps employers understand your professional brand
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {currentStep === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="border p-4 rounded-md">
                      <h3 className="font-medium mb-3">Work Experience 1</h3>
                      <div className="space-y-3">
                        <div>
                          <Label className="block text-sm font-medium mb-1">Company/Organization *</Label>
                          <Input type="text" placeholder="Company Inc." />
                        </div>
                        <div>
                          <Label className="block text-sm font-medium mb-1">Job Title *</Label>
                          <Input type="text" placeholder="Software Engineer" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="block text-sm font-medium mb-1">Start Date *</Label>
                            <Input type="text" placeholder="Jan 2020" />
                          </div>
                          <div>
                            <Label className="block text-sm font-medium mb-1">End Date *</Label>
                            <Input type="text" placeholder="Present" />
                          </div>
                        </div>
                        <div>
                          <Label className="block text-sm font-medium mb-1">Location</Label>
                          <Input type="text" placeholder="City, Country" />
                        </div>
                        <div>
                          <Label className="block text-sm font-medium mb-1">Responsibilities & Achievements *</Label>
                          <Textarea 
                            rows={4} 
                            placeholder="Describe your role, responsibilities, key achievements, and impact..."
                          />
                        </div>
                        <div>
                          <Label className="block text-sm font-medium mb-1">Key Projects/Initiatives (Optional)</Label>
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
                          <Label className="block text-sm font-medium mb-1">Degree *</Label>
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
                          <Label className="block text-sm font-medium mb-1">Institution *</Label>
                          <Input type="text" placeholder="University of Example" />
                        </div>
                        <div>
                          <Label className="block text-sm font-medium mb-1">Field of Study/Major *</Label>
                          <Input type="text" placeholder="Computer Science" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="block text-sm font-medium mb-1">Start Year *</Label>
                            <Input type="text" placeholder="2016" />
                          </div>
                          <div>
                            <Label className="block text-sm font-medium mb-1">Graduation Year *</Label>
                            <Input type="text" placeholder="2020" />
                          </div>
                        </div>
                        <div>
                          <Label className="block text-sm font-medium mb-1">Relevant Coursework (Optional)</Label>
                          <Input type="text" placeholder="Data Structures, Algorithms, Machine Learning" />
                        </div>
                      </div>
                    </div>
                    <div className="border p-4 rounded-md mt-4">
                      <h3 className="font-medium mb-3">Certifications (Optional)</h3>
                      <div className="space-y-3">
                        <div>
                          <Label className="block text-sm font-medium mb-1">Certification Name</Label>
                          <Input type="text" placeholder="AWS Certified Solutions Architect" />
                        </div>
                        <div>
                          <Label className="block text-sm font-medium mb-1">Issuing Organization</Label>
                          <Input type="text" placeholder="Amazon Web Services" />
                        </div>
                        <div>
                          <Label className="block text-sm font-medium mb-1">Date Obtained</Label>
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
                      <Label className="block text-sm font-medium mb-1">Hard Skills (Technical) *</Label>
                      <Textarea 
                        rows={3} 
                        placeholder="React, JavaScript, Python, SQL, AWS, Docker, CI/CD, etc."
                      />
                      <FormDescription className="text-xs text-gray-500 mt-1">
                        List your technical or role-specific skills, separated by commas
                      </FormDescription>
                    </div>
                    <div>
                      <Label className="block text-sm font-medium mb-1">Soft Skills *</Label>
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
                            <Label className="block text-sm font-medium mb-1">Skill</Label>
                            <Input type="text" placeholder="JavaScript" />
                          </div>
                          <div>
                            <Label className="block text-sm font-medium mb-1">Proficiency</Label>
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
                          <Label className="block text-sm font-medium mb-1">Project Title</Label>
                          <Input type="text" placeholder="E-commerce Platform" />
                        </div>
                        <div>
                          <Label className="block text-sm font-medium mb-1">Your Role</Label>
                          <Input type="text" placeholder="Lead Developer" />
                        </div>
                        <div>
                          <Label className="block text-sm font-medium mb-1">Description</Label>
                          <Textarea 
                            rows={4} 
                            placeholder="Describe the project goals, technologies used, and outcomes..."
                          />
                        </div>
                        <div>
                          <Label className="block text-sm font-medium mb-1">Demo/Repository Link</Label>
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
                          <Label className="block text-sm font-medium mb-1">Organization/Group</Label>
                          <Input type="text" placeholder="Coding Mentorship Program" />
                        </div>
                        <div>
                          <Label className="block text-sm font-medium mb-1">Position/Role</Label>
                          <Input type="text" placeholder="Volunteer Mentor" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="block text-sm font-medium mb-1">From</Label>
                            <Input type="text" placeholder="January 2022" />
                          </div>
                          <div>
                            <Label className="block text-sm font-medium mb-1">To</Label>
                            <Input type="text" placeholder="Present" />
                          </div>
                        </div>
                        <div>
                          <Label className="block text-sm font-medium mb-1">Contributions/Achievements</Label>
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
                          <Label className="block text-sm font-medium mb-1">Award Title</Label>
                          <Input type="text" placeholder="Best Innovative Solution Award" />
                        </div>
                        <div>
                          <Label className="block text-sm font-medium mb-1">Issuing Organization</Label>
                          <Input type="text" placeholder="Tech Innovation Summit" />
                        </div>
                        <div>
                          <Label className="block text-sm font-medium mb-1">Date</Label>
                          <Input type="text" placeholder="November 2022" />
                        </div>
                        <div>
                          <Label className="block text-sm font-medium mb-1">Description (Optional)</Label>
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
                            <Label className="block text-sm font-medium mb-1">Language</Label>
                            <Input type="text" placeholder="English" />
                          </div>
                          <div>
                            <Label className="block text-sm font-medium mb-1">Proficiency</Label>
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
                      <Label className="block text-sm font-medium mb-1">Publications (Optional)</Label>
                      <Textarea 
                        rows={3} 
                        placeholder="List any articles, papers, or books you've published..."
                      />
                    </div>
                    <div>
                      <Label className="block text-sm font-medium mb-1">Speaking Engagements (Optional)</Label>
                      <Textarea 
                        rows={3} 
                        placeholder="List any conferences, webinars, or events where you've spoken..."
                      />
                    </div>
                    <div>
                      <Label className="block text-sm font-medium mb-1">Patents (Optional)</Label>
                      <Textarea 
                        rows={2} 
                        placeholder="List any patents you hold or have applied for..."
                      />
                    </div>
                    <div>
                      <Label className="block text-sm font-medium mb-1">References/Testimonials (Optional)</Label>
                      <Textarea 
                        rows={3} 
                        placeholder="Add references or testimonials from colleagues or supervisors..."
                      />
                    </div>
                    <div>
                      <Label className="block text-sm font-medium mb-1">Career Gap Explanation (Optional)</Label>
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

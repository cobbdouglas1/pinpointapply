
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import DashboardLayout from '@/components/dashboard/Dashboard';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FilePenLine, Download, Edit, Plus } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';

const CoverLetter = () => {
  const [selectedCV, setSelectedCV] = useState<string | null>(null);
  
  const form = useForm({
    defaultValues: {
      selectedCV: "",
      companyInfo: "",
      recipient: "",
      style: "",
      customization: "",
      opportunity: "",
      valueProposition: "",
      personalTouch: ""
    }
  });
  
  return (
    <DashboardLayout title="Cover Letter Generator">
      <div className="grid grid-cols-1 gap-6 animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle>Create a Cover Letter</CardTitle>
            <CardDescription>
              Generate a personalized cover letter based on your CV and job description
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(() => console.log("Cover letter generated"))}>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-3">1. Select a CV</h3>
                  <Select onValueChange={value => setSelectedCV(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose a CV template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="frontend">Frontend Developer CV</SelectItem>
                      <SelectItem value="ux">UX Designer CV</SelectItem>
                      <SelectItem value="product">Product Manager CV</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-3">2. Job Application Details</h3>
                  <div className="space-y-4">
                    <div>
                      <Label className="block text-sm font-medium mb-1">Company/Team-Related Information</Label>
                      <Textarea 
                        className="w-full" 
                        rows={3} 
                        placeholder="Add researched information about the company culture, team dynamics, or any insider information that could help personalize your cover letter..."
                      />
                    </div>
                    <div>
                      <Label className="block text-sm font-medium mb-1">Recipient (if known)</Label>
                      <input type="text" className="w-full p-2 border rounded-md" placeholder="Hiring Manager / Name" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-3">3. Cover Letter Style</h3>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose a style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="creative">Creative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="block text-sm font-medium mb-1">Additional Customization Instructions</Label>
                  <Textarea 
                    className="w-full" 
                    rows={2} 
                    placeholder="Any specific instructions on how you want your cover letter to be customized..."
                  />
                </div>
                
                <div>
                  <Label className="block text-sm font-medium mb-1">Why This Opportunity Excites You</Label>
                  <Textarea 
                    className="w-full" 
                    rows={3} 
                    placeholder="Write 3-5 sentences explaining why you're excited about this specific opportunity and what attracts you to the company..."
                  />
                </div>
                
                <div>
                  <Label className="block text-sm font-medium mb-1">Your Personal Value Proposition</Label>
                  <Textarea 
                    className="w-full" 
                    rows={3} 
                    placeholder="Describe in 3-5 sentences what unique strengths, skills, or experiences you bring to the role..."
                  />
                </div>
                
                <div>
                  <Label className="block text-sm font-medium mb-1">Optional Personal Touch</Label>
                  <Textarea 
                    className="w-full" 
                    rows={2} 
                    placeholder="Share any personal anecdotes, fun facts, or brief stories (2-3 sentences) that showcase your personality..."
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" disabled={!selectedCV} type="submit">
                  <FilePenLine className="mr-2 h-4 w-4" /> Generate Cover Letter
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
        
        <h2 className="text-xl font-semibold mt-2">Recent Cover Letters</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Google Application</CardTitle>
              <CardDescription>Frontend Developer - May 15, 2023</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="aspect-[3/4] bg-white border rounded-md mb-2 overflow-hidden">
                <div className="h-full w-full bg-gray-50 p-3">
                  <div className="h-2 w-1/3 bg-gray-200 rounded mb-3 ml-auto"></div>
                  <div className="h-2 w-1/2 bg-gray-200 rounded mb-4"></div>
                  <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                  <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                  <div className="h-2 w-4/5 bg-gray-200 rounded mb-3"></div>
                  <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                  <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                  <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                  <div className="h-2 w-2/3 bg-gray-200 rounded mb-4"></div>
                  <div className="h-2 w-1/3 bg-gray-200 rounded ml-4"></div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Edit className="mr-1 h-3 w-3" /> Edit
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-1 h-3 w-3" /> Download
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Adobe Application</CardTitle>
              <CardDescription>UX Designer - May 10, 2023</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="aspect-[3/4] bg-white border rounded-md mb-2 overflow-hidden">
                <div className="h-full w-full bg-gray-50 p-3">
                  <div className="h-2 w-1/3 bg-gray-200 rounded mb-3 ml-auto"></div>
                  <div className="h-2 w-1/2 bg-gray-200 rounded mb-4"></div>
                  <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                  <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                  <div className="h-2 w-4/5 bg-gray-200 rounded mb-3"></div>
                  <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Edit className="mr-1 h-3 w-3" /> Edit
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-1 h-3 w-3" /> Download
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="border-dashed border-2 hover:border-primary/30 transition-colors flex flex-col items-center justify-center p-6 cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Plus className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-1">New Cover Letter</h3>
            <p className="text-gray-500 text-sm text-center">Create a cover letter for a new job application</p>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CoverLetter;


import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/Dashboard';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FilePenLine, Download, Edit, Plus } from 'lucide-react';

const CoverLetter = () => {
  const [selectedCV, setSelectedCV] = useState<string | null>(null);
  
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
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-3">1. Select a CV</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div 
                  className={`border rounded-md p-3 cursor-pointer transition-all ${selectedCV === 'frontend' ? 'border-primary ring-1 ring-primary/20' : 'hover:border-gray-300'}`}
                  onClick={() => setSelectedCV('frontend')}
                >
                  <div className="aspect-[3/4] bg-white border rounded-md p-2 mb-2">
                    <div className="h-3 w-20 bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                    <div className="h-2 w-4/5 bg-gray-200 rounded mb-3"></div>
                  </div>
                  <div className="text-center text-sm font-medium">Frontend Developer CV</div>
                </div>
                
                <div 
                  className={`border rounded-md p-3 cursor-pointer transition-all ${selectedCV === 'ux' ? 'border-primary ring-1 ring-primary/20' : 'hover:border-gray-300'}`}
                  onClick={() => setSelectedCV('ux')}
                >
                  <div className="aspect-[3/4] bg-white border rounded-md p-2 mb-2">
                    <div className="flex mb-2">
                      <div className="w-1/3 bg-gray-100 h-full py-2 px-1">
                        <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                      </div>
                      <div className="w-2/3 p-1">
                        <div className="h-2.5 w-1/2 bg-gray-200 rounded mb-2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-sm font-medium">UX Designer CV</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-3">2. Job Application Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Company Name</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Company Inc." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Position</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Frontend Developer" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Key Requirements</label>
                  <textarea className="w-full p-2 border rounded-md" rows={3} placeholder="List the key requirements from the job post..."></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Recipient (if known)</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Hiring Manager / Name" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-3">3. Cover Letter Style</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="border rounded-md p-3 cursor-pointer bg-gray-50">
                  <div className="text-center text-sm font-medium">Professional</div>
                </div>
                <div className="border rounded-md p-3 cursor-pointer">
                  <div className="text-center text-sm font-medium">Friendly</div>
                </div>
                <div className="border rounded-md p-3 cursor-pointer">
                  <div className="text-center text-sm font-medium">Enthusiastic</div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled={!selectedCV}>
              <FilePenLine className="mr-2 h-4 w-4" /> Generate Cover Letter
            </Button>
          </CardFooter>
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

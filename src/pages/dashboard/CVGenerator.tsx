
import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/Dashboard';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Edit, Plus, FileText, Upload } from 'lucide-react';

const CVGenerator = () => {
  const [activeTab, setActiveTab] = useState<'create' | 'templates'>('create');
  
  return (
    <DashboardLayout title="CV Generator">
      <div className="grid grid-cols-1 gap-6 animate-fade-in">
        <div className="flex space-x-4 mb-2">
          <Button 
            variant={activeTab === 'create' ? 'default' : 'outline'} 
            onClick={() => setActiveTab('create')}
            className="relative"
          >
            Create New CV
            {activeTab === 'create' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
            )}
          </Button>
          <Button 
            variant={activeTab === 'templates' ? 'default' : 'outline'} 
            onClick={() => setActiveTab('templates')}
            className="relative"
          >
            My Templates
            {activeTab === 'templates' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
            )}
          </Button>
        </div>
        
        {activeTab === 'create' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Details</CardTitle>
                <CardDescription>
                  Enter the job you're applying for to customize your CV
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Job Title</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Software Engineer" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Company</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Company Inc." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Job Description</label>
                  <div className="flex">
                    <textarea className="w-full p-2 border rounded-l-md" rows={4} placeholder="Paste job description here..."></textarea>
                    <button className="bg-gray-100 px-3 rounded-r-md border-t border-r border-b flex items-center justify-center text-gray-600">
                      <Upload size={16} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Or upload the job description as a PDF/DOC
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Key Skills Required</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="React, JavaScript, Team Leadership" />
                  <p className="text-xs text-gray-500 mt-1">
                    Comma-separated list of skills mentioned in the job description
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>CV Template</CardTitle>
                <CardDescription>
                  Choose a template for your CV
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border rounded-md p-3 cursor-pointer bg-gray-50">
                    <div className="aspect-[3/4] bg-white border rounded-md p-2 mb-2">
                      <div className="h-3 w-20 bg-gray-200 rounded mb-2"></div>
                      <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                      <div className="h-2 w-4/5 bg-gray-200 rounded mb-3"></div>
                      <div className="h-2.5 w-1/3 bg-gray-300 rounded mb-2"></div>
                      <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                      <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                    </div>
                    <div className="text-center text-sm font-medium">Professional</div>
                  </div>
                  
                  <div className="border rounded-md p-3 cursor-pointer">
                    <div className="aspect-[3/4] bg-white border rounded-md p-2 mb-2">
                      <div className="flex mb-2">
                        <div className="w-1/3 bg-gray-100 h-full py-2 px-1">
                          <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                          <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                        </div>
                        <div className="w-2/3 p-1">
                          <div className="h-2.5 w-1/2 bg-gray-200 rounded mb-2"></div>
                          <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-sm font-medium">Modern</div>
                  </div>
                  
                  <div className="border rounded-md p-3 cursor-pointer">
                    <div className="aspect-[3/4] bg-white border rounded-md p-2 mb-2">
                      <div className="h-4 w-full bg-gray-200 rounded-sm mb-2"></div>
                      <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                      <div className="h-2 w-4/5 bg-gray-200 rounded mb-3"></div>
                      <div className="h-2.5 w-1/3 bg-gray-300 rounded mb-2"></div>
                      <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                    </div>
                    <div className="text-center text-sm font-medium">Classic</div>
                  </div>
                  
                  <div className="border rounded-md p-3 cursor-pointer">
                    <div className="aspect-[3/4] bg-white border rounded-md p-2 mb-2">
                      <div className="h-5 w-1/3 bg-gray-300 rounded mb-2 mx-auto"></div>
                      <div className="h-2 w-4/5 bg-gray-200 rounded mb-3 mx-auto"></div>
                      <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                      <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                    </div>
                    <div className="text-center text-sm font-medium">Minimal</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <FileText className="mr-2 h-4 w-4" /> Generate CV
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
        
        {activeTab === 'templates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Frontend Developer CV</CardTitle>
                <CardDescription>Google - Last edited 2 days ago</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="aspect-[3/4] bg-white border rounded-md mb-2 overflow-hidden">
                  <div className="h-full w-full bg-gray-50 p-2">
                    <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                    <div className="h-2 w-4/5 bg-gray-200 rounded mb-3"></div>
                    <div className="h-3 w-1/3 bg-gray-300 rounded mb-2"></div>
                    <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
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
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">UX Designer CV</CardTitle>
                <CardDescription>Adobe - Last edited 1 week ago</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="aspect-[3/4] bg-white border rounded-md mb-2 overflow-hidden">
                  <div className="h-full w-full bg-gray-50 p-2">
                    <div className="flex mb-2">
                      <div className="w-1/3 bg-gray-100 h-full py-2 px-1">
                        <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                        <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                      </div>
                      <div className="w-2/3 p-1">
                        <div className="h-2.5 w-1/2 bg-gray-200 rounded mb-2"></div>
                        <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                      </div>
                    </div>
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
              <h3 className="font-medium text-lg mb-1">Create New CV</h3>
              <p className="text-gray-500 text-sm text-center">Tailor a new CV for a specific job application</p>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CVGenerator;

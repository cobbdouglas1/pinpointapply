
import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/Dashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Download, Edit, FileText, FilePenLine, Filter } from 'lucide-react';

const History = () => {
  const [filter, setFilter] = useState<'all' | 'cv' | 'cover-letter'>('all');
  
  return (
    <DashboardLayout title="Application History">
      <div className="grid grid-cols-1 gap-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search applications..."
              className="w-full pl-9 pr-4 py-2 border rounded-md"
            />
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button
              variant={filter === 'cv' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('cv')}
            >
              <FileText className="mr-1 h-4 w-4" /> CVs
            </Button>
            <Button
              variant={filter === 'cover-letter' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('cover-letter')}
            >
              <FilePenLine className="mr-1 h-4 w-4" /> Cover Letters
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Document</th>
                    <th className="text-left py-3 px-4 font-medium">Company</th>
                    <th className="text-left py-3 px-4 font-medium">Position</th>
                    <th className="text-left py-3 px-4 font-medium">Created</th>
                    <th className="text-left py-3 px-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <FileText className="text-primary mr-2 h-4 w-4" />
                        <span>Frontend Developer CV</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">Google</td>
                    <td className="py-3 px-4">Senior Frontend Developer</td>
                    <td className="py-3 px-4">May 15, 2023</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <FilePenLine className="text-primary mr-2 h-4 w-4" />
                        <span>Google Cover Letter</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">Google</td>
                    <td className="py-3 px-4">Senior Frontend Developer</td>
                    <td className="py-3 px-4">May 15, 2023</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <FileText className="text-primary mr-2 h-4 w-4" />
                        <span>UX Designer CV</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">Adobe</td>
                    <td className="py-3 px-4">Senior UX Designer</td>
                    <td className="py-3 px-4">May 10, 2023</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <FilePenLine className="text-primary mr-2 h-4 w-4" />
                        <span>Adobe Cover Letter</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">Adobe</td>
                    <td className="py-3 px-4">Senior UX Designer</td>
                    <td className="py-3 px-4">May 10, 2023</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <FileText className="text-primary mr-2 h-4 w-4" />
                        <span>Product Manager CV</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">Microsoft</td>
                    <td className="py-3 px-4">Product Manager</td>
                    <td className="py-3 px-4">April 28, 2023</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-6">
              <Button variant="outline" size="sm" className="mx-1">Previous</Button>
              <Button variant="outline" size="sm" className="mx-1 bg-primary/10">1</Button>
              <Button variant="outline" size="sm" className="mx-1">2</Button>
              <Button variant="outline" size="sm" className="mx-1">3</Button>
              <Button variant="outline" size="sm" className="mx-1">Next</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default History;

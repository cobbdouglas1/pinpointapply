
import DashboardLayout from '@/components/dashboard/Dashboard';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';

const Settings = () => {
  return (
    <DashboardLayout title="Settings">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
        <div className="md:col-span-3">
          <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" className="w-full p-2 border rounded-md" defaultValue="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full p-2 border rounded-md" defaultValue="john.doe@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input type="tel" className="w-full p-2 border rounded-md" placeholder="(123) 456-7890" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" /> Save Changes
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Update your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Current Password</label>
                <input type="password" className="w-full p-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">New Password</label>
                <input type="password" className="w-full p-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                <input type="password" className="w-full p-2 border rounded-md" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Update Password</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage your notification settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-500">Receive emails for important updates</p>
                  </div>
                  <div className="h-6 w-11 rounded-full bg-primary relative cursor-pointer">
                    <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white"></span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Application Reminders</h3>
                    <p className="text-sm text-gray-500">Get reminders for pending applications</p>
                  </div>
                  <div className="h-6 w-11 rounded-full bg-gray-200 relative cursor-pointer">
                    <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white"></span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Marketing Updates</h3>
                    <p className="text-sm text-gray-500">Receive marketing emails and promotions</p>
                  </div>
                  <div className="h-6 w-11 rounded-full bg-gray-200 relative cursor-pointer">
                    <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white"></span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Subscription</CardTitle>
              <CardDescription>Manage your subscription plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-primary">Free Plan</h3>
                    <p className="text-sm text-gray-600 mt-1">1 Career Profile, 3 CVs & 3 Cover Letters/month</p>
                  </div>
                  <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Active</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">Upgrade your plan</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border rounded-lg p-3 cursor-pointer hover:border-primary/40 transition-colors">
                    <div className="font-medium">Pro Plan</div>
                    <div className="text-sm text-gray-500">$12/month</div>
                  </div>
                  <div className="border rounded-lg p-3 cursor-pointer hover:border-primary/40 transition-colors">
                    <div className="font-medium">Premium Plan</div>
                    <div className="text-sm text-gray-500">$29/month</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Upgrade Subscription</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;

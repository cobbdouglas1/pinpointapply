
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/Dashboard';

const Dashboard = () => {
  const [title] = useState('Dashboard');
  
  return (
    <DashboardLayout title={title}>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Welcome to PinPoint Apply</h2>
          <p className="text-gray-600">
            Select a tab from the sidebar to get started with your job application process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Career Profile</h3>
              <div className="text-yellow-500 bg-yellow-50 text-xs px-2 py-1 rounded-full">In Progress</div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Complete your career profile to get personalized job recommendations.</p>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-400 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="mt-2 text-sm text-gray-500">60% Complete</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">CV Generator</h3>
              <div className="text-blue-500 bg-blue-50 text-xs px-2 py-1 rounded-full">Ready</div>
            </div>
            <p className="text-sm text-gray-600">Generate tailored CVs for specific job positions.</p>
            <button className="mt-4 w-full py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-lg hover:bg-primary/20 transition-colors">
              Create New CV
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Cover Letters</h3>
              <div className="text-gray-500 bg-gray-100 text-xs px-2 py-1 rounded-full">Pending</div>
            </div>
            <p className="text-sm text-gray-600">Create a CV first to generate a matching cover letter.</p>
            <button disabled className="mt-4 w-full py-1.5 bg-gray-100 text-gray-400 text-sm font-medium rounded-lg cursor-not-allowed">
              Create Cover Letter
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Recent Activity</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-gray-600">Profile updated</span>
                <span className="ml-auto text-gray-400 text-xs">2h ago</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-gray-600">CV template changed</span>
                <span className="ml-auto text-gray-400 text-xs">1d ago</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-gray-600">Account created</span>
                <span className="ml-auto text-gray-400 text-xs">2d ago</span>
              </div>
            </div>
          </div>
        </div>
        
        <Outlet />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

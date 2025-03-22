
import { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface DashboardProps {
  children: ReactNode;
  title: string;
}

const Dashboard = ({ children, title }: DashboardProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden transition-all">
        {/* Top bar */}
        <div className="bg-white border-b border-gray-200 shadow-sm z-10">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center">
              {!isMobile && (
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                >
                  <Menu size={20} />
                </button>
              )}
              <h1 className="ml-3 text-xl font-semibold text-gray-900">{title}</h1>
            </div>
            <div className="flex items-center space-x-4">
              {/* User profile, notifications, etc could go here */}
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-sm font-medium text-primary">JD</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

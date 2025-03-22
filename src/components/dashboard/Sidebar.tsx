
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  User,
  FileText,
  FilePenLine,
  ClockHistory,
  Settings,
  LogOut,
  HelpCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const navItems = [
  {
    title: 'Career Profile',
    path: '/dashboard/profile',
    icon: User,
  },
  {
    title: 'CV Generator',
    path: '/dashboard/cv',
    icon: FileText,
  },
  {
    title: 'Cover Letter Generator',
    path: '/dashboard/cover-letter',
    icon: FilePenLine,
  },
  {
    title: 'History',
    path: '/dashboard/history',
    icon: ClockHistory,
  },
];

const bottomNavItems = [
  {
    title: 'Settings',
    path: '/dashboard/settings',
    icon: Settings,
  },
  {
    title: 'Help & Support',
    path: '/dashboard/help',
    icon: HelpCircle,
  },
];

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Mobile drawer handling
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  useEffect(() => {
    setIsDrawerOpen(isOpen && isMobile);
  }, [isOpen, isMobile]);
  
  const toggleDrawer = () => {
    setIsAnimating(true);
    toggleSidebar();
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  // For mobile, render a slide-over drawer
  if (isMobile) {
    return (
      <>
        {/* Mobile drawer backdrop */}
        {isDrawerOpen && (
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
            onClick={toggleDrawer}
          />
        )}
        
        {/* Mobile drawer */}
        <div 
          className={cn(
            "fixed inset-y-0 left-0 w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out",
            isDrawerOpen ? "translate-x-0" : "-translate-x-full",
            isAnimating && "transition-transform"
          )}
        >
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <Link to="/" className="flex items-center">
              <div className="text-primary font-bold text-lg mr-1">PinPoint</div>
              <div className="font-medium text-lg">Apply</div>
            </Link>
            <button
              onClick={toggleDrawer}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="h-full flex flex-col justify-between py-4">
            <nav className="px-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className={cn(
                    "group flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive(item.path)
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <item.icon 
                    className={cn(
                      "w-5 h-5 mr-3 transition-colors",
                      isActive(item.path)
                        ? "text-primary"
                        : "text-gray-500 group-hover:text-gray-700"
                    )}
                  />
                  {item.title}
                </Link>
              ))}
            </nav>
            
            <div className="px-2 space-y-1">
              {bottomNavItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className={cn(
                    "group flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive(item.path)
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <item.icon 
                    className={cn(
                      "w-5 h-5 mr-3 transition-colors",
                      isActive(item.path)
                        ? "text-primary"
                        : "text-gray-500 group-hover:text-gray-700"
                    )}
                  />
                  {item.title}
                </Link>
              ))}
              <div className="px-3 py-2 mt-4">
                <div className="border-t border-gray-200 pt-4">
                  <button className="flex items-center text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                    <LogOut className="w-5 h-5 mr-3 text-gray-500" />
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile menu button */}
        {!isDrawerOpen && (
          <button
            className="fixed bottom-4 left-4 z-40 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
            onClick={toggleDrawer}
          >
            <ChevronRight size={20} />
          </button>
        )}
      </>
    );
  }
  
  // For desktop, render a collapsible sidebar
  return (
    <div 
      className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <div className={cn(
        "flex items-center h-16 px-4 border-b border-gray-200 transition-all duration-300",
        !isOpen && "justify-center"
      )}>
        {isOpen && (
          <Link to="/" className="flex items-center">
            <div className="text-primary font-bold text-lg mr-1">PinPoint</div>
            <div className="font-medium text-lg">Apply</div>
          </Link>
        )}
        {!isOpen && (
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">P</span>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className={cn(
            "p-1.5 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none transition-all",
            isOpen ? "ml-auto" : "mt-4"
          )}
        >
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>
      
      <div className="flex-1 flex flex-col justify-between py-4 overflow-y-auto">
        <nav className="px-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className={cn(
                "group flex items-center rounded-md text-sm font-medium transition-colors",
                isOpen ? "px-3 py-2" : "px-3 py-2 justify-center",
                isActive(item.path)
                  ? "bg-primary/10 text-primary"
                  : "text-gray-700 hover:bg-gray-100"
              )}
              title={!isOpen ? item.title : undefined}
            >
              <item.icon 
                className={cn(
                  "transition-colors",
                  isOpen ? "w-5 h-5 mr-3" : "w-6 h-6",
                  isActive(item.path)
                    ? "text-primary"
                    : "text-gray-500 group-hover:text-gray-700"
                )}
              />
              {isOpen && item.title}
            </Link>
          ))}
        </nav>
        
        <div className="px-2 space-y-1">
          {bottomNavItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className={cn(
                "group flex items-center rounded-md text-sm font-medium transition-colors",
                isOpen ? "px-3 py-2" : "px-3 py-2 justify-center",
                isActive(item.path)
                  ? "bg-primary/10 text-primary"
                  : "text-gray-700 hover:bg-gray-100"
              )}
              title={!isOpen ? item.title : undefined}
            >
              <item.icon 
                className={cn(
                  "transition-colors",
                  isOpen ? "w-5 h-5 mr-3" : "w-6 h-6",
                  isActive(item.path)
                    ? "text-primary"
                    : "text-gray-500 group-hover:text-gray-700"
                )}
              />
              {isOpen && item.title}
            </Link>
          ))}
          <div className={cn(
            "px-3 py-2 mt-4",
            !isOpen && "flex justify-center"
          )}>
            <div className={cn(
              "border-t border-gray-200 pt-4",
              !isOpen && "flex justify-center"
            )}>
              <Link 
                to="/logout" 
                className={cn(
                  "flex items-center text-sm font-medium text-gray-700 hover:text-primary transition-colors",
                  !isOpen && "justify-center"
                )}
                title={!isOpen ? "Log Out" : undefined}
              >
                <LogOut className={cn(
                  "text-gray-500",
                  isOpen ? "w-5 h-5 mr-3" : "w-6 h-6"
                )} />
                {isOpen && "Log Out"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

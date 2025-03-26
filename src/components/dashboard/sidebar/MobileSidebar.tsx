
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SidebarProps, navItems, bottomNavItems } from './types';
import { useAuth } from '@/services/authService';

const MobileSidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);
  const { handleSignOut } = useAuth();
  
  useEffect(() => {
    setIsDrawerOpen(isOpen);
  }, [isOpen]);
  
  const toggleDrawer = () => {
    setIsAnimating(true);
    toggleSidebar();
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };
  
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
            <img src="/lovable-uploads/e90c4387-4554-47b1-a0fd-99da01b27d96.png" alt="PinPoint Apply" className="h-8" />
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
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <NavLink
                  key={item.title}
                  to={item.path}
                  className={({ isActive }) => cn(
                    "group flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      <IconComponent 
                        className={cn(
                          "w-5 h-5 mr-3 transition-colors",
                          isActive
                            ? "text-primary"
                            : "text-gray-500 group-hover:text-gray-700"
                        )}
                      />
                      {item.title}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
          
          <div className="px-2 space-y-1">
            {bottomNavItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <NavLink
                  key={item.title}
                  to={item.path}
                  className={({ isActive }) => cn(
                    "group flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      <IconComponent 
                        className={cn(
                          "w-5 h-5 mr-3 transition-colors",
                          isActive
                            ? "text-primary"
                            : "text-gray-500 group-hover:text-gray-700"
                        )}
                      />
                      {item.title}
                    </>
                  )}
                </NavLink>
              );
            })}
            <div className="px-3 py-2 mt-4">
              <div className="border-t border-gray-200 pt-4">
                <button 
                  onClick={handleSignOut}
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                >
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
};

export default MobileSidebar;

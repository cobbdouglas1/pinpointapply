
import { Link, NavLink } from 'react-router-dom';
import { ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SidebarProps, navItems, bottomNavItems } from './types';

const DesktopSidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
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
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) => cn(
                  "group flex items-center rounded-md text-sm font-medium transition-all duration-200",
                  isOpen ? "px-3 py-2" : "px-3 py-2 justify-center",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 hover:bg-gray-100"
                )}
                title={!isOpen ? item.title : undefined}
              >
                {({ isActive }) => (
                  <>
                    <IconComponent 
                      className={cn(
                        "transition-colors",
                        isOpen ? "w-5 h-5 mr-3" : "w-6 h-6",
                        isActive
                          ? "text-primary"
                          : "text-gray-500 group-hover:text-gray-700"
                      )}
                    />
                    {isOpen && item.title}
                    {isActive && !isOpen && (
                      <span className="absolute left-0 w-1 h-8 bg-primary rounded-r-full"></span>
                    )}
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
                  "group flex items-center rounded-md text-sm font-medium transition-all duration-200",
                  isOpen ? "px-3 py-2" : "px-3 py-2 justify-center",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 hover:bg-gray-100"
                )}
                title={!isOpen ? item.title : undefined}
              >
                {({ isActive }) => (
                  <>
                    <IconComponent 
                      className={cn(
                        "transition-colors",
                        isOpen ? "w-5 h-5 mr-3" : "w-6 h-6",
                        isActive
                          ? "text-primary"
                          : "text-gray-500 group-hover:text-gray-700"
                      )}
                    />
                    {isOpen && item.title}
                    {isActive && !isOpen && (
                      <span className="absolute left-0 w-1 h-8 bg-primary rounded-r-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
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

export default DesktopSidebar;

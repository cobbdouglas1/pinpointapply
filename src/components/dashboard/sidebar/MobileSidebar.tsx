
import { Link, useLocation } from 'react-router-dom';
import { Fragment } from 'react';
import {
  UserCircle,
  FileText,
  Clock,
  Settings,
  HelpCircle,
  X,
  LogOut,
  FileUp,
} from 'lucide-react';
import { SidebarProps } from './types';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose
} from '@/components/ui/sheet';

const MobileSidebar = ({ isOpen, toggleSidebar, onLogout }: SidebarProps) => {
  const location = useLocation();
  
  const navItems = [
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: <FileText size={20} />,
      exact: true,
    },
    {
      label: 'Career Profile',
      path: '/dashboard/profile',
      icon: <UserCircle size={20} />,
    },
    {
      label: 'CV Generator',
      path: '/dashboard/cv',
      icon: <FileText size={20} />,
    },
    {
      label: 'Cover Letter Generator',
      path: '/dashboard/cover-letter',
      icon: <FileUp size={20} />,
    },
    {
      label: 'History',
      path: '/dashboard/history',
      icon: <Clock size={20} />,
    },
  ];
  
  const bottomNavItems = [
    {
      label: 'Settings',
      path: '/dashboard/settings',
      icon: <Settings size={20} />,
    },
    {
      label: 'Help & Support',
      path: '/dashboard/help',
      icon: <HelpCircle size={20} />,
    },
  ];
  
  const isActive = (path: string, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };
  
  return (
    <Sheet open={isOpen} onOpenChange={toggleSidebar}>
      <SheetContent side="left" className="w-[300px] sm:w-[300px] p-0">
        <div className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
          <div className="px-4 flex items-center justify-between">
            <Link to="/" className="flex items-center" onClick={toggleSidebar}>
              <img src="/lovable-uploads/6760be0d-efdd-46aa-b7de-c33b7bc0fe59.png" alt="PinPoint Apply" className="h-8" />
              <span className="ml-2 text-lg font-medium">PinPoint Apply</span>
            </Link>
            <SheetClose className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary">
              <X className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Close panel</span>
            </SheetClose>
          </div>
          <div className="relative mt-6 flex-1 px-4">
            <nav className="flex-1">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center px-2 py-2 text-base font-medium rounded-lg ${
                        isActive(item.path, item.exact)
                          ? 'bg-primary/10 text-primary'
                          : 'text-gray-700 hover:bg-gray-100'
                      } transition-colors`}
                      onClick={toggleSidebar}
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span className="ml-3">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Settings
                </p>
                <ul className="mt-2 space-y-1">
                  {bottomNavItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`flex items-center px-2 py-2 text-base font-medium rounded-lg ${
                          isActive(item.path)
                            ? 'bg-primary/10 text-primary'
                            : 'text-gray-700 hover:bg-gray-100'
                        } transition-colors`}
                        onClick={toggleSidebar}
                      >
                        <span className="flex-shrink-0">{item.icon}</span>
                        <span className="ml-3">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                  
                  {/* Log out button */}
                  <li>
                    <button
                      onClick={() => {
                        toggleSidebar();
                        onLogout();
                      }}
                      className="flex items-center w-full px-2 py-2 text-base font-medium rounded-lg text-red-500 hover:bg-gray-100 transition-colors"
                    >
                      <span className="flex-shrink-0">
                        <LogOut size={20} />
                      </span>
                      <span className="ml-3">Log Out</span>
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

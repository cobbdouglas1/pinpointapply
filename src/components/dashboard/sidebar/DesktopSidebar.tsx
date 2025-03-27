
import { Link, useLocation } from 'react-router-dom';
import {
  UserCircle,
  FileText,
  Clock,
  Settings,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  LogOut,
  FileUp,
} from 'lucide-react';
import { SidebarProps } from './types';

const DesktopSidebar = ({ isOpen, toggleSidebar, onLogout }: SidebarProps) => {
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
    <div
      className={`h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-20'
      } flex flex-col`}
    >
      {/* Header with logo and collapse button */}
      <div className={`p-4 border-b border-gray-200 flex ${isOpen ? 'justify-between' : 'justify-center'} items-center`}>
        <div className={`${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/6760be0d-efdd-46aa-b7de-c33b7bc0fe59.png" alt="PinPoint Apply" className="h-8" />
            <span className={`ml-2 text-lg font-medium transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              PinPoint Apply
            </span>
          </Link>
        </div>
        <div className={`${!isOpen ? 'block' : 'hidden'}`}>
          <Link to="/">
            <img src="/lovable-uploads/6760be0d-efdd-46aa-b7de-c33b7bc0fe59.png" alt="PinPoint Apply" className="h-8" />
          </Link>
        </div>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none transition-colors"
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>
      
      {/* Main navigation */}
      <nav className="flex-1 overflow-y-auto pt-5 pb-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-2 py-2 text-sm font-medium rounded-lg ${
                  isActive(item.path, item.exact)
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-700 hover:bg-gray-100'
                } transition-colors ${!isOpen && 'justify-center'}`}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                <span className={`ml-3 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 h-0 overflow-hidden'}`}>
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Bottom navigation */}
      <div className="border-t border-gray-200 pt-4 pb-6">
        <ul className="space-y-1 px-2">
          {bottomNavItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-2 py-2 text-sm font-medium rounded-lg ${
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-700 hover:bg-gray-100'
                } transition-colors ${!isOpen && 'justify-center'}`}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                <span className={`ml-3 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 h-0 overflow-hidden'}`}>
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
          
          {/* Log out button */}
          <li>
            <button
              onClick={onLogout}
              className={`flex items-center w-full px-2 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 transition-colors ${!isOpen && 'justify-center'}`}
            >
              <span className="flex-shrink-0 text-red-500">
                <LogOut size={20} />
              </span>
              <span className={`ml-3 text-red-500 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 h-0 overflow-hidden'}`}>
                Log Out
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopSidebar;

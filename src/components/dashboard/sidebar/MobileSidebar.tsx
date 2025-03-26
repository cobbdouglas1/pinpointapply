
import { Link, useLocation } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
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
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={toggleSidebar}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-xs">
                  <div className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                    <div className="px-4 flex items-center justify-between">
                      <Link to="/" className="flex items-center" onClick={toggleSidebar}>
                        <img src="/lovable-uploads/e90c4387-4554-47b1-a0fd-99da01b27d96.png" alt="PinPoint Apply" className="h-8" />
                        <span className="ml-2 text-lg font-medium">PinPoint Apply</span>
                      </Link>
                      <button
                        type="button"
                        className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                        onClick={toggleSidebar}
                      >
                        <span className="sr-only">Close panel</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileSidebar;

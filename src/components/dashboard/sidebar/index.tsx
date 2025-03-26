
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import DesktopSidebar from './DesktopSidebar';
import MobileSidebar from './MobileSidebar';
import { useAuthContext } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const isMobile = useIsMobile();
  const { signOut } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    toast.info('Signing out...');
    await signOut();
    navigate('/');
  };

  if (isMobile) {
    return <MobileSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} onLogout={handleLogout} />;
  }

  return <DesktopSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} onLogout={handleLogout} />;
};

export default Sidebar;


import { useIsMobile } from '@/hooks/use-mobile';
import MobileSidebar from './MobileSidebar';
import DesktopSidebar from './DesktopSidebar';
import { SidebarProps } from './types';

const Sidebar = (props: SidebarProps) => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return <MobileSidebar {...props} />;
  }
  
  return <DesktopSidebar {...props} />;
};

export default Sidebar;

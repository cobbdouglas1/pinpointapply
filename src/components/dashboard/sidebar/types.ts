
export interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  onLogout: () => Promise<void>;
}

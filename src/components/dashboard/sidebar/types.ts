
import { LucideIcon } from 'lucide-react';

export interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export interface NavItem {
  title: string;
  path: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  {
    title: 'Career Profile',
    path: '/dashboard/profile',
    icon: 'User',
  },
  {
    title: 'CV Generator',
    path: '/dashboard/cv',
    icon: 'FileText',
  },
  {
    title: 'Cover Letter Generator',
    path: '/dashboard/cover-letter',
    icon: 'FilePenLine',
  },
  {
    title: 'History',
    path: '/dashboard/history',
    icon: 'Clock',
  },
];

export const bottomNavItems: NavItem[] = [
  {
    title: 'Settings',
    path: '/dashboard/settings',
    icon: 'Settings',
  },
  {
    title: 'Help & Support',
    path: '/dashboard/help',
    icon: 'HelpCircle',
  },
];

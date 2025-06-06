import React from 'react';
import { FiUsers, FiUserCheck, FiUserX, FiSend, FiCheckSquare, FiAirplay,} from 'react-icons/fi';
import { LuLayoutDashboard, LuMegaphone, LuFileWarning, LuContact, LuUserCog, LuAlbum, LuAlarmClock, LuCast, LuAnchor, LuCreditCard, LuDoorOpen, LuCircleArrowDown, LuArrowDownCircle, LuWorkflow, LuCompass, LuColumns2, LuClipboardCheck, LuLandmark, LuWallet, LuPiggyBank,
LuSettings2, LuAlignEndHorizontal, LuExpand, LuMedal, LuSettings,
LuInbox, LuToyBrick, LuMessageCircle, LuBellRing, LuVolume2,
LuLanguages,
LuPalette, LuRollerCoaster, LuWarehouse, LuEgg, 
LuMail, LuMessageSquare,
LuWrench, LuBraces, LuInfo  

} from "react-icons/lu";


const menuData = [
  {
    type: 'link',
    label: 'Dashboard',
    href: '/admin',
    icon: <LuLayoutDashboard />,
  },
  {
    type: 'sectionTitle',
    label: 'Customer Management',
  },
  {
    type: 'dropdown',
    label: 'Customers',
    icon: <FiUsers />,
    items: [
      { label: 'All Customers', href: '/admin/users', icon: <FiUsers /> },
      { label: 'Active Customers', href: '/admin/user/active', icon: <FiUserCheck /> },
      { label: 'Disabled Customers', href: '/admin/user/disabled', icon: <FiUserX /> },
      { label: 'Notifications', href: 'notification_all.html', icon: <LuMegaphone /> },
      { label: 'Send Email to all', href: 'mail-send-all.html', icon: <FiSend /> },
    ],
  },
  {
    type: 'dropdown',
    label: 'KYC Management',
    icon: <FiCheckSquare />,
    items: [
      { label: 'Pending KYC', href: 'users.html', icon: <FiAirplay  /> },
      { label: 'Rejected KYC', href: '/admin/user/active', icon: <LuFileWarning /> },
      { label: 'All KYC Logs', href: '/admin/user/disabled', icon: <LuContact  /> },
      { label: 'KYC Form', href: 'notification_all.html', icon: <FiCheckSquare /> },
    ],
  },
  {
    type: 'sectionTitle',
    label: 'Staff Management',
  },
  {
    type: 'link',
    label: 'Manage Roles',
    href: '/admin/roles',
    icon: <LuContact/>,
  },
  {
    type: 'link',
    label: 'Manage Staff',
    href: '/admin/staff',
    icon: <LuUserCog/>,
  },
  {
    type: 'sectionTitle',
    label: 'Plans',
  },
  {
    type: 'dropdown',
    label: 'Manage Schema',
    icon: <LuAlbum  />,
    items: [
      { label: 'Schedule', href: 'users.html', icon: <LuAlarmClock  /> },
      { label: 'Manage Schema', href: '/admin/user/active', icon: <FiAirplay /> },
    ],
  },

  {
    type: 'sectionTitle',
    label: 'Transactions',
  },
  {
    type: 'link',
    label: 'Transactions',
    href: '/admin/transactions',
    icon: <LuCast/>,
  },
  {
    type: 'link',
    label: 'Investments',
    href: '/admin/investments',
    icon: <LuAnchor/>,
  },

  {
    type: 'link',
    label: 'User Profits',
    href: '/admin/profile',
    icon: <LuCreditCard/>,
  },

  {
    type: 'sectionTitle',
    label: 'Essentials',
  },
  {
    type: 'link',
    label: 'Automatic Gateways',
    href: '/admin/gateways',
    icon: <LuDoorOpen />,
  },

  {
    type: 'dropdown',
    label: 'Deposits',
    icon: <LuArrowDownCircle />,
    items: [
      { label: 'Automatic Methods', href: 'users.html', icon: <LuWorkflow/> },
      { label: 'Manual Methods', href: '/admin/user/active', icon: <LuCompass/> },
      { label: 'Pending Manual Deposits', href: '/admin/user/active', icon: <LuWallet /> },
      { label: 'Deposit History', href: '/admin/user/active', icon: <LuClipboardCheck  /> },
    ],
  },

  {
    type: 'dropdown',
    label: 'Withdraw',
    icon: <LuLandmark/>,
    items: [
      { label: 'Automatic Methods', href: 'users.html', icon: <LuWorkflow/> },
      { label: 'Manual Methods', href: '/admin/user/active', icon: <LuCompass /> },
      { label: 'Pending Withdraws', href: '/admin/user/active', icon: <LuWallet/> },
      { label: 'Withdraw Schedule', href: '/admin/user/active', icon: <LuAlarmClock /> },
      { label: 'Withdraw History', href: '/admin/user/active', icon: <LuPiggyBank /> },
    ],
  },


  {
    type: 'dropdown',
    label: 'Manage Referral',
    icon: <LuSettings2/>,
    items: [
      { label: 'Multi Level Referral', href: 'users.html', icon: <LuAlignEndHorizontal /> },
      { label: 'Targets Referral', href: '/admin/user/active', icon: <LuExpand /> }
    ],
  },
  {
    type: 'link',
    label: 'User Rankings',
    href: '/admin/ranking',
    icon: <LuMedal/>,
  },

  {
    type: 'sectionTitle',
    label: ' Site Settings',
  },
  {
    type: 'dropdown',
    label: ' Settings',
    icon: <LuSettings/>,
    items: [
      { label: 'Site Settings', href: 'users.html', icon: <LuSettings2 /> },
      { label: 'Email Settings', href: '/admin/user/active', icon: <LuInbox /> },
      { label: 'Plugin Settings', href: '/admin/user/active', icon: <LuToyBrick /> },
      { label: 'SMS Settings', href: '/admin/user/active', icon: <LuMessageCircle /> },
      { label: 'Push Notification', href: '/admin/user/active', icon: <LuBellRing /> },
      { label: 'Notification Tune', href: '/admin/user/active', icon: <LuVolume2 /> }
    ],
  },

  {
    type: 'link',
    label: 'Language Settings',
    href: '/admin/language',
    icon: <LuLanguages/>,
  },
  {
    type: 'link',
    label: 'Page Settings',
    href: '/admin/setting/page',
    icon: <LuLayoutDashboard/>,
  },

  {
    type: 'sectionTitle',
    label: ' Site Essentials',
  },
  {
    type: 'dropdown',
    label: ' Theme Manage',
    icon: <LuPalette />,
    items: [
      { label: 'Site Theme', href: 'users.html', icon: <LuRollerCoaster /> },
      { label: 'Dynamic Landing Theme', href: '/admin/user/active', icon: <LuWarehouse /> }
    ],
  },
  {
    type: 'dropdown',
    label: ' Landing Page',
    icon: <LuWarehouse />,
    items: [
      { label: 'Hero Section', href: 'users.html', icon: <LuEgg /> },
      { label: 'Schema Section', href: 'users.html', icon: <LuEgg /> },
      { label: 'Calculation Section', href: 'users.html', icon: <LuEgg /> },
      { label: 'How it works Section', href: 'users.html', icon: <LuEgg /> },
      { label: 'Recent Section', href: 'users.html', icon: <LuEgg /> },
      { label: 'Why Choose Us Section', href: 'users.html', icon: <LuEgg /> },
      { label: 'Counter Section', href: 'users.html', icon: <LuEgg /> },
      { label: 'FAQ Section', href: 'users.html', icon: <LuEgg /> },
      { label: 'Call To Action', href: 'users.html', icon: <LuEgg /> },
      { label: 'Blog Section', href: 'users.html', icon: <LuEgg /> },
      { label: 'Gateway Section', href: 'users.html', icon: <LuEgg /> },
      { label: 'Newslatter Section', href: 'users.html', icon: <LuEgg /> }
    ],
  },
  {
    type: 'dropdown',
    label: ' Pages',
    icon: <LuLayoutDashboard />,
    items: [
      { label: 'Hero Section', href: 'users.html', icon: <LuEgg /> },
      { label: 'Schema', href: 'users.html', icon: <LuEgg /> },
      { label: 'How It Works', href: 'users.html', icon: <LuEgg /> },
      { label: 'About Us', href: 'users.html', icon: <LuEgg /> },
      { label: 'FAQ', href: 'users.html', icon: <LuEgg /> },
      { label: 'Rankings', href: 'users.html', icon: <LuEgg /> },
      { label: 'Blog', href: 'users.html', icon: <LuEgg /> },
      { label: 'Contact Us', href: 'users.html', icon: <LuEgg /> },
      { label: 'Privacy Policy', href: 'users.html', icon: <LuEgg /> },
      { label: 'Terms and Conditions', href: 'users.html', icon: <LuEgg /> },
      { label: 'Login', href: 'users.html', icon: <LuEgg /> },
      { label: 'Registration', href: 'users.html', icon: <LuEgg /> },
      { label: 'Forgot Password', href: 'users.html', icon: <LuEgg /> },
      { label: 'Add New Page', href: 'users.html', icon: <LuEgg /> }
    ],
  },

  {
    type: 'sectionTitle',
    label: 'Templates',
  },

  {
    type: 'link',
    label: 'Email Template',
    href: '/admin/template/email',
    icon: <LuMail/>,
  },
    {
    type: 'link',
    label: 'SMS Template',
    href: '/admin/template/sms',
    icon: <LuMessageSquare/>,
  },
      {
    type: 'link',
    label: 'Push Notification Template',
    href: '/admin/template/push-notification',
    icon: <LuBellRing/>,
  },


  {
    type: 'sectionTitle',
    label: 'Others',
  },

  {
    type: 'link',
    label: 'Support Tickets',
    href: '/admin/tickets',
    icon: <LuWrench/>,
  },

  {
    type: 'link',
    label: 'Custom CSS',
    href: '/admin/custom-css',
    icon: <LuBraces/>,
  },
  {
    type: 'link',
    label: 'Application Details 2.3',
    href: '/admin/app-details',
    icon: <LuInfo/>,
  },


];


export default menuData;
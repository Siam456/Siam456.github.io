import {
  ChatBubbleLeftRightIcon,
  Squares2X2Icon,
  // UsersIcon,
  CalendarDaysIcon,
  // GlobeAsiaAustraliaIcon,
  QueueListIcon,
} from '@heroicons/react/24/solid';

const sidebar = [
  {
    href: '/',
    icon: Squares2X2Icon,
    name: 'Home',
  },

  {
    href: '#services',
    icon: CalendarDaysIcon,
    name: 'Services',
  },
  {
    href: '#experiences',
    icon: QueueListIcon,
    name: 'Experiences',
  },
  {
    href: '#projects',
    icon: QueueListIcon,
    name: 'Projects',
  },
  {
    href: '#contact',
    icon: ChatBubbleLeftRightIcon,
    name: 'Contact',
  },
  // {
  //   href: '/settings',
  //   icon: CogIcon,
  //   name: 'Settings',
  // },

  // {
  //   href: '/dashboard/dealer',
  //   icon: GlobeAsiaAustraliaIcon,
  //   name: 'Dealers',
  // },
];

export default sidebar;

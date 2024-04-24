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
    href: '#projects',
    icon: QueueListIcon,
    name: 'Projects',
  },
  {
    href: '#experiences',
    icon: QueueListIcon,
    name: 'Experiences',
  },

  {
    href: '#contact',
    icon: ChatBubbleLeftRightIcon,
    name: 'Contact',
  },
];

export default sidebar;

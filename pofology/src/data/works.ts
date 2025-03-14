import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 1,
    title: 'Owneasy (Hotel Management) App',
    category: 'Flutter Mobile app',
    thumbnailUrl: '/images/works/booking_bg.jpg',
    description: `Designed for property booking and management. Features include property listing, availability tracking, user profiles, and messaging. Ensures a seamless user experience with smooth navigation and intuitive design.`,
    publishedAt: '12 March 2025',
    images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
    featureList: [
      '100% Fluid Responsive – Fits any device perfectly',
      'Tested on real devices',
      'Flexible Layout',
      'Pixel Perfect Design',
      'Quick &amp; Easy Installation &amp; Setup',
      'Easy Customization With Variable Content Sections',
      'Custom Build Theme &amp; Page Options',
    ],
    attributes: [
      {
        name: 'Start Date',
        value: '01 September 2024',
      },
      {
        name: 'End Date',
        value: 'Developing stage',
      },
      {
        name: 'Skills',
        value: 'Flutter, Dart, Custom Calendar',
      },
      {
        name: 'Current Version',
        value: '1.0.0',
      },
    ],
  },

  {
    id: 2,
    title: 'Maharashtra Guard App',
    category: 'Flutter Mobile App',
    thumbnailUrl: '/images/works/guard_bg.jpg',
    description: `A security management app designed for guards and employers. It features shift scheduling, attendance tracking, emergency response, and grievance reporting with status tracking. Includes real-time alerts, geofenced notifications, and a secure communication system to enhance guard operations and compliance.`,
    publishedAt: '01 July 2022',
    images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
    featureList: [
      'Fully Responsive – Works seamlessly on all devices',
      'Tested on real devices',
      'Flexible Layout – Customizable UI for unique experiences',
      'Profile Management – For both hosts and guests',
      'Push Notifications – For updates and messages',
      'Clean & Efficient Code',
      'Google Maps Integration',
      'Quick Setup and Easy Customization',
      'Advanced Search and Filtering',
    ],
    attributes: [
      {
        name: 'Start Date',
        value: '01 March 2025',
      },
      {
        name: 'End Date',
        value: 'Developing stage',
      },
      {
        name: 'Skills',
        value: 'Flutter, Dart',
      },
      {
        name: 'Current Version',
        value: '1.0.0',
      },
    ],
  },
];

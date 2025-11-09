import type { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'MyTelkomsel',
    description:
      'MyTelkomsel is a self-care mobile app that allows users to manage balances, buy data packages, and access digital services in one platform.',
    image: '/images/projects/mytelkomsel.jpg',
    date: 'Jan 2020 — Okt 2025',
    github: 'https://github.com',
    demo: 'https://play.google.com/store/apps/details?id=com.telkomsel.telkomselcm',
    techStack: ['Android', 'Kotlin', 'Java', 'Retrofit', 
      'MVVM', 'Firebase', 'Jetpack Component', 
      'Clean Architecture', 'Koin', 'JUnit'],
    longDescription:
      'Assigned project to the Telkomsel Digital World Team and I contributed as an Android Developer of the MyTelkomsel app. I worked in an agile environment with cross-functional teams including Product Owner, UI/UX designers, Solution Architects, Quality Assurance, and Backend Developers to deliver high-quality, scalable, and maintainable Android app.',
    showGithub: false,
    screenshots: ['/images/projects/screenshots/sc-mytelkomsel1.webp', '/images/projects/screenshots/sc-mytelkomsel2.webp', '/images/projects/screenshots/sc-mytelkomsel3.webp'],
    showDemoInModal: true,
  },
  {
    title: 'BelanjaQu',
    description:
      'BelanjaQu is an e-commerce mobile app that enables users to browse products, place orders, and manage transactions seamlessly within a single platform.',
    image: '/images/projects/blq.png',
    date: 'Des 2018 — Jan 2020',
    github: 'https://github.com',
    demo: 'https://apkpure.com/id/belanjaqu/id.co.belanjaqu.app',
    techStack: ['Android', 'Java', 'Firebase', 'Retrofit'],
    longDescription:
      'Contributed as an Android Developer to the BelanjaQu e-commerce application, focusing on develop new feature using java, improving shopping experience, maintaining existing features, resolving bugs, and enhancing UI/UX.',
    showGithub: false,
    screenshots: ['/images/projects/screenshots/sc-blq1.webp', '/images/projects/screenshots/sc-blq2.webp', '/images/projects/screenshots/sc-blq3.webp'],
    showDemoInModal: true,
  },
  {
    title: 'Paycoll SAS Autoparts',
    description:
      'Paycoll SAS Autoparts is a B2B mobile platform that streamlines automotive parts ordering, payment collection, and transaction management for distributors and partners in one integrated system.',
    image: '/images/projects/sas.jpg',
    date: 'Jul 2017 — Nov 2017',
    github: 'https://github.com',
    demo: 'https://play.google.com',
    techStack: ['Android', 'Java', 'Material Design'],
    longDescription:
      'Worked as an Android Developer Intern on Paycoll Project, a mobile solution developed for SAS Autoparts, focusing on streamlining automotive parts purchasing and payment processing. The project aimed to digitize internal sales workflows and improve transactional efficiency for automotive retailers and distributors.',
    showGithub: false,
    screenshots: ['/images/projects/screenshots/sc-paycoll1.png', '/images/projects/screenshots/sc-paycoll2.png', '/images/projects/screenshots/sc-paycoll3.png'],
    showDemoInModal: false,
  },
];

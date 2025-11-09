import type { ExperienceItem } from '@/types';

export const experiences: ExperienceItem[] = [
  {
    company: 'PT Phincon',
    position: 'Software Engineer',
    duration: 'Jan 2020 - Present',
    location: 'Jakarta, Indonesia',
    projects: [
      {
        name: 'AI Engineer',
        duration: 'Jan 2026 — Present',
        description: [
          'Developed and integrated AI project using Python',
          'Implemented new features based on project requirements through technical research and evaluation of suitable technologies',
          'Collaborated with cross-functional teams to align with task and business needs',
          'Supported integration of AI components with existing backend services and workflows',
        ],
      },
      {
        name: 'Backend & Infrastructure Engineer',
        duration: 'Nov 2025 — Jan 2026',
        description: [
          'Investigated and resolved production findings and issues to ensure system stability, security, and reliability',
          'Deployed and supported backend services in development environments',
          'Maintained RESTful APIs to support application functionality',
          'Performed infrastructure access and operational tasks',
          'Monitored application logs and system behavior to identify issues and support troubleshooting',
        ],
      },
      {
        name: 'Android Developer',
        duration: 'Jan 2020 — Okt 2025',
        description: [
          'Develop new core features based on sprint planning using Kotlin',
          'Handled bugs also investigated and resolved issues reported by the QA team, improving application stability and performance',
          'Boosted application efficiency through performance tuning, including memory leak reduction, API call optimization, and smoother UI rendering',
          'Lead and assist a small domain-focused team to successfully deliver the Shop menu revamp',
          'Worked with Firebase for push notifications, crash reporting, and analytics',
          'Collaborating with cross-functional teams to meet business requirements and expectations',
          'Participated in code reviews, unit testing, and debugging to maintain high code quality and app stability',
          'Wrote clean, and well-documented code',
          'Maintained high code standards by following clean coding guidelines and applying industry best practices to support long-term scalability',
        ],
      },
    ],
  },
  {
    company: 'PT Veritra Sentosa Internasional',
    position: 'Android Developer',
    duration: 'Des 2018 - Jan 2020',
    location: 'Bandung, Indonesia',
    description: [
      'Developed and maintained core features using Java and Android Jetpack components',
      'Integrated RESTful APIs for product listings, user authentication, order processing, etc',
      'Worked closely with backend developers and UI/UX designers to align frontend functionality with system requirements',
      'Bug fixing based on QA and user feedback',
      'Slicing UI from sketch into android applications',
    ],
  },
  {
    company: 'PT Javasigna Intermedia',
    position: 'Junior Android Developer (Internship)',
    duration: 'Jul 2017 - Nov 2017',
    location: 'Yogyakarta, Indonesia',
    description: [
      'Developed and maintained core features using Java and Android Jetpack components',
      'Collaborated with backend engineers to integrate APIs for real-time inventory, shop list, etc',
      'Develop UI following the provided mockup designs',
      'Bug fixing based on QA and user feedback',
    ],
  },
];

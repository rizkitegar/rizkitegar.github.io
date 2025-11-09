export interface ProjectItem {
  name: string;
  duration: string;
  description: string[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description?: string[];
  projects?: ProjectItem[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  headerImage?: string;
  date: string;
  github?: string;
  demo?: string;
  techStack: string[];
  longDescription?: string;
  showGithub?: boolean;
  screenshots?: string[];
  showDemoInModal?: boolean;
}


export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  url: string;
  story: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  contributions: string[];
  techStack: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  specialization: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Systems' | 'DevOps' | 'Networking' | 'Programming' | 'Observability';
}

export interface Certification {
  name: string;
  year: string;
  issuer: string;
}

export interface CVData {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  bio: string;
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
  languages: { name: string; level: string }[];
}

export type TerminalCommand = 'help' | 'ls' | 'cat' | 'whoami' | 'clear' | 'contact' | 'systemctl' | 'observability';

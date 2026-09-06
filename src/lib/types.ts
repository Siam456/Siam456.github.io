export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "globe" | "phone";
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  site: string;
  tagline: string;
  summary: string;
  focusAreas: string[];
  socials: SocialLink[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  companyUrl?: string;
  start: string;
  end: string;
  location: string;
  highlights: string[];
  stack: string[];
}

export interface ProjectEntry {
  name: string;
  tagline: string;
  description: string;
  duration: string;
  url?: string;
  current?: boolean;
  stack: string[];
  highlights: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  start: string;
  end: string;
  location: string;
}

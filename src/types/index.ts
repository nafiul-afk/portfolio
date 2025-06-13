export interface Skill {
  id: string;
  name: string;
  color: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface JourneyItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
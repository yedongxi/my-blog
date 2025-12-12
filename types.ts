
export interface Job {
  company: string;
  role: string;
  period: string;
  description: string[];
  tags?: string[];
}

export interface Project {
  title: string;
  role: string;
  period?: string;
  description: string;
  link?: string;
  tags: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Icon name from Lucide
}

export interface Article {
  title: string;
  summary: string;
  date: string;
  platform: "Xiaohongshu" | "Blog" | "Boardmix";
  link: string;
  tags: string[];
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  link: string;
}

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
  glowColor: string;
  gridClass: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  timeline: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  popular: boolean;
  description?: string;
  perfectFor: string;
  features: string[];
  bonus?: string;
  badge?: string;
  techStack: string[];
}

export interface AddOn {
  id: string;
  name: string;
  price: string;
  description: string;
  duration?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: string;
}

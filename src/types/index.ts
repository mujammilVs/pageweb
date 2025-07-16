export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  path: string;
}

export interface ProductCard {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: {
    text: string;
    href: string;
  };
}

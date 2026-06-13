export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  type: string;
  stack: string[];
  problem: string;
  built: string;
  impact: string;
  approach?: string;
  highlights: string[];
  featured: boolean;
  flagship?: boolean;
  links?: ProjectLink[];
  visualNote?: string;
};

export type ProductionDomain = {
  slug: string;
  label: string;
  scope: string;
  context: string;
  focus: string;
  contribution: string;
  approach: string;
  outcomes: string[];
  technicalThemes: string[];
  constraints: string;
};

export type ExperienceEntry = {
  period: string;
  title: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
};

export type CapabilityGroup = {
  title: string;
  description: string;
  items: string[];
};

export type ToolEntry = {
  name: string;
  description: string;
  details: string[];
  links: ProjectLink[];
};

export type NavItem = {
  id: string;
  label: string;
};

export type ProfileStat = {
  label: string;
  value: string;
};

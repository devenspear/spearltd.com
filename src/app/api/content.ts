import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

// Define TypeScript interfaces for content data
export interface HeroContent {
  _schema: string;
  heading: string;
  subheading: string;
  badge_text: string;
  primary_button_text: string;
  primary_button_url: string;
  secondary_button_text: string;
  secondary_button_url: string;
  content?: string;
}

export interface AboutContent {
  _schema: string;
  heading: string;
  text: string;
  highlight: string;
  button_text: string;
  button_url: string;
  content?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  button_text: string;
  button_url: string;
  color: string;
}

export interface ServicesContent {
  _schema: string;
  heading: string;
  subheading: string;
  services: ServiceItem[];
  content?: string;
}

export interface CtaContent {
  _schema: string;
  heading: string;
  text: string;
  primary_button_text: string;
  primary_button_url: string;
  secondary_button_text: string;
  secondary_button_url: string;
  phone_number: string;
  content?: string;
}

export interface HomeContent {
  hero: HeroContent;
  about: AboutContent;
  services: ServicesContent;
  cta: CtaContent;
}

export interface AboutPageContent {
  intro: {
    _schema: string;
    heading: string;
    text: string;
    content?: string;
  };
  main: {
    _schema: string;
    heading: string;
    text: string;
    quote: string;
    additional_text: string;
    button_text: string;
    button_url: string;
    content?: string;
  };
}

export interface ProcessPageContent {
  intro: {
    _schema: string;
    heading: string;
    text: string;
    content?: string;
  };
  funding: {
    _schema: string;
    heading: string;
    text: string;
    required_reports: string[];
    content?: string;
  };
  timeline: {
    _schema: string;
    heading: string;
    steps: string[];
    confidentiality_note: string;
    button_text: string;
    button_url: string;
    content?: string;
  };
}

export interface ProjectItem {
  name: string;
  location: string;
}

export interface ProjectsPageContent {
  intro: {
    _schema: string;
    heading: string;
    text: string;
    content?: string;
  };
  recent: {
    _schema: string;
    projects_2022: ProjectItem[];
    projects_2021: ProjectItem[];
    additional_info: string;
    button_text: string;
    button_url: string;
    content?: string;
  };
}

export interface ContactPageContent {
  intro: {
    _schema: string;
    heading: string;
    text: string;
    content?: string;
  };
  details: {
    _schema: string;
    heading: string;
    phone: {
      label: string;
      number: string;
      url: string;
    };
    email: {
      label: string;
      address: string;
      url: string;
    };
    service_area_heading: string;
    service_area_text: string;
    content?: string;
  };
}

// Function to get content from markdown files
export function getContentData<T>(contentPath: string): T {
  const fullPath = path.join(process.cwd(), contentPath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    ...data,
    content
  } as T;
}

// Function to get all content files from a directory
export function getAllContentFiles(directory: string) {
  const fullPath = path.join(process.cwd(), directory);
  const fileNames = fs.readdirSync(fullPath);
  
  return fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullFilePath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(path.join(process.cwd(), fullFilePath), 'utf8');
    const { data } = matter(fileContents);
    
    return {
      id,
      ...data
    };
  });
}

// Use React's cache to optimize content loading
export const getHomeContent = cache((): HomeContent => {
  const heroContent = getContentData<HeroContent>('src/content/home/hero/hero.md');
  const aboutContent = getContentData<AboutContent>('src/content/home/about/about.md');
  const servicesContent = getContentData<ServicesContent>('src/content/home/services/services.md');
  const ctaContent = getContentData<CtaContent>('src/content/home/cta/cta.md');
  
  return {
    hero: heroContent,
    about: aboutContent,
    services: servicesContent,
    cta: ctaContent
  };
});

export const getAboutContent = cache((): AboutPageContent => {
  const introContent = getContentData<AboutPageContent['intro']>('src/content/about/intro/intro.md');
  const mainContent = getContentData<AboutPageContent['main']>('src/content/about/main/main.md');
  
  return {
    intro: introContent,
    main: mainContent
  };
});

export const getProcessContent = cache((): ProcessPageContent => {
  const introContent = getContentData<ProcessPageContent['intro']>('src/content/process/intro/intro.md');
  const fundingContent = getContentData<ProcessPageContent['funding']>('src/content/process/funding/funding.md');
  const timelineContent = getContentData<ProcessPageContent['timeline']>('src/content/process/timeline/timeline.md');
  
  return {
    intro: introContent,
    funding: fundingContent,
    timeline: timelineContent
  };
});

export const getProjectsContent = cache((): ProjectsPageContent => {
  const introContent = getContentData<ProjectsPageContent['intro']>('src/content/projects/intro/intro.md');
  const recentContent = getContentData<ProjectsPageContent['recent']>('src/content/projects/recent/recent.md');
  
  return {
    intro: introContent,
    recent: recentContent
  };
});

export const getContactContent = cache((): ContactPageContent => {
  const introContent = getContentData<ContactPageContent['intro']>('src/content/contact/intro/intro.md');
  const detailsContent = getContentData<ContactPageContent['details']>('src/content/contact/details/details.md');
  
  return {
    intro: introContent,
    details: detailsContent
  };
});

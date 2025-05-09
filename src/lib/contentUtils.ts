'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

export interface AboutIntroContent {
  _schema: string;
  heading: string;
  text: string;
  content?: string;
}

export interface AboutMainContent {
  _schema: string;
  heading: string;
  text: string;
  quote: string;
  additional_text: string;
  button_text: string;
  button_url: string;
  content?: string;
}

export interface AboutPageContent {
  intro: AboutIntroContent;
  main: AboutMainContent;
}

export interface ProcessIntroContent {
  _schema: string;
  heading: string;
  text: string;
  content?: string;
}

export interface ProcessFundingContent {
  _schema: string;
  heading: string;
  text: string;
  required_reports: string[];
  content?: string;
}

export interface ProcessTimelineContent {
  _schema: string;
  heading: string;
  steps: string[];
  confidentiality_note: string;
  button_text: string;
  button_url: string;
  content?: string;
}

export interface ProcessPageContent {
  intro: ProcessIntroContent;
  funding: ProcessFundingContent;
  timeline: ProcessTimelineContent;
}

export interface ProjectItem {
  name: string;
  location: string;
}

export interface ProjectsIntroContent {
  _schema: string;
  heading: string;
  text: string;
  content?: string;
}

export interface ProjectsRecentContent {
  _schema: string;
  projects_2022: ProjectItem[];
  projects_2021: ProjectItem[];
  additional_info: string;
  button_text: string;
  button_url: string;
  content?: string;
}

export interface ProjectsPageContent {
  intro: ProjectsIntroContent;
  recent: ProjectsRecentContent;
}

export interface ContactIntroContent {
  _schema: string;
  heading: string;
  text: string;
  content?: string;
}

export interface PhoneInfo {
  label: string;
  number: string;
  url: string;
}

export interface EmailInfo {
  label: string;
  address: string;
  url: string;
}

export interface ContactDetailsContent {
  _schema: string;
  heading: string;
  phone: PhoneInfo;
  email: EmailInfo;
  service_area_heading: string;
  service_area_text: string;
  content?: string;
}

export interface ContactPageContent {
  intro: ContactIntroContent;
  details: ContactDetailsContent;
}

// Function to get content from markdown files
export async function getContentData<T>(contentPath: string): Promise<T> {
  const fullPath = path.join(process.cwd(), contentPath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    ...data,
    content
  } as T;
}

// Function to get all content files from a directory
export async function getAllContentFiles(directory: string) {
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

// Home page content
export async function getHomeContent(): Promise<HomeContent> {
  const heroContent = await getContentData<HeroContent>('src/content/home/hero/hero.md');
  const aboutContent = await getContentData<AboutContent>('src/content/home/about/about.md');
  const servicesContent = await getContentData<ServicesContent>('src/content/home/services/services.md');
  const ctaContent = await getContentData<CtaContent>('src/content/home/cta/cta.md');
  
  return {
    hero: heroContent,
    about: aboutContent,
    services: servicesContent,
    cta: ctaContent
  };
}

// About page content
export async function getAboutContent(): Promise<AboutPageContent> {
  const introContent = await getContentData<AboutIntroContent>('src/content/about/intro/intro.md');
  const mainContent = await getContentData<AboutMainContent>('src/content/about/main/main.md');
  
  return {
    intro: introContent,
    main: mainContent
  };
}

// Process page content
export async function getProcessContent(): Promise<ProcessPageContent> {
  const introContent = await getContentData<ProcessIntroContent>('src/content/process/intro/intro.md');
  const fundingContent = await getContentData<ProcessFundingContent>('src/content/process/funding/funding.md');
  const timelineContent = await getContentData<ProcessTimelineContent>('src/content/process/timeline/timeline.md');
  
  return {
    intro: introContent,
    funding: fundingContent,
    timeline: timelineContent
  };
}

// Projects page content
export async function getProjectsContent(): Promise<ProjectsPageContent> {
  const introContent = await getContentData<ProjectsIntroContent>('src/content/projects/intro/intro.md');
  const recentContent = await getContentData<ProjectsRecentContent>('src/content/projects/recent/recent.md');
  
  return {
    intro: introContent,
    recent: recentContent
  };
}

// Contact page content
export async function getContactContent(): Promise<ContactPageContent> {
  const introContent = await getContentData<ContactIntroContent>('src/content/contact/intro/intro.md');
  const detailsContent = await getContentData<ContactDetailsContent>('src/content/contact/details/details.md');
  
  return {
    intro: introContent,
    details: detailsContent
  };
}

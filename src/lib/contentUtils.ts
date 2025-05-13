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
  title: string;
  location: string;
  year: string;
  challenge: string;
  solution: string;
  outcome: string;
  type: string;
  image: string;
}

export interface ProjectsIntroContent {
  _schema: string;
  heading: string;
  text: string;
  content?: string;
}

export interface ProjectsRecentContent {
  _schema: string;
  projects: ProjectItem[];
  project_types: string[];
  years: string[];
  confidentiality_note: string;
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

export interface SectorItem {
  title: string;
  description: string;
  examples: string;
  icon: string;
  color: string;
  button_text: string;
  button_url: string;
}

export interface SectorsIntroContent {
  _schema: string;
  heading: string;
  text: string;
  content?: string;
}

export interface SectorsListContent {
  _schema: string;
  sectors: SectorItem[];
  cta_text: string;
  cta_button_text: string;
  cta_button_url: string;
  content?: string;
}

export interface SectorsPageContent {
  intro: SectorsIntroContent;
  sectorsList: SectorsListContent;
}

// Funding Solutions Interfaces
export interface FundingIntroContent {
  _schema: string;
  heading: string;
  text: string;
  cta_text: string;
  cta_url: string;
  content?: string;
}

export interface LoanProgram {
  title: string;
  purpose: string;
  benefits: string[];
  eligibility: string[];
  spear_role: string[];
}

export interface USDALoansContent {
  _schema: string;
  heading: string;
  intro_text: string;
  cf_program: LoanProgram;
  bi_program: LoanProgram;
  cta_text: string;
  cta_url: string;
  content?: string;
}

export interface SBALoansContent {
  _schema: string;
  heading: string;
  intro_text: string;
  seven_a_program: LoanProgram;
  cta_text: string;
  cta_url: string;
  content?: string;
}

export interface ComparisonTableContent {
  _schema: string;
  heading: string;
  features: {
    name: string;
    usda_cf: string;
    usda_bi: string;
    sba_7a: string;
  }[];
  content?: string;
}

export interface FundingPageContent {
  intro: FundingIntroContent;
  comparison: ComparisonTableContent;
}

export interface USDAPageContent {
  usda: USDALoansContent;
}

export interface SBAPageContent {
  sba: SBALoansContent;
}

// Feasibility Reports Interfaces
export interface FeasibilityContent {
  _schema: string;
  heading: string;
  intro_text: string;
  what_is: string;
  why_essential: {
    title: string;
    points: string[];
  };
  approach: {
    title: string;
    points: string[];
  };
  cta_text: string;
  cta_url: string;
  content?: string;
}

export interface FeasibilityPageContent {
  feasibility: FeasibilityContent;
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

// Sectors page content
export async function getSectorsContent(): Promise<SectorsPageContent> {
  const introContent = await getContentData<SectorsIntroContent>('src/content/sectors/intro/intro.md');
  const sectorsListContent = await getContentData<SectorsListContent>('src/content/sectors/list/sectors.md');
  
  return {
    intro: introContent,
    sectorsList: sectorsListContent
  };
}

// Funding Solutions page content
export async function getFundingContent(): Promise<FundingPageContent> {
  const introContent = await getContentData<FundingIntroContent>('src/content/funding/intro/intro.md');
  const comparisonContent = await getContentData<ComparisonTableContent>('src/content/funding/intro/comparison.md');
  
  return {
    intro: introContent,
    comparison: comparisonContent
  };
}

// USDA Loans page content
export async function getUSDAContent(): Promise<USDAPageContent> {
  const usdaContent = await getContentData<USDALoansContent>('src/content/funding/usda/usda.md');
  
  return {
    usda: usdaContent
  };
}

// SBA Loans page content
export async function getSBAContent(): Promise<SBAPageContent> {
  const sbaContent = await getContentData<SBALoansContent>('src/content/funding/sba/sba.md');
  
  return {
    sba: sbaContent
  };
}

// Feasibility Reports page content
export async function getFeasibilityContent(): Promise<FeasibilityPageContent> {
  const feasibilityContent = await getContentData<FeasibilityContent>('src/content/feasibility/feasibility.md');
  
  return {
    feasibility: feasibilityContent
  };
}

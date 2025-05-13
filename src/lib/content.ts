import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Add a comment to indicate this file contains server-only code
// This ensures the file is only used in server components
// @next-internal

// Define TypeScript interfaces for content data
interface HeroContent {
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

interface AboutContent {
  _schema: string;
  heading: string;
  text: string;
  highlight: string;
  button_text: string;
  button_url: string;
  content?: string;
}

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  button_text: string;
  button_url: string;
  color: string;
}

interface ServicesContent {
  _schema: string;
  heading: string;
  subheading: string;
  services: ServiceItem[];
  content?: string;
}

interface CtaContent {
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

interface HomeContent {
  hero: HeroContent;
  about: AboutContent;
  services: ServicesContent;
  cta: CtaContent;
}

interface AboutPageContent {
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

interface ProcessPageContent {
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

interface ProjectItem {
  name: string;
  location: string;
}

interface ProjectsPageContent {
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

interface ContactPageContent {
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

interface SectorItem {
  title: string;
  description: string;
  examples: string;
  icon: string;
  color: string;
  button_text: string;
  button_url: string;
}

interface SectorsIntroContent {
  _schema: string;
  heading: string;
  text: string;
  content?: string;
}

interface SectorsListContent {
  _schema: string;
  sectors: SectorItem[];
  cta_text: string;
  cta_button_text: string;
  cta_button_url: string;
  content?: string;
}

interface SectorsPageContent {
  intro: SectorsIntroContent;
  sectorsList: SectorsListContent;
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

// Function to get home page content
export function getHomeContent(): HomeContent {
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
}

// Function to get about page content
export function getAboutContent(): AboutPageContent {
  const introContent = getContentData<AboutPageContent['intro']>('src/content/about/intro/intro.md');
  const mainContent = getContentData<AboutPageContent['main']>('src/content/about/main/main.md');
  
  return {
    intro: introContent,
    main: mainContent
  };
}

// Function to get process page content
export function getProcessContent(): ProcessPageContent {
  const introContent = getContentData<ProcessPageContent['intro']>('src/content/process/intro/intro.md');
  const fundingContent = getContentData<ProcessPageContent['funding']>('src/content/process/funding/funding.md');
  const timelineContent = getContentData<ProcessPageContent['timeline']>('src/content/process/timeline/timeline.md');
  
  return {
    intro: introContent,
    funding: fundingContent,
    timeline: timelineContent
  };
}

// Function to get projects page content
export function getProjectsContent(): ProjectsPageContent {
  const introContent = getContentData<ProjectsPageContent['intro']>('src/content/projects/intro/intro.md');
  const recentContent = getContentData<ProjectsPageContent['recent']>('src/content/projects/recent/recent.md');
  
  return {
    intro: introContent,
    recent: recentContent
  };
}

// Function to get contact page content
export function getContactContent(): ContactPageContent {
  const introContent = getContentData<ContactPageContent['intro']>('src/content/contact/intro/intro.md');
  const detailsContent = getContentData<ContactPageContent['details']>('src/content/contact/details/details.md');
  
  return {
    intro: introContent,
    details: detailsContent
  };
}

// Function to get sectors page content
export function getSectorsContent(): SectorsPageContent {
  const introContent = {
    _schema: 'sectors_intro',
    heading: 'Sectors We Serve',
    text: 'Spear Consultants provides specialized consulting services across various sectors. Our expertise helps clients navigate funding opportunities and feasibility requirements specific to their industry.',
    content: ''
  };
  
  const sectorsListContent = {
    _schema: 'sectors_list',
    sectors: [
      {
        title: 'Golf & Recreation',
        description: 'Specialized funding solutions for golf courses and recreational facilities.',
        examples: 'Golf courses, country clubs, recreation centers',
        icon: 'golf',
        color: 'green',
        button_text: 'Learn More',
        button_url: '/contact'
      },
      {
        title: 'Healthcare',
        description: 'Supporting rural healthcare facilities with funding and feasibility studies.',
        examples: 'Hospitals, clinics, medical centers',
        icon: 'healthcare',
        color: 'blue',
        button_text: 'Learn More',
        button_url: '/contact'
      },
      {
        title: 'Community Development',
        description: 'Helping communities secure funding for essential infrastructure and facilities.',
        examples: 'Community centers, municipal buildings',
        icon: 'community',
        color: 'indigo',
        button_text: 'Learn More',
        button_url: '/contact'
      }
    ],
    cta_text: 'Don\'t see your sector? We work with many industries not listed here.',
    cta_button_text: 'Contact Us',
    cta_button_url: '/contact',
    content: ''
  };
  
  return {
    intro: introContent,
    sectorsList: sectorsListContent
  };
}

// Funding Solutions interfaces
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

// Function to get funding solutions page content
export function getFundingContent(): FundingPageContent {
  const introContent = {
    _schema: 'funding_intro',
    heading: 'Funding Solutions',
    text: 'Spear Consultants specializes in helping clients navigate government funding programs. We focus on USDA and SBA loan programs that provide favorable terms for qualifying projects.',
    cta_text: 'Contact us to discuss which funding solution is right for your project.',
    cta_url: '/contact',
    content: ''
  };
  
  const comparisonContent = {
    _schema: 'comparison_table',
    heading: 'Loan Program Comparison',
    features: [
      {
        name: 'Interest Rate',
        usda_cf: '2.25% - 3.5%',
        usda_bi: '2.5% - 3.75%',
        sba_7a: '5% - 10%'
      },
      {
        name: 'Term Length',
        usda_cf: 'Up to 40 years',
        usda_bi: 'Up to 30 years',
        sba_7a: 'Up to 25 years'
      },
      {
        name: 'Loan Amount',
        usda_cf: '$100K - $50M+',
        usda_bi: '$100K - $25M',
        sba_7a: 'Up to $5M'
      }
    ],
    content: ''
  };
  
  return {
    intro: introContent,
    comparison: comparisonContent
  };
}

// USDA Loans interfaces
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

export interface USDAPageContent {
  usda: USDALoansContent;
}

// Function to get USDA loans page content
export function getUSDAContent(): USDAPageContent {
  const usdaContent = {
    _schema: 'usda_loans',
    heading: 'USDA Loan Programs',
    intro_text: 'The USDA offers several loan programs designed to support rural development projects. Spear Consultants specializes in two key programs that provide favorable terms for qualifying projects.',
    cf_program: {
      title: 'Community Facilities Program',
      purpose: 'Provides funding for essential community facilities in rural areas and towns.',
      benefits: [
        'Low fixed interest rates (2.25% - 3.5%)',
        'Long terms up to 40 years',
        'No balloon payments',
        'No prepayment penalties',
        'High loan-to-value ratio'
      ],
      eligibility: [
        'Public bodies',
        'Non-profit organizations',
        'Federally recognized tribes',
        'Located in areas with fewer than 20,000 residents',
        'Unable to obtain funding from commercial sources'
      ],
      spear_role: [
        'Determine project eligibility',
        'Prepare and submit application',
        'Conduct feasibility studies',
        'Coordinate with USDA representatives',
        'Guide through closing process'
      ]
    },
    bi_program: {
      title: 'Business & Industry Program',
      purpose: 'Provides loan guarantees to businesses in rural areas to improve economic conditions and create jobs.',
      benefits: [
        'Competitive interest rates (2.5% - 3.75%)',
        'Terms up to 30 years for real estate',
        'Up to 15 years for equipment',
        'Up to 7 years for working capital',
        'Loan guarantees up to 80%'
      ],
      eligibility: [
        'For-profit businesses',
        'Non-profit organizations',
        'Cooperatives and public bodies',
        'Located in areas with fewer than 50,000 residents',
        'U.S. citizenship or permanent residency required'
      ],
      spear_role: [
        'Assess eligibility and structure deals',
        'Prepare comprehensive application packages',
        'Develop business plans and financial projections',
        'Coordinate with lenders and USDA',
        'Provide ongoing support through closing'
      ]
    },
    cta_text: 'Contact us to discuss which USDA program is right for your project.',
    cta_url: '/contact',
    content: ''
  };
  
  return {
    usda: usdaContent
  };
}

// SBA Loans interfaces
export interface SBALoansContent {
  _schema: string;
  heading: string;
  intro_text: string;
  seven_a_program: LoanProgram;
  cta_text: string;
  cta_url: string;
  content?: string;
}

export interface SBAPageContent {
  sba: SBALoansContent;
}

// Function to get SBA loans page content
export function getSBAContent(): SBAPageContent {
  const sbaContent = {
    _schema: 'sba_loans',
    heading: 'SBA Loan Programs',
    intro_text: 'The Small Business Administration offers loan guarantee programs to help small businesses obtain financing. Spear Consultants specializes in the 7(a) Loan Program, the SBA\'s primary program for providing financial assistance.',
    seven_a_program: {
      title: '7(a) Loan Program',
      purpose: 'Provides financial help for businesses with special requirements, offering loan guarantees to lenders to reduce their risk.',
      benefits: [
        'Competitive interest rates (5% - 10%)',
        'Longer terms (up to 25 years for real estate)',
        'Lower down payments',
        'No balloon payments',
        'Flexible overhead requirements'
      ],
      eligibility: [
        'For-profit business',
        'Meets SBA size standards',
        'Operates in the U.S.',
        'Owner has invested equity',
        'Demonstrated need for the loan'
      ],
      spear_role: [
        'Determine eligibility',
        'Prepare loan application',
        'Develop business plan',
        'Financial projections',
        'Coordinate with lenders'
      ]
    },
    cta_text: 'Contact us to learn more about SBA financing options for your business.',
    cta_url: '/contact',
    content: ''
  };
  
  return {
    sba: sbaContent
  };
}

// Feasibility Reports interfaces
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

// Function to get feasibility reports page content
export function getFeasibilityContent(): FeasibilityPageContent {
  const feasibilityContent = {
    _schema: 'feasibility_content',
    heading: 'Feasibility Reports',
    intro_text: 'A cornerstone of our services, feasibility reports are essential for securing funding and ensuring project success. Spear Consultants provides comprehensive feasibility studies tailored to your specific project needs.',
    what_is: 'A feasibility report is a comprehensive analysis that evaluates a project\'s potential for success. It examines financial, technical, legal, operational, and scheduling aspects to determine if the project is viable and sustainable.',
    why_essential: {
      title: 'Why Feasibility Reports Are Essential',
      points: [
        'Required by most lenders and funding agencies',
        'Identifies potential risks and challenges early',
        'Provides realistic financial projections',
        'Validates market demand and revenue assumptions',
        'Serves as a roadmap for project implementation'
      ]
    },
    approach: {
      title: 'Our Approach to Feasibility Studies',
      points: [
        'Comprehensive market analysis',
        'Detailed financial modeling',
        'Site and location evaluation',
        'Regulatory and environmental assessment',
        'Operational planning and management structure'
      ]
    },
    cta_text: 'Contact us to discuss your feasibility report needs.',
    cta_url: '/contact',
    content: ''
  };
  
  return {
    feasibility: feasibilityContent
  };
}

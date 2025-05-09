'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Function to get content from markdown files
export async function getContentData(contentPath) {
  const fullPath = path.join(process.cwd(), contentPath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    ...data,
    content
  };
}

// Function to get all content files from a directory
export async function getAllContentFiles(directory) {
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
export async function getHomeContent() {
  const heroContent = await getContentData('src/content/home/hero/hero.md');
  const aboutContent = await getContentData('src/content/home/about/about.md');
  const servicesContent = await getContentData('src/content/home/services/services.md');
  const ctaContent = await getContentData('src/content/home/cta/cta.md');
  
  return {
    hero: heroContent,
    about: aboutContent,
    services: servicesContent,
    cta: ctaContent
  };
}

// About page content
export async function getAboutContent() {
  const introContent = await getContentData('src/content/about/intro/intro.md');
  const mainContent = await getContentData('src/content/about/main/main.md');
  
  return {
    intro: introContent,
    main: mainContent
  };
}

// Process page content
export async function getProcessContent() {
  const introContent = await getContentData('src/content/process/intro/intro.md');
  const fundingContent = await getContentData('src/content/process/funding/funding.md');
  const timelineContent = await getContentData('src/content/process/timeline/timeline.md');
  
  return {
    intro: introContent,
    funding: fundingContent,
    timeline: timelineContent
  };
}

// Projects page content
export async function getProjectsContent() {
  const introContent = await getContentData('src/content/projects/intro/intro.md');
  const recentContent = await getContentData('src/content/projects/recent/recent.md');
  
  return {
    intro: introContent,
    recent: recentContent
  };
}

// Contact page content
export async function getContactContent() {
  const introContent = await getContentData('src/content/contact/intro/intro.md');
  const detailsContent = await getContentData('src/content/contact/details/details.md');
  
  return {
    intro: introContent,
    details: detailsContent
  };
}

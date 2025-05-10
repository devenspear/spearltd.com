import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface LegalDocument {
  title: string;
  content: string;
  last_updated: string;
}

async function getLegalContent(): Promise<{
  terms: LegalDocument;
  privacy: LegalDocument;
}> {
  const termsPath = path.join(process.cwd(), 'src/content/legal/terms.md');
  const privacyPath = path.join(process.cwd(), 'src/content/legal/privacy.md');
  
  const termsContent = fs.readFileSync(termsPath, 'utf8');
  const privacyContent = fs.readFileSync(privacyPath, 'utf8');
  
  const termsMatter = matter(termsContent);
  const privacyMatter = matter(privacyContent);
  
  // Process markdown content to HTML
  const termsProcessedContent = await remark()
    .use(html)
    .process(termsMatter.content);
  const termsContentHtml = termsProcessedContent.toString();
  
  const privacyProcessedContent = await remark()
    .use(html)
    .process(privacyMatter.content);
  const privacyContentHtml = privacyProcessedContent.toString();
  
  return {
    terms: {
      title: termsMatter.data.title,
      content: termsContentHtml,
      last_updated: termsMatter.data.last_updated,
    },
    privacy: {
      title: privacyMatter.data.title,
      content: privacyContentHtml,
      last_updated: privacyMatter.data.last_updated,
    },
  };
}

export default async function LegalPage() {
  const { terms, privacy } = await getLegalContent();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">Legal Information</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <Link 
            href="#terms" 
            className="bg-green-800 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center"
          >
            Terms of Service
          </Link>
          <Link 
            href="#privacy" 
            className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center"
          >
            Privacy Policy
          </Link>
        </div>
        
        <div id="terms" className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: terms.content }} />
          </div>
          <p className="text-sm text-gray-500 mt-6">Last Updated: {terms.last_updated}</p>
        </div>
        
        <div id="privacy" className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: privacy.content }} />
          </div>
          <p className="text-sm text-gray-500 mt-6">Last Updated: {privacy.last_updated}</p>
        </div>
        
        <div className="flex justify-center">
          <Link 
            href="/" 
            className="bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
          >
            <span>Return to Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

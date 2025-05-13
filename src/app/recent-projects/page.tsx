import React from 'react';
import Link from 'next/link';
import { getProjectsContent } from '@/lib/contentUtils';
import ProjectFilterClient from './project-filter-client';

export default async function RecentProjectsPage() {
  const { intro, recent } = await getProjectsContent();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">{intro.heading}</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <p className="text-lg mb-6">
            {intro.text}
          </p>
          
          <div className="italic text-gray-600 text-sm border-l-4 border-gray-300 pl-4 mb-8">
            {recent.confidentiality_note}
          </div>
          
          <ProjectFilterClient 
            projects={recent.projects} 
            projectTypes={recent.project_types} 
            years={recent.years} 
          />
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8 mt-12">
            <p className="text-lg">
              {recent.additional_info}
            </p>
          </div>
          
          <div className="text-center">
            <Link 
              href={recent.button_url} 
              className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <span>{recent.button_text}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Using ProjectItem interface from project-filter-client.tsx

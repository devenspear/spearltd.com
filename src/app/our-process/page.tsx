import React from 'react';
import Link from 'next/link';
import { getProcessContent } from '@/lib/content';

export default function OurProcessPage() {
  const { intro, funding, timeline } = getProcessContent();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">{intro.heading}</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          {intro.text.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-lg mb-6">
              {paragraph}
            </p>
          ))}
          
          <h2 className="text-3xl font-bold text-blue-900 mb-4">{funding.heading}</h2>
          
          {funding.text.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-lg mb-6">
              {paragraph}
            </p>
          ))}
          
          <ul className="list-disc pl-6 mb-8 text-lg space-y-2">
            {funding.required_reports.map((report, idx) => (
              <li key={idx}>{report}</li>
            ))}
          </ul>
          
          <h2 className="text-3xl font-bold text-blue-900 mb-4">{timeline.heading}</h2>
          
          <ol className="list-decimal pl-6 mb-8 text-lg space-y-2">
            {timeline.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
          
          <div className="bg-blue-50 border-l-4 border-blue-800 p-6 rounded-r-lg mb-8">
            <p className="text-lg text-blue-900">
              <span className="font-bold">Confidentiality Note:</span> {timeline.confidentiality_note}
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Link 
            href="/contact" 
            className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
          >
            <span>Start Your Project Today</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

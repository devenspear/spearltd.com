import React from 'react';
import Link from 'next/link';
import { getAboutContent } from '@/lib/contentUtils';

export default async function AboutPage() {
  const { intro, main } = await getAboutContent();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">{intro.heading}</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <p className="text-lg mb-6">
            {intro.text}
          </p>
          
          <h2 className="text-3xl font-bold text-blue-900 mb-4">{main.heading}</h2>
          
          {main.text.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-lg mb-6">
              {paragraph}
            </p>
          ))}
          
          <div className="bg-green-50 border-l-4 border-green-800 p-6 rounded-r-lg mb-6">
            <p className="text-lg italic text-green-800">
              {main.quote}
            </p>
          </div>
          
          {main.additional_text.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-lg mb-6">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link 
            href={main.button_url} 
            className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
          >
            <span>{main.button_text}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

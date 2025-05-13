import React from 'react';
import Link from 'next/link';
import { getSectorsContent } from '@/lib/contentUtils';

export default async function SectorsPage() {
  const { intro, sectorsList } = await getSectorsContent();
  
  // Icons for each sector
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'golf':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
          </svg>
        );
      case 'community':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'hospitality':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case 'commercial':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">{intro.heading}</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <p className="text-lg mb-6">
            {intro.text}
          </p>
        </div>
        
        {/* Sectors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {sectorsList.sectors.map((sector, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:shadow-xl hover:-translate-y-1"
            >
              <div className={
                sector.color === 'green-800' ? 'p-8 bg-green-800 bg-opacity-10' : 
                sector.color === 'blue-800' ? 'p-8 bg-blue-800 bg-opacity-10' : 
                sector.color === 'teal-700' ? 'p-8 bg-teal-700 bg-opacity-10' : 
                'p-8 bg-indigo-700 bg-opacity-10'
              }>
                <div className={
                  sector.color === 'green-800' ? 'mb-6 text-green-800' : 
                  sector.color === 'blue-800' ? 'mb-6 text-blue-800' : 
                  sector.color === 'teal-700' ? 'mb-6 text-teal-700' : 
                  'mb-6 text-indigo-700'
                }>
                  {getIcon(sector.icon)}
                </div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">{sector.title}</h2>
                <p className="text-gray-700 mb-6">
                  {sector.description}
                </p>
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-blue-900 mb-2">Examples:</h3>
                  <p className="text-gray-700">{sector.examples}</p>
                </div>
                <Link 
                  href={sector.button_url} 
                  className={
                    sector.color === 'green-800' ? 'inline-flex items-center font-medium hover:underline text-green-800' : 
                    sector.color === 'blue-800' ? 'inline-flex items-center font-medium hover:underline text-blue-800' : 
                    sector.color === 'teal-700' ? 'inline-flex items-center font-medium hover:underline text-teal-700' : 
                    'inline-flex items-center font-medium hover:underline text-indigo-700'
                  }
                >
                  <span>{sector.button_text}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-800 to-blue-900 text-white rounded-xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">{sectorsList.cta_text}</h2>
          <Link 
            href={sectorsList.cta_button_url} 
            className="bg-white text-green-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center w-full sm:w-auto"
          >
            <span>{sectorsList.cta_button_text}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

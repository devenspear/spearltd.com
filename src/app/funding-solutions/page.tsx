import React from 'react';
import Link from 'next/link';
import { getFundingContent } from '@/lib/content';

export default async function FundingSolutionsPage() {
  // Only destructure the intro content, intentionally not using comparison data
  const { intro } = await getFundingContent();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">{intro.heading}</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <p className="text-lg mb-8">
            {intro.text}
          </p>
          
          {/* Loan Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* USDA Loans Card */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">USDA Loans</h2>
              <p className="mb-4">
                USDA Rural Development programs offer vital funding for projects that enhance rural communities, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Community Facilities (CF) Program</li>
                <li>Business & Industry (B&I) Program</li>
              </ul>
              <Link 
                href="/funding-solutions/usda-loans" 
                className="inline-flex items-center text-blue-800 font-medium hover:underline"
              >
                <span>Learn more about USDA loans</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            {/* SBA Loans Card */}
            <div className="bg-green-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-green-800 mb-4">SBA Loans</h2>
              <p className="mb-4">
                The Small Business Administration (SBA) offers loan programs to help small businesses start, grow, and succeed, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>7(a) Loan Program - versatile financing up to $5M</li>
              </ul>
              <Link 
                href="/funding-solutions/sba-loans" 
                className="inline-flex items-center text-green-800 font-medium hover:underline"
              >
                <span>Learn more about SBA loans</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Contact us CTA button */}
          <div className="text-center">
            <Link 
              href="/contact" 
              className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <span>Contact us to discuss which funding solution is right for your project.</span>
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

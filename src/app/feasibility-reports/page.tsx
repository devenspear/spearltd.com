import React from 'react';
import Link from 'next/link';
import { getFeasibilityContent } from '@/lib/content';

export default async function FeasibilityReportsPage() {
  const { feasibility } = await getFeasibilityContent();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">{feasibility.heading}</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg mb-6">
              {feasibility.intro_text}
            </p>
          </div>
          
          {/* What is a Feasibility Report */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">What is a Feasibility Report?</h2>
            <p className="text-lg mb-6">
              {feasibility.what_is}
            </p>
            
            {/* Infographic */}
            <div className="bg-blue-50 rounded-xl p-6 my-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Components of a Comprehensive Feasibility Report</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 text-center shadow-md">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-blue-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-blue-900 mb-2">Market Analysis</h4>
                  <p className="text-sm">Demand assessment, competitive landscape, and target demographics</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 text-center shadow-md">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-green-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-green-800 mb-2">Technical Feasibility</h4>
                  <p className="text-sm">Site evaluation, infrastructure requirements, and operational considerations</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 text-center shadow-md">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-indigo-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-indigo-800 mb-2">Financial Analysis</h4>
                  <p className="text-sm">Capital requirements, projected revenues, expenses, and return on investment</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 text-center shadow-md">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-amber-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-amber-800 mb-2">Management Assessment</h4>
                  <p className="text-sm">Organizational structure, expertise, and operational capabilities</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Why is it Essential */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">{feasibility.why_essential.title}</h2>
            <ul className="space-y-4">
              {feasibility.why_essential.points.map((point, index) => {
                const [title, description] = point.split(': ');
                return (
                  <li key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-blue-900 mb-1">{title}:</h3>
                    <p>{description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          
          {/* The Spear Consultants Approach */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">{feasibility.approach.title}</h2>
            <ul className="space-y-4">
              {feasibility.approach.points.map((point, index) => {
                const [title, description] = point.split(': ');
                return (
                  <li key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-green-800 mb-1">{title}:</h3>
                    <p>{description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          
          {/* Sample Report Section */}
          <div className="mb-12 bg-blue-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Feasibility Reports Make a Difference</h2>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/2">
                <p className="mb-4">
                  Our reports have helped secure over $2 billion in funding for more than 630 projects across all 50 states. Each report is tailored to the specific project and provides:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comprehensive market analysis</li>
                  <li>Detailed financial projections</li>
                  <li>Risk assessment and mitigation strategies</li>
                  <li>Clear recommendations for success</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="aspect-w-3 aspect-h-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-green-100 flex items-center justify-center">
                      <div className="text-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-blue-800 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">Sample Report</h3>
                        <p className="text-gray-700 mb-4">Contact us to see a sample feasibility report tailored to your industry.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <Link 
              href={feasibility.cta_url} 
              className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <span>{feasibility.cta_text}</span>
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

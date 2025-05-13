import React from 'react';
import Link from 'next/link';
import { getUSDAContent } from '@/lib/contentUtils';

export default async function USDAFundingProcedurePage() {
  const { usda } = await getUSDAContent();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">USDA Funding Procedure</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg mb-6">
              {usda.intro_text}
            </p>
          </div>
          
          {/* USDA Community Facilities Program */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">USDA Community Facilities (CF) Program</h2>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Program Purpose</h3>
              <p className="mb-4">{usda.cf_program.purpose}</p>
              
              <h3 className="text-xl font-bold text-blue-900 mb-4">Key Benefits</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                {usda.cf_program.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold text-blue-900 mb-4">Eligibility Requirements</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                {usda.cf_program.eligibility.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* USDA Business & Industry Program */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">USDA Business & Industry (B&I) Program</h2>
            
            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-4">Program Purpose</h3>
              <p className="mb-4">{usda.bi_program.purpose}</p>
              
              <h3 className="text-xl font-bold text-green-800 mb-4">Key Benefits</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                {usda.bi_program.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold text-green-800 mb-4">Eligibility Requirements</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                {usda.bi_program.eligibility.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Typical USDA Funding Procedure */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Typical USDA Funding Procedure</h2>
            
            <div className="relative border-l-4 border-blue-800 pl-8 py-4 mb-8">
              <div className="absolute w-4 h-4 bg-blue-800 rounded-full -left-2 top-0"></div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 1: Initial Consultation</h3>
              <p>Meet with Spear Consultants to discuss your project and determine eligibility for USDA funding programs.</p>
            </div>
            
            <div className="relative border-l-4 border-blue-800 pl-8 py-4 mb-8">
              <div className="absolute w-4 h-4 bg-blue-800 rounded-full -left-2 top-0"></div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 2: Feasibility Study</h3>
              <p>Complete a comprehensive feasibility study to demonstrate project viability and financial sustainability.</p>
            </div>
            
            <div className="relative border-l-4 border-blue-800 pl-8 py-4 mb-8">
              <div className="absolute w-4 h-4 bg-blue-800 rounded-full -left-2 top-0"></div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 3: Application Preparation</h3>
              <p>Prepare and submit the USDA loan application with all required documentation and supporting materials.</p>
            </div>
            
            <div className="relative border-l-4 border-blue-800 pl-8 py-4 mb-8">
              <div className="absolute w-4 h-4 bg-blue-800 rounded-full -left-2 top-0"></div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 4: USDA Review</h3>
              <p>USDA reviews the application, conducts site visits, and performs due diligence on the project.</p>
            </div>
            
            <div className="relative border-l-4 border-blue-800 pl-8 py-4 mb-8">
              <div className="absolute w-4 h-4 bg-blue-800 rounded-full -left-2 top-0"></div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 5: Funding Approval</h3>
              <p>Upon approval, USDA issues a Letter of Conditions outlining the terms of the loan.</p>
            </div>
            
            <div className="relative border-l-4 border-blue-800 pl-8 py-4 mb-8">
              <div className="absolute w-4 h-4 bg-blue-800 rounded-full -left-2 top-0"></div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 6: Closing and Disbursement</h3>
              <p>Complete closing requirements and begin receiving funds for your project.</p>
            </div>
          </div>
          
          {/* Spear's Role */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-6">How Spear Consultants Helps</h2>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">Our Expertise in USDA Funding</h3>
              <ul className="list-disc pl-6 space-y-2">
                {usda.cf_program.spear_role.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/funding-solutions/usda-loans" 
              className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <span>Learn More About USDA Loans</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getUSDAContent } from '@/lib/contentUtils';

export default async function USDALoansPage() {
  const { usda } = await getUSDAContent();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">{usda.heading}</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 mb-8 items-center">
            <div className="md:w-2/3">
              <p className="text-lg mb-6">
                {usda.intro_text}
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="relative w-full h-32 md:h-40">
                <Image 
                  src="/images/usdalogo.png" 
                  alt="USDA Logo" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
          
          {/* Community Facilities Program */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{usda.cf_program.title}</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Purpose</h3>
              <p>{usda.cf_program.purpose}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Benefits</h3>
              <ul className="list-disc pl-6 space-y-1">
                {usda.cf_program.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Eligibility</h3>
              <ul className="list-disc pl-6 space-y-1">
                {usda.cf_program.eligibility.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Spear Consultants' Role</h3>
              <ul className="list-disc pl-6 space-y-1">
                {usda.cf_program.spear_role.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Business & Industry Program */}
          <div className="bg-indigo-50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">{usda.bi_program.title}</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Purpose</h3>
              <p>{usda.bi_program.purpose}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Benefits</h3>
              <ul className="list-disc pl-6 space-y-1">
                {usda.bi_program.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Eligibility</h3>
              <ul className="list-disc pl-6 space-y-1">
                {usda.bi_program.eligibility.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Spear Consultants' Role</h3>
              <ul className="list-disc pl-6 space-y-1">
                {usda.bi_program.spear_role.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <Link 
              href={usda.cta_url} 
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <span>{usda.cta_text}</span>
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

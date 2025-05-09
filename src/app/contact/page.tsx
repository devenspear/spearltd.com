import React from 'react';
import { getContactContent } from '@/lib/contentUtils';
import ContactForm from '@/components/ContactForm';

export default async function ContactPage() {
  const { intro, details } = await getContactContent();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">{intro.heading}</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-4">{intro.text}</p>
          </div>
        </div>
        
        <ContactForm details={details} />
      </div>
    </div>
  );
}

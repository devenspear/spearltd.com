'use client';

import React, { useState, useRef, useEffect } from 'react';
import EmailObfuscator from '@/components/EmailObfuscator';

interface ContactFormProps {
  details: {
    heading: string;
    phone: {
      label: string;
      number: string;
      url: string;
    };
    email: {
      label: string;
      address: string;
      url: string;
    };
    service_area_heading: string;
    service_area_text: string;
  };
}

export default function ContactForm({ details }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    source: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  
  // Initialize Turnstile when component mounts
  useEffect(() => {
    // Load the Turnstile script
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    // Render Turnstile when the script is loaded
    script.onload = () => {
      if (window.turnstile) {
        turnstileWidgetId.current = window.turnstile.render('#turnstile-container', {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '',
          callback: (token: string) => {
            setTurnstileToken(token);
          },
        });
      }
    };
    
    // Clean up
    return () => {
      if (window.turnstile && turnstileWidgetId.current) {
        window.turnstile.remove(turnstileWidgetId.current);
      }
      document.body.removeChild(script);
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Check if Turnstile token exists
      if (!turnstileToken) {
        throw new Error('Please wait for the human verification to complete');
      }
      
      // Reset Turnstile for next submission
      if (window.turnstile && turnstileWidgetId.current) {
        window.turnstile.reset(turnstileWidgetId.current);
      }
      
      // Send form data to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      // Success
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        source: '',
        message: ''
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-form" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-4 sm:px-6 md:px-0">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-green-800 mb-6">Send Us a Message</h3>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6">
            <h4 className="font-bold mb-1">Error</h4>
            <p>{error}</p>
          </div>
        )}
        
        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-2">Thank you for your message!</h4>
            <p className="mb-4">We have received your inquiry and will get back to you as soon as possible.</p>
            <p className="text-sm text-gray-600">This form will reset when you reload the page.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <div>
              <label htmlFor="source" className="block text-gray-700 font-medium mb-2">How did you hear about us?</label>
              <input
                type="text"
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              ></textarea>
            </div>
            
            <div id="turnstile-container" className="mb-6"></div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-green-800 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        )}
      </div>
      
      <div className="mt-8 md:mt-0">
        <h3 className="text-2xl font-bold text-green-800 mb-6">{details.heading}</h3>
        
        <div className="space-y-8">

          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{details.email.label}</h4>
            <EmailObfuscator
              className="text-xl text-green-700 hover:text-green-800 transition-colors font-medium flex items-center"
              linkText={details.email.address}
              showIcon={true}
            />
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{details.service_area_heading}</h4>
            <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: details.service_area_text }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

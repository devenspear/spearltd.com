'use client';

import React, { useState, useEffect } from 'react';
import { FiMail } from 'react-icons/fi';

interface EmailObfuscatorProps {
  className?: string;
  showIcon?: boolean;
  linkText?: string;
}

const EmailObfuscator: React.FC<EmailObfuscatorProps> = ({ 
  className = '', 
  showIcon = true,
  linkText = 'Email Us'
}) => {
  const [email, setEmail] = useState<string>('');
  const [mailtoLink, setMailtoLink] = useState<string>('#');
  
  useEffect(() => {
    // Decode the email parts to prevent static crawling
    const user = decodeURIComponent('i%6E%66%6F');
    const domain = decodeURIComponent('s%70%65%61%72%6C%74%64%2E%63%6F%6D');
    const completeEmail = `${user}@${domain}`;
    
    setEmail(completeEmail);
    setMailtoLink(`mailto:${completeEmail}`);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!email) {
      e.preventDefault();
    }
  };

  return (
    <a 
      href={mailtoLink} 
      className={className}
      onClick={handleClick}
      rel="nofollow"
      aria-label="Send us an email"
    >
      {showIcon && <FiMail className="mr-2" />}
      <span>{linkText}</span>
    </a>
  );
};

export default EmailObfuscator;

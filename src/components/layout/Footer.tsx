import Link from 'next/link';
import { FiMapPin } from 'react-icons/fi';
import EmailObfuscator from '@/components/EmailObfuscator';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12 px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Spear Consultants</h3>
            <p className="text-gray-300 mb-4">Experts in public funding and evaluations since 1972.</p>

            <div className="flex items-center mb-2">
              <EmailObfuscator 
                className="text-gray-300 hover:text-white transition-colors flex items-center" 
                linkText="info@spearltd.com" 
              />
            </div>
            <div className="flex items-start">
              <FiMapPin className="mr-2 mt-1 text-accent" />
              <span className="text-gray-300">
                Serving clients across the United States
              </span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-process" className="text-gray-300 hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/recent-projects" className="text-gray-300 hover:text-white transition-colors">
                  Recent Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/feasibility-reports" className="text-gray-300 hover:text-white transition-colors">
                  What is a Feasibility Report?
                </Link>
              </li>
              <li>
                <Link href="/funding-solutions/usda-loans" className="text-gray-300 hover:text-white transition-colors">
                  USDA Funding Procedure
                </Link>
              </li>
              <li>
                <Link href="/legal#privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal#terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Spear Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from 'next/link';
import { FiMessageSquare, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12 px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Spear Consultants</h3>
            <p className="text-gray-300 mb-4">Experts in public funding and evaluations since 1972.</p>
            <div className="flex items-center mb-2">
              <FiMessageSquare className="mr-2 text-accent" />
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
            <div className="flex items-center mb-2">
              <FiMail className="mr-2 text-accent" />
              <a href="mailto:info@spearltd.com" className="text-gray-300 hover:text-white transition-colors">
                info@spearltd.com
              </a>
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
                <Link href="/articles/what-is-a-feasibility-report" className="text-gray-300 hover:text-white transition-colors">
                  What is a Feasibility Report?
                </Link>
              </li>
              <li>
                <Link href="/articles/typical-procedure-for-usda-funding" className="text-gray-300 hover:text-white transition-colors">
                  USDA Funding Procedure
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
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

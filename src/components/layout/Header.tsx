'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMessageSquare } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Sectors We Serve', href: '/sectors-we-serve' },
    { name: 'Funding Solutions', href: '/funding-solutions' },
    { name: 'Feasibility Reports', href: '/feasibility-reports' },
    { name: 'Our Process', href: '/our-process' },
    { name: 'Recent Projects', href: '/recent-projects' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white shadow-sm py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-3xl md:text-4xl font-serif font-bold text-primary">
            Spear Consultants
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base md:text-lg font-medium transition-colors hover:text-primary ${
                pathname === item.href ? 'text-primary' : 'text-secondary'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="flex items-center text-base md:text-lg font-medium text-white bg-primary px-4 py-2 rounded hover:bg-primary-light transition-colors"
          >
            <FiMessageSquare className="mr-2" />
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    pathname === item.href ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="flex items-center justify-center text-base font-medium text-white bg-primary px-4 py-2 rounded hover:bg-primary-light transition-colors"
              >
                <FiMessageSquare className="mr-2" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

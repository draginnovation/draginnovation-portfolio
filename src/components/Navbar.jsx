import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-bg-darker/80 backdrop-blur-lg border-b border-white/5' : 'py-5 bg-transparent'
      }`}>
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline group">
          <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/20 shadow-lg group-hover:border-primary transition-colors">
            <img src={logo} alt="Drag Innovation" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-heading">
            DRAG <span className="text-gradient">INNOVATION</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-white transition-colors duration-200 no-underline"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary py-2 px-5 no-underline">
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full glass border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-text-muted hover:text-white no-underline flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight size={18} className="text-white/20 group-hover:text-primary transition-colors" />
                </a>
              ))}
              <a
                href="#contact"
                className="btn btn-primary w-full justify-center no-underline mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

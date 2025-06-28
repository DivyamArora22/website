import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { scrollToSection } from '@/lib/utils';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-primary">
            Divyam Arora
          </div>
          
          <div className="hidden md:flex space-x-8">
            {location === '/' ? (
              <>
                <button 
                  onClick={() => handleNavClick('home')} 
                  className="nav-link text-gray-700 hover:text-accent font-medium"
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNavClick('about')} 
                  className="nav-link text-gray-700 hover:text-accent font-medium"
                >
                  About
                </button>
                <button 
                  onClick={() => handleNavClick('projects')} 
                  className="nav-link text-gray-700 hover:text-accent font-medium"
                >
                  Projects
                </button>
                <button 
                  onClick={() => handleNavClick('skills')} 
                  className="nav-link text-gray-700 hover:text-accent font-medium"
                >
                  Skills
                </button>
                <button 
                  onClick={() => handleNavClick('contact')} 
                  className="nav-link text-gray-700 hover:text-accent font-medium"
                >
                  Contact
                </button>
              </>
            ) : (
              <Link href="/" className="nav-link text-gray-700 hover:text-accent font-medium">
                Home
              </Link>
            )}
            <Link href="/resume" className="nav-link text-gray-700 hover:text-accent font-medium">
              Resume
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-accent" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-3 pb-4">
              {location === '/' ? (
                <>
                  <button 
                    onClick={() => handleNavClick('home')} 
                    className="text-gray-700 hover:text-accent font-medium text-left"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => handleNavClick('about')} 
                    className="text-gray-700 hover:text-accent font-medium text-left"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => handleNavClick('projects')} 
                    className="text-gray-700 hover:text-accent font-medium text-left"
                  >
                    Projects
                  </button>
                  <button 
                    onClick={() => handleNavClick('skills')} 
                    className="text-gray-700 hover:text-accent font-medium text-left"
                  >
                    Skills
                  </button>
                  <button 
                    onClick={() => handleNavClick('contact')} 
                    className="text-gray-700 hover:text-accent font-medium text-left"
                  >
                    Contact
                  </button>
                </>
              ) : (
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-accent font-medium text-left"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              <Link 
                href="/resume" 
                className="text-gray-700 hover:text-accent font-medium text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

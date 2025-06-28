import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { scrollToSection } from '@/lib/utils';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const projectLinks = [
    { title: "RISC-V CPU", href: "/projects/risc-v-cpu" },
    { title: "Datapath Layout", href: "/projects/datapath-layout" },
    { title: "OHLC Aggregator", href: "/projects/ohlc-aggregator" },
    { title: "Mortal Kombat Game", href: "/projects/mortal-kombat-game" },
    { title: "Linux-like OS", href: "/projects/linux-os" }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
                <div className="relative">
                  <button 
                    onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                    className="nav-link text-gray-700 hover:text-accent font-medium flex items-center"
                  >
                    Projects <i className="fas fa-chevron-down ml-1 text-xs"></i>
                  </button>
                  {isProjectsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                      <button 
                        onClick={() => {
                          handleNavClick('projects');
                          setIsProjectsDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-accent"
                      >
                        All Projects
                      </button>
                      <div className="border-t border-gray-100 my-1"></div>
                      {projectLinks.map((project) => (
                        <Link 
                          key={project.href} 
                          href={project.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-accent text-sm"
                          onClick={() => setIsProjectsDropdownOpen(false)}
                        >
                          {project.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
              <>
                <Link href="/" className="nav-link text-gray-700 hover:text-accent font-medium">
                  Home
                </Link>
                <div className="relative">
                  <button 
                    onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                    className="nav-link text-gray-700 hover:text-accent font-medium flex items-center"
                  >
                    Projects <i className="fas fa-chevron-down ml-1 text-xs"></i>
                  </button>
                  {isProjectsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                      {projectLinks.map((project) => (
                        <Link 
                          key={project.href} 
                          href={project.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-accent text-sm"
                          onClick={() => setIsProjectsDropdownOpen(false)}
                        >
                          {project.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </>
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

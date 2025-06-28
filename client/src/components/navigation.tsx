import { useState } from 'react';
import { scrollToSection } from '@/lib/utils';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-primary">
            John Doe
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavClick('home')} 
              className="nav-link text-foreground hover:text-accent font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="nav-link text-foreground hover:text-accent font-medium"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('projects')} 
              className="nav-link text-foreground hover:text-accent font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavClick('skills')} 
              className="nav-link text-foreground hover:text-accent font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="nav-link text-foreground hover:text-accent font-medium"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground hover:text-accent" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-3 pb-4">
              <button 
                onClick={() => handleNavClick('home')} 
                className="text-foreground hover:text-accent font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('about')} 
                className="text-foreground hover:text-accent font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('projects')} 
                className="text-foreground hover:text-accent font-medium text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavClick('skills')} 
                className="text-foreground hover:text-accent font-medium text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="text-foreground hover:text-accent font-medium text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

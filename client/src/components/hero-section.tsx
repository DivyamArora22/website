import { scrollToSection } from '@/lib/utils';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Hi, I'm <span className="text-accent">Divyam Arora</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
            Computer Engineering Graduate from UIUC
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            A hardware engineer passionate about computer architecture and digital design.
            I love building fast, efficient systems from the ground up, whether it's crafting 
            pipelines, optimizing microarchitecture, or verifying complex designs. I'm driven 
            by curiosity, precision, and the pursuit of performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

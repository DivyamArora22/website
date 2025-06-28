import { useEffect } from 'react';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  useEffect(() => {
    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(el => observer.observe(el));

    // Animate skill bars when they come into view
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll('.skill-bar');
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              bar.classList.add('animate');
            }, index * 100); // Stagger animation for each bar
          });
        }
      });
    }, { 
      threshold: 0.3, // Lower threshold for better mobile detection
      rootMargin: '0px 0px -50px 0px' // Less aggressive root margin
    });

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      skillObserver.observe(skillsSection);
    }

    // Backup method: Also observe individual skill containers
    const skillContainers = document.querySelectorAll('.fade-in-section');
    skillContainers.forEach(container => {
      if (container.querySelector('.skill-bar')) {
        skillObserver.observe(container);
      }
    });

    // Active navigation link highlighting
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');
      
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
      if (skillsSection) {
        skillObserver.unobserve(skillsSection);
      }
      skillContainers.forEach(container => {
        if (container.querySelector('.skill-bar')) {
          skillObserver.unobserve(container);
        }
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

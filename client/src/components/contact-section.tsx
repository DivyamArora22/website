import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactItem {
  title: string;
  icon: string;
  value: string;
  link?: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactItems: ContactItem[] = [
    {
      title: "Email",
      icon: "fas fa-envelope",
      value: "divyama3@illinois.edu",
      link: "mailto:divyama3@illinois.edu"
    },
    {
      title: "LinkedIn",
      icon: "fab fa-linkedin",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/divyamarora22"
    },
    {
      title: "GitHub",
      icon: "fab fa-github",
      value: "View my code",
      link: "https://github.com/DivyamArora22"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-in-section text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {contactItems.map((item) => (
            <div key={item.title} className="fade-in-section text-center">
              <div className="contact-item inline-block p-6 bg-white/10 backdrop-blur-sm rounded-full mb-4 hover:bg-accent/20 cursor-pointer">
                <i className={`${item.icon} text-3xl text-accent`}></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              {item.link ? (
                <a 
                  href={item.link}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-300">{item.value}</p>
              )}
            </div>
          ))}
        </div>
        
        {/* Contact Form */}
        <div className="fade-in-section mt-12 max-w-xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-center">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-accent transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-accent transition-colors"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-accent transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={3}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-accent transition-colors resize-none"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

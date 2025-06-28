export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-in-section text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a dedicated computer engineering student with a passion for creating 
            meaningful technology solutions that make a difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Education Card */}
          <div className="fade-in-section bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-accent transition-all duration-300 hover:scale-105">
            <div className="text-accent text-4xl mb-4">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <p className="text-gray-300 leading-relaxed">
              Currently pursuing Bachelor's in Computer Engineering, 
              focusing on software development, algorithms, and system design.
            </p>
          </div>
          
          {/* Experience Card */}
          <div className="fade-in-section bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-accent transition-all duration-300 hover:scale-105">
            <div className="text-accent text-4xl mb-4">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Development</h3>
            <p className="text-gray-300 leading-relaxed">
              Experience in full-stack development, mobile applications, 
              and exploring emerging technologies like AI and IoT.
            </p>
          </div>
          
          {/* Passion Card */}
          <div className="fade-in-section bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-accent transition-all duration-300 hover:scale-105">
            <div className="text-accent text-4xl mb-4">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-300 leading-relaxed">
              Passionate about solving complex problems through creative 
              thinking and cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

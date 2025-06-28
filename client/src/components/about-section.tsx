export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-in-section text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a dedicated hardware engineer with a passion for computer architecture 
            and digital design, focused on building fast, efficient systems from the ground up.
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
              Bachelor of Science in Computer Engineering from University of Illinois 
              at Urbana-Champaign (2021-2025), with focus on digital design and computer architecture.
            </p>
          </div>
          
          {/* Hardware Design Card */}
          <div className="fade-in-section bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-accent transition-all duration-300 hover:scale-105">
            <div className="text-accent text-4xl mb-4">
              <i className="fas fa-microchip"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Hardware Design</h3>
            <p className="text-gray-300 leading-relaxed">
              Expert in RTL design with SystemVerilog, CPU architecture including 
              out-of-order execution, register renaming, and advanced verification with UVM.
            </p>
          </div>
          
          {/* Innovation Card */}
          <div className="fade-in-section bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-accent transition-all duration-300 hover:scale-105">
            <div className="text-accent text-4xl mb-4">
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">System Optimization</h3>
            <p className="text-gray-300 leading-relaxed">
              Passionate about synthesis, timing closure, and performance optimization 
              using industry-standard tools like Synopsys and Cadence suites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

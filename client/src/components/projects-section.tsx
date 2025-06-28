import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo?: string;
  github?: string;
}

export default function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Out-of-Order RISC-V CPU (RV32IM)",
      description: "Designed and implemented a 5-stage pipelined OoO processor with register renaming, GShare branch prediction, and a 4-way set-associative cache. Integrated RAT, ROB, RS, LSQ, and bypassing logic.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["SystemVerilog", "RISC-V", "OoO Execution", "Cache Design"],
      github: "https://github.com/DivyamArora22"
    },
    {
      id: 2,
      title: "Datapath Layout in Cadence Virtuoso",
      description: "Designed and laid out the datapath of a custom 32-bit processor using Cadence Virtuoso. Performed DRC, LVS, and parasitic extraction, optimizing for area, timing, and power using standard-cell-based methodology.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Cadence Virtuoso", "VLSI Layout", "DRC/LVS", "Physical Design"],
      github: "https://github.com/DivyamArora22"
    },
    {
      id: 3,
      title: "FPGA-based Mortal Kombat Game",
      description: "Developed a hardware-software co-designed fighting game on a Xilinx FPGA. Integrated MicroBlaze softcore, custom AXI peripherals, VGA controller, and button inputs for real-time gameplay.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Xilinx Vivado", "MicroBlaze", "AXI Protocol", "VGA Controller"],
      github: "https://github.com/DivyamArora22"
    }
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-in-section text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div key={project.id} className="fade-in-section project-card bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo} 
                      className="text-accent hover:text-accent/80 font-medium transition-colors"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="text-muted-foreground hover:text-primary font-medium transition-colors"
                    >
                      <i className="fab fa-github mr-2"></i>Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {projects.length > 3 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              {showAllProjects ? 'Show Less' : 'View All Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

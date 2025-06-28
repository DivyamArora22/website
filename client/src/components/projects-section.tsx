import { useState } from 'react';
import { Link } from 'wouter';

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

  const getProjectRoute = (title: string) => {
    const routes: { [key: string]: string } = {
      "Out-of-Order RISC-V CPU (RV32IM)": "/projects/risc-v-cpu",
      "Datapath Layout in Cadence Virtuoso": "/projects/datapath-layout", 
      "Real-Time Hardware-Accelerated OHLC Aggregator": "/projects/ohlc-aggregator",
      "FPGA-based Mortal Kombat Game": "/projects/mortal-kombat-game",
      "Linux-Like Operating System (x86)": "/projects/linux-os"
    };
    return routes[title] || "#";
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Out-of-Order RISC-V CPU (RV32IM)",
      description: "Designed and implemented a 5-stage pipelined OoO processor with register renaming, GShare branch prediction, and a 4-way set-associative cache. Integrated RAT, ROB, RS, LSQ, and bypassing logic.",
      image: "/images/riscv.png",
      technologies: ["SystemVerilog", "RISC-V", "OoO Execution", "Cache Design"],
      github: "https://github.com/DivyamArora22"
    },
    {
      id: 2,
      title: "Datapath Layout in Cadence Virtuoso",
      description: "Designed and laid out the datapath of a custom 32-bit processor using Cadence Virtuoso. Performed DRC, LVS, and parasitic extraction, optimizing for area, timing, and power using standard-cell-based methodology.",
      image: "/images/vlsi.jpeg",
      technologies: ["Cadence Virtuoso", "VLSI Layout", "DRC/LVS", "Physical Design"],
      github: "https://github.com/DivyamArora22"
    },
    {
      id: 3,
      title: "Real-Time Hardware-Accelerated OHLC Aggregator",
      description: "Designed a fully pipelined FPGA-based system to compute OHLC (Open, High, Low, Close) metrics from NASDAQ and IEX trade feeds in real time. Leveraged AXI-Stream protocols to connect packet parsers, decoders, and a custom OHLC engine, achieving over 9.2 million packets/sec throughput with sub-microsecond latency.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["FPGA", "AXI-Stream", "High-Frequency Trading", "Real-Time Systems"],
      github: "https://github.com/DivyamArora22"
    },
    {
      id: 4,
      title: "FPGA-based Mortal Kombat Game",
      description: "Developed a hardware-software co-designed fighting game on a Xilinx FPGA. Integrated MicroBlaze softcore, custom AXI peripherals, VGA controller, and button inputs for real-time gameplay.",
      image: "/images/mortal-kombat.jpeg",
      technologies: ["Xilinx Vivado", "MicroBlaze", "AXI Protocol", "VGA Controller"],
      github: "https://github.com/DivyamArora22"
    },
    {
      id: 5,
      title: "Linux-Like Operating System (x86)",
      description: "Implemented a Linux-like OS kernel for the IA-32 architecture with support for segmentation (GDT, IDT), paging, and device initialization. Developed core kernel components including a terminal driver, Ext2 file system, system call interface, and round-robin scheduler with PCB-based context switching.",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["C", "x86 Assembly", "Operating Systems", "Kernel Development"],
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
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <Link key={project.id} href={getProjectRoute(project.title)}>
              <div className="project-card bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer h-[520px] flex flex-col">
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`} 
                  className="w-full h-48 object-cover flex-shrink-0" 
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-primary mb-3 line-clamp-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex space-x-4">
                      {project.github && (
                        <span className="text-muted-foreground font-medium">
                          <i className="fab fa-github mr-2"></i>View Code
                        </span>
                      )}
                    </div>
                    <span className="text-accent font-medium">
                      Read More <i className="fas fa-arrow-right ml-1"></i>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
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

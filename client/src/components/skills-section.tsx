interface Skill {
  name: string;
  percentage: number;
}

interface Tool {
  name: string;
  icon: string;
}

export default function SkillsSection() {
  const technicalSkills: Skill[] = [
    { name: "SystemVerilog / Verilog", percentage: 95 },
    { name: "CPU Architecture Design", percentage: 90 },
    { name: "UVM Verification", percentage: 85 },
    { name: "RTL Design & Synthesis", percentage: 90 }
  ];

  const tools: Tool[] = [
    { name: "Synopsys Suite", icon: "fas fa-microchip" },
    { name: "Cadence Suite", icon: "fas fa-drafting-compass" },
    { name: "Xilinx Vivado", icon: "fas fa-cogs" },
    { name: "Verilog", icon: "fas fa-code-branch" },
    { name: "RISC-V", icon: "fas fa-cpu" },
    { name: "TCL Scripting", icon: "fas fa-terminal" },
    { name: "Python", icon: "fab fa-python" },
    { name: "C/C++", icon: "fas fa-code" }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-in-section text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="fade-in-section">
            <h3 className="text-2xl font-semibold text-primary mb-8">Technical Skills</h3>
            
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-accent font-medium">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="skill-bar bg-accent h-3 rounded-full" 
                    style={{ '--progress': `${skill.percentage}%` } as React.CSSProperties}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Tools & Frameworks */}
          <div className="fade-in-section">
            <h3 className="text-2xl font-semibold text-primary mb-8">Tools & Frameworks</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {tools.map((tool) => (
                <div 
                  key={tool.name}
                  className="text-center p-3 bg-gray-50 rounded-lg hover:bg-accent/10 transition-colors group"
                >
                  <i className={`${tool.icon} text-2xl text-muted-foreground group-hover:text-accent mb-2 transition-colors`}></i>
                  <p className="font-medium text-gray-700 text-sm">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { useEffect } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Link } from 'wouter';

export default function DatapathLayoutProject() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors">
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Portfolio
            </Link>
          </div>

          {/* Project Header */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <img 
              src="/images/vlsi.jpeg"
              alt="Datapath Layout in Cadence Virtuoso"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h1 className="text-4xl font-bold text-primary mb-4">32-bit Datapath Layout with Custom Standard Cell Library</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Cadence Virtuoso", "Standard Cell Design", "Manual Layout", "Automated P&R", "TCL Scripting"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Complete VLSI design flow implementation featuring custom standard cell library development, 
                manual 32-bit slice datapath layout, and automated place-and-route optimization using TCL scripting. 
                Achieved significant area reduction from manual to automated approaches while maintaining performance targets.
              </p>
            </div>
          </div>

          {/* Design Flow Overview */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Complete Design Flow</h3>
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { step: '1', title: 'Standard Cell Library', desc: 'Custom cell characterization and library creation' },
                { step: '2', title: 'Manual Layout', desc: '32-bit slice design with area optimization' },
                { step: '3', title: 'Automated P&R', desc: 'TCL script-driven place and route flow' }
              ].map((phase) => (
                <div key={phase.step} className="text-center">
                  <div className="bg-gradient-to-br from-accent to-accent/80 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {phase.step}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{phase.title}</h4>
                  <p className="text-sm text-gray-600">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Design Components</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom standard cell library development</li>
                <li>• 32-bit ALU with arithmetic and logic operations</li>
                <li>• Register file with multi-port access</li>
                <li>• Multiplexers and data routing logic</li>
                <li>• Control signal distribution networks</li>
                <li>• Clock and reset distribution trees</li>
                <li>• I/O pad ring and power distribution</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Verification & Optimization</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Design Rule Check (DRC) for manufacturing compliance</li>
                <li>• Layout vs Schematic (LVS) verification</li>
                <li>• Parasitic extraction and analysis</li>
                <li>• Area optimization through automated P&R</li>
                <li>• Timing closure and performance validation</li>
                <li>• Power integrity verification</li>
              </ul>
            </div>
          </div>

          {/* Standard Cell Library Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Custom Standard Cell Library</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-6">
                <div className="border-l-4 border-accent pl-6 flex-1">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-database text-accent text-xl mr-3"></i>
                    <h4 className="text-lg font-medium text-gray-800">Library Development Process</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Developed a comprehensive standard cell library from ground up, including basic logic gates, 
                    complex gates, sequential elements, and specialized datapath cells. Each cell was 
                    characterized for timing, power, and area.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-800 mb-2">Cell Types Included:</h5>
                  <ul className="text-sm text-gray-600 grid grid-cols-2 gap-1">
                    <li>• Basic gates (AND, OR, XOR)</li>
                    <li>• Complex gates (AOI, OAI)</li>
                    <li>• Flip-flops and latches</li>
                    <li>• Multiplexers</li>
                    <li>• Full adders</li>
                    <li>• Buffer cells</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="border-l-4 border-blue-500 pl-6 flex-1">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-chart-line text-blue-500 text-xl mr-3"></i>
                    <h4 className="text-lg font-medium text-gray-800">Characterization & Modeling</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Performed comprehensive SPICE simulations to extract timing arcs, power consumption, 
                    and noise margins. Generated Liberty (.lib) files with detailed timing models for 
                    synthesis and static timing analysis tools.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-800 mb-2">Characterization Parameters:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Setup/Hold times</li>
                    <li>• Propagation delays</li>
                    <li>• Dynamic power consumption</li>
                    <li>• Input capacitance</li>
                    <li>• Drive strength analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Manual vs Automated Design Comparison */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Design Methodology Comparison</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="border-2 border-orange-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 rounded-full p-2 mr-3">
                    <i className="fas fa-hand-paper text-orange-600 text-xl"></i>
                  </div>
                  <h4 className="text-xl font-semibold text-orange-700">Manual Layout Design</h4>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    Hand-crafted 32-bit slice RISC-V CPU datapath using bit-slice methodology for optimal regularity and density.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-800 mb-2">Design Specifications:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Architecture: 32-bit slice RISC-V CPU design</li>
                      <li>• Layout Area: <span className="font-semibold text-orange-600">184 × 64 μm</span></li>
                      <li>• Methodology: Manual placement & routing</li>
                      <li>• Focus: Maximum density optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-2 border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full p-2 mr-3">
                    <i className="fas fa-robot text-green-600 text-xl"></i>
                  </div>
                  <h4 className="text-xl font-semibold text-green-700">Automated P&R Flow</h4>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    TCL script-driven automated place and route flow achieving superior area efficiency.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-800 mb-2">Optimized Results:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Processor Area: <span className="font-semibold text-green-600">110 × 80 μm</span></li>
                      <li>• Area Reduction: <span className="font-semibold text-green-600">~25% improvement</span></li>
                      <li>• Methodology: Script-driven automation</li>
                      <li>• Focus: Area & timing co-optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics Comparison */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Area Optimization Results</h4>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">11,776</div>
                  <div className="text-sm text-gray-600">Manual Area (μm²)</div>
                </div>
                <div className="flex items-center justify-center">
                  <i className="fas fa-arrow-right text-accent text-2xl"></i>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">8,800</div>
                  <div className="text-sm text-gray-600">Automated Area (μm²)</div>
                </div>
              </div>
              <div className="text-center mt-4">
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  25% Area Reduction & Improved Aspect Ratio
                </span>
              </div>
            </div>
          </div>

          {/* Layout Images Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Layout Implementation Results</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <i className="fas fa-hand-paper text-orange-600 mr-2"></i>
                    Manual 32-bit Slice Layout
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Hand-crafted datapath using bit-slice methodology with careful attention to regularity and signal flow.
                  </p>
                </div>
                <div className="bg-black rounded-lg p-4">
                  <img 
                    src="/images/datapath_manual.png" 
                    alt="Manual datapath layout showing 32-bit slice design"
                    className="w-full h-48 object-contain rounded"
                  />
                </div>
                <div className="mt-2 text-center text-sm text-gray-500">
                  Dimensions: 184 × 64 μm (Area: 11,776 μm²)
                </div>
              </div>

              <div>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <i className="fas fa-robot text-green-600 mr-2"></i>
                    Automated P&R Processor Layout
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    TCL script-driven automated PnR achieving optimized area utilization and improved timing.
                  </p>
                </div>
                <div className="bg-black rounded-lg p-4">
                  <img 
                    src="/images/cpu2.png" 
                    alt="Automated place and route processor layout"
                    className="w-full h-48 object-contain rounded"
                  />
                </div>
                <div className="mt-2 text-center text-sm text-gray-500">
                  Dimensions: 110 × 80 μm (Area: 8,800 μm²)
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Details */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Implementation Details</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-6">
                <div className="border-l-4 border-accent pl-6 flex-1">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-microchip text-accent text-xl mr-3"></i>
                    <h4 className="text-lg font-medium text-gray-800">32-bit RISC-V CPU Slice Architecture</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    The manual design employs a bit-slice methodology where each slice handles one bit of the 32-bit RISC-V CPU datapath. 
                    This approach ensures regularity, simplifies routing, and enables efficient replication across the full width.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6 flex-1">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-code text-blue-500 text-xl mr-3"></i>
                    <h4 className="text-lg font-medium text-gray-800">TCL Automation Script</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Developed comprehensive TCL scripts for automated place and route flow, including floorplanning, 
                    power planning, placement optimization, clock tree synthesis, and routing with timing closure.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-6">
                <div className="border-l-4 border-green-500 pl-6 flex-1">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-chart-line text-green-500 text-xl mr-3"></i>
                    <h4 className="text-lg font-medium text-gray-800">Area Optimization Strategy</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    The automated flow achieved better aspect ratio (110×80 vs 184×64 μm) improving routability while 
                    reducing total area by 25%. This demonstrates the effectiveness of modern P&R algorithms 
                    in optimizing complex RISC-V CPU layouts.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6 flex-1">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-check-circle text-purple-500 text-xl mr-3"></i>
                    <h4 className="text-lg font-medium text-gray-800">Design Validation</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Both manual and automated designs underwent comprehensive DRC/LVS verification, parasitic 
                    extraction, and timing analysis to ensure manufacturing compliance and performance targets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Process Technology</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Technology Node: 45nm CMOS</li>
                  <li>Supply Voltage: 1.1V nominal</li>
                  <li>Metal Layers: 6 (M1-M6)</li>
                  <li>Standard Cell Height: 2.5μm</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Design Constraints</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Clock Period: 2ns (500MHz)</li>
                  <li>Maximum Transition: 200ps</li>
                  <li>Maximum Capacitance: 50fF</li>
                  <li>IR Drop Target: &lt;5% VDD</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Enhanced GitHub and Documentation Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Explore the Implementation</h3>
              <p className="text-gray-300 mb-6">
                Access the complete design files, TCL scripts, and verification reports
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-database text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Standard Cell Library</h4>
                <p className="text-sm text-gray-300">Complete library with SPICE models and Liberty files</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-code text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">TCL Scripts</h4>
                <p className="text-sm text-gray-300">Automated P&R flow scripts and optimization techniques</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-file-alt text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Design Files</h4>
                <p className="text-sm text-gray-300">Layout databases and verification reports</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/DivyamArora22"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <i className="fab fa-github mr-2"></i>
                View Design Files
              </a>
              <button className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                <i className="fas fa-download mr-2"></i>
                Download Reports
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

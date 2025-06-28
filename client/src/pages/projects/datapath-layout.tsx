import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Link } from 'wouter';

export default function DatapathLayoutProject() {
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
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600"
              alt="Datapath Layout in Cadence Virtuoso"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h1 className="text-4xl font-bold text-primary mb-4">Datapath Layout in Cadence Virtuoso</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Cadence Virtuoso", "VLSI Layout", "DRC/LVS", "Physical Design"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Designed and laid out the complete datapath of a custom 32-bit processor using Cadence Virtuoso. 
                Performed comprehensive physical verification including DRC, LVS, and parasitic extraction, 
                optimizing for area, timing, and power using standard-cell-based methodology.
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Design Components</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 32-bit ALU with arithmetic and logic operations</li>
                <li>• Register file with multi-port access</li>
                <li>• Multiplexers and data routing logic</li>
                <li>• Control signal distribution networks</li>
                <li>• Clock and reset distribution trees</li>
                <li>• I/O pad ring and power distribution</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Verification Flow</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Design Rule Check (DRC) for manufacturing compliance</li>
                <li>• Layout vs Schematic (LVS) verification</li>
                <li>• Parasitic extraction and analysis</li>
                <li>• Antenna rule checking</li>
                <li>• Electromigration analysis</li>
                <li>• Power integrity verification</li>
              </ul>
            </div>
          </div>

          {/* Implementation Details */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Implementation Details</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Physical Design Methodology</h4>
                <p className="text-gray-600 leading-relaxed">
                  The layout follows a hierarchical approach using standard cells from a commercial PDK. The datapath 
                  is organized in functional blocks with optimized placement for minimal area and maximum performance. 
                  Critical paths are carefully routed to meet timing constraints while maintaining signal integrity.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Power Distribution Network</h4>
                <p className="text-gray-600 leading-relaxed">
                  A robust power grid was designed to ensure stable VDD and VSS distribution across the entire datapath. 
                  The power network includes multiple metal layers with strategic via placement to minimize IR drop and 
                  maintain power integrity under peak current conditions.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Clock Distribution Strategy</h4>
                <p className="text-gray-600 leading-relaxed">
                  The clock network employs an H-tree structure to minimize skew across all sequential elements. 
                  Clock buffers are strategically placed to drive the required load while maintaining rise/fall time 
                  specifications. Clock gating cells are integrated for power reduction during idle cycles.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Optimization Techniques</h4>
                <p className="text-gray-600 leading-relaxed">
                  Area optimization was achieved through efficient standard cell placement and routing. 
                  Timing optimization included buffer insertion, wire sizing, and strategic use of high-Vt 
                  cells in non-critical paths. Power optimization leveraged multi-threshold voltage techniques 
                  and aggressive clock gating strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Design Metrics */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Design Metrics</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">0.8mm²</div>
                <div className="text-gray-600">Total Area</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">500MHz</div>
                <div className="text-gray-600">Max Frequency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">45mW</div>
                <div className="text-gray-600">Power @ 500MHz</div>
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
                  <li>Metal Layers: 9 (M1-M9)</li>
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

          {/* GitHub Link */}
          <div className="text-center">
            <a 
              href="https://github.com/DivyamArora22"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              <i className="fab fa-github mr-2"></i>
              View on GitHub
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
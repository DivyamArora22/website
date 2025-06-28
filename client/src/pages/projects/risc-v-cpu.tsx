import { useEffect } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Link } from 'wouter';

export default function RiscVCpuProject() {
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
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600"
              alt="Out-of-Order RISC-V CPU"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h1 className="text-4xl font-bold text-primary mb-4">Out-of-Order RISC-V CPU (RV32IM)</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {["SystemVerilog", "RISC-V", "OoO Execution", "Cache Design"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Designed and implemented a sophisticated 5-stage pipelined out-of-order processor supporting the RV32IM instruction set, 
                featuring advanced microarchitectural components including register renaming, branch prediction, and cache hierarchy.
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Architecture Overview</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 5-stage pipeline with out-of-order execution</li>
                <li>• Register Alias Table (RAT) for register renaming</li>
                <li>• Reorder Buffer (ROB) for instruction retirement</li>
                <li>• Reservation Station (RS) for instruction scheduling</li>
                <li>• Load/Store Queue (LSQ) for memory operations</li>
                <li>• Comprehensive bypassing logic for data forwarding</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• GShare branch predictor with history tables</li>
                <li>• 4-way set-associative cache with pseudo-LRU replacement</li>
                <li>• Dynamic instruction scheduling with explicit register renaming</li>
                <li>• Precise exception handling</li>
                <li>• Support for RV32I base + M extension with DesignWare IPs</li>
                <li>• RVFI, Spike, and UVM-based verification environment</li>
              </ul>
            </div>
          </div>

          {/* Pipeline Stages Visualization */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Pipeline Architecture</h3>
            <div className="grid grid-cols-5 gap-4 mb-8">
              {['Fetch', 'Decode', 'Execute', 'Memory', 'Writeback'].map((stage, index) => (
                <div key={stage} className="text-center">
                  <div className="bg-gradient-to-br from-accent to-accent/80 text-white rounded-lg p-4 mb-2 transform hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold">{index + 1}</div>
                    <div className="text-sm">{stage}</div>
                  </div>
                  {index < 4 && (
                    <div className="flex justify-center">
                      <i className="fas fa-arrow-right text-accent text-xl"></i>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-3">5-Stage Pipeline with Out-of-Order Execution</h4>
              <p className="text-gray-600">
                Instructions flow through the pipeline while the out-of-order engine dynamically schedules execution 
                based on data dependencies and resource availability using explicit register renaming.
              </p>
            </div>
          </div>

          {/* Implementation Details with Tabs */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Implementation Details</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-6">
                <div className="border-l-4 border-accent pl-6 flex-1">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-cogs text-accent text-xl mr-3"></i>
                    <h4 className="text-lg font-medium text-gray-800">Out-of-Order Execution Engine</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    The processor implements explicit register renaming with modern out-of-order execution. Instructions are fetched, decoded, 
                    and dispatched to reservation stations where they wait for operands. The explicit register renaming mechanism eliminates 
                    WAR and WAW hazards, allowing for maximum instruction-level parallelism with integrated DesignWare multiplication and division IPs.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6 flex-1">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-memory text-blue-500 text-xl mr-3"></i>
                    <h4 className="text-lg font-medium text-gray-800">Memory Hierarchy & Cache Design</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    The memory subsystem features a 4-way set-associative L1 data cache with write-back policy and pseudo-LRU replacement. 
                    The Load/Store Queue handles memory disambiguation and ensures proper ordering of memory operations while 
                    maintaining the illusion of sequential execution.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-6">
                <div className="border-l-4 border-green-500 pl-6 flex-1">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-route text-green-500 text-xl mr-3"></i>
                    <h4 className="text-lg font-medium text-gray-800">Branch Prediction & Control Flow</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    A GShare branch predictor with 2-bit saturating counters maintains branch history to predict control flow. 
                    The prediction accuracy is enhanced by a global history register that captures recent branch outcomes, 
                    significantly reducing pipeline stalls due to mispredicted branches.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6 flex-1">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-check-circle text-purple-500 text-xl mr-3"></i>
                    <h4 className="text-lg font-medium text-gray-800">Verification & Testing</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive verification was performed using RVFI (RISC-V Formal Interface), Spike reference model, 
                    constrained random testing, and UVM-based verification environment. The design was validated against 
                    the RISC-V compliance suite and custom test programs testing edge cases in out-of-order execution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Diagram Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">System Architecture</h3>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <i className="fas fa-microchip text-accent text-3xl mb-4"></i>
                  <h4 className="font-semibold text-gray-800 mb-2">Frontend</h4>
                  <p className="text-sm text-gray-600">Fetch Unit, Branch Predictor, Instruction Cache</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <i className="fas fa-exchange-alt text-blue-500 text-3xl mb-4"></i>
                  <h4 className="font-semibold text-gray-800 mb-2">Execution Core</h4>
                  <p className="text-sm text-gray-600">Reservation Stations, ALU, Register Renaming</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <i className="fas fa-database text-green-500 text-3xl mb-4"></i>
                  <h4 className="font-semibold text-gray-800 mb-2">Backend</h4>
                  <p className="text-sm text-gray-600">Reorder Buffer, Load/Store Queue, Data Cache</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics with Visual Progress */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Performance Metrics</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-gray-800 mb-4">Execution Efficiency</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">IPC (Instructions Per Cycle)</span>
                      <span className="text-sm font-medium text-accent">0.72</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-accent h-3 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Branch Prediction Accuracy</span>
                      <span className="text-sm font-medium text-green-500">77%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '77%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Cache Hit Rate</span>
                      <span className="text-sm font-medium text-blue-500">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-4">Technical Specifications</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent">5</div>
                    <div className="text-xs text-gray-600">Pipeline Stages</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent">64</div>
                    <div className="text-xs text-gray-600">ROB Entries</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent">16KB</div>
                    <div className="text-xs text-gray-600">L1 Cache</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent">32</div>
                    <div className="text-xs text-gray-600">Registers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced GitHub and Documentation Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Explore the Implementation</h3>
              <p className="text-gray-300 mb-6">
                Dive deep into the SystemVerilog implementation, testbenches, and verification methodology
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fab fa-github text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Source Code</h4>
                <p className="text-sm text-gray-300">Complete SystemVerilog implementation with comprehensive comments</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-vial text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Test Suite</h4>
                <p className="text-sm text-gray-300">Extensive verification environment with UVM testbenches</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-file-alt text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Documentation</h4>
                <p className="text-sm text-gray-300">Detailed architecture documentation and design decisions</p>
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
                View Source Code
              </a>
              <button className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                <i className="fas fa-play mr-2"></i>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
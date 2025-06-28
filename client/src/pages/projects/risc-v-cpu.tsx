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
                <li>• 4-way set-associative cache with LRU replacement</li>
                <li>• Dynamic instruction scheduling</li>
                <li>• Precise exception handling</li>
                <li>• Support for RV32I base + M extension</li>
                <li>• Comprehensive testbench and verification</li>
              </ul>
            </div>
          </div>

          {/* Implementation Details */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Implementation Details</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Out-of-Order Execution Engine</h4>
                <p className="text-gray-600 leading-relaxed">
                  The processor implements Tomasulo's algorithm with modern enhancements. Instructions are fetched, decoded, 
                  and dispatched to reservation stations where they wait for operands. The register renaming mechanism eliminates 
                  WAR and WAW hazards, allowing for maximum instruction-level parallelism.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Branch Prediction & Control Flow</h4>
                <p className="text-gray-600 leading-relaxed">
                  A GShare branch predictor with 2-bit saturating counters maintains branch history to predict control flow. 
                  The prediction accuracy is enhanced by a global history register that captures recent branch outcomes, 
                  significantly reducing pipeline stalls due to mispredicted branches.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Memory Hierarchy & Cache Design</h4>
                <p className="text-gray-600 leading-relaxed">
                  The memory subsystem features a 4-way set-associative L1 data cache with write-back policy and LRU replacement. 
                  The Load/Store Queue handles memory disambiguation and ensures proper ordering of memory operations while 
                  maintaining the illusion of sequential execution.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Verification & Testing</h4>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive verification was performed using directed and random test vectors. The design was validated 
                  against the RISC-V compliance suite and custom assembly programs testing edge cases in out-of-order execution, 
                  cache coherency, and exception handling.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Core Specifications</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Architecture: RISC-V RV32IM</li>
                  <li>Pipeline Stages: 5 (Fetch, Decode, Execute, Memory, Writeback)</li>
                  <li>Execution: Out-of-Order with in-order retirement</li>
                  <li>Register File: 32 × 32-bit integer registers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Performance Features</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Branch Predictor: GShare with 2K entries</li>
                  <li>Cache: 4-way set-associative, 16KB</li>
                  <li>ROB Size: 64 entries</li>
                  <li>Reservation Stations: 16 entries</li>
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
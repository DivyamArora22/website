import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Link } from 'wouter';

export default function OhlcAggregatorProject() {
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
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600"
              alt="Real-Time Hardware-Accelerated OHLC Aggregator"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h1 className="text-4xl font-bold text-primary mb-4">Real-Time Hardware-Accelerated OHLC Aggregator</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {["FPGA", "AXI-Stream", "High-Frequency Trading", "Real-Time Systems"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Designed a fully pipelined FPGA-based system to compute OHLC (Open, High, Low, Close) metrics from NASDAQ and IEX 
                trade feeds in real time. Leveraged AXI-Stream protocols to connect packet parsers, decoders, and a custom OHLC engine, 
                achieving over 9.2 million packets/sec throughput with sub-microsecond latency.
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">System Architecture</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• High-speed packet parser for market data feeds</li>
                <li>• Multi-protocol decoder (NASDAQ ITCH, IEX DEEP)</li>
                <li>• Pipelined OHLC computation engine</li>
                <li>• AXI-Stream interconnect fabric</li>
                <li>• Real-time memory management system</li>
                <li>• Hardware timestamping and synchronization</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Performance Metrics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Throughput: &gt;9.2M packets/second</li>
                <li>• Latency: &lt;500ns end-to-end</li>
                <li>• Symbol capacity: 8,000+ simultaneous</li>
                <li>• Memory bandwidth: 25.6 GB/s</li>
                <li>• Clock frequency: 250MHz</li>
                <li>• Power consumption: &lt;15W</li>
              </ul>
            </div>
          </div>

          {/* Implementation Details */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Implementation Details</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">High-Speed Packet Processing</h4>
                <p className="text-gray-600 leading-relaxed">
                  The system implements a custom packet parser capable of processing multiple market data protocols simultaneously. 
                  The parser uses parallel processing units to handle different message types, with dedicated pipelines for 
                  trade messages, quotes, and administrative data. Each pipeline maintains protocol-specific state machines 
                  for accurate message interpretation.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">OHLC Computation Engine</h4>
                <p className="text-gray-600 leading-relaxed">
                  The core OHLC engine maintains real-time state for thousands of symbols using distributed memory banks. 
                  For each incoming trade, the engine performs parallel comparisons to update Open, High, Low, and Close values. 
                  Time-based windows are managed using hardware timers with nanosecond precision, enabling accurate 
                  interval-based aggregations.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">AXI-Stream Integration</h4>
                <p className="text-gray-600 leading-relaxed">
                  The system leverages AXI-Stream protocol for high-bandwidth, low-latency data movement between processing blocks. 
                  Custom AXI-Stream adapters handle backpressure management and flow control, ensuring no packet loss even 
                  during peak market activity. The stream-based architecture enables easy scaling and modular design.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Real-Time Constraints</h4>
                <p className="text-gray-600 leading-relaxed">
                  Meeting sub-microsecond latency requirements demanded careful attention to pipeline depth and memory access patterns. 
                  The design uses prediction-based prefetching, parallel lookup tables, and optimized memory controllers. 
                  Hardware timestamping ensures accurate latency measurements and helps maintain deterministic behavior 
                  under varying load conditions.
                </p>
              </div>
            </div>
          </div>

          {/* System Performance */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">System Performance</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">9.2M</div>
                <div className="text-gray-600">Packets/Second</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">450ns</div>
                <div className="text-gray-600">Average Latency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">8,192</div>
                <div className="text-gray-600">Concurrent Symbols</div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Hardware Platform</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>FPGA: Xilinx UltraScale+ VU9P</li>
                  <li>Memory: 32GB DDR4-3200</li>
                  <li>Network: 100GbE QSFP28</li>
                  <li>Clock: 250MHz system, 400MHz memory</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Data Protocols</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>NASDAQ ITCH 5.0</li>
                  <li>IEX DEEP 1.0</li>
                  <li>UDP multicast feeds</li>
                  <li>Custom binary formats</li>
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
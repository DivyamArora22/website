import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Link } from 'wouter';

export default function MortalKombatGameProject() {
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
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600"
              alt="FPGA-based Mortal Kombat Game"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h1 className="text-4xl font-bold text-primary mb-4">FPGA-based Mortal Kombat Game</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Xilinx Vivado", "MicroBlaze", "AXI Protocol", "VGA Controller"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Developed a hardware-software co-designed fighting game on a Xilinx FPGA. 
                Integrated MicroBlaze softcore processor, custom AXI peripherals, VGA controller, 
                and button inputs for real-time gameplay with smooth graphics and responsive controls.
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Hardware Components</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• MicroBlaze 32-bit softcore processor</li>
                <li>• Custom VGA controller for 640x480 display</li>
                <li>• AXI GPIO for button and switch inputs</li>
                <li>• Block RAM for sprite and background storage</li>
                <li>• Timer peripherals for frame synchronization</li>
                <li>• Audio controller for sound effects</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Game Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Two-player fighting game mechanics</li>
                <li>• Character selection and animations</li>
                <li>• Special moves and combo system</li>
                <li>• Health bars and score tracking</li>
                <li>• Background music and sound effects</li>
                <li>• Responsive button-based controls</li>
              </ul>
            </div>
          </div>

          {/* Implementation Details */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Implementation Details</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Hardware-Software Co-Design</h4>
                <p className="text-gray-600 leading-relaxed">
                  The system combines a MicroBlaze processor running C code for game logic with custom hardware 
                  accelerators for graphics rendering. The software handles character states, collision detection, 
                  and user input processing, while dedicated hardware manages real-time pixel generation and display timing.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Graphics Rendering System</h4>
                <p className="text-gray-600 leading-relaxed">
                  A custom VGA controller generates 640x480 resolution at 60Hz refresh rate. Sprite rendering is 
                  handled by dedicated hardware that composites multiple layers including backgrounds, characters, 
                  and UI elements. Double buffering prevents screen tearing and ensures smooth animation playback.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Real-Time Input Processing</h4>
                <p className="text-gray-600 leading-relaxed">
                  Button inputs are processed through AXI GPIO peripherals with hardware debouncing. The system 
                  supports complex input combinations for special moves, with timing-sensitive combo detection 
                  implemented in software. Input latency is minimized through direct memory-mapped register access.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Game Engine Architecture</h4>
                <p className="text-gray-600 leading-relaxed">
                  The game engine follows a modular design with separate components for physics, rendering, audio, 
                  and input handling. State machines manage character behaviors and game flow, while a custom 
                  scripting system allows for easy modification of character movesets and game parameters.
                </p>
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
                  <li>FPGA: Xilinx Artix-7 XC7A35T</li>
                  <li>Processor: MicroBlaze @ 100MHz</li>
                  <li>Memory: 128KB Block RAM</li>
                  <li>Display: VGA 640x480 @ 60Hz</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Game Specifications</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Frame Rate: 60 FPS</li>
                  <li>Input Latency: &lt;16ms</li>
                  <li>Sprite Resolution: 64x64 pixels</li>
                  <li>Color Depth: 8-bit (256 colors)</li>
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
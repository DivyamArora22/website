import { useEffect } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Link } from 'wouter';

export default function LinuxOsProject() {
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
              src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600"
              alt="Linux-Like Operating System"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h1 className="text-4xl font-bold text-primary mb-4">Linux-Like Operating System (x86)</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {["C", "x86 Assembly", "Operating Systems", "Kernel Development"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Implemented a comprehensive Linux-like OS kernel for the IA-32 architecture with support for segmentation, 
                paging, and device initialization. Developed core kernel components including terminal driver, 
                Ext2 file system, system call interface, and round-robin scheduler with PCB-based context switching.
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Kernel Components</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Memory management with paging and segmentation</li>
                <li>• Process scheduler with round-robin algorithm</li>
                <li>• System call interface and handler</li>
                <li>• Interrupt descriptor table (IDT) setup</li>
                <li>• Terminal driver with keyboard input</li>
                <li>• Ext2 file system implementation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">System Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Multi-process execution environment</li>
                <li>• File operations (open, read, write, close)</li>
                <li>• Process control (fork, exec, wait, exit)</li>
                <li>• Memory allocation and deallocation</li>
                <li>• Hardware interrupt handling</li>
                <li>• Boot sequence and initialization</li>
              </ul>
            </div>
          </div>

          {/* Implementation Details */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Implementation Details</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Memory Management System</h4>
                <p className="text-gray-600 leading-relaxed">
                  The kernel implements a complete virtual memory system using x86 paging with 4KB page frames. 
                  The memory manager handles page allocation, page table setup, and virtual-to-physical address translation. 
                  A simple buddy allocator manages physical memory, while virtual memory mapping enables process isolation.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Process Scheduling and Context Switching</h4>
                <p className="text-gray-600 leading-relaxed">
                  The scheduler implements a round-robin algorithm with process control blocks (PCBs) maintaining 
                  process state information. Context switching preserves all processor registers and switches page 
                  directories to provide each process with its own virtual address space. The scheduler supports 
                  process creation, termination, and state transitions.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">File System Implementation</h4>
                <p className="text-gray-600 leading-relaxed">
                  The Ext2 file system implementation supports directory traversal, file creation, reading, and writing. 
                  The kernel maintains an inode cache and implements proper file descriptor management. Block I/O operations 
                  interface with the virtual file system layer to provide a unified interface for file operations across 
                  different device types.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">System Call Interface</h4>
                <p className="text-gray-600 leading-relaxed">
                  A comprehensive system call interface provides user programs access to kernel services. The implementation 
                  includes parameter validation, privilege level checking, and proper error handling. System calls support 
                  process management (fork, exec, wait), file operations (open, read, write), and memory management (malloc, free).
                </p>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Architecture Support</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Target: Intel IA-32 (x86)</li>
                  <li>Boot: Multiboot specification</li>
                  <li>Memory: 4GB virtual address space</li>
                  <li>Page Size: 4KB with 2-level paging</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Kernel Features</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Scheduling: Round-robin with 20ms quantum</li>
                  <li>File System: Ext2 with 1KB block size</li>
                  <li>System Calls: 30+ implemented</li>
                  <li>Processes: Up to 64 concurrent</li>
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
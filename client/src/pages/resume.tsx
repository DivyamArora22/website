import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Resume</h1>
            <p className="text-xl text-muted-foreground">
              Divyam Arora
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-100 px-6 py-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-700">Resume PDF</h2>
              <a 
                href="/resume.pdf" 
                download
                className="bg-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors inline-flex items-center gap-2"
              >
                <i className="fas fa-download"></i>
                Download PDF
              </a>
            </div>
            
            <div className="p-6">
              <div className="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="/resume.pdf"
                  className="w-full h-full"
                  title="Divyam Arora Resume"
                  style={{ border: 'none' }}
                >
                  <p className="text-center text-gray-500 p-8">
                    Your browser does not support PDF viewing. 
                    <a 
                      href="/resume.pdf" 
                      download
                      className="text-accent hover:underline ml-1"
                    >
                      Download the PDF instead
                    </a>
                  </p>
                </iframe>
              </div>
            </div>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
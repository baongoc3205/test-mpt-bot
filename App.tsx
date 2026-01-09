import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickServices from './components/QuickServices';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <QuickServices />
        
        {/* About Section Teaser */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/2">
                      <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Team" className="rounded-2xl shadow-xl w-full" />
                  </div>
                  <div className="md:w-1/2">
                      <span className="text-mpt-orange font-bold uppercase tracking-wider text-sm mb-2 block">Why Choose Us</span>
                      <h2 className="text-3xl font-black text-mpt-blue mb-6">20+ Years of Excellence</h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                          MP Transformation is the first and only company in Vietnam to provide a comprehensive Contact Center ecosystem. We combine deep industry expertise with cutting-edge AI technology to deliver measurable results.
                      </p>
                      <ul className="space-y-3 mb-8">
                          <li className="flex items-center gap-3 text-gray-700">
                              <span className="w-2 h-2 bg-mpt-orange rounded-full"></span>
                              5000+ Agents
                          </li>
                          <li className="flex items-center gap-3 text-gray-700">
                              <span className="w-2 h-2 bg-mpt-orange rounded-full"></span>
                              ISO 9001 & ISO 27001 Certified
                          </li>
                          <li className="flex items-center gap-3 text-gray-700">
                              <span className="w-2 h-2 bg-mpt-orange rounded-full"></span>
                              Trusted by Top Enterprises (Banking, Telecom, Aviation)
                          </li>
                      </ul>
                      <button className="text-mpt-blue font-bold border-b-2 border-mpt-blue hover:text-mpt-orange hover:border-mpt-orange transition-colors pb-1">Read Our Story</button>
                  </div>
               </div>
            </div>
        </section>

        {/* Call to Action */}
        <section className="bg-mpt-blue py-16 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
               <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Customer Experience?</h2>
               <p className="text-blue-100 mb-8 text-lg">Contact our experts today to discuss your business needs and find the right solution.</p>
               <button className="bg-white text-mpt-blue px-8 py-3 rounded-full font-bold hover:bg-mpt-orange hover:text-white transition shadow-lg transform hover:-translate-y-1">
                   Schedule a Consultation
               </button>
            </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
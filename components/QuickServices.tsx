import React from 'react';
import { Headset, Users, Cpu, MessageSquare, BarChart3, Database } from 'lucide-react';

const services = [
  { id: 1, title: 'Contact Center', icon: <Headset size={32} />, desc: 'Inbound & Outbound Services' },
  { id: 2, title: 'BPO Services', icon: <Users size={32} />, desc: 'Data Entry, HR Outsourcing' },
  { id: 3, title: 'AI Solutions', icon: <Cpu size={32} />, desc: 'Callbot, Chatbot, OmiCX' },
  { id: 4, title: 'Digital CX', icon: <MessageSquare size={32} />, desc: 'Omnichannel Support' },
  { id: 5, title: 'Data Analytics', icon: <BarChart3 size={32} />, desc: 'Customer Insights' },
  { id: 6, title: 'System Integration', icon: <Database size={32} />, desc: 'CRM & Tech Solutions' },
];

const QuickServices: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-mpt-blue mb-4">Our Key Solutions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive ecosystem for customer experience transformation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-mpt-orange relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-mpt-light rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-mpt-orange/10"></div>
              
              <div className="text-mpt-orange mb-6 group-hover:scale-110 transition-transform duration-300 inline-block bg-orange-50 p-4 rounded-lg">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-mpt-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
              
              <a href="#" className="inline-block mt-4 text-mpt-blue font-bold text-sm hover:text-mpt-orange transition-colors">
                Learn more &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickServices;
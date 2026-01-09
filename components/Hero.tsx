import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] bg-white overflow-hidden flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-mpt-orange font-bold tracking-wider uppercase text-sm mb-2 block">
            Leading BPO & Contact Center in Vietnam
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-mpt-blue mb-6 leading-tight">
            Elevating <br/>
            <span className="text-gray-800">Customer Experience</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We combine people, technology, and innovation to provide superior customer experience services, helping businesses increase competitive advantage and customer loyalty.
          </p>
          <div className="flex gap-4">
            <Button variant="secondary" className="shadow-lg">Explore Solutions</Button>
            <Button variant="outline" className="!text-mpt-blue !border-mpt-blue hover:!bg-mpt-blue hover:!text-white">Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
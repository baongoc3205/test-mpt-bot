import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-mpt-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
             <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                MP <span className="text-mpt-orange text-sm font-bold">Transformation</span>
             </h3>
             <p className="text-gray-400 text-sm leading-relaxed mb-6">
               Leading Contact Center & BPO Provider in Vietnam. We help you connect with your customers through technology and human touch.
             </p>
             <div className="flex gap-4">
               <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-mpt-blue transition-colors"><Facebook size={18} /></a>
               <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-mpt-blue transition-colors"><Linkedin size={18} /></a>
               <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-mpt-blue transition-colors"><Youtube size={18} /></a>
             </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-mpt-orange transition-colors">Contact Center Services</a></li>
              <li><a href="#" className="hover:text-mpt-orange transition-colors">BPO Services</a></li>
              <li><a href="#" className="hover:text-mpt-orange transition-colors">OmiCX (Omnichannel)</a></li>
              <li><a href="#" className="hover:text-mpt-orange transition-colors">OmiBot (AI Chatbot/Callbot)</a></li>
              <li><a href="#" className="hover:text-mpt-orange transition-colors">Software Development</a></li>
            </ul>
          </div>

           {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-mpt-orange transition-colors">About MP Transformation</a></li>
              <li><a href="#" className="hover:text-mpt-orange transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-mpt-orange transition-colors">News & Events</a></li>
              <li><a href="#" className="hover:text-mpt-orange transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-mpt-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
             <h4 className="font-bold text-lg mb-4 text-white">Contact Us</h4>
             <ul className="space-y-4 text-sm text-gray-400">
               <li className="flex items-start gap-3">
                 <Phone size={18} className="text-mpt-orange mt-0.5" />
                 <span>1900 585853<br/>(24/7 Support)</span>
               </li>
               <li className="flex items-start gap-3">
                 <Mail size={18} className="text-mpt-orange mt-0.5" />
                 <span>contact@mpt.com.vn</span>
               </li>
               <li className="flex items-start gap-3">
                 <MapPin size={18} className="text-mpt-orange mt-0.5" />
                 <span>10th Floor, Sudico Building,<br/>Me Tri, Nam Tu Liem, Hanoi</span>
               </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} MP Transformation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
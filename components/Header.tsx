import React, { useState } from 'react';
import { Menu, Search, X, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Industries', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Careers', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white">
      {/* Top Bar */}
      <div className="bg-mpt-light text-gray-500 text-xs py-2 px-4 border-b">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-6">
          <a href="#" className="hover:text-mpt-blue transition">Contact Us</a>
          <a href="#" className="hover:text-mpt-blue transition">News</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-mpt-blue">
            <Globe size={14} />
            <span>EN</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="flex flex-col">
                 <span className="text-3xl font-black text-mpt-blue tracking-tighter leading-none">MP</span>
                 <span className="text-xs text-mpt-orange font-bold tracking-widest leading-none uppercase">Transformation</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-mpt-orange font-bold text-sm uppercase tracking-wide transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
               <button className="text-gray-500 hover:text-mpt-blue">
                 <Search size={20} />
               </button>
               <button className="bg-mpt-orange text-white px-5 py-2 rounded-md font-bold text-sm hover:bg-orange-600 transition shadow-md">
                 Get a Quote
               </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-mpt-blue focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-mpt-orange hover:bg-gray-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, data, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  const navItems = [
    { label: t('about'), href: '#about' },
    { label: t('experience'), href: '#experience' },
    { label: t('insights'), href: '#insights' },
    { label: t('projects'), href: '#projects' },
    { label: t('skills'), href: '#skills' },
    { label: t('contact'), href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-800'}`}>
            {data.PERSONAL_INFO.englishName}
          </a>

          <div className="flex items-center gap-6">
            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium hover:text-primary-600 transition-colors ${
                    isScrolled ? 'text-slate-600' : 'text-slate-700'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-full transition-colors flex items-center gap-1 text-sm font-semibold ${
                isScrolled ? 'hover:bg-slate-100 text-slate-700' : 'hover:bg-white/20 text-slate-800'
              }`}
            >
              <Languages className="w-4 h-4" />
              <span>{language === 'zh' ? 'EN' : '中'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-slate-600 font-medium p-2 hover:bg-slate-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
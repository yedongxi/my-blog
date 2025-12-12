import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Globe, FileText, ArrowUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Globe,
  FileText
};

export const Footer: React.FC = () => {
  const { data, t } = useLanguage();
  const { PERSONAL_INFO, SOCIAL_LINKS } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{PERSONAL_INFO.name}</h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                {PERSONAL_INFO.summary.slice(0, 80)}...
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.filter(link => ['Github', 'LinkedIn', 'Xiaohongshu'].includes(link.name)).map((link) => {
                const Icon = iconMap[link.icon] || Globe;
                return (
                  <a 
                    key={link.name}
                    href={link.url} 
                    className="bg-slate-800 text-slate-400 hover:text-white hover:bg-primary-600 transition-all p-2.5 rounded-full" 
                    aria-label={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Detailed Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">{t('contact')}</h3>
            <div className="space-y-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-primary-600/20 group-hover:text-primary-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm md:text-base">{PERSONAL_INFO.email}</span>
              </a>
              
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-primary-600/20 group-hover:text-primary-400 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm md:text-base">{PERSONAL_INFO.phone}</span>
              </a>

              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-primary-600/20 group-hover:text-primary-400 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm md:text-base">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Column 3: WeChat QR */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('wechat_contact')}</h3>
            <div className="flex flex-col items-start">
              <div className="bg-white p-2 rounded-xl shadow-lg mb-3">
                <img 
                  src={PERSONAL_INFO.wechatQr} 
                  alt="WeChat QR Code" 
                  className="w-32 h-32 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=WeChat";
                  }}
                />
              </div>
              <p className="text-xs text-slate-500">{t('scan_qr')}</p>
            </div>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.englishName}. {t('rights_reserved')}.</p>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline">{t('built_with')}</span>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              {t('back_to_top')} <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
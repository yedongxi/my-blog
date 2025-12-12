import React, { useState, useEffect } from 'react';
    import { Mail, FileText, ChevronDown, Wine, Zap, Brain, GraduationCap, Code, Sparkles, Check } from 'lucide-react';
    import { useLanguage } from '../LanguageContext';
    
    export const Hero: React.FC = () => {
      const { data, t } = useLanguage();
      const { PERSONAL_INFO } = data;
      const [roleIndex, setRoleIndex] = useState(0);
      const [displayText, setDisplayText] = useState('');
      const [isDeleting, setIsDeleting] = useState(false);
      const [cheersCount, setCheersCount] = useState(0);
      const [showCheersToast, setShowCheersToast] = useState(false);
    
      // Parse roles from the string (assuming they are separated by " / " in the data)
      const roles = PERSONAL_INFO.role.split(' / ');
      
      // Typewriter Effect
      useEffect(() => {
        const currentRole = roles[roleIndex];
        const typeSpeed = isDeleting ? 50 : 100;
        
        const timer = setTimeout(() => {
          if (!isDeleting && displayText === currentRole) {
            // Finished typing, wait before deleting
            setTimeout(() => setIsDeleting(true), 2000);
          } else if (isDeleting && displayText === '') {
            // Finished deleting, move to next role
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          } else {
            // Typing or Deleting
            const nextText = isDeleting 
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1);
            setDisplayText(nextText);
          }
        }, typeSpeed);
    
        return () => clearTimeout(timer);
      }, [displayText, isDeleting, roleIndex, roles]);
    
      const handleCheers = () => {
        setCheersCount(prev => prev + 1);
        setShowCheersToast(true);
        setTimeout(() => setShowCheersToast(false), 2000);
      };
    
      const getTagStyle = (tag: string) => {
        const lowerTag = tag.toLowerCase();
        if (lowerTag.includes('intj')) {
          return { bg: 'bg-purple-100', text: 'text-purple-700', icon: Zap };
        }
        if (lowerTag.includes('酒') || lowerTag.includes('cocktail') || lowerTag.includes('bar')) {
          return { bg: 'bg-amber-100', text: 'text-amber-700', icon: Wine };
        }
        if (lowerTag.includes('医') || lowerTag.includes('university') || lowerTag.includes('tcm')) {
          return { bg: 'bg-teal-100', text: 'text-teal-800', icon: GraduationCap };
        }
        if (lowerTag.includes('full') || lowerTag.includes('dev') || lowerTag.includes('栈')) {
          return { bg: 'bg-blue-100', text: 'text-blue-700', icon: Code };
        }
        return { bg: 'bg-slate-100', text: 'text-slate-700', icon: Brain };
      };
    
      return (
        <div id="about" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
          
          {/* Animated Background Blobs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
    
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="mb-8 relative inline-block group cursor-pointer" onClick={handleCheers}>
              <img 
                src={PERSONAL_INFO.avatar} 
                alt={PERSONAL_INFO.name}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white shadow-2xl mx-auto object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
                onError={(e) => {
                   (e.target as HTMLImageElement).src = "https://picsum.photos/400/400?grayscale";
                }}
              />
              <div className="absolute bottom-2 right-4 w-8 h-8 bg-green-500 border-2 border-white rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                 <span className="text-[10px] font-bold">HI</span>
              </div>
              
              {/* Cheers Interaction Overlay */}
              <div className="absolute inset-0 rounded-full bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <Wine className="w-10 h-10 text-white animate-pulse" />
              </div>

              {/* Toast Notification */}
              {showCheersToast && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap shadow-xl animate-fade-in-up flex items-center gap-2">
                   <Sparkles className="w-4 h-4 text-yellow-400" /> 
                   <span>Cheers! x {cheersCount}</span>
                </div>
              )}
            </div>
    
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-3 tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            
            {/* Typewriter Role */}
            <div className="h-8 md:h-10 mb-6 flex items-center justify-center">
              <span className="text-xl md:text-3xl text-primary-600 font-semibold">
                {displayText}
                <span className="animate-pulse ml-1 text-slate-400">|</span>
              </span>
            </div>
    
            {/* Fun Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {PERSONAL_INFO.tags.map((tag, index) => {
                const style = getTagStyle(tag);
                const Icon = style.icon;
                return (
                  <span key={index} className={`px-3 py-1 ${style.bg} ${style.text} rounded-full text-sm font-medium flex items-center shadow-sm hover:scale-105 transition-transform cursor-default`}>
                    <Icon className="w-3.5 h-3.5 mr-1.5" /> {tag}
                  </span>
                );
              })}
            </div>
    
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10 text-lg md:text-xl backdrop-blur-sm bg-white/30 p-4 rounded-xl border border-white/50 shadow-sm">
              {PERSONAL_INFO.summary}
            </p>
    
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 md:text-lg transition-all shadow-lg hover:shadow-slate-500/30 hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  {t('contact_me')}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="#insights"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 md:text-lg transition-all hover:border-slate-300 shadow-sm hover:-translate-y-1"
              >
                <FileText className="w-5 h-5 mr-2" />
                {t('view_articles')}
              </a>
            </div>
          </div>
    
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 cursor-pointer hover:text-primary-500 transition-colors" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
            <ChevronDown className="w-8 h-8" />
          </div>
        </div>
      );
    };
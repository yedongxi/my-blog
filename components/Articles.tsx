import React from 'react';
import { Section } from './Section';
import { ExternalLink, Sparkles, ArrowRight, PenTool, Hash, Layout, ImageOff } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Articles: React.FC = () => {
  const { data, t } = useLanguage();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    e.currentTarget.nextElementSibling?.classList.remove('hidden');
  };

  return (
    <Section id="insights" className="bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-64 h-64 bg-primary-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 bg-purple-100/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            {t('insights')}
            <span className="inline-flex items-center justify-center p-2 bg-primary-100 text-primary-600 rounded-xl shadow-sm">
              <PenTool className="w-6 h-6" />
            </span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            {t('insights_subtitle')}
            <a href="https://boardmix.cn" target="_blank" className="text-primary-600 font-semibold hover:underline mx-1 transition-colors">Boardmix</a>
            .
          </p>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-10 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 scrollbar-hide snap-x snap-mandatory">
        {data.ARTICLES.map((article, index) => (
          <a 
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-shrink-0 w-[85vw] md:w-auto snap-center flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden hover:-translate-y-2 h-full"
          >
            {/* Image Container with Platform-specific Aspect Ratio */}
            <div className={`relative overflow-hidden bg-slate-100 ${
              article.platform === 'Xiaohongshu' ? 'aspect-[4/5] md:aspect-[4/3] xl:aspect-[4/5]' : 'aspect-video'
            }`}>
              {article.image ? (
                <>
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={handleImageError}
                    loading="lazy"
                  />
                  {/* Fallback container (hidden by default, shown via JS on error) */}
                  <div className="hidden absolute inset-0 flex items-center justify-center text-slate-300 bg-slate-100">
                    <ImageOff className="w-10 h-10" />
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  <Layout className="w-12 h-12" />
                </div>
              )}
             
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              {/* Platform Badge - Glassmorphism */}
              <div className="absolute top-3 left-3">
                <span className={`
                  inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md border border-white/20
                  ${article.platform === 'Xiaohongshu' ? 'bg-red-500/80' : 'bg-blue-600/80'}
                `}>
                  {article.platform === 'Xiaohongshu' ? '小红书' : 'Boardmix'}
                </span>
              </div>

              {/* Featured Badge */}
              {index === 0 && (
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-yellow-400/90 text-yellow-900 text-xs font-bold shadow-lg backdrop-blur-md border border-yellow-200/50">
                    <Sparkles className="w-3 h-3" /> {t('featured')}
                  </span>
                </div>
              )}
            </div>

            {/* Content Body */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors leading-tight">
                {article.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                {article.summary}
              </p>

              {/* Footer: Tags & Arrow */}
              <div className="pt-4 border-t border-slate-50 mt-auto flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {article.tags.slice(0, 2).map((tag, tIndex) => (
                    <span key={tIndex} className="inline-flex items-center text-[10px] font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100 group-hover:border-primary-100 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                      <Hash className="w-3 h-3 mr-0.5 opacity-50" />
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-primary-500 opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};
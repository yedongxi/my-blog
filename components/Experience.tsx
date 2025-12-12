import React from 'react';
import { Section } from './Section';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Experience: React.FC = () => {
  const { data, t } = useLanguage();

  return (
    <Section id="experience" title={t('experience')} className="bg-white">
      <div className="relative border-l border-slate-200 ml-3 md:ml-6 space-y-12">
        {data.EXPERIENCE.map((job, index) => (
          <div key={index} className="relative pl-8 md:pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-slate-200 rounded-full border-2 border-white group-hover:bg-primary-500 transition-colors"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                  {job.company}
                </h3>
                <div className="text-lg font-medium text-slate-700 mt-1 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {job.role}
                </div>
              </div>
              <div className="flex items-center text-sm text-slate-500 mt-2 sm:mt-0 bg-slate-50 px-3 py-1 rounded-full w-fit">
                <Calendar className="w-4 h-4 mr-1.5" />
                {job.period}
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {job.description.map((desc, i) => (
                <li key={i} className="text-slate-600 leading-relaxed flex items-start">
                  <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-300 rounded-full flex-shrink-0"></span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            {job.tags && (
              <div className="flex flex-wrap gap-2 mt-4">
                {job.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};
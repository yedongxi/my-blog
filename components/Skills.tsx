import React from 'react';
import { Section } from './Section';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Skills: React.FC = () => {
  const { data, t } = useLanguage();

  return (
    <Section id="skills" title={t('skills')} className="bg-white">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Skills Column */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
            <span className="w-8 h-1 bg-primary-500 rounded-full mr-3"></span>
            {t('skills_tree')}
          </h3>
          <div className="space-y-8">
            {data.SKILLS.map((skillGroup, index) => (
              <div key={index}>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item, i) => (
                    <div key={i} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-default">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="lg:border-l lg:border-slate-100 lg:pl-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
             <span className="w-8 h-1 bg-primary-500 rounded-full mr-3 lg:hidden"></span>
             {t('education')}
          </h3>
          <div className="space-y-8">
            {data.EDUCATION.map((edu, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full shadow-sm text-primary-600">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{edu.school}</h4>
                    <p className="text-primary-600 font-medium">{edu.major}</p>
                    <p className="text-sm text-slate-400 mt-1 mb-3">{edu.period}</p>
                    <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-3">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
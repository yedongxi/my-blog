import React from 'react';
import { Section } from './Section';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Projects: React.FC = () => {
  const { data, t } = useLanguage();

  return (
    <Section id="projects" title={t('projects')} className="bg-slate-50">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.PROJECTS.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col h-full overflow-hidden group">
            <div className="h-2 bg-primary-500 w-0 group-hover:w-full transition-all duration-500"></div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-primary-50 text-primary-600 rounded-lg">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>
              
              <div className="flex items-center text-sm text-slate-500 mb-4">
                <span className="font-medium text-slate-700">{project.role}</span>
                {project.period && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{project.period}</span>
                  </>
                )}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
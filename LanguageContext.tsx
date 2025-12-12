import React, { createContext, useContext, useState, ReactNode } from 'react';
import { DATA_ZH, DATA_EN } from './constants';

type Language = 'zh' | 'en';
type DataType = typeof DATA_ZH;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  data: DataType;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('zh');
  const data = language === 'zh' ? DATA_ZH : DATA_EN;

  const translations: Record<string, Record<string, string>> = {
    'about': { zh: '关于我', en: 'About' },
    'experience': { zh: '工作经历', en: 'Experience' },
    'insights': { zh: '深度思考', en: 'Insights' },
    'projects': { zh: '项目 & 作品', en: 'Projects' },
    'skills': { zh: '技能', en: 'Skills' },
    'contact': { zh: '联系方式', en: 'Contact' },
    'contact_me': { zh: '联系我', en: 'Contact Me' },
    'view_articles': { zh: '查看文章', en: 'Read Articles' },
    'skills_tree': { zh: '技能树', en: 'Skill Tree' },
    'education': { zh: '教育经历', en: 'Education' },
    'wechat_contact': { zh: '微信联系', en: 'WeChat' },
    'scan_qr': { zh: '扫一扫二维码，加我为好友', en: 'Scan to connect' },
    'rights_reserved': { zh: '保留所有权利', en: 'All rights reserved' },
    'built_with': { zh: '基于 React & Tailwind 构建', en: 'Built with React & Tailwind' },
    'back_to_top': { zh: '回到顶部', en: 'Back to Top' },
    'insights_subtitle': { zh: '除了写代码，我也热衷于拆解商业模式与技术架构。以下内容精选自我的', en: 'Beyond coding, I love deconstructing business models and tech architectures. Selected from my' },
    'featured': { zh: '精选', en: 'Featured' },
    'read_more': { zh: '阅读更多', en: 'Read More' },
  };

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, data, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
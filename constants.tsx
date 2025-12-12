import { Job, Project, Skill, SocialLink, Article } from './types';

// Shared Assets
const AVATAR_PATH = "./avatar.jpg";
const WECHAT_QR_PATH = "./wechat.jpg";

// --- CHINESE DATA (ZH) ---

const PERSONAL_INFO_ZH = {
  name: "陈韡 (承安/Ben)",
  englishName: "Chen Wei",
  role: "产品运营 / 生态经理 / 独立开发者",
  location: "杭州 (意向: 杭州/上海/深圳)",
  email: "377584583@qq.com",
  phone: "15906656724",
  summary: "互联网5年从业者，INTJ。主打一个“啥都懂亿点”。从SaaS销售冠军到生态经理，再到能够手搓Next.js全栈应用的独立开发者。白天研究AI Agent和商业模式，晚上可能是个安静的调酒师。擅长用统计学与心理学视角解决复杂的商业与技术问题。",
  tags: ["INTJ", "兼职打酒师", "浙江中医药大学(非医专业)", "全栈开发"],
  avatar: AVATAR_PATH,
  wechatQr: WECHAT_QR_PATH
};

const EXPERIENCE_ZH: Job[] = [
  {
    company: "MolarData (某AI数据公司)",
    role: "商务经理",
    period: "2025.03 - 2025.11",
    description: [
      "提供AI模型训练前的数据工程阶段工具及高品质数据集。",
      "负责智能驾驶、语义分割领域的数据集渠道拓展。",
      "深度参与数据标注SOP制定，优化模型训练效率。"
    ],
    tags: ["AI Infra", "Data Engineering"]
  },
  {
    company: "仁励窝 (Fintech)",
    role: "产品运营",
    period: "2023.11 - 2024.11",
    description: [
      "主导智能合约平台的产品运营，通过交互端分离提升开发型用户体验。",
      "基于政策与竞对分析重构商业模式，设计流量体与企业间的合作架构。",
      "协同多部门优化官网流量，显著提升用户续费率与留存率。"
    ],
    tags: ["Fintech", "Smart Contract", "Product Ops"]
  },
  {
    company: "华为云",
    role: "生态经理",
    period: "2023.03 - 2023.11",
    description: [
      "构建'专家+政策+服务'三位一体生态体系，拓展9家核心ISV伙伴。",
      "绘制宁波区域生态地图，推动百万级数字化转型项目落地。",
      "策划AI+伙伴赋能活动，提升生态伙伴的技术参与度。"
    ],
    tags: ["Cloud Ecosystem", "ToB Sales", "Strategy"]
  },
  {
    company: "e签宝",
    role: "商务经理",
    period: "2022.03 - 2022.09",
    description: [
      "从0到1搭建本地化渠道网络，签约多家区域龙头企业，业绩达成率120%。",
      "创新'产业链协同'拓客模式，利用短视频引流实现私域粉丝爆发增长。"
    ],
    tags: ["SaaS", "Channel Sales", "Growth"]
  },
  {
    company: "有赞",
    role: "营销顾问",
    period: "2020.06 - 2022.01",
    description: [
      "连续多月获得行业业绩TOP1，成功开拓娃哈哈等KA级客户。",
      "擅长通过痛点分析与价值重塑，将商机转化率提升至60%。"
    ],
    tags: ["SaaS", "Private Traffic", "Consultative Sales"]
  }
];

const PROJECTS_ZH: Project[] = [
  {
    title: "Dopathin AI - The Gensun",
    role: "独立开发者",
    period: "2024 - 至今",
    description: "全栈开发的AI内容创作SaaS平台。集成了Next.js 14, Supabase, Stripe及多模态AI模型。不仅是一个工具，更是我对'一人企业'商业模式的完整实践。",
    link: "https://dopathin.ai",
    tags: ["Full Stack", "AI Native", "SaaS"]
  },
  {
    title: "悦读直播电商 & 粉丝运营",
    role: "业务发起者",
    period: "2025.01 - 至今",
    description: "利用出版业闲置资源（签名书/周边）构建的粉丝福利体系。负责从商业闭环设计到实体关系构建的全过程。点击查看详细需求文档。",
    link: "https://boardmix.cn/app/share/CAE.CLvo9QsgASoQes4FHWeAY-PRO4jF57nIyTAGQAE/RmwiEU",
    tags: ["Live Commerce", "User Ops", "Business Design"]
  },
  {
    title: "Boardmix 产品思考笔记",
    role: "Content Creator",
    description: "在Boardmix上沉淀的关于企业信息化系统构建及垂直领域SaaS需求的深度思考文档。将隐性知识显性化，建立个人知识库。",
    link: "https://boardmix.cn",
    tags: ["Knowledge Base", "System Design"]
  }
];

const SKILLS_ZH: Skill[] = [
  {
    category: "Full Stack Development & AI",
    items: ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "Stripe", "AI Integration", "n8n Automation"]
  },
  {
    category: "Product & Growth Strategy",
    items: ["Business Model Design", "GTM Strategy", "Ecosystem Building", "Private Domain Operations"]
  },
  {
    category: "行业深度",
    items: ["SaaS/PaaS/IaaS", "Agentic Workflow", "LLM Training Data", "Fintech", "电子签名"]
  },
  {
    category: "斜杠技能",
    items: ["鸡尾酒调制", "消费心理学", "客户共情", "数据统计分析"]
  }
];

const ARTICLES_ZH: Article[] = [
  {
    title: "悦读：书籍贩卖软件需求---悦读",
    summary: "从0到1拆解垂直领域二手书交易平台的业务流程。包含用户路径设计、功能架构图以及基于“以书会友”理念的社区运营逻辑。",
    date: "2024",
    platform: "Boardmix",
    link: "https://boardmix.cn/app/share/CAE.CLvo9QsgASoQes4FHWeAY-PRO4jF57nIyTAGQAE/RmwiEU", 
    tags: ["Product Design", "PRD", "Business"],
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "产品人的酒后真言：如何用同理心做增长？",
    summary: "在微醺中聊聊SaaS产品的获客逻辑。数据是冰冷的，但人心是热的。记录一次在Bar的深度对谈。",
    date: "2024",
    platform: "Xiaohongshu",
    link: "https://www.xiaohongshu.com/user/profile/6065aace0000000001004ebf",
    tags: ["Product Thinking", "Lifestyle", "Growth"],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "线性代数：知乎线性代数合集、搜寻到的知识",
    summary: "知乎硬核知识库整理。深入浅出地从几何视角重构矩阵、特征值、线性变换等概念，为AI模型训练打下坚实的数学基础。",
    date: "2024",
    platform: "Boardmix",
    link: "https://boardmix.cn/app/share/CAE.CLvo9QsgASoQivEm-xFFuiZo8SMbABd6ijAGQAE/RmwiEU",
    tags: ["Math", "AI", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "创世纪：如何打造一家科技型企业",
    summary: "关于企业组织架构、技术驱动增长以及科技公司商业壁垒构建的深度思考笔记。探讨从创业初期到规模化发展的核心要素。",
    date: "2024",
    platform: "Boardmix",
    link: "https://boardmix.cn",
    tags: ["Startup", "Management", "Strategy"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "AI 技术架构：RAG 与模型蒸馏",
    summary: "技术与工程实践笔记。整理检索增强生成(RAG)的架构图谱，以及如何通过模型蒸馏技术降低LLM部署成本。",
    date: "2024",
    platform: "Boardmix",
    link: "https://boardmix.cn",
    tags: ["AI Architecture", "RAG", "Engineering"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
  }
];

const EDUCATION_ZH = [
  {
    school: "浙江中医药大学滨江学院",
    major: "市场营销 | 本科",
    period: "2018.09 - 2020.06",
    details: "主修统计学、消费心理学。这段经历训练了我基于数据分析与用户心理洞察进行市场决策的能力，而非传统的医疗背景。"
  }
];

// --- ENGLISH DATA (EN) ---

const PERSONAL_INFO_EN = {
  name: "Chen Wei (Ben)",
  englishName: "Chen Wei",
  role: "Product Ops / Ecosystem Manager / Indie Dev",
  location: "Hangzhou (Open to Shanghai/Shenzhen)",
  email: "377584583@qq.com",
  phone: "15906656724",
  summary: "5-year Internet veteran, INTJ. From SaaS sales champion to ecosystem manager, now a full-stack indie developer. I explore AI Agents and business models by day, and mix cocktails by night. I excel at solving complex business and tech problems using statistics and psychology.",
  tags: ["INTJ", "Bartender", "TCM Univ (Non-med)", "Full Stack"],
  avatar: AVATAR_PATH,
  wechatQr: WECHAT_QR_PATH
};

const EXPERIENCE_EN: Job[] = [
  {
    company: "MolarData (AI Data)",
    role: "Business Manager",
    period: "2025.03 - 2025.11",
    description: [
      "Provided data engineering tools and high-quality datasets for AI model training.",
      "Expanded dataset channels for autonomous driving and semantic segmentation.",
      "Developed data labeling SOPs to optimize model training efficiency."
    ],
    tags: ["AI Infra", "Data Engineering"]
  },
  {
    company: "Renliwo (Fintech)",
    role: "Product Operations",
    period: "2023.11 - 2024.11",
    description: [
      "Led product ops for a smart contract platform, enhancing developer experience.",
      "Restructured business models based on policy and competitor analysis.",
      "Collaborated cross-functionally to optimize web traffic and retention."
    ],
    tags: ["Fintech", "Smart Contract", "Product Ops"]
  },
  {
    company: "Huawei Cloud",
    role: "Ecosystem Manager",
    period: "2023.03 - 2023.11",
    description: [
      "Built an 'Expert+Policy+Service' ecosystem, expanding 9 core ISV partners.",
      "Mapped the Ningbo regional ecosystem, driving million-level digital transformation projects.",
      "Planned AI partner enablement events to boost technical engagement."
    ],
    tags: ["Cloud Ecosystem", "ToB Sales", "Strategy"]
  },
  {
    company: "eSign (eQianBao)",
    role: "Business Manager",
    period: "2022.03 - 2022.09",
    description: [
      "Built a localized channel network from scratch, signing multiple regional leaders (120% target achievement).",
      "Innovated 'industry chain collaboration' model for private domain growth."
    ],
    tags: ["SaaS", "Channel Sales", "Growth"]
  },
  {
    company: "Youzan",
    role: "Marketing Consultant",
    period: "2020.06 - 2022.01",
    description: [
      "Consistently Top 1 sales performer; acquired key accounts like Wahaha.",
      "Expert in pain-point analysis, improving conversion rates to 60%."
    ],
    tags: ["SaaS", "Private Traffic", "Consultative Sales"]
  }
];

const PROJECTS_EN: Project[] = [
  {
    title: "Dopathin AI - The Gensun",
    role: "Indie Developer",
    period: "2024 - Present",
    description: "Full-stack AI content SaaS. Integrated Next.js 14, Supabase, Stripe, and multi-modal models. A complete practice of the 'Solopreneur' business model.",
    link: "https://dopathin.ai",
    tags: ["Full Stack", "AI Native", "SaaS"]
  },
  {
    title: "Yuedu Live Commerce",
    role: "Initiator",
    period: "2025.01 - Present",
    description: "Fan welfare system using idle publishing resources (signed books). Responsible for business loop design and relationship building.",
    link: "https://boardmix.cn/app/share/CAE.CLvo9QsgASoQes4FHWeAY-PRO4jF57nIyTAGQAE/RmwiEU",
    tags: ["Live Commerce", "User Ops", "Business Design"]
  },
  {
    title: "Boardmix Product Notes",
    role: "Content Creator",
    description: "Deep thinking documents on enterprise systems and vertical SaaS needs. Externalizing tacit knowledge into a personal knowledge base.",
    link: "https://boardmix.cn",
    tags: ["Knowledge Base", "System Design"]
  }
];

const SKILLS_EN: Skill[] = [
  {
    category: "Full Stack Development & AI",
    items: ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "Stripe", "AI Integration", "n8n Automation"]
  },
  {
    category: "Product & Growth Strategy",
    items: ["Business Model Design", "GTM Strategy", "Ecosystem Building", "Private Domain Operations"]
  },
  {
    category: "Industry Depth",
    items: ["SaaS/PaaS/IaaS", "Agentic Workflow", "LLM Training Data", "Fintech", "E-Signature"]
  },
  {
    category: "Slash Skills",
    items: ["Cocktail Mixing", "Consumer Psychology", "Empathy", "Data Analysis"]
  }
];

const ARTICLES_EN: Article[] = [
  {
    title: "Yuedu: Used Book Trading Platform PRD",
    summary: "Deconstructing the 0-1 business process of a vertical used book platform. Includes user path design, functional architecture, and community operations logic.",
    date: "2024",
    platform: "Boardmix",
    link: "https://boardmix.cn/app/share/CAE.CLvo9QsgASoQes4FHWeAY-PRO4jF57nIyTAGQAE/RmwiEU", 
    tags: ["Product Design", "PRD", "Business"],
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "PM's Late Night Thoughts: Empathy in Growth",
    summary: "Discussing SaaS customer acquisition over cocktails. Data is cold, but hearts are warm.",
    date: "2024",
    platform: "Xiaohongshu",
    link: "https://www.xiaohongshu.com/user/profile/6065aace0000000001004ebf",
    tags: ["Product Thinking", "Lifestyle", "Growth"],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Linear Algebra: Geometric Intuition",
    summary: "Hardcore knowledge base from Zhihu. Reconstructing concepts like matrices and eigenvalues from a geometric perspective for AI math foundations.",
    date: "2024",
    platform: "Boardmix",
    link: "https://boardmix.cn/app/share/CAE.CLvo9QsgASoQivEm-xFFuiZo8SMbABd6ijAGQAE/RmwiEU",
    tags: ["Math", "AI", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Genesis: Building a Tech Enterprise",
    summary: "Deep thoughts on organizational structure, tech-driven growth, and building business moats. Core elements from startup to scale.",
    date: "2024",
    platform: "Boardmix",
    link: "https://boardmix.cn",
    tags: ["Startup", "Management", "Strategy"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "AI Architecture: RAG & Distillation",
    summary: "Engineering notes. RAG architecture mapping and reducing LLM deployment costs via model distillation.",
    date: "2024",
    platform: "Boardmix",
    link: "https://boardmix.cn",
    tags: ["AI Architecture", "RAG", "Engineering"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
  }
];

const EDUCATION_EN = [
  {
    school: "Zhejiang Chinese Medical University (Binjiang)",
    major: "Marketing | Bachelor",
    period: "2018.09 - 2020.06",
    details: "Majored in Statistics & Consumer Psychology. This trained me to make market decisions based on data and psychological insights, rather than traditional medical background."
  }
];

// --- EXPORTS ---

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Email", url: `mailto:${PERSONAL_INFO_ZH.email}`, icon: "Mail" },
  { name: "Xiaohongshu", url: "https://www.xiaohongshu.com/user/profile/6065aace0000000001004ebf", icon: "BookOpen" },
  { name: "Github", url: "https://github.com/yedongxi", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/韡-陈-287117126/", icon: "Linkedin" },
  { name: "Phone", url: `tel:${PERSONAL_INFO_ZH.phone}`, icon: "Phone" },
  { name: "Resume", url: "/resume.pdf", icon: "FileText" },
];

export const DATA_ZH = {
  PERSONAL_INFO: PERSONAL_INFO_ZH,
  EXPERIENCE: EXPERIENCE_ZH,
  PROJECTS: PROJECTS_ZH,
  SKILLS: SKILLS_ZH,
  ARTICLES: ARTICLES_ZH,
  EDUCATION: EDUCATION_ZH,
  SOCIAL_LINKS // Links are language independent
};

export const DATA_EN = {
  PERSONAL_INFO: PERSONAL_INFO_EN,
  EXPERIENCE: EXPERIENCE_EN,
  PROJECTS: PROJECTS_EN,
  SKILLS: SKILLS_EN,
  ARTICLES: ARTICLES_EN,
  EDUCATION: EDUCATION_EN,
  SOCIAL_LINKS
};
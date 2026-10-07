export interface DigitalSkill {
  id: string;
  title: string;
  category: 'Fundamentals' | 'Design & Media' | 'Web & Tech' | 'Marketing' | 'AI & Automation' | 'Freelancing & Business';
  icon: string;
  shortDesc: string;
  tools: string[];
  whoItIsFor: string;
  outcome: string;
  learningHours: string;
}

export const SKILLS_LIST: DigitalSkill[] = [
  {
    id: 'computer-fundamentals',
    title: 'Computer & OS Fundamentals',
    category: 'Fundamentals',
    icon: 'Monitor',
    shortDesc: 'Master mouse navigation, keyboard shortcuts, file organization, cloud storage, and internet safety without fear.',
    tools: ['Windows', 'macOS', 'Google Drive', 'File Management', 'Cyber Safety'],
    whoItIsFor: 'Complete beginners who feel hesitant using desktop or laptop computers.',
    outcome: 'Confidently operate any computer, manage files systematically, and navigate the web securely.',
    learningHours: '8 - 12 Hours'
  },
  {
    id: 'office-productivity',
    title: 'Microsoft Office & Workspace',
    category: 'Fundamentals',
    icon: 'FileSpreadsheet',
    shortDesc: 'Create polished documents, dynamic spreadsheets, automated formulas, and boardroom-ready presentations.',
    tools: ['Excel', 'Word', 'PowerPoint', 'Google Docs', 'Google Sheets'],
    whoItIsFor: 'Job seekers, administrative professionals, and students needing workplace computing skills.',
    outcome: 'Prepare professional reports, automate calculations, and present data clearly.',
    learningHours: '15 - 20 Hours'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design & Visual Branding',
    category: 'Design & Media',
    icon: 'Palette',
    shortDesc: 'Design eye-catching social media posts, flyers, logos, brand kits, and marketing banners that stand out.',
    tools: ['Canva Pro', 'Figma Basics', 'Color Theory', 'Typography', 'Brand Assets'],
    whoItIsFor: 'Business owners, marketers, and aspiring designers wanting to create high-impact graphics.',
    outcome: 'Create cohesive brand identities and professional marketing collateral without expensive agencies.',
    learningHours: '18 - 25 Hours'
  },
  {
    id: 'web-development',
    title: 'Website Development & No-Code',
    category: 'Web & Tech',
    icon: 'Globe',
    shortDesc: 'Build modern, responsive, high-converting websites and landing pages without writing complex code.',
    tools: ['WordPress', 'Webflow', 'HTML/CSS Basics', 'Domains & Hosting', 'SEO Basics'],
    whoItIsFor: 'Entrepreneurs, freelancers, and small businesses who need professional websites.',
    outcome: 'Launch fully functional responsive websites, configure custom domains, and manage web content.',
    learningHours: '30 - 40 Hours'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & SEO',
    category: 'Marketing',
    icon: 'TrendingUp',
    shortDesc: 'Run profitable ad campaigns, optimize web pages for Google search, and convert casual visitors into buyers.',
    tools: ['Google Ads', 'Meta Ads Manager', 'SEO Tools', 'Analytics', 'Email Marketing'],
    whoItIsFor: 'Small business owners, sales teams, and marketers looking to drive qualified inbound traffic.',
    outcome: 'Set up profitable ad funnels, rank higher on Google search, and track customer conversions.',
    learningHours: '25 - 35 Hours'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    category: 'Marketing',
    icon: 'Share2',
    shortDesc: 'Develop winning content calendars, grow engaged audiences on Instagram & LinkedIn, and manage brand voice.',
    tools: ['Instagram', 'LinkedIn', 'Buffer/Hootsuite', 'Meta Business Suite', 'Content Strategy'],
    whoItIsFor: 'Aspiring social media managers, brand builders, and influencers wanting organic traction.',
    outcome: 'Build consistent posting routines, write high-engagement captions, and measure community growth.',
    learningHours: '15 - 20 Hours'
  },
  {
    id: 'content-creation',
    title: 'Content Creation & Video Editing',
    category: 'Design & Media',
    icon: 'Video',
    shortDesc: 'Shoot and edit engaging short-form video reels, TikToks, and YouTube tutorials using accessible tools.',
    tools: ['CapCut', 'Premiere Pro Basics', 'Smartphone Filming', 'Scriptwriting', 'Subtitles'],
    whoItIsFor: 'Content creators, educators, and product marketers wanting video presence.',
    outcome: 'Produce crisp, high-retention short videos with dynamic captions and clean pacing.',
    learningHours: '18 - 22 Hours'
  },
  {
    id: 'ai-tools-automation',
    title: 'AI Tools & Smart Automation',
    category: 'AI & Automation',
    icon: 'Cpu',
    shortDesc: 'Leverage ChatGPT, Claude, and automation tools to write content, analyze reports, and save 10+ hours a week.',
    tools: ['ChatGPT', 'Claude', 'Notion AI', 'Zapier / Make', 'Prompt Engineering'],
    whoItIsFor: 'Busy professionals, entrepreneurs, and students who want to multiply their daily productivity.',
    outcome: 'Automate repetitive daily tasks, brainstorm strategies, and generate high-quality text in seconds.',
    learningHours: '12 - 16 Hours'
  },
  {
    id: 'freelancing-remote-work',
    title: 'Freelancing & Remote Work Mastery',
    category: 'Freelancing & Business',
    icon: 'Briefcase',
    shortDesc: 'Craft winning profiles on Upwork & LinkedIn, write irresistible proposals, and get paid in global currencies.',
    tools: ['Upwork', 'LinkedIn InMail', 'Proposal Writing', 'Contract Templates', 'International Invoicing'],
    whoItIsFor: 'Aspiring digital nomads, side-hustlers, and professionals seeking location-independent income.',
    outcome: 'Land your first high-paying freelance client and negotiate contracts with confidence.',
    learningHours: '14 - 18 Hours'
  },
  {
    id: 'online-business-ecommerce',
    title: 'Online Business & E-Commerce',
    category: 'Freelancing & Business',
    icon: 'ShoppingBag',
    shortDesc: 'Set up an online store, integrate secure payment gateways, and package digital or physical products.',
    tools: ['Shopify', 'Paystack/Stripe', 'Product Sourcing', 'Order Management', 'Customer Support'],
    whoItIsFor: 'Merchants, artisans, and aspiring online store founders who want to sell products worldwide.',
    outcome: 'Launch an active online store that processes automated checkout orders 24/7.',
    learningHours: '20 - 28 Hours'
  },
  {
    id: 'data-analysis-sheets',
    title: 'Practical Data & Excel Analytics',
    category: 'Fundamentals',
    icon: 'BarChart3',
    shortDesc: 'Clean messy data sets, build interactive visual dashboards, and extract actionable business insights.',
    tools: ['Excel Advanced', 'Google Sheets', 'Pivot Tables', 'VLOOKUP / XLOOKUP', 'Data Visualization'],
    whoItIsFor: 'Managers, analysts, accountants, and career switchers looking for high-demand analytical skills.',
    outcome: 'Build automated dashboards that answer key business questions and impress senior management.',
    learningHours: '20 - 26 Hours'
  },
  {
    id: 'personal-branding',
    title: 'Personal Branding & Career Pitching',
    category: 'Freelancing & Business',
    icon: 'UserCheck',
    shortDesc: 'Build a magnetic LinkedIn presence, create a digital portfolio, and present yourself with undeniable credibility.',
    tools: ['LinkedIn Optimization', 'Digital Portfolio', 'Resume Crafting', 'Interview Prep', 'Networking Scripts'],
    whoItIsFor: 'Job seekers, consultants, and leaders wanting to be recognized as authorities in their niche.',
    outcome: 'Attract inbound opportunities, interview invitations, and speaking inquiries.',
    learningHours: '10 - 14 Hours'
  }
];

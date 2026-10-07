export interface CourseModule {
  week: number;
  title: string;
  description: string;
  practicalProject: string;
}

export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  category: 'Beginner' | 'Career Skills' | 'Business Skills' | 'Creative Skills' | 'AI & Tech';
  level: 'Beginner Friendly' | 'All Levels' | 'Intermediate';
  duration: string;
  enrollmentStatus: string;
  featured?: boolean;
  learnPoints: string[];
  prerequisites: string;
  realWorldProject: string;
  certificateProvided: boolean;
  modules: CourseModule[];
  icon: string;
}

export const COURSES_LIST: Course[] = [
  {
    id: 'digital-starter-bootcamp',
    title: 'Digital Starter Bootcamp: Zero to Confident',
    shortDescription: 'The ultimate beginner masterclass for anyone intimidated by computers, cloud tools, and digital workplaces.',
    category: 'Beginner',
    level: 'Beginner Friendly',
    duration: '4 Weeks (24 Hours Total)',
    enrollmentStatus: 'Open Enrollment · Free Access',
    featured: true,
    learnPoints: [
      'Master operating systems, shortcuts & cloud file workflows',
      'Confidently use Google Docs, Sheets, Drive & Gmail',
      'Create clean documents, spreadsheets & presentation slide decks',
      'Browse securely, protect passwords & prevent phishing scams'
    ],
    prerequisites: 'No previous tech background required. Just a computer with internet access.',
    realWorldProject: 'Build a Complete Office Productivity System: Executive Business Report, Automated Expense Spreadsheet, and Presentation Deck.',
    certificateProvided: true,
    icon: 'Laptop',
    modules: [
      {
        week: 1,
        title: 'Computer Mastery & Operating System Fundamentals',
        description: 'File navigation, folder hierarchies, compression, keyboard efficiency, and modern browser productivity.',
        practicalProject: 'Set up an organized, cloud-backed personal and workspace directory system.'
      },
      {
        week: 2,
        title: 'Professional Document Processing (Word & Docs)',
        description: 'Formatting styles, tables, table of contents, executive headers, headers, and PDF publishing.',
        practicalProject: 'Design a professional 5-page business proposal and modern CV template.'
      },
      {
        week: 3,
        title: 'Practical Spreadsheets & Data Entry (Excel & Sheets)',
        description: 'Formulas (SUM, AVERAGE, IF), sorting, formatting tables, and basic chart generation.',
        practicalProject: 'Build an automated monthly budget and inventory tracker with visual graphs.'
      },
      {
        week: 4,
        title: 'Presentations & Digital Security',
        description: 'Clean slide layouts in PowerPoint/Canva, password vaults, 2FA setup, and cloud backup.',
        practicalProject: 'Deliver a 7-slide polished presentation and conduct a personal security audit.'
      }
    ]
  },
  {
    id: 'modern-graphic-design-branding',
    title: 'Graphic Design & Visual Brand Identity',
    shortDescription: 'Learn practical visual design principles to produce stunning marketing flyers, brand kits, and social media content.',
    category: 'Creative Skills',
    level: 'Beginner Friendly',
    duration: '5 Weeks (30 Hours Total)',
    enrollmentStatus: 'Open Enrollment · Free Access',
    featured: false,
    learnPoints: [
      'Master color psychology, typography pairing, and visual balance',
      'Design professional flyers, banners, business cards, and carousels',
      'Build a complete brand identity kit (logo, colors, fonts, guidelines)',
      'Prepare print-ready files and export high-resolution digital assets'
    ],
    prerequisites: 'Any computer or tablet with internet browser access. Free Canva/Figma accounts provided.',
    realWorldProject: 'Complete Brand Identity Pack for a real local client or personal business with 10+ ready-to-publish assets.',
    certificateProvided: true,
    icon: 'Palette',
    modules: [
      {
        week: 1,
        title: 'Design Foundations: Layout, Space & Typography',
        description: 'Understanding visual hierarchy, contrast, readable font pairings, and clean composition grids.',
        practicalProject: 'Design 3 minimalist editorial quote cards and event announcements.'
      },
      {
        week: 2,
        title: 'Canva Pro Workflows & Rapid Content Design',
        description: 'Utilizing frames, color palettes, vector elements, custom sizing, and template systems.',
        practicalProject: 'Create a 6-slide Instagram educational carousel and Facebook marketing banner.'
      },
      {
        week: 3,
        title: 'Brand Identity Architecture',
        description: 'Crafting memorable logo marks, color token palettes, brand voice guidelines, and mood boards.',
        practicalProject: 'Assemble a complete 4-page Brand Style Guide document.'
      },
      {
        week: 4,
        title: 'Figma for Modern Digital Assets',
        description: 'Vector shapes, auto-layout basics, components, and responsive banner export.',
        practicalProject: 'Design a responsive web hero graphic and set of modern icon badges.'
      },
      {
        week: 5,
        title: 'Print Preparation & Client Portfolio Presentation',
        description: 'CMYK vs RGB, bleed margins, packaging assets, and building your first design Behance portfolio.',
        practicalProject: 'Publish your interactive Behance / PDF design portfolio.'
      }
    ]
  },
  {
    id: 'no-code-web-development',
    title: 'No-Code Website Development & Launch',
    shortDescription: 'Create responsive, high-converting websites and landing pages for businesses without writing complex code.',
    category: 'Career Skills',
    level: 'Beginner Friendly',
    duration: '6 Weeks (36 Hours Total)',
    enrollmentStatus: 'Open Enrollment · Free Access',
    featured: true,
    learnPoints: [
      'Plan user flows, wireframes, and conversion-optimized page architecture',
      'Build custom, responsive web pages using WordPress and modern builders',
      'Connect custom domains, SSL certificates, contact forms, and WhatsApp',
      'Optimize websites for high Google search ranking and lightning speed'
    ],
    prerequisites: 'Basic familiarity with computer web browsing.',
    realWorldProject: 'Launch a live 4-page responsive business website with custom domain and working contact/WhatsApp lead capture.',
    certificateProvided: true,
    icon: 'Globe',
    modules: [
      {
        week: 1,
        title: 'Web Fundamentals & Wireframing',
        description: 'How the web works, hosting, domains, DNS, and sketching wireframes in Figma.',
        practicalProject: 'Draw the full wireframe layout for a local service business.'
      },
      {
        week: 2,
        title: 'WordPress & Modern Visual Builders',
        description: 'Installing themes, understanding header/footer structures, styling sections, and typography.',
        practicalProject: 'Build a high-impact homepage with sticky header and mobile navigation.'
      },
      {
        week: 3,
        title: 'Responsive Optimization for Mobile & Tablet',
        description: 'Fixing mobile breakpoint margins, responsive imagery, mobile touch ergonomics, and hamburger menus.',
        practicalProject: 'Audit and achieve a 100% mobile-friendly responsive test score.'
      },
      {
        week: 4,
        title: 'Forms, WhatsApp Chat & Lead Integration',
        description: 'Adding interactive lead generation forms, direct WhatsApp buttons, and Google Maps embed.',
        practicalProject: 'Test live email notification triggers and automated WhatsApp routing.'
      },
      {
        week: 5,
        title: 'Speed Optimization & On-Page SEO',
        description: 'Image compression, caching, meta titles, alt tags, and Google Search Console submission.',
        practicalProject: 'Optimize site speed to score 90+ on Google PageSpeed Insights.'
      },
      {
        week: 6,
        title: 'Client Handoff & Launching to Production',
        description: 'Connecting custom domains, setting up client editor accounts, and offering ongoing maintenance contracts.',
        practicalProject: 'Deploy the finished website live to production with SSL security.'
      }
    ]
  },
  {
    id: 'digital-marketing-growth',
    title: 'Digital Marketing & Social Ads Accelerator',
    shortDescription: 'Learn how to attract paying customers, run profitable Meta and Google ads, and build automated lead generation funnels.',
    category: 'Business Skills',
    level: 'All Levels',
    duration: '5 Weeks (30 Hours Total)',
    enrollmentStatus: 'Open Enrollment · Free Access',
    featured: false,
    learnPoints: [
      'Define target buyer personas and high-converting marketing offers',
      'Set up Meta Ads Manager and run profitable Instagram/Facebook ads',
      'Create high-converting landing pages that convert clicks into sales',
      'Set up email nurture sequences and automated customer follow-ups'
    ],
    prerequisites: 'Basic internet skills and an active social media account.',
    realWorldProject: 'Launch a real $20 test ad campaign that generates qualified leads or customer sales for an actual product.',
    certificateProvided: true,
    icon: 'TrendingUp',
    modules: [
      {
        week: 1,
        title: 'Marketing Foundations & Customer Psychology',
        description: 'Customer avatars, hook-story-offer frameworks, and competitor market research.',
        practicalProject: 'Complete a Customer Persona Blueprint and Irresistible Offer Matrix.'
      },
      {
        week: 2,
        title: 'High-Converting Copywriting & Creative Assets',
        description: 'Writing ad headlines that stop the scroll, persuasive body copy, and video ad scripts.',
        practicalProject: 'Draft 5 ad copy variations with corresponding visual design concepts.'
      },
      {
        week: 3,
        title: 'Meta Ads Manager from Setup to Launch',
        description: 'Pixel installation, custom conversions, interest targeting, lookalike audiences, and budgeting.',
        practicalProject: 'Configure a live lead generation campaign with conversion tracking.'
      },
      {
        week: 4,
        title: 'Google Search Ads & Local SEO',
        description: 'Keyword research, negative keywords, Google Business Profile optimization, and local search ads.',
        practicalProject: 'Build a Google Search ad group targeting high-intent commercial keywords.'
      },
      {
        week: 5,
        title: 'Analytics, ROAS Calculation & Scaling',
        description: 'Understanding Cost Per Click (CPC), Cost Per Lead (CPL), Return On Ad Spend (ROAS), and scaling winners.',
        practicalProject: 'Produce a monthly digital marketing performance report with optimization recommendations.'
      }
    ]
  },
  {
    id: 'ai-productivity-automation',
    title: 'Practical AI Tools & Automation for Professionals',
    shortDescription: 'Multiply your daily output, automate repetitive tasks, and use modern generative AI tools like a senior specialist.',
    category: 'AI & Tech',
    level: 'Beginner Friendly',
    duration: '4 Weeks (20 Hours Total)',
    enrollmentStatus: 'Open Enrollment · Free Access',
    featured: true,
    learnPoints: [
      'Master prompt engineering for ChatGPT, Claude, and Gemini',
      'Automate research, email drafting, meeting notes, and reporting',
      'Build no-code automations with Zapier and Make to connect your apps',
      'Create AI-assisted presentations, marketing materials, and spreadsheets'
    ],
    prerequisites: 'No technical coding knowledge required.',
    realWorldProject: 'Build an Automated Daily Executive Assistant: Form Submission to AI Summary, Google Sheets Logging, and Slack/Email Dispatch.',
    certificateProvided: true,
    icon: 'Cpu',
    modules: [
      {
        week: 1,
        title: 'The AI Mindset & Advanced Prompt Engineering',
        description: 'System roles, few-shot prompting, chain-of-thought methods, and avoiding hallucinations.',
        practicalProject: 'Build a personal prompt library of 15 reusable workplace workflow templates.'
      },
      {
        week: 2,
        title: 'Document & Research Acceleration',
        description: 'Analyzing 50-page PDFs, extracting data tables, summarizing complex briefs, and generating executive reports.',
        practicalProject: 'Extract actionable strategy takeaways from a sample 30-page market research PDF.'
      },
      {
        week: 3,
        title: 'Visual & Media Generation for Non-Designers',
        description: 'Using AI image generation, automated video transcript generation, and slide deck structuring.',
        practicalProject: 'Generate 5 custom branded marketing graphics and a 10-slide deck outline.'
      },
      {
        week: 4,
        title: 'No-Code App Automation (Make / Zapier)',
        description: 'Triggers, webhooks, mapping data, and sending AI-enriched messages automatically.',
        practicalProject: 'Build a live automation connecting a lead form to AI classification and CRM spreadsheet.'
      }
    ]
  },
  {
    id: 'freelancing-client-acquisition',
    title: 'Freelancing & Remote Income Launchpad',
    shortDescription: 'Turn your digital skills into a predictable remote income stream. Win international clients on Upwork and LinkedIn.',
    category: 'Career Skills',
    level: 'All Levels',
    duration: '4 Weeks (20 Hours Total)',
    enrollmentStatus: 'Open Enrollment · Free Access',
    featured: false,
    learnPoints: [
      'Package your digital skills into clear, irresistible service offerings',
      'Optimize Upwork & LinkedIn profiles to appear at the top of client searches',
      'Write personalized proposals that get replies within 24 hours',
      'Master client communication, international contracts, and portfolio presentation'
    ],
    prerequisites: 'At least one digital skill (design, writing, web, office, data, or marketing).',
    realWorldProject: 'Send 5 tailored, high-converting proposals to live international job postings with a finalized portfolio.',
    certificateProvided: true,
    icon: 'Briefcase',
    modules: [
      {
        week: 1,
        title: 'Skill Packaging & Service Definition',
        description: 'Identifying high-demand service niches, setting competitive rates, and defining deliverable scope.',
        practicalProject: 'Create a 1-page Service & Deliverables Overview Card with 3 tiered packages.'
      },
      {
        week: 2,
        title: 'All-Star Upwork & LinkedIn Optimization',
        description: 'Crafting magnetic profile bios, proof portfolio items, video introductions, and keyword SEO.',
        practicalProject: 'Complete and review your 100% optimized profile audit with instructor feedback.'
      },
      {
        week: 3,
        title: 'The Art of the Irresistible Proposal',
        description: 'Deconstructing client job postings, personalized video audits (Loom), and handling objections.',
        practicalProject: 'Submit 3 live proposals using our proven 4-sentence proposal template.'
      },
      {
        week: 4,
        title: 'Contracts & Long-Term Client Retainers',
        description: 'Client communication frameworks, delivery milestones, and turning 1-time jobs into recurring retainers.',
        practicalProject: 'Finalize a standardized client agreement template and service workflow.'
      }
    ]
  }
];

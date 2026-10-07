export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'Career Advice' | 'AI Tools' | 'Freelancing' | 'Web & Design' | 'Productivity';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  featuredImage: string;
  tags: string[];
  featured?: boolean;
}

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'How to Build a High-Income Digital Career From Scratch in 2026',
    slug: 'build-high-income-digital-career-2026',
    excerpt: 'You do not need a computer science degree or 5 years of coding experience. Here is the realistic 90-day blueprint to master in-demand digital skills.',
    content: `When people think of getting into tech, they often assume they must spend three years grinding complex algorithms or learning backend frameworks. The reality in 2026 is vastly different.

Every day, local businesses, remote agencies, e-commerce stores, and startups are desperate for people who can do five very practical things:
1. Build clean, mobile-responsive landing pages using modern no-code builders (WordPress, Webflow, Framer).
2. Automate repetitive daily workflows using AI assistants and Zapier/Make.
3. Design polished social media carousels and brand assets in Canva and Figma.
4. Manage Facebook and Google Ads campaigns that actually bring in paying customers.
5. Organize and analyze workplace data using modern Excel and Google Sheets dashboards.

If you dedicate just 45 minutes a day to practicing these core tools with real hands-on projects, you will surpass 90% of applicants who only possess theoretical knowledge.

### Step 1: Pick One High-Demand Pillar First
Do not try to learn graphic design, Python, SEO, and video editing all in the same week. Pick one clear entry point:
- If you love visual aesthetics: Start with Graphic Design & Canva Pro.
- If you love structure and organization: Start with Excel & Microsoft Office Productivity.
- If you want immediate freelance potential: Start with No-Code Web Development.

### Step 2: Build Real Proof, Not Just Certificates
Employers and freelance clients do not hire you because of a piece of paper. They hire you because they can see what you have already built. Build 3 sample projects: a local bakery website, a redesigned social media kit for a gym, and an automated expense tracker.

Once you have tangible proof, finding clients or passing job interviews becomes simple.`,
    category: 'Career Advice',
    author: {
      name: 'Farida Bamba',
      role: 'Digital Skills Educator & Tech Mentor',
      avatar: '/src/assets/images/instructor_portrait_1791370279802.jpg'
    },
    date: 'Oct 04, 2026',
    readTime: '5 min read',
    featuredImage: '/src/assets/images/blog_digital_career_1791371603288.jpg',
    tags: ['Career Growth', 'Digital Skills', 'Beginner Blueprint', 'Tech Jobs'],
    featured: true,
  },
  {
    id: 'post-2',
    title: '10 Everyday AI Prompts That Save Me 12 Hours Every Week',
    slug: '10-everyday-ai-prompts-save-time',
    excerpt: 'Stop using ChatGPT like a basic search engine. Use these battle-tested system prompt templates to draft contracts, summarize PDFs, and clean messy data.',
    content: `Most people open ChatGPT or Claude, type "Write me an email", and get disappointed by generic, robotic replies. The secret to 10x AI productivity is providing role context, format constraints, and examples.

Here are 3 of the exact prompt frameworks our students use:

#### Prompt 1: The Executive Document Synthesizer
"Act as a senior operations director. I will paste a 20-page meeting transcript or report. Extract: (1) Key strategic decisions made, (2) Action items categorized by person and deadline, and (3) Unresolved risks. Format as bullet points with zero fluff."

#### Prompt 2: The Irresistible Client Proposal Drafter
"Act as an expert copywriter. I am submitting a proposal for a local dental clinic website redesign. The client's main complaint is that their current site is slow on mobile phones and gets zero online bookings. Write a polite, confident 4-paragraph proposal explaining how our mobile-first redesign will solve this problem."

#### Prompt 3: The Messy Spreadsheet Formula Generator
"I have a Google Sheet where column A contains mixed full names and email addresses. Provide the exact formula to extract only the domain name from the email and place it in Column B, with an explanation of how the formula works."

Save these templates in your notes and watch your weekly office workload shrink in half!`,
    category: 'AI Tools',
    author: {
      name: 'Farida Bamba',
      role: 'Digital Skills Educator & Tech Mentor',
      avatar: '/src/assets/images/instructor_portrait_1791370279802.jpg'
    },
    date: 'Sep 28, 2026',
    readTime: '4 min read',
    featuredImage: '/src/assets/images/hero_digital_skills_1791370266919.jpg',
    tags: ['AI Productivity', 'ChatGPT', 'Prompt Engineering', 'Automation'],
    featured: false,
  },
  {
    id: 'post-3',
    title: 'From Zero Tech Background to First Remote Client on Upwork',
    slug: 'zero-tech-to-first-upwork-client',
    excerpt: 'How one of our students, Amina, landed two international retainer clients within 21 days of finishing the Freelance Launchpad program.',
    content: `When Amina joined our academy, she had spent seven years as a primary school teacher and felt terrified of opening spreadsheet software. Today, she manages digital operations and email support for a digital consulting firm based in Manchester.

Here is the exact strategy that worked:

1. **The 3-Sentence Loom Video Audit**: Instead of submitting a text proposal that looks like every other freelancer's copy-pasted letter, Amina recorded a 90-second screen-share video showing the client two specific broken links on their landing page and how she could fix them.
2. **Niche Specialization**: Rather than listing "Virtual Assistant for Everything", her profile focused specifically on "Executive Calendar & Customer Operations for Small Agencies".
3. **Transparent Milestones**: She offered a 5-hour trial project with clear deliverables before proposing a monthly retainer.

Within 21 days, she signed her first $650/month contract, working from home on a flexible schedule.`,
    category: 'Freelancing',
    author: {
      name: 'Farida Bamba',
      role: 'Digital Skills Educator & Tech Mentor',
      avatar: '/src/assets/images/instructor_portrait_1791370279802.jpg'
    },
    date: 'Sep 15, 2026',
    readTime: '6 min read',
    featuredImage: '/src/assets/images/community_success_1791370299617.jpg',
    tags: ['Freelancing', 'Upwork', 'Remote Work', 'Student Story'],
    featured: false,
  },
  {
    id: 'post-4',
    title: 'No-Code vs Traditional Coding: What Should Beginners Learn First?',
    slug: 'no-code-vs-traditional-coding-beginners',
    excerpt: 'Should you spend 6 months learning JavaScript and React, or start building immediately with Webflow and WordPress? Here is the honest breakdown.',
    content: `The tech industry often suffers from gatekeeping. Many developers tell complete beginners that they must first master HTML, CSS, JavaScript, React, SQL, and Git before they can build anything of commercial value.

While traditional coding is fantastic for complex software engineering, 95% of small business websites, marketing landing pages, and portfolio sites do not need custom React applications.

With tools like WordPress, Webflow, and modern component visual builders:
- You can build and launch a fully functional, mobile-responsive website in 3 days.
- You can connect payment gateways like Stripe or Paystack in 15 minutes.
- You can optimize SEO and achieve 95+ performance scores easily.

For beginners who need to build confidence and generate income quickly, No-Code is the best launchpad. Once you understand page architecture and user experience, picking up code later is ten times easier!`,
    category: 'Web & Design',
    author: {
      name: 'Farida Bamba',
      role: 'Digital Skills Educator & Tech Mentor',
      avatar: '/src/assets/images/instructor_portrait_1791370279802.jpg'
    },
    date: 'Aug 30, 2026',
    readTime: '5 min read',
    featuredImage: '/src/assets/images/project_modern_ecommerce_1791371614219.jpg',
    tags: ['Web Design', 'No-Code', 'WordPress', 'Career Advice'],
    featured: false,
  }
];

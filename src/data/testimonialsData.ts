export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  courseCompleted: string;
  avatar: string;
  quote: string;
  outcomeMetric: string;
  rating: number;
}

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: 't1',
    name: 'Amina Bello',
    role: 'Former High School Teacher → Remote Virtual Assistant',
    location: 'Lagos & Remote',
    courseCompleted: 'Digital Starter Bootcamp & AI Productivity',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
    quote: 'Before this training, I felt nervous whenever someone mentioned Excel formulas or Google Workspace. Coach Marcus explained everything so patiently without making me feel silly. Within two weeks of finishing, I secured my first remote administrative role with a UK consulting agency!',
    outcomeMetric: 'Landed first remote role earning $650/month from home',
    rating: 5
  },
  {
    id: 't2',
    name: 'Emmanuel Adeyemi',
    role: 'Boutique Apparel Founder',
    location: 'Abuja',
    courseCompleted: 'Graphic Design & Brand Identity',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
    quote: 'I used to spend half my profits paying graphic designers who delivered late and misunderstood my vision. This course taught me color balance, typography, and Canva Pro. Now, I design all my product launch posters and Instagram stories in 20 minutes.',
    outcomeMetric: 'Saved $1,200 in agency fees and doubled online engagement',
    rating: 5
  },
  {
    id: 't3',
    name: 'Chioma Nwosu',
    role: 'University Graduate → Freelance Web Designer',
    location: 'Enugu',
    courseCompleted: 'No-Code Website Development',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80',
    quote: 'I graduated with a biology degree and had zero job callbacks for ten months. This hands-on program gave me a tangible, marketable skill. We built three real websites during class. I pitched a local private clinic and they hired me on the spot for their website redesign.',
    outcomeMetric: 'Built 4 client websites in her first 60 days after graduation',
    rating: 5
  },
  {
    id: 't4',
    name: 'Tunde Oladipo',
    role: 'Operations Supervisor',
    location: 'Ibadan',
    courseCompleted: 'Practical AI Tools & Automation',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80',
    quote: 'Our team was drowning in weekly status reports and repetitive data entry. Learning prompt engineering and simple Make automations cut my weekly reporting time from 6 hours down to 25 minutes. My director noticed immediately and recommended me for a promotion.',
    outcomeMetric: 'Automated 5+ hours of repetitive weekly paperwork',
    rating: 5
  },
  {
    id: 't5',
    name: 'Fatima Al-Mansoor',
    role: 'Freelance Content Strategist',
    location: 'Kano & Remote',
    courseCompleted: 'Freelancing & Remote Income Launchpad',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80',
    quote: 'The proposal templates and client communication frameworks gave me complete career clarity. I went from sending generic proposals that got ignored to receiving 4 interview invites in one week on Upwork. Farida gives genuine feedback on your actual portfolio.',
    outcomeMetric: 'Won 2 international retainers within 3 weeks of launch',
    rating: 5
  },
  {
    id: 't6',
    name: 'David K. Mensah',
    role: 'Small Business Retailer',
    location: 'Accra',
    courseCompleted: 'Digital Marketing & Social Ads Accelerator',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=256&q=80',
    quote: 'I had previously boosted posts on Instagram and lost money with zero sales. This course taught me the true science of audience targeting and running lead ads that actually convert to WhatsApp chats. Our store had its most profitable month ever last quarter.',
    outcomeMetric: 'Achieved 4.2x Return on Ad Spend (ROAS) on Meta campaigns',
    rating: 5
  }
];

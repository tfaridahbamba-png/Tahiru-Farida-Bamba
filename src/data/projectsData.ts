import { APP_IMAGES } from '../utils/images';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Web Development' | 'Branding & Graphic Design' | 'AI & Automation' | 'Digital Marketing';
  featuredImage: string;
  summary: string;
  description: string;
  tools: string[];
  outcome: string;
  timeline: string;
  featured?: boolean;
}

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'GreenLeaf Botanical Organics E-Commerce Store',
    client: 'GreenLeaf Skincare & Wellness Co.',
    category: 'Web Development',
    featuredImage: APP_IMAGES.ecommerce,
    summary: 'A fast, mobile-optimized online storefront with seamless checkout, WhatsApp order routing, and inventory tracking.',
    description: 'GreenLeaf was losing over 60% of their mobile visitors due to a clunky template that took 8 seconds to load. Student developers from Farida’s academy redesigned the storefront with a clean minimalist aesthetic, compressed product galleries, and automated WhatsApp order alerts for local deliveries.',
    tools: ['WordPress', 'WooCommerce', 'Canva Pro', 'WhatsApp API', 'Stripe/Paystack'],
    outcome: 'Increased mobile checkout conversion by 140% and reduced page load time from 8.2s to 1.4s.',
    timeline: '3 Weeks',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Nova Consulting Executive Operations Dashboard',
    client: 'Nova Advisory & Financial Services',
    category: 'AI & Automation',
    featuredImage: APP_IMAGES.dashboard,
    summary: 'Automated data pipeline transforming daily consultation inquiries into interactive visual dashboards and AI client summaries.',
    description: 'Nova Consulting was wasting 15 hours each week having staff copy customer information between emails, spreadsheets, and calendar invites. Farida mentored a small team to connect Google Forms, Make.com, Claude AI, and Google Sheets into an automated system.',
    tools: ['Google Sheets Advanced', 'Make.com', 'Claude API', 'Looker Studio', 'Gmail Automation'],
    outcome: 'Eliminated 15+ hours of repetitive manual data entry per week and provided real-time executive revenue reports.',
    timeline: '2 Weeks',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'Aura Lifestyle Apparel Complete Visual Brand Kit',
    client: 'Aura Activewear & Fashion Studio',
    category: 'Branding & Graphic Design',
    featuredImage: APP_IMAGES.handsOn,
    summary: 'End-to-end visual identity system including vector logo marks, color tokens, typography guides, and 20 social media launch templates.',
    description: 'An aspiring fashion founder needed a cohesive brand identity that felt premium yet approachable. Using principles taught in our Graphic Design masterclass, the project delivered an authentic visual kit ready for packaging, labels, and digital advertising.',
    tools: ['Figma', 'Canva Pro', 'Typography System', 'Color Psychology', 'Print Prep'],
    outcome: 'Delivered 25+ brand assets and social templates that resulted in an organic sell-out of the launch collection.',
    timeline: '3 Weeks',
    featured: true,
  },
  {
    id: 'proj-4',
    title: 'Apex Dental Care Local Patient Acquisition Campaign',
    client: 'Apex Family Dental Practice',
    category: 'Digital Marketing',
    featuredImage: APP_IMAGES.blogCareer,
    summary: 'Targeted Google Search and Meta ad campaigns with a dedicated mobile-friendly booking landing page.',
    description: 'A newly opened family dental clinic needed steady patient bookings. The project set up local geo-targeted Google Ads targeting high-intent search terms (e.g., "teeth whitening near me", "emergency dentist"), paired with a 1-page fast-loading reservation form.',
    tools: ['Google Ads', 'Meta Ads Manager', 'Landing Page Builder', 'Google Search Console'],
    outcome: 'Generated 48 confirmed new patient appointments in the first 30 days at a 3.8x Return on Ad Spend.',
    timeline: '4 Weeks',
    featured: false,
  }
];

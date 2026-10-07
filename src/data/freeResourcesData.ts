export interface FreeResource {
  id: string;
  title: string;
  category: 'PDF Guide' | 'Cheatsheet' | 'Templates' | 'Mini Video Class';
  description: string;
  badge: string;
  fileFormat: string;
  downloadsCount: string;
  topics: string[];
}

export const FREE_RESOURCES: FreeResource[] = [
  {
    id: 'res-1',
    title: 'The 2026 Beginner Digital Career Roadmap',
    category: 'PDF Guide',
    description: 'A clear, step-by-step breakdown of the top 7 high-paying digital skills you can master in 90 days without a computer science degree.',
    badge: 'Most Popular',
    fileFormat: 'PDF Document · 28 Pages',
    downloadsCount: '4,800+ downloads',
    topics: ['Skill selection audit', 'Free learning tools', 'Income benchmarks', '90-day execution calendar']
  },
  {
    id: 'res-2',
    title: '50 Essential Everyday AI Prompts for Non-Techies',
    category: 'Cheatsheet',
    description: 'Copy-and-paste ChatGPT and Claude prompts for writing professional emails, summarizing lengthy reports, and brainstorming business ideas.',
    badge: 'Quick Win',
    fileFormat: 'Printable Cheatsheet · PDF',
    downloadsCount: '6,200+ downloads',
    topics: ['Workplace email templates', 'Meeting summary prompts', 'Market research queries', 'Data formatting rules']
  },
  {
    id: 'res-3',
    title: 'The Freelancer Starter Pitch & Proposal Bundle',
    category: 'Templates',
    description: 'The exact 4-sentence cold email and Upwork proposal templates our students use to land their first paying freelance clients.',
    badge: 'High Value',
    fileFormat: 'Word & Google Docs Templates',
    downloadsCount: '3,450+ downloads',
    topics: ['Cold outreach scripts', 'Objection handling lines', 'Rate card template', 'Client invoice format']
  },
  {
    id: 'res-4',
    title: 'Computer & Cloud Storage Hygiene Checklist',
    category: 'Cheatsheet',
    description: 'A simple 15-point checklist to clean up your messy laptop desktop, organize Google Drive folders, and backup critical files safely.',
    badge: 'Beginner Essential',
    fileFormat: 'Interactive PDF Checklist',
    downloadsCount: '2,900+ downloads',
    topics: ['Desktop zero strategy', 'Google Drive naming rules', 'Password security 101', 'Cloud auto-sync setup']
  }
];

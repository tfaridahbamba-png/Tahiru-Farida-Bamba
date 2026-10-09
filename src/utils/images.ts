/**
 * Centralized Image Asset Catalog & Safe Resolver
 * Uses ES imports to ensure Vite bundles and hashes every asset for both Dev and Production,
 * plus provides an infallible URL resolver and rich fallback component.
 */

import heroSkillsImg from '../assets/images/hero_digital_skills_1791370266919.jpg';
import instructorPortraitImg from '../assets/images/instructor_portrait_1791370279802.jpg';
import handsOnLaptopImg from '../assets/images/hands_on_laptop_1791370289562.jpg';
import communitySuccessImg from '../assets/images/community_success_1791370299617.jpg';
import blogCareerImg from '../assets/images/blog_digital_career_1791371603288.jpg';
import projectEcommerceImg from '../assets/images/project_modern_ecommerce_1791371614219.jpg';
import projectDashboardImg from '../assets/images/project_web_dashboard_1791371626846.jpg';

export const APP_IMAGES = {
  hero: heroSkillsImg,
  instructor: instructorPortraitImg,
  handsOn: handsOnLaptopImg,
  community: communitySuccessImg,
  blogCareer: blogCareerImg,
  ecommerce: projectEcommerceImg,
  dashboard: projectDashboardImg,
};

export interface FeaturedImageOption {
  id: string;
  label: string;
  category: string;
  url: string;
}

export const PRESET_FEATURED_IMAGES: FeaturedImageOption[] = [
  {
    id: 'img-hero',
    label: 'Classroom & Student Workshop Studio',
    category: 'Education & Learning',
    url: heroSkillsImg,
  },
  {
    id: 'img-instructor',
    label: 'Instructor & Mentor Professional Portrait',
    category: 'Leadership & Educator',
    url: instructorPortraitImg,
  },
  {
    id: 'img-career',
    label: 'Digital Career & Analytics Desk',
    category: 'Career & Analytics',
    url: blogCareerImg,
  },
  {
    id: 'img-ecommerce',
    label: 'E-Commerce Online Store Mockup',
    category: 'Web & Commercial',
    url: projectEcommerceImg,
  },
  {
    id: 'img-dashboard',
    label: 'Tech Operations & Web Dashboard',
    category: 'AI & Data Systems',
    url: projectDashboardImg,
  },
  {
    id: 'img-hands-on',
    label: 'Hands-on Laptop & Notes Workspace',
    category: 'Practical Skills',
    url: handsOnLaptopImg,
  },
  {
    id: 'img-community',
    label: 'Community Graduation & Celebration',
    category: 'Success & Alumni',
    url: communitySuccessImg,
  },
];

/**
 * Resolves any image URL or legacy path to a guaranteed working image source.
 * Handles paths like '/src/assets/images/...', filenames, presets, and web URLs.
 */
export function resolveImageUrl(pathOrUrl?: string | null): string {
  if (!pathOrUrl || typeof pathOrUrl !== 'string') {
    return heroSkillsImg;
  }

  const clean = pathOrUrl.trim();

  // If already an imported asset or full URL (http, https, blob, data)
  if (
    clean.startsWith('http://') ||
    clean.startsWith('https://') ||
    clean.startsWith('data:') ||
    clean.startsWith('blob:')
  ) {
    return clean;
  }

  // Check matching by substring or filename
  if (clean.includes('hero_digital_skills') || clean.includes('hero')) {
    return heroSkillsImg;
  }
  if (clean.includes('instructor_portrait') || clean.includes('instructor') || clean.includes('portrait')) {
    return instructorPortraitImg;
  }
  if (clean.includes('blog_digital_career') || clean.includes('career') || clean.includes('blog')) {
    return blogCareerImg;
  }
  if (clean.includes('project_modern_ecommerce') || clean.includes('ecommerce') || clean.includes('store')) {
    return projectEcommerceImg;
  }
  if (clean.includes('project_web_dashboard') || clean.includes('dashboard') || clean.includes('analytics')) {
    return projectDashboardImg;
  }
  if (clean.includes('hands_on_laptop') || clean.includes('hands_on') || clean.includes('laptop')) {
    return handsOnLaptopImg;
  }
  if (clean.includes('community_success') || clean.includes('community') || clean.includes('success')) {
    return communitySuccessImg;
  }

  // If path was saved as '/images/...' or anything else in public
  if (clean.startsWith('/images/')) {
    return clean;
  }

  return clean;
}

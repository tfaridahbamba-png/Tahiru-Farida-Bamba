import { BlogPost, INITIAL_BLOG_POSTS } from '../data/blogData';
import { Project, INITIAL_PROJECTS } from '../data/projectsData';
import { resolveImageUrl } from './images';

const BLOG_KEY = 'farida_blog_posts_v2';
const PROJECTS_KEY = 'farida_projects_v2';
const INQUIRIES_KEY = 'farida_inquiries_v2';
const REGISTRATIONS_KEY = 'farida_registrations_v2';

export interface InboundInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  skillInterest: string;
  format: string;
  message: string;
  date: string;
  status: 'New' | 'Replied' | 'Enrolled';
}

export interface StudentRegistration {
  id: string;
  studentRef: string;
  name: string;
  email: string;
  phone: string;
  courseTitle: string;
  format: string;
  experienceLevel: string;
  date: string;
}

// Blog storage methods with automatic image resolution
export const getStoredBlogPosts = (): BlogPost[] => {
  try {
    const raw = localStorage.getItem(BLOG_KEY);
    let list: BlogPost[];
    if (!raw) {
      list = INITIAL_BLOG_POSTS;
      localStorage.setItem(BLOG_KEY, JSON.stringify(list));
    } else {
      list = JSON.parse(raw);
    }
    // Sanitize image paths
    return list.map((post) => ({
      ...post,
      featuredImage: resolveImageUrl(post.featuredImage),
      author: {
        ...post.author,
        avatar: resolveImageUrl(post.author?.avatar),
      },
    }));
  } catch {
    return INITIAL_BLOG_POSTS;
  }
};

export const saveBlogPost = (post: BlogPost): BlogPost[] => {
  const current = getStoredBlogPosts();
  const sanitizedPost: BlogPost = {
    ...post,
    featuredImage: resolveImageUrl(post.featuredImage),
    author: {
      ...post.author,
      avatar: resolveImageUrl(post.author?.avatar),
    },
  };
  const existingIndex = current.findIndex((p) => p.id === sanitizedPost.id);
  let updated: BlogPost[];
  if (existingIndex >= 0) {
    updated = [...current];
    updated[existingIndex] = sanitizedPost;
  } else {
    updated = [sanitizedPost, ...current];
  }
  localStorage.setItem(BLOG_KEY, JSON.stringify(updated));
  return updated;
};

export const deleteBlogPost = (id: string): BlogPost[] => {
  const current = getStoredBlogPosts();
  const updated = current.filter((p) => p.id !== id);
  localStorage.setItem(BLOG_KEY, JSON.stringify(updated));
  return updated;
};

// Projects storage methods with automatic image resolution
export const getStoredProjects = (): Project[] => {
  try {
    const raw = localStorage.getItem(PROJECTS_KEY);
    let list: Project[];
    if (!raw) {
      list = INITIAL_PROJECTS;
      localStorage.setItem(PROJECTS_KEY, JSON.stringify(list));
    } else {
      list = JSON.parse(raw);
    }
    // Sanitize image paths
    return list.map((proj) => ({
      ...proj,
      featuredImage: resolveImageUrl(proj.featuredImage),
    }));
  } catch {
    return INITIAL_PROJECTS;
  }
};

export const saveProject = (proj: Project): Project[] => {
  const current = getStoredProjects();
  const sanitizedProj: Project = {
    ...proj,
    featuredImage: resolveImageUrl(proj.featuredImage),
  };
  const existingIndex = current.findIndex((p) => p.id === sanitizedProj.id);
  let updated: Project[];
  if (existingIndex >= 0) {
    updated = [...current];
    updated[existingIndex] = sanitizedProj;
  } else {
    updated = [sanitizedProj, ...current];
  }
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(updated));
  return updated;
};

export const deleteProject = (id: string): Project[] => {
  const current = getStoredProjects();
  const updated = current.filter((p) => p.id !== id);
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(updated));
  return updated;
};

// Inquiries storage
export const getStoredInquiries = (): InboundInquiry[] => {
  try {
    const raw = localStorage.getItem(INQUIRIES_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const saveInquiry = (inquiry: Omit<InboundInquiry, 'id' | 'date' | 'status'>): InboundInquiry => {
  const current = getStoredInquiries();
  const newRecord: InboundInquiry = {
    ...inquiry,
    id: `inq-${Date.now()}`,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    status: 'New',
  };
  localStorage.setItem(INQUIRIES_KEY, JSON.stringify([newRecord, ...current]));
  return newRecord;
};

// Student Registrations storage
export const getStoredRegistrations = (): StudentRegistration[] => {
  try {
    const raw = localStorage.getItem(REGISTRATIONS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const saveRegistration = (reg: Omit<StudentRegistration, 'id' | 'date'>): StudentRegistration => {
  const current = getStoredRegistrations();
  const newRecord: StudentRegistration = {
    ...reg,
    id: `reg-${Date.now()}`,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  };
  localStorage.setItem(REGISTRATIONS_KEY, JSON.stringify([newRecord, ...current]));
  return newRecord;
};

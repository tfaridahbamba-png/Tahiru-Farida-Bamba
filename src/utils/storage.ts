import { BlogPost, INITIAL_BLOG_POSTS } from '../data/blogData';
import { Project, INITIAL_PROJECTS } from '../data/projectsData';

const BLOG_KEY = 'farida_blog_posts_v1';
const PROJECTS_KEY = 'farida_projects_v1';
const INQUIRIES_KEY = 'farida_inquiries_v1';
const REGISTRATIONS_KEY = 'farida_registrations_v1';

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

// Blog storage methods
export const getStoredBlogPosts = (): BlogPost[] => {
  try {
    const raw = localStorage.getItem(BLOG_KEY);
    if (!raw) {
      localStorage.setItem(BLOG_KEY, JSON.stringify(INITIAL_BLOG_POSTS));
      return INITIAL_BLOG_POSTS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_BLOG_POSTS;
  }
};

export const saveBlogPost = (post: BlogPost): BlogPost[] => {
  const current = getStoredBlogPosts();
  const existingIndex = current.findIndex((p) => p.id === post.id);
  let updated: BlogPost[];
  if (existingIndex >= 0) {
    updated = [...current];
    updated[existingIndex] = post;
  } else {
    updated = [post, ...current];
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

// Projects storage methods
export const getStoredProjects = (): Project[] => {
  try {
    const raw = localStorage.getItem(PROJECTS_KEY);
    if (!raw) {
      localStorage.setItem(PROJECTS_KEY, JSON.stringify(INITIAL_PROJECTS));
      return INITIAL_PROJECTS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_PROJECTS;
  }
};

export const saveProject = (proj: Project): Project[] => {
  const current = getStoredProjects();
  const existingIndex = current.findIndex((p) => p.id === proj.id);
  let updated: Project[];
  if (existingIndex >= 0) {
    updated = [...current];
    updated[existingIndex] = proj;
  } else {
    updated = [proj, ...current];
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

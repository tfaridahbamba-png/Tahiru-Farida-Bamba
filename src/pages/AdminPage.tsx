import React, { useState } from 'react';
import { BlogPost } from '../data/blogData';
import { Project } from '../data/projectsData';
import {
  InboundInquiry,
  StudentRegistration,
  getStoredBlogPosts,
  saveBlogPost,
  deleteBlogPost,
  getStoredProjects,
  saveProject,
  deleteProject,
  getStoredInquiries,
  getStoredRegistrations,
} from '../utils/storage';
import {
  ShieldCheck,
  FileText,
  Briefcase,
  Users,
  MessageSquare,
  Plus,
  Trash2,
  Edit,
  Image as ImageIcon,
  CheckCircle2,
  Lock,
  Unlock,
  ArrowLeft,
  Sparkles,
  Eye,
  ExternalLink
} from 'lucide-react';

interface AdminPageProps {
  onBackToSite: () => void;
  onRefreshData: () => void;
}

// Preset available high-quality featured images in the system
const AVAILABLE_FEATURED_IMAGES = [
  { label: 'Digital Career & Analytics Desk', path: '/src/assets/images/blog_digital_career_1791371603288.jpg' },
  { label: 'E-Commerce Online Store Mockup', path: '/src/assets/images/project_modern_ecommerce_1791371614219.jpg' },
  { label: 'Tech Operations & Web Dashboard', path: '/src/assets/images/project_web_dashboard_1791371626846.jpg' },
  { label: 'Hands-on Laptop & Notes Workspace', path: '/src/assets/images/hands_on_laptop_1791370289562.jpg' },
  { label: 'Classroom & Student Workshop Studio', path: '/src/assets/images/hero_digital_skills_1791370266919.jpg' },
  { label: 'Community Graduation & Celebration', path: '/src/assets/images/community_success_1791370299617.jpg' },
];

export const AdminPage: React.FC<AdminPageProps> = ({ onBackToSite, onRefreshData }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Default unlocked for smooth review
  const [activeTab, setActiveTab] = useState<'posts' | 'projects' | 'inquiries' | 'registrations'>('posts');

  const [posts, setPosts] = useState<BlogPost[]>(getStoredBlogPosts());
  const [projects, setProjects] = useState<Project[]>(getStoredProjects());
  const [inquiries, setInquiries] = useState<InboundInquiry[]>(getStoredInquiries());
  const [registrations, setRegistrations] = useState<StudentRegistration[]>(getStoredRegistrations());

  // Post form modal state
  const [isEditingPost, setIsEditingPost] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<BlogPost>>({
    title: '',
    category: 'Career Advice',
    excerpt: '',
    content: '',
    readTime: '5 min read',
    featuredImage: AVAILABLE_FEATURED_IMAGES[0].path,
    tags: ['Digital Skills'],
  });

  // Project form modal state
  const [isEditingProject, setIsEditingProject] = useState(false);
  const [currentProject, setCurrentProject] = useState<Partial<Project>>({
    title: '',
    client: '',
    category: 'Web Development',
    summary: '',
    description: '',
    outcome: '',
    timeline: '3 Weeks',
    featuredImage: AVAILABLE_FEATURED_IMAGES[1].path,
    tools: ['WordPress', 'Figma'],
  });

  // Handlers for Blog Posts
  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPost.title || !currentPost.content) return;

    const postToSave: BlogPost = {
      id: currentPost.id || `post-${Date.now()}`,
      title: currentPost.title,
      slug: (currentPost.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      excerpt: currentPost.excerpt || '',
      content: currentPost.content,
      category: (currentPost.category as any) || 'Career Advice',
      author: {
        name: 'Farida Bamba',
        role: 'Digital Skills Educator & Tech Mentor',
        avatar: '/src/assets/images/instructor_portrait_1791370279802.jpg',
      },
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: currentPost.readTime || '5 min read',
      featuredImage: currentPost.featuredImage || AVAILABLE_FEATURED_IMAGES[0].path,
      tags: currentPost.tags || ['Digital Skills'],
      featured: currentPost.featured || false,
    };

    const updated = saveBlogPost(postToSave);
    setPosts(updated);
    setIsEditingPost(false);
    onRefreshData();
  };

  const handleDeletePost = (id: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      const updated = deleteBlogPost(id);
      setPosts(updated);
      onRefreshData();
    }
  };

  // Handlers for Projects
  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProject.title || !currentProject.client) return;

    const projectToSave: Project = {
      id: currentProject.id || `proj-${Date.now()}`,
      title: currentProject.title,
      client: currentProject.client,
      category: (currentProject.category as any) || 'Web Development',
      featuredImage: currentProject.featuredImage || AVAILABLE_FEATURED_IMAGES[1].path,
      summary: currentProject.summary || '',
      description: currentProject.description || '',
      outcome: currentProject.outcome || '',
      timeline: currentProject.timeline || '3 Weeks',
      tools: currentProject.tools || ['Figma', 'Webflow'],
      featured: currentProject.featured || false,
    };

    const updated = saveProject(projectToSave);
    setProjects(updated);
    setIsEditingProject(false);
    onRefreshData();
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('Are you sure you want to delete this portfolio project?')) {
      const updated = deleteProject(id);
      setProjects(updated);
      onRefreshData();
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToSite}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors cursor-pointer"
              title="Return to Public Website"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
                <h1 className="text-xl font-bold text-white font-heading">
                  Farida BLoG & Academy Admin Portal
                </h1>
              </div>
              <p className="text-xs text-slate-400">
                Manage featured images, articles, student case studies, and inbound registrations.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToSite}
              className="px-4 py-2 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              Back to Public Website
            </button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase">Blog Articles</span>
              <FileText className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-3xl font-bold text-white tabular-nums">{posts.length}</p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase">Featured Projects</span>
              <Briefcase className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-3xl font-bold text-white tabular-nums">{projects.length}</p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase">Inbound Inquiries</span>
              <MessageSquare className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-white tabular-nums">{inquiries.length}</p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase">Student Registrations</span>
              <Users className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-3xl font-bold text-white tabular-nums">{registrations.length}</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-800 space-x-2">
          {[
            { id: 'posts', label: 'Blog Posts & Featured Images', icon: FileText },
            { id: 'projects', label: 'Projects & Case Studies', icon: Briefcase },
            { id: 'inquiries', label: `Messages (${inquiries.length})`, icon: MessageSquare },
            { id: 'registrations', label: `Enrollments (${registrations.length})`, icon: Users },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                  active
                    ? 'border-indigo-500 text-indigo-400 bg-slate-800/50'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: BLOG POSTS */}
        {activeTab === 'posts' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Articles & Featured Images</h3>
                <p className="text-xs text-slate-400">Manage blog articles and their featured media assets.</p>
              </div>
              <button
                onClick={() => {
                  setCurrentPost({
                    title: '',
                    category: 'Career Advice',
                    excerpt: '',
                    content: '',
                    readTime: '5 min read',
                    featuredImage: AVAILABLE_FEATURED_IMAGES[0].path,
                    tags: ['Digital Skills'],
                    featured: false,
                  });
                  setIsEditingPost(true);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Article</span>
              </button>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Featured Image Display */}
                    <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-slate-950/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="absolute top-2 right-2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="p-4 space-y-2">
                      <p className="text-[11px] text-slate-400">{post.date} · {post.readTime}</p>
                      <h4 className="text-sm font-bold text-white leading-snug">{post.title}</h4>
                      <p className="text-xs text-slate-300 line-clamp-2">{post.excerpt}</p>
                    </div>
                  </div>

                  <div className="p-4 pt-2 border-t border-slate-700/80 flex items-center justify-between text-xs">
                    <button
                      onClick={() => {
                        setCurrentPost(post);
                        setIsEditingPost(true);
                      }}
                      className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <Edit className="w-3.5 h-3.5" />
                      <span>Edit & Change Image</span>
                    </button>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: PROJECTS */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Portfolio Projects & Case Studies</h3>
                <p className="text-xs text-slate-400">Showcase real client work and student outcomes with featured images.</p>
              </div>
              <button
                onClick={() => {
                  setCurrentProject({
                    title: '',
                    client: '',
                    category: 'Web Development',
                    summary: '',
                    description: '',
                    outcome: '',
                    timeline: '3 Weeks',
                    featuredImage: AVAILABLE_FEATURED_IMAGES[1].path,
                    tools: ['WordPress', 'Figma'],
                    featured: false,
                  });
                  setIsEditingProject(true);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Project</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Featured Image */}
                    <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                      <img
                        src={proj.featuredImage}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-slate-950/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {proj.category}
                      </span>
                    </div>

                    <div className="p-4 space-y-2">
                      <p className="text-[11px] text-indigo-400 font-semibold">Client: {proj.client}</p>
                      <h4 className="text-base font-bold text-white">{proj.title}</h4>
                      <p className="text-xs text-slate-300">{proj.summary}</p>
                      <div className="p-2.5 bg-slate-900/60 rounded-lg text-xs text-emerald-400">
                        <strong>Outcome:</strong> {proj.outcome}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-2 border-t border-slate-700/80 flex items-center justify-between text-xs">
                    <button
                      onClick={() => {
                        setCurrentProject(proj);
                        setIsEditingProject(true);
                      }}
                      className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <Edit className="w-3.5 h-3.5" />
                      <span>Edit & Change Image</span>
                    </button>
                    <button
                      onClick={() => handleDeleteProject(proj.id)}
                      className="text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Inbound Messages from Contact Page</h3>
            {inquiries.length === 0 ? (
              <div className="p-12 text-center bg-slate-800 rounded-2xl border border-slate-700 text-slate-400 text-xs">
                No inbound contact messages received yet. Submit a message on the Contact page to test!
              </div>
            ) : (
              <div className="space-y-3">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="p-4 bg-slate-800 rounded-xl border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{inq.name}</span>
                        <span className="text-indigo-400 font-semibold">({inq.skillInterest})</span>
                        <span className="text-slate-400">{inq.date}</span>
                      </div>
                      <p className="text-slate-300">Email: {inq.email} · Phone/WA: {inq.phone} · Format: {inq.format}</p>
                      <p className="text-slate-400 italic bg-slate-900/60 p-2 rounded">"{inq.message}"</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 4: REGISTRATIONS */}
        {activeTab === 'registrations' && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Student Course Registrations</h3>
            {registrations.length === 0 ? (
              <div className="p-12 text-center bg-slate-800 rounded-2xl border border-slate-700 text-slate-400 text-xs">
                No course enrollments logged yet. Complete the student enrollment form to test!
              </div>
            ) : (
              <div className="space-y-3">
                {registrations.map((reg) => (
                  <div key={reg.id} className="p-4 bg-slate-800 rounded-xl border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{reg.name}</span>
                        <span className="text-emerald-400 font-mono font-bold">[{reg.studentRef}]</span>
                        <span className="text-slate-400">{reg.date}</span>
                      </div>
                      <p className="text-slate-300">Course: <strong className="text-white">{reg.courseTitle}</strong> · Format: {reg.format}</p>
                      <p className="text-slate-400">Email: {reg.email} · Phone/WA: {reg.phone} · Background: {reg.experienceLevel}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* POST EDIT / CREATE MODAL WITH FEATURED IMAGE SELECTOR */}
      {isEditingPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-800 text-slate-100 rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-slate-700 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              {currentPost.id ? 'Edit Blog Article' : 'Create New Article'}
            </h3>

            <form onSubmit={handleSavePost} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Article Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Master Spreadsheet Formulas in 3 Simple Steps"
                  value={currentPost.title || ''}
                  onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                  className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Category</label>
                  <select
                    value={currentPost.category || 'Career Advice'}
                    onChange={(e) => setCurrentPost({ ...currentPost, category: e.target.value as any })}
                    className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white"
                  >
                    <option value="Career Advice">Career Advice</option>
                    <option value="AI Tools">AI Tools</option>
                    <option value="Freelancing">Freelancing</option>
                    <option value="Web & Design">Web & Design</option>
                    <option value="Productivity">Productivity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Estimated Read Time</label>
                  <input
                    type="text"
                    value={currentPost.readTime || '5 min read'}
                    onChange={(e) => setCurrentPost({ ...currentPost, readTime: e.target.value })}
                    className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white"
                  />
                </div>
              </div>

              {/* FEATURED IMAGE SELECTOR */}
              <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-700 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-slate-200 font-bold flex items-center gap-1.5">
                    <ImageIcon className="w-4 h-4 text-indigo-400" />
                    <span>Featured Image (Mandatory / Visual Carrier)</span>
                  </label>
                </div>

                {/* Current Image Preview */}
                <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-slate-700 max-h-44 bg-black">
                  <img
                    src={currentPost.featuredImage}
                    alt="Featured Preview"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Choose from preset library */}
                <div>
                  <p className="text-[11px] text-slate-400 mb-2">Select from High-Resolution Asset Library:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {AVAILABLE_FEATURED_IMAGES.map((img) => (
                      <button
                        type="button"
                        key={img.path}
                        onClick={() => setCurrentPost({ ...currentPost, featuredImage: img.path })}
                        className={`p-1.5 rounded-lg border text-left cursor-pointer transition-all ${
                          currentPost.featuredImage === img.path
                            ? 'border-indigo-400 bg-indigo-950/60 ring-2 ring-indigo-400'
                            : 'border-slate-700 hover:border-slate-500 bg-slate-800'
                        }`}
                      >
                        <img src={img.path} alt={img.label} className="w-full h-14 object-cover rounded mb-1" />
                        <p className="text-[10px] text-slate-300 truncate">{img.label}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Or Paste Custom Image URL:</label>
                  <input
                    type="text"
                    placeholder="https://images.unsplash.com/..."
                    value={currentPost.featuredImage || ''}
                    onChange={(e) => setCurrentPost({ ...currentPost, featuredImage: e.target.value })}
                    className="w-full p-2 bg-slate-800 border border-slate-700 rounded text-slate-200 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Short Excerpt (Summary)</label>
                <textarea
                  rows={2}
                  value={currentPost.excerpt || ''}
                  onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                  className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Full Article Content *</label>
                <textarea
                  rows={6}
                  required
                  value={currentPost.content || ''}
                  onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                  className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-xs"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-700">
                <button
                  type="button"
                  onClick={() => setIsEditingPost(false)}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 font-bold rounded-lg text-white cursor-pointer"
                >
                  Save & Publish Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PROJECT EDIT / CREATE MODAL WITH FEATURED IMAGE SELECTOR */}
      {isEditingProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-800 text-slate-100 rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-slate-700 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              {currentProject.id ? 'Edit Showcase Project' : 'Add New Project'}
            </h3>

            <form onSubmit={handleSaveProject} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Project Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. PureGlow Skincare Web Store"
                    value={currentProject.title || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
                    className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Client Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. PureGlow Wellness Co."
                    value={currentProject.client || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, client: e.target.value })}
                    className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Category</label>
                  <select
                    value={currentProject.category || 'Web Development'}
                    onChange={(e) => setCurrentProject({ ...currentProject, category: e.target.value as any })}
                    className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Branding & Graphic Design">Branding & Graphic Design</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Timeline</label>
                  <input
                    type="text"
                    value={currentProject.timeline || '3 Weeks'}
                    onChange={(e) => setCurrentProject({ ...currentProject, timeline: e.target.value })}
                    className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white"
                  />
                </div>
              </div>

              {/* FEATURED IMAGE SELECTOR */}
              <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-700 space-y-3">
                <label className="text-slate-200 font-bold flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4 text-emerald-400" />
                  <span>Project Featured Image (Primary Visual)</span>
                </label>

                {/* Preview */}
                <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-slate-700 max-h-44 bg-black">
                  <img
                    src={currentProject.featuredImage}
                    alt="Project Preview"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-[11px] text-slate-400 mb-2">Select from High-Resolution Asset Library:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {AVAILABLE_FEATURED_IMAGES.map((img) => (
                      <button
                        type="button"
                        key={img.path}
                        onClick={() => setCurrentProject({ ...currentProject, featuredImage: img.path })}
                        className={`p-1.5 rounded-lg border text-left cursor-pointer transition-all ${
                          currentProject.featuredImage === img.path
                            ? 'border-emerald-400 bg-emerald-950/60 ring-2 ring-emerald-400'
                            : 'border-slate-700 hover:border-slate-500 bg-slate-800'
                        }`}
                      >
                        <img src={img.path} alt={img.label} className="w-full h-14 object-cover rounded mb-1" />
                        <p className="text-[10px] text-slate-300 truncate">{img.label}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Or Paste Custom Image URL:</label>
                  <input
                    type="text"
                    value={currentProject.featuredImage || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, featuredImage: e.target.value })}
                    className="w-full p-2 bg-slate-800 border border-slate-700 rounded text-slate-200 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Measured Outcome / Impact *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +140% mobile conversion and 2.4s faster load speed"
                  value={currentProject.outcome || ''}
                  onChange={(e) => setCurrentProject({ ...currentProject, outcome: e.target.value })}
                  className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Short Summary</label>
                <textarea
                  rows={2}
                  value={currentProject.summary || ''}
                  onChange={(e) => setCurrentProject({ ...currentProject, summary: e.target.value })}
                  className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-700">
                <button
                  type="button"
                  onClick={() => setIsEditingProject(false)}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 font-bold rounded-lg text-white cursor-pointer"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState, useRef } from 'react';
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
  PRESET_FEATURED_IMAGES,
  resolveImageUrl,
  FeaturedImageOption,
  APP_IMAGES,
} from '../utils/images';
import { AppImage } from '../components/AppImage';
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
  ArrowLeft,
  Sparkles,
  Upload,
  Link,
  Layers,
  Copy,
  Check,
  AlertCircle,
} from 'lucide-react';

interface AdminPageProps {
  onBackToSite: () => void;
  onRefreshData: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onBackToSite, onRefreshData }) => {
  const [activeTab, setActiveTab] = useState<'posts' | 'projects' | 'media' | 'inquiries' | 'registrations'>('posts');

  const [posts, setPosts] = useState<BlogPost[]>(getStoredBlogPosts());
  const [projects, setProjects] = useState<Project[]>(getStoredProjects());
  const [inquiries, setInquiries] = useState<InboundInquiry[]>(getStoredInquiries());
  const [registrations, setRegistrations] = useState<StudentRegistration[]>(getStoredRegistrations());

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Post form modal state
  const [isEditingPost, setIsEditingPost] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<BlogPost>>({
    title: '',
    category: 'Career Advice',
    excerpt: '',
    content: '',
    readTime: '5 min read',
    featuredImage: PRESET_FEATURED_IMAGES[0].url,
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
    featuredImage: PRESET_FEATURED_IMAGES[3].url,
    tools: ['WordPress', 'Figma'],
  });

  const fileInputPostRef = useRef<HTMLInputElement>(null);
  const fileInputProjectRef = useRef<HTMLInputElement>(null);
  const fileInputMediaRef = useRef<HTMLInputElement>(null);

  // File upload handler to base64
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, target: 'post' | 'project' | 'media') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      if (target === 'post') {
        setCurrentPost((prev) => ({ ...prev, featuredImage: result }));
      } else if (target === 'project') {
        setCurrentProject((prev) => ({ ...prev, featuredImage: result }));
      }
    };
    reader.readAsDataURL(file);
  };

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
        avatar: APP_IMAGES.instructor,
      },
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: currentPost.readTime || '5 min read',
      featuredImage: resolveImageUrl(currentPost.featuredImage || PRESET_FEATURED_IMAGES[0].url),
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
      featuredImage: resolveImageUrl(currentProject.featuredImage || PRESET_FEATURED_IMAGES[3].url),
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

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/80 via-indigo-950 to-slate-900 text-slate-100 py-8 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Colourful Ambient Glow Orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-fuchsia-600/30 via-pink-600/20 to-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-gradient-to-tl from-amber-500/20 via-rose-500/20 to-violet-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Top Bar with Vibrant Gradient Lockup */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToSite}
              className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all cursor-pointer border border-white/10 hover:scale-105"
              title="Return to Public Website"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-pink-300 font-heading">
                  Farida BLoG & Academy Admin Portal
                </h1>
              </div>
              <p className="text-xs text-indigo-200/80 mt-0.5">
                Manage featured images, live blog stories, student case studies, and inbound registrations.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToSite}
              className="px-4 py-2.5 text-xs font-bold text-slate-900 bg-gradient-to-r from-amber-300 via-pink-400 to-indigo-300 hover:opacity-95 rounded-xl transition-all cursor-pointer shadow-lg shadow-pink-500/20 hover:scale-105"
            >
              Back to Public Website
            </button>
          </div>
        </div>

        {/* Metric Cards with Vibrant Colorful Gradients */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-indigo-900/60 via-purple-900/40 to-slate-900/80 p-5 rounded-2xl border border-indigo-500/30 shadow-lg backdrop-blur-md hover:border-indigo-400 transition-all">
            <div className="flex items-center justify-between text-indigo-300 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Blog Articles</span>
              <FileText className="w-5 h-5 text-indigo-400" />
            </div>
            <p className="text-3xl font-extrabold text-white tabular-nums">{posts.length}</p>
            <span className="text-[11px] text-indigo-300/70 mt-1 block">Full featured images active</span>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/60 via-teal-900/40 to-slate-900/80 p-5 rounded-2xl border border-emerald-500/30 shadow-lg backdrop-blur-md hover:border-emerald-400 transition-all">
            <div className="flex items-center justify-between text-emerald-300 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Showcase Projects</span>
              <Briefcase className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-3xl font-extrabold text-white tabular-nums">{projects.length}</p>
            <span className="text-[11px] text-emerald-300/70 mt-1 block">Real client outputs</span>
          </div>

          <div className="bg-gradient-to-br from-blue-900/60 via-cyan-900/40 to-slate-900/80 p-5 rounded-2xl border border-cyan-500/30 shadow-lg backdrop-blur-md hover:border-cyan-400 transition-all">
            <div className="flex items-center justify-between text-cyan-300 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Contact Inquiries</span>
              <MessageSquare className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-3xl font-extrabold text-white tabular-nums">{inquiries.length}</p>
            <span className="text-[11px] text-cyan-300/70 mt-1 block">Prospective students</span>
          </div>

          <div className="bg-gradient-to-br from-pink-900/60 via-rose-900/40 to-slate-900/80 p-5 rounded-2xl border border-pink-500/30 shadow-lg backdrop-blur-md hover:border-pink-400 transition-all">
            <div className="flex items-center justify-between text-pink-300 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Registrations</span>
              <Users className="w-5 h-5 text-pink-400" />
            </div>
            <p className="text-3xl font-extrabold text-white tabular-nums">{registrations.length}</p>
            <span className="text-[11px] text-pink-300/70 mt-1 block">Course cohorts</span>
          </div>
        </div>

        {/* Tab Switcher with Colorful Glow */}
        <div className="flex flex-wrap border-b border-white/10 gap-2 pb-1">
          {[
            { id: 'posts', label: 'Blog Posts & Featured Images', icon: FileText, color: 'text-indigo-400' },
            { id: 'projects', label: 'Projects & Case Studies', icon: Briefcase, color: 'text-emerald-400' },
            { id: 'media', label: 'Featured Media Library', icon: ImageIcon, color: 'text-pink-400' },
            { id: 'inquiries', label: `Messages (${inquiries.length})`, icon: MessageSquare, color: 'text-cyan-400' },
            { id: 'registrations', label: `Enrollments (${registrations.length})`, icon: Users, color: 'text-amber-400' },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-bold rounded-t-xl transition-all cursor-pointer ${
                  active
                    ? 'bg-white/15 text-white border-b-2 border-pink-400 shadow-md backdrop-blur-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${tab.color}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: BLOG POSTS */}
        {activeTab === 'posts' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/20 backdrop-blur-md">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Articles & Featured Images</span>
                  <span className="text-xs bg-indigo-500/30 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/40">
                    {posts.length} Active
                  </span>
                </h3>
                <p className="text-xs text-indigo-200/70">
                  Every article has an attached, visible high-resolution featured image for rich social cards and homepage feed.
                </p>
              </div>
              <button
                onClick={() => {
                  setCurrentPost({
                    title: '',
                    category: 'Career Advice',
                    excerpt: '',
                    content: '',
                    readTime: '5 min read',
                    featuredImage: PRESET_FEATURED_IMAGES[0].url,
                    tags: ['Digital Skills'],
                    featured: false,
                  });
                  setIsEditingPost(true);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl transition-all cursor-pointer shadow-lg shadow-indigo-500/20 hover:scale-105"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Article</span>
              </button>
            </div>

            {/* Posts Grid with Guaranteed Working Pictures */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-slate-900/80 rounded-2xl border border-white/10 hover:border-indigo-400/50 shadow-xl overflow-hidden flex flex-col justify-between backdrop-blur-md transition-all duration-200 group"
                >
                  <div>
                    {/* Featured Image Display with AppImage */}
                    <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden">
                      <AppImage
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        containerClassName="w-full h-full"
                        fallbackLabel={post.title}
                      />
                      <span className="absolute top-2.5 left-2.5 bg-slate-950/85 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/20">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="absolute top-2.5 right-2.5 bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-md">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="p-4 space-y-2">
                      <p className="text-[11px] text-indigo-300 font-medium">{post.date} · {post.readTime}</p>
                      <h4 className="text-sm font-bold text-white leading-snug group-hover:text-indigo-300 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-xs text-slate-300 line-clamp-2">{post.excerpt}</p>
                    </div>
                  </div>

                  <div className="p-4 pt-2 border-t border-white/10 flex items-center justify-between text-xs bg-black/20">
                    <button
                      onClick={() => {
                        setCurrentPost(post);
                        setIsEditingPost(true);
                      }}
                      className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Edit className="w-3.5 h-3.5" />
                      <span>Edit & Change Image</span>
                    </button>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer transition-colors"
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/20 backdrop-blur-md">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Portfolio Projects & Case Studies</span>
                  <span className="text-xs bg-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/40">
                    {projects.length} Active
                  </span>
                </h3>
                <p className="text-xs text-emerald-200/70">
                  Real client outcomes and student builds with high-definition project screenshots and mockup visuals.
                </p>
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
                    featuredImage: PRESET_FEATURED_IMAGES[3].url,
                    tools: ['WordPress', 'Figma'],
                    featured: false,
                  });
                  setIsEditingProject(true);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-500/20 hover:scale-105"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Project</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-slate-900/80 rounded-2xl border border-white/10 hover:border-emerald-400/50 shadow-xl overflow-hidden flex flex-col justify-between backdrop-blur-md group"
                >
                  <div>
                    {/* Featured Image */}
                    <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden">
                      <AppImage
                        src={proj.featuredImage}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        containerClassName="w-full h-full"
                        fallbackLabel={proj.title}
                      />
                      <span className="absolute top-2.5 left-2.5 bg-slate-950/85 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/20">
                        {proj.category}
                      </span>
                    </div>

                    <div className="p-5 space-y-2.5">
                      <p className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider">Client: {proj.client}</p>
                      <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {proj.title}
                      </h4>
                      <p className="text-xs text-slate-300">{proj.summary}</p>
                      <div className="p-3 bg-white/5 rounded-xl text-xs text-emerald-300 border border-emerald-500/20">
                        <strong>Outcome:</strong> {proj.outcome}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-2 border-t border-white/10 flex items-center justify-between text-xs bg-black/20">
                    <button
                      onClick={() => {
                        setCurrentProject(proj);
                        setIsEditingProject(true);
                      }}
                      className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Edit className="w-3.5 h-3.5" />
                      <span>Edit & Change Image</span>
                    </button>
                    <button
                      onClick={() => handleDeleteProject(proj.id)}
                      className="text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer transition-colors"
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

        {/* TAB 3: MEDIA LIBRARY */}
        {activeTab === 'media' && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-pink-950/40 border border-pink-500/30 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-pink-400" />
                  <span>Featured Image Catalog & Asset Manager</span>
                </h3>
                <p className="text-xs text-pink-200/80 mt-1">
                  High-definition media assets configured for Farida BLoG and academy courses. Click any image to copy its asset URL.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRESET_FEATURED_IMAGES.map((img) => (
                <div
                  key={img.id}
                  className="bg-slate-900/90 rounded-2xl border border-white/10 overflow-hidden shadow-xl hover:border-pink-500/50 transition-all flex flex-col justify-between group"
                >
                  <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                    <AppImage
                      src={img.url}
                      alt={img.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      containerClassName="w-full h-full"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-slate-950/80 text-white text-[10px] font-bold px-2 py-0.5 rounded border border-white/20">
                      {img.category}
                    </span>
                  </div>

                  <div className="p-4 space-y-3">
                    <h4 className="text-sm font-bold text-white">{img.label}</h4>
                    <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Ready in System</span>
                      </span>
                      <button
                        onClick={() => copyToClipboard(img.url, img.id)}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-colors cursor-pointer"
                      >
                        {copiedKey === img.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-300" />
                            <span>Copy Asset URL</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <span>Inbound Messages from Contact Page</span>
            </h3>
            {inquiries.length === 0 ? (
              <div className="p-12 text-center bg-slate-900/60 rounded-2xl border border-white/10 text-slate-400 text-xs">
                No inbound contact messages received yet. Submit a message on the Contact page to test!
              </div>
            ) : (
              <div className="space-y-3">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="p-5 bg-slate-900/80 rounded-2xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-lg backdrop-blur-md">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{inq.name}</span>
                        <span className="text-cyan-400 font-semibold bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
                          {inq.skillInterest}
                        </span>
                        <span className="text-slate-400">{inq.date}</span>
                      </div>
                      <p className="text-slate-300">
                        Email: <strong className="text-white">{inq.email}</strong> · Phone/WA: <strong className="text-white">{inq.phone}</strong> · Format: <span className="text-indigo-300">{inq.format}</span>
                      </p>
                      <p className="text-slate-300 italic bg-black/40 p-3 rounded-xl border border-white/5">
                        "{inq.message}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 5: REGISTRATIONS */}
        {activeTab === 'registrations' && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" />
              <span>Student Course Registrations</span>
            </h3>
            {registrations.length === 0 ? (
              <div className="p-12 text-center bg-slate-900/60 rounded-2xl border border-white/10 text-slate-400 text-xs">
                No course enrollments logged yet. Complete the student enrollment form to test!
              </div>
            ) : (
              <div className="space-y-3">
                {registrations.map((reg) => (
                  <div key={reg.id} className="p-5 bg-slate-900/80 rounded-2xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-lg backdrop-blur-md">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{reg.name}</span>
                        <span className="text-amber-400 font-mono font-bold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
                          [{reg.studentRef}]
                        </span>
                        <span className="text-slate-400">{reg.date}</span>
                      </div>
                      <p className="text-slate-300">
                        Course: <strong className="text-white">{reg.courseTitle}</strong> · Format: <span className="text-pink-300">{reg.format}</span>
                      </p>
                      <p className="text-slate-400">
                        Email: <strong className="text-slate-200">{reg.email}</strong> · Phone/WA: <strong className="text-slate-200">{reg.phone}</strong> · Background: {reg.experienceLevel}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ARTICLE EDIT / CREATE MODAL WITH FEATURED IMAGE SELECTOR */}
      {isEditingPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-slate-100 rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-indigo-500/30 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span>{currentPost.id ? 'Edit Article & Featured Media' : 'Publish New Article'}</span>
            </h3>

            <form onSubmit={handleSavePost} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Article Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 5 Practical Digital Skills That Guarantee Income in 2026"
                  value={currentPost.title || ''}
                  onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                  className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-indigo-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Category</label>
                  <select
                    value={currentPost.category || 'Career Advice'}
                    onChange={(e) => setCurrentPost({ ...currentPost, category: e.target.value as any })}
                    className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-indigo-400 focus:outline-none"
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
                    className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-indigo-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* FEATURED IMAGE SELECTOR WITH LIVE PREVIEW */}
              <div className="p-4 bg-slate-950/80 rounded-2xl border border-indigo-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-slate-200 font-bold flex items-center gap-1.5">
                    <ImageIcon className="w-4 h-4 text-pink-400" />
                    <span>Featured Image (Live & Visible)</span>
                  </label>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Active Preview
                  </span>
                </div>

                {/* Current Image Preview */}
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/20 max-h-48 bg-black shadow-inner">
                  <AppImage
                    src={currentPost.featuredImage}
                    alt="Featured Preview"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                    fallbackLabel="Select an image below"
                  />
                </div>

                {/* Choose from preset library with crystal-clear high-res thumbnails */}
                <div>
                  <p className="text-[11px] text-slate-300 font-semibold mb-2">
                    Click to Select High-Resolution Photo:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {PRESET_FEATURED_IMAGES.map((img) => {
                      const isSelected = resolveImageUrl(currentPost.featuredImage) === resolveImageUrl(img.url);
                      return (
                        <button
                          type="button"
                          key={img.id}
                          onClick={() => setCurrentPost({ ...currentPost, featuredImage: img.url })}
                          className={`p-1.5 rounded-xl border text-left cursor-pointer transition-all ${
                            isSelected
                              ? 'border-pink-500 bg-pink-950/50 ring-2 ring-pink-500 shadow-md scale-[1.02]'
                              : 'border-slate-800 hover:border-slate-600 bg-slate-900/60'
                          }`}
                        >
                          <div className="w-full h-16 rounded-lg overflow-hidden mb-1">
                            <AppImage
                              src={img.url}
                              alt={img.label}
                              className="w-full h-full object-cover"
                              containerClassName="w-full h-full"
                            />
                          </div>
                          <p className="text-[10px] text-slate-200 truncate font-medium">{img.label}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Upload from device option */}
                <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <input
                      type="file"
                      ref={fileInputPostRef}
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, 'post')}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputPostRef.current?.click()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium cursor-pointer transition-colors"
                    >
                      <Upload className="w-3.5 h-3.5 text-pink-400" />
                      <span>Upload Photo from Device</span>
                    </button>
                  </div>
                  <div className="flex-1 max-w-xs">
                    <input
                      type="text"
                      placeholder="Or paste external image URL..."
                      value={currentPost.featuredImage || ''}
                      onChange={(e) => setCurrentPost({ ...currentPost, featuredImage: e.target.value })}
                      className="w-full p-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 text-xs focus:border-indigo-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Short Excerpt (Summary)</label>
                <textarea
                  rows={2}
                  value={currentPost.excerpt || ''}
                  onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                  className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-indigo-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Full Article Content *</label>
                <textarea
                  rows={6}
                  required
                  value={currentPost.content || ''}
                  onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                  className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono text-xs focus:border-indigo-400 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsEditingPost(false)}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 font-bold rounded-xl text-white cursor-pointer shadow-lg shadow-pink-500/20"
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
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-slate-100 rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-emerald-500/30 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-emerald-400" />
              <span>{currentProject.id ? 'Edit Showcase Project' : 'Add New Portfolio Project'}</span>
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
                    className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-emerald-400 focus:outline-none"
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
                    className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-emerald-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Category</label>
                  <select
                    value={currentProject.category || 'Web Development'}
                    onChange={(e) => setCurrentProject({ ...currentProject, category: e.target.value as any })}
                    className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-emerald-400 focus:outline-none"
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
                    className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-emerald-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* FEATURED IMAGE SELECTOR */}
              <div className="p-4 bg-slate-950/80 rounded-2xl border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-slate-200 font-bold flex items-center gap-1.5">
                    <ImageIcon className="w-4 h-4 text-emerald-400" />
                    <span>Project Featured Image (Live & Visible)</span>
                  </label>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Active Preview
                  </span>
                </div>

                {/* Preview */}
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/20 max-h-48 bg-black shadow-inner">
                  <AppImage
                    src={currentProject.featuredImage}
                    alt="Project Preview"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                    fallbackLabel="Select an image below"
                  />
                </div>

                <div>
                  <p className="text-[11px] text-slate-300 font-semibold mb-2">
                    Click to Select High-Resolution Photo:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {PRESET_FEATURED_IMAGES.map((img) => {
                      const isSelected = resolveImageUrl(currentProject.featuredImage) === resolveImageUrl(img.url);
                      return (
                        <button
                          type="button"
                          key={img.id}
                          onClick={() => setCurrentProject({ ...currentProject, featuredImage: img.url })}
                          className={`p-1.5 rounded-xl border text-left cursor-pointer transition-all ${
                            isSelected
                              ? 'border-emerald-400 bg-emerald-950/50 ring-2 ring-emerald-400 shadow-md scale-[1.02]'
                              : 'border-slate-800 hover:border-slate-600 bg-slate-900/60'
                          }`}
                        >
                          <div className="w-full h-16 rounded-lg overflow-hidden mb-1">
                            <AppImage
                              src={img.url}
                              alt={img.label}
                              className="w-full h-full object-cover"
                              containerClassName="w-full h-full"
                            />
                          </div>
                          <p className="text-[10px] text-slate-200 truncate font-medium">{img.label}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Upload from device option */}
                <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <input
                      type="file"
                      ref={fileInputProjectRef}
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, 'project')}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputProjectRef.current?.click()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium cursor-pointer transition-colors"
                    >
                      <Upload className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Upload Photo from Device</span>
                    </button>
                  </div>
                  <div className="flex-1 max-w-xs">
                    <input
                      type="text"
                      placeholder="Or paste external image URL..."
                      value={currentProject.featuredImage || ''}
                      onChange={(e) => setCurrentProject({ ...currentProject, featuredImage: e.target.value })}
                      className="w-full p-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 text-xs focus:border-emerald-400 focus:outline-none"
                    />
                  </div>
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
                  className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Short Summary</label>
                <textarea
                  rows={2}
                  value={currentProject.summary || ''}
                  onChange={(e) => setCurrentProject({ ...currentProject, summary: e.target.value })}
                  className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Detailed Case Study Description</label>
                <textarea
                  rows={4}
                  value={currentProject.description || ''}
                  onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
                  className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono text-xs focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsEditingProject(false)}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:opacity-95 font-bold rounded-xl text-white cursor-pointer shadow-lg shadow-emerald-500/20"
                >
                  Save & Showcase Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

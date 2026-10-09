import React, { useState } from 'react';
import { BlogPost } from '../data/blogData';
import { Search, Clock, Calendar, ArrowRight, BookOpen, Share2, Sparkles, X, CheckCircle2 } from 'lucide-react';
import { AppImage } from '../components/AppImage';

interface BlogPageProps {
  posts: BlogPost[];
}

export const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = ['All', 'Career Advice', 'AI Tools', 'Freelancing', 'Web & Design', 'Productivity'];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find((p) => p.featured) || posts[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  return (
    <div className="py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full px-3.5 py-1 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Farida BLoG · Digital Skills, AI & Career Growth</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight text-balance">
            Insights, Guides & Actionable Tutorials
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Practical strategies written for non-techies to master modern digital tools, AI automation, and remote work opportunities.
          </p>
        </div>

        {/* Featured Post Spotlight (if on 'All' and no search) */}
        {selectedCategory === 'All' && !searchQuery && featuredPost && (
          <div className="mb-14 bg-white/90 backdrop-blur-md rounded-3xl border border-purple-200/80 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Featured Image */}
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:h-full bg-slate-950 overflow-hidden">
                <AppImage
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                  loading="eager"
                  fallbackLabel={featuredPost.title}
                />
                <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Featured Story
                </div>
              </div>

              {/* Text content */}
              <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-indigo-600">{featuredPost.category}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {featuredPost.readTime}
                  </span>
                  <span>·</span>
                  <span>{featuredPost.date}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900">{featuredPost.author.name}</p>
                      <p className="text-[11px] text-slate-400">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setActivePost(featuredPost)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter controls & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles & tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white/85 backdrop-blur-md rounded-2xl border border-purple-200/60 overflow-hidden hover:border-purple-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Prominent Featured Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <AppImage
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    containerClassName="w-full h-full"
                    fallbackLabel={post.title}
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-900 text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-2xs">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {post.readTime}
                    </span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[11px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 mt-auto">
                <button
                  onClick={() => setActivePost(post)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-indigo-600 hover:text-white bg-indigo-50 hover:bg-indigo-600 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Read Full Post</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Box */}
        <div className="mt-16 bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
              Weekly Farida BLoG Dispatch
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading mt-2 mb-3">
              Get Practical Tech & AI Tips Delivered Every Tuesday
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Join 3,400+ readers learning practical digital shortcuts, prompt hacks, and remote income ideas without fluffy jargon.
            </p>

            {newsletterSubscribed ? (
              <div className="p-4 bg-emerald-950/80 border border-emerald-700/80 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>You're on the list! Check your inbox for our latest digital career starter guide.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-3 text-xs bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  Subscribe Free
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Featured Image inside Article */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-6 border border-slate-200 bg-slate-950">
              <AppImage
                src={activePost.featuredImage}
                alt={activePost.title}
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
                fallbackLabel={activePost.title}
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-indigo-600 font-semibold mb-2">
              <span>{activePost.category}</span>
              <span>·</span>
              <span>{activePost.readTime}</span>
              <span>·</span>
              <span>{activePost.date}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-4 leading-tight">
              {activePost.title}
            </h1>

            {/* Author Byline */}
            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-200">
              <img
                src={activePost.author.avatar}
                alt={activePost.author.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
              />
              <div>
                <p className="text-xs font-bold text-slate-900">{activePost.author.name}</p>
                <p className="text-[11px] text-slate-500">{activePost.author.role}</p>
              </div>
            </div>

            {/* Article Content formatted */}
            <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-4">
              {activePost.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return <h3 key={idx} className="text-lg font-bold text-slate-900 mt-6 mb-2">{paragraph.replace('### ', '')}</h3>;
                }
                if (paragraph.startsWith('#### ')) {
                  return <h4 key={idx} className="text-base font-bold text-slate-900 mt-4 mb-1">{paragraph.replace('#### ', '')}</h4>;
                }
                return <p key={idx} className="leading-relaxed whitespace-pre-line">{paragraph}</p>;
              })}
            </div>

            {/* Article Tags */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap gap-2">
              {activePost.tags.map((t) => (
                <span key={t} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg font-medium">
                  #{t}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setActivePost(null)}
                className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

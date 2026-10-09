import React, { useState } from 'react';
import { SKILLS_LIST, DigitalSkill } from '../data/skillsData';
import { COURSES_LIST, Course } from '../data/coursesData';
import {
  Monitor,
  FileSpreadsheet,
  Palette,
  Globe,
  TrendingUp,
  Share2,
  Video,
  Cpu,
  Briefcase,
  ShoppingBag,
  BarChart3,
  UserCheck,
  Search,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface SkillsPageProps {
  onSelectSkill: (skill: DigitalSkill) => void;
  onEnrollCourse: (course: Course) => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ onSelectSkill, onEnrollCourse }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Fundamentals',
    'Design & Media',
    'Web & Tech',
    'Marketing',
    'AI & Automation',
    'Freelancing & Business',
  ];

  const filteredSkills = SKILLS_LIST.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch =
      skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-indigo-600" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6 text-emerald-600" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-pink-600" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-blue-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-amber-600" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-cyan-600" />;
      case 'Video':
        return <Video className="w-6 h-6 text-rose-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-violet-600" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-teal-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-orange-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-emerald-700" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-indigo-700" />;
      default:
        return <Sparkles className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <div className="py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full px-3.5 py-1 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Complete Practical Curriculum</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight text-balance">
            Digital Skills Directory
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            From basic operating system confidence to generative AI and freelance client acquisition, explore the complete breakdown of skills taught step-by-step.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === category
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills or software tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="group bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-purple-200/60 hover:border-indigo-400 hover:shadow-xl transition-all duration-200 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {getIcon(skill.icon)}
                  </div>
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {skill.shortDesc}
                </p>

                {/* Tools */}
                <div className="pt-3 border-t border-slate-100 mb-4">
                  <p className="text-xs font-semibold text-slate-700 mb-1.5">Mastered Tools:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tools.map((t) => (
                      <span key={t} className="text-xs bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-800 flex items-start gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{skill.outcome}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 flex items-center justify-between border-t border-slate-100 mt-auto">
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {skill.learningHours}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectSkill(skill)}
                    className="text-xs font-semibold text-slate-700 hover:text-indigo-600 px-2.5 py-1 rounded hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => {
                      const matched = COURSES_LIST[0];
                      onEnrollCourse(matched);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Enroll</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

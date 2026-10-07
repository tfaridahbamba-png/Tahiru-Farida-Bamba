import React, { useState } from 'react';
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
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { SKILLS_LIST, DigitalSkill } from '../data/skillsData';

interface SkillsSectionProps {
  onSelectSkill: (skill: DigitalSkill) => void;
  onExploreCourseForSkill: (skillId: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  onSelectSkill,
  onExploreCourseForSkill,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Fundamentals',
    'Design & Media',
    'Web & Tech',
    'Marketing',
    'AI & Automation',
    'Freelancing & Business',
  ];

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS_LIST
      : SKILLS_LIST.filter((skill) => skill.category === activeCategory);

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
    <section id="skills" className="py-16 md:py-24 bg-white/75 backdrop-blur-md border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            Curriculum & Core Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight text-balance">
            Skills You Can Learn & Monetize
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Every skill is taught with a project-first approach. Learn step-by-step using actual workplace tools, without getting overwhelmed by technical jargon.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === category
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="group bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Category Indicator */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {getIcon(skill.icon)}
                  </div>
                  <div className="text-xs font-medium text-slate-500">
                    <span>{skill.category}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {skill.shortDesc}
                </p>

                {/* Unboxed Metadata (Zero-Pill Rule) */}
                <div className="pt-3 border-t border-slate-200/80 mb-4">
                  <p className="text-xs font-semibold text-slate-700 mb-1.5">Key Tools Covered:</p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600">
                    {skill.tools.map((tool, idx) => (
                      <React.Fragment key={tool}>
                        <span className="font-medium text-slate-800">{tool}</span>
                        {idx < skill.tools.length - 1 && <span className="text-slate-300">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Outcome snippet */}
                <div className="flex items-start gap-2 text-xs text-slate-500 mb-4 bg-white/70 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{skill.outcome}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-200/60 mt-auto">
                <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{skill.learningHours}</span>
                </span>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectSkill(skill)}
                    className="text-xs font-semibold text-slate-700 hover:text-indigo-600 px-2 py-1 transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onExploreCourseForSkill(skill.id)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-2.5 py-1.5 rounded-md transition-colors cursor-pointer"
                  >
                    <span>Courses</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

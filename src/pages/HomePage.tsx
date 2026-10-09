import React from 'react';
import { Hero } from '../components/Hero';
import { WhyLearnWithMe } from '../components/WhyLearnWithMe';
import { LearningProcess } from '../components/LearningProcess';
import { StatisticsSection } from '../components/StatisticsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FreeResourcesSection } from '../components/FreeResourcesSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTASection } from '../components/FinalCTASection';

import { BlogPost } from '../data/blogData';
import { Project } from '../data/projectsData';
import { DigitalSkill, SKILLS_LIST } from '../data/skillsData';
import { FreeResource } from '../data/freeResourcesData';

import { ArrowRight, Sparkles, ExternalLink, Clock, CheckCircle2, BookOpen } from 'lucide-react';
import { AppImage } from '../components/AppImage';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenEnrollment: () => void;
  onOpenSkillQuiz: () => void;
  onOpenWhatsApp: () => void;
  onSelectResource: (res: FreeResource) => void;
  onSelectSkill: (skill: DigitalSkill) => void;
  latestPosts: BlogPost[];
  featuredProjects: Project[];
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenEnrollment,
  onOpenSkillQuiz,
  onOpenWhatsApp,
  onSelectResource,
  onSelectSkill,
  latestPosts,
  featuredProjects,
}) => {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero
        onStartLearning={onOpenEnrollment}
        onExploreCourses={() => onNavigate('skills')}
        onOpenSkillQuiz={onOpenSkillQuiz}
      />

      {/* 2. Featured Projects Preview (with Featured Images) */}
      <section className="py-16 md:py-20 bg-white/80 backdrop-blur-md border-t border-purple-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-1">
                Real Portfolio Output
              </p>
              <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
                Featured Client & Student Projects
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Explore websites, automated dashboards, and brand identity systems created during training.
              </p>
            </div>
            <button
              onClick={() => onNavigate('project')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-xl transition-colors shrink-0 cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                onClick={() => onNavigate('project')}
                className="group bg-white/90 backdrop-blur-xs hover:bg-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-200 overflow-hidden cursor-pointer flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                    <AppImage
                      src={proj.featuredImage}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      containerClassName="w-full h-full"
                      fallbackLabel={proj.title}
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded">
                      {proj.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-semibold text-indigo-600 mb-1">{proj.client}</p>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                      {proj.summary}
                    </p>
                    <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50/80 p-2 rounded-lg border border-emerald-100">
                      ✓ {proj.outcome}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-auto flex items-center justify-between text-xs text-slate-500 border-t border-purple-50 pt-3">
                  <span>Stack: {proj.tools.slice(0, 2).join(', ')}</span>
                  <span className="font-bold text-indigo-600 group-hover:underline">Explore Case Study →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Latest Blog Posts Preview (with Featured Images) */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-purple-50/80 via-indigo-50/70 to-pink-50/80 backdrop-blur-md border-t border-indigo-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-1">
                Farida BLoG Articles
              </p>
              <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
                Latest Digital Skills & AI Guides
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Bite-sized, practical tutorials written for beginners to advance their careers and productivity.
              </p>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-white hover:bg-slate-100 border border-slate-200 px-4 py-2 rounded-xl transition-colors shrink-0 cursor-pointer"
            >
              <span>Visit Farida BLoG</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.slice(0, 3).map((post) => (
              <article
                key={post.id}
                onClick={() => onNavigate('blog')}
                className="group bg-white/95 backdrop-blur-xs rounded-2xl border border-purple-100 overflow-hidden hover:border-purple-300 hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                    <AppImage
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      containerClassName="w-full h-full"
                      fallbackLabel={post.title}
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-[11px] text-slate-400 mb-1.5">{post.date} · {post.readTime}</p>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-auto border-t border-purple-50 pt-3 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">By Farida Bamba</span>
                  <span className="font-bold text-indigo-600 group-hover:underline">Read Article →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Skills Highlight */}
      <section className="py-16 md:py-20 bg-white/80 backdrop-blur-md border-t border-purple-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <p className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-1">
              Curriculum Snapshot
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
              Key Competencies You Will Master
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              A balanced blend of workplace fundamentals, creative design, and AI automation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {SKILLS_LIST.slice(0, 6).map((skill) => (
              <div
                key={skill.id}
                onClick={() => onSelectSkill(skill)}
                className="p-4 bg-slate-50 hover:bg-indigo-50/50 rounded-xl border border-slate-200 hover:border-indigo-300 transition-all cursor-pointer text-center group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 mx-auto flex items-center justify-center text-indigo-600 mb-2 group-hover:scale-105 transition-transform shadow-2xs">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 mb-1">
                  {skill.title}
                </h4>
                <p className="text-[11px] text-slate-500">{skill.category}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('skills')}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            >
              <span>Explore All 12 Skills & Course Syllabi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Why Learn With Me */}
      <WhyLearnWithMe />

      {/* 6. Learning Process */}
      <LearningProcess onStartLearning={onOpenEnrollment} />

      {/* 7. Numbers & Statistics */}
      <StatisticsSection />

      {/* 8. Testimonials */}
      <TestimonialsSection />

      {/* 9. Free Resources */}
      <FreeResourcesSection onSelectResource={onSelectResource} />

      {/* 10. FAQ */}
      <FAQSection onOpenWhatsApp={onOpenWhatsApp} />

      {/* 11. Final Conversion CTA */}
      <FinalCTASection
        onStartLearning={onOpenEnrollment}
        onExploreCourses={() => onNavigate('skills')}
      />
    </div>
  );
};

import React from 'react';
import { ArrowRight, Compass, CheckCircle2, Star, Sparkles, Users, Award, BookOpen } from 'lucide-react';

interface HeroProps {
  onStartLearning: () => void;
  onExploreCourses: () => void;
  onOpenSkillQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartLearning,
  onExploreCourses,
  onOpenSkillQuiz,
}) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-white/75 via-indigo-50/50 to-purple-50/40 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Value Proposition, Action CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Friendly Announcement Lead */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-700 bg-indigo-50/80 border border-indigo-100 rounded-full px-3.5 py-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Enrollment Open for New Cohort · 100% Beginner Friendly</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-heading text-balance leading-[1.12]">
              Master Digital Skills. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600">
                Build Your Future.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed text-balance">
              Learn practical digital skills that can help you work smarter, grow your business, advance your career, and create new opportunities. Taught step-by-step with zero confusing jargon.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onStartLearning}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-md shadow-indigo-600/20 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreCourses}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-indigo-600 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>Explore Courses</span>
              </button>
            </div>

            {/* Quick Skill Quiz nudge */}
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-500">
              <Compass className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>Unsure which skill fits your goal?</span>
              <button
                onClick={onOpenSkillQuiz}
                className="font-semibold text-indigo-600 hover:text-indigo-800 underline underline-offset-2 cursor-pointer"
              >
                Take the 30-second Skill Quiz →
              </button>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Coding Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hands-on Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verifiable Certificate</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset + Proof Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative subtle backdrop halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-70 -z-10" />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-xl">
                <img
                  src="/src/assets/images/hero_digital_skills_1791370266919.jpg"
                  alt="Digital skills educator mentoring students hands-on with laptops"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/10]"
                  loading="eager"
                  onError={(e) => {
                    // Fallback container if local asset failed
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('bg-gradient-to-br', 'from-indigo-900', 'to-slate-900', 'p-8', 'text-white', 'min-h-[340px]', 'flex', 'flex-col', 'justify-center');
                    }
                  }}
                />

                {/* Bottom Media Card Caption with Quantitative Proof */}
                <div className="p-4 bg-white/95 backdrop-blur-xs border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-900">Hands-on Lab Mentorship</p>
                    <p className="text-xs text-slate-500">Live exercises & step-by-step guidance</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-slate-800 tabular-nums">4.9 / 5.0</span>
                    <span className="text-slate-400 font-normal">(680+ reviews)</span>
                  </div>
                </div>
              </div>

              {/* Adjacency Trust Card (Floating corner) */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-lg items-center gap-3 max-w-[260px]">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 tabular-nums">2,500+ Students</p>
                  <p className="text-[11px] text-slate-500 leading-tight">Turned digital skills into active income & jobs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Trust Indicators Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 tabular-nums font-heading">2,500+</p>
              <p className="text-xs text-slate-500">Students Trained</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 tabular-nums font-heading">18+</p>
              <p className="text-xs text-slate-500">Practical Skills & Tools</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 tabular-nums font-heading">8+ Years</p>
              <p className="text-xs text-slate-500">Teaching Experience</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 tabular-nums font-heading">95%</p>
              <p className="text-xs text-slate-500">Confidence & Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

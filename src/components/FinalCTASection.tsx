import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCTASectionProps {
  onStartLearning: () => void;
  onExploreCourses: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onStartLearning,
  onExploreCourses,
}) => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-300 bg-indigo-500/20 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Next Cohort Begins Monday · Limited Mentorship Seats</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading tracking-tight text-balance leading-tight">
          Your Digital Future <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-200 to-white">
            Starts Today.
          </span>
        </h2>

        <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
          Don't wait until you feel ready. Start learning the practical skills that can create new opportunities for you, your family, and your business.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartLearning}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Start Learning Today</span>
            <ArrowRight className="w-5 h-5 text-indigo-600" />
          </button>

          <button
            onClick={onExploreCourses}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-indigo-800/60 hover:bg-indigo-800 border border-indigo-600/40 rounded-xl transition-colors cursor-pointer"
          >
            <span>Explore All 6 Courses</span>
          </button>
        </div>

        {/* Reassurance points */}
        <div className="mt-10 pt-8 border-t border-indigo-800/60 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% Beginner-Safe Environment</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Lifetime Access to Class Videos</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Direct WhatsApp Mentorship Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Users, BookOpen, Award, CheckCircle, TrendingUp, Info } from 'lucide-react';

export const StatisticsSection: React.FC = () => {
  const stats = [
    {
      value: '2,500+',
      label: 'Students Trained',
      sublabel: 'Across 14 countries & local bootcamps',
      icon: Users,
    },
    {
      value: '20+',
      label: 'Digital Skills & Tools',
      sublabel: 'From computer basics to AI & web design',
      icon: BookOpen,
    },
    {
      value: '95%',
      label: 'Student Satisfaction',
      sublabel: 'Rated practical, clear & beginner-friendly',
      icon: Award,
    },
    {
      value: '14+',
      label: 'Specialized Programs',
      sublabel: 'Self-paced video modules & live cohorts',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-2">
            Proven Track Record
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-balance">
            Real Impact in Numbers
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Empowering students, workers, and entrepreneurs with practical technology skills that translate into real-world results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white tabular-nums tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    {stat.label}
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-700/60 mt-4 text-xs text-slate-400">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Placeholder Notice for Owner */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400 bg-slate-800/40 p-2.5 rounded-xl border border-slate-700/50 max-w-xl mx-auto">
          <Info className="w-4 h-4 text-indigo-400 shrink-0" />
          <span>Note for site owner: Metrics shown are illustrative placeholders and can be directly adjusted to reflect your latest student milestones.</span>
        </div>
      </div>
    </section>
  );
};

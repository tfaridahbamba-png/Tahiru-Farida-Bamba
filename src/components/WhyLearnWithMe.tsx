import React from 'react';
import {
  Smile,
  Hammer,
  Footprints,
  Briefcase,
  Users2,
  TrendingUp,
  MessageSquareHeart,
  CalendarCheck2,
  CheckCircle2
} from 'lucide-react';

export const WhyLearnWithMe: React.FC = () => {
  const benefits = [
    {
      icon: Smile,
      title: 'Beginner-Friendly Teaching',
      description: 'We assume zero prior technical know-how. Lessons move at a comfortable, encouraging pace where nobody is left behind.',
      color: 'text-amber-600 bg-amber-50'
    },
    {
      icon: Hammer,
      title: 'Practical, Hands-on Training',
      description: 'You learn by doing. Every lesson ends with an actionable task so you gain physical muscle memory on real applications.',
      color: 'text-indigo-600 bg-indigo-50'
    },
    {
      icon: Footprints,
      title: 'Step-by-Step Lessons',
      description: 'Complex topics are broken down into bite-sized 10-15 minute modules. You always know exactly what button to click next.',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: Briefcase,
      title: 'Real-World Projects',
      description: 'Graduate with a tangible portfolio of client-ready work (live websites, brand designs, automated sheets) to show employers.',
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      icon: Users2,
      title: 'Personalized Guidance',
      description: 'Get direct feedback on your homework and practice exercises from Coach Marcus during weekly live review clinics.',
      color: 'text-purple-600 bg-purple-50'
    },
    {
      icon: TrendingUp,
      title: 'Career & Income Focused',
      description: 'We don’t just teach tools; we show you how to monetize them through freelancing, job promotions, or business growth.',
      color: 'text-teal-600 bg-teal-50'
    },
    {
      icon: MessageSquareHeart,
      title: 'Support After Training',
      description: 'Join our private alumni network for life. Ask questions when you take on real clients and get ongoing job lead alerts.',
      color: 'text-rose-600 bg-rose-50'
    },
    {
      icon: CalendarCheck2,
      title: 'Flexible Learning Options',
      description: 'Watch video modules 24/7 on your own schedule, or join our structured weekend live cohorts if you love group accountability.',
      color: 'text-cyan-600 bg-cyan-50'
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-gradient-to-r from-purple-50/70 via-white/80 to-pink-50/70 backdrop-blur-md border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Value Prop */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">
                The Nexura Difference
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight text-balance">
                Why Learn With Me?
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
              Most online tutorials either move too fast, drown you in theoretical slides, or leave you stuck when an error happens. We redesigned the learning experience from the ground up to guarantee real competence.
            </p>

            {/* Photographic Evidence of Hands-on practice */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
              <img
                src="/src/assets/images/hands_on_laptop_1791370289562.jpg"
                alt="Student practicing hands on digital design and spreadsheet workflow"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
              <div className="p-3 bg-white border-t border-slate-100 text-xs text-slate-600 flex items-center justify-between">
                <span className="font-medium text-slate-800">100% Practical Exercises</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> No Passive Lectures
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 8 Grid Benefits */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="p-5 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-indigo-200 hover:shadow-xs transition-all duration-200 group"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${benefit.color} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-indigo-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

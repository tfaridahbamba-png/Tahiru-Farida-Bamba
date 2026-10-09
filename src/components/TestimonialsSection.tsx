import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../data/testimonialsData';
import { APP_IMAGES } from '../utils/images';
import { AppImage } from './AppImage';

export const TestimonialsSection: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<number>(0);

  const current = TESTIMONIALS_LIST[selectedStudent];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white/80 backdrop-blur-md border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            Student Transformations
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight text-balance">
            Real Stories, Real Practical Outcomes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Hear from people who started as absolute beginners and turned their digital skills into steady employment, freelance clients, and growing businesses.
          </p>
        </div>

        {/* Featured Student Spotlight + Cohort Image Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Main Selected Testimonial Card */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
            <div>
              {/* Star Rating & Course Tag */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-slate-500">
                  Course: <span className="font-semibold text-indigo-600">{current.courseCompleted}</span>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-indigo-200 absolute -top-4 -left-2 -z-0 opacity-60" />
                <p className="text-base sm:text-lg text-slate-800 italic leading-relaxed relative z-10">
                  "{current.quote}"
                </p>
              </div>

              {/* Verified Outcome Badge */}
              <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold mb-6">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Outcome: {current.outcomeMetric}</span>
              </div>
            </div>

            {/* Student Info */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <img
                  src={current.avatar}
                  alt={current.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{current.name}</h4>
                  <p className="text-xs text-slate-500">{current.role}</p>
                </div>
              </div>

              <span className="text-xs text-slate-400">{current.location}</span>
            </div>
          </div>

          {/* Right Column: Graduation Community Asset */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border-2 border-indigo-200/80 shadow-xl flex flex-col bg-slate-950">
            <div className="relative w-full h-full min-h-[280px]">
              <AppImage
                src={APP_IMAGES.community}
                alt="Digital Skills Academy graduates holding certificates"
                className="w-full h-full object-cover min-h-[280px]"
                containerClassName="w-full h-full min-h-[280px]"
                fallbackLabel="Alumni Graduation & Certificate Network"
              />
            </div>
            <div className="p-4 bg-white/95 backdrop-blur-xs border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-0.5">
                <Award className="w-4 h-4 text-indigo-600" />
                <span>Graduation & Alumni Network</span>
              </div>
              <p className="text-xs text-slate-500">
                Over 2,500 active alumni connected in our private WhatsApp & Discord groups for lifetime career and gig support.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel / Quick Selector of Other Student Testimonials */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {TESTIMONIALS_LIST.map((student, idx) => (
            <button
              key={student.id}
              onClick={() => setSelectedStudent(idx)}
              className={`p-3 rounded-xl border text-left transition-all duration-150 cursor-pointer ${
                selectedStudent === idx
                  ? 'bg-indigo-50/70 border-indigo-400 shadow-xs'
                  : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={student.avatar}
                  alt={student.name}
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 rounded-full object-cover border border-slate-200"
                />
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-slate-900 truncate">{student.name}</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-2 leading-tight">
                {student.outcomeMetric}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

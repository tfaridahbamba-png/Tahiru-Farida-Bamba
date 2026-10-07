import React from 'react';
import { Award, Heart, CheckCircle2, MessageCircle, Calendar, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
  onOpenWhatsApp: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenConsultation,
  onOpenWhatsApp,
}) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-r from-purple-50/70 via-indigo-50/70 to-pink-50/70 backdrop-blur-md border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Instructor Portrait & Trust Credentials */}
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg">
                <img
                  src="/src/assets/images/instructor_portrait_1791370279802.jpg"
                  alt="Farida Bamba, Digital Skills Mentor and Educator"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-square"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('bg-indigo-900', 'p-8', 'text-white', 'min-h-[380px]', 'flex', 'flex-col', 'justify-center', 'items-center');
                    }
                  }}
                />

                {/* Caption Tag */}
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Farida Bamba</h4>
                    <p className="text-xs text-slate-500">Digital Skills Mentor & Author, Farida BLoG</p>
                  </div>
                  <div className="text-right text-xs text-slate-500">
                    <span className="font-semibold text-indigo-600">8+ Years</span> Teaching
                  </div>
                </div>
              </div>

              {/* Personal Mission Card Quote */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3">
                <Heart className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  "No one is 'too old' or 'too non-tech' to learn. When complex tools are explained simply with empathy and patience, anyone can thrive."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Instructor Story, Philosophy, Mission & Accolades */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">
                About Your Mentor
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight text-balance">
                Helping People Turn Digital Skills Into Real Opportunities.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
              Hello! I'm Farida Bamba. Over the last 8 years, I’ve had the privilege of training more than 2,500 everyday people — from complete beginners and university graduates to small business owners and career switchers.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              I started this academy because I saw too many brilliant people held back simply because tech tutorials were filled with confusing jargon, rushed steps, or assumed everyone was already a computer wizard. My approach is completely different: <strong className="text-slate-900 font-semibold">hands-on, patient, and grounded in real-world application</strong>.
            </p>

            {/* Core Teaching Philosophy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <h4 className="text-xs font-bold text-slate-900">Zero Jargon Guarantee</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Every concept is translated into plain, relatable language that sticks immediately.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <h4 className="text-xs font-bold text-slate-900">Project-First Curriculum</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  You don't just watch me click; you build actual websites, design assets, and workflows.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <h4 className="text-xs font-bold text-slate-900">Safe, Encouraging Space</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  No question is "too basic". Every question gets a respectful, thoughtful answer.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <h4 className="text-xs font-bold text-slate-900">Commercial & Income Focus</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We focus specifically on skills people, companies, and clients gladly pay for.
                </p>
              </div>
            </div>

            {/* Certifications & Recognition */}
            <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" />
                Certifications & Background:
              </span>
              <span>Google Certified Educator</span>
              <span>·</span>
              <span>Meta Certified Digital Associate</span>
              <span>·</span>
              <span>Ex-Lead Tech Trainer, Global Impact Fund</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 1-on-1 Consultation Call</span>
              </button>

              <button
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:text-emerald-700 bg-white hover:bg-emerald-50 border border-slate-300 hover:border-emerald-300 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat Directly on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

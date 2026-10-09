import React from 'react';
import { Award, Heart, CheckCircle2, MessageCircle, Calendar, Sparkles, BookOpen, Users, Compass, Globe } from 'lucide-react';
import { APP_IMAGES } from '../utils/images';
import { AppImage } from '../components/AppImage';

interface AboutPageProps {
  onOpenConsultation: () => void;
  onOpenWhatsApp: () => void;
  onStartLearning: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenConsultation,
  onOpenWhatsApp,
  onStartLearning,
}) => {
  return (
    <div className="py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto">
              <div className="rounded-3xl overflow-hidden border-2 border-purple-200/80 bg-white/90 shadow-2xl shadow-purple-500/20">
                <div className="relative aspect-square w-full overflow-hidden bg-slate-950">
                  <AppImage
                    src={APP_IMAGES.instructor}
                    alt="Farida Bamba, Digital Skills Mentor & Author of Farida BLoG"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                    fallbackLabel="Farida Bamba · Digital Skills Mentor"
                  />
                </div>
                <div className="p-5 bg-white border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Farida Bamba</h3>
                    <p className="text-xs text-slate-500">Educator · Writer · Digital Mentor</p>
                  </div>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    8+ Years Mentoring
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full px-3.5 py-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Meet The Educator Behind Farida BLoG</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight text-balance">
              Turning Everyday Non-Techies into Confident Digital Creators.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
              Hello and welcome! I’m Farida Bamba. I started Farida BLoG and this digital skills academy with one clear mission: to demystify technology for people who feel intimidated by computers, software, and online work.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              When I began my own journey, I found that most tech tutorials were filled with unhelpful technical jargon, moved too fast, or assumed you were already an engineering graduate. I realized that real people — students, mothers, boutique owners, teachers, and job seekers — needed patient, practical, step-by-step guidance.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onStartLearning}
                className="px-6 py-3 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors cursor-pointer"
              >
                Explore Training Programs
              </button>
              <button
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-emerald-800 bg-emerald-100/80 hover:bg-emerald-200 rounded-xl transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat Directly on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-8">
            Farida's Journey & Milestones
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-xs font-bold text-indigo-600">2018 – 2020</span>
              <h3 className="text-base font-bold text-slate-900">The First Grassroots Workshops</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Started teaching free Saturday Microsoft Office & Canva sessions to 15 local high school graduates in a small community center.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-xs font-bold text-indigo-600">2021 – 2024</span>
              <h3 className="text-base font-bold text-slate-900">Launch of Farida BLoG & Cohorts</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Launched online guides read by over 40,000 students and conducted 35+ structured bootcamps across 12 countries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-xs font-bold text-indigo-600">2025 – Present</span>
              <h3 className="text-base font-bold text-slate-900">AI Productivity & Remote Career Hub</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Integrated modern AI workflows, no-code automation, and international freelance placement support into all academy tracks.
              </p>
            </div>
          </div>
        </div>

        {/* Values / Core Principles */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <Heart className="w-8 h-8 text-rose-500 mb-3" />
            <h4 className="text-base font-bold text-slate-900 mb-1">Empathy First</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never mock a beginner question. Every student receives warm, respectful, patient guidance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-3" />
            <h4 className="text-base font-bold text-slate-900 mb-1">100% Practical</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              No endless lectures without keyboard action. You build actual assets and systems every session.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <Compass className="w-8 h-8 text-indigo-500 mb-3" />
            <h4 className="text-base font-bold text-slate-900 mb-1">Clear Direction</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We eliminate tutorial overload by giving you structured, step-by-step 30-day action plans.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <Globe className="w-8 h-8 text-blue-500 mb-3" />
            <h4 className="text-base font-bold text-slate-900 mb-1">Global Income</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We teach skills that allow you to work with international remote clients and earn in strong currencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

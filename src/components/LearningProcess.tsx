import React, { useState } from 'react';
import { Target, UserPlus, PlayCircle, Rocket, Check, ArrowRight } from 'lucide-react';

interface LearningProcessProps {
  onStartLearning: () => void;
}

export const LearningProcess: React.FC<LearningProcessProps> = ({ onStartLearning }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      title: 'Choose a Skill',
      description: 'Select the specific digital skill you want to learn based on your career or business goal.',
      icon: Target,
      details: 'Whether it is computer office tools, graphic design, web design, or AI automation, we have clear learning pathways tailored to complete beginners and career builders.',
      deliverable: 'Clarity on your 30-day learning objective & software requirements.'
    },
    {
      step: 2,
      title: 'Enroll & Onboard',
      description: 'Register in under 2 minutes and gain instant access to your student dashboard.',
      icon: UserPlus,
      details: 'Receive welcoming orientation guides, syllabus documents, resource checklists, and your personal invite link to the private student community group.',
      deliverable: 'Access credentials, weekly schedule, and software download guides.'
    },
    {
      step: 3,
      title: 'Learn & Practice',
      description: 'Follow bite-sized, practical lessons and complete real-world hands-on exercises.',
      icon: PlayCircle,
      details: 'Watch clean screen-recordings that move at your pace, follow along click-by-click on your laptop, and submit your practice exercises for mentor feedback.',
      deliverable: 'Weekly completed exercise files and direct mentor corrections.'
    },
    {
      step: 4,
      title: 'Apply Your Skills',
      description: 'Use your skills to work remotely, start a business, freelance, or boost your workplace income.',
      icon: Rocket,
      details: 'Complete your final portfolio capstone, receive your verifiable certificate, and use our proposal scripts and client outreach frameworks to earn.',
      deliverable: 'Live client-ready portfolio, verifiable certificate & alumni support.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            Clear Roadmap to Mastery
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight text-balance">
            Your 4-Step Learning Journey
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            We removed the confusion. Follow this straightforward path to gain practical, real-world digital confidence.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item) => {
            const Icon = item.icon;
            const isSelected = activeStep === item.step;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(item.step)}
                className={`relative p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-indigo-50/40 border-indigo-400 shadow-sm'
                    : 'bg-slate-50/60 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div>
                  {/* Step Number + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold tracking-wider text-indigo-600 bg-indigo-100/70 py-1 px-2.5 rounded-md">
                      STEP 0{item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-2xs">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Sub-note */}
                <div className="pt-3 border-t border-slate-200/80 mt-2 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700 block mb-0.5">Key Deliverable:</span>
                  <span>{item.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Step Highlight Drawer */}
        <div className="mt-8 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <p className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
              Step 0{activeStep} In Depth: {steps[activeStep - 1].title}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              {steps[activeStep - 1].details}
            </p>
          </div>

          <button
            onClick={onStartLearning}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-900 bg-white hover:bg-indigo-50 rounded-lg shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            <span>Begin Step 1 Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

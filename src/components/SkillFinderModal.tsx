import React, { useState } from 'react';
import { X, Check, ArrowRight, RotateCcw, Sparkles, Compass } from 'lucide-react';
import { COURSES_LIST, Course } from '../data/coursesData';

interface SkillFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export const SkillFinderModal: React.FC<SkillFinderModalProps> = ({
  isOpen,
  onClose,
  onEnroll,
}) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: '',
    experience: '',
    timeCommitment: '',
  });

  if (!isOpen) return null;

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ goal: '', experience: '', timeCommitment: '' });
  };

  const determineRecommendedCourse = (): Course => {
    // Logic matching user goals to optimal curriculum
    if (answers.goal === 'confidence' || answers.experience === 'complete_beginner') {
      return COURSES_LIST.find((c) => c.id === 'digital-starter-bootcamp') || COURSES_LIST[0];
    }
    if (answers.goal === 'freelance') {
      return COURSES_LIST.find((c) => c.id === 'freelancing-client-acquisition') || COURSES_LIST[0];
    }
    if (answers.goal === 'business') {
      return COURSES_LIST.find((c) => c.id === 'digital-marketing-growth') || COURSES_LIST[0];
    }
    if (answers.goal === 'ai_productivity') {
      return COURSES_LIST.find((c) => c.id === 'ai-productivity-automation') || COURSES_LIST[0];
    }
    if (answers.goal === 'design_web') {
      return COURSES_LIST.find((c) => c.id === 'no-code-web-development') || COURSES_LIST[0];
    }
    return COURSES_LIST[0];
  };

  const recommendedCourse = determineRecommendedCourse();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close quiz"
        >
          <X className="w-5 h-5" />
        </button>

        {step < 4 ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-semibold text-indigo-600 mb-1">
                <span className="flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5" /> 30-Second Skill Diagnostic
                </span>
                <span className="tabular-nums">Step {step} of 3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                {step === 1 && 'What is your primary goal right now?'}
                {step === 2 && 'How would you describe your tech experience?'}
                {step === 3 && 'How many hours can you dedicate each week?'}
              </h3>
            </div>

            {/* Question 1: Goal */}
            {step === 1 && (
              <div className="space-y-2.5">
                {[
                  { id: 'confidence', label: 'Overcome tech fear & master office computer basics', desc: 'Excel, Word, email, file storage, security' },
                  { id: 'freelance', label: 'Start freelancing or earn side income from home', desc: 'Work with local or international clients' },
                  { id: 'business', label: 'Grow my own small business & generate online sales', desc: 'Social media, digital ads, and landing pages' },
                  { id: 'ai_productivity', label: 'Learn modern AI tools to save 10+ hours a week', desc: 'ChatGPT, automation, smarter workflow' },
                  { id: 'design_web', label: 'Build modern websites without learning code', desc: 'WordPress, Webflow, landing pages' },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setAnswers({ ...answers, goal: option.id });
                      setStep(2);
                    }}
                    className="w-full p-3.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 text-left transition-all cursor-pointer group"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600">
                      {option.label}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{option.desc}</p>
                  </button>
                ))}
              </div>
            )}

            {/* Question 2: Tech Experience */}
            {step === 2 && (
              <div className="space-y-2.5">
                {[
                  { id: 'complete_beginner', label: 'Complete Beginner (Zero Background)', desc: 'I find laptops intimidating and want step-by-step patience.' },
                  { id: 'basic_user', label: 'Basic User (Social Media & Browsing)', desc: 'I can browse and check email, but want actual workplace skills.' },
                  { id: 'intermediate', label: 'Intermediate User (Ready to Monetize)', desc: 'I am comfortable with computers and want high-income specialized skills.' },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setAnswers({ ...answers, experience: option.id });
                      setStep(3);
                    }}
                    className="w-full p-3.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 text-left transition-all cursor-pointer group"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600">
                      {option.label}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{option.desc}</p>
                  </button>
                ))}
              </div>
            )}

            {/* Question 3: Time Commitment */}
            {step === 3 && (
              <div className="space-y-2.5">
                {[
                  { id: '2_4_hours', label: '2 to 4 hours per week', desc: 'Evenings and weekends at a relaxed pace.' },
                  { id: '5_8_hours', label: '5 to 8 hours per week', desc: 'Consistent steady progress with weekly project completion.' },
                  { id: '10_plus_hours', label: '10+ hours per week (Accelerated)', desc: 'Fast-track to job-ready confidence within 30 days.' },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setAnswers({ ...answers, timeCommitment: option.id });
                      setStep(4);
                    }}
                    className="w-full p-3.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 text-left transition-all cursor-pointer group"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600">
                      {option.label}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{option.desc}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Quiz Result Recommendation */
          <div className="space-y-5 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 py-1 px-3 rounded-full w-fit mx-auto sm:mx-0">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Match Found</span>
            </div>

            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Recommended Program for You:</p>
              <h3 className="text-2xl font-extrabold text-slate-900 font-heading mt-1">
                {recommendedCourse.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Based on your profile, this program provides the exact foundation you need without overwhelming you with theory.
              </p>
            </div>

            {/* Program snapshot */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between items-center text-slate-600">
                <span>Duration:</span>
                <span className="font-semibold text-slate-900">{recommendedCourse.duration}</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>Skill Level:</span>
                <span className="font-semibold text-slate-900">{recommendedCourse.level}</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>Admission Status:</span>
                <span className="font-bold text-emerald-600 text-xs">Open Enrollment · Free</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onEnroll(recommendedCourse);
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>Enroll in Recommended Course</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={resetQuiz}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3 px-4 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

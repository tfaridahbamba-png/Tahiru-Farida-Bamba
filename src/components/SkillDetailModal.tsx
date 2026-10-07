import React from 'react';
import { X, CheckCircle2, Clock, Users, ArrowRight, Laptop } from 'lucide-react';
import { DigitalSkill } from '../data/skillsData';

interface SkillDetailModalProps {
  skill: DigitalSkill | null;
  isOpen: boolean;
  onClose: () => void;
  onExploreCourse: (skillId: string) => void;
}

export const SkillDetailModal: React.FC<SkillDetailModalProps> = ({
  skill,
  isOpen,
  onClose,
  onExploreCourse,
}) => {
  if (!isOpen || !skill) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close skill details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-1">
            <span>{skill.category}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {skill.learningHours}
            </span>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
            {skill.title}
          </h3>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            {skill.shortDesc}
          </p>
        </div>

        <div className="space-y-4 py-3 border-t border-b border-slate-200 text-xs">
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wide mb-1.5">
              Tools & Software Learned:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {skill.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wide mb-1">
              Ideal Audience:
            </h4>
            <p className="text-slate-600 leading-relaxed">{skill.whoItIsFor}</p>
          </div>

          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
            <h4 className="font-bold text-emerald-900 uppercase tracking-wide mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Real Practical Outcome:
            </h4>
            <p className="text-emerald-800 leading-relaxed">{skill.outcome}</p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-1/3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onExploreCourse(skill.id);
            }}
            className="w-2/3 inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            <span>View Related Courses</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

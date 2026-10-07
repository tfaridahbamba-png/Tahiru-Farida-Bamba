import React from 'react';
import { X, Clock, Award, CheckCircle2, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import { Course } from '../data/coursesData';

interface SyllabusModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  course,
  isOpen,
  onClose,
  onEnroll,
}) => {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close syllabus modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-slate-200 pb-5 pr-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-1">
            <span>{course.category}</span>
            <span>·</span>
            <span>{course.level}</span>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
            {course.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
            {course.shortDescription}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1 font-medium text-slate-700">
              <Clock className="w-4 h-4 text-slate-400" />
              Duration: {course.duration}
            </span>
            <span className="flex items-center gap-1 font-medium text-emerald-700">
              <Award className="w-4 h-4 text-emerald-600" />
              Verifiable Certificate of Completion
            </span>
            <span className="text-emerald-700 font-bold">
              {course.enrollmentStatus}
            </span>
          </div>
        </div>

        {/* Scrollable Curriculum Body */}
        <div className="overflow-y-auto py-5 space-y-6 pr-2">
          {/* Prerequisites */}
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
            <span className="font-bold text-slate-900 block mb-1">Prerequisites & Hardware Requirements:</span>
            <span className="text-slate-600 leading-relaxed">{course.prerequisites}</span>
          </div>

          {/* Module by module breakdown */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Weekly Curriculum & Hands-On Exercises
            </h4>
            <div className="space-y-3">
              {course.modules.map((mod) => (
                <div
                  key={mod.week}
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-indigo-200 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 py-0.5 px-2 rounded">
                      Week 0{mod.week}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">Practical Module</span>
                  </div>
                  <h5 className="text-sm font-bold text-slate-900 mb-1">{mod.title}</h5>
                  <p className="text-xs text-slate-600 leading-relaxed mb-2.5">{mod.description}</p>
                  <div className="flex items-start gap-1.5 text-xs text-emerald-800 bg-emerald-50/70 p-2 rounded-lg border border-emerald-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Hands-on Capstone:</strong> {mod.practicalProject}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capstone Summary */}
          <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100">
            <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wide mb-1">
              Final Graduation Portfolio Piece
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              {course.realWorldProject}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-slate-200 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 mt-auto">
          <div className="text-left w-full sm:w-auto">
            <span className="text-xs text-slate-500">Program Access:</span>
            <p className="text-base font-extrabold text-emerald-700">
              Free Open Admission
              <span className="text-xs font-normal text-slate-500 ml-1.5">· Lifetime materials</span>
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnroll(course);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <span>Enroll in This Course</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[85vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close legal modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-slate-200 pb-4 mb-4">
          <div className="flex items-center gap-2 text-indigo-600 mb-1">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Nexura Digital Academy Policy</span>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
            {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Effective Date: Updated for 2026 Academic Year
          </p>
        </div>

        <div className="overflow-y-auto pr-2 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <h4 className="font-bold text-slate-900">1. Information We Collect</h4>
              <p>
                When you register for a training program, request a consultation, or download free resources, we collect your name, email address, phone/WhatsApp number, and learning preferences solely for course delivery and academic communication.
              </p>
              <h4 className="font-bold text-slate-900">2. How We Use Your Information</h4>
              <p>
                Your details are used strictly to provide course access, share weekly mentoring links, evaluate exercise submissions, issue completion certificates, and answer student support questions. We do not sell or rent student data to third parties.
              </p>
              <h4 className="font-bold text-slate-900">3. Communications & WhatsApp Support</h4>
              <p>
                If you opt in to receiving WhatsApp or email support, you may receive periodic notices about live workshops and lesson schedules. You can opt out at any time by messaging support or unsubscribing.
              </p>
              <h4 className="font-bold text-slate-900">4. Data Security</h4>
              <p>
                We implement industry standard encryption and access controls to ensure your personal data is protected against unauthorized access.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-bold text-slate-900">1. Educational Enrollment & Lifetime Access</h4>
              <p>
                Enrolling in any Nexura Digital Academy program grants you personal, non-transferable lifetime access to course video modules, templates, and student community channels.
              </p>
              <h4 className="font-bold text-slate-900">2. Practical Certification Standards</h4>
              <p>
                Verifiable Certificates of Completion are issued upon satisfactory completion of hands-on exercise modules and submission of the designated capstone portfolio project.
              </p>
              <h4 className="font-bold text-slate-900">3. 14-Day Satisfaction Guarantee</h4>
              <p>
                We stand behind our beginner-friendly teaching. If you attend the first two weeks of lessons, complete the assignments, and feel the training has not helped your digital confidence, you may request a 100% full refund with no hard feelings.
              </p>
              <h4 className="font-bold text-slate-900">4. Community Code of Conduct</h4>
              <p>
                Our student groups are safe, welcoming spaces for beginners of all backgrounds. Disrespectful behavior, harassment, or unauthorized commercial spam will result in immediate removal without refund.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-slate-200 mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors cursor-pointer"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};

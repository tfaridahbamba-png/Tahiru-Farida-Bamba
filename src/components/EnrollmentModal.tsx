import React, { useState } from 'react';
import { X, CheckCircle2, Award, ArrowRight, ShieldCheck, Download, MessageCircle, Calendar } from 'lucide-react';
import { COURSES_LIST, Course } from '../data/coursesData';
import { saveRegistration } from '../utils/storage';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseId?: string;
  onOpenWhatsApp: () => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  initialCourseId,
  onOpenWhatsApp,
}) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(
    initialCourseId || COURSES_LIST[0].id
  );
  const [format, setFormat] = useState<string>('Live Weekend Cohort');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experienceLevel: 'Complete Beginner (Zero Background)',
    notes: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [studentRef, setStudentRef] = useState('');

  if (!isOpen) return null;

  const selectedCourse =
    COURSES_LIST.find((c) => c.id === selectedCourseId) || COURSES_LIST[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    // Generate random student registration ref
    const refCode = `FB-${Math.floor(100000 + Math.random() * 900000)}`;
    setStudentRef(refCode);

    // Save to storage for Admin Portal
    saveRegistration({
      studentRef: refCode,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      courseTitle: selectedCourse.title,
      format,
      experienceLevel: formData.experienceLevel,
    });

    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close registration modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                Student Registration
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 font-heading mt-1">
                Enroll & Start Learning
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Join our supportive beginner community and gain lifetime access to lessons and weekly mentorship clinics.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Program */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Choose Your Course Program
                </label>
                <select
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-900"
                >
                  {COURSES_LIST.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} — {c.enrollmentStatus}
                    </option>
                  ))}
                </select>
              </div>

              {/* Study Format */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Learning Format
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'Live Weekend Cohort', desc: 'Live Sat/Sun Zoom + Mentorship' },
                    { id: 'Self-Paced Online', desc: 'Watch videos anytime + Chat Q&A' },
                  ].map((fmt) => (
                    <button
                      type="button"
                      key={fmt.id}
                      onClick={() => setFormat(fmt.id)}
                      className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                        format === fmt.id
                          ? 'border-indigo-500 bg-indigo-50/60 ring-1 ring-indigo-500'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <p className="text-xs font-bold text-slate-900">{fmt.id}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{fmt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 or +44..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current Tech Experience Level
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Complete Beginner (Zero Background)">Complete Beginner (Zero Background)</option>
                    <option value="Basic Smartphone & Email User">Basic Smartphone & Email User</option>
                    <option value="Intermediate / Looking to Upgrade">Intermediate / Looking to Upgrade</option>
                  </select>
                </div>
              </div>

              {/* Enrollment status & certification reassurance */}
              <div className="p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-emerald-900 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Free Open Admission · Cohort Registration</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-700 font-semibold text-[11px]">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>Certificate Included</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Complete Registration & Secure Seat</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400">
                🔒 Your contact details are 100% confidential. You will receive an immediate orientation packet.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Registration Confirmed!
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 font-heading mt-1">
                Welcome to Nexura Digital, {formData.name}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                Your seat has been reserved in <strong className="text-slate-900">{selectedCourse.title}</strong> ({format}).
              </p>
            </div>

            {/* Simulated Student ID Pass */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs">
              <div className="flex justify-between items-center border-b border-slate-200/80 pb-2">
                <span className="text-slate-500">Student ID Ref:</span>
                <span className="font-mono font-bold text-indigo-600">{studentRef}</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200/80 pb-2">
                <span className="text-slate-500">Selected Program:</span>
                <span className="font-semibold text-slate-800">{selectedCourse.title}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Cohort Start Date:</span>
                <span className="font-semibold text-emerald-700">Upcoming Monday (8:00 AM Access)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onOpenWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join Student WhatsApp Group Now</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full py-3 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Done / Back to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

interface ContactSectionProps {
  onOpenWhatsApp: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenWhatsApp }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skillInterest: 'Digital Starter Bootcamp',
    format: 'Live Weekend Cohort',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone or WhatsApp number.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please share a brief note about what you hope to achieve.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate instantaneous, reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        skillInterest: 'Digital Starter Bootcamp',
        format: 'Live Weekend Cohort',
        message: '',
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-indigo-50/70 via-purple-50/70 to-pink-50/70 backdrop-blur-md border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Details & WhatsApp Callout */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
                Get In Touch
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight text-balance">
                Have Questions Before Enrolling?
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed text-balance">
                Whether you want advice on which course to start with, corporate team training, or 1-on-1 mentorship, Farida and the admissions team are here to help.
              </p>
            </div>

            {/* Direct Info Cards */}
            <div className="space-y-3.5 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Fastest Response</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">Direct WhatsApp Support</p>
                  <p className="text-xs text-slate-500 mt-1 mb-2">Instant answers to course questions & enrollment assistance.</p>
                  <button
                    type="button"
                    onClick={onOpenWhatsApp}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-md transition-colors cursor-pointer"
                  >
                    <span>Open WhatsApp Chat</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Email Inquiries</p>
                  <a
                    href="mailto:admissions@nexuradigital.com"
                    className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors block mt-0.5"
                  >
                    admissions@nexuradigital.com
                  </a>
                  <p className="text-xs text-slate-500 mt-1">Replies within 1 business day.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Support Office Hours</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">Monday – Saturday: 8:00 AM – 7:00 PM</p>
                  <p className="text-xs text-slate-500 mt-1">Community chat operates 24/7 for enrolled students.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Training Studio / Tech Hub</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">Online Worldwide & Selected Physical Hubs</p>
                  <p className="text-xs text-slate-500 mt-1">Lagos Tech Innovation Quarter & London Virtual Office.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill in your details below and Coach Marcus will reply with personalized recommendations.
              </p>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold">Message Received Successfully!</h4>
                    <p className="text-xs mt-1 text-emerald-700 leading-relaxed">
                      Thank you! Coach Marcus and our admissions coordinator have received your inquiry. We will contact you at your email and WhatsApp number within a few hours.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Samuel Ade"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                        errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="samuel@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                        errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+234 or +44..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                        errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Digital Skill of Interest
                    </label>
                    <select
                      value={formData.skillInterest}
                      onChange={(e) => setFormData({ ...formData, skillInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="Digital Starter Bootcamp">Digital Starter Bootcamp (Beginners)</option>
                      <option value="Graphic Design & Brand Identity">Graphic Design & Brand Identity</option>
                      <option value="No-Code Website Development">No-Code Website Development</option>
                      <option value="Digital Marketing & Social Ads">Digital Marketing & Social Ads</option>
                      <option value="Practical AI Tools & Automation">Practical AI Tools & Automation</option>
                      <option value="Freelancing & Remote Income">Freelancing & Remote Income</option>
                      <option value="General Guidance / Not Sure Yet">General Guidance / Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Learning Format
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'Live Weekend Cohort', label: 'Live Weekend Cohort' },
                      { id: 'Self-Paced Online', label: 'Self-Paced Online' },
                      { id: '1-on-1 Mentorship', label: '1-on-1 Mentorship' },
                    ].map((fmt) => (
                      <label
                        key={fmt.id}
                        className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                          formData.format === fmt.id
                            ? 'border-indigo-500 bg-indigo-50/50 text-indigo-900 font-semibold'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="format"
                          checked={formData.format === fmt.id}
                          onChange={() => setFormData({ ...formData, format: fmt.id })}
                          className="text-indigo-600 focus:ring-indigo-500"
                        />
                        <span>{fmt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Goals or Questions *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us a little bit about what you want to achieve (e.g. looking for a remote job, upgrading office skills, starting an agency)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                      errors.message ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-xs transition-colors cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending your inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry & Get Course Details</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

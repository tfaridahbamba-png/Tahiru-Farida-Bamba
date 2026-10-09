import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { saveInquiry } from '../utils/storage';

interface ContactPageProps {
  onOpenWhatsApp: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenWhatsApp }) => {
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
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your WhatsApp or phone number.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write a brief note on what you need help with.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      // Save to localStorage so Admin Portal can see it
      saveInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        skillInterest: formData.skillInterest,
        format: formData.format,
        message: formData.message,
      });

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
    }, 600);
  };

  return (
    <div className="py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full px-3.5 py-1 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Admissions, Inquiries & Mentorship</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight text-balance">
            Get In Touch With Farida
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Have questions about which course fits your current skill level, curriculum schedules, or booking a speaking workshop? Send a message or chat directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-purple-200/60 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Direct WhatsApp Helpdesk</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fastest way to get personalized recommendations directly from Farida or our admissions coordinator.
              </p>
              <button
                type="button"
                onClick={onOpenWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors cursor-pointer shadow-sm"
              >
                <span>Launch WhatsApp Conversation</span>
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-purple-200/60 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Email Admissions</h3>
              <a
                href="mailto:farida@faridablog.com"
                className="text-sm font-semibold text-indigo-600 hover:underline block"
              >
                farida@faridablog.com
              </a>
              <p className="text-xs text-slate-500">Official inquiries replied to within 24 hours.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-purple-200/60 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Office & Support Hours</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monday – Saturday: 8:00 AM – 7:00 PM (GMT)<br />
                Enrolled student community channels operate 24/7.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-purple-200/80 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Send an Admissions Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill in your details below and we will get back to you with personalized guidance.
              </p>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold">Message Sent Successfully!</h4>
                    <p className="text-xs mt-1 text-emerald-700 leading-relaxed">
                      Thank you! Your message has been routed to Farida's admissions inbox and saved in our admin system. Expect a response shortly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Fatima Adams"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
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
                      placeholder="fatima@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+234 or +44..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Course / Skill of Interest
                    </label>
                    <select
                      value={formData.skillInterest}
                      onChange={(e) => setFormData({ ...formData, skillInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="Digital Starter Bootcamp">Digital Starter Bootcamp (Beginners)</option>
                      <option value="Graphic Design & Brand Identity">Graphic Design & Brand Identity</option>
                      <option value="No-Code Website Development">No-Code Website Development</option>
                      <option value="Digital Marketing & Social Ads">Digital Marketing & Social Ads</option>
                      <option value="Practical AI Tools & Automation">Practical AI Tools & Automation</option>
                      <option value="Freelancing & Remote Income">Freelancing & Remote Income</option>
                      <option value="Corporate / Team Training">Corporate / Team Training</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Goals or Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share a little bit about what you want to achieve or any questions you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message to Farida'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

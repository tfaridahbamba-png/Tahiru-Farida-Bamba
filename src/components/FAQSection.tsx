import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle, Search } from 'lucide-react';
import { FAQ_LIST } from '../data/faqData';

interface FAQSectionProps {
  onOpenWhatsApp: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenWhatsApp }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', 'Beginners', 'Classes & Schedule', 'Certification & Career', 'General'];

  const filteredFaqs = FAQ_LIST.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white/80 backdrop-blur-md border-t border-purple-100/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight text-balance">
            Got Questions? We Have Honest Answers.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto text-balance">
            Everything you need to know about our courses, schedule, laptop requirements, certifications, and beginner support.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-150 overflow-hidden ${
                  isOpen
                    ? 'border-indigo-300 bg-indigo-50/20 shadow-2xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-indigo-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100/80">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
          <HelpCircle className="w-8 h-8 text-indigo-600 mx-auto" />
          <h4 className="text-base font-bold text-slate-900">Have a question not listed here?</h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            You can chat directly with Coach Marcus on WhatsApp for personalized advice on which training program matches your current schedule and career goals.
          </p>
          <button
            onClick={onOpenWhatsApp}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-emerald-800 bg-emerald-100/80 hover:bg-emerald-200 rounded-lg transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Chat on WhatsApp (Typically replies in under 1 hour)</span>
          </button>
        </div>
      </div>
    </section>
  );
};

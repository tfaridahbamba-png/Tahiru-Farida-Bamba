import React, { useState } from 'react';
import { X, MessageCircle, Send, CheckCircle2, ArrowRight } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  const [selectedPrompt, setSelectedPrompt] = useState<string>(
    "Hello Farida! I'm interested in learning digital skills. Can you recommend the best course for a beginner?"
  );
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    "Hello Farida! I'm a complete beginner. Which course should I start with?",
    "Hi Farida! Can you share details about the upcoming weekend cohort schedule?",
    "Hello! Can you share more about the curriculum and upcoming live workshops?",
    "Hi! I want to transition into remote freelancing. How quickly can I get certified?",
  ];

  const handleSend = () => {
    // Generate WhatsApp direct URL with encoded text
    const phoneNumber = "2348000000000"; // Placeholder editable number
    const encoded = encodeURIComponent(selectedPrompt);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encoded}`;
    
    // Attempt opening or fallback to friendly UI feedback
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // In restricted iframe environments
    }
    setIsSent(true);
  };

  const handleReset = () => {
    setIsSent(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close WhatsApp prompt"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSent ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Chat with Farida Bamba</h3>
                <p className="text-xs text-emerald-600 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Typically replies within 1 hour
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Ask any question directly on WhatsApp. Select a quick starter inquiry below or customize your message:
            </p>

            {/* Quick Starters */}
            <div className="space-y-1.5 mb-4">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => setSelectedPrompt(prompt)}
                  className={`w-full p-2.5 rounded-lg border text-left text-xs transition-colors cursor-pointer ${
                    selectedPrompt === prompt
                      ? 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-medium'
                      : 'border-slate-200 bg-slate-50/50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Editable message area */}
            <div className="mb-4">
              <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wide mb-1">
                Your Message:
              </label>
              <textarea
                rows={3}
                value={selectedPrompt}
                onChange={(e) => setSelectedPrompt(e.target.value)}
                className="w-full p-3 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
              />
            </div>

            <button
              onClick={handleSend}
              className="w-full py-3 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Launch WhatsApp & Send Message</span>
            </button>

            <p className="text-[11px] text-center text-slate-400 mt-3">
              Official Admissions WhatsApp: +234 800 000 0000 (Placeholder number)
            </p>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              WhatsApp Link Initiated!
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
              If WhatsApp didn't open automatically in your browser or app, you can copy the admissions line below or reach out directly at <strong className="text-slate-900">admissions@nexuradigital.com</strong>.
            </p>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-700 font-bold">
              WhatsApp Line: +234 800 000 0000
            </div>

            <button
              onClick={handleReset}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

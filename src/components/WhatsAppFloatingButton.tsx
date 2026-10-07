import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  onOpenWhatsApp: () => void;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  onOpenWhatsApp,
}) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
      {/* Friendly prompt pill that can be dismissed */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 bg-white text-slate-800 text-xs font-medium rounded-full shadow-lg border border-slate-200 animate-fade-in">
          <span>Need course advice? Chat on WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating circular button */}
      <button
        type="button"
        onClick={onOpenWhatsApp}
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer ring-4 ring-emerald-500/20"
        title="Chat with Coach Marcus on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/10 stroke-[2.2]" />
      </button>
    </div>
  );
};

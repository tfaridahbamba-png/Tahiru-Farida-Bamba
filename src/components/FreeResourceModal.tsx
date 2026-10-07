import React, { useState } from 'react';
import { X, Download, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { FreeResource } from '../data/freeResourcesData';

interface FreeResourceModalProps {
  resource: FreeResource | null;
  isOpen: boolean;
  onClose: () => void;
}

export const FreeResourceModal: React.FC<FreeResourceModalProps> = ({
  resource,
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [downloadReady, setDownloadReady] = useState(false);

  if (!isOpen || !resource) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !name.trim()) return;
    setDownloadReady(true);
  };

  const handleReset = () => {
    setDownloadReady(false);
    setEmail('');
    setName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close resource modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!downloadReady ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-1">
              <span>Free Download</span>
              <span>·</span>
              <span>{resource.fileFormat}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
              {resource.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {resource.description}
            </p>

            <div className="my-5 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
              <span className="font-bold text-slate-800 block">Topics inside this guide:</span>
              {resource.topics.map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleDownload} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your First Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Samuel"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Where We Should Send This Guide *
                </label>
                <input
                  type="email"
                  required
                  placeholder="samuel@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Instant Free Download</span>
              </button>

              <p className="text-[11px] text-center text-slate-400">
                🔒 No spam. You'll receive the document link immediately and can unsubscribe anytime.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 font-heading">
              Your Guide is Ready, {name}!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              A copy of <strong className="text-slate-900">{resource.title}</strong> has been sent to <strong>{email}</strong>. You can also download it right now below:
            </p>

            <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-medium text-indigo-900">
                <FileText className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>{resource.title}.pdf</span>
              </div>
              <span className="text-indigo-600 font-bold">PDF · Ready</span>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  // Simulate file download notice
                  alert(`Downloading ${resource.title}... Thank you!`);
                }}
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Click Here to Save File to Device</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

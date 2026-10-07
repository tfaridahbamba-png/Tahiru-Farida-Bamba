import React from 'react';
import { Download, FileText, Sparkles, Check, ArrowRight } from 'lucide-react';
import { FREE_RESOURCES, FreeResource } from '../data/freeResourcesData';

interface FreeResourcesSectionProps {
  onSelectResource: (resource: FreeResource) => void;
}

export const FreeResourcesSection: React.FC<FreeResourcesSectionProps> = ({
  onSelectResource,
}) => {
  return (
    <section id="free-resources" className="py-16 md:py-24 bg-gradient-to-r from-pink-50/70 via-purple-50/70 to-indigo-50/70 backdrop-blur-md border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            Free Educational Downloads
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight text-balance">
            Free Digital Learning Resources
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Start building your skills right now at zero cost. Download our practical checklists, roadmaps, and cheat sheets crafted for beginners.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FREE_RESOURCES.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Header: Format & Download counter */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-indigo-600">{resource.category}</span>
                  <span className="tabular-nums">{resource.downloadsCount}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {resource.description}
                </p>

                {/* Key topics included */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                  <p className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider">
                    Included in this kit:
                  </p>
                  {resource.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-1.5 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Download CTA */}
              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => onSelectResource(resource)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-indigo-600 hover:text-white bg-indigo-50 hover:bg-indigo-600 rounded-lg transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Free Guide</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-indigo-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold">Want weekly digital career & AI productivity tips in your inbox?</h4>
            <p className="text-xs text-indigo-100">Join our weekly newsletter read by 3,200+ students and aspiring remote professionals.</p>
          </div>
          <button
            onClick={() => onSelectResource(FREE_RESOURCES[0])}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-indigo-600 bg-white hover:bg-indigo-50 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>Get Free Learning Resources</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

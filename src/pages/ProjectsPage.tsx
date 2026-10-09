import React, { useState } from 'react';
import { Project } from '../data/projectsData';
import { ExternalLink, CheckCircle2, Clock, Sparkles, Filter, Eye, X } from 'lucide-react';
import { AppImage } from '../components/AppImage';

interface ProjectsPageProps {
  projects: Project[];
  onStartLearning: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects, onStartLearning }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = [
    'All',
    'Web Development',
    'Branding & Graphic Design',
    'AI & Automation',
    'Digital Marketing',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full px-3.5 py-1 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Real Student & Mentorship Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight text-balance">
            Real-World Projects & Portfolio
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            We don't teach passive theory. Explore real client websites, automated AI dashboards, and brand identity systems built by Farida and her students.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with Prominent Featured Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/85 backdrop-blur-md rounded-2xl border border-purple-200/60 overflow-hidden hover:border-purple-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Featured Image Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <AppImage
                    src={project.featuredImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    containerClassName="w-full h-full"
                    fallbackLabel={project.title}
                  />
                  {/* Category pill overlay */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {project.category}
                  </div>
                  {/* Quick view button overlay */}
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-indigo-600">Client: {project.client}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {project.timeline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Outcome Highlight Box */}
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-800 flex items-start gap-2 mb-4">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Measurable Impact: </span>
                      <span>{project.outcome}</span>
                    </div>
                  </div>

                  {/* Tools Stack */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-400 mr-1">Stack:</span>
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 mt-auto">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-slate-800 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 border border-slate-200 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Explore Full Project Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold">Want to build projects like these for your own portfolio?</h3>
            <p className="text-sm text-slate-300">Join Farida’s next training cohort and graduate with 3 client-ready case studies.</p>
          </div>
          <button
            onClick={onStartLearning}
            className="px-6 py-3 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            Enroll & Start Building Today
          </button>
        </div>
      </div>

      {/* Case Study Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Featured Image in Modal */}
            <div className="rounded-xl overflow-hidden aspect-[16/9] mb-5 border border-slate-200 bg-slate-950">
              <AppImage
                src={activeProjectModal.featuredImage}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
                fallbackLabel={activeProjectModal.title}
              />
            </div>

            <div className="text-xs font-semibold text-indigo-600 mb-1">
              <span>{activeProjectModal.category}</span> · <span>Client: {activeProjectModal.client}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 font-heading mb-3">
              {activeProjectModal.title}
            </h2>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">
                  Project Context & Problem:
                </h4>
                <p>{activeProjectModal.description}</p>
              </div>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-900">
                <span className="font-bold block mb-1">Verified Real-World Results:</span>
                <p className="leading-relaxed">{activeProjectModal.outcome}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Tools & Architecture Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.tools.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-100 text-slate-800 rounded-lg text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

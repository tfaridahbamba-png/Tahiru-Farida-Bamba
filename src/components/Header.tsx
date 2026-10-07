import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Compass } from 'lucide-react';
import { FaridaLogo } from './FaridaLogo';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenEnrollment: () => void;
  onOpenSkillQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenEnrollment,
  onOpenSkillQuiz,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'contact', label: 'Contact' },
    { id: 'blog', label: 'Blog' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'project', label: 'Project' },
  ];

  const handlePageSelect = (pageId: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b border-purple-200/50 shadow-xs ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md py-2.5'
          : 'bg-white/70 backdrop-blur-md py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Zone 1: Brand Wordmark using the exact FARIDA BLoG logo */}
          <button
            onClick={() => handlePageSelect('home')}
            className="flex items-center gap-3 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-0.5"
            aria-label="Farida BLoG Home"
          >
            <FaridaLogo size="sm" />
          </button>

          {/* Zone 2: Navigation Links (Skills, Project, Home, Blog, About, Contact) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handlePageSelect(item.id)}
                  className={`transition-colors whitespace-nowrap cursor-pointer pb-0.5 ${
                    isActive
                      ? 'text-indigo-600 font-bold border-b-2 border-indigo-600'
                      : 'text-slate-600 hover:text-indigo-600 border-b-2 border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action + Admin Shortcut + Mobile Menu Trigger */}
          <div className="flex items-center gap-2.5">
            {/* Admin Portal Shortcut */}
            <button
              onClick={() => handlePageSelect('admin')}
              className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                currentPage === 'admin'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border-slate-200'
              }`}
              title="Open Admin Portal to manage articles, projects & featured images"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
              <span>Admin</span>
            </button>

            {/* Quick Skill Quiz */}
            <button
              onClick={onOpenSkillQuiz}
              className="hidden xl:inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-indigo-600 px-2 py-1.5 cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-indigo-600" />
              <span>Skill Quiz</span>
            </button>

            {/* Start Learning CTA */}
            <button
              onClick={onOpenEnrollment}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-xs transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageSelect(item.id)}
                className={`w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg cursor-pointer ${
                  currentPage === item.id
                    ? 'text-indigo-600 bg-indigo-50 font-bold'
                    : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-2 px-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => handlePageSelect('admin')}
                className="w-full py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg text-center flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
                <span>Admin Portal</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnrollment();
                }}
                className="w-full text-center py-2.5 text-xs font-bold text-white bg-indigo-600 rounded-xl shadow-xs"
              >
                Start Learning Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

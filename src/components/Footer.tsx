import React from 'react';
import { Mail, MessageCircle, Heart, ShieldCheck } from 'lucide-react';
import { FaridaLogo } from './FaridaLogo';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenWhatsApp: () => void;
  onOpenEnrollment: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
  onOpenWhatsApp,
  onOpenEnrollment,
}) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col with Farida Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block bg-white p-2 rounded-xl">
              <FaridaLogo size="sm" />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering beginners, students, small businesses, and aspiring freelancers with practical digital skills, AI shortcuts, and actionable career blueprints.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 hover:bg-emerald-900/40 text-xs font-semibold transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Admissions</span>
              </button>

              <button
                onClick={() => handleNav('admin')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                <span>Admin Portal</span>
              </button>
            </div>
          </div>

          {/* Dedicated Page Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Website Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-white transition-colors cursor-pointer">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('skills')} className="hover:text-white transition-colors cursor-pointer">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('project')} className="hover:text-white transition-colors cursor-pointer">
                  Project
                </button>
              </li>
            </ul>
          </div>

          {/* Core Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Featured Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleNav('skills')} className="hover:text-white transition-colors cursor-pointer">Digital Starter Bootcamp</button></li>
              <li><button onClick={() => handleNav('skills')} className="hover:text-white transition-colors cursor-pointer">Graphic Design & Brand Kit</button></li>
              <li><button onClick={() => handleNav('skills')} className="hover:text-white transition-colors cursor-pointer">No-Code Web Development</button></li>
              <li><button onClick={() => handleNav('skills')} className="hover:text-white transition-colors cursor-pointer">AI Tools & Automation</button></li>
              <li><button onClick={() => handleNav('skills')} className="hover:text-white transition-colors cursor-pointer">Freelancing Launchpad</button></li>
            </ul>
          </div>

          {/* Student Helpdesk & Direct Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Admissions Helpdesk
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="block text-slate-500">Official Email</span>
                <span className="text-slate-300 font-medium">farida@faridablog.com</span>
              </li>
              <li>
                <span className="block text-slate-500">Student Support</span>
                <span className="text-slate-300 font-medium">Monday – Saturday</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenEnrollment}
                  className="w-full text-center py-2 px-3 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors cursor-pointer"
                >
                  Start Learning Now
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Farida BLoG & Digital Skills Academy. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('admin')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Admin Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

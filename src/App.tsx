import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogPage } from './pages/BlogPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

// Modals
import { EnrollmentModal } from './components/EnrollmentModal';
import { SyllabusModal } from './components/SyllabusModal';
import { SkillFinderModal } from './components/SkillFinderModal';
import { SkillDetailModal } from './components/SkillDetailModal';
import { FreeResourceModal } from './components/FreeResourceModal';
import { LegalModal } from './components/LegalModal';
import { WhatsAppModal } from './components/WhatsAppModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

import { Course } from './data/coursesData';
import { DigitalSkill } from './data/skillsData';
import { FreeResource } from './data/freeResourcesData';
import { BlogPost } from './data/blogData';
import { Project } from './data/projectsData';
import { getStoredBlogPosts, getStoredProjects } from './utils/storage';

export default function App() {
  // Determine initial page from URL hash
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages = ['home', 'skills', 'project', 'projects', 'blog', 'about', 'contact', 'admin'];
    if (validPages.includes(hash)) {
      return hash === 'projects' ? 'project' : hash;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getPageFromHash);

  // Synchronized persistent data
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(getStoredBlogPosts());
  const [projectsList, setProjectsList] = useState<Project[]>(getStoredProjects());

  const handleRefreshData = () => {
    setBlogPosts(getStoredBlogPosts());
    setProjectsList(getStoredProjects());
  };

  // Sync hash changes with browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    const target = page === 'projects' ? 'project' : page;
    setCurrentPage(target);
    window.location.hash = target;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Modal states
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [enrollmentCourseId, setEnrollmentCourseId] = useState<string | undefined>(undefined);

  const [selectedCourseForSyllabus, setSelectedCourseForSyllabus] = useState<Course | null>(null);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  const [selectedSkill, setSelectedSkill] = useState<DigitalSkill | null>(null);
  const [isSkillDetailOpen, setIsSkillDetailOpen] = useState(false);

  const [selectedResource, setSelectedResource] = useState<FreeResource | null>(null);
  const [isResourceModalOpen, setIsResourceModalOpen] = useState(false);

  const [isSkillQuizOpen, setIsSkillQuizOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Handlers
  const handleOpenEnrollment = (courseId?: string) => {
    setEnrollmentCourseId(courseId);
    setIsEnrollmentOpen(true);
  };

  const handleEnrollFromCourse = (course: Course) => {
    setEnrollmentCourseId(course.id);
    setIsEnrollmentOpen(true);
  };

  const handleSelectSkill = (skill: DigitalSkill) => {
    setSelectedSkill(skill);
    setIsSkillDetailOpen(true);
  };

  const handleSelectResource = (resource: FreeResource) => {
    setSelectedResource(resource);
    setIsResourceModalOpen(true);
  };

  // When admin page is active, show the vibrant admin portal
  if (currentPage === 'admin') {
    return (
      <AdminPage
        onBackToSite={() => handleNavigate('home')}
        onRefreshData={handleRefreshData}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-200/40 via-purple-100/50 via-pink-100/40 via-amber-100/35 to-cyan-100/45 text-slate-900 font-sans relative overflow-x-hidden">
      {/* Dynamic & Radiant Multi-Colour Floating Glow Orbs */}
      <div className="fixed -top-24 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-violet-600/35 via-fuchsia-500/35 to-pink-500/25 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="fixed top-1/4 -right-24 w-[580px] h-[580px] bg-gradient-to-bl from-cyan-400/40 via-sky-500/30 to-indigo-500/30 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow-reverse" />
      <div className="fixed top-2/3 -left-24 w-[520px] h-[520px] bg-gradient-to-r from-amber-400/35 via-orange-400/30 to-rose-500/30 rounded-full blur-[110px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="fixed -bottom-24 right-1/4 w-[560px] h-[560px] bg-gradient-to-tl from-emerald-400/30 via-teal-400/30 to-cyan-400/35 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow-reverse" />
      <div className="fixed top-1/2 left-1/3 w-[450px] h-[450px] bg-gradient-to-r from-pink-400/25 via-purple-400/25 to-blue-400/25 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Universal Header with Farida BLoG Logo and Multi-page navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnrollment={() => handleOpenEnrollment()}
        onOpenSkillQuiz={() => setIsSkillQuizOpen(true)}
      />

      {/* Main Multi-Page Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEnrollment={() => handleOpenEnrollment()}
            onOpenSkillQuiz={() => setIsSkillQuizOpen(true)}
            onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
            onSelectResource={handleSelectResource}
            onSelectSkill={handleSelectSkill}
            latestPosts={blogPosts}
            featuredProjects={projectsList}
          />
        )}

        {currentPage === 'skills' && (
          <SkillsPage
            onSelectSkill={handleSelectSkill}
            onEnrollCourse={handleEnrollFromCourse}
          />
        )}

        {currentPage === 'project' && (
          <ProjectsPage
            projects={projectsList}
            onStartLearning={() => handleOpenEnrollment()}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            posts={blogPosts}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenConsultation={() => handleNavigate('contact')}
            onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
            onStartLearning={() => handleOpenEnrollment()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
          />
        )}
      </main>

      {/* Universal Footer with Farida Logo and Multi-Page routing */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
        onOpenEnrollment={() => handleOpenEnrollment()}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppFloatingButton
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
      />

      {/* Interactive Modals */}
      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
        initialCourseId={enrollmentCourseId}
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
      />

      <SyllabusModal
        course={selectedCourseForSyllabus}
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        onEnroll={(c) => {
          setIsSyllabusOpen(false);
          handleEnrollFromCourse(c);
        }}
      />

      <SkillFinderModal
        isOpen={isSkillQuizOpen}
        onClose={() => setIsSkillQuizOpen(false)}
        onEnroll={(c) => {
          setIsSkillQuizOpen(false);
          handleEnrollFromCourse(c);
        }}
      />

      <SkillDetailModal
        skill={selectedSkill}
        isOpen={isSkillDetailOpen}
        onClose={() => setIsSkillDetailOpen(false)}
        onExploreCourse={() => {
          setIsSkillDetailOpen(false);
          handleNavigate('skills');
        }}
      />

      <FreeResourceModal
        resource={selectedResource}
        isOpen={isResourceModalOpen}
        onClose={() => setIsResourceModalOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
      />
    </div>
  );
}

import React, { useState } from 'react';
import {
  Laptop,
  Palette,
  Globe,
  TrendingUp,
  Cpu,
  Briefcase,
  Clock,
  Award,
  CheckCircle2,
  Search,
  BookOpen,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { COURSES_LIST, Course } from '../data/coursesData';

interface CoursesSectionProps {
  onEnrollCourse: (course: Course) => void;
  onViewSyllabus: (course: Course) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onEnrollCourse,
  onViewSyllabus,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterCategories = [
    'All',
    'Beginner',
    'Career Skills',
    'Business Skills',
    'Creative Skills',
    'AI & Tech',
  ];

  const filteredCourses = COURSES_LIST.filter((course) => {
    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.learnPoints.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-indigo-600" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-pink-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-violet-600" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-teal-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="courses" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
              Structured Learning Programs
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight text-balance">
              Explore Available Digital Courses
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed text-balance">
              Comprehensive, project-based curriculums built to take you from foundational basics to monetizable confidence.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills, tools, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-2xs"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === category
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900">No courses match your search</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Try adjusting your search terms or filter category to discover other programs.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 underline"
            >
              Reset filters & search
            </button>
          </div>
        )}

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`relative bg-white rounded-2xl border transition-all duration-200 hover:shadow-lg flex flex-col justify-between overflow-hidden ${
                course.featured
                  ? 'border-indigo-300 ring-1 ring-indigo-200/60'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Featured Ribbon / Note */}
              {course.featured && (
                <div className="bg-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider py-1 px-4 text-center">
                  Recommended For Beginners
                </div>
              )}

              <div className="p-6">
                {/* Unboxed Metadata (Zero-Pill Rule) */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-1.5 font-medium text-indigo-600">
                    {getCourseIcon(course.icon)}
                    <span>{course.category}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>{course.level}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {course.duration}
                    </span>
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                  {course.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {course.shortDescription}
                </p>

                {/* What Students Will Learn */}
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-semibold text-slate-800 uppercase tracking-wide">
                    What You Will Master:
                  </p>
                  <ul className="space-y-1.5">
                    {course.learnPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Real World Project Highlight */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 mb-2">
                  <span className="font-semibold text-slate-800 block mb-0.5">Capstone Portfolio Project:</span>
                  <span className="text-slate-500 leading-relaxed">{course.realWorldProject}</span>
                </div>
              </div>

              {/* Card Footer: Price & Action Buttons */}
              <div className="p-6 pt-4 border-t border-slate-100 bg-slate-50/40 mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{course.enrollmentStatus}</span>
                  </div>
                  {course.certificateProvided && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-indigo-700 font-medium">
                      <Award className="w-3.5 h-3.5" /> Certificate Included
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onViewSyllabus(course)}
                    className="w-full py-2.5 px-3 text-xs font-semibold text-slate-700 hover:text-indigo-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors cursor-pointer text-center"
                  >
                    View Syllabus
                  </button>

                  <button
                    onClick={() => onEnrollCourse(course)}
                    className="w-full py-2.5 px-3 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { Project } from '@/types';
import { projects } from '@/data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        closeModal();
      }
    };

    if (selectedProject) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProject]);

  return (
    <>
      <section id="projects" className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Static background gradient with custom colors */}
        <div 
          className="absolute inset-0 opacity-40 blur-3xl transition-opacity duration-700"
          style={{
            background: 'linear-gradient(135deg, rgba(192,108,132,0.3), rgba(108,91,123,0.25), rgba(53,92,125,0.2))',
          }}
        />
        
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Projects
              </h2>
            </div>
            
            {/* Projects Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer group flex flex-col hover:scale-105 hover:-translate-y-2"
                  onClick={() => openModal(project)}
                >
                  {/* Header Image */}
                  <div className="w-full h-58 relative overflow-hidden p-4">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {project.date}
                      </p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed line-clamp-2 flex-1">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full text-[#C06C84] dark:text-[#E08BA8]"
                          style={{
                            backgroundColor: 'rgba(192, 108, 132, 0.08)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full text-slate-600 dark:text-slate-300" style={{ backgroundColor: 'rgba(100, 116, 139, 0.08)' }}>
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* View Project Button */}
                    {project.demo && (
                      <button 
                        className="w-full py-2.5 px-4 border-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                        style={{
                          borderColor: '#C06C84',
                          color: '#C06C84'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(project);
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#C06C84';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#C06C84';
                        }}
                      >
                        <span>View Project</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal/Popup - Keep existing modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all modal-animate"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-6 flex items-center justify-between rounded-t-2xl z-10">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Project Screenshots Gallery */}
              {selectedProject.screenshots && selectedProject.screenshots.length > 0 ? (
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    Screenshots
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <div key={index} className="flex flex-col">
                        {/* Image */}
                        <a
                          href={screenshot}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-64 rounded-lg overflow-hidden relative border-2 border-slate-200 dark:border-slate-600 hover:border-[#C06C84] dark:hover:border-[#E08BA8] transition-colors cursor-pointer shadow-md hover:shadow-xl"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Image
                            src={screenshot}
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="w-full h-58 rounded-lg overflow-hidden relative border-2 border-slate-200 dark:border-slate-600">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Description */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Description
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 text-[#C06C84] dark:text-[#E08BA8] rounded-full font-medium"
                      style={{
                        backgroundColor: 'rgba(192, 108, 132, 0.08)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {((selectedProject.github && selectedProject.showGithub) || 
                (selectedProject.demo && selectedProject.showDemoInModal !== false)) && (
                <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  {selectedProject.github && selectedProject.showGithub && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-300 font-medium"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  )}
                  {selectedProject.demo && selectedProject.showDemoInModal !== false && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 py-3 border-2 rounded-lg font-medium transition-all duration-300"
                      style={{
                        borderColor: '#C06C84',
                        color: '#C06C84'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#C06C84';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#C06C84';
                      }}
                    >
                      <span>View Project</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { experiences } from '@/data/experiences';
import { getDurationLength } from '@/utils/duration';

export default function Experience() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const type = el.dataset.animate;
          if (entry.isIntersecting) {
            el.classList.add('opacity-100', 'translate-x-0', 'translate-y-0');
            el.classList.remove('opacity-0', '-translate-x-12', '-translate-y-6');
          } else {
            el.classList.remove('opacity-100', 'translate-x-0', 'translate-y-0');
            el.classList.add('opacity-0');
            if (type === 'slide-left') el.classList.add('-translate-x-12');
            if (type === 'slide-down') el.classList.add('-translate-y-6');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    cardRefs.current.forEach((card) => { if (card) observer.observe(card); });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Static background gradient with custom colors */}
      <div 
        className="absolute inset-0 opacity-40 blur-3xl transition-opacity duration-700"
        style={{
          background: 'linear-gradient(135deg, rgba(192,108,132,0.3), rgba(108,91,123,0.25), rgba(53,92,125,0.2))',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div
            ref={headingRef}
            data-animate="slide-down"
            className="mb-16 text-center opacity-0 -translate-y-6 transition-[opacity,transform] duration-700 ease-out"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Work Experience
            </h2>
          </div>
          
          {/* Experience Timeline - Enhanced Modern Style */}
          <div className="relative space-y-8 pb-8">
            {/* Vertical line - always on the left */}
            <div 
              className="absolute left-4 md:left-8 top-0 w-0.5"
              style={{
                background: 'linear-gradient(to bottom, #C06C84, #6C5B7B, #355C7D)',
                height: 'calc(100% - 2rem)'
              }}
            ></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                data-animate="slide-left"
                className="relative flex flex-col md:flex-row gap-8 items-start opacity-0 -translate-x-12 transition-[opacity,transform] duration-700 ease-out"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div 
                  className="absolute left-4 md:left-8 -translate-x-1/2 w-6 h-6 rounded-full border-0.5 border-white dark:border-slate-900 shadow-lg z-10 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)'
                  }}
                >
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                
                {/* Experience Card - always on the right */}
                <div className="flex-1 ml-12 md:ml-24 w-full">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 md:p-8 border border-slate-200 dark:border-slate-700">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 break-words">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 font-semibold mb-2 flex-wrap">
                          <span style={{ color: '#C06C84' }}>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 sm:items-end flex-shrink-0">
                        <span 
                          className="px-3 py-1 sm:px-4 sm:py-1.5 text-white text-xs sm:text-sm font-semibold rounded-full shadow-md whitespace-nowrap w-fit"
                          style={{
                            background: 'linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)'
                          }}
                        >
                          {exp.duration}
                        </span>
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="break-words">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description or Projects */}
                    {exp.projects ? (
                      <div className="space-y-4 md:space-y-6">
                        {exp.projects.map((project, projectIndex) => (
                          <div key={projectIndex} className="bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 md:p-5 border border-slate-200 dark:border-slate-600">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                              <h4 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white break-words">
                                {project.name}
                              </h4>
                              <div className="flex flex-col gap-1 sm:items-end flex-shrink-0">
                                <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 text-xs">
                                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                  <span className="whitespace-nowrap">{project.duration}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs">
                                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span className="whitespace-nowrap">{getDurationLength(project.duration)}</span>
                                </div>
                              </div>
                            </div>
                            <ul className="space-y-2">
                              {project.description.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start text-slate-700 dark:text-slate-300 text-xs md:text-sm leading-relaxed"
                                >
                                  <div className="w-2 h-2 rounded-full mt-1.5 md:mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#C06C84' }}></div>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-2 md:space-y-3">
                        {exp.description?.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start text-slate-700 dark:text-slate-300 text-sm leading-relaxed"
                          >
                            <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#C06C84' }}></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

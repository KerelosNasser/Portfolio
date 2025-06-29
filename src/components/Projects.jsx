import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Star, Plus } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { projectsData, projectIcons, statusColors } from '../data/projects';

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Get the appropriate icon component
  const getProjectIcon = (projectType) => {
    const iconName = projectIcons[projectType] || 'Code';
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : <LucideIcons.Code className="w-8 h-8" />;
  };

  // Get status styling
  const getStatusStyle = (status) => {
    return statusColors[status] || statusColors["Completed"];
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work demonstrating expertise in Flutter, React, and modern web technologies
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          {projectsData.map((project, index) => {
            const statusStyle = getStatusStyle(project.status);
            
            return (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 fade-in-on-scroll hover-lift group ${
                  project.featured ? 'ring-2 ring-blue-500/20 dark:ring-blue-400/20' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Icon and Header */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-white shadow-lg hover-rotate group-hover:shadow-xl transition-all duration-300">
                        {getProjectIcon(project.type)}
                        {project.featured && (
                          <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 rounded-full p-1 animate-pulse">
                            <Star size={12} fill="currentColor" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          {project.type}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${statusStyle.bg} ${statusStyle.text} ${statusStyle.hover}`}>
                            {project.status}
                          </span>
                          {project.featured && (
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 animate-pulse">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover-bounce border border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 cursor-default"
                            style={{ animationDelay: `${techIndex * 0.1}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 text-sm font-medium hover-lift hover:shadow-lg transform hover:scale-105"
                        >
                          <Github size={16} />
                          Source Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm font-medium hover-lift hover:shadow-lg transform hover:scale-105"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="lg:w-2/3">
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Features & Achievements
                      </h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex} 
                            className="flex items-start space-x-3 group/item"
                            style={{ animationDelay: `${featureIndex * 0.1}s` }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                            <span className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-gray-100 transition-colors duration-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add More Projects Section */}
        <div className="text-center fade-in-on-scroll">
          <div className="inline-flex items-center gap-3 px-8 py-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border-2 border-dashed border-blue-300 dark:border-blue-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover-lift group">
            <Plus className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:rotate-90 transition-transform duration-300" />
            <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              More projects coming soon...
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 animate-pulse">
            I'm constantly working on new projects and learning new technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
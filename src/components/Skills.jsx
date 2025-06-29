import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const sectionRef = useRef(null);
  const [animatedBars, setAnimatedBars] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate progress bars
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add('animate');
                setAnimatedBars(prev => new Set([...prev, bar.dataset.skill]));
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Mobile Development",
      skills: [
        { name: "Dart", level: 90 },
        { name: "Flutter", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "REST API Integration", level: 85 },
        { name: "Local Notifications", level: 75 },
        { name: "Hive (Local DB)", level: 80 }
      ]
    },
    {
      title: "Front-End Development",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      title: "Tools & Practices",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "UI/UX Principles", level: 70 },
        { name: "Android Studio", level: 85 },
        { name: "Figma", level: 65 },
        { name: "Cursor", level: 90 },
        { name: "Postman", level: 80 },
        { name: "Firebase", level: 80 }
      ]
    }
  ];

  const certifications = [
    "Complete Flutter & Dart Development Course (Udemy)",
    "Meta Front-End Developer (Coursera)",
    "Soft Skills & Financial Inclusion (NBD Emirates Bank / eYouth)",
    "ICDL (International Computer Driving License)"
  ];

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover-lift fade-in-on-scroll border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="progress-bar bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 h-3 rounded-full transition-all duration-1000 ease-out relative"
                        data-skill={skill.name}
                        style={{ 
                          width: animatedBars.has(skill.name) ? `${skill.level}%` : '0%',
                          boxShadow: animatedBars.has(skill.name) ? '0 0 10px rgba(59, 130, 246, 0.5)' : 'none'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications and Languages */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover-lift fade-in-on-scroll border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Certifications
            </h3>
            <ul className="space-y-4 stagger-animation">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start space-x-3 group">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages & Soft Skills */}
          <div className="space-y-6">
            {/* Languages */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover-lift fade-in-on-scroll border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center group">
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{lang.name}</span>
                    <span className="text-sm bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-medium hover-bounce">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Competencies */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover-lift fade-in-on-scroll border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Problem-Solving", "Critical Thinking", "Teamwork", "Adaptability", "Quick Learning", "Effective Communication"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-gradient-to-r from-gray-100 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover-bounce border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
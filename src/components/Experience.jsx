import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      title: "Flutter & Front-End Developer",
      company: "Freelance / Personal Projects",
      location: "Alexandria, Egypt",
      period: "2023 - Present",
      type: "Self-Directed Learning & Development",
      description: "Focused on building comprehensive mobile and web applications while pursuing formal education.",
      achievements: [
        "Developed multiple full-featured Flutter applications with Firebase integration",
        "Created responsive web applications using React and modern CSS frameworks",
        "Implemented complex features including real-time data synchronization, push notifications, and API integrations",
        "Gained expertise in state management, database design, and user experience optimization"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Business Administration",
      institution: "Alexandria University",
      location: "Alexandria, Egypt",
      period: "2023 - 2027",
      status: "2nd Year Student",
      description: "Currently pursuing business education while developing technical skills in software development."
    }
  ];

  const achievements = [
    {
      title: "Meta Front-End Developer Certificate",
      issuer: "Coursera",
      date: "2024",
      description: "Comprehensive certification covering React, HTML, CSS, JavaScript, and modern web development practices"
    },
    {
      title: "Complete Flutter & Dart Development Course",
      issuer: "Udemy",
      date: "2024",
      description: "Advanced Flutter development course covering mobile app development, state management, and Firebase integration"
    },
    {
      title: "Soft Skills & Financial Inclusion Program",
      issuer: "NBD Emirates Bank / eYouth",
      date: "2024",
      description: "Professional development program focusing on communication, teamwork, and financial literacy"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey in software development and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div className="fade-in-on-scroll">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg hover-rotate">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover-lift border border-gray-200 dark:border-gray-700 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {exp.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                      <div className="flex items-center gap-1 mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full inline-block mb-4 hover-bounce">
                    {exp.type}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 group/item">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-gray-100 transition-colors duration-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements Section */}
          <div className="space-y-12">
            {/* Education */}
            <div className="fade-in-on-scroll">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg hover-rotate">
                  <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                Education
              </h3>
              
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover-lift border border-gray-200 dark:border-gray-700 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                        {edu.degree}
                      </h4>
                      <p className="text-green-600 dark:text-green-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                      <div className="flex items-center gap-1 mb-1 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                        <MapPin size={14} />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-1 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                        <Calendar size={14} />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full inline-block mb-4 hover-bounce">
                    {edu.status}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications & Achievements */}
            <div className="fade-in-on-scroll">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg hover-rotate">
                  <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                Certifications & Achievements
              </h3>
              
              <div className="space-y-4 stagger-animation">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover-lift border border-gray-200 dark:border-gray-700 group">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {achievement.title}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded hover-bounce">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">
                      {achievement.issuer}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
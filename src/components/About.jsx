import React, { useEffect, useRef } from 'react';
import { Code, Smartphone, Globe, Award } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Mobile Development",
      description: "Expert in Flutter development with comprehensive knowledge of Dart and mobile app architecture"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Web Development",
      description: "Proficient in React, HTML5, CSS3, and modern JavaScript frameworks for responsive web applications"
    },
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: "Full-Stack Skills",
      description: "Experience with Firebase, REST APIs, state management, and database integration"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "Certified Developer",
      description: "Meta Front-End Developer Certificate and Complete Flutter & Dart Development Course"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate developer dedicated to creating innovative solutions and exceptional user experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 fade-in-on-scroll">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Professional Summary
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transform transition-all duration-500 hover:translate-x-2">
                I'm a highly motivated and detail-oriented Flutter Developer with a solid foundation in front-end 
                technologies, backed by a Meta Front-End Developer Certificate. My expertise spans across Dart, 
                Flutter, and UI/UX principles, enabling me to contribute effectively to dynamic development teams.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transform transition-all duration-500 hover:translate-x-2">
                My project portfolio includes comprehensive applications like "Neuro-Navigator" and "Global 
                Environmental Impact Dashboard," demonstrating my ability to build robust and user-centric 
                applications. I'm a quick learner and collaborative team player, eager to leverage my skills 
                and grow as a developer.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8 fade-in-on-scroll">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Education</h4>
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-6 rounded-xl hover-lift border border-gray-200 dark:border-gray-700">
                <h5 className="font-medium text-gray-900 dark:text-white">Alexandria University</h5>
                <p className="text-gray-600 dark:text-gray-300">Faculty of Business, 2nd Year Student</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2023-2027</p>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6 stagger-animation">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl hover-lift border border-gray-200 dark:border-gray-700 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-white dark:bg-gray-700 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 hover-rotate">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
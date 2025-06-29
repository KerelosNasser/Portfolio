import React from 'react';
import { ChevronDown, Download, Mail, Phone, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
              <Sparkles size={16} className="text-blue-500" />
              Welcome to my portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-delay">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Kerolos Nasser
            </span>
          </h1>

          {/* Subtitle with Animation */}
          <div className="mb-8 animate-fade-in-delay-2">
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4">
              Flutter & Front-End Developer
            </p>
            <div className="flex items-center justify-center gap-2 text-lg text-gray-600 dark:text-gray-400">
              <Code size={20} className="text-blue-500" />
              <span>Building exceptional digital experiences</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-delay-3">
            Passionate about creating robust, user-centric applications with expertise in Flutter, React, and modern web technologies. 
            I transform ideas into beautiful, functional digital solutions that make a difference.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12 animate-fade-in-delay-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">2+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Learning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">4+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-fade-in-delay-5">
            <a
              href="mailto:keronaser2030@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transform hover:-translate-y-1"
            >
              <Mail size={18} />
              <span>keronaser2030@gmail.com</span>
            </a>
            <a
              href="tel:+201211730727"
              className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transform hover:-translate-y-1"
            >
              <Phone size={18} />
              <span>+201211730727</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay-6">
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Code size={20} />
              View My Work
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
            aria-label="Scroll to about section"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Scroll to explore
              </span>
              <ChevronDown size={32} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
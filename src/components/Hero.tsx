import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { learningPoints } from '../data/portfolio';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-black dark:via-gray-900 dark:to-black text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-slide-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/10 dark:bg-gray-800/50 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-gray-700/50 mb-4">
                👋 Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent animate-pulse">Nafiul</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 leading-relaxed text-gray-100 dark:text-gray-300 font-light">
              I'm constantly learning and exploring:
            </p>
            <div className="space-y-4 mb-10">
              {learningPoints.map((point, index) => (
                <div 
                  key={point.id} 
                  className="flex items-center animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-gray-100 dark:text-gray-300 text-lg group-hover:text-white transition-colors duration-300">{point.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-xl font-semibold hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/25"
              >
                <Mail className="mr-2 w-5 h-5" />
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="inline-flex items-center border-2 border-white/30 dark:border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 dark:hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                View Skills
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-white/10 to-white/5 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl flex items-center justify-center animate-float backdrop-blur-sm border border-white/20 dark:border-gray-700/50 shadow-2xl">
                <div className="text-8xl animate-bounce">🤖</div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse opacity-80 delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { skillCategories } from '../data/portfolio';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-yellow-400 dark:via-orange-400 dark:to-pink-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-yellow-400 dark:to-orange-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I'm working with in my data science journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-black rounded-3xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-200 dark:border-gray-700 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-full -translate-y-10 translate-x-10 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.id}
                      className={`${skill.color} px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 transform hover:scale-110 cursor-default shadow-md hover:shadow-lg`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
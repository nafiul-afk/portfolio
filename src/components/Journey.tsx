import React from 'react';
import { journeyItems } from '../data/portfolio';

const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-yellow-400 dark:via-orange-400 dark:to-pink-400 bg-clip-text text-transparent">
            My Learning Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-yellow-400 dark:to-orange-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-200 dark:border-gray-800 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-full -translate-y-20 -translate-x-20 opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-full translate-y-16 translate-x-16 opacity-30"></div>
            
            <div className="space-y-8 relative z-10">
              {journeyItems.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl transform hover:scale-[1.02] group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Card background decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-full -translate-y-12 translate-x-12 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="flex gap-6 items-start relative z-10">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span>{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-indigo-600 dark:text-orange-400 mb-4 font-semibold text-lg">
                        {item.subtitle}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-yellow-400 dark:via-orange-400 dark:to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-yellow-400 dark:to-orange-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-3xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="prose prose-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-none">
                <p className="mb-6 text-lg lg:text-xl">
                  Hi, I'm a <strong className="text-indigo-600 dark:text-yellow-400 font-semibold">Data Science student</strong> at 
                  United International University with a passion for Machine Learning, Python development, and building 
                  practical tech solutions.
                </p>
                
                <p className="mb-6 text-lg lg:text-xl">
                  I'm currently focused on deepening my skills in <strong className="text-purple-600 dark:text-orange-400 font-semibold">data analysis</strong>, 
                  <strong className="text-pink-600 dark:text-pink-400 font-semibold"> machine learning</strong>, and 
                  <strong className="text-indigo-600 dark:text-yellow-400 font-semibold"> full-stack Python projects</strong>. 
                  I also have experience moderating online communities and enjoy working on side projects like 
                  health trackers, chatbots, and personal websites.
                </p>
                
                <div className="flex items-center justify-center mt-8">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-yellow-400 dark:to-orange-400 text-white dark:text-black px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
                    Always learning, always building! 🚀
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
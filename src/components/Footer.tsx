import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-indigo-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 text-center">
          <div className="mb-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 dark:from-yellow-400 dark:via-orange-400 dark:to-pink-400 bg-clip-text text-transparent">
              Nafiul Islam
            </div>
          </div>
          <p className="text-gray-400 dark:text-gray-500 text-lg">
            &copy; 2025 Nafiul Islam. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-yellow-400 dark:to-orange-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
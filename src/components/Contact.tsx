import React, { useState } from 'react';
import { Send, ExternalLink } from 'lucide-react';
import { socialLinks } from '../data/portfolio';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-black dark:via-gray-900 dark:to-black text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            I'm always excited to connect with fellow data enthusiasts, students, and professionals. 
            Let's discuss data science, AI, or potential collaborations!
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {socialLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 dark:bg-gray-900/30 rounded-2xl p-6 text-center hover:bg-white/20 dark:hover:bg-gray-900/40 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{link.icon}</div>
                <h3 className="font-bold mb-2 flex items-center justify-center gap-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {link.name}
                  <ExternalLink className="w-4 h-4" />
                </h3>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 dark:bg-gray-900/30 rounded-3xl p-8 lg:p-12 backdrop-blur-md border border-white/20 dark:border-gray-700/50 shadow-2xl">
            {/* Hidden form for Netlify */}
            <form name="contact" netlify="true" hidden>
              <input type="text" name="name" />
              <input type="email" name="email" />
              <input type="text" name="subject" />
              <textarea name="message"></textarea>
            </form>

            <form onSubmit={handleSubmit} className="space-y-6" name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-400 rounded-xl p-4 text-green-100 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                      <span className="text-green-900 text-xs">✓</span>
                    </div>
                    Thank you for your message! I'll get back to you soon.
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-400 rounded-xl p-4 text-red-100 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center">
                      <span className="text-red-900 text-xs">!</span>
                    </div>
                    Sorry, there was an error sending your message. Please try again or contact me directly via social media.
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-200">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 rounded-xl bg-white/20 dark:bg-gray-900/40 border border-white/30 dark:border-gray-700 text-white dark:text-gray-100 placeholder-white/70 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your Name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-200">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 rounded-xl bg-white/20 dark:bg-gray-900/40 border border-white/30 dark:border-gray-700 text-white dark:text-gray-100 placeholder-white/70 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="you@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-200">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 rounded-xl bg-white/20 dark:bg-gray-900/40 border border-white/30 dark:border-gray-700 text-white dark:text-gray-100 placeholder-white/70 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  placeholder="Subject"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-200">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-4 rounded-xl bg-white/20 dark:bg-gray-900/40 border border-white/30 dark:border-gray-700 text-white dark:text-gray-100 placeholder-white/70 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm"
                  placeholder="Your message..."
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black py-4 rounded-xl font-semibold hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
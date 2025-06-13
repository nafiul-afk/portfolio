import { SkillCategory, JourneyItem, SocialLink } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    icon: '🐍',
    skills: [
      { id: 'python', name: 'Python', color: 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700' }
    ]
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    icon: '📊',
    skills: [
      { id: 'pandas', name: 'Pandas', color: 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700' },
      { id: 'numpy', name: 'NumPy', color: 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-700' }
    ]
  },
  {
    id: 'visualization',
    title: 'Visualization',
    icon: '📈',
    skills: [
      { id: 'matplotlib', name: 'Matplotlib', color: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-700' },
      { id: 'seaborn', name: 'Seaborn', color: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700' }
    ]
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    icon: '🌐',
    skills: [
      { id: 'streamlit', name: 'Streamlit', color: 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-700' }
    ]
  },
  {
    id: 'version-control',
    title: 'Version Control',
    icon: '⚙️',
    skills: [
      { id: 'git', name: 'Git', color: 'bg-gray-100 dark:bg-gray-700/50 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-600' },
      { id: 'github', name: 'GitHub', color: 'bg-gray-900 dark:bg-gray-800/50 text-white dark:text-gray-200 border border-gray-700 dark:border-gray-600' }
    ]
  },
  {
    id: 'cloud-ai',
    title: 'Cloud & AI',
    icon: '☁️',
    skills: [
      { id: 'aws', name: 'AWS', color: 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-700' },
      { id: 'azure', name: 'Azure', color: 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700' },
      { id: 'prompt-engineering', name: 'Prompt Engineering', color: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700' }
    ]
  }
];

export const journeyItems: JourneyItem[] = [
  {
    id: 'current-studies',
    title: 'Current Studies',
    subtitle: 'United International University',
    description: 'Pursuing Data Science with a focus on machine learning and artificial intelligence. Engaging in coursework that covers statistics, programming, and advanced analytics.',
    icon: '🎓',
    color: 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg'
  },
  {
    id: 'daily-learning',
    title: 'Daily Learning',
    subtitle: 'ML & AI Frameworks',
    description: 'Consistently exploring new machine learning frameworks and AI technologies. Staying updated with the latest developments in the field and applying them to practical scenarios.',
    icon: '🤖',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg'
  },
  {
    id: 'future-goals',
    title: 'Future Goals',
    subtitle: 'Career Aspirations',
    description: 'Aiming to become a skilled data scientist who can contribute to meaningful projects. Interested in areas like natural language processing, computer vision, and AI-driven solutions.',
    icon: '🚀',
    color: 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg'
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nafiul-islam-739359279/',
    icon: '💼',
    description: 'Professional Network'
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/nafiul-afk',
    icon: '💻',
    description: 'Code Repository'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/naf.ipynb/',
    icon: '📸',
    description: 'Learning Journey'
  },
  {
    id: 'twitter',
    name: 'Twitter/X',
    url: 'https://x.com/NafiulAfk',
    icon: '🐦',
    description: 'Thoughts & Updates'
  }
];

export const learningPoints = [
  { id: '1', text: 'Machine Learning & AI frameworks' },
  { id: '2', text: 'Data analysis and visualization techniques' },
  { id: '3', text: 'Cloud computing' },
  { id: '4', text: 'Prompt engineering' },
  { id: '5', text: 'Competitive programming' }
];
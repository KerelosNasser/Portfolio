// 🚀 EASY PROJECT MANAGEMENT
// Simply add new projects to this array - no need to touch any other files!

export const projectsData = [
  {
    title: "Neuro-Navigator",
    type: "Flutter Mobile App",
    description: "A comprehensive mobile companion for individuals with ADHD designed to improve executive functions through task management, gamification, and AI-powered support.",
    features: [
      "Multi-faceted task and schedule management system with local notifications",
      "Integrated Firebase for user authentication and cloud data storage",
      "Built a gamification and progress tracking system for tasks, motion (steps), and IQ quizzes",
      "Implemented an AI chat feature using the DeepSeek API for user support and guidance"
    ],
    technologies: ["Dart", "Flutter", "Firebase", "DeepSeek API", "Local Notifications", "Hive (Local DB)","Health package"],
    githubUrl: "https://github.com/KerelosNasser/neuro_navigator", // Replace with your actual repo
    liveUrl: "", // Add if you have a live demo
    status: "Completed",
    featured: true
  },
  {
    title: "Global Environmental Impact Dashboard",
    type: "React Web Application",
    description: "An interactive data visualization dashboard to raise awareness about climate change, featuring advanced React patterns and smooth animations.",
    features: [
      "Showcased advanced React patterns, state management with React Query, and data storytelling",
      "Created multiple interactive chart types (line, area, composed) using Recharts",
      "Ensured fully responsive design and implemented smooth animations with Framer Motion"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React","Tailwindcss", "React Query", "Recharts", "Framer Motion"],
    githubUrl: "https://github.com/KerelosNasser/Enviroment-Dashboard",
    liveUrl: "https://enviroment-dashboard.vercel.app/",
    status: "Completed",
    featured: true
  },
  {
    title: "Little Lemon Restaurant",
    type: "ReACT Web Application",
    description: "A modern, responsive front-end application for a restaurant, developed as a capstone project for the Meta Front-End Developer Certification.",
    features: [
      "Demonstrated core web development skills in HTML, CSS, and JavaScript/React",
      "Focused on creating a user-friendly interface and positive user experience",
      "Implemented responsive design principles for optimal viewing across devices"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
    githubUrl: "https://github.com/yourusername/little-lemon", // Replace with your actual repo
    liveUrl: "https://little-lemon-meta-frontend-capstone-kohl.vercel.app/", // Add if you have a live demo
    status: "Completed",
    featured: false
  }
];

// 🎨 PROJECT ICONS MAPPING
// Maps project types to Lucide React icons
export const projectIcons = {
  "Flutter Mobile App": "Smartphone",
  "React Web Application": "Globe",
  "Front-End Web Application": "Globe",
  "Full-Stack Application": "Code",
  "Mobile App": "Smartphone",
  "Web Application": "Globe",
  "Desktop Application": "Monitor",
  "API/Backend": "Server",
  "Data Visualization": "BarChart3",
  "E-commerce": "ShoppingCart",
  "Portfolio": "User",
  "Blog": "FileText",
  "Game": "Gamepad2",
  "Tool/Utility": "Wrench"
};

// 🏷️ STATUS COLORS
export const statusColors = {
  "Completed": {
    bg: "bg-green-100 dark:bg-green-900",
    text: "text-green-800 dark:text-green-200",
    hover: "hover:bg-green-200 dark:hover:bg-green-800"
  },
  "In Progress": {
    bg: "bg-yellow-100 dark:bg-yellow-900",
    text: "text-yellow-800 dark:text-yellow-200",
    hover: "hover:bg-yellow-200 dark:hover:bg-yellow-800"
  },
  "Planning": {
    bg: "bg-blue-100 dark:bg-blue-900",
    text: "text-blue-800 dark:text-blue-200",
    hover: "hover:bg-blue-200 dark:hover:bg-blue-800"
  }
};
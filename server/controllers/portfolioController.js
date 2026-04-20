const portfolioData = {
  name: 'Dinesh K',
  title: 'Full Stack Developer',
  email: 'ddk11331l@gmail.com',
  phone: '+91 8072401206',
  linkedin: 'https://linkedin.com/in/dinesh0906',
  github: 'https://github.com/dinesh2432',
  about: {
    bio: "I build things for the web — full stack, end to end. Whether it's wiring up a real-time chat system or feeding prompts into Gemini to generate travel itineraries, I like working on problems that have a user at the other end. Currently pursuing B.Tech IT at St. Joseph's, Chennai. I'm probably most comfortable in the React + Node + Mongo world, but I've dabbled enough in SQL, Python, and Firebase to get things done when needed.",
    philosophy: "Clean code is a nice goal, but working code ships. I lean toward simple, readable solutions — fewer abstractions, more clarity.",
    funFacts: [
      'Built a working chat app before finishing my 3rd semester',
      'Prefer dark mode, always',
      'Debugging is 80% console.log and 20% actual insight',
    ],
  },
  skills: {
    Frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap'],
    Backend: ['Node.js', 'Express.js', 'REST API'],
    Database: ['MongoDB', 'SQL', 'PostgreSQL', 'Firebase'],
    'Tools & DevOps': ['Git', 'GitHub', 'Vercel', 'Render', 'Postman', 'Vite'],
    'AI & APIs': ['Gemini API', '3rd Party APIs', 'Socket.io', 'JWT', 'Cloudinary'],
    Languages: ['JavaScript', 'Python'],
  },
  experience: [
    {
      role: 'Frontend Developer Intern',
      company: 'OasisInfobyte',
      duration: 'Dec 2024 – Jan 2025',
      type: 'Internship',
      highlights: [
        'Built responsive web pages using HTML, CSS, JavaScript, and React.js',
        'Worked with Git and GitHub for version control and team collaboration',
        'Gained hands-on experience in real-world frontend development workflows',
      ],
    },
    {
      role: 'Web Development Intern',
      company: 'TechsonixSolutions',
      duration: 'May 2025 – Jun 2025',
      type: 'Internship',
      highlights: [
        'Completed internship under the Employability Program',
        'Built responsive web pages using HTML, CSS, JavaScript, and React.js',
        'Developed practical skills in building modern frontend interfaces',
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: 'AI Powered Tourism Website',
      date: 'Dec 2025',
      problem: 'Planning a trip usually means juggling 10 browser tabs and still missing good local spots.',
      description:
        'An AI-powered travel platform that generates personalized trip itineraries — complete with hotel ratings, daily plans, and attractions — using Gemini API, then stores everything in MongoDB for later access.',
      stack: ['React.js (Vite)', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'JWT', 'Vercel', 'Render'],
      features: ['AI itinerary generation', 'Hotel & attraction ratings', 'User authentication (JWT)', 'Persistent trip storage'],
      github: 'https://github.com/dinesh2432/AI_Powered_Tourism_Website',
      color: '#7c6aff',
    },
    {
      id: 2,
      title: 'MERN Chat Application',
      date: 'Oct 2025',
      problem: 'Needed a real-time chat system with actual security — not just a toy demo.',
      description:
        'A full-featured real-time chat app with complete authentication, contact and chat lists, server-side encryption for message security, and Cloudinary for image storage.',
      stack: ['React.js (Vite)', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'Cloudinary', 'Vercel', 'Render'],
      features: ['Real-time messaging via Socket.io', 'Server-side encryption', 'Cloudinary image uploads', 'JWT authentication'],
      github: 'https://github.com/dinesh2432/MERN_CHAT_APP',
      color: '#ff6b6b',
    },
    {
      id: 3,
      title: 'Quiz Application',
      date: 'Jul 2025',
      problem: 'Building a React app with live data and auth without a heavy backend.',
      description:
        'A responsive quiz app with score tracking, dynamic question rendering, and Firebase as the entire backend — authentication, database, and hosting.',
      stack: ['React.js', 'Firebase Database', 'Firebase Authentication', 'GitHub Pages'],
      features: ['Dynamic question rendering', 'Score tracking', 'Firebase auth', 'GitHub Pages deployment'],
      github: 'https://github.com/dinesh2432/Quiz_App-react',
      color: '#4ecdc4',
    },
  ],
  achievements: [
    { title: 'HTML5', issuer: 'Infosys Springboard', icon: '🏅' },
    { title: 'CSS3', issuer: 'Infosys Springboard', icon: '🏅' },
    { title: 'JavaScript', issuer: 'Infosys Springboard', icon: '🏅' },
    { title: 'DBMS', issuer: 'NPTEL', icon: '📜' },
    { title: 'AI Foundation', issuer: 'Oracle', icon: '🤖' },
    { title: 'Python for Data Science', issuer: 'NPTEL', icon: '🐍' },
  ],
  education: [
    {
      degree: 'Bachelor of Technology — Information Technology',
      institution: "St. Joseph's Institution of Technology",
      location: 'Chennai',
      year: '2023 – 2027',
      coursework: ['Web Development', 'Computer Graphics', 'Responsive Web Design', 'Database Management', 'Data Structures'],
    },
  ],
};

export const getPortfolio = (req, res) => {
  res.json({ success: true, data: portfolioData });
};

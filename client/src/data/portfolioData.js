// Projects
import aiTourismImg from '../assets/projects/ai-powered-tourism-website.png';
import chatAppImg from '../assets/projects/chat_app.png';
import quizAppImg from '../assets/projects/quiz_app.png';

// Internships
import oasisInternImg from '../assets/internship/OASIS_INFOBYTE_CERTIFICATE.jpg';
import techsonixInternImg from '../assets/internship/TECHSONIX_INTERN_CERTIFICATE.jpg';
import riseInternImg from '../assets/internship/rise_internship.png';

// Achievements
import fiftyDaysBadgeImg from '../assets/achievements/50days batch ok.png';
import iitHackathonImg from '../assets/achievements/IIT_VISA_HACKATHON.jpg';
import codefreeAiSjitImg from '../assets/achievements/codefree_ai_sjit.png';
import leetcode100DaysImg from '../assets/achievements/leetcode 100day batch.png';
import meritCertImg from '../assets/achievements/merit_certificate_8.66.jpg';
import velammalCodeOrDieImg from '../assets/achievements/velammal_symp_code_or_die.jpeg';
import velammalHawkinsQuizImg from '../assets/achievements/velammal_symp_the_hawkins_quiz.jpeg';

// Certificates
import oracleAiImg from '../assets/certificates/Oracle_ai_foundation.png';
import genericTechCertImg from '../assets/certificates/Screenshot 2026-04-20 111553.png';
import cssImg from '../assets/certificates/css.png';
import dbmsImg from '../assets/certificates/dbms.png';
import html5Img from '../assets/certificates/html5.png';
import javascriptImg from '../assets/certificates/javascript.png';
import nasscamImg from '../assets/certificates/nasscam.png';
import pythonDataScienceImg from '../assets/certificates/python_for_data_science.png';
import pythonFoundationImg from '../assets/certificates/python_foundation_certificate.png';
import reactjsImg from '../assets/certificates/reactjs.png';
import skyskillChatAppImg from '../assets/certificates/skyskill_chat_app.jpeg';
import spokenTutorialBootstrapImg from '../assets/certificates/spoken_tutorial_bootstrap.png';
import spokenTutorialJavaImg from '../assets/certificates/spoken_tutorial_java.png';

export const portfolioData = {
  name: 'Dinesh K',
  title: 'Full Stack Developer',
  email: 'ddk11331l@gmail.com',
  phone: '+91 8072401206',
  linkedin: 'https://www.linkedin.com/in/dineshk0906/',
  github: 'https://github.com/dinesh2432',
  about: {
    bio: "I'm a passionate Full Stack Developer focused on building robust, scalable, and responsive web applications. Currently pursuing my B.Tech in Information Technology at St. Joseph's Institute of Technology, Chennai. Experienced deeply in the MERN stack, and continuously expanding my expertise in cloud deployments and modern web architectures.",
    philosophy: "Clean code is a nice goal, but working code ships. I lean toward simple, readable solutions — fewer abstractions, more clarity.",
    funFacts: [
      'Built a working chat app before finishing my 3rd semester',
      'Prefer dark mode, obviously',
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
      id: 3,
      role: 'Web Development Intern',
      company: 'Rise',
      duration: 'Dec 2025',
      image: riseInternImg,
      description: 'Successfully completed the RISE Internship Program in Full Stack Development (MERN) at Tamizhan Skills, gaining practical exposure to modern web development technologies.\nDemonstrated consistent dedication and enthusiasm by actively participating in learning sessions and completing assigned tasks throughout the internship period.\nContributed to hands-on projects, showcasing strong commitment, teamwork, and readiness for continued academic and professional growth.',
      highlights: [
        'Contributed to real-world development tasks',
        'Enhanced problem-solving and modern web architecture skills',
      ],
    },
    {
      id: 1,
      role: 'Frontend Developer Intern',
      company: 'OasisInfobyte',
      duration: 'Dec 2024 – Jan 2025',
      image: oasisInternImg,
      description: 'Successfully completed a comprehensive Frontend Development Internship at Oasis Infobyte, specializing in building responsive and interactive web interfaces.\nConsistently demonstrated strong technical aptitude by conceptualizing and developing multiple dynamic web pages using modern HTML, CSS, JavaScript, and React.js.\nActively collaborated using Git and GitHub workflows, resulting in a deeper understanding of real-world production level code and best practices.',
      highlights: [
        'Built responsive web pages using HTML, CSS, JavaScript, and React.js',
        'Worked with Git and GitHub for version control and team collaboration',
        'Gained real-world experience in frontend development workflows',
      ],
    },
    {
      id: 2,
      role: 'Web Development Intern',
      company: 'TechsonixSolutions',
      duration: 'May 2025 – Jun 2025',
      image: techsonixInternImg,
      description: 'Successfully completed the intense Web Development Internship Program at Techsonix Solutions, actively contributing to core web platform initiatives.\nDemonstrated proficiency in crafting scalable and highly responsive web architectures, leveraging modern frontend technologies and component-driven design methodologies.\nShowcased exceptional problem-solving capabilities by independently resolving ui anomalies and consistently meeting project deliverables ahead of schedule.',
      highlights: [
        'Completed internship under the Employability Program',
        'Built responsive interfaces with HTML, CSS, JavaScript, and React.js',
        'Developed practical skills in production-ready frontend development',
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: 'AI Tourism Website',
      date: 'Dec 2025',
      problem: 'Planning a trip means juggling 10+ browser tabs and still missing great local spots.',
      description:
        'An AI travel platform that generates personalized itineraries — complete with hotel ratings, daily plans, and attractions — using Gemini API, storing everything in MongoDB.',
      stack: ['React.js (Vite)', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'JWT', 'Vercel', 'Render'],
      features: ['AI itinerary generation', 'Hotel & attraction ratings', 'JWT authentication', 'Persistent trip storage'],
      link: 'https://ai-powered-tourism-website.vercel.app/',
      image: aiTourismImg,
      accent: '#7c6aff',
    },
    {
      id: 2,
      title: 'MERN Chat Application',
      date: 'Oct 2025',
      problem: 'Needed a real-time chat system with actual security — not just a demo.',
      description:
        'Full-featured real-time chat with authentication, contact lists, server-side encryption, and Cloudinary for image storage. End-to-end from socket events to MongoDB persistence.',
      stack: ['React.js (Vite)', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'Cloudinary'],
      features: ['Real-time messaging (Socket.io)', 'Server-side encryption', 'Cloudinary image uploads', 'JWT auth'],
      link: 'https://mern-chat-app-gamma-ebon.vercel.app/',
      image: chatAppImg,
      accent: '#ff6b6b',
    },
    {
      id: 3,
      title: 'Quiz Application',
      date: 'Jul 2025',
      problem: 'Building a React app with live data and auth without a heavy backend.',
      description:
        'A responsive quiz app with score tracking and dynamic question rendering. Firebase handles auth, database, and hosting — full backend-as-a-service experiment.',
      stack: ['React.js', 'Firebase Database', 'Firebase Auth', 'GitHub Pages'],
      features: ['Dynamic question rendering', 'Score tracking system', 'Firebase authentication', 'GitHub Pages deploy'],
      link: 'https://dinesh2432.github.io/Quiz_App--react/#/',
      image: quizAppImg,
      accent: '#4ecdc4',
    },
  ],
  achievements: [
    { 
      title: 'IIT VISA Hackathon', 
      issuer: 'IIT', 
      date: 'March 2025',
      description: 'Secured the winning position in the prestigious IIT VISA Hackathon. Demonstrated exceptional rapid problem-solving capabilities, algorithm design, and full-stack implementation under extreme time constraints against top-tier tech competitors across the state.',
      color: '#ffcc00', 
      image: iitHackathonImg 
    },
    { 
      title: 'LeetCode 100 Days Badge', 
      issuer: 'LeetCode', 
      date: 'April 2025',
      description: 'Demonstrated extreme consistency and advanced algorithmic prowess by successfully completing a 100-day problem-solving streak on LeetCode. Mastered complex data structure optimizations and dynamic programming challenges.',
      color: '#ff9900', 
      fit: 'contain',
      image: leetcode100DaysImg 
    },
    { 
      title: 'Code or Die', 
      issuer: 'Velammal Institute of Technology', 
      date: 'September 2024',
      description: "Competed and excelled in the highly competitive 'Code or Die' intense coding event at Velammal Symposium. Tackled high-pressure algorithmic assessments and system architecture design requirements.",
      color: '#e60000', 
      image: velammalCodeOrDieImg 
    },
    { 
      title: 'The Hawkins quiz', 
      issuer: 'Velammal Institute of Technology', 
      date: 'September 2024',
      description: "Tested general and deep technical knowledge in 'The Hawkins Quiz' event at Velammal Symposium. Showcased rapid recall of computer science fundamentals, network protocols, and modern web frameworks.",
      color: '#7c6aff', 
      image: velammalHawkinsQuizImg 
    },
    { 
      title: 'Codefree AI', 
      issuer: 'SJIT', 
      date: 'October 2024',
      description: 'Participated and excelled in the Codefree AI Hackathon. Engineered an innovative, no-code AI integration solution that significantly streamlined development workflows and impressed the technical jury.',
      color: '#4ecdc4', 
      image: codefreeAiSjitImg 
    },
    { 
      title: 'Leetcode 50 days badge', 
      issuer: 'LeetCode', 
      date: 'February 2025',
      description: 'Maintained a rigorous 50-day consecutive coding streak badge, consistently solving medium and hard-level algorithmic problems accurately, ensuring continuous skill progression.',
      color: '#34d399', 
      image: fiftyDaysBadgeImg 
    },
    { 
      title: 'Certification of Merit', 
      issuer: 'SJIT', 
      date: 'November 2025',
      description: 'Recognized as one of the top academic performers in the Department of Information Technology. Awarded the Certificate of Merit for exceptionally maintaining an 8.66 CGPA throughout the academic semesters.',
      color: '#a096ff', 
      image: meritCertImg 
    },
  ],
  certificates: [
    { title: 'HTML5', issuer: 'Infosys Springboard', date: 'August 2024', description: 'Mastered semantic HTML5 web design concepts, establishing a robust foundation in modern accessibility standards, DOM structuring, and responsive metadata implementations.', color: '#ff6b6b', image: html5Img },
    { title: 'CSS3', issuer: 'Infosys Springboard', date: 'August 2024', description: 'Certified in advanced CSS3 styling architectures, encompassing modern Flexbox/Grid layouts, fluid typography, and complex keyframe animations for high-performance web experiences.', color: '#7c6aff', image: cssImg },
    { title: 'JavaScript', issuer: 'Infosys Springboard', date: 'September 2024', description: 'Deeply mastered foundational and ES6+ JavaScript concepts, including asynchronous programming, closures, DOM manipulation, and dynamic event handling architectures.', color: '#f7df1e', image: javascriptImg },
    { title: 'React JS', issuer: 'Infosys Springboard', date: 'October 2024', description: 'Successfully completed immersive training focusing on modern React workflows, React Hooks, complex state management architectures, and building scalable component libraries.', color: '#61dafb', image: reactjsImg },
    { title: 'DBMS', issuer: 'NPTEL', date: 'December 2024', description: 'Conducted a deep dive into advanced Database Management Systems. Covered vital subjects including SQL query optimization, robust normalization, indexing, and scalable distributed databases.', color: '#4ecdc4', image: dbmsImg },
    { title: 'Oracle AI Foundation', issuer: 'Oracle', date: 'January 2025', description: 'Validated a solid foundational understanding of Artificial Intelligence technologies, deep machine learning principles, and generative AI models governed within the Oracle Cloud ecosystem.', color: '#a096ff', image: oracleAiImg },
    { title: 'Python for Data Science', issuer: 'NPTEL', date: 'February 2025', description: 'Gained comprehensive mastery over exploratory data analysis techniques, data visualization, and complex dataset manipulation heavily leveraging Python libraries like Pandas and NumPy.', color: '#3776ab', image: pythonDataScienceImg },
    { title: 'Python Foundation', issuer: 'Infosys Springboard', date: 'July 2024', description: 'Acquired core foundational programming paradigms in Python, executing robust script development, object-oriented concepts, and memory-safe logic construction.', color: '#3776ab', image: pythonFoundationImg },
    { title: 'Spoken Tutorial Java', issuer: 'Spoken Tutorial', date: 'June 2024', description: 'Completed comprehensive, rigorous training covering core Java programming logic, threading lifecycles, and object-oriented backend service architecture.', color: '#e63946', image: spokenTutorialJavaImg },
    { title: 'Spoken Tutorial Bootstrap', issuer: 'Spoken Tutorial', date: 'July 2024', description: 'Mastered the creation of mobile-first, responsive grid web designs by highly leveraging the Bootstrap UI component framework and customization protocols.', color: '#7c6aff', image: spokenTutorialBootstrapImg },
    { title: 'Skyskill Chat App', issuer: 'Skyskill', date: 'November 2025', description: 'Successfully navigated an intense tech sprint focused entirely on designing, building, and deploying real-life robust MERN stack chat applications with live WebSockets.', color: '#4ecdc4', image: skyskillChatAppImg },
    { title: 'NASSCOM Certification', issuer: 'NASSCOM', date: 'October 2025', description: 'Officially certified by the National Association of Software and Service Companies in emerging professional tech fields and modern computational practices.', color: '#f7df1e', image: nasscamImg },
    { title: 'Tech Certification', issuer: 'Platform', date: 'Ongoing', description: 'Accomplished specialized online tech certification focusing directly on core, high-impact web development tools and enterprise software deployment strategies.', color: '#a096ff', image: genericTechCertImg },
  ],
  education: [
    {
      degree: 'B.Tech — Information Technology',
      institution: "St. Joseph's Institution of Technology",
      location: 'Chennai',
      duration: '2023 – 2027',
      cgpa: '8.7',
      description: 'Active participant in tech symposiums and coding challenges. Always eager to explore new technologies and build projects that solve real-world problems. Passionate about software development and continuous learning.',
    },
  ],
};

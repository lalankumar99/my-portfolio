// src/data/portfolioData.js

export const portfolioData = {
  // 1. Basic Information (Hero Section)
  basicInfo: {
    name: "Lalan Kumar",
    role: "Electrical Engineering Student & Tech Enthusiast",
    tagline: "Bridging Core Electrical Engineering with Modern Web & Python Technologies ⚡💻",
    shortBio:
      "Main Government Polytechnic, Banka se Electrical Engineering (3rd Semester) kar raha hoon. Core electrical concepts ke saath-saath mujhe Python programming, Web Development (HTML, CSS, JS), UI Design aur GitHub par projects banana pasand hai.",
    location: "Banka, Bihar, India",
    resumeUrl: "/resume.pdf",
    profileImage: "/profile.jpg", // Aap /profile.png bhi rakh sakte hain
  },

  // 2. About Me Section
  aboutMe: {
    title: "About Me",
    subtitle: "Electrical Mind, Digital Creator",
    description: [
      "Namaste! Mera naam Lalan Kumar hai aur main Banka, Bihar ka rehne wala hoon. Filhal main Government Polytechnic, Banka se Diploma in Electrical Engineering (2025–2028 batch) ke 3rd semester mein padhai kar raha hoon.",
      "Ek Electrical Engineering student hone ke bawajood, meri coding aur modern technology mein gehri ruchi hai. Maine khud se Python, HTML5, CSS3, JavaScript, Responsive Web Design, UI Designing aur Basic SEO seekha hai.",
      "Mera lakshya apne 6 semesters safaltapurvak poore karke ek behtareen Electrical Engineer banna hai, aur saath hi coding aur software skills ko electrical systems aur automation ke saath jodkar naye futuristic projects banana hai."
    ],
    branch: "Diploma in Electrical Engineering",
    currentStatus: "3rd Semester (Target: 6 Semesters Complete by 2028)",
    college: "Government Polytechnic, Banka",
    interests: [
      "Electrical Circuits & Systems",
      "Python Scripting & Automation",
      "Web Designing & UI/UX",
      "Open Source & GitHub",
      "Learning New Technologies"
    ],
    highlights: [
      {
        id: 1,
        metric: "3rd Sem",
        label: "Electrical Engineering Student",
      },
      {
        id: 2,
        metric: "10+",
        label: "GitHub Code Repositories",
      },
      {
        id: 3,
        metric: "Dual Skill",
        label: "Core Electrical + Web & Python",
      },
    ],
  },

  // 3. Technical Skills (With Proficiency Levels)
  skills: {
    codingAndWeb: [
      { name: "HTML5", level: 90, category: "Frontend" },
      { name: "Python", level: 85, category: "Programming" },
      { name: "Git & GitHub", level: 85, category: "Tools" },
      { name: "Responsive Web Design", level: 80, category: "Design" },
      { name: "UI Designing", level: 80, category: "Design" },
      { name: "Basic SEO", level: 75, category: "Optimization" },
      { name: "CSS3", level: 65, category: "Frontend" },
      { name: "JavaScript", level: 55, category: "Frontend" },
    ],
    electricalCore: [
      { name: "Basic Electrical Engineering", level: 85, category: "Core" },
      { name: "Electrical Circuits & Networks", level: 80, category: "Core" },
      { name: "Electrical Measurements", level: 75, category: "Core" },
      { name: "Power Systems Basics", level: 70, category: "Core" },
    ],
  },

  // 4. Featured Projects (GitHub Web Projects + Upcoming Electrical Projects)
  projects: [
    {
      id: 1,
      title: "3D Futuristic Personal Portfolio",
      category: "Web Development",
      description:
        "Mera apna personal portfolio website jismein meri Electrical Engineering journey, coding skills aur GitHub projects ko 3D futuristic UI ke saath dikhaya gaya hai.",
      techStack: ["Next.js", "Tailwind CSS", "JavaScript", "UI Design", "SEO"],
      githubUrl: "https://github.com/lalankumar99",
      liveUrl: "#", // Jab website live ho jayegi tab yahan link dalenge
      featured: true,
    },
    {
      id: 2,
      title: "Python Utility & Automation Scripts",
      category: "Python Programming",
      description:
        "Python ka upyog karke banaye gaye kuch khaas programs aur calculation scripts jo rozmarra ke digital aur engineering tasks ko aasan banate hain.",
      techStack: ["Python", "Logic Building", "GitHub"],
      githubUrl: "https://github.com/lalankumar99",
      liveUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Responsive Landing Pages & UI Designs",
      category: "Web & UI Design",
      description:
        "HTML5, CSS3 aur JavaScript ki madad se banaye gaye modern aur mobile-friendly web pages jo har screen size par badhiya dikhte hain.",
      techStack: ["HTML5", "CSS3", "Responsive Design", "Basic SEO"],
      githubUrl: "https://github.com/lalankumar99",
      liveUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Smart Electrical / IoT Project (Upcoming)",
      category: "Core Electrical Project",
      description:
        "Aane wale semesters mein Electrical Engineering aur Python/Microcontrollers ko mila kar ek hardware + software project banane ka plan hai.",
      techStack: ["Electrical Engineering", "Sensors", "Python", "Hardware"],
      githubUrl: "https://github.com/lalankumar99",
      liveUrl: "#",
      featured: false,
    },
  ],

  // 5. Education Timeline
  education: [
    {
      id: 1,
      degree: "Diploma in Electrical Engineering (Polytechnic)",
      institution: "Government Polytechnic, Banka",
      location: "Banka, Bihar",
      duration: "2025 - 2028 (Pursuing - 3rd Semester)",
      description:
        "Filhal 3rd semester mein adhyayanrat. Core electrical subjects ke saath-saath practical labs aur technical skill development par focus.",
      status: "Current",
    },
    {
      id: 2,
      degree: "Matriculation (10th Standard)",
      institution: "+2 High School Abhyudaynagar, Banka",
      location: "Banka, Bihar",
      duration: "Completed",
      description:
        "Schooling ke dauran Vigyan (Science) aur Ganit (Mathematics) mein khaas ruchi rahi, jisne aage chal kar Engineering chune ki prerna di.",
      status: "Completed",
    },
  ],

  // 6. Services / What I Do
  services: [
    {
      id: 1,
      title: "Responsive Web Designing",
      description:
        "HTML5, CSS3 aur modern UI principles ki madad se mobile aur desktop friendly, clean websites design karna.",
      icon: "Layout",
    },
    {
      id: 2,
      title: "Portfolio & Landing Pages",
      description:
        "Students aur professionals ke liye fast, attractive aur SEO-friendly personal portfolio ya landing page banana.",
      icon: "Monitor",
    },
    {
      id: 3,
      title: "Python Scripting & Logic",
      description:
        "Python language ka use karke basic automation scripts, calculators aur problem-solving programs likhna.",
      icon: "Code",
    },
    {
      id: 4,
      title: "GitHub & Project Management",
      description:
        "Code ko GitHub par manage karna, repositories banana aur open-source projects ko maintain karna.",
      icon: "GitBranch",
    },
    {
      id: 5,
      title: "Basic SEO & UI Improvement",
      description:
        "Purani websites ke look (UI) ko behtar banana aur unhe Google search ke liye basic SEO optimize karna.",
      icon: "TrendingUp",
    },
    {
      id: 6,
      title: "Electrical Engineering Concepts",
      description:
        "Electrical circuits, wiring basics aur diploma level ke technical concepts par lagatar seekhna aur kaam karna.",
      icon: "Zap",
    },
  ],

  // 7. Contact & Social Media Links
  contact: {
    email: "lalankumarbnk17@gmail.com",
    phone: "+91 9296783686",
    whatsappNumber: "919296783686",
    whatsappUrl: "https://wa.me/919296783686",
    location: "Banka, Bihar, India",
    socials: {
      github: "https://github.com/lalankumar99",
      linkedin: "#", // Baad mein apna LinkedIn link yahan daal sakte hain
      instagram: "#", // Baad mein apna Instagram link yahan daal sakte hain
      twitter: "#", // Baad mein apna Twitter (X) link yahan daal sakte hain
    },
  },
};

export default portfolioData;
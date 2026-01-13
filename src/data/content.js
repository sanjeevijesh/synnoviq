// All website content and data centralized in one place

export const companyInfo = {
  name: "Synnoviq Technologies",
  tagline: "Building Tomorrow's Innovations Today",
  description: "Where Your Ideas Transform Into Reality",
  email: "synnoviqtechnologies@gmail.com",
  phone: "+91 9123565204",
  address: "Techpark KRIC National Engineering College, Kovilpatti - 628503",
  formLink: "https://forms.gle/ZwjjH1XfKBgMLg3NA",
  social: {
    linkedin: "https://www.linkedin.com/company/synnoviq-technologies",
    instagram: "https://www.instagram.com/synnoviq_technologies/",
    facebook: "https://www.facebook.com/share/185tLdRYGS/?mibextid=wwXIfr"
  }
};

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Positions", href: "#positions" },
  { name: "Entrepreneur", href: "#entrepreneur" },
  { name: "Contact", href: "#contact" }
];

export const heroSection = {
  badge: "🚀 Now Hiring for 14+ Positions",
  title: "Join India's Most Innovative Tech Company",
  subtitle: "Building Tomorrow's Innovations Today",
  description: "We're looking for talented individuals to join our team and shape the future of technology. From internships to full-time roles, find your perfect opportunity.",
  cta1: { text: "View Open Positions", href: "#positions" },
  cta2: { text: "Learn More", href: "#about" },
  stats: [
    { value: "14+", label: "Open Positions" },
    { value: "50+", label: "Team Members" },
    // REMOVED: { value: "100+", label: "Applications Received" },
    { value: "1+", label: "Years of Excellence" }
  ]
};

export const aboutSection = {
  title: "Why Choose Synnoviq?",
  subtitle: "We're not just a company, we're a launchpad for your career in technology",
  features: [
    {
      icon: "💡",
      title: "Innovation First",
      description: "Work on cutting-edge projects that push the boundaries of technology and make a real impact."
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description: "Fast-track your career with mentorship, training, and opportunities to lead projects."
    },
    {
      icon: "🌟",
      title: "Inclusive Culture",
      description: "Join a diverse team that values your unique perspective and encourages creativity."
    },
    {
      icon: "🎯",
      title: "Real Impact",
      description: "See your work in action as we build solutions that transform businesses and lives."
    },
    {
      icon: "🤝",
      title: "Collaborative Environment",
      description: "Work alongside passionate professionals who are always ready to help and share knowledge."
    },
    {
      icon: "📈",
      title: "Competitive Benefits",
      description: "Enjoy attractive compensation, flexible work arrangements, and continuous learning opportunities."
    }
  ],
  highlights: {
    industry: "Software & IT Services",
    vision: "Leading Innovation in Tech",
    culture: "Collaborative & Inclusive",
    mission: "Empowering Through Technology"
  }
};

export const positionsSection = {
  title: "Open Positions",
  subtitle: "Find your perfect role and start your journey with us",
  positions: [
    {
      id: 1,
      title: "Full Stack Developer",
      icon: "💻",
      description: "Build end-to-end web applications using modern technologies and frameworks.",
      skills: ["React", "Node.js", "MongoDB", "REST APIs", "Git"]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      icon: "🎨",
      description: "Create stunning user interfaces and exceptional user experiences for our products.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Wireframing"]
    },
    {
      id: 3,
      title: "Data Analyst",
      icon: "📊",
      description: "Transform data into actionable insights that drive business decisions.",
      skills: ["Python", "SQL", "Excel", "Tableau", "Statistics"]
    },
    {
      id: 4,
      title: "HR Intern",
      icon: "👥",
      description: "Support our HR team in recruitment, onboarding, and employee engagement.",
      skills: ["Communication", "MS Office", "Recruitment", "Organization", "People Skills"]
    },
    {
      id: 5,
      title: "Cyber Security",
      icon: "🔒",
      description: "Protect our systems and data from cyber threats and vulnerabilities.",
      skills: ["Network Security", "Penetration Testing", "Encryption", "Security Audits", "Firewalls"]
    },
    {
      id: 6,
      title: "Network Engineer",
      icon: "🌐",
      description: "Design, implement, and maintain our network infrastructure.",
      skills: ["Cisco", "Routing", "Switching", "Network Protocols", "Troubleshooting"]
    },
    {
      id: 7,
      title: "3D Modeler",
      icon: "🎭",
      description: "Create stunning 3D models and visualizations for games and applications.",
      skills: ["Blender", "Maya", "3ds Max", "Texturing", "Animation"]
    },
    {
      id: 8,
      title: "Game Developer",
      icon: "🎮",
      description: "Develop engaging games using Unity, Unreal Engine, and modern game technologies.",
      skills: ["Unity", "Unreal Engine", "C#", "3D Graphics", "Game Design"]
    },
    {
      id: 9,
      title: "App Developer",
      icon: "📱",
      description: "Build mobile applications for iOS and Android platforms.",
      skills: ["React Native", "Flutter", "iOS", "Android", "Mobile UI"]
    },
    {
      id: 10,
      title: "IoT Engineer",
      icon: "🔌",
      description: "Design and develop IoT solutions connecting devices to the cloud.",
      skills: ["Arduino", "Raspberry Pi", "Sensors", "Cloud Integration", "Embedded Systems"]
    },
    {
      id: 11,
      title: "Robotics and Automation",
      icon: "🤖",
      description: "Build intelligent robots and automated systems for various applications.",
      skills: ["ROS", "Python", "Control Systems", "Machine Learning", "Hardware Integration"]
    },
    {
      id: 12,
      title: "DevOps Engineer",
      icon: "⚙️",
      description: "Streamline development and deployment processes with automation.",
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Jenkins"]
    },
    {
      id: 13,
      title: "VFX Designer",
      icon: "✨",
      description: "Create stunning visual effects for videos, games, and interactive media.",
      skills: ["After Effects", "Nuke", "Houdini", "Compositing", "Motion Graphics"]
    },
    {
      id: 14,
      title: "Graphics Designer",
      icon: "🖌️",
      description: "Design eye-catching graphics for digital and print media.",
      skills: ["Photoshop", "Illustrator", "InDesign", "Branding", "Typography"]
    }
  ]
};

export const eligibility = {
  title: "Who Can Apply?",
  academic: {
    title: "Academic Requirements",
    items: [
      "Currently pursuing or completed degree in relevant field",
      "Strong academic performance",
      "Passion for technology and innovation",
      "Good communication skills"
    ]
  },
  general: {
    title: "General Requirements",
    items: [
      "Age: 18-28 years",
      "Available for 3-6 months internship",
      "Can work from office or hybrid",
      "Team player with problem-solving mindset"
    ]
  }
};

export const benefits = [
  {
    icon: "💰",
    title: "Competitive Salary",
    description: "Industry-leading compensation packages"
  },
  {
    icon: "🏖️",
    title: "Flexible Hours",
    description: "Work-life balance with flexible schedules"
  },
  {
    icon: "📚",
    title: "Learning Budget",
    description: "Annual budget for courses and certifications"
  },
  {
    icon: "🏠",
    title: "Remote Options",
    description: "Hybrid work model available"
  },
  {
    icon: "🎉",
    title: "Team Events",
    description: "Regular team building activities"
  },
  {
    icon: "🚀",
    title: "Career Growth",
    description: "Fast-track promotion opportunities"
  }
];

export const entrepreneurSection = {
  title: "Entrepreneur Program",
  subtitle: "Turn Your Startup Dreams Into Reality",
  description: "We don't just hire employees - we nurture entrepreneurs. Our unique program provides resources, mentorship, and support to help you build your own startup.",
  benefits: [
    {
      icon: "💡",
      title: "Mentorship",
      description: "One-on-one guidance from successful entrepreneurs and industry experts"
    },
    {
      icon: "💰",
      title: "Funding Support",
      description: "Help with investor connections and funding strategies"
    },
    {
      icon: "🛠️",
      title: "Resources",
      description: "Access to our infrastructure, tools, and technology stack"
    },
    {
      icon: "🤝",
      title: "Network",
      description: "Connect with fellow entrepreneurs and potential partners"
    },
    {
      icon: "📈",
      title: "Business Training",
      description: "Workshops on business planning, marketing, and operations"
    },
    {
      icon: "🎯",
      title: "Market Access",
      description: "Early customer connections and market validation support"
    },
    {
      icon: "💻",
      title: "Tech Support",
      description: "Technical assistance and development resources"
    },
    {
      icon: "🏆",
      title: "Recognition",
      description: "Showcase opportunities and startup competitions"
    }
  ],
  features: [
    {
      icon: "🚀",
      title: "Launch Your Idea",
      description: "Start working on your startup while being part of our team"
    },
    {
      icon: "📊",
      title: "Learn by Doing",
      description: "Gain real-world business experience in a supportive environment"
    },
    {
      icon: "🌟",
      title: "Success Stories",
      description: "Join our alumni who have built successful startups"
    }
  ],
  stats: [
    // REMOVED: { value: "10+", label: "Startups Supported" },
    { value: "2+", label: "Years Running" },
    // REMOVED: { value: "$500K+", label: "Funding Facilitated" },
    { value: "20+", label: "Mentors" }
  ],
  lookingFor: {
    title: "What We're Looking For",
    items: [
      "Innovative business ideas with market potential",
      "Passionate entrepreneurs ready to commit",
      "Scalable business models",
      "Tech-enabled solutions",
      "Strong team or willingness to build one",
      "Clear problem-solution fit",
      "Coachable and open to feedback",
      "Long-term vision and dedication"
    ]
  },
  cta: {
    title: "Ready to Build Your Startup?",
    description: "Apply now and start your entrepreneurial journey with us",
    buttonText: "Apply for Entrepreneur Program"
  }
};

export const applicationSection = {
  title: "How to Apply",
  subtitle: "Join our team in 3 simple steps",
  qrCode: {
    title: "Scan to Apply",
    description: "Use your phone camera to scan and fill the application form",
    url: companyInfo.formLink
  },
  requirements: {
    title: "What You'll Need",
    items: [
      "Updated resume (PDF format)",
      "Portfolio/GitHub profile (if applicable)",
      "Academic transcripts",
      "Cover letter explaining your interest",
      "Contact information"
    ]
  },
  timeline: [
    {
      phase: "Application Review",
      duration: "3-5 days",
      description: "We'll review your application and shortlist candidates"
    },
    {
      phase: "Initial Interview",
      duration: "1 week",
      description: "Virtual interview with our HR team"
    },
    {
      phase: "Technical Round",
      duration: "1 week",
      description: "Technical assessment and team interaction"
    },
    {
      phase: "Final Decision",
      duration: "2-3 days",
      description: "Offer letter and onboarding process"
    }
  ],
  warnings: [
    "Only shortlisted candidates will be contacted",
    "Incomplete applications will not be considered",
    "We do not charge any fee for the application process",
    "Beware of fraudulent job offers claiming to be from Synnoviq",
    "All official communication will be from @synnoviq.com email addresses"
  ],
  cta: {
    title: "Questions About the Process?",
    subtitle: "Reach out to our HR team",
    email: companyInfo.email,
    phone: companyInfo.phone
  }
};

export const contactSection = {
  title: "Get in Touch",
  subtitle: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  formFields: [
    { name: "name", type: "text", label: "Your Name", required: true },
    { name: "email", type: "email", label: "Your Email", required: true },
    { name: "subject", type: "text", label: "Subject", required: true },
    { name: "message", type: "textarea", label: "Message", required: true }
  ]
};
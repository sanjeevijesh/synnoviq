// All website content and data centralized in one place

export const companyInfo = {
  name: "Synnoviq Technologies",
  tagline: "Building Tomorrow's Innovations Today",
  description: "Where Your Ideas Transform Into Reality",
  email: "synnoviqtechnologies@gmail.com",
  phone: "+91 9123565204",
  location: "Techpark KRIC National Engineering College, Kovilpatti - 628503",
  website: "https://synnoviq.com",
  applicationForm: "https://forms.gle/ZwjjH1XfKBgMLg3NA",
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
  { name: "Apply", href: "#apply" },
  { name: "Contact", href: "#contact" }
];

export const heroSection = {
  badge: "🚀 We're Hiring!",
  title: "Join the Future of Innovation",
  subtitle: companyInfo.name,
  description: companyInfo.tagline,
  cta1: "View Open Positions",
  cta2: "Learn More",
  stats: [
    { value: "14+", label: "Open Positions" },
    { value: "100+", label: "Applications Received" },
    { value: "50+", label: "Team Members" },
    { value: "24/7", label: "Support Available" }
  ]
};

export const aboutSection = {
  title: "Why Choose Synnoviq?",
  subtitle: "Be part of something extraordinary. Join a team that's shaping the future of technology.",
  features: [
    {
      icon: "🌍",
      title: "Global Impact",
      description: "Work on projects that make a difference worldwide. Your code will reach millions of users across the globe."
    },
    {
      icon: "👥",
      title: "Collaborative Culture",
      description: "Join a diverse team of talented individuals who support and inspire each other every day."
    },
    {
      icon: "🎯",
      title: "Career Growth",
      description: "We invest in your development with mentorship, training, and clear advancement opportunities."
    },
    {
      icon: "💡",
      title: "Innovation First",
      description: "Experiment with cutting-edge technologies and bring your creative ideas to life."
    },
    {
      icon: "🏆",
      title: "Recognition",
      description: "Your hard work doesn't go unnoticed. We celebrate achievements and reward excellence."
    },
    {
      icon: "🚀",
      title: "Fast-Paced Growth",
      description: "Be part of a rapidly growing company with endless opportunities for professional development."
    }
  ],
  highlights: {
    industry: "Technology & Innovation",
    vision: "Empowering businesses through technology",
    culture: "Inclusive, Dynamic, Forward-thinking",
    mission: "Creating solutions that matter"
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
      description: "Master both frontend and backend development to create complete, scalable web solutions from database to user interface.",
      skills: ["React", "Node.js", "MongoDB", "APIs", "Git"]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      icon: "🎨",
      description: "Design beautiful, intuitive user experiences that delight our users and drive engagement across all platforms.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Wireframing"]
    },
    {
      id: 3,
      title: "Data Analyst",
      icon: "📊",
      description: "Turn data into actionable insights using analytics tools and statistical methods to drive business decisions.",
      skills: ["Python", "SQL", "Data Visualization", "Statistical Analysis", "Excel"]
    },
    {
      id: 4,
      title: "HR Intern",
      icon: "👔",
      description: "Support our people operations and help build an amazing workplace culture while learning HR best practices.",
      skills: ["Communication", "Organization", "Recruitment", "Employee Relations", "MS Office"]
    },
    {
      id: 5,
      title: "Cyber Security",
      icon: "🔒",
      description: "Protect our systems and data with cutting-edge security practices, threat analysis, and risk management.",
      skills: ["Network Security", "Penetration Testing", "Encryption", "Security Audits", "Ethical Hacking"]
    },
    {
      id: 6,
      title: "Network Engineer",
      icon: "🌐",
      description: "Design, implement, and maintain robust network infrastructure to ensure seamless connectivity and performance.",
      skills: ["Cisco", "Network Protocols", "Firewalls", "VPN", "Network Security"]
    },
    {
      id: 7,
      title: "3D Modeler",
      icon: "🎭",
      description: "Create stunning 3D models and visualizations for games, applications, and immersive experiences.",
      skills: ["Blender", "Maya", "3ds Max", "Texturing", "Animation"]
    },
    {
      id: 8,
      title: "Game Developer",
      icon: "🎮",
      description: "Build immersive gaming experiences using modern game engines and bring creative concepts to life.",
      skills: ["Unity", "Unreal Engine", "C#", "3D Graphics", "Game Design"]
    },
    {
      id: 9,
      title: "App Developer",
      icon: "📱",
      description: "Build powerful mobile applications for iOS and Android platforms that users love and depend on daily.",
      skills: ["React Native", "Flutter", "iOS", "Android", "Mobile UI"]
    },
    {
      id: 10,
      title: "IoT Engineer",
      icon: "🔌",
      description: "Design and develop Internet of Things solutions that connect the physical and digital worlds seamlessly.",
      skills: ["Arduino", "Raspberry Pi", "Sensors", "Cloud Integration", "Embedded Systems"]
    },
    {
      id: 11,
      title: "Robotics and Automation",
      icon: "🤖",
      description: "Build intelligent robotic systems and automation solutions that revolutionize manufacturing and everyday life.",
      skills: ["ROS", "Python", "Mechanical Design", "Control Systems", "AI Integration"]
    },
    {
      id: 12,
      title: "DevOps Engineer",
      icon: "⚙️",
      description: "Streamline development and operations with CI/CD pipelines, infrastructure automation, and cloud solutions.",
      skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "Linux"]
    },
    {
      id: 13,
      title: "VFX Designer",
      icon: "✨",
      description: "Create mind-blowing visual effects for films, games, and digital media using industry-leading tools.",
      skills: ["After Effects", "Nuke", "Houdini", "Compositing", "Motion Graphics"]
    },
    {
      id: 14,
      title: "Graphics Designer",
      icon: "🖌️",
      description: "Craft compelling visual designs for branding, marketing, and digital media that captivate audiences.",
      skills: ["Photoshop", "Illustrator", "InDesign", "Branding", "Typography"]
    }
  ],
  eligibility: {
    title: "Eligibility Criteria",
    academic: [
      "Currently pursuing or completed Bachelor's/Master's degree",
      "Strong academic record with consistent performance",
      "Relevant coursework in your field of interest"
    ],
    general: [
      "Passion for technology and innovation",
      "Strong problem-solving abilities",
      "Excellent communication skills",
      "Team player with a positive attitude",
      "Willingness to learn and adapt"
    ]
  },
  benefits: [
    { icon: "💰", title: "Competitive Salary", description: "Industry-standard compensation" },
    { icon: "🏖️", title: "Flexible Hours", description: "Work-life balance" },
    { icon: "📚", title: "Learning Budget", description: "Courses & conferences" },
    { icon: "🏠", title: "Remote Options", description: "Hybrid work model" },
    { icon: "🎉", title: "Team Events", description: "Regular celebrations" },
    { icon: "🚀", title: "Career Growth", description: "Fast-track advancement" }
  ],
  urgency: {
    message: "🔥 Limited Spots Available - Apply Now!",
    note: "We're reviewing applications on a rolling basis. Early applications get priority consideration.",
    deadline: "Applications close soon!"
  }
};

export const entrepreneurSection = {
  title: "For Aspiring Entrepreneurs",
  subtitle: "Have a groundbreaking idea? We'll help you bring it to life!",
  badge: "🌟 For Visionaries & Dreamers",
  description: "Join our entrepreneur program and get the support, mentorship, and resources you need to turn your startup idea into reality.",
  benefits: [
    {
      icon: "🎓",
      title: "Mentorship",
      description: "Learn from experienced entrepreneurs and industry experts"
    },
    {
      icon: "💰",
      title: "Funding Support",
      description: "Access to seed funding and investor connections"
    },
    {
      icon: "🛠️",
      title: "Tech Resources",
      description: "Free access to development tools and infrastructure"
    },
    {
      icon: "🤝",
      title: "Networking",
      description: "Connect with fellow entrepreneurs and potential partners"
    },
    {
      icon: "📊",
      title: "Market Research",
      description: "Get insights and data to validate your business idea"
    },
    {
      icon: "🏢",
      title: "Co-working Space",
      description: "Professional workspace to build your startup"
    },
    {
      icon: "📈",
      title: "Business Strategy",
      description: "Expert guidance on business planning and growth"
    },
    {
      icon: "🚀",
      title: "Launch Support",
      description: "Help with product launch and go-to-market strategy"
    }
  ],
  features: [
    { title: "Idea Validation", description: "We'll help assess market fit" },
    { title: "Growth Strategy", description: "Scale your business effectively" },
    { title: "Launch Support", description: "Go-to-market execution" }
  ],
  stats: [
    { value: "10+", label: "Startups Supported" },
    { value: "$500K+", label: "Funding Facilitated" },
    { value: "95%", label: "Success Rate" },
    { value: "24/7", label: "Mentor Access" }
  ],
  looking: [
    "🚀 Innovative and scalable business ideas",
    "💡 Passionate founders with clear vision",
    "🎯 Problem-solving approach",
    "📊 Market research and validation",
    "🤝 Team-building capabilities",
    "💪 Resilience and determination",
    "📈 Growth mindset",
    "🌍 Global thinking, local execution"
  ]
};

export const applicationSection = {
  title: "Ready to Apply?",
  subtitle: "Fill out our application form and take the first step towards an exciting career!",
  formFields: [
    "Full Name and Contact Information",
    "Educational Background and Qualifications",
    "Position(s) you're interested in",
    "Resume/CV (PDF format)",
    "Cover Letter or Statement of Purpose",
    "Portfolio/GitHub (for technical roles)",
    "Availability and Start Date"
  ],
  timeline: [
    {
      phase: "Application Review",
      description: "Our team reviews your application and resume",
      duration: "3-5 business days"
    },
    {
      phase: "Initial Screening",
      description: "Phone or video call to discuss your background",
      duration: "1 week"
    },
    {
      phase: "Technical/Skills Assessment",
      description: "Role-specific evaluation or assignment",
      duration: "1-2 weeks"
    },
    {
      phase: "Final Interview & Offer",
      description: "Meet the team and receive your offer",
      duration: "1 week"
    }
  ],
  warnings: [
    "⚠️ FALSE INFORMATION: Providing false or misleading information in your application will result in immediate disqualification and may affect future applications.",
    "⚠️ PLAGIARISM: All submitted work, including cover letters, portfolios, and assignments, must be original. Plagiarized content will lead to automatic rejection.",
    "⚠️ MULTIPLE APPLICATIONS: Submitting multiple applications for the same position will not increase your chances. One well-crafted application is all we need.",
    "⚠️ INCOMPLETE APPLICATIONS: Applications missing required documents or information will not be considered. Please ensure all fields are completed.",
    "⚠️ COMMUNICATION: Only shortlisted candidates will be contacted. If you don't hear from us within 3 weeks, please consider your application unsuccessful for this round."
  ]
};

export const contactSection = {
  title: "Get in Touch",
  subtitle: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  office: {
    address: companyInfo.location,
    email: companyInfo.email,
    phone: companyInfo.phone
  }
};
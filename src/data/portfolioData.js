// =====================================================
// PORTFOLIO DATA CONFIGURATION
// =====================================================
// Edit this file to update your portfolio content
// All sections are easily customizable below
// =====================================================

// Your profile image URL - replace with your own
export const PROFILE_IMAGE = "https://customer-assets.emergentagent.com/job_dipen-aiml-portfolio/artifacts/8fpoe0kb_image.jpg";

// Personal Information
export const PERSONAL_INFO = {
  name: "Dipen Thapa",
  title: "BIT Student",
  tagline: "AI/ML & Aspiring Data Scientist",
  subtitle: "Building practical AI solutions with clean code and steady progress",
  location: "Bhaktapur, Nepal",
  email: "tretime865@gmail.com",
  github: "https://github.com/dipenthapa7",
  linkedin: "https://www.linkedin.com/in/dipen-thapa-34073432b/",
  resumeUrl: "/resume.pdf", // Place your resume in public folder
};

// About Section
export const ABOUT_DATA = {
  description: `I am a BIT student at Model Institute of Technology (MIT), Kathmandu, Nepal, affiliated with IAU, USA, with a focus on AI, web development, and data science. I enjoy building modern applications and continuously improving my skills through practical projects.`,
  highlights: [
    "BIT student at Model Institute of Technology (MIT), Kathmandu",
    "Focused on AI, web development, and data science",
    "Building skills through practical projects and continuous learning",
    "Open to internships and collaborative projects",
  ],
  stats: [
    { label: "Projects", value: "1" },
    { label: "Technologies", value: "8+" },
    { label: "Certificates", value: "2" },
  ],
};

// Skills Section
export const SKILLS_DATA = {
  categories: [
    {
      title: "Programming Languages",
      icon: "Code",
      skills: [
        { name: "Python", level: 75 },
        { name: "Java", level: 65 },
        { name: "JavaScript", level: 60 },
        { name: "C++", level: 55 },
      ],
    },
    {
      title: "AI/ML & Data Science",
      icon: "Brain",
      skills: [
        { name: "TensorFlow", level: 60 },
        { name: "PyTorch", level: 55 },
        { name: "Scikit-learn", level: 70 },
        { name: "Pandas/NumPy", level: 75 },
      ],
    },
    {
      title: "Web Development",
      icon: "Globe",
      skills: [
        { name: "HTML/CSS", level: 80 },
        { name: "React", level: 55 },
        { name: "Node.js", level: 50 },
        { name: "Tailwind CSS", level: 65 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "Wrench",
      skills: [
        { name: "Git/GitHub", level: 70 },
        { name: "VS Code", level: 85 },
        { name: "Jupyter Notebook", level: 75 },
        { name: "Linux/Bash", level: 60 },
      ],
    },
  ],
};

// Projects Section
export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Nepal Air Quality Analysis",
    description:
      "Analyzed Nepal's estimated mean annual PM2.5 exposure from 1990 to 2023 using World Bank data and Python.",
    image:
      "https://raw.githubusercontent.com/dipenthapa7/Nepal-Air-Quality-Analysis/main/reports/figures/nepal_pm25_trend.png",
    techStack: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
    ],
    category: "Data Science",
    githubUrl:
      "https://github.com/dipenthapa7/Nepal-Air-Quality-Analysis",
    liveUrl: "",
    featured: true,
  },
];

// Certificates Section
export const CERTIFICATES_DATA = [
  {
    id: 1,
    name: "Python (Basic)",
    issuer: "HackerRank",
    date: "29 June 2026",
    credentialUrl:
      "https://www.hackerrank.com/certificates/c1f9e6ac26fe",
    image: "",
  },
  {
    id: 2,
    name: "Time Management",
    issuer: "Skill Lab — Career Service Lab",
    date: "6 June 2025",
    credentialUrl:
      "/certificates/time-management-skill-lab.pdf",
    image: "",
  },
];

// Navigation Links
export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  serviceId: "dipen_thapa7",
  templateId: "template_uql1kx7",
  publicKey: "GYppk2-MnjNkta6AA",
};
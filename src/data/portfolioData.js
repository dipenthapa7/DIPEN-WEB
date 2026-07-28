export const PROFILE_IMAGE =
  "https://customer-assets.emergentagent.com/job_dipen-aiml-portfolio/artifacts/8fpoe0kb_image.jpg";

export const PERSONAL_INFO = {
  name: "Dipen Thapa",
  shortName: "DT",
  role: "Python & Data Science Developer",
  location: "Bhaktapur, Nepal",
  email: "tretime865@gmail.com",
  github: "https://github.com/dipenthapa7",
  repositories: "https://github.com/dipenthapa7?tab=repositories",
  linkedin: "https://www.linkedin.com/in/dipen-thapa-34073432b/",
};

export const ABOUT_DATA = {
  description:
    "I’m a Bachelor of Information Technology student at Model Institute of Technology in Kathmandu. I learn by turning real datasets into clear, usable products—from cleaning data in Python to publishing an interactive dashboard people can explore.",
  approach:
    "Right now I’m strengthening my foundations in data analysis, visualization, and frontend development. I’m looking for internship opportunities where I can contribute, learn from experienced teams, and keep shipping practical work.",
  highlights: [
    { label: "Based in", value: "Bhaktapur, Nepal" },
    { label: "Current focus", value: "Python, data analysis & web" },
    { label: "Open to", value: "Internships & collaboration" },
  ],
  education: {
    degree: "Bachelor of Information Technology",
    institution: "Model Institute of Technology",
    affiliation: "Affiliated with International American University, USA",
    status: "Currently studying",
  },
};

export const CAPABILITIES_DATA = [
  {
    title: "Data analysis",
    description:
      "Cleaning, exploring, and interpreting real-world datasets with a reproducible Python workflow.",
    tools: ["Python", "Pandas", "Jupyter"],
    icon: "Database",
  },
  {
    title: "Data visualization",
    description:
      "Turning findings into clear charts and interactive dashboards that make trends easier to understand.",
    tools: ["Plotly", "Streamlit", "Matplotlib"],
    icon: "BarChart",
  },
  {
    title: "Frontend delivery",
    description:
      "Building responsive interfaces and publishing projects so the work is usable beyond a notebook.",
    tools: ["React", "Tailwind CSS", "GitHub"],
    icon: "Layout",
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    number: "01",
    title: "Nepal Air Quality Analysis",
    eyebrow: "Featured data project",
    description:
      "An end-to-end analysis of Nepal’s estimated mean annual PM2.5 exposure from 1990 to 2023, built with World Bank data and published as an interactive dashboard.",
    outcome:
      "The project turns more than three decades of data into a readable trend analysis with a public dashboard and documented source code.",
    image:
      "https://raw.githubusercontent.com/dipenthapa7/Nepal-Air-Quality-Analysis/main/reports/figures/nepal_pm25_trend.png",
    techStack: ["Python", "Pandas", "Plotly", "Streamlit", "Jupyter"],
    githubUrl:
      "https://github.com/dipenthapa7/Nepal-Air-Quality-Analysis",
    liveUrl: "https://nepal-air-quality-dipenthapa7.streamlit.app",
  },
];

export const CERTIFICATES_DATA = [
  {
    id: 1,
    name: "Python (Basic)",
    issuer: "HackerRank",
    date: "29 June 2026",
    credentialUrl: "https://www.hackerrank.com/certificates/c1f9e6ac26fe",
  },
  {
    id: 2,
    name: "Time Management",
    issuer: "Skill Lab — Career Service Lab",
    date: "6 June 2025",
    credentialUrl: "/certificates/time-management-skill-lab.pdf",
  },
];

export const NAV_LINKS = [
  { name: "Work", href: "#work" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "About", href: "#about" },
  { name: "Credentials", href: "#credentials" },
  { name: "Contact", href: "#contact" },
];

export const EMAILJS_CONFIG = {
  serviceId: "dipen_thapa7",
  templateId: "template_uql1kx7",
  publicKey: "GYppk2-MnjNkta6AA",
};

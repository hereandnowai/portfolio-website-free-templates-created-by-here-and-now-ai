/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              PORTFOLIO CONFIGURATION FILE                    ║
 * ║                                                              ║
 * ║  Edit this file to personalize your entire portfolio.        ║
 * ║  No need to touch HTML, CSS, or JS — everything is          ║
 * ║  driven from this single config.                             ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const CONFIG = {

  // ─── Personal Info ───────────────────────────────────────────
  name: "Adithya",
  title: "Full Stack Developer & UI Designer",
  tagline: "Building intelligent systems that bridge design and technology.",
  roles: ["Full Stack Developer", "UI/UX Designer", "AI Enthusiast", "Open Source Contributor"],

  about: {
    description: [
      "I'm a passionate developer based in India who thrives at the intersection of design and engineering. I build pixel-perfect, performant, and accessible digital experiences.",
      "With 5+ years of experience shipping products used by thousands, I specialize in crafting modern web applications and intelligent systems that solve real-world problems.",
      "Currently focused on building human-centered AI products at Here & Now AI."
    ],
    resumeUrl: "#",
    avatarUrl: ""  // Leave empty to use generated initials avatar
  },

  // ─── Social Links ───────────────────────────────────────────
  social: {
    github: "https://github.com/adithya",
    linkedin: "https://linkedin.com/in/adithya",
    twitter: "https://twitter.com/adithya",
    dribbble: "https://dribbble.com/adithya",
    email: "hello@adithya.dev"
  },

  // ─── Skills ─────────────────────────────────────────────────
  skills: [
    { name: "JavaScript / TypeScript", level: 95, icon: "⚡" },
    { name: "React / Next.js",         level: 90, icon: "⚛️" },
    { name: "Node.js / Express",       level: 88, icon: "🟢" },
    { name: "Python / AI-ML",          level: 85, icon: "🐍" },
    { name: "CSS / Tailwind",          level: 92, icon: "🎨" },
    { name: "PostgreSQL / MongoDB",    level: 80, icon: "🗄️" },
    { name: "Docker / DevOps",         level: 75, icon: "🐳" },
    { name: "Figma / UI Design",       level: 88, icon: "✏️" },
  ],

  // ─── Projects ───────────────────────────────────────────────
  projects: [
    {
      title: "Neural Canvas",
      description: "An AI-powered generative art platform that creates stunning visuals from text prompts. Built with WebGL shaders and a custom diffusion pipeline.",
      tech: ["JavaScript", "WebGL", "Python", "TensorFlow"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",  // Leave empty for auto-generated gradient card
      featured: true,
      category: "ai"
    },
    {
      title: "FlowState",
      description: "A productivity dashboard that adapts to your work patterns using ML. Features real-time collaboration, smart scheduling, and focus analytics.",
      tech: ["React", "Node.js", "PostgreSQL", "WebSockets"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: true,
      category: "web"
    },
    {
      title: "Synthwave UI",
      description: "A premium open-source component library with 200+ components, dark mode, animations, and full accessibility support.",
      tech: ["TypeScript", "CSS", "Storybook", "Figma"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: true,
      category: "design"
    },
    {
      title: "CloudDeploy CLI",
      description: "A zero-config deployment tool for modern web apps. Push to any cloud provider with a single command.",
      tech: ["Go", "Docker", "AWS", "CLI"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: false,
      category: "devtools"
    },
    {
      title: "DataPulse",
      description: "Real-time data visualization engine for IoT sensor networks. Handles millions of data points with smooth 60fps rendering.",
      tech: ["D3.js", "WebSockets", "Canvas API", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: false,
      category: "web"
    },
    {
      title: "PixelForge",
      description: "Browser-based image editor with AI-powered tools — background removal, style transfer, and intelligent cropping.",
      tech: ["Canvas API", "WASM", "TensorFlow.js", "React"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: false,
      category: "ai"
    }
  ],

  // ─── Experience / Timeline ──────────────────────────────────
  experience: [
    {
      role: "Lead Frontend Engineer",
      company: "Here & Now AI",
      period: "2024 — Present",
      description: "Leading the frontend architecture for AI-powered products. Building design systems and performance-critical interfaces.",
      tech: ["React", "TypeScript", "GSAP", "WebGL"]
    },
    {
      role: "Senior Full Stack Developer",
      company: "TechNova Labs",
      period: "2022 — 2024",
      description: "Architected and shipped 3 major SaaS products serving 50K+ users. Reduced load times by 60% through performance optimizations.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      role: "Frontend Developer",
      company: "DesignCraft Studio",
      period: "2020 — 2022",
      description: "Built interactive web experiences for premium brands. Specialized in animations, micro-interactions, and responsive design.",
      tech: ["JavaScript", "GSAP", "Three.js", "CSS"]
    },
    {
      role: "Freelance Developer & Designer",
      company: "Self-Employed",
      period: "2018 — 2020",
      description: "Delivered 30+ projects for startups and small businesses. Full design-to-deployment workflow.",
      tech: ["HTML/CSS", "JavaScript", "Figma", "WordPress"]
    }
  ],

  // ─── Theme Configuration ────────────────────────────────────
  theme: {
    // Primary accent color (buttons, links, highlights)
    primaryColor: "#6366F1",
    // Secondary accent for gradients
    secondaryColor: "#8B5CF6",
    // Accent for special highlights
    accentColor: "#EC4899",
    // Background colors
    bgPrimary: "#0B0D17",
    bgSecondary: "#111427",
    bgCard: "rgba(17, 20, 39, 0.7)",
    // Text colors
    textPrimary: "#E2E8F0",
    textSecondary: "#94A3B8",
    textMuted: "#475569",
    // Glass effect
    glassBg: "rgba(255, 255, 255, 0.03)",
    glassBorder: "rgba(255, 255, 255, 0.08)",
    // Border radius
    borderRadius: "16px",
    // Font
    fontFamily: "'Inter', sans-serif"
  },

  // ─── EmailJS (for contact form) ─────────────────────────────
  emailjs: {
    publicKey: "YOUR_PUBLIC_KEY",
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID"
  },

  // ─── Advanced Settings ──────────────────────────────────────
  settings: {
    enableParticles: true,
    enableCursorGlow: true,
    enableSmoothScroll: true,
    enablePreloader: true,
    enableSoundEffects: false,
    particleCount: 50,
    animationSpeed: 1,    // 0.5 = slow, 1 = normal, 2 = fast
  }
};


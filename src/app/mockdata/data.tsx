export type NavbarItem = {
  id: number;
  title: string;
  link: string;
  subContent?: {
    title: string;
    items: {
      name: string;
      href: string;
      description?: string;
    }[];
  }[];
};

export const NavbarMenu: NavbarItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Solutions",
    link: "/solutions",
    subContent: [
      {
        title: "Digital Growth",
        items: [
          { name: "Social Media Management", href: "/solutions/social-media" },
          { name: "SEO & Paid Ads", href: "/solutions/seo-ads" },
          { name: "Content Creation", href: "/solutions/content" },
        ],
      },
      {
        title: "Web & Tech",
        items: [
          { name: "Website Design", href: "/solutions/web-design" },
          { name: "Custom Development", href: "/solutions/development" },
          { name: "Mobile Apps", href: "/solutions/apps" },
        ],
      },
      {
        title: "Branding",
        items: [
          { name: "Brand Strategy", href: "/solutions/branding" },
          { name: "Identity & Logo", href: "/solutions/identity" },
          { name: "Creative Design", href: "/solutions/creative" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 6,
    title: "Contact Us",
    link: "/contact",
  },
];

export type ServiceDetailItem = {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  isVideo: boolean;
  benefits: { title: string; desc: string }[];
  features: string[];
  process: { step: string; title: string; desc: string }[];
  tools: string[];
};

export const ServiceDetails: Record<string, ServiceDetailItem> = {
  "social-media": {
    title: "Social Media Management",
    subtitle: "Build a Cult-Like Following",
    description: "In the noisy digital landscape, attention is currency. We don't just post; we perform. Our data-driven strategies amplify your brand voice, turning casual scrollers into loyal advocates.",
    heroImage: "/assets/smedia1.mp4",
    isVideo: true,
    benefits: [
      { title: "Virality Engineered", desc: "Content designed to be shared, saved, and talked about." },
      { title: "Community First", desc: "Deep engagement strategies that build real relationships." },
      { title: "Data-Backed", desc: "Real-time analytics to refine and perfect every campaign." },
      { title: "Brand Consistency", desc: "A unified voice across all platforms, 24/7." }
    ],
    features: ["Content Calendar Management", "Influencer Collaborations", "Community Moderation", "Monthly Performance Reports", "Trend Analysis"],
    process: [
      { step: "01", title: "Audit & Strategy", desc: "We analyze your current footprint and define your unique voice." },
      { step: "02", title: "Content Production", desc: "Creating high-fidelity visuals and copy that stops the scroll." },
      { step: "03", title: "Distribution", desc: "Strategic posting times and cross-platform syndication." },
      { step: "04", title: "Growth & Optimization", desc: "Continuous tweaking based on engagement metrics." }
    ],
    tools: ["Instagram", "TikTok", "LinkedIn", "Meta Business Suite", "Buffer", "Canva", "CapCut"]
  },
  "seo-ads": {
    title: "SEO & Paid Ads",
    subtitle: "Dominate the Search Engine",
    description: "Being found is half the battle. We combine technical SEO wizardry with laser-focused PPC campaigns to ensure you're not just visible—you're undeniable.",
    heroImage: "/assets/emerge.jpg",
    isVideo: false,
    benefits: [
      { title: "Top Ranking", desc: "Climb the SERPs and stay there with white-hat SEO." },
      { title: "High ROI", desc: "Ad spend optimization that maximizes every dollar." },
      { title: "Targeted Traffic", desc: "Attract users who are ready to buy, not just browse." },
      { title: "Transparent Reporting", desc: "Know exactly where your traffic and leads come from." }
    ],
    features: ["Keyword Research", "On-Page & Off-Page SEO", "Google Ads Management", "Social Media Advertising", "Conversion Rate Optimization"],
    process: [
      { step: "01", title: "Keyword Analysis", desc: "Identifying high-value search terms your competitors missed." },
      { step: "02", title: "Technical Optimization", desc: "Fixing site speed, structure, and metadata." },
      { step: "03", title: "Campaign Launch", desc: "Setting up targeted ad sets with compelling copy." },
      { step: "04", title: "Monitor & Scale", desc: "Adjusting bids and strategies for maximum performance." }
    ],
    tools: ["Google Analytics 4", "SEMrush", "Ahrefs", "Google Ads", "Meta Ads Manager", "Google Search Console"]
  },
  "content": {
    title: "Content Creation",
    subtitle: "Stories That Sell",
    description: "Content is the bridge between your brand and your audience. We craft compelling narratives, stunning visuals, and persuasive copy that resonates on a human level.",
    heroImage: "/assets/smedia3.mp4",
    isVideo: true,
    benefits: [
      { title: "Visual Mastery", desc: "Cinema-grade video and photography production." },
      { title: "Voice Authority", desc: "Copy that positions you as the industry leader." },
      { title: "Multi-Format", desc: "From reels to blogs, we cover every medium." },
      { title: "Engagement Focused", desc: "Assets built to drive interaction and sharing." }
    ],
    features: ["Video Production", "Professional Photography", "Copywriting & Blogging", "Infographics & Motion Design", "Scriptwriting"],
    process: [
      { step: "01", title: "Concepting", desc: "Brainstorming ideas that align with your brand goals." },
      { step: "02", title: "Production", desc: "Shooting, writing, and designing with top-tier talent." },
      { step: "03", title: "Post-Production", desc: "Editing, polishing, and perfecting the final output." },
      { step: "04", title: "Delivery", desc: "Ready-to-use assets optimized for every platform." }
    ],
    tools: ["Adobe Premiere Pro", "After Effects", "Sony Alpha Cameras", "DaVinci Resolve", "Lightroom", "Audition"]
  },
  "web-design": {
    title: "Website Design & Development",
    subtitle: "Digital Real Estate Reimagined",
    description: "Your website is your digital HQ. We blend immersive, user-centric design with robust front-end development to create flawless digital experiences that convert.",
    heroImage: "/assets/ux.jpg",
    isVideo: false,
    benefits: [
      { title: "User Centric", desc: "Designs rooted in empathy and user behavior analysis." },
      { title: "Pixel Perfect Dev", desc: "Clean, semantic code that brings designs to life flawlessly." },
      { title: "Conversion Optimized", desc: "Layouts that guide visitors toward taking action." },
      { title: "Brand Aligned", desc: "Visuals that perfectly reflect your brand identity." }
    ],
    features: ["UI/UX Design", "Responsive Web Development", "Interactive Prototyping", "Design Systems", "CMS Integration (WordPress/Webflow)"],
    process: [
      { step: "01", title: "Discovery", desc: "Understanding your users and business objectives." },
      { step: "02", title: "Wireframing", desc: "Mapping out the user journey and site structure." },
      { step: "03", title: "Visual Design", desc: "Applying color, typography, and style." },
      { step: "04", title: "Development", desc: "Coding the site with modern frameworks." }
    ],
    tools: ["Figma", "Adobe XD", "React", "Next.js", "Tailwind CSS", "Webflow", "WordPress"]
  },
  "development": {
    title: "Custom Development",
    subtitle: "Code That Scales",
    description: "Off-the-shelf solutions have limits; we don't. Our engineering team builds robust, scalable, and secure software tailored to your specific operational needs.",
    heroImage: "/assets/web2.mp4",
    isVideo: true,
    benefits: [
      { title: "Scalability", desc: "Architectures built to grow with your business." },
      { title: "Security", desc: "Enterprise-grade protection for your data." },
      { title: "Performance", desc: "Blazing fast load times and optimized code." },
      { title: "Reliability", desc: "Systems you can count on, 24/7." }
    ],
    features: ["Full-Stack Development", "API Integration", "Cloud Infrastructure", "SaaS Development", "Database Management"],
    process: [
      { step: "01", title: "Architecture", desc: "Planning the tech stack and database schema." },
      { step: "02", title: "Development", desc: "Agile coding sprints with regular updates." },
      { step: "03", title: "QA Testing", desc: "Rigorous bug hunting and performance testing." },
      { step: "04", title: "Deployment", desc: "Seamless launch and ongoing maintenance." }
    ],
    tools: ["Node.js", "Python", "PostgreSQL", "Docker", "AWS", "Google Cloud", "GraphQL"]
  },
  "apps": {
    title: "Mobile Apps",
    subtitle: "Innovation in Your Pocket",
    description: "Capture the mobile market with intuitive, high-performance applications. We build native and cross-platform apps that users love to open again and again.",
    heroImage: "/assets/addapp.jpg",
    isVideo: false,
    benefits: [
      { title: "Native Feel", desc: "Smooth animations and intuitive gestures." },
      { title: "Cross-Platform", desc: "Reach iOS and Android users simultaneously." },
      { title: "Offline Capable", desc: "Functionality that works even without internet." },
      { title: "Push Notifications", desc: "Direct engagement channel to your users." }
    ],
    features: ["iOS & Android App Dev", "React Native Solutions", "App Store Optimization", "User Onboarding Flows", "In-App Purchases"],
    process: [
      { step: "01", title: "Prototype", desc: "Clickable models to validate the concept." },
      { step: "02", title: "Build", desc: "Coding the core functionality and UI." },
      { step: "03", title: "Test", desc: "Beta testing with real users." },
      { step: "04", title: "Launch", desc: "Submission to App Store and Google Play." }
    ],
    tools: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"]
  },
  "branding": {
    title: "Brand Strategy",
    subtitle: "The Soul of Your Business",
    description: "A logo is not a brand. We help you define your purpose, positioning, and personality, creating a strategic foundation that guides every business decision.",
    heroImage: "/assets/smedia4.mp4",
    isVideo: true,
    benefits: [
      { title: "Clarity", desc: "A clear direction for your business growth." },
      { title: "Differentiation", desc: "Stand out in a crowded marketplace." },
      { title: "Loyalty", desc: "Connect emotionally with your target audience." },
      { title: "Value", desc: "Increase perceived value and pricing power." }
    ],
    features: ["Market Research", "Competitor Analysis", "Brand Positioning", "Voice & Tone Guidelines", "Brand Architecture"],
    process: [
      { step: "01", title: "Research", desc: "Deep dive into your market and audience." },
      { step: "02", title: "Strategy", desc: "Defining the core pillars of your brand." },
      { step: "03", title: "Articulation", desc: "Crafting your mission, vision, and tagline." },
      { step: "04", title: "Implementation", desc: "Applying the strategy across all touchpoints." }
    ],
    tools: ["Semrush (Market Research)", "Google Trends", "Miro", "Notion", "Brand Archetypes"]
  },
  "identity": {
    title: "Identity & Logo",
    subtitle: "Visualizing Your Essence",
    description: "We craft distinct visual identities that tell your story at a glance. From logos to color palettes, we ensure you look as professional as you are.",
    heroImage: "/assets/about2.jpg",
    isVideo: false,
    benefits: [
      { title: "Recognition", desc: "Instant visual recall for your brand." },
      { title: "Professionalism", desc: "Build trust with a polished look." },
      { title: "Versatility", desc: "Assets that look great on any medium." },
      { title: "Timelessness", desc: "Designs that withstand trends." }
    ],
    features: ["Logo Design", "Color Palette Development", "Typography Selection", "Iconography", "Brand Books"],
    process: [
      { step: "01", title: "Exploration", desc: "Gathering inspiration andmoodboarding." },
      { step: "02", title: "Sketching", desc: "Iterating on concepts and directions." },
      { step: "03", title: "Refinement", desc: "Digitizing and polishing the best concepts." },
      { step: "04", title: "Guidelines", desc: "Creating a manual for consistent usage." }
    ],
    tools: ["Adobe Illustrator", "Procreate", "Figma", "Pantone Connect"]
  },
  "creative": {
    title: "Creative Design",
    subtitle: "Art with a Purpose",
    description: "Whether it's print, packaging, or digital graphics, we create stunning visuals that capture attention and communicate your message effectively.",
    heroImage: "/assets/digitalmarketing.png",
    isVideo: false,
    benefits: [
      { title: "Impact", desc: "Visuals that demand attention." },
      { title: "Communication", desc: "Complex ideas made simple through design." },
      { title: "Aesthetics", desc: "Beautiful designs that elevate your brand." },
      { title: "Consistency", desc: "Uniform look across all marketing materials." }
    ],
    features: ["Marketing Collateral", "Packaging Design", "Illustration", "Print Design", "Presentation Decks"],
    process: [
      { step: "01", title: "Brief", desc: "Understanding the goal and specs." },
      { step: "02", title: "Concept", desc: "Developing visual directions." },
      { step: "03", title: "Design", desc: "Executing the creative vision." },
      { step: "04", title: "Production", desc: "Prepping files for print or digital use." }
    ],
    tools: ["Adobe Photoshop", "Adobe InDesign", "Blender 3D", "Midjourney (AI Ideation)"]
  },
};

export const hero = {
  eyebrow: "Software · Web · Mobile · AI",
  headline: { before: "Ideas, engineered into products that ", accent: "perform", after: "." },
  lead:
    "Avid Tech Services designs and builds custom software, web platforms, and mobile apps for teams who need to move fast without breaking what matters — from first sketch to production scale.",
  rating: { score: "4.9/5", caption: "Average client rating across delivered engagements" },
  intake: [
    { label: "Discovery call", value: "~30 min", live: true },
    { label: "Proposal & scope", value: "1–2 days", live: false },
    { label: "Team assembled", value: "1 week", live: false },
    { label: "Engagement model", value: "Staff Aug · Dedicated · Fixed", live: false },
  ],
  intakeFoot:
    "No pressure, no obligation. We'll tell you honestly if we're not the right fit for your project.",
};

export const clients = [
  { name: "Baliston Health", src: "/img/brands/baliston.webp" },
  { name: "Cognito", src: "/img/brands/cognito.webp" },
  { name: "Consolidated Utilities Inc.", src: "/img/brands/consolidated.webp" },
  { name: "IELTSGRADER", src: "/img/brands/ieltsgrader.webp" },
  { name: "Un Millón De Predicadores", src: "/img/brands/un-millon-de.webp" },
];

export const services = {
  eyebrow: "What we offer",
  title: "Engineering that moves your roadmap forward, not just your backlog",
  side:
    "We pair technology consulting with hands-on delivery — cloud, AI, and enterprise software built to hold up under real usage.",
  items: [
    {
      icon: "code" as const,
      title: "Custom Software Development",
      body: "Purpose-built systems designed around how your business actually operates, not a one-size template.",
    },
    {
      icon: "browser" as const,
      title: "Web App Development",
      body: "Fast, accessible web platforms built on modern frameworks and engineered to scale with demand.",
    },
    {
      icon: "phone" as const,
      title: "Mobile App Development",
      body: "Native and cross-platform apps for iOS and Android, tuned for performance on real devices.",
    },
    {
      icon: "sun" as const,
      title: "UI/UX Design",
      body: "Interfaces shaped by research and iteration, so the product feels obvious the first time someone opens it.",
    },
    {
      icon: "window" as const,
      title: "Enterprise Solutions",
      body: "Internal tools and integrations that connect the systems your teams rely on every day.",
    },
    {
      icon: "bulb" as const,
      title: "AI & Machine Learning",
      body: "Applied ML — from recommendation engines to internal copilots — grounded in your actual data.",
    },
    {
      icon: "blocks" as const,
      title: "Blockchain Development",
      body: "Smart contracts and decentralized infrastructure built with security as the first requirement.",
    },
    {
      icon: "cloud" as const,
      title: "DevOps & CloudOps",
      body: "CI/CD, infrastructure as code, and observability so releases stop being an event.",
    },
    {
      icon: "checkCircle" as const,
      title: "Quality Assurance & Testing",
      body: "Manual and automated testing that catches regressions before your users do.",
    },
  ],
  footNote: "Looking for something specific? Let's talk through a custom solution.",
};

export const stats = {
  eyebrow: "Impact that speaks for itself",
  title: "From first release to industry impact, one build at a time",
  items: [
    {
      value: 9,
      suffix: "+",
      label: "Years of experience",
      body: "Building custom software across startups and established enterprises.",
    },
    {
      value: 92,
      suffix: "%",
      label: "Client retention rate",
      body: "Most engagements turn into long-term partnerships, not one-off projects.",
    },
    {
      value: 180,
      suffix: "+",
      label: "Projects delivered",
      body: "Shipped across e-commerce, fintech, healthcare, and beyond.",
    },
  ],
};

export const industries = {
  eyebrow: "Industries we serve",
  title: "Domain-aware teams, not generalists guessing at your business",
  side:
    "Every sector has its own compliance rules, edge cases, and users. We staff engagements with people who've shipped in that world before.",
  items: [
    {
      name: "E-Commerce",
      points: [
        "AI-powered recommendation engines",
        "Omnichannel retail integration",
        "Custom payment gateway integration",
        "Product catalog management & sync",
        "Customer loyalty program integration",
      ],
    },
    {
      name: "FinTech",
      points: [
        "Regulatory compliance solutions",
        "Real-time fraud detection systems",
        "Digital wallets & payment rails",
        "Blockchain-secured transaction ledgers",
        "Peer-to-peer lending platforms",
      ],
    },
    {
      name: "Healthcare",
      points: [
        "EHR system integration",
        "Telemedicine platform development",
        "Patient data analytics",
        "Appointment scheduling systems",
        "Medical billing & coding software",
      ],
    },
    {
      name: "EdTech",
      points: [
        "Custom LMS development",
        "Interactive e-learning tools",
        "Virtual classroom integration",
        "Student performance tracking",
        "Gamified learning experiences",
      ],
    },
    {
      name: "Food & Groceries",
      points: [
        "Grocery delivery app development",
        "Supply chain optimization",
        "Real-time order tracking",
        "Inventory management systems",
        "Dynamic pricing for perishables",
      ],
    },
    {
      name: "Real Estate",
      points: [
        "Property listing platforms",
        "Real estate CRM integration",
        "Virtual property tours",
        "Transaction management systems",
        "Real-time property valuation tools",
      ],
    },
    {
      name: "Blockchain & Web3",
      points: [
        "Smart contract development",
        "Decentralized finance platforms",
        "Tokenization platforms",
        "Private blockchain solutions",
        "On-chain identity verification",
      ],
    },
    {
      name: "On-Demand Services",
      points: [
        "Service booking apps",
        "Subscription-based platforms",
        "Real-time delivery tracking",
        "On-demand ride-sharing solutions",
        "Provider dispatch & routing",
      ],
    },
  ],
};

export const engagement = {
  eyebrow: "Engagement models",
  title: "Three ways to work with us, one point of accountability",
  side:
    "Pick the model that matches how your team is structured today — we'll adjust as the project evolves.",
  items: [
    {
      index: "01",
      kicker: "Staff Augmentation",
      title: "Extend your team",
      body: "Add vetted developers and specialists directly into your existing workflow, without the hiring cycle.",
      points: [
        "On-demand access to expert talent across stacks",
        "Seamless integration with your tools & rituals",
        "Scale up or down as deadlines shift",
      ],
    },
    {
      index: "02",
      kicker: "Product Development",
      title: "Ship the whole product",
      body: "End-to-end engineering from a rough idea to a launched, market-ready release.",
      points: [
        "Strategic roadmap before a line of code",
        "MVP-first, risk-checked validation",
        "Agile delivery with weekly visibility",
      ],
    },
    {
      index: "03",
      kicker: "Dedicated Teams",
      title: "Hand off with confidence",
      body: "A fully managed team aligned to your goals, owning outcomes rather than tickets.",
      points: [
        "End-to-end ownership with measurable outcomes",
        "Deep integration with your culture",
        "Long-term partnership, not a handoff",
      ],
    },
  ],
};

export const work = {
  eyebrow: "Selected work",
  title: "Real products we've designed, built, and shipped",
  side: "A few of the platforms and storefronts we've taken from idea to launch, end to end.",
  items: [
    {
      tag: "EdTech",
      image: "/img/work/ieltsgrader.webp",
      title: "AI-powered IELTS coaching platform",
      body: "Custom-designed and developed for IELTSGRADER — an AI tutor that scores Writing and Speaking practice against real IELTS criteria, with sentence-level corrections and progress tracking across attempts.",
      href: "https://www.ieltsgrader.com/",
      hrefLabel: "ieltsgrader.com",
    },
    {
      tag: "WordPress",
      image: "/img/work/awakening.webp",
      title: "Full website revamp for a global coaching brand",
      body: "Rebuilt Awakening Education's site on a custom WordPress theme — bringing coaching programs, media, and retreats together in one cohesive brand experience for their worldwide audience.",
      href: "https://awakening.education/",
      hrefLabel: "awakening.education",
    },
    {
      tag: "Shopify",
      image: "/img/work/kostdeco.webp",
      title: "Custom Shopify store for a composite fencing specialist",
      body: "Designed and built Kost Deco's Shopify store from scratch — a catalog-driven storefront for WPC garden fencing serving homeowners, contractors, and developers across the Netherlands and Belgium.",
      href: "https://kostdeco.com/",
      hrefLabel: "kostdeco.com",
    },
  ],
};

export const stack = {
  eyebrow: "Staff Augmentation",
  title: "Shape a team fluent in the stack your product actually runs on",
  desc: "Eight technology categories, vetted specialists in each — add exactly the skill set your roadmap needs next.",
  ctaCount: 120,
  ctaCopy: "Technology stack expertise & custom integrations experience",
};

export const why = {
  eyebrow: "Why teams choose Avid",
  title: "Fewer surprises, clearer communication, code you can actually maintain",
  side: "The details that matter once the contract is signed and the work actually starts.",
  items: [
    {
      title: "Senior engineers only",
      body: "No bench-warming juniors learning on your budget — every engineer has shipped production systems before.",
    },
    {
      title: "Direct communication",
      body: "You talk to the people building your product, not a relay of account managers.",
    },
    {
      title: "NDA on request",
      body: "Sign before we start, or before we even discuss specifics — just ask.",
    },
    {
      title: "24-hour response",
      body: "Sales, support, or a random question at 11pm — you'll hear back within a day.",
    },
  ],
};

export const contact = {
  eyebrow: "Send us a message",
  title: "Tell us about your project, your team, and your timeline",
  points: [
    {
      icon: "mail" as const,
      title: "hello@avidtechservices.com",
      body: "For new project inquiries and general questions.",
    },
    {
      icon: "clock" as const,
      title: "We respond within 24 hours",
      body: "Fast, focused replies — no automated runaround.",
    },
    {
      icon: "shield" as const,
      title: "NDA? Absolutely, just ask.",
      body: "We're comfortable signing before discussing any specifics.",
    },
  ],
  stacks: [
    "Node.js",
    "Python",
    "React JS (TypeScript)",
    "Next.js",
    "Flutter",
    "React Native",
    "AI / ML Engineering",
    "Other custom work",
  ],
  engagements: ["Staff Augmentation", "Dedicated Team", "Fixed Project"],
};

export const footer = {
  blurb:
    "We help businesses scale and stay competitive with cloud, AI, software, and thoughtful engineering.",
  columns: [
    {
      title: "Services",
      links: [
        ["Custom Software", "#services"],
        ["Web Development", "#services"],
        ["Mobile Development", "#services"],
        ["UI/UX Design", "#services"],
        ["AI & ML", "#services"],
      ],
    },
    {
      title: "Industries",
      links: [
        ["E-Commerce", "#industries"],
        ["FinTech", "#industries"],
        ["Healthcare", "#industries"],
        ["EdTech", "#industries"],
        ["Real Estate", "#industries"],
      ],
    },
    {
      title: "Company",
      links: [
        ["About Us", "#top"],
        ["Work Portfolio", "#work"],
        ["Careers", "#stack"],
        ["Contact Us", "#contact"],
      ],
    },
    {
      title: "Hire Devs",
      links: [
        ["Python Developer", "#stack"],
        ["React Developer", "#stack"],
        ["Flutter Developer", "#stack"],
        ["Node.js Developer", "#stack"],
      ],
    },
  ] satisfies { title: string; links: [string, string][] }[],
};

import type { ProjectEntry } from "../types";

export const projects: ProjectEntry[] = [
  {
    name: "Anomali",
    tagline: "AI-driven SOC pipeline — ThreatStream & Agent Platform",
    duration: "Apr 2026 – Sep 2026",
    description:
      "A multi-agent investigation pipeline for security operations. Specialized agents enrich and assess alerts, correlate incidents into cases, and produce evidence-backed reports while preserving analyst review at critical decisions.",
    stack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "MCP",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "AWS (EKS, EC2)",
      "Docker",
      "ReportLab",
    ],
    highlights: [
      "Designed the alert → incident → case architecture and its real-time, human-in-the-loop execution model.",
      "Built the multi-agent orchestration system on LangGraph — WebSocket ingress, orchestrator routing, and parallel ReAct subagents (Threat Intel, Payload, Identity, Enterprise Context) on a FastAPI + PostgreSQL backend with async SQLAlchemy and real-time streaming.",
      "Integrated MCP tooling (ThreatStream MCP, Google Workspace MCP via langchain-mcp-adapters) to extend agent capabilities.",
      "Drove ThreatStream IOC enrichment work and built intelligence dashboards visualizing 100+ IOC records.",
      "Set up and debugged AWS/EKS staging infrastructure and diagnosed a production data discrepancy with a documented root-cause report.",
    ],
  },
  {
    name: "FlameCart",
    tagline: "Full-stack e-commerce monorepo — storefront, dashboard, API",
    duration: "2026 – 2026",
    links: [
      { label: "Store", url: "https://minimalstore-phi.vercel.app/" },
      { label: "Dashboard", url: "https://material-template-rho.vercel.app/" },
    ],
    description:
      "A personal proof-of-concept split into three independently deployable apps sharing one API: a Next.js storefront, a React admin dashboard, and an Express/Drizzle backend — built to explore a modern, type-safe full-stack architecture end to end, from schema and migrations to a data-dense admin UI.",
    stack: [
      "TypeScript",
      "Express",
      "Drizzle ORM",
      "PostgreSQL",
      "React 19",
      "TanStack Router",
      "TanStack Query",
      "shadcn/ui",
      "Next.js",
      "Tailwind CSS",
    ],
    highlights: [
      "Designed a three-app monorepo (backend, dashboard, store) with independent deploys sharing one PostgreSQL schema via Drizzle ORM.",
      "Built the admin dashboard on React 19, TanStack Router/Query/Table, and shadcn/ui — revenue and order metrics, category and payment-method breakdowns, and product/order management.",
      "Built the Express + TypeScript API with Drizzle migrations, authentication, and Cloudinary-backed media uploads.",
      "Built the Next.js 16 storefront on a shared shadcn/ui component layer and Tailwind v4.",
    ],
  },
  {
    name: "Dhruvo",
    tagline: "Real-time AI voice calling pipeline",
    duration: "2025 – 2025",
    description:
      "A production-minded voice pipeline that connects an AI agent to real inbound and outbound phone calls. Asterisk handles SIP routing, LiveKit carries live media, and the reasoning loop manages interruptions and turn-taking.",
    stack: ["LLM", "Asterisk", "LiveKit", "Python", "WebSockets"],
    highlights: [
      "Built the telephony bridge and tuned the end-to-end path for natural, low-latency conversation.",
      "Integrated LiveKit for real-time WebRTC audio streaming between the live call and the AI agent.",
      "Designed the conversational reasoning loop for natural turn-taking and mid-call interruptions.",
      "Tuned the pipeline end-to-end for low-latency, production-grade voice response.",
    ],
  },
  {
    name: "NeuraFlow",
    tagline: "No-code AI agent builder",
    duration: "2025 – 2026",
    description:
      "A visual system for composing agent workflows as graphs and deploying the same definition across web chat, WhatsApp, Microsoft Teams, Slack, and SMS.",
    stack: [
      "LangGraph",
      "LangChain",
      "React",
      "Node.js",
      "WhatsApp",
      "Microsoft Teams",
      "Slack",
      "SMS",
    ],
    highlights: [
      "Designed the graph-based builder and a channel-agnostic runtime shared by five delivery surfaces.",
      "Designed a channel-agnostic agent runtime so one definition deploys unchanged across five channels.",
      "Implemented the multi-channel integration layer connecting the runtime to each platform's messaging API.",
    ],
  },
  {
    name: "CAD",
    tagline: "Voice-driven web assistant",
    duration: "Jun 2025 – Sep 2025",
    description:
      "A voice interface that translates natural-language intent into safe, structured browser actions such as creating events, completing forms, and managing tasks.",
    stack: ["OpenAI", "LangChain", "Redis", "Web Speech API", "Node.js", "React"],
    highlights: [
      "Designed the intent-to-action pipeline, session model, and low-latency voice interaction end to end.",
      "Implemented real-time voice recognition with the Web Speech API.",
      "Managed session and conversation state with Redis for low-latency interactions.",
      "Built the React frontend delivering seamless voice-guided navigation.",
    ],
  },
  {
    name: "Nissan Drivers Guide — Qashqai 2025",
    tagline: "Digital owner's manual with a grounded AI chatbot",
    duration: "Mar 2025 – Jul 2025",
    url: "https://poc.cmcge-converters.eu",
    description:
      "A digital vehicle manual with grounded conversational search and an interactive 3D viewer. Answers are constrained to approved manual content because incorrect guidance has physical-world consequences.",
    stack: [
      "AI/NLP",
      "Three.js",
      "FastAPI",
      "PostgreSQL",
      "AWS",
      "LangChain",
      "LangGraph",
      "Redis",
    ],
    highlights: [
      "Led architecture through deployment and built the retrieval workflow to keep responses grounded.",
      "Built a retrieval-grounded chatbot with a think-plan-execute loop to keep answers accurate and hallucination-free.",
      "Implemented keyword-based search across the manual.",
      "Incorporated an interactive Three.js 3D vehicle viewer with an optimized FastAPI + PostgreSQL backend.",
    ],
  },
  {
    name: "UpendNow",
    tagline: "AI pre-production pipeline for content creators",
    duration: "Oct 2024 – Mar 2025",
    url: "https://upendnow.xyz",
    description:
      "A serverless pre-production workflow that turns a creative brief into scripts, storyboards, and concept imagery by coordinating multiple generative models on AWS.",
    stack: ["OpenAI", "Midjourney", "Node.js", "Serverless", "AWS"],
    highlights: [
      "Owned the serverless architecture and model integrations, improving pipeline efficiency by more than 20%.",
      "Directed project lifecycle for a cross-functional team, delivering core features ahead of schedule.",
      "Engineered API integrations embedding OpenAI and Midjourney workflows, improving system efficiency 20%+.",
    ],
  },
  {
    name: "Nissan Drivers Guide Me",
    tagline: "Digital asset management dashboard",
    duration: "May 2024 – Oct 2024",
    url: "https://app.nmef.xyz",
    description:
      "A management dashboard and backend for an automobile company to organize and publish the digital assets powering their companion app — AR content, EPUB manuals, images, and PDFs — from a single admin interface, with a caching strategy balancing fast asset delivery against a simple content workflow.",
    stack: ["Node.js", "Next.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Built the management dashboard and backend using Next.js, NestJS, and PostgreSQL.",
      "Developed asset-management workflows for AR content, EPUB, images, and PDFs.",
      "Implemented caching strategies to optimize performance and content delivery.",
    ],
  },
  {
    name: "Medilynq",
    tagline: "Cardiac monitoring reporting platform",
    duration: "Apr 2023 – Oct 2023",
    url: "https://app.medilynq.com",
    description:
      "A web-based system for clinics doing cardiovascular (ECG/Holter) monitoring, turning raw cardiac signal data into interpretable, shareable clinical reports through workflows built to fit a fast-paced clinical setting.",
    stack: ["Node.js", "MongoDB", "React"],
    highlights: [
      "Spearheaded full-stack development of the platform.",
      "Built signal-analysis and report-generation workflows for clinical use cases.",
      "Designed an interface enabling medical professionals to interpret cardio signals efficiently.",
    ],
  },
  {
    name: "Fitsomnia",
    tagline: "Social fitness platform, async media pipeline",
    duration: "Dec 2022 – Apr 2023",
    url: "https://fitsomnia.com",
    description:
      "A social fitness platform where the backend had to keep up with growing user-generated photo and video content. Moved image and video processing off the request path into an asynchronous serverless pipeline using Python and OpenCV, with Amazon S3 handling storage at scale — a 30% performance improvement.",
    stack: ["OpenCV", "AWS Lambda", "Amazon S3"],
    highlights: [
      "Implemented a serverless Lambda function in Python to process images and videos asynchronously.",
      "Transitioned processing from synchronous to asynchronous, improving performance by 30%.",
      "Used OpenCV for media processing and S3 for scalable storage.",
    ],
  },
  {
    name: "Cubenationshop",
    tagline: "High-traffic e-commerce for a speedcubing store",
    duration: "May 2022 – Dec 2022",
    url: "https://cubenationshop.com",
    description:
      "An e-commerce platform for CubeNation, one of Bangladesh's largest speedcubing and puzzle stores, built to handle high traffic and fast page loads, including a dedicated React.js admin panel and an Elasticsearch-backed search system.",
    stack: [
      "React.js",
      "Next.js",
      "Nest.js",
      "MongoDB",
      "Tailwind CSS",
      "Elasticsearch",
    ],
    highlights: [
      "Designed the project infrastructure to be scalable and efficient for high-traffic loads.",
      "Developed the storefront with Next.js and Tailwind CSS, plus a dedicated React.js admin panel.",
      "Implemented RESTful backend APIs and an Elasticsearch-based search system.",
      "Resolved critical business logic issues and conducted code reviews to maintain quality.",
    ],
  },
  {
    name: "Stayy",
    tagline: "Accommodation booking through trusted networks",
    duration: "2023",
    description:
      "A platform for booking private accommodations through trusted friends and family rather than anonymous listings, built directly from evolving client requirements with continuous delivery via CI/CD.",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Nest.js",
      "Postgres",
      "Material UI",
      "Tailwind CSS",
      "AWS Cognito",
      "AWS S3",
      "Amazon EC2",
      "Elastic Beanstalk",
      "CodePipeline",
      "CodeBuild",
    ],
    highlights: [
      "Designed and built the UI using Next.js and Tailwind CSS based on direct client requirements.",
      "Implemented authentication using AWS Cognito and a fully RESTful API with Nest.js.",
      "Deployed on AWS (EC2, S3, Elastic Beanstalk) with CI/CD via CodePipeline, CodeBuild, and GitHub workflows.",
    ],
  },
];

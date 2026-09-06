import type { SkillGroup } from "../types";

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["C/C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    label: "AI / Agentic Frameworks",
    items: [
      "LangChain",
      "LangGraph",
      "DeepAgent",
      "MCP",
      "OpenAI API",
      "RAG",
      "Prompt Engineering",
    ],
  },
  {
    label: "Voice / Telephony",
    items: ["LiveKit (WebRTC)", "Asterisk (SIP)", "Web Speech API"],
  },
  {
    label: "AWS",
    items: [
      "Lambda",
      "Cognito",
      "S3",
      "EC2",
      "Elastic Beanstalk",
      "CodePipeline",
      "CodeBuild",
      "EKS",
    ],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React", "Next.js", "Express", "Nest.js", "FastAPI", "Serverless Framework"],
  },
  {
    label: "Databases",
    items: ["MySQL", "Redis", "MongoDB", "PostgreSQL"],
  },
  {
    label: "Tools",
    items: ["Git", "Jira", "VS Code", "Docker"],
  },
];

export const areasOfInterest = [
  "Distributed Systems",
  "System Design",
  "Cloud Computing",
];

export const profile = {
  name: "Shubham Tiwari",
  role: "Solutions Architect",
  tagline:
    "Building AI-powered applications and scalable cloud infrastructure with 8+ years in the IT industry.",
  summary:
    "A result-oriented, proactive, and creative Solutions Architect with highly developed problem-solving skills and cloud infrastructure management expertise. Specializing in building AI-powered applications using Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI agents, and prompt engineering. With 8+ years in the IT industry, I concentrate on building and managing scalable, cost-effective cloud infrastructure. Experienced in developing scalable AI systems using Python, FastAPI/Node.js, vector databases, and cloud platforms such as AWS and Azure.",
  location: "India · Remote worldwide",
  email: "npm.init.y@gmail.com",
  phone: "(+91) 8299105012",
  availability: "Available for engagements",
  socials: [
    { label: "GitHub", href: "https://github.com/lockround" },
    { label: "LinkedIn", href: "https://linkedin.com/in/lockround" },
    { label: "X / Twitter", href: "https://x.com/lockround" },
    { label: "Email", href: "mailto:npm.init.y@gmail.com" },
  ],
};

export const stats = [
  { value: "8+", label: "Years in the IT industry" },
  { value: "4+", label: "Cloud platforms managed" },
  { value: "2x", label: "API performance improvements delivered" },
  { value: "100%", label: "Uptime in production deployments" },
];

export const expertise = [
  {
    title: "AI & LLM Applications",
    description:
      "Building AI-powered systems with Large Language Models, RAG pipelines, AI agents, and prompt engineering for enterprise-grade applications.",
    tags: ["LLMs", "RAG", "LangChain", "Azure OpenAI", "GPT-4o"],
  },
  {
    title: "Cloud Architecture",
    description:
      "Designing and managing scalable, cost-effective cloud infrastructure on AWS and Azure with serverless and container-based architectures.",
    tags: ["AWS", "Azure", "Serverless", "Lambda", "EKS"],
  },
  {
    title: "Infrastructure as Code",
    description:
      "Automating infrastructure provisioning across environments using Terraform and CloudFormation with repeatable, auditable pipelines.",
    tags: ["Terraform", "CloudFormation", "IaC", "Multi-Environment"],
  },
  {
    title: "Container Orchestration",
    description:
      "Deploying and managing microservices on Kubernetes with CI/CD pipelines, service accounts, OIDC, and fine-grained IAM permissions.",
    tags: ["Kubernetes", "EKS", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Full-Stack Development",
    description:
      "Building end-to-end applications with React, Node.js, PostgreSQL, and MongoDB — from API design to deployment on cloud platforms.",
    tags: ["React", "Node.js", "FastAPI", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Migration & Modernization",
    description:
      "Migrating monolithic applications to serverless and microservice architectures, optimizing cost, performance, and resilience.",
    tags: ["Lambda", "Step Functions", "VPC", "Database Migration"],
  },
];

export const experience = [
  {
    period: "July 2021 — Present",
    role: "Senior Software Developer",
    company: "A Technology Company",
    points: [
      "Developed serverless architecture and deployed infrastructure using AWS Lambda with CloudFormation, and created architectures using Elastic Beanstalk, SQS, S3, SNS and other AWS services.",
      "Migrated existing backend applications to EKS and developed Terraform templates for infrastructure management. Created and managed Kubernetes clusters on AWS with manifests, service accounts, OIDC, and IAM roles.",
      "Deployed a RAG application utilizing Azure AI Services, including Vector Store and Document Intelligence, with Azure OpenAI, GPT-4o, and LangChain for semantic search over enterprise data.",
      "Created and managed GitHub Actions for automated build deployments and wrote IaC to automate provisioning across dev, UAT, and production environments.",
      "Built cloud architectures and user flows for backend applications including workflows using AWS Step Functions.",
    ],
  },
  {
    period: "Sept 2019 — July 2021",
    role: "Software Developer",
    company: "A Software Company",
    points: [
      "Built a full-stack real estate property management application using ReactJS, Node.js, and PostgreSQL.",
      "Set up CI/CD pipeline and deployed the application on AWS Elastic Beanstalk with S3 for assets and a CDN for on-the-fly image loading.",
      "Wrote advanced web scraping scripts bypassing website securities and captchas, managing daily scraping jobs with EventBridge and AWS Lambda.",
      "Added multiple data sources for property analysis and algorithms to generate leads.",
    ],
  },
];

export const projects = [
  {
    title: "AI-Powered Matching Platform",
    category: "AI / RAG Application",
    description:
      "Deployed a RAG application utilizing Azure AI Services, including Vector Store and Document Intelligence Loader, hosted on Azure App Services with private endpoints for secure corporate access.",
    stack: ["Azure OpenAI", "GPT-4o", "LangChain", "Vector Store", "Azure App Services"],
    href: "#",
  },
  {
    title: "Healthcare ML Application",
    category: "Healthcare / ML",
    description:
      "Worked on ML model training server deployment, set up microservices for the patient application, migrated to AWS Lambda, and optimized REST API responses by 2x.",
    stack: ["AWS Lambda", "Pinpoint", "Glue", "Step Functions", "Serverless DB"],
    href: "#",
  },
  {
    title: "Enterprise Data Platform",
    category: "Cloud Architecture",
    description:
      "Created cloud architecture and IaC for provisioning resources, set up Kubernetes (EKS) with GitHub Actions for CI/CD, and managed multiple control planes for dev, UAT, and production with IRSA.",
    stack: ["EKS", "GitHub Actions", "Terraform", "IRSA", "Kubernetes"],
    href: "#",
  },
];

export const journey = [
  {
    year: "2019",
    title: "Started professional development",
    text: "Began building full-stack applications and cloud infrastructure, learning the foundations of scalable systems.",
  },
  {
    year: "2021",
    title: "Moved into cloud & serverless",
    text: "Shifted focus to serverless architectures, AWS, Kubernetes, and infrastructure as code.",
  },
  {
    year: "2024",
    title: "Specializing in AI & LLMs",
    text: "Building AI-powered applications with RAG, LLMs, and prompt engineering, deploying enterprise AI systems on Azure and AWS.",
  },
];

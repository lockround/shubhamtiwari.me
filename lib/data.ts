export const profile = {
  name: "Shubham Tiwari",
  role: "Solutions Architect",
  tagline:
    "I design scalable, resilient systems that turn complex business requirements into dependable cloud architecture.",
  summary:
    "Solutions Architect with a track record of translating ambiguous business goals into concrete, cost-effective architectures. I bridge the gap between stakeholders and engineering teams, designing systems that scale without losing their shape.",
  location: "India · Remote worldwide",
  email: "hello@shubhamtiwari.me",
  availability: "Available for engagements",
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Email", href: "mailto:hello@shubhamtiwari.me" },
  ],
};

export const stats = [
  { value: "9+", label: "Years architecting production systems" },
  { value: "40+", label: "Solutions delivered end to end" },
  { value: "3", label: "Cloud platforms, deeply" },
  { value: "99.99%", label: "Uptime designed into critical workloads" },
];

export const expertise = [
  {
    title: "Cloud Architecture",
    description:
      "Multi-account, multi-region infrastructure designed for resilience, observability, and financial efficiency.",
    tags: ["AWS", "GCP", "Azure"],
  },
  {
    title: "System Design",
    description:
      "Event-driven and microservice architectures that scale predictably and degrade gracefully under load.",
    tags: ["Kubernetes", "Kafka", "Serverless"],
  },
  {
    title: "Migration & Modernization",
    description:
      "Low-risk, incremental paths from monolithic or legacy systems to cloud-native platforms.",
    tags: ["Lift & Shift", "Refactor", "Re-platform"],
  },
  {
    title: "Security & Compliance",
    description:
      "Zero-trust, cost-aware designs that still satisfy strict compliance and audit requirements.",
    tags: ["Zero Trust", "SOC 2", "GDPR"],
  },
  {
    title: "Cost Optimization",
    description:
      "Right-sizing, reserved capacity, and workload placement strategies that cut waste without cutting capability.",
    tags: ["FinOps", "Forecasting"],
  },
  {
    title: "Technical Leadership",
    description:
      "Setting standards, leading design reviews, and mentoring engineers toward architectural thinking.",
    tags: ["Design Reviews", "Guidance"],
  },
];

export const experience = [
  {
    period: "2022 — Present",
    role: "Principal Solutions Architect",
    company: "Global Systems Group",
    points: [
      "Lead architecture for a cloud platform serving 25M+ requests daily.",
      "Cut infrastructure spend 38% through FinOps and right-sizing initiatives.",
      "Championed a zero-trust network model adopted across three divisions.",
    ],
  },
  {
    period: "2019 — 2022",
    role: "Senior Solutions Architect",
    company: "Nimbus Technologies",
    points: [
      "Designed multi-tenant SaaS architecture supporting 300+ enterprise customers.",
      "Drove migration of 60+ workloads from on-prem to cloud, zero downtime.",
      "Introduced event-driven patterns reducing data-processing latency by 70%.",
    ],
  },
  {
    period: "2016 — 2019",
    role: "Cloud Engineer",
    company: "Dataflow Solutions",
    points: [
      "Automated infrastructure provisioning, cutting deploy time from days to minutes.",
      "Built CI/CD pipelines and observability for a portfolio of 40+ services.",
    ],
  },
];

export const projects = [
  {
    title: "Realtime Ledger Platform",
    category: "Cloud Architecture",
    description:
      "Designed a distributed, event-sourced ledger handling millions of daily transactions with exactly-once delivery and 99.99% uptime.",
    stack: ["AWS", "Kafka", "Kubernetes", "Terraform"],
    href: "#",
  },
  {
    title: "Enterprise Migration Engine",
    category: "Modernization",
    description:
      "Built the playbook and tooling that moved a bank's core systems to the cloud across two weekends with zero downtime.",
    stack: ["GCP", "GKE", "CI/CD", "IaC"],
    href: "#",
  },
  {
    title: "Zero-Trust Identity Mesh",
    category: "Security & Compliance",
    description:
      "Architected a service-to-service identity and authorization layer unifying access policy across a fleet of 200+ services.",
    stack: ["AWS", "OIDC", "gRPC", "Policy Engines"],
    href: "#",
  },
];

export const journey = [
  {
    year: "2016",
    title: "Started building infrastructure",
    text: "Began automating cloud infrastructure, learning that simplicity of operations beats cleverness.",
  },
  {
    year: "2019",
    title: "Moved into architecture",
    text: "Shifted focus from building systems to designing them — asking why before what.",
  },
  {
    year: "2022",
    title: "Leading technical direction",
    text: "Now set the architectural direction for multi-team engineering organizations.",
  },
];

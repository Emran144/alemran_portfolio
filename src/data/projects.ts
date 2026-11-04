export type ProjectCategory = "Industry" | "MLOps" | "Research";

export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  role: string;
  period: string;
  category: ProjectCategory;
  tags: string[];
  /** Optional paragraph shown above the bullets in the card details. */
  overview?: string;
  bullets: string[];
  link?: { label: string; url: string };
  highlight?: string;
  /** Paths are relative to /public (basePath is added by the component). */
  video?: { src: string; poster?: string; caption?: string };
}

export const projects: Project[] = [
  {
    id: 14,
    title: "Agentic KYC",
    subtitle: "AI-assisted customer KYC re-verification for Prime Bank PLC",
    role: "End-to-End AI/ML Developer",
    period: "2026 – Present",
    category: "Industry",
    tags: ["Agentic AI", "LLM Tool Use", "Handwritten OCR", "Bangla/English", "Human-in-the-Loop", "Neural TTS"],
    highlight: "Proof of concept · Human interaction cut from 19 clicks to 4 decision points",
    overview:
      "Bangladeshi banks must re-verify every customer's KYC on a fixed schedule — every year for high-risk customers and every five years for low-risk ones. At Prime Bank this was manual: branches collect paper forms, staff re-key them, and Operations checks them against the core banking system (Temenos T24). With a base of over a million customers, this is slow, inconsistent, and hard to audit. I built an offline, end-to-end interactive prototype of an agentic KYC platform from the bank's signed Business Requirements Document, covering the full process from start to finish.",
    bullets: [
      "Customer selection: the agent turns the bank's goal into a read-only query, scans the customer database, and selects customers whose KYC is due or expired, recording a reason for each.",
      "Notification campaign: personalised SMS and email notices with delivery tracking, retries, automatic reminders, and a Need-to-Block list.",
      "Submission intake: branch submissions are picked up as they arrive and placed in an AI processing queue.",
      "Document reading: handwritten and printed Bangla/English KYC forms are read by OCR, with a bounding box and confidence score on every field; fields below 80% confidence are routed to a person.",
      "Previous vs new KYC comparison: detects real changes while ignoring formatting-only differences (e.g. \"Rd-5\" vs \"Road 5\").",
      "Logical-consistency checks: e.g. a garments owner declaring a very low transaction limit, a limit far above stated income, an implausible profession change (farmer → corporate employee), source of funds vs profession, and missing profession documents.",
      "Routing: consistent cases go to straight-through processing (STP); flagged ones become cases in the Operations review portal, where an officer approves, requests more information (the agent drafts and sends the request), blocks, or escalates.",
      "Design principle — \"The AI recommends, a human decides\": the agent plans and runs the work, but facts come from deterministic tools. It never writes to the core banking system; every change becomes a change set approved by a named officer, every action is logged for audit, and tool failures are never treated as passes.",
      "Agent-first UX: buttons appear only where a person has to decide; everything else runs automatically, with a live feed labelling each action as AI, customer, or officer. Human interaction in the demo flow dropped from 19 clicks to 4 decision points (Approve, Request info, Block, Escalate), tracked by a \"human touches per 100 customers\" KPI.",
      "Operations dashboard showing the AI/human work split, findings by type, branch progress, a before-vs-after comparison, and an AI-written management report.",
      "23 story customers, each demonstrating a real edge case — e.g. a housewife declaring a ৳20 lakh limit without a source-of-funds declaration, or a retiree who now owns a tailoring shop.",
      "Narrated auto-play demo voiced with Microsoft neural text-to-speech (edge-tts), with word-level timing alignment driving a synchronised cursor, spotlight, and captions (adjustable 0.5×–2×), plus automated end-to-end quality checks.",
      "Delivery documents: business glossary, bank integration dependencies, and a UAT test-data use-case catalogue.",
    ],
    video: {
      src: "/projects/agentic-kyc-demo.mp4",
      poster: "/projects/agentic-kyc-poster.jpg",
      caption: "Agentic KYC — narrated end-to-end demo (7 min)",
    },
  },
  {
    id: 1,
    title: "XtractAI",
    subtitle: "SSCL's Document AI Platform",
    role: "ML Lead",
    period: "2025 – Present",
    category: "Industry",
    tags: ["Document AI", "LLMs", "OCR", "RAG"],
    bullets: [
      "Built a live demo platform showcasing SSCL's in-house Document AI capabilities with real-time document processing and intelligent information extraction.",
      "Led the development and deployment of ML components, including model integration and backend processing pipelines.",
      "Enabled automated extraction of key data from diverse document types (PDFs, forms, images).",
      "Provided live product access for evaluation with 1,000 free credits upon Gmail login.",
    ],
    highlight: "Ongoing development: continuously integrating new Document AI capabilities",
    link: { label: "Try XtractAI live", url: "https://xtract.ai.sscl.tech/doc-extraction" },
  },
  {
    id: 2,
    title: "e-KYC",
    subtitle: "Electronic Know Your Customer System",
    role: "System Architect | Engineering Manager | Lead Developer",
    period: "2025 – 2026",
    category: "Industry",
    tags: ["Computer Vision", "OCR", "VLM", "NID Verification", "Liveness Detection"],
    bullets: [
      "Led end-to-end product strategy, architecture, and development of a production e-KYC platform, live across 3 banks and 2 financial organizations for secure digital onboarding.",
      "Integrated with the Bangladesh Election Commission (EC) API for real-time NID verification and facial matching.",
      "Built an advanced image-processing + OCR pipeline (dewarping, blur/light detection, angle correction, enhancement) with optimized GPU inference, reducing OCR latency from 16 s to under 1 s.",
      "Fine-tuned NID-specific VLMs achieving 97.48%+ English and 91.23% Bangla text extraction accuracy (exact match) on real banking data.",
      "Implemented instruction-based video liveness detection, replay-attack prevention, and live-to-NID face matching for identity-fraud prevention.",
      "Designed an administrative portal with analytics, monitoring, and role-based access control.",
    ],
    highlight: "Deployed in TAP App · Live across 3 banks & 2 financial organizations",
    link: { label: "TAP App on Google Play", url: "https://play.google.com/store/apps/details?id=com.trustandpay.customer" },
  },
  {
    id: 3,
    title: "Import Document Scrutiny",
    role: "Project Lead | System Architect",
    period: "2025",
    category: "Industry",
    tags: ["RAG", "LLM", "Document AI", "GPT", "DotOCR"],
    bullets: [
      "Automated cross-validation of MT700 Letter of Credit (LC) clauses against submitted import documents.",
      "Validated structure and completeness of import documents per UCP 600 and ISBP 821 rulebooks using a RAG-based framework.",
      "Converted unstructured LC messages into executable business logic and verified against automatically extracted trade document data.",
      "Implemented a multi-modal AI approach using a fine-tuned GPT-OSS-20B model integrated with DotOCR.",
    ],
    highlight: "Achieved 92% reduction in cost and manual effort",
  },
  {
    id: 4,
    title: "SpectraTrade",
    subtitle: "Financial Document Classification & Extraction",
    role: "ML Lead",
    period: "2023 – 2025",
    category: "Industry",
    tags: ["LLM", "VLM", "Document Classification", "Banking"],
    bullets: [
      "Achieved high-accuracy financial document classification and information extraction using GPT, LLaMA (3.5 Vision finetuned), Qwen, Gemma, and Donut models.",
      "Optimized processing speed to 3–5 seconds per page for large-scale banking operations.",
      "Deployed in PrimeBanijjo, Bangladesh's first AI-powered digital LC management platform.",
    ],
    highlight: "Deployed in PrimeBanijjo – Bangladesh's first AI-powered LC management platform",
  },
  {
    id: 5,
    title: "DockStream",
    subtitle: "RMG Sector Automation",
    role: "Project Manager & ML Lead",
    period: "2024 – 2025",
    category: "Industry",
    tags: ["RPA", "Document AI", "Automation"],
    bullets: [
      "Led automation of document classification, data entry, form filling, and information submission across multiple websites using RPA technologies.",
      "Designed adaptive pipelines for extracting data from structured and unstructured documents.",
      "Achieved an 86% reduction in manual effort, human error, and operational costs.",
    ],
    highlight: "86% reduction in manual effort",
  },
  {
    id: 6,
    title: "Robotic Process Automation & GenAI for Financial Document Processing",
    role: "ML Lead",
    period: "2023 – 2025",
    category: "Industry",
    tags: ["RPA", "OCR", "GenAI", "Faster R-CNN", "YOLOv5", "LayoutLMv2"],
    bullets: [
      "Led OCR pipeline development supporting 24+ financial document types with multi-format JSON outputs.",
      "Extracted key data from financial documents using Faster R-CNN, Donut, YOLOv5/v8, LayoutLMv2, and fine-tuned Donut and LLaMA models.",
      "Developed financial document classification and table extraction leveraging LayoutLMv2.",
    ],
    highlight: "Supports 24+ financial document types",
  },
  {
    id: 15,
    title: "SQA Automation",
    role: "Developer",
    period: "2025",
    category: "Industry",
    tags: ["QA Automation", "Playwright", "Productivity"],
    bullets: [
      "Developed an internal productivity tool for QA operations that adapts to dynamic UI and operational changes based on client requirements.",
      "Minimized manual test-case writing after each change, significantly reducing QA effort and accelerating release cycles.",
    ],
    highlight: "Internal productivity tool",
  },
  {
    id: 7,
    title: "Semi-Auto Annotator & DocTrainer",
    role: "Developer",
    period: "2025",
    category: "Industry",
    tags: ["RLHF", "Annotation", "MLOps"],
    bullets: [
      "Developed a tool for automated PDF annotation with human-in-the-loop feedback (RLHF).",
      "Enabled iterative model retraining for continuous accuracy improvement.",
    ],
  },
  {
    id: 8,
    title: "eKYC Platform – SaaS-Based Identity Verification",
    role: "MLOps Lead",
    period: "2026",
    category: "MLOps",
    tags: ["MLOps", "SaaS", "Docker", "NGINX", "API"],
    bullets: [
      "Led end-to-end MLOps deployment deploying NID OCR, Liveness Detection, and EC Verification services through secure APIs.",
      "Implemented scalable inference infrastructure, load balancing, and NGINX-based hosting.",
    ],
  },
  {
    id: 9,
    title: "SpectraTrade – Secured Banking Deployment",
    subtitle: "Leading Private Bank in Bangladesh",
    role: "MLOps Lead",
    period: "2023 – 2024",
    category: "MLOps",
    tags: ["MLOps", "RHEL", "On-Premises", "API"],
    bullets: [
      "Led end-to-end MLOps deployment of ML modules (LC Management, Shipping Guarantee) on RHEL-secured on-premises infrastructure.",
      "Established the initial ML runtime environment and managed model lifecycle across UAT and Production.",
      "Integrated ML services via secure, API-based interfaces.",
    ],
  },
  {
    id: 10,
    title: "DockStream – RMG Enterprise ML Deployment",
    role: "MLOps Lead",
    period: "2024 – 2025",
    category: "MLOps",
    tags: ["MLOps", "RPA", "Production", "APIs"],
    bullets: [
      "Led end-to-end MLOps deployment of ML-driven document intelligence and RPA automation pipelines for large-scale RMG operations.",
      "Operationalized document classification, structured/unstructured data extraction, and form automation models, integrating ML services with RPA workflows via production-grade APIs.",
      "Resulted in an 86% reduction in manual effort and operational errors.",
    ],
  },
  {
    id: 11,
    title: "ZeroDepthFAS",
    subtitle: "Passive Human Face Liveness Detection",
    role: "MSc Coursework & Ongoing Research",
    period: "2026",
    category: "Research",
    tags: ["Vision Transformer", "EfficientNet", "Face Anti-Spoofing", "REST API"],
    bullets: [
      "Built a passive face anti-spoofing system fusing Vision Transformer (Large) with EfficientNet-B0 for real-time e-KYC liveness detection.",
      "Achieved AUC 1.000 in-distribution and HTER 1.48% on zero-shot out-of-distribution replay attacks.",
      "Deployed as a REST API with sub-second GPU inference.",
    ],
    highlight: "AUC 1.000 in-distribution | HTER 1.48% on zero-shot OOD attacks",
  },
  {
    id: 12,
    title: "HealthCareGPT",
    subtitle: "LLM + RAG for Disease Prediction",
    role: "Coursework",
    period: "2024",
    category: "Research",
    tags: ["LLM", "RAG", "Healthcare", "NLP"],
    bullets: [
      "Designed a healthcare assistant for disease prediction and personalized recommendations using LLMs and Retrieval-Augmented Generation (RAG).",
      "Demonstrated higher accuracy than traditional ML methods.",
    ],
  },
  {
    id: 13,
    title: "RLHF-Enhanced Document Classification (LayoutLM)",
    role: "Coursework",
    period: "2024",
    category: "Research",
    tags: ["RLHF", "LayoutLM", "Document AI", "Financial"],
    bullets: [
      "Integrated Reinforcement Learning with Human Feedback (RLHF) to improve LayoutLM-based financial document classification.",
    ],
  },
  {
    id: 16,
    title: "UIU EMAS",
    subtitle: "Event Management & Archiving System",
    role: "Team Project",
    period: "2022",
    category: "Research",
    tags: ["Web App", "Software Engineering"],
    bullets: [
      "Web-based system for managing the CSE Project Show & Club Forum Fest.",
      "Built as part of a Software Engineering course project — Champion, UIU CSE Project Show (Fall 2022).",
    ],
  },
];

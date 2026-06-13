export type ProjectCategory = "Industry" | "MLOps" | "Research";

export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  role: string;
  period: string;
  category: ProjectCategory;
  tags: string[];
  bullets: string[];
  link?: string;
  highlight?: string;
}

export const projects: Project[] = [
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
    link: "https://xtractai.example.com",
    highlight: "Ongoing development: continuously integrating new Document AI capabilities",
  },
  {
    id: 2,
    title: "e-KYC",
    subtitle: "Electronic Know Your Customer System",
    role: "System Architect | Engineering Manager | Lead Developer",
    period: "2025 – Present",
    category: "Industry",
    tags: ["Computer Vision", "OCR", "VLM", "NID Verification", "Liveness Detection"],
    bullets: [
      "Led end-to-end product strategy, architecture, and development of an AI-powered e-KYC system.",
      "API integration with the Bangladesh Election Commission for real-time NID verification and facial matching.",
      "Built an advanced image processing + OCR pipeline (dewarping, blur/light detection, angle correction).",
      "Fine-tuned VLMs achieving 97.48%+ (English) and 91.23% (Bangla) NID text extraction accuracy.",
      "Implemented instruction-based video liveness detection and live-to-NID face matching to prevent identity fraud.",
      "Designed an administrative portal with analytics, monitoring, and role-based access control.",
    ],
    link: "https://tap.app",
    highlight: "Deployed in TAP App",
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
    highlight: "Achieved 82% reduction in cost and manual effort",
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
      "Operationalized document classification and structured/unstructured data extraction models, resulting in 86% reduction in manual effort.",
    ],
  },
  {
    id: 11,
    title: "ZeroDepthFAS",
    subtitle: "Passive Human Face Liveness Detection",
    role: "Researcher",
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
    role: "Researcher",
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
    role: "Researcher",
    period: "2024",
    category: "Research",
    tags: ["RLHF", "LayoutLM", "Document AI", "Financial"],
    bullets: [
      "Integrated Reinforcement Learning with Human Feedback (RLHF) to improve LayoutLM-based financial document classification.",
    ],
  },
];

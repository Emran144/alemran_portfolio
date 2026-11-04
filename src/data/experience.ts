export const experience = [
  {
    id: 1,
    role: "Senior ML Engineer & ML Team Lead",
    company: "Spectrum Software & Consulting (Pvt.) Ltd.",
    period: "Jan 2025 – Present",
    bullets: [
      "Lead a 6+ member ML team and drive AI/ML initiatives across banking, FinTech, RMG, and enterprise automation.",
      "Engage with 10+ banks and 5+ financial organizations to identify AI/ML opportunities and deliver POCs and production solutions.",
      "Architect and deploy low-resource AI solutions using LLMs, VLMs, OCR, RAG, and Document AI across SaaS and secure on-premises environments.",
      "Lead AI product strategy, technical proposals, tenders, solution costing, and pricing for products including e-KYC, XtractAI, and SpectraTrade.",
      "Oversee model development, fine-tuning, MLOps, deployment, and production integration.",
      "Introduced internal AI/ML productivity tools, including Semi-Auto Annotator and QA Automation.",
    ],
  },
  {
    id: 2,
    role: "Machine Learning Engineer",
    company: "Spectrum Software & Consulting (Pvt.) Ltd.",
    period: "Jul 2022 – Dec 2024",
    bullets: [
      "Developed and deployed production AI/ML solutions for banking, FinTech, trade finance, and manufacturing.",
      "Built Document AI pipelines for classification, OCR, information extraction, and table/document understanding.",
      "Fine-tuned models including LayoutLMv2, Donut, YOLO, and LLaMA for enterprise financial use cases.",
      "Developed ML APIs and integrated AI solutions with enterprise applications and RPA workflows.",
      "Built domain-specific datasets, annotation pipelines, and human-in-the-loop feedback systems.",
      "Contributed to model evaluation, monitoring, retraining, and secure on-premises deployment.",
    ],
  },
  {
    id: 3,
    role: "Research Assistant",
    company: "United International University (UIU)",
    period: "Feb 2022 – Jun 2022",
    bullets: [
      "Conducted research on cyberbullying detection across social media platforms under Dr. Saddam Hossain Mukta.",
      "Contributed to a funded IAR project involving data collection, preprocessing, and model experimentation.",
    ],
  },
  {
    id: 4,
    role: "Undergraduate Teaching Assistant",
    company: "United International University (UIU)",
    period: "Nov 2021 – Feb 2022",
    bullets: [
      "Supported Pattern Recognition and Database Management labs by guiding student projects.",
      "Evaluated assignments, quizzes, and lab reports with timely feedback.",
    ],
  },
];

export interface Education {
  id: number;
  degree: string;
  institution: string;
  country: string;
  period: string;
  cgpa?: string;
  award?: string;
  note?: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "MSc in Computer Science and Engineering",
    institution: "BRAC University",
    country: "Bangladesh",
    period: "Jan 2026 – Present",
    note: "Running: Generative Machine Learning, Advanced Parallel Algorithms · Completed: Advanced AI, Advanced NLP, Advanced RL, Computer Vision, Big Data Analytics",
  },
  {
    id: 2,
    degree: "BSc in Computer Science and Engineering",
    institution: "United International University (UIU)",
    country: "Bangladesh",
    period: "Feb 2018 – Mar 2022",
    cgpa: "3.90 / 4.00",
    award: "Summa Cum Laude",
    note: "Courses: AI, Machine Learning, Pattern Recognition, Bioinformatics, Probability & Statistics",
  },
];

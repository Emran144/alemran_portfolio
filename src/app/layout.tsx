import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personal, siteUrl } from "@/data/personal";

const description =
  "Senior ML Engineer & ML Team Lead with 4.5+ years building production AI for banking and FinTech — Generative AI, Document AI, OCR, RAG, and Agentic AI.";

export const metadata: Metadata = {
  title: `${personal.name} | Senior ML Engineer`,
  description,
  authors: [{ name: personal.name, url: `${siteUrl}/` }],
  keywords: [
    "ML Engineer", "Machine Learning", "Agentic AI", "Document AI", "Generative AI",
    "LLM", "OCR", "RAG", "e-KYC", "MLOps", "Bangladesh", personal.name,
  ],
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: "profile",
    url: `${siteUrl}/`,
    siteName: personal.name,
    title: `${personal.name} | Senior ML Engineer`,
    description,
    images: [{ url: `${siteUrl}/avatar.jpg`, width: 600, height: 743, alt: personal.name }],
  },
  twitter: {
    card: "summary",
    title: `${personal.name} | Senior ML Engineer`,
    description,
    images: [`${siteUrl}/avatar.jpg`],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: personal.title,
  url: `${siteUrl}/`,
  image: `${siteUrl}/avatar.jpg`,
  email: `mailto:${personal.email}`,
  worksFor: { "@type": "Organization", name: "Spectrum Software & Consulting (Pvt.) Ltd." },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "BRAC University" },
    { "@type": "CollegeOrUniversity", name: "United International University" },
  ],
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  sameAs: [personal.linkedin, personal.github, personal.googleScholar],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <ThemeProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1} style={{ outline: "none" }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

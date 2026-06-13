"use client";
import { personal } from "@/data/personal";
import SectionHeader from "./SectionHeader";

const links = [
  {
    icon: "📧",
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/md-al-emran-hossain",
    href: personal.linkedin,
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/Emran144",
    href: personal.github,
  },
  {
    icon: "🎓",
    label: "Google Scholar",
    value: "Scholar Profile",
    href: personal.googleScholar,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "5rem 1.5rem",
        backgroundColor: "var(--bg-secondary)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <SectionHeader title="Get in Touch" />

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "3rem",
            marginTop: "-1rem",
          }}
        >
          I&apos;m always open to interesting research collaborations, enterprise AI
          challenges, and opportunities to push the boundaries of Document AI and
          Generative AI. Feel free to reach out!
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1.5rem 1rem",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>{link.icon}</span>
              <span style={{ fontWeight: 700, color: "var(--text)", fontSize: "0.9rem" }}>
                {link.label}
              </span>
              <span style={{ color: "var(--accent)", fontSize: "0.8rem" }}>{link.value}</span>
            </a>
          ))}
        </div>

        <a
          href={`mailto:${personal.email}`}
          style={{
            display: "inline-block",
            padding: "0.875rem 2.5rem",
            borderRadius: "0.75rem",
            fontWeight: 700,
            fontSize: "1rem",
            backgroundColor: "var(--accent)",
            color: "#fff",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          Say Hello →
        </a>
      </div>
    </section>
  );
}

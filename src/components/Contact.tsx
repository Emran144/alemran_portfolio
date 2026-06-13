"use client";
import { personal } from "@/data/personal";
import SectionHeader from "./SectionHeader";

const LINKS = [
  { icon: "📧", label: "Email",          value: personal.email,                        href: `mailto:${personal.email}` },
  { icon: "💼", label: "LinkedIn",       value: "linkedin.com/in/alemranhossain",      href: personal.linkedin },
  { icon: "🐙", label: "GitHub",         value: "github.com/Emran144",                 href: personal.github },
  { icon: "🎓", label: "Google Scholar", value: "Scholar Profile",                     href: personal.googleScholar },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" style={{ padding: "5rem 1.5rem", backgroundColor: "var(--bg-secondary)", textAlign: "center" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <SectionHeader id="contact-heading" title="Get in Touch" />
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "3rem", marginTop: "-1rem" }}>
          I&apos;m always open to interesting research collaborations, enterprise AI challenges, and opportunities to push the boundaries of Document AI and Generative AI. Feel free to reach out!
        </p>

        <address style={{ fontStyle: "normal" }}>
          <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem", listStyle: "none", margin: "0 0 3rem", padding: 0 }}>
            {LINKS.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", padding: "1.5rem 1rem", backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <span aria-hidden="true" style={{ fontSize: "1.5rem" }}>{link.icon}</span>
                  <strong style={{ fontWeight: 700, color: "var(--text)", fontSize: "0.9rem" }}>{link.label}</strong>
                  <span style={{ color: "var(--accent)", fontSize: "0.8rem" }}>{link.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </address>

        <a
          href={`mailto:${personal.email}`}
          style={{ display: "inline-block", padding: "0.875rem 2.5rem", borderRadius: "0.75rem", fontWeight: 700, fontSize: "1rem", backgroundColor: "var(--accent)", color: "#fff", textDecoration: "none" }}
          onMouseEnter={e => ((e.target as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={e => ((e.target as HTMLElement).style.opacity = "1")}
        >
          Say Hello →
        </a>
      </div>
    </section>
  );
}

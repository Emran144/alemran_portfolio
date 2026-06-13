"use client";
import { personal } from "@/data/personal";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--bg)",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
          © {new Date().getFullYear()} {personal.name}. Built with Next.js & Tailwind CSS.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginTop: "0.75rem",
          }}
        >
          {[
            { label: "GitHub", href: personal.github },
            { label: "LinkedIn", href: personal.linkedin },
            { label: "Scholar", href: personal.googleScholar },
            { label: "Email", href: `mailto:${personal.email}` },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                color: "var(--text-muted)",
                fontSize: "0.8rem",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-muted)")
              }
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

"use client";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Footer() {
  const { data } = usePortfolio();
  const { personal } = data;

  return (
    <footer role="contentinfo" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)", padding: "2rem 1.5rem", textAlign: "center" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
          © {new Date().getFullYear()} {personal.name}. Built with Next.js & Tailwind CSS.
        </p>
        <nav aria-label="Footer navigation">
          <ul style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "0.75rem", listStyle: "none", padding: 0 }}>
            {[
              { label: "GitHub",  href: personal.github },
              { label: "LinkedIn", href: personal.linkedin },
              { label: "Scholar", href: personal.googleScholar },
              { label: "Email",   href: `mailto:${personal.email}` },
            ].map(l => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{ color: "var(--text-muted)", fontSize: "0.8rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--accent)")}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

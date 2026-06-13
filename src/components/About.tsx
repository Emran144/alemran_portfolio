"use client";
import { usePortfolio } from "@/context/PortfolioContext";
import EditableText from "./EditableText";
import SectionHeader from "./SectionHeader";

export default function About() {
  const { data, updatePersonal } = usePortfolio();
  const { personal, education } = data;

  return (
    <section id="about" aria-labelledby="about-heading" style={{ backgroundColor: "var(--bg-secondary)", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader id="about-heading" title="About Me" subtitle="Machine Learning Engineer building real-world AI solutions" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "start" }}>
          <div>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              <EditableText as="span" value={personal.objective} onSave={v => updatePersonal({ objective: v })} multiline />
            </p>
            <aside aria-label="Research interests" style={{ padding: "1rem 1.25rem", borderRadius: "0.75rem", backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent)", marginBottom: "0.5rem" }}>Research Interests</p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>
                <EditableText as="span" value={personal.researchInterests} onSave={v => updatePersonal({ researchInterests: v })} multiline />
              </p>
            </aside>
          </div>

          <div>
            <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text)", marginBottom: "1.25rem" }}>Education</h3>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {education.map((edu) => (
                <li key={edu.id} style={{ padding: "1.25rem", borderRadius: "0.875rem", backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", transition: "border-color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.25rem", marginBottom: "0.25rem" }}>
                    <strong style={{ fontWeight: 700, color: "var(--text)", fontSize: "0.95rem" }}>{edu.institution}</strong>
                    <span style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 600, backgroundColor: "var(--accent-bg)", padding: "0.2rem 0.5rem", borderRadius: "0.375rem" }}>CGPA {edu.cgpa}</span>
                  </div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>{edu.degree}</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.2rem" }}>
                    <time>{edu.period}</time>
                    {edu.award && <span style={{ marginLeft: "0.5rem", color: "#f59e0b", fontWeight: 600 }}>★ {edu.award}</span>}
                  </p>
                  {edu.thesis && <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.5rem" }}><strong>Thesis:</strong> {edu.thesis}</p>}
                </li>
              ))}
            </ol>
            <address style={{ marginTop: "1.5rem", fontStyle: "normal", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a href={`mailto:${personal.email}`} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent)", fontSize: "0.875rem", textDecoration: "none" }}>
                <span aria-hidden="true">📧</span>{personal.email}
              </a>
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.875rem" }}>
                <span aria-hidden="true">📍</span>{personal.location}
              </span>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}

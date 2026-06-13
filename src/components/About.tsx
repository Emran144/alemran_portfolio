"use client";
import { personal } from "@/data/personal";
import { education } from "@/data/experience";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      style={{ backgroundColor: "var(--bg-secondary)", padding: "5rem 1.5rem" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          title="About Me"
          subtitle="Machine Learning Engineer building real-world AI solutions"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Bio */}
          <div>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.8,
                fontSize: "0.975rem",
                marginBottom: "1.5rem",
              }}
            >
              {personal.objective}
            </p>
            <div
              style={{
                padding: "1rem 1.25rem",
                borderRadius: "0.75rem",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--accent)",
                  marginBottom: "0.5rem",
                }}
              >
                Research Interests
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                {personal.researchInterests}
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3
              style={{
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "var(--text)",
                marginBottom: "1.25rem",
              }}
            >
              Education
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {education.map((edu) => (
                <div
                  key={edu.id}
                  style={{
                    padding: "1.25rem",
                    borderRadius: "0.75rem",
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.25rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <span
                      style={{ fontWeight: 700, color: "var(--text)", fontSize: "0.95rem" }}
                    >
                      {edu.institution}
                    </span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--accent)",
                        fontWeight: 600,
                        backgroundColor: "var(--accent-bg)",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "0.375rem",
                      }}
                    >
                      CGPA {edu.cgpa}
                    </span>
                  </div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                    {edu.degree}
                  </p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                    {edu.period}
                    {edu.award && (
                      <span
                        style={{
                          marginLeft: "0.5rem",
                          color: "#f59e0b",
                          fontWeight: 600,
                        }}
                      >
                        ★ {edu.award}
                      </span>
                    )}
                  </p>
                  {edu.thesis && (
                    <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      <strong>Thesis:</strong> {edu.thesis}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Quick contact */}
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { icon: "📧", label: personal.email, href: `mailto:${personal.email}` },
                { icon: "📍", label: personal.location, href: null },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span>{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{ color: "var(--accent)", fontSize: "0.875rem", textDecoration: "none" }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

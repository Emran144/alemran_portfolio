"use client";
import { experience } from "@/data/experience";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "5rem 1.5rem", backgroundColor: "var(--bg)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionHeader
          title="Experience"
          subtitle="4+ years building enterprise AI systems"
        />

        <div style={{ position: "relative" }}>
          {/* timeline line */}
          <div
            style={{
              position: "absolute",
              left: "1.25rem",
              top: 0,
              bottom: 0,
              width: 2,
              backgroundColor: "var(--border)",
              borderRadius: 1,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {experience.map((job, i) => (
              <div
                key={job.id}
                style={{ paddingLeft: "3.5rem", position: "relative" }}
              >
                {/* dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "0.625rem",
                    top: "1.25rem",
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    backgroundColor: i === 0 ? "var(--accent)" : "var(--border)",
                    border: `2px solid ${i === 0 ? "var(--accent)" : "var(--border)"}`,
                    boxShadow: i === 0 ? "0 0 0 4px var(--accent-bg)" : "none",
                  }}
                />

                <div
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.875rem",
                    padding: "1.5rem",
                    transition: "border-color 0.2s",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <h3
                      style={{
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        color: "var(--text)",
                      }}
                    >
                      {job.role}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        backgroundColor: "var(--bg-secondary)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "0.375rem",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {job.period}
                    </span>
                  </div>
                  <p
                    style={{
                      color: "var(--accent)",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {job.company}
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {job.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          color: "var(--text-muted)",
                          fontSize: "0.875rem",
                          lineHeight: 1.6,
                        }}
                      >
                        <span style={{ color: "var(--accent)", marginTop: "0.1rem", flexShrink: 0 }}>
                          ▸
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

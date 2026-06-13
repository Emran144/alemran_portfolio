"use client";
import { experience } from "@/data/experience";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" style={{ padding: "5rem 1.5rem", backgroundColor: "var(--bg)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionHeader id="experience-heading" title="Experience" subtitle="4+ years building enterprise AI systems" />

        <ol style={{ listStyle: "none", margin: 0, padding: 0, position: "relative" }}>
          <div aria-hidden="true" style={{ position: "absolute", left: "1.25rem", top: 0, bottom: 0, width: 2, backgroundColor: "var(--border)", borderRadius: 1 }} />

          {experience.map((job, i) => (
            <li key={job.id} style={{ paddingLeft: "3.5rem", position: "relative", marginBottom: i < experience.length - 1 ? "2.5rem" : 0 }}>
              <div aria-hidden="true" style={{ position: "absolute", left: "0.625rem", top: "1.4rem", width: 14, height: 14, borderRadius: "50%", backgroundColor: i === 0 ? "var(--accent)" : "var(--border)", boxShadow: i === 0 ? "0 0 0 4px var(--accent-bg)" : "none" }} />

              <article
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "0.875rem", padding: "1.5rem", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <header style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.25rem" }}>
                  <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text)" }}>{job.role}</h3>
                  <time style={{ fontSize: "0.8rem", color: "var(--text-muted)", backgroundColor: "var(--bg-secondary)", padding: "0.2rem 0.6rem", borderRadius: "0.375rem", border: "1px solid var(--border)" }}>
                    {job.period}
                  </time>
                </header>
                <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.875rem", marginBottom: "1rem" }}>{job.company}</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", margin: 0, padding: 0, listStyle: "none" }}>
                  {job.bullets.map((b, bi) => (
                    <li key={bi} style={{ display: "flex", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                      <span aria-hidden="true" style={{ color: "var(--accent)", flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

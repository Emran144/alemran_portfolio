"use client";
import { skillGroups } from "@/data/skills";
import SectionHeader from "./SectionHeader";

const ICONS: Record<string, string> = { code: "💻", brain: "🧠", sparkles: "✨", server: "🚀", tools: "🛠️", database: "🗄️" };

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" style={{ padding: "5rem 1.5rem", backgroundColor: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader id="skills-heading" title="Technical Skills" subtitle="Technologies and tools I work with" />

        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          {skillGroups.map(group => (
            <li key={group.category}>
              <article
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.5rem", height: "100%", boxSizing: "border-box", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <h3 style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontWeight: 700, color: "var(--text)", fontSize: "0.975rem", marginBottom: "1rem" }}>
                  <span aria-hidden="true">{ICONS[group.icon] ?? "📌"}</span>{group.category}
                </h3>
                <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", listStyle: "none", margin: 0, padding: 0 }}>
                  {group.skills.map(skill => (
                    <li key={skill}
                      style={{ fontSize: "0.775rem", padding: "0.3rem 0.65rem", borderRadius: "0.375rem", backgroundColor: "var(--bg-secondary)", color: "var(--text-muted)", border: "1px solid var(--border)", transition: "all 0.15s", cursor: "default" }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--accent-bg)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = "var(--bg-secondary)"; e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

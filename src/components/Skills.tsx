"use client";
import { skillGroups } from "@/data/skills";
import SectionHeader from "./SectionHeader";

const iconMap: Record<string, string> = {
  code: "💻",
  brain: "🧠",
  sparkles: "✨",
  server: "🚀",
  tools: "🛠️",
  database: "🗄️",
};

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "5rem 1.5rem", backgroundColor: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.category}
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                padding: "1.5rem",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
              }
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.25rem" }}>{iconMap[group.icon] ?? "📌"}</span>
                <h3 style={{ fontWeight: 700, color: "var(--text)", fontSize: "0.975rem" }}>
                  {group.category}
                </h3>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: "0.775rem",
                      padding: "0.3rem 0.65rem",
                      borderRadius: "0.375rem",
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                      transition: "all 0.15s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = "var(--accent-bg)";
                      (e.target as HTMLElement).style.color = "var(--accent)";
                      (e.target as HTMLElement).style.borderColor = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = "var(--bg-secondary)";
                      (e.target as HTMLElement).style.color = "var(--text-muted)";
                      (e.target as HTMLElement).style.borderColor = "var(--border)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

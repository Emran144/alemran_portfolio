"use client";
import { achievements, extracurricular } from "@/data/achievements";
import SectionHeader from "./SectionHeader";

const iconMap: Record<string, string> = {
  trophy: "🏆",
  star: "⭐",
  medal: "🥇",
  award: "🎖️",
};

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: "5rem 1.5rem", backgroundColor: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          title="Achievements"
          subtitle="Academic honors and competition wins"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          {achievements.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "1rem",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "0.875rem",
                padding: "1.25rem",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
              }
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 40,
                  height: 40,
                  borderRadius: "0.5rem",
                  backgroundColor: "var(--accent-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                }}
              >
                {iconMap[item.icon] ?? "🏅"}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.25rem" }}>
                  <span style={{ fontWeight: 700, color: "var(--text)", fontSize: "0.925rem" }}>
                    {item.title}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 600 }}>
                    [{item.year}]
                  </span>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.825rem", lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Extracurricular */}
        <h3
          style={{
            fontWeight: 700,
            fontSize: "1.15rem",
            color: "var(--text)",
            marginBottom: "1.25rem",
          }}
        >
          Extracurricular
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {extracurricular.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "0.75rem",
                padding: "1rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.25rem" }}>
                <span style={{ fontWeight: 600, color: "var(--text)", fontSize: "0.875rem" }}>
                  {item.role}
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{item.period}</span>
              </div>
              <p style={{ color: "var(--accent)", fontSize: "0.8rem", marginTop: "0.2rem" }}>
                {item.org}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { usePortfolio } from "@/context/PortfolioContext";
import SectionHeader from "./SectionHeader";

const ICONS: Record<string, string> = { trophy: "🏆", star: "⭐", medal: "🥇", award: "🎖️" };

export default function Achievements() {
  const { data } = usePortfolio();
  const { achievements, extracurricular } = data;

  return (
    <section id="achievements" aria-labelledby="achievements-heading" style={{ padding: "5rem 1.5rem", backgroundColor: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader id="achievements-heading" title="Achievements" subtitle="Academic honors and competition wins" />

        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem", listStyle: "none", margin: "0 0 3rem", padding: 0 }}>
          {achievements.map(item => (
            <li key={item.id}>
              <article
                style={{ display: "flex", gap: "1rem", backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "0.875rem", padding: "1.25rem", transition: "border-color 0.2s", height: "100%", boxSizing: "border-box" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div aria-hidden="true" style={{ flexShrink: 0, width: 40, height: 40, borderRadius: "0.5rem", backgroundColor: "var(--accent-bg)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
                  {ICONS[item.icon] ?? "🏅"}
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.25rem", flexWrap: "wrap" }}>
                    <strong style={{ fontWeight: 700, color: "var(--text)", fontSize: "0.9rem" }}>{item.title}</strong>
                    <time style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 600 }}>[{item.year}]</time>
                  </div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.5 }}>{item.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text)", marginBottom: "1.25rem" }}>Extracurricular</h3>
        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.75rem", listStyle: "none", margin: 0, padding: 0 }}>
          {extracurricular.map((item, i) => (
            <li key={i} style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "0.75rem", padding: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.25rem" }}>
                <strong style={{ fontWeight: 600, color: "var(--text)", fontSize: "0.875rem" }}>{item.role}</strong>
                <time style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{item.period}</time>
              </div>
              <p style={{ color: "var(--accent)", fontSize: "0.8rem", marginTop: "0.2rem" }}>{item.org}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

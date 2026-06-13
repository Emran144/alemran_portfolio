"use client";
import { usePortfolio } from "@/context/PortfolioContext";
import SectionHeader from "./SectionHeader";

const TYPE_COLORS: Record<string, string> = {
  "Undergraduate Thesis": "#f59e0b",
  "Journal Article":      "#10b981",
  "Conference Paper":     "#8b5cf6",
};

export default function Publications() {
  const { data } = usePortfolio();
  const { publications } = data;

  return (
    <section id="publications" aria-labelledby="pubs-heading" style={{ padding: "5rem 1.5rem", backgroundColor: "var(--bg)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionHeader id="pubs-heading" title="Publications" subtitle="Peer-reviewed research contributions" />

        <ol style={{ display: "flex", flexDirection: "column", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          {publications.map((pub, i) => (
            <li key={pub.id}>
              <article
                style={{ display: "flex", gap: "1.25rem", backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "0.875rem", padding: "1.5rem", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div aria-hidden="true" style={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", backgroundColor: "var(--accent-bg)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.875rem", color: "var(--accent)" }}>
                  {i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: "0.375rem", backgroundColor: `${TYPE_COLORS[pub.type] ?? "#64748b"}22`, color: TYPE_COLORS[pub.type] ?? "#64748b" }}>
                      {pub.type}
                    </span>
                    <time style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600 }}>{pub.year}</time>
                  </div>
                  <h3 style={{ fontWeight: 700, color: "var(--text)", fontSize: "0.975rem", lineHeight: 1.4, marginBottom: "0.5rem" }}>{pub.title}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>{pub.venue}</p>
                  <a href={pub.doiUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8rem", color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
                    DOI: {pub.doi} ↗
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

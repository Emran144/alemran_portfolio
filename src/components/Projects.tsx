"use client";
import { useState } from "react";
import { projects, ProjectCategory } from "@/data/projects";
import SectionHeader from "./SectionHeader";

const categories: ("All" | ProjectCategory)[] = ["All", "Industry", "MLOps", "Research"];

export default function Projects() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" style={{ padding: "5rem 1.5rem", backgroundColor: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          title="Projects"
          subtitle="Industry, research & MLOps work"
        />

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "0.4rem 1.25rem",
                borderRadius: "2rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                cursor: "pointer",
                border: "1.5px solid",
                borderColor: active === cat ? "var(--accent)" : "var(--border)",
                backgroundColor: active === cat ? "var(--accent)" : "transparent",
                color: active === cat ? "#fff" : "var(--text-muted)",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((proj) => (
            <div
              key={proj.id}
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontWeight: 700, color: "var(--text)", fontSize: "1rem", lineHeight: 1.3 }}>
                    {proj.title}
                  </h3>
                  {proj.subtitle && (
                    <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.1rem" }}>
                      {proj.subtitle}
                    </p>
                  )}
                </div>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "0.2rem 0.5rem",
                    borderRadius: "0.375rem",
                    backgroundColor:
                      proj.category === "Industry"
                        ? "var(--accent-bg)"
                        : proj.category === "MLOps"
                        ? "var(--violet-bg)"
                        : "rgba(34,197,94,0.1)",
                    color:
                      proj.category === "Industry"
                        ? "var(--accent)"
                        : proj.category === "MLOps"
                        ? "var(--violet)"
                        : "#16a34a",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {proj.category}
                </span>
              </div>

              {/* Role + period */}
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.25rem" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 600 }}>
                  {proj.role}
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{proj.period}</span>
              </div>

              {/* Highlight */}
              {proj.highlight && (
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontStyle: "italic",
                    color: "var(--text-muted)",
                    borderLeft: "2px solid var(--accent)",
                    paddingLeft: "0.625rem",
                  }}
                >
                  {proj.highlight}
                </p>
              )}

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.7rem",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "0.25rem",
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expand */}
              <button
                onClick={() => setExpanded(expanded === proj.id ? null : proj.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--accent)",
                  fontSize: "0.8rem",
                  textAlign: "left",
                  padding: 0,
                  fontWeight: 600,
                }}
              >
                {expanded === proj.id ? "▲ Less" : "▼ Details"}
              </button>

              {expanded === proj.id && (
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.375rem", marginTop: "0.25rem" }}>
                  {proj.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        color: "var(--text-muted)",
                        fontSize: "0.825rem",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: "var(--accent)", flexShrink: 0 }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

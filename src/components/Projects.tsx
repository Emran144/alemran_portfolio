"use client";
import { useState } from "react";
import { projects, Project, ProjectCategory } from "@/data/projects";
import { basePath } from "@/data/personal";
import SectionHeader from "./SectionHeader";

const CATS: ("All" | ProjectCategory)[] = ["All", "Industry", "MLOps", "Research"];

const catColor = (c: ProjectCategory) =>
  c === "Industry" ? { bg: "var(--accent-bg)", text: "var(--accent)" }
  : c === "MLOps"  ? { bg: "var(--violet-bg)", text: "var(--violet)" }
  :                  { bg: "var(--green-bg)", text: "var(--green)" };

const tagStyle = { fontSize: "0.7rem", padding: "0.2rem 0.5rem", borderRadius: "0.25rem", backgroundColor: "var(--bg-secondary)", color: "var(--text-muted)", border: "1px solid var(--border)" } as const;
const bulletStyle = { display: "flex", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6 } as const;
const labelStyle = { fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent)", marginBottom: "0.6rem" } as const;

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", listStyle: "none", margin: 0, padding: 0 }}>
      {tags.map(tag => <li key={tag} style={tagStyle}>{tag}</li>)}
    </ul>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "0.4rem", margin: 0, padding: 0, listStyle: "none" }}>
      {items.map((b, i) => (
        <li key={i} style={bulletStyle}>
          <span aria-hidden="true" style={{ color: "var(--accent)", flexShrink: 0 }}>▸</span>{b}
        </li>
      ))}
    </ul>
  );
}

function CategoryBadge({ category }: { category: ProjectCategory }) {
  const cc = catColor(category);
  return <span style={{ fontSize: "0.7rem", fontWeight: 700, padding: "0.2rem 0.5rem", borderRadius: "0.375rem", backgroundColor: cc.bg, color: cc.text, flexShrink: 0 }}>{category}</span>;
}

function FeaturedProject({ proj }: { proj: Project }) {
  return (
    <article className="card-hover" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", overflow: "hidden" }}>
      {proj.video && (
        <figure style={{ margin: 0, backgroundColor: "#000" }}>
          <video
            controls
            playsInline
            preload="none"
            poster={proj.video.poster ? `${basePath}${proj.video.poster}` : undefined}
            aria-label={`${proj.title} demo video`}
            style={{ display: "block", width: "100%", aspectRatio: "16 / 9", backgroundColor: "#000" }}
          >
            <source src={`${basePath}${proj.video.src}`} type="video/mp4" />
            Your browser does not support embedded video.{" "}
            <a href={`${basePath}${proj.video.src}`}>Download the demo</a>.
          </video>
          {proj.video.caption && (
            <figcaption style={{ fontSize: "0.75rem", color: "var(--text-muted)", padding: "0.5rem 1.5rem", backgroundColor: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}>
              ▶ {proj.video.caption}
            </figcaption>
          )}
        </figure>
      )}

      <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <p style={{ ...labelStyle, marginBottom: "0.35rem" }}>★ Featured project</p>
            <h3 style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.4rem", lineHeight: 1.25, letterSpacing: "-0.02em" }}>{proj.title}</h3>
            {proj.subtitle && <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.2rem" }}>{proj.subtitle}</p>}
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.35rem" }}>
            <CategoryBadge category={proj.category} />
            <time style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{proj.period}</time>
          </div>
        </header>

        <p style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: 600, marginTop: "-0.5rem" }}>{proj.role}</p>

        {proj.highlight && (
          <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)", borderLeft: "3px solid var(--accent)", paddingLeft: "0.75rem" }}>{proj.highlight}</p>
        )}

        {proj.summary && <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.75 }}>{proj.summary}</p>}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "1.75rem" }}>
          {proj.workflow && (
            <div>
              <h4 style={labelStyle}>How it works</h4>
              <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                {proj.workflow.map((step, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.65rem", fontSize: "0.84rem", lineHeight: 1.55, color: "var(--text-muted)" }}>
                    <span aria-hidden="true" style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", backgroundColor: "var(--accent-bg)", color: "var(--accent)", fontSize: "0.72rem", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <h4 style={labelStyle}>Highlights</h4>
              <Bullets items={proj.bullets} />
            </div>
          </div>
        </div>

        {proj.principle && (
          <blockquote style={{ margin: 0, padding: "1rem 1.25rem", borderRadius: "0.75rem", backgroundColor: "var(--accent-bg)", color: "var(--text)", fontSize: "0.85rem", lineHeight: 1.7 }}>
            <strong style={{ color: "var(--accent)" }}>Design principle — </strong>{proj.principle}
          </blockquote>
        )}

        {proj.stack && (
          <div>
            <h4 style={labelStyle}>Tech stack</h4>
            <Tags tags={proj.stack} />
          </div>
        )}
        {!proj.stack && <Tags tags={proj.tags} />}

        {proj.link && (
          <a href={proj.link.url} target="_blank" rel="noopener noreferrer" style={{ alignSelf: "flex-start", fontSize: "0.85rem", fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}>
            {proj.link.label} ↗
          </a>
        )}
      </div>
    </article>
  );
}

function ProjectCard({ proj, expanded, onToggle }: { proj: Project; expanded: boolean; onToggle: () => void }) {
  const detailsId = `project-${proj.id}-details`;
  return (
    <article className="card-hover card-lift" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", height: "100%", boxSizing: "border-box" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontWeight: 700, color: "var(--text)", fontSize: "0.975rem", lineHeight: 1.3 }}>{proj.title}</h3>
          {proj.subtitle && <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.1rem" }}>{proj.subtitle}</p>}
        </div>
        <CategoryBadge category={proj.category} />
      </header>

      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.25rem" }}>
        <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 600 }}>{proj.role}</span>
        <time style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{proj.period}</time>
      </div>

      {proj.highlight && (
        <p style={{ fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-muted)", borderLeft: "2px solid var(--accent)", paddingLeft: "0.625rem" }}>{proj.highlight}</p>
      )}

      <Tags tags={proj.tags} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginTop: "auto" }}>
        <button onClick={onToggle} aria-expanded={expanded} aria-controls={detailsId}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent)", fontSize: "0.8rem", textAlign: "left", padding: 0, fontWeight: 600 }}>
          {expanded ? "▲ Less" : "▼ Details"}
        </button>
        {proj.link && (
          <a href={proj.link.url} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--accent)", textDecoration: "none", padding: "0.25rem 0.6rem", border: "1px solid var(--accent)", borderRadius: "0.375rem" }}>
            {proj.link.label} ↗
          </a>
        )}
      </div>

      {expanded && (
        <div id={detailsId}>
          <Bullets items={proj.bullets} />
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");
  const [expanded, setExpanded] = useState<number | null>(null);
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);
  const featured = filtered.filter(p => p.featured);
  const rest = filtered.filter(p => !p.featured);

  return (
    <section id="projects" aria-labelledby="projects-heading" style={{ padding: "5rem 1.5rem", backgroundColor: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader id="projects-heading" title="Projects" subtitle="Industry, MLOps & academic research work" />

        <div role="group" aria-label="Filter projects by category" style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {CATS.map(cat => {
            const count = cat === "All" ? projects.length : projects.filter(p => p.category === cat).length;
            return (
              <button key={cat} aria-pressed={active === cat} onClick={() => setActive(cat)}
                style={{ padding: "0.4rem 1.1rem", borderRadius: "2rem", fontSize: "0.875rem", fontWeight: 600, cursor: "pointer", border: "1.5px solid", borderColor: active === cat ? "var(--accent)" : "var(--border)", backgroundColor: active === cat ? "var(--accent)" : "transparent", color: active === cat ? "var(--on-accent)" : "var(--text-muted)", transition: "all 0.2s" }}>
                {cat} <span style={{ opacity: 0.7, fontWeight: 500 }}>({count})</span>
              </button>
            );
          })}
        </div>

        {featured.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "1.5rem" }}>
            {featured.map(proj => <FeaturedProject key={proj.id} proj={proj} />)}
          </div>
        )}

        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          {rest.map(proj => (
            <li key={proj.id}>
              <ProjectCard proj={proj} expanded={expanded === proj.id} onToggle={() => setExpanded(expanded === proj.id ? null : proj.id)} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

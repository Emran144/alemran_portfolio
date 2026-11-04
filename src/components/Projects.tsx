"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects, Project, ProjectCategory } from "@/data/projects";
import { basePath } from "@/data/personal";
import SectionHeader from "./SectionHeader";

const CATS: ("All" | ProjectCategory)[] = ["All", "Industry", "MLOps", "Research"];

const catColor = (c: ProjectCategory) =>
  c === "Industry" ? { bg: "var(--accent-bg)", text: "var(--accent)" }
  : c === "MLOps"  ? { bg: "var(--violet-bg)", text: "var(--violet)" }
  :                  { bg: "var(--green-bg)", text: "var(--green)" };

type Video = NonNullable<Project["video"]>;

function VideoModal({ video, title, onClose }: { video: Video; title: string; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      opener?.focus();
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.caption ?? `${title} demo video`}
      onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 100, backgroundColor: "rgba(2,6,23,0.85)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
    >
      <div onClick={e => e.stopPropagation()} style={{ width: "min(1100px, 100%)", backgroundColor: "var(--bg-card)", borderRadius: "0.875rem", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 25px 60px rgba(0,0,0,0.5)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", padding: "0.75rem 1rem", borderBottom: "1px solid var(--border)" }}>
          <p style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text)" }}>{video.caption ?? title}</p>
          <button ref={closeRef} onClick={onClose} aria-label="Close video"
            style={{ background: "none", border: "1px solid var(--border)", borderRadius: "0.5rem", padding: "0.3rem 0.6rem", cursor: "pointer", color: "var(--text)", fontSize: "0.9rem", lineHeight: 1 }}>
            ✕
          </button>
        </div>
        <video
          controls
          autoPlay
          playsInline
          preload="metadata"
          poster={video.poster ? `${basePath}${video.poster}` : undefined}
          style={{ display: "block", width: "100%", maxHeight: "80vh", aspectRatio: "16 / 9", backgroundColor: "#000" }}
        >
          <source src={`${basePath}${video.src}`} type="video/mp4" />
          Your browser does not support embedded video. <a href={`${basePath}${video.src}`}>Download the demo</a>.
        </video>
      </div>
    </div>
  );
}

function ProjectCard({ proj, expanded, onToggle, onPlay }: { proj: Project; expanded: boolean; onToggle: () => void; onPlay: () => void }) {
  const detailsId = `project-${proj.id}-details`;
  const cc = catColor(proj.category);
  return (
    <article className="card-hover card-lift" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", height: "100%", boxSizing: "border-box" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontWeight: 700, color: "var(--text)", fontSize: "0.975rem", lineHeight: 1.3 }}>{proj.title}</h3>
          {proj.subtitle && <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.1rem" }}>{proj.subtitle}</p>}
        </div>
        <span style={{ fontSize: "0.7rem", fontWeight: 700, padding: "0.2rem 0.5rem", borderRadius: "0.375rem", backgroundColor: cc.bg, color: cc.text, flexShrink: 0 }}>{proj.category}</span>
      </header>

      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.25rem" }}>
        <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 600 }}>{proj.role}</span>
        <time style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{proj.period}</time>
      </div>

      {proj.highlight && (
        <p style={{ fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-muted)", borderLeft: "2px solid var(--accent)", paddingLeft: "0.625rem" }}>{proj.highlight}</p>
      )}

      <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", listStyle: "none", margin: 0, padding: 0 }}>
        {proj.tags.map(tag => (
          <li key={tag} style={{ fontSize: "0.7rem", padding: "0.2rem 0.5rem", borderRadius: "0.25rem", backgroundColor: "var(--bg-secondary)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>{tag}</li>
        ))}
      </ul>

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
        <div id={detailsId} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.375rem", margin: 0, padding: 0, listStyle: "none" }}>
            {proj.bullets.map((b, i) => (
              <li key={i} style={{ display: "flex", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.825rem", lineHeight: 1.6 }}>
                <span aria-hidden="true" style={{ color: "var(--accent)", flexShrink: 0 }}>▸</span>{b}
              </li>
            ))}
          </ul>
          {proj.video && (
            <button onClick={onPlay}
              style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "none", cursor: "pointer", backgroundColor: "var(--accent)", color: "var(--on-accent)", fontSize: "0.8rem", fontWeight: 700 }}>
              <span aria-hidden="true">▶</span> Watch demo video
            </button>
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [playing, setPlaying] = useState<Project | null>(null);
  const closeVideo = useCallback(() => setPlaying(null), []);
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

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

        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          {filtered.map(proj => (
            <li key={proj.id}>
              <ProjectCard
                proj={proj}
                expanded={expanded === proj.id}
                onToggle={() => setExpanded(expanded === proj.id ? null : proj.id)}
                onPlay={() => setPlaying(proj)}
              />
            </li>
          ))}
        </ul>
      </div>

      {playing?.video && <VideoModal video={playing.video} title={playing.title} onClose={closeVideo} />}
    </section>
  );
}

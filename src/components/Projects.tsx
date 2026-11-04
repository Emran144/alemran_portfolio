"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects, Project, ProjectCategory } from "@/data/projects";
import { basePath } from "@/data/personal";
import SectionHeader from "./SectionHeader";

const CATS: ("All" | ProjectCategory)[] = ["All", "Industry", "MLOps", "Research"];
const MAX_CARD_TAGS = 4;

const catColor = (c: ProjectCategory) =>
  c === "Industry" ? { bg: "var(--accent-bg)", text: "var(--accent)" }
  : c === "MLOps"  ? { bg: "var(--violet-bg)", text: "var(--violet)" }
  :                  { bg: "var(--green-bg)", text: "var(--green)" };

function CategoryBadge({ category }: { category: ProjectCategory }) {
  const cc = catColor(category);
  return (
    <span style={{ fontSize: "0.7rem", fontWeight: 700, padding: "0.2rem 0.55rem", borderRadius: "0.375rem", backgroundColor: cc.bg, color: cc.text, flexShrink: 0 }}>
      {category}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ fontSize: "0.72rem", padding: "0.2rem 0.55rem", borderRadius: "0.3rem", backgroundColor: "var(--bg-secondary)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
      {children}
    </li>
  );
}

const linkBtn = { display: "inline-flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8rem", fontWeight: 600, color: "var(--accent)", textDecoration: "none", padding: "0.35rem 0.75rem", border: "1px solid var(--accent)", borderRadius: "0.5rem", whiteSpace: "nowrap" } as const;

/* ---------- Detail dialog ---------- */

function ProjectDialog({ proj, onClose }: { proj: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const titleId = `project-${proj.id}-title`;

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key !== "Tab" || !panelRef.current) return;
      // Keep keyboard focus inside the dialog
      const focusable = panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), video[controls], [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
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

  const sectionLabel = { fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent)", marginBottom: "0.75rem" } as const;

  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="dialog-panel"
        onClick={e => e.stopPropagation()}
      >
        <header style={{ position: "sticky", top: 0, zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", padding: "1.25rem 1.5rem", backgroundColor: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.4rem" }}>
              <CategoryBadge category={proj.category} />
              <time style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{proj.period}</time>
            </div>
            <h3 id={titleId} style={{ fontWeight: 800, fontSize: "clamp(1.15rem, 3vw, 1.45rem)", color: "var(--text)", lineHeight: 1.25, letterSpacing: "-0.02em" }}>{proj.title}</h3>
            {proj.subtitle && <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginTop: "0.2rem" }}>{proj.subtitle}</p>}
            <p style={{ color: "var(--accent)", fontSize: "0.82rem", fontWeight: 600, marginTop: "0.35rem" }}>{proj.role}</p>
          </div>
          <button ref={closeRef} onClick={onClose} aria-label="Close project details"
            style={{ flexShrink: 0, background: "none", border: "1px solid var(--border)", borderRadius: "0.5rem", width: 36, height: 36, cursor: "pointer", color: "var(--text)", fontSize: "1rem", lineHeight: 1 }}>
            ✕
          </button>
        </header>

        <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {proj.highlight && (
            <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)", backgroundColor: "var(--accent-bg)", borderLeft: "3px solid var(--accent)", padding: "0.75rem 1rem", borderRadius: "0 0.5rem 0.5rem 0" }}>
              {proj.highlight}
            </p>
          )}

          {proj.video && (
            <figure style={{ margin: 0 }}>
              <div style={{ position: "relative", borderRadius: "0.75rem", overflow: "hidden", border: "1px solid var(--border)", backgroundColor: "#000", aspectRatio: "16 / 9" }}>
                {playing ? (
                  <video controls autoPlay playsInline preload="metadata"
                    poster={proj.video.poster ? `${basePath}${proj.video.poster}` : undefined}
                    style={{ display: "block", width: "100%", height: "100%" }}>
                    <source src={`${basePath}${proj.video.src}`} type="video/mp4" />
                    Your browser does not support embedded video. <a href={`${basePath}${proj.video.src}`}>Download the demo</a>.
                  </video>
                ) : (
                  <button onClick={() => setPlaying(true)} className="video-preview" aria-label={`Play ${proj.title} demo video`}
                    style={{ display: "block", width: "100%", height: "100%", padding: 0, border: "none", cursor: "pointer", position: "relative", background: "none" }}>
                    {proj.video.poster && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={`${basePath}${proj.video.poster}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    )}
                    <span aria-hidden="true" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(to top, rgba(2,6,23,0.65), rgba(2,6,23,0.15))" }}>
                      <span className="play-btn" style={{ width: 68, height: 68, borderRadius: "50%", backgroundColor: "var(--accent)", color: "var(--on-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", paddingLeft: 4, boxShadow: "0 8px 30px rgba(0,0,0,0.4)" }}>▶</span>
                    </span>
                  </button>
                )}
              </div>
              {proj.video.caption && <figcaption style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>{proj.video.caption}</figcaption>}
            </figure>
          )}

          {proj.overview && (
            <section>
              <h4 style={sectionLabel}>Overview</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.8 }}>{proj.overview}</p>
            </section>
          )}

          <section>
            <h4 style={sectionLabel}>{proj.overview ? "What I built" : "Key contributions"}</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", margin: 0, padding: 0, listStyle: "none" }}>
              {proj.bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: "0.65rem", color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>
                  <span aria-hidden="true" style={{ color: "var(--accent)", flexShrink: 0 }}>▸</span>{b}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 style={sectionLabel}>Technologies & methods</h4>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", listStyle: "none", margin: 0, padding: 0 }}>
              {proj.tags.map(t => <Tag key={t}>{t}</Tag>)}
            </ul>
          </section>

          {proj.link && (
            <div>
              <a href={proj.link.url} target="_blank" rel="noopener noreferrer" style={linkBtn}>{proj.link.label} ↗</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Card ---------- */

function ProjectCard({ proj, onOpen }: { proj: Project; onOpen: () => void }) {
  const summary = proj.overview ?? proj.bullets[0];
  const extraTags = proj.tags.length - MAX_CARD_TAGS;
  return (
    <article className="project-card" onClick={onOpen}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem" }}>
        <div style={{ minWidth: 0 }}>
          <h3 style={{ fontWeight: 700, color: "var(--text)", fontSize: "1rem", lineHeight: 1.3 }}>{proj.title}</h3>
          {proj.subtitle && <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.15rem" }}>{proj.subtitle}</p>}
        </div>
        <CategoryBadge category={proj.category} />
      </header>

      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.25rem" }}>
        <span style={{ fontSize: "0.78rem", color: "var(--accent)", fontWeight: 600 }}>{proj.role}</span>
        <time style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{proj.period}</time>
      </div>

      <p className="line-clamp-3" style={{ color: "var(--text-muted)", fontSize: "0.84rem", lineHeight: 1.65 }}>{summary}</p>

      {proj.highlight && (
        <p className="line-clamp-2" style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text)", borderLeft: "2px solid var(--accent)", paddingLeft: "0.6rem" }}>{proj.highlight}</p>
      )}

      <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", listStyle: "none", margin: 0, padding: 0 }}>
        {proj.tags.slice(0, MAX_CARD_TAGS).map(t => <Tag key={t}>{t}</Tag>)}
        {extraTags > 0 && <Tag>+{extraTags}</Tag>}
      </ul>

      <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginTop: "auto", paddingTop: "0.75rem", borderTop: "1px solid var(--border)" }}>
        <button onClick={e => { e.stopPropagation(); onOpen(); }} aria-haspopup="dialog"
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent)", fontSize: "0.82rem", padding: "0.25rem 0", fontWeight: 700 }}>
          View details <span aria-hidden="true">→</span>
        </button>
        <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
          {proj.video && (
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--accent)" }} title="Includes demo video">▶ Demo</span>
          )}
          {proj.link && (
            <a href={proj.link.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ ...linkBtn, fontSize: "0.75rem", padding: "0.25rem 0.6rem" }}>
              {proj.link.label} ↗
            </a>
          )}
        </div>
      </footer>
    </article>
  );
}

/* ---------- Section ---------- */

export default function Projects() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");
  const [openId, setOpenId] = useState<number | null>(null);
  const close = useCallback(() => setOpenId(null), []);
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);
  const openProject = projects.find(p => p.id === openId);

  return (
    <section id="projects" aria-labelledby="projects-heading" style={{ padding: "5rem 1.5rem", backgroundColor: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader id="projects-heading" title="Projects" subtitle="Industry, MLOps & academic research work — open any project for the full story" />

        <div role="group" aria-label="Filter projects by category" style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
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
            <li key={proj.id} style={{ display: "flex" }}>
              <ProjectCard proj={proj} onOpen={() => setOpenId(proj.id)} />
            </li>
          ))}
        </ul>
      </div>

      {openProject && <ProjectDialog proj={openProject} onClose={close} />}
    </section>
  );
}

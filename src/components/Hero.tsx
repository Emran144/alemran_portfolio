"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { personal } from "@/data/personal";

const ROLES = [
  "Senior ML Engineer",
  "ML Team Lead",
  "Document AI Specialist",
  "GenAI Engineer",
  "Applied ML Researcher",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length)
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    else if (!deleting && displayed.length === current.length)
      t = setTimeout(() => setDeleting(true), 2000);
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    else { setDeleting(false); setRoleIdx(i => (i + 1) % ROLES.length); }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "7rem 1.5rem 5rem",
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(ellipse 80% 50% at 50% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent)",
      }}
    >
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)", backgroundSize: "60px 60px", opacity: 0.25 }} />

      <div style={{ maxWidth: 1000, width: "100%", position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: "4rem", flexWrap: "wrap", justifyContent: "center" }}>

        {/* Avatar */}
        <div aria-hidden="true" style={{ flexShrink: 0 }}>
          <div style={{ width: 260, height: 260, borderRadius: "50%", padding: 3, background: "linear-gradient(135deg, var(--accent), var(--violet))", boxShadow: "0 0 48px color-mix(in srgb, var(--accent) 25%, transparent)" }}>
            <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", border: "4px solid var(--bg)" }}>
              <Image
                src="/alemran_portfolio/avatar.png"
                alt="Md Al Emran Hossain"
                width={260}
                height={260}
                priority
                style={{ objectFit: "cover", objectPosition: "center 8%", width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 280, maxWidth: 560 }}>
          <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            👋 Hello, I&apos;m
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5.5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--text)", marginBottom: "0.875rem" }}>
            {personal.name}
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.35rem)", fontWeight: 600, color: "var(--accent)", minHeight: "1.8em", marginBottom: "1.25rem" }}>
            {displayed}
            <span aria-hidden="true" style={{ borderRight: "2px solid var(--accent)", marginLeft: "2px", animation: "blink 1s step-end infinite" }} />
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "clamp(0.875rem, 1.8vw, 0.975rem)", lineHeight: 1.85, marginBottom: "2rem" }}>
            {personal.tagline}
          </p>

          <dl style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginBottom: "2rem" }}>
            {personal.stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center", padding: "0.6rem 1.25rem", borderRadius: "0.75rem", backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <dd style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1, margin: 0 }}>{s.value}</dd>
                <dt style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>{s.label}</dt>
              </div>
            ))}
          </dl>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              style={{ padding: "0.7rem 1.75rem", borderRadius: "0.625rem", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", border: "none", backgroundColor: "var(--accent)", color: "#fff" }}
            >
              View Projects
            </button>
            <a
              href={personal.resumeUrl}
              download
              style={{ padding: "0.7rem 1.75rem", borderRadius: "0.625rem", fontWeight: 600, fontSize: "0.9rem", border: "1.5px solid var(--border)", backgroundColor: "transparent", color: "var(--text)", textDecoration: "none" }}
            >
              Download CV
            </a>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{ padding: "0.7rem 1.75rem", borderRadius: "0.625rem", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", border: "1.5px solid var(--border)", backgroundColor: "transparent", color: "var(--text)" }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      <div aria-hidden="true" style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem", color: "var(--text-muted)", fontSize: "0.7rem" }}>
        <div style={{ width: 20, height: 32, border: "2px solid var(--border)", borderRadius: 10, display: "flex", justifyContent: "center", paddingTop: 4 }}>
          <div style={{ width: 4, height: 8, borderRadius: 2, backgroundColor: "var(--accent)", animation: "scrollDot 1.5s ease-in-out infinite" }} />
        </div>
        <span>scroll</span>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scrollDot { 0%{transform:translateY(0);opacity:1} 100%{transform:translateY(10px);opacity:0} }
      `}</style>
    </section>
  );
}

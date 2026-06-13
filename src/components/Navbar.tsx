"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { usePortfolio } from "@/context/PortfolioContext";

const NAV_LINKS = [
  { label: "About",        href: "#about" },
  { label: "Experience",   href: "#experience" },
  { label: "Projects",     href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Skills",       href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { isEditMode, enterEditMode, exitEditMode } = usePortfolio();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pwPrompt, setPwPrompt] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleEditToggle = () => {
    if (isEditMode) { exitEditMode(); return; }
    setPwPrompt(true);
    setPw("");
    setPwError(false);
  };

  const submitPw = (e: React.FormEvent) => {
    e.preventDefault();
    if (enterEditMode(pw)) { setPwPrompt(false); }
    else { setPwError(true); }
  };

  return (
    <>
      <header
        role="banner"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          transition: "background 0.3s, border 0.3s",
          backgroundColor: scrolled ? (theme === "dark" ? "rgba(15,23,42,0.92)" : "rgba(248,250,252,0.92)") : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Go to top"
            style={{ background: "none", border: "none", cursor: "pointer", fontWeight: 800, fontSize: "1.2rem", color: "var(--accent)", letterSpacing: "-0.03em" }}
          >
            Emran<span style={{ color: "var(--text)" }}>.</span>
          </button>

          <nav aria-label="Main navigation" className="desktop-nav">
            <ul style={{ display: "flex", gap: "0.25rem", listStyle: "none", margin: 0, padding: 0, alignItems: "center" }}>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.85rem", fontWeight: 500, color: "var(--text-muted)", padding: "0.4rem 0.75rem", borderRadius: "0.5rem", transition: "color 0.2s, background 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.background = "var(--accent-bg)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.background = "transparent"; }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <button
              onClick={handleEditToggle}
              title={isEditMode ? "Exit edit mode" : "Enter edit mode"}
              style={{ padding: "0.35rem 0.875rem", borderRadius: "0.5rem", fontSize: "0.78rem", fontWeight: 700, cursor: "pointer", border: `1px solid ${isEditMode ? "var(--accent)" : "var(--border)"}`, backgroundColor: isEditMode ? "var(--accent)" : "transparent", color: isEditMode ? "#fff" : "var(--text-muted)", transition: "all 0.2s" }}
            >
              {isEditMode ? "✓ Editing" : "✏️ Edit"}
            </button>
            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              style={{ background: "none", border: "1px solid var(--border)", borderRadius: "0.5rem", padding: "0.4rem 0.6rem", cursor: "pointer", color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1 }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="mobile-menu-btn"
              style={{ background: "none", border: "1px solid var(--border)", borderRadius: "0.5rem", padding: "0.4rem 0.65rem", cursor: "pointer", color: "var(--text)", fontSize: "1rem", lineHeight: 1 }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav aria-label="Mobile navigation" style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}>
            <ul style={{ listStyle: "none", margin: 0, padding: "0.5rem 1.5rem" }}>
              {NAV_LINKS.map((l) => (
                <li key={l.href} style={{ borderBottom: "1px solid var(--border)" }}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "0.875rem 0", fontSize: "1rem", color: "var(--text)" }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {pwPrompt && (
        <div
          role="dialog" aria-modal="true" aria-labelledby="edit-modal-title"
          style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
          onClick={() => setPwPrompt(false)}
        >
          <div onClick={e => e.stopPropagation()} style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "2rem", width: "min(380px,90vw)", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <h2 id="edit-modal-title" style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text)", marginBottom: "0.5rem" }}>Enter Edit Mode</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Edit content directly in the browser. Changes are saved locally.</p>
            <form onSubmit={submitPw}>
              <input
                type="password" value={pw} onChange={e => { setPw(e.target.value); setPwError(false); }}
                placeholder="Password" autoFocus
                style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: `1px solid ${pwError ? "#ef4444" : "var(--border)"}`, backgroundColor: "var(--bg)", color: "var(--text)", fontSize: "1rem", outline: "none", boxSizing: "border-box" }}
              />
              {pwError && <p style={{ color: "#ef4444", fontSize: "0.8rem", marginTop: "0.4rem" }}>Incorrect password.</p>}
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
                <button type="submit" style={{ flex: 1, padding: "0.625rem", borderRadius: "0.5rem", fontWeight: 600, cursor: "pointer", border: "none", backgroundColor: "var(--accent)", color: "#fff" }}>Unlock</button>
                <button type="button" onClick={() => setPwPrompt(false)} style={{ flex: 1, padding: "0.625rem", borderRadius: "0.5rem", fontWeight: 600, cursor: "pointer", border: "1px solid var(--border)", backgroundColor: "transparent", color: "var(--text)" }}>Cancel</button>
              </div>
              <p style={{ fontSize: "0.73rem", color: "var(--text-muted)", marginTop: "1rem", textAlign: "center" }}>
                Default: <code style={{ color: "var(--accent)" }}>emran1234</code>
              </p>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .desktop-nav { display: flex !important; } .mobile-menu-btn { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } }
      `}</style>
    </>
  );
}

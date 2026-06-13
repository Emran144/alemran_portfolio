"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s",
        backgroundColor: scrolled
          ? theme === "dark"
            ? "rgba(15,23,42,0.92)"
            : "rgba(248,250,252,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid var(--border)` : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            fontWeight: 700,
            fontSize: "1.25rem",
            color: "var(--accent)",
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: "-0.02em",
          }}
        >
          Emran<span style={{ color: "var(--text)" }}>.</span>
        </button>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hidden-mobile">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-muted)",
                transition: "color 0.2s",
                padding: "0.25rem 0",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-muted)")
              }
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Right controls */}
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              background: "none",
              border: `1px solid var(--border)`,
              borderRadius: "0.5rem",
              padding: "0.4rem 0.6rem",
              cursor: "pointer",
              color: "var(--text-muted)",
              fontSize: "1rem",
              transition: "all 0.2s",
            }}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="show-mobile"
            style={{
              background: "none",
              border: `1px solid var(--border)`,
              borderRadius: "0.5rem",
              padding: "0.4rem 0.6rem",
              cursor: "pointer",
              color: "var(--text)",
              fontSize: "1.1rem",
            }}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            backgroundColor: "var(--bg)",
            borderTop: `1px solid var(--border)`,
            padding: "1rem 1.5rem",
          }}
        >
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.75rem 0",
                fontSize: "1rem",
                color: "var(--text)",
                borderBottom: `1px solid var(--border)`,
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}

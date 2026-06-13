"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { personal } from "@/data/personal";

const roles = [
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
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.5rem 4rem",
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, color-mix(in srgb, var(--accent) 15%, transparent), transparent)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 1000,
          width: "100%",
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "4rem",
          flexWrap: "wrap",
        }}
      >
        {/* Avatar */}
        <div style={{ flexShrink: 0 }}>
          <div
            style={{
              position: "relative",
              width: 220,
              height: 220,
              borderRadius: "50%",
              padding: 4,
              background: "linear-gradient(135deg, var(--accent), var(--violet))",
              boxShadow: "0 0 40px color-mix(in srgb, var(--accent) 30%, transparent)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid var(--bg)",
              }}
            >
              <Image
                src="/alemran_portfolio/avatar.png"
                alt="Md Al Emran Hossain"
                width={220}
                height={220}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div style={{ textAlign: "left", minWidth: 280, flex: 1 }}>
          <p
            style={{
              color: "var(--accent)",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            👋 Hello, I&apos;m
          </p>

          <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 3.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--text)",
              marginBottom: "1rem",
            }}
          >
            {personal.name}
          </h1>

          <div
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              fontWeight: 600,
              color: "var(--accent)",
              minHeight: "2em",
              marginBottom: "1.25rem",
            }}
          >
            {displayed}
            <span
              style={{
                borderRight: "2px solid var(--accent)",
                marginLeft: "2px",
                animation: "blink 1s step-end infinite",
              }}
            />
          </div>

          <p
            style={{
              maxWidth: 560,
              marginBottom: "2rem",
              color: "var(--text-muted)",
              fontSize: "clamp(0.875rem, 1.8vw, 1rem)",
              lineHeight: 1.8,
            }}
          >
            {personal.tagline}
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {personal.stats.map((s) => (
              <div
                key={s.label}
                style={{
                  textAlign: "center",
                  padding: "0.6rem 1.25rem",
                  borderRadius: "0.75rem",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "var(--accent)",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button
              onClick={() => scrollTo("#projects")}
              style={{
                padding: "0.7rem 1.75rem",
                borderRadius: "0.625rem",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                border: "none",
                backgroundColor: "var(--accent)",
                color: "#fff",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
            >
              View Projects
            </button>
            <a
              href={personal.resumeUrl}
              download
              style={{
                padding: "0.7rem 1.75rem",
                borderRadius: "0.625rem",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                border: "1.5px solid var(--border)",
                backgroundColor: "transparent",
                color: "var(--text)",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.borderColor = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.borderColor = "var(--border)")
              }
            >
              Download CV
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              style={{
                padding: "0.7rem 1.75rem",
                borderRadius: "0.625rem",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                border: "1.5px solid var(--border)",
                backgroundColor: "transparent",
                color: "var(--text)",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.borderColor = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.borderColor = "var(--border)")
              }
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem",
          color: "var(--text-muted)",
          fontSize: "0.75rem",
        }}
      >
        <div
          style={{
            width: 20,
            height: 32,
            border: "2px solid var(--border)",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            paddingTop: 4,
          }}
        >
          <div
            style={{
              width: 4,
              height: 8,
              borderRadius: 2,
              backgroundColor: "var(--accent)",
              animation: "scrollDot 1.5s ease-in-out infinite",
            }}
          />
        </div>
        <span>scroll</span>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1 }
          100% { transform: translateY(10px); opacity: 0 }
        }
        @media (max-width: 640px) {
          #hero > div > div:first-child { display: flex; justify-content: center; }
        }
      `}</style>
    </section>
  );
}

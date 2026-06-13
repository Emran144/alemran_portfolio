"use client";
import { useState } from "react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function EditToolbar() {
  const { isEditMode, exitEditMode, resetAll, exportData } = usePortfolio();
  const [showConfirm, setShowConfirm] = useState(false);

  if (!isEditMode) return null;

  return (
    <div
      role="toolbar"
      aria-label="Edit mode toolbar"
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--accent)",
        borderRadius: "3rem",
        padding: "0.625rem 1.25rem",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontSize: "0.75rem",
          fontWeight: 700,
          color: "var(--accent)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          paddingRight: "0.5rem",
          borderRight: "1px solid var(--border)",
        }}
      >
        ✏️ Edit Mode
      </span>

      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
        Click any text to edit
      </span>

      <button onClick={exportData} style={btnStyle("#10b981")}>
        ↓ Export JSON
      </button>

      {showConfirm ? (
        <>
          <span style={{ fontSize: "0.75rem", color: "#ef4444" }}>Reset all edits?</span>
          <button onClick={() => { resetAll(); setShowConfirm(false); }} style={btnStyle("#ef4444")}>
            Yes, Reset
          </button>
          <button onClick={() => setShowConfirm(false)} style={btnStyle("var(--text-muted)")}>
            Cancel
          </button>
        </>
      ) : (
        <button onClick={() => setShowConfirm(true)} style={btnStyle("var(--text-muted)")}>
          ↺ Reset
        </button>
      )}

      <button onClick={exitEditMode} style={btnStyle("var(--accent)")}>
        ✓ Done
      </button>
    </div>
  );
}

function btnStyle(color: string): React.CSSProperties {
  return {
    padding: "0.35rem 0.875rem",
    borderRadius: "2rem",
    fontSize: "0.78rem",
    fontWeight: 600,
    cursor: "pointer",
    border: `1px solid ${color}`,
    backgroundColor: "transparent",
    color: color,
    transition: "all 0.15s",
    whiteSpace: "nowrap",
  };
}

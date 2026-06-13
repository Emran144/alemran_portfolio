interface Props {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeader({ title, subtitle, id }: Props) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <h2 id={id} style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.03em", marginBottom: "0.4rem" }}>
        {title}<span style={{ color: "var(--accent)" }}>.</span>
      </h2>
      {subtitle && <p style={{ color: "var(--text-muted)", fontSize: "0.975rem" }}>{subtitle}</p>}
      <div style={{ marginTop: "0.75rem", width: "3rem", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg, var(--accent), var(--violet))" }} />
    </div>
  );
}

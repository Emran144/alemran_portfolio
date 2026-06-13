"use client";
import { useRef, useEffect, type ElementType, type CSSProperties } from "react";
import { usePortfolio } from "@/context/PortfolioContext";

interface Props {
  value: string;
  onSave: (val: string) => void;
  as?: ElementType;
  style?: CSSProperties;
  multiline?: boolean;
  placeholder?: string;
}

export default function EditableText({ value, onSave, as: Tag = "span", style, multiline, placeholder }: Props) {
  const { isEditMode } = usePortfolio();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current && ref.current.textContent !== value) {
      ref.current.textContent = value;
    }
  }, [value]);

  if (!isEditMode) {
    const El = Tag as ElementType;
    return <El style={style}>{value}</El>;
  }

  const El = Tag as ElementType;
  return (
    <El
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      data-placeholder={placeholder}
      onBlur={(e: React.FocusEvent<HTMLElement>) => {
        const text = e.currentTarget.textContent?.trim() ?? "";
        if (text !== value) onSave(text || value);
      }}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (!multiline && e.key === "Enter") { e.preventDefault(); (e.target as HTMLElement).blur(); }
      }}
      style={{
        ...style,
        outline: "none",
        borderBottom: "1.5px dashed var(--accent)",
        cursor: "text",
        minWidth: "2ch",
        borderRadius: 0,
      }}
    />
  );
}

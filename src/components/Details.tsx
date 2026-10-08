import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import type { Capture } from "../data/captures";
import { Placeholder } from "./Placeholder";
import { Screenshot } from "./Screenshot";
export function Details({
  items,
  captures,
}: {
  items: string[][];
  captures?: Record<string, Capture[]>;
}) {
  const [open, setOpen] = useState<number | null>(captures ? 0 : null);
  return (
    <div className="detail-list">
      {items.map(([label, title, desc, screen], i) => (
        <div className={`detail-item ${open === i ? "open" : ""}`} key={label}>
          <button
            className="detail-toggle"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`detail-${label.replaceAll(" ", "-")}`}
          >
            <span className="detail-number">0{i + 1}</span>
            <span>
              <strong>{label}</strong>
              <small>{title}</small>
            </span>
            {open === i ? <Minus size={18} /> : <Plus size={18} />}
          </button>
          {open === i && (
            <div
              id={`detail-${label.replaceAll(" ", "-")}`}
              className="detail-content"
            >
              <p>{desc}</p>
              {captures?.[label] ? (
                <div
                  className={`capture-gallery ${captures[label][0]?.project === "matchimnae" ? "food-gallery" : ""}`}
                >
                  {captures[label].map((c) => (
                    <Screenshot key={c.file} capture={c} />
                  ))}
                </div>
              ) : (
                <Placeholder label={screen} small />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

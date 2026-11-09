"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Copy, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { profile } from "@/data/content";

const items = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Journey", "/journey"],
  ["Stack", "/stack"],
  ["Certifications", "/certifications"],
  ["Leadership", "/leadership"],
  ["Contact", "/contact"],
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    const openHandler = () => setOpen(true);
    window.addEventListener("keydown", handler);
    window.addEventListener("open-command-palette", openHandler);
    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener("open-command-palette", openHandler);
    };
  }, []);

  return (
    <>
      <button className="command-trigger" type="button" onClick={() => setOpen(true)}>ask anything</button>
      {open && <div className="palette-backdrop" onMouseDown={() => setOpen(false)}>
        <Command className="palette" onMouseDown={(event) => event.stopPropagation()}>
          <div className="palette-input"><Search size={15} /><Command.Input autoFocus placeholder="ask anything" /></div>
          <Command.List>
            <Command.Empty>No results.</Command.Empty>
            <Command.Group heading="jump to">
              {items.map(([label, href]) => (
                <Command.Item key={href} onSelect={() => { router.push(href); setOpen(false); }}>
                  <span>{label}</span><span className="palette-key">↵</span>
                </Command.Item>
              ))}
              <Command.Item onSelect={() => { navigator.clipboard.writeText(profile.email); setOpen(false); }}>
                <span>Copy email</span><Copy size={14} />
              </Command.Item>
            </Command.Group>
          </Command.List>
          <div className="palette-footer">esc to close <span>⌘K / ctrl K</span></div>
        </Command>
      </div>}
    </>
  );
}

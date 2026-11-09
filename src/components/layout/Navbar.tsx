"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  ["Projects", "/projects"],
  ["Journey", "/journey"],
  ["Stack", "/stack"],
  ["Certifications", "/certifications"],
  ["Leadership", "/leadership"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">+</span> peter victor
        </Link>
        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label.toLowerCase()}</Link>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <button className="menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}

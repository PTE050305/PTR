"use client";

import { FormEvent, useState } from "react";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { profile } from "@/data/content";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending…");
    const form = event.currentTarget;
    const response = await fetch("/api/contact", { method: "POST", body: new FormData(form) });
    setStatus(response.ok ? "message sent — thank you." : "something went wrong. email me directly instead.");
    if (response.ok) form.reset();
  }
  return <SiteChrome><main><div className="wrap page-hero"><div className="kicker">07 — contact</div><h1>let&apos;s make something clearer.</h1><p>Have a project, internship, or conversation in mind? The fastest route is <a className="text-link" href={`mailto:${profile.email}`}>{profile.email}</a>.</p></div><section className="section"><div className="wrap"><form className="contact-form" onSubmit={submit}><div className="field"><label htmlFor="name">your name</label><input id="name" name="name" required /></div><div className="field"><label htmlFor="email">your email</label><input id="email" name="email" type="email" required /></div><div className="field"><label htmlFor="message">your message</label><textarea id="message" name="message" required /></div><input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} /><button className="button button-primary" type="submit">send message →</button>{status && <p className="form-status" role="status">{status}</p>}</form></div></section></main></SiteChrome>;
}

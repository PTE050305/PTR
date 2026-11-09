import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const form = await request.formData();
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();
  const honeypot = String(form.get("website") ?? "").trim();
  if (honeypot) return NextResponse.json({ ok: true });
  if (!name || !email || !message || message.length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please provide a valid message." }, { status: 400 });
  }
  if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio contact <onboarding@resend.dev>",
    to: "pvdawis@gmail.com",
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    text: `${message}\n\nFrom: ${name} <${email}>`,
  });
  if (error) return NextResponse.json({ error: "Unable to send message." }, { status: 502 });
  return NextResponse.json({ ok: true });
}

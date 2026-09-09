import { NextResponse } from "next/server";

type Payload = {
  name: string;
  email: string;
  message: string;
  phone?: string;
  stack?: string;
  engagement?: string;
};

function parse(body: unknown): Payload | null {
  if (typeof body !== "object" || body === null) return null;
  const b = body as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

  const name = str(b.name);
  const email = str(b.email);
  const message = str(b.message);
  if (!name || !message) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return null;

  return {
    name: name.slice(0, 200),
    email: email.slice(0, 320),
    message: message.slice(0, 5000),
    phone: str(b.phone).slice(0, 40) || undefined,
    stack: str(b.stack).slice(0, 80) || undefined,
    engagement: str(b.engagement).slice(0, 80) || undefined,
  };
}

export async function POST(request: Request) {
  const payload = parse(await request.json().catch(() => null));
  if (!payload) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    // No delivery target configured yet — accept the submission so the form is
    // usable in preview, and leave a trace in the deployment logs.
    console.info("[contact] no CONTACT_WEBHOOK_URL set; submission not delivered", {
      email: payload.email,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}

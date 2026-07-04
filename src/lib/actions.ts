"use server";

import fs from "fs";
import path from "path";

export type BookingState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitBooking(
  _prev: BookingState,
  formData: FormData
): Promise<BookingState> {
  const name = (formData.get("name") as string)?.trim();
  const company = (formData.get("company") as string)?.trim();
  const role = (formData.get("role") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const interest = (formData.get("interest") as string)?.trim();
  const why = (formData.get("why") as string)?.trim();
  const howToHelp = (formData.get("howToHelp") as string)?.trim();

  if (!name || !company || !email || !interest || !why) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const submission = {
    name,
    company,
    role,
    email,
    interest,
    why,
    howToHelp,
    submittedAt: new Date().toISOString(),
  };

  // --- Send via Resend if API key is configured ---
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const html = `
      <h2>New discovery call request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Role:</strong> ${role || "—"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Primary interest:</strong> ${interest}</p>
      <hr/>
      <p><strong>Why interested:</strong><br/>${why.replace(/\n/g, "<br/>")}</p>
      <p><strong>How they can help:</strong><br/>${howToHelp ? howToHelp.replace(/\n/g, "<br/>") : "—"}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Treehouze Contact <noreply@treehouze.de>",
        to: ["hello@treehouze.de"],
        reply_to: email,
        subject: `Discovery call request — ${company} (${name})`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
    }
  }

  // --- Always persist locally as fallback / audit log ---
  try {
    const filePath = path.join(process.cwd(), "submissions.json");
    let existing: typeof submission[] = [];
    if (fs.existsSync(filePath)) {
      existing = JSON.parse(fs.readFileSync(filePath, "utf8"));
    }
    existing.push(submission);
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
  } catch {
    // non-fatal — don't block submission on file write failure
  }

  return { status: "success" };
}

"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { whatsappLink } from "@/lib/site";

export default function QuoteForm({
  defaultService,
  compact = false,
}: {
  defaultService?: string;
  compact?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const phone = form.get("phone");
    const email = form.get("email");
    const company = form.get("company");
    const city = form.get("city");
    const service = form.get("service");
    const budget = form.get("budget");
    const message = form.get("message");

    const text = [
      "New Quote Request",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      company ? `Company: ${company}` : null,
      city ? `City: ${city}` : null,
      service ? `Service: ${service}` : null,
      budget ? `Budget: ${budget}` : null,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank");
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface rounded-2xl p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          type="text"
          placeholder="Your name *"
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-red focus:outline-none"
        />
        <input
          name="phone"
          required
          type="tel"
          placeholder="Phone number *"
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-red focus:outline-none"
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          name="email"
          type="email"
          placeholder="Email address"
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-red focus:outline-none"
        />
        <input
          name="company"
          type="text"
          placeholder="Company name"
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-red focus:outline-none"
        />
      </div>

      {!compact && (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            name="city"
            type="text"
            placeholder="City"
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-red focus:outline-none"
          />
          <input
            name="budget"
            type="text"
            placeholder="Budget (optional)"
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-red focus:outline-none"
          />
        </div>
      )}

      <select
        name="service"
        defaultValue={defaultService ?? ""}
        className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-red focus:outline-none"
      >
        <option value="">Select a service</option>
        {services.map((s) => (
          <option key={s.slug} value={s.name}>
            {s.name}
          </option>
        ))}
      </select>

      <textarea
        name="message"
        rows={compact ? 3 : 4}
        placeholder="Tell us about your project..."
        className="mt-4 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-red focus:outline-none"
      />

      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-red px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(224,30,43,0.5)] transition-transform hover:scale-[1.02]"
      >
        Send via WhatsApp
      </button>

      {submitted && (
        <p className="mt-3 text-center text-xs text-muted">
          Opening WhatsApp with your details — if it didn&apos;t open, call us directly.
        </p>
      )}
    </form>
  );
}

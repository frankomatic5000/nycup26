"use client";

import { useState } from "react";

export function EmailSignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  return (
    <form
      className="grid gap-3 rounded-3xl border border-white/15 bg-white/5 p-4 backdrop-blur"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus("done");
      }}
    >
      <label className="grid gap-2 text-sm text-white/80" htmlFor="email">
        Email for launch updates
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="name@email.com"
          className="h-12 rounded-2xl border border-white/15 bg-slate-950/70 px-4 text-base text-white outline-none transition placeholder:text-white/35 focus:border-emerald-300"
        />
      </label>
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-2xl bg-emerald-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
      >
        Join the waitlist
      </button>
      <p className="text-xs leading-5 text-white/65">
        Prototype only — wire this to the chosen email provider before launch.
      </p>
      {status === "done" ? (
        <p className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-100">
          Thanks. This prototype captured your email locally for validation.
        </p>
      ) : null}
    </form>
  );
}

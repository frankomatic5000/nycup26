"use client";

import { useState } from "react";

export function EmailSignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  return (
    <form
      className="grid gap-3 rounded-[1.75rem] border border-white/12 bg-white/[0.06] p-4 shadow-[0_20px_80px_rgba(2,6,23,0.28)] backdrop-blur"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus("done");
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <label className="text-sm font-medium text-white/85" htmlFor="email">
          Email for launch updates
        </label>
        <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-100">
          Prototype
        </span>
      </div>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="name@email.com"
        className="h-12 rounded-2xl border border-white/12 bg-slate-950/70 px-4 text-base text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
      />
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-300 via-lime-300 to-yellow-300 px-5 text-sm font-semibold text-slate-950 transition hover:brightness-105"
      >
        Join the waitlist
      </button>
      <p className="text-xs leading-5 text-white/65">
        Keep this connected to the chosen email provider before production launch.
      </p>
      {status === "done" ? (
        <p className="rounded-2xl border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 text-sm text-emerald-100">
          Thanks. This prototype captured your email locally for validation.
        </p>
      ) : null}
    </form>
  );
}

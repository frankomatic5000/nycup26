"use client";

import { useState } from "react";

export function EmailSignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  return (
    <form
      className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-[#071423] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus("done");
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <label className="text-sm font-medium text-white/85" htmlFor="email">
          Email for launch updates
        </label>
        <span className="rounded-full border border-[#54b36b]/30 bg-[#54b36b]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a7e1b1]">
          Launch list
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
        className="h-12 rounded-2xl border border-white/10 bg-[#0a1a2e] px-4 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[#f5d300] focus:ring-2 focus:ring-[#f5d300]/20"
      />
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#f5d300] px-5 text-sm font-semibold text-[#071223]"
      >
        Join the waitlist
      </button>
      <p className="text-xs leading-5 text-white/65">
        Keep this connected to the chosen email provider before production launch.
      </p>
      {status === "done" ? (
        <p className="rounded-2xl border border-[#54b36b]/25 bg-[#54b36b]/10 px-3 py-2 text-sm text-[#d7f8dd]">
          You’re on the list. This prototype captured your email locally for validation.
        </p>
      ) : null}
    </form>
  );
}

"use client";

import { useMemo, useState, type ReactNode } from "react";
import { venues } from "@/data/site";

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
});

function monthKey(date: string) {
  return date.slice(0, 7);
}

function monthLabel(date: string) {
  return monthFormatter.format(new Date(`${date}T12:00:00`));
}

function shortDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export function VenueDirectory() {
  const monthOptions = useMemo(() => {
    const labels = new Map<string, string>();

    venues.forEach((venue) => {
      const key = monthKey(venue.date);
      if (!labels.has(key)) {
        labels.set(key, monthLabel(venue.date));
      }
    });

    return Array.from(labels.entries()).map(([value, label]) => ({ value, label }));
  }, []);

  const [activeMonth, setActiveMonth] = useState<string>("all");

  const filteredVenues = useMemo(() => {
    return venues
      .filter((venue) => (activeMonth === "all" ? true : monthKey(venue.date) === activeMonth))
      .sort((left, right) => left.date.localeCompare(right.date));
  }, [activeMonth]);

  return (
    <section className="grid gap-5 rounded-[2rem] border border-white/10 bg-[#08111f] p-4 shadow-[0_30px_120px_rgba(2,6,23,0.4)] sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-4 sm:pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Venue directory
          </p>
          <h3 className="max-w-2xl text-2xl font-black tracking-tight text-white sm:text-3xl">
            Editorial venue cards that feel like a matchday rundown.
          </h3>
          <p className="max-w-2xl text-sm leading-6 text-slate-300">
            Keep the venue list data-driven and swap in confirmed locations, dates, and ticket links without reworking the layout.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <FilterButton active={activeMonth === "all"} onClick={() => setActiveMonth("all")}>
            All dates
          </FilterButton>
          {monthOptions.map((option) => (
            <FilterButton
              key={option.value}
              active={activeMonth === option.value}
              onClick={() => setActiveMonth(option.value)}
            >
              {option.label}
            </FilterButton>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredVenues.map((venue, index) => (
          <article
            key={venue.id}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-4 text-white transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.07]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-300 via-cyan-300 to-fuchsia-400" />
            <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
              #{String(index + 1).padStart(2, "0")}
            </div>

            <div className="space-y-4">
              <div className="space-y-2 pr-14">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  {venue.city} · {venue.country}
                </p>
                <h4 className="text-xl font-bold tracking-tight text-white">{venue.name}</h4>
                <p className="text-sm text-slate-300">{venue.neighborhood}</p>
              </div>

              <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.22em]">
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-emerald-100">
                  {monthLabel(venue.date)}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/75">
                  Matchday {shortDate(venue.date)}
                </span>
              </div>

              <dl className="grid grid-cols-2 gap-3 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/8 bg-slate-950/65 p-3">
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Date</dt>
                  <dd className="mt-2 font-semibold text-white">{venue.date}</dd>
                </div>
                <div className="rounded-2xl border border-white/8 bg-slate-950/65 p-3">
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Time</dt>
                  <dd className="mt-2 font-semibold text-white">{venue.time}</dd>
                </div>
                <div className="col-span-2 rounded-2xl border border-white/8 bg-slate-950/65 p-3">
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Pickup window</dt>
                  <dd className="mt-2 font-semibold text-white">{venue.pickupWindow}</dd>
                </div>
              </dl>

              <p className="text-sm leading-6 text-slate-300">{venue.note}</p>
            </div>

            <a
              href={venue.ticketHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-105"
            >
              {venue.ticketLabel}
            </a>
          </article>
        ))}
      </div>

      {filteredVenues.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 p-4 text-sm text-slate-300">
          No venues match this month yet. Add more sample data or confirm the final schedule.
        </div>
      ) : null}
    </section>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-2 text-sm font-medium transition ${
        active
          ? "bg-white text-slate-950"
          : "border border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}

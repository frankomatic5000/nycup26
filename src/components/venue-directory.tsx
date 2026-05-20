"use client";

import { useMemo, useState, type ReactNode } from "react";
import { site, venues } from "@/data/site";

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
    <section className="grid gap-4 rounded-[2rem] border border-white/10 bg-[#071423] p-4 sm:p-5 lg:p-6">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#f5d300]">
            Venue runway
          </p>
          <h3 className="max-w-2xl text-2xl font-black tracking-tight text-white sm:text-3xl">
            Fast venue cards for mobile planning.
          </h3>
          <p className="max-w-2xl text-sm leading-6 text-slate-300">
            {site.name} stays data-driven so venue dates, benefits, and ticket links can change without a redesign.
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

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {filteredVenues.map((venue, index) => (
          <article
            key={venue.id}
            className="flex h-full flex-col rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_14px_40px_rgba(0,0,0,0.16)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1 pr-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                  {venue.city} · {venue.country}
                </p>
                <h4 className="text-xl font-bold tracking-tight text-white">{venue.name}</h4>
                <p className="text-sm text-slate-300">{venue.neighborhood}</p>
              </div>
              <span className="rounded-full bg-[#12345d] px-3 py-1 text-xs font-semibold text-white">
                #{String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.22em]">
              <span className="rounded-full bg-[#f5d300] px-3 py-1 text-[#071223]">{shortDate(venue.date)}</span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-white/80">
                {venue.time}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-white/80">
                {monthLabel(venue.date)}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">{venue.note}</p>

            <div className="mt-4 rounded-[1rem] border border-white/10 bg-[#0a1a2e] px-3 py-2 text-sm text-slate-300">
              <span className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Status</span>
              <p className="mt-1 font-medium text-white">{venue.pickupWindow}</p>
            </div>

            <a
              href={venue.ticketHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-[#f5d300] px-4 py-3 text-sm font-semibold text-[#071223]"
            >
              {venue.ticketLabel}
            </a>
          </article>
        ))}
      </div>

      {filteredVenues.length === 0 ? (
        <div className="rounded-[1rem] border border-dashed border-white/15 bg-white/5 p-4 text-sm text-slate-300">
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
          ? "bg-[#f5d300] text-[#071223]"
          : "border border-white/10 bg-white/[0.04] text-slate-200 hover:border-white/20 hover:bg-white/[0.06]"
      }`}
    >
      {children}
    </button>
  );
}

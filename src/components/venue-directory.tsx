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
    <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950 p-4 shadow-xl shadow-slate-950/30 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
            Venue directory
          </p>
          <h3 className="text-xl font-semibold text-white">Sample venues with client-side date filtering</h3>
          <p className="max-w-2xl text-sm leading-6 text-slate-300">
            Sample content is marked for validation. Swap in confirmed venues, dates, and ticket links in one data file.
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
        {filteredVenues.map((venue) => (
          <article
            key={venue.id}
            className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-4 text-white"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold">{venue.name}</h4>
                  <p className="text-sm text-slate-300">
                    {venue.city}, {venue.country} · {venue.neighborhood}
                  </p>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  {monthLabel(venue.date)}
                </span>
              </div>

              <dl className="grid grid-cols-2 gap-3 text-sm text-slate-300">
                <div className="rounded-2xl bg-slate-950/70 p-3">
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">Date</dt>
                  <dd className="mt-1 font-medium text-white">{venue.date}</dd>
                </div>
                <div className="rounded-2xl bg-slate-950/70 p-3">
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">Time</dt>
                  <dd className="mt-1 font-medium text-white">{venue.time}</dd>
                </div>
                <div className="rounded-2xl bg-slate-950/70 p-3 col-span-2">
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">Pickup window</dt>
                  <dd className="mt-1 font-medium text-white">{venue.pickupWindow}</dd>
                </div>
              </dl>

              <p className="text-sm leading-6 text-slate-300">{venue.note}</p>
            </div>

            <a
              href={venue.ticketHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
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
      className={`rounded-full px-3 py-2 text-sm transition ${
        active
          ? "bg-emerald-400 text-slate-950"
          : "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}

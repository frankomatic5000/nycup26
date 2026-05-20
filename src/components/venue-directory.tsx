import { site, venues } from "@/data/site";

const featuredVenues = venues.slice(0, 3);

function shortDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export function VenueDirectory() {
  return (
    <section className="grid gap-4 rounded-[2rem] border border-white/10 bg-[#071423] p-4 sm:p-5 lg:p-6">
      <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#f5d300]">Featured venues</p>
          <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">A tighter preview set, built for mobile.</h2>
          <p className="max-w-2xl text-sm leading-6 text-slate-300">
            {site.name} keeps the homepage lightweight: three featured places now, more venue drops later.
          </p>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">More venues coming soon</p>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {featuredVenues.map((venue, index) => (
          <article
            key={venue.id}
            className="flex h-full flex-col rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_14px_40px_rgba(0,0,0,0.16)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1 pr-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                  {venue.city} · {venue.country}
                </p>
                <h3 className="text-xl font-bold tracking-tight text-white">{venue.name}</h3>
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
    </section>
  );
}

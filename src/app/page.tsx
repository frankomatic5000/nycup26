import { CinematicHero } from "@/components/cinematic-hero";
import { EmailSignupForm } from "@/components/email-signup-form";
import { VenueDirectory } from "@/components/venue-directory";
import { faqItems, launchSignals, site, ticketLinks, tickerItems } from "@/data/site";

const fallbackTicker = [
  {
    label: "Matchday",
    value: "June 11",
    note: "Opening day on the board.",
    tone: "yellow" as const,
  },
  {
    label: "Pickup",
    value: "Pickup location TBD",
    note: "Safe fallback copy.",
    tone: "blue" as const,
  },
  {
    label: "Ticket lane",
    value: "Camarote / Eventbrite",
    note: "Use the fallback path.",
    tone: "green" as const,
  },
];

const toneClasses = {
  yellow: "bg-[#f5d300] text-[#071223]",
  blue: "bg-[#12345d] text-white",
  green: "bg-[#1f5a33] text-[#e9f8ea]",
} as const;

export default function Home() {
  const tickerBoard = tickerItems.length > 0 ? tickerItems : fallbackTicker;

  return (
    <main className="min-h-screen text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-3 py-3 sm:px-5 lg:px-8 lg:py-6">
        <TickerBar items={tickerBoard} />

        <CinematicHero />

        <section className="grid gap-3 rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-3 sm:p-5 lg:p-6">
          {launchSignals.map((signal) => (
            <article key={signal.label} className="rounded-[1.25rem] border border-white/10 bg-[#071423] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                {signal.label}
              </p>
              <p className="mt-2 text-lg font-bold text-white">{signal.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{signal.note}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5 lg:p-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#f5d300]">
              Quick story
            </p>
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Big spectacle first, practical planning right beneath it.
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              The landing page leads with the poster moment, then keeps the path short: venue cards, ticket lanes, and a
              clear updates form.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Watch parties",
                note: "Game-day energy with friends and fans.",
              },
              {
                title: "Special access",
                note: "Selected venues and experiences for pass holders.",
              },
              {
                title: "Venue discounts",
                note: "Food, drinks, and entry perks at participating spots.",
              },
              {
                title: "After-match plans",
                note: "Keep the night going after the final whistle.",
              },
            ].map((tile) => (
              <article key={tile.title} className="rounded-[1.15rem] border border-white/10 bg-[#071423] p-4">
                <h3 className="text-lg font-bold text-white">{tile.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{tile.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="venues" className="scroll-mt-24">
          <VenueDirectory />
        </section>

        <section
          id="tickets"
          className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5 lg:grid-cols-[0.95fr_1.05fr] lg:p-6"
        >
          <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-[#071423] p-5">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#54b36b]">
                Ticket lanes
              </p>
              <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Keep the booking path clean.
              </h3>
              <p className="max-w-xl text-sm leading-6 text-slate-300">
                One primary path, one fallback, and a sponsor lane — all driven from data.
              </p>
            </div>

            <div className="grid gap-3">
              {ticketLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.1rem] border border-white/10 bg-white/[0.04] p-4 transition hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                        {index === 0 ? "Primary" : index === 1 ? "Fallback" : "Partnerships"}
                      </p>
                      <h4 className="mt-2 text-lg font-bold text-white">{link.label}</h4>
                    </div>
                    <span className="rounded-full bg-[#12345d] px-3 py-1 text-xs font-semibold text-white">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{link.note}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#071423] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#f5d300]">
                Email updates
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                Launch notes, venue swaps, and pickup updates.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                Keep the capture point light and editable until the final provider is confirmed.
              </p>

              <ul className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  "Get launch updates and pickup announcements",
                  "Swap venues, benefits, and ticket links from one data file",
                  "Ready for English, Portuguese, and Spanish",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-[1rem] border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-300"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#f5d300]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <EmailSignupForm />
          </div>
        </section>

        <section
          id="faq"
          className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5 lg:p-6"
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#54b36b]">FAQ</p>
            <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Clear answers, no extra clutter.
            </h3>
          </div>
          <div className="grid gap-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[1.15rem] border border-white/10 bg-[#071423] p-4 open:bg-[#0b1e39]"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-white">
                  {item.question}
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="pb-6 text-center text-xs leading-5 text-slate-400 sm:pb-8">
          NYC Play Pass prototype · sample data only · ready for Vercel preview.
        </footer>
      </div>
    </main>
  );
}

function TickerBar({
  items,
}: {
  items: typeof tickerItems;
}) {
  const rail = [...items, ...items];

  return (
    <section className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#061120]">
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
        <span className="rounded-full bg-[#f5d300] px-3 py-1 text-[#071223]">Live board</span>
        <span>{site.domain}</span>
        <span className="hidden sm:inline">·</span>
        <span className="hidden sm:inline">{site.eventDates}</span>
      </div>
      <div className="ticker-track flex min-w-max items-stretch gap-3 px-4 py-3">
        {rail.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="flex min-w-[16rem] items-center gap-3 rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-3"
          >
            <span
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] ${toneClasses[item.tone]}`}
            >
              {item.label}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">{item.value}</p>
              <p className="truncate text-xs leading-5 text-slate-400">{item.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

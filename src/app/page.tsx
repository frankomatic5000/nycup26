import { CinematicHero } from "@/components/cinematic-hero";
import { EmailSignupForm } from "@/components/email-signup-form";
import { VenueDirectory } from "@/components/venue-directory";
import {
  campaignPillars,
  faqItems,
  journeySteps,
  launchSignals,
  site,
  ticketLinks,
  tickerItems,
} from "@/data/site";

const navItems = [
  { href: "#venues", label: "Venues" },
  { href: "#tickets", label: "Tickets" },
  { href: "#faq", label: "FAQ" },
];

const toneClasses = {
  yellow: "bg-[#f5d300] text-[#071223]",
  blue: "bg-[#12345d] text-white",
  green: "bg-[#1f5a33] text-[#e9f8ea]",
} as const;

const fallbackTicker = [
  {
    label: "Matchday",
    value: "June 11",
    note: "Opening day on the board.",
    tone: "yellow" as const,
  },
  {
    label: "Route",
    value: "Camarote Tickets / Eventbrite",
    note: "Keep both ticket paths ready.",
    tone: "blue" as const,
  },
  {
    label: "Pickup",
    value: site.pickupLocation,
    note: "Final address still under review.",
    tone: "green" as const,
  },
];

export default function Home() {
  const tickerBoard = tickerItems.length > 0 ? tickerItems : fallbackTicker;

  return (
    <main className="min-h-screen text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-3 py-3 sm:px-5 lg:px-8 lg:py-6">
        <TopNav />
        <TickerBar items={tickerBoard} />
        <CinematicHero />

        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {campaignPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_14px_40px_rgba(0,0,0,0.18)]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#f5d300]">
                {pillar.eyebrow}
              </p>
              <h2 className="mt-3 text-lg font-bold tracking-tight text-white">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{pillar.note}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.06fr_0.94fr]">
          <article className="rounded-[2rem] border border-white/10 bg-[#071423] p-4 sm:p-5 lg:p-6">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#f5d300]">
                  How the pass works
                </p>
                <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                  One visual story. One clean path to the city.
                </h2>
              </div>
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/75">
                {site.languages}
              </span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {journeySteps.map((step) => (
                <article key={step.step} className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500">
                    Step {step.step}
                  </p>
                  <h3 className="mt-2 text-lg font-bold tracking-tight text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{step.note}</p>
                </article>
              ))}
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {launchSignals.map((signal) => (
                <div key={signal.label} className="rounded-[1.1rem] border border-white/10 bg-[#0a1a2e] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                    {signal.label}
                  </p>
                  <p className="mt-2 text-base font-bold text-white">{signal.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{signal.note}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,24,43,0.95),rgba(6,17,31,0.96))] p-4 sm:p-5 lg:p-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#54b36b]">
                Campaign tone
              </p>
              <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Premium, playful, and built to feel like a real launch.
              </h2>
              <p className="text-sm leading-6 text-slate-300">
                NYC Play Pass should feel like a polished city campaign: cinematic hero art, short mobile-friendly copy,
                and practical details right where people expect them.
              </p>
            </div>

            <div className="mt-4 grid gap-3">
              {[
                "Keep the Statue of Liberty as the iconic hero, but let the story stay warm and editorial.",
                "Use gold accents sparingly so the page feels premium instead of gamey or over-animated.",
                "Make the bracelet visible in the illustration and repeat it in the copy so the pass feels real.",
              ].map((note) => (
                <div key={note} className="flex gap-3 rounded-[1.1rem] border border-white/10 bg-white/[0.04] p-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#f5d300]" />
                  <p className="text-sm leading-6 text-slate-300">{note}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {site.languages.split(" · ").map((language) => (
                <span
                  key={language}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.28em] text-white/78"
                >
                  {language}
                </span>
              ))}
            </div>
          </article>
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
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#f5d300]">
                Ticket lanes
              </p>
              <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Keep the booking path clean.
              </h3>
              <p className="max-w-xl text-sm leading-6 text-slate-300">
                One primary path, one fallback, and a sponsor lane — all driven from data and easy to update before
                launch.
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
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#54b36b]">
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

function TopNav() {
  return (
    <header className="flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-slate-300">
          <span className="rounded-full border border-[#f5d300]/20 bg-[#f5d300]/12 px-3 py-1 text-[#f5d300]">
            NYC Play Pass
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">NYCUP26</span>
        </div>
        <p className="max-w-lg text-sm leading-6 text-slate-300">
          A cinematic World Cup city pass concept with a Statue of Liberty hero, bracelet focus, and a fast mobile
          path.
        </p>
      </div>

      <nav aria-label="Primary" className="flex flex-wrap gap-2">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/85 transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
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

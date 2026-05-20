import { EmailSignupForm } from "@/components/email-signup-form";
import { VenueDirectory } from "@/components/venue-directory";
import {
  faqItems,
  heroStats,
  launchSignals,
  site,
  signupHighlights,
  sponsorSlots,
  ticketLinks,
} from "@/data/site";

const tickerItems = [
  "Party people soccer",
  "Launch-ready editorial layout",
  "Festive city energy",
  "Mobile-first and fast",
  "Ticket-forward CTA system",
  "Open questions stay editable",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-[-8rem] top-[16rem] h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-10rem] h-[30rem] w-[30rem] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-medium text-white/80 backdrop-blur">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 uppercase tracking-[0.28em] text-cyan-100">
              NYCUP26 broadcast
            </span>
            <span>{site.eventDates}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-white/70">
            <span>{site.domain}</span>
            <span className="text-white/30">•</span>
            <span>{site.languages}</span>
          </div>
        </div>

        <header className="rounded-[2rem] border border-white/10 bg-white/[0.05] px-4 py-4 shadow-[0_30px_120px_rgba(2,6,23,0.35)] backdrop-blur sm:px-6 lg:px-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-200">
                {site.name}
              </p>
              <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
                {site.tagline}
              </h1>
              <p className="text-sm font-medium text-white/70">
                Suggested display name: <span className="text-white">{site.brandDisplay}</span>
              </p>
            </div>
            <nav className="flex flex-wrap gap-2 text-sm text-slate-200">
              <a className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 transition hover:bg-white/10" href="#signup">
                Sign up
              </a>
              <a className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 transition hover:bg-white/10" href="#venues">
                Venues
              </a>
              <a className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 transition hover:bg-white/10" href="#tickets">
                Tickets
              </a>
              <a className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 transition hover:bg-white/10" href="#faq">
                FAQ
              </a>
            </nav>
          </div>
        </header>

        <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-[0_30px_120px_rgba(2,6,23,0.4)] backdrop-blur sm:p-6 lg:p-8">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75">
              <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1">
                Matchday hub
              </span>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-emerald-100">
                Festival energy
              </span>
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr] xl:items-end">
              <div className="space-y-5">
                <p className="max-w-xl text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100/80">
                  Party people soccer in New York
                </p>
                <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  NYCUP26 feels like a premium tournament hub, not a corporate event page.
                </h2>
                <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  We kept the structure data-driven and easy to update while pushing the visual language toward sports-front-page energy: bold, social, festive, and easy to scan on mobile.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#signup"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-300 via-lime-300 to-yellow-300 px-5 text-sm font-semibold text-slate-950 transition hover:brightness-105"
                  >
                    Join the waitlist
                  </a>
                  <a
                    href="#tickets"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    See ticket lanes
                  </a>
                  <a
                    href="#venues"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-300/15"
                  >
                    Browse venues
                  </a>
                </div>
              </div>

              <aside className="grid gap-3 rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                    Launch board
                  </p>
                  <p className="mt-2 text-2xl font-black tracking-tight text-white">Countdown mode</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Dates are set. Ticketing, pickup location, and benefit setup are still being finalized.
                  </p>
                </div>

                <div className="grid gap-3">
                  {launchSignals.map((signal) => (
                    <div key={signal.label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                          {signal.label}
                        </p>
                        <span className="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1 text-xs font-semibold text-white/80">
                          Ready
                        </span>
                      </div>
                      <p className="mt-2 text-lg font-bold text-white">{signal.value}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{signal.note}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-4"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl font-black tracking-tight text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{stat.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_30px_120px_rgba(2,6,23,0.35)] backdrop-blur sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">
                    Matchday bulletin
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">Open questions stay visible and editable.</h3>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-100">
                  Live draft
                </span>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  { label: "Domain", value: site.domain },
                  { label: "Event dates", value: site.eventDates },
                  { label: "Ticket platform", value: site.ticketPlatform },
                  { label: "Pickup location", value: site.pickupLocation },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/55 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-white/[0.05] to-emerald-400/10 p-5 shadow-[0_30px_120px_rgba(2,6,23,0.35)] backdrop-blur sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-fuchsia-100/85">
                Scene setter
              </p>
              <p className="mt-2 text-2xl font-black tracking-tight text-white">City energy, fan culture, fast updates.</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                The page now reads more like a sports hub: denser modules, stronger accents, and a premium CTA rhythm while keeping the same content model.
              </p>
            </section>
          </div>
        </section>

        <section className="overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75 backdrop-blur">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {tickerItems.map((item) => (
              <span key={item} className="inline-flex items-center gap-4">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div id="signup" className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200">
                Email signup
              </p>
              <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Build the audience before the ticket system is locked.
              </h3>
              <p className="max-w-2xl text-sm leading-6 text-slate-300">
                Keep this simple and swap in the chosen email service later. The form validates the experience and gives you a launch-ready capture point.
              </p>
            </div>
            <ul className="grid gap-2 text-sm text-slate-300 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {signupHighlights.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-white/8 bg-slate-950/55 p-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <EmailSignupForm />
        </section>

        <section id="venues" className="scroll-mt-24">
          <VenueDirectory />
        </section>

        <section id="tickets" className="grid gap-4 rounded-[2rem] border border-white/10 bg-[#08111f] p-4 shadow-[0_30px_120px_rgba(2,6,23,0.35)] sm:p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div className="space-y-4 rounded-[1.7rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(16,185,129,0.08),rgba(255,255,255,0.05))] p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75">
              <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1">
                Ticket lane
              </span>
              <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-amber-100">
                Priority CTA
              </span>
            </div>
            <h3 className="max-w-2xl text-2xl font-black tracking-tight text-white sm:text-3xl">
              Make ticketing feel official, urgent, and easy to scan.
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              These links are now aligned with the likely ticketing options. Swap them once the final provider is confirmed.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={ticketLinks[0].href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-300 via-lime-300 to-yellow-300 px-5 text-sm font-semibold text-slate-950 transition hover:brightness-105"
              >
                Open ticket hub
              </a>
              <a
                href="#faq"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Read the FAQ
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {ticketLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`group rounded-[1.7rem] border border-white/10 p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/30 ${
                  index === 0
                    ? "bg-white/[0.07]"
                    : "bg-white/[0.04]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                      {index === 0 ? "Primary ticket path" : index === 1 ? "Sales structure" : "Launch comms"}
                    </p>
                    <h4 className="mt-2 text-xl font-bold tracking-tight text-white">{link.label}</h4>
                  </div>
                  <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-white/70">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">{link.note}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100">
                  Open sample link
                  <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Pickup instructions
            </p>
            <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Keep pickup messaging prominent, fast, and operationally clear.
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              The final pickup location is still under review, so the layout is ready for hours, map embeds, support contacts, and arrival notes without changing the structure.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "Current status",
                text: "Pickup location, hours, and flow are placeholders until operations confirms them.",
              },
              {
                title: "Recommended update path",
                text: "Swap in the final address, arrival instructions, and staffing notes when ready.",
              },
              {
                title: "Mobile priority",
                text: "Keep the most important pickup details visible above the fold on phones.",
              },
              {
                title: "Support lane",
                text: "Leave room for contact details, map links, and day-of clarifications.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.4rem] border border-white/10 bg-slate-950/55 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-200">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-[2rem] border border-white/10 bg-[#08111f] p-4 sm:p-6 lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200">
              Sponsor placeholders
            </p>
            <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Reserved space for partners, tiers, and sponsor-forward storytelling.
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              The section is intentionally ready for logos and links later, but styled now with the kind of presence a major tournament hub needs.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {sponsorSlots.map((slot) => (
              <div key={slot.name} className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  {slot.name}
                </p>
                <p className="mt-3 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100">
                  {slot.status}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{slot.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 sm:p-6 lg:p-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
              FAQ
            </p>
            <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Answer the big questions without changing the structure.
            </h3>
          </div>
          <div className="grid gap-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[1.4rem] border border-white/10 bg-slate-950/50 p-4 open:bg-white/[0.06]"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-white">
                  {item.question}
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="pb-8 text-center text-xs leading-5 text-slate-400">
          NYCUP26 prototype · festive sports-event UI refresh · sample data only · not deployed to production.
        </footer>
      </div>
    </main>
  );
}

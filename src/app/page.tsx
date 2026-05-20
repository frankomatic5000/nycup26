import { EmailSignupForm } from "@/components/email-signup-form";
import { VenueDirectory } from "@/components/venue-directory";
import {
  faqItems,
  launchSignals,
  powerTiles,
  site,
  signupHighlights,
  sponsorSlots,
  ticketLinks,
  visitSteps,
} from "@/data/site";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0d2146] px-4 py-3 text-xs font-medium text-white/80 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#f5d300] px-3 py-1 font-semibold uppercase tracking-[0.28em] text-[#071223]">
              NYC Play Pass
            </span>
            <span>{site.eventDates}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-white/75">
            <span>{site.domain}</span>
            <span className="text-white/30">•</span>
            <span>{site.languages}</span>
          </div>
        </div>

        <header className="rounded-[2rem] border border-white/10 bg-[#0b1b3a] px-4 py-4 sm:px-6 lg:px-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#f5d300]">
                {site.name}
              </p>
              <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
                {site.tagline}
              </h1>
              <p className="text-sm font-medium text-white/75">{site.description}</p>
            </div>
            <nav className="flex flex-wrap gap-2 text-sm text-slate-200">
              <a className="rounded-full bg-[#f5d300] px-4 py-2 font-semibold text-[#071223] transition hover:bg-[#ffe25c]" href="#plan">
                Plan your visit
              </a>
              <a className="rounded-full border border-[#7fb0ff] bg-[#13345d] px-4 py-2 transition hover:bg-[#173e6d]" href="#venues">
                Venues
              </a>
              <a className="rounded-full border border-[#7fb0ff] bg-[#13345d] px-4 py-2 transition hover:bg-[#173e6d]" href="#signup">
                Get updates
              </a>
            </nav>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6 lg:p-7">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              <span className="rounded-full border border-[#f5d300]/30 bg-[#f5d300]/10 px-3 py-1 text-[#f5d300]">
                Matchday superpower
              </span>
              <span className="rounded-full border border-[#54b36b]/30 bg-[#54b36b]/10 px-3 py-1 text-[#a7e1b1]">
                Clean CBF palette
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <p className="max-w-xl text-sm font-semibold uppercase tracking-[0.28em] text-[#f5d300]/90">
                A pass for NYC visitors who want games + perks
              </p>
              <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Turn your bracelet into city superpowers.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                NYC Play Pass is built for visitors coming to watch World Cup games with friends — then keep the day going with special access, venue discounts, and a cleaner way to plan the city around the matches.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#plan"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#f5d300] px-5 text-sm font-semibold text-[#071223] transition hover:bg-[#ffe25c]"
                >
                  Plan your visit
                </a>
                <a
                  href="#venues"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#7fb0ff] bg-[#13345d] px-5 text-sm font-semibold text-white transition hover:bg-[#173e6d]"
                >
                  Browse venues
                </a>
                <a
                  href="#signup"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-transparent px-5 text-sm font-semibold text-white transition hover:bg-white/8"
                >
                  Get updates
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Watch games",
                "Special access",
                "Venue discounts",
                "After-match plans",
              ].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/80">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="grid gap-3 rounded-[2rem] border border-white/10 bg-[#0b1b3a] p-4 sm:p-5">
            <div className="rounded-[1.5rem] border border-[#f5d300]/20 bg-[#f5d300]/10 p-4 text-[#fff6bf]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f5d300]">Pass at a glance</p>
              <p className="mt-2 text-xl font-black text-white">One pass, more city.</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                The bracelet opens up watch spots, parties, and specials across NYC while keeping the experience simple on mobile.
              </p>
            </div>

            <div className="grid gap-3">
              {launchSignals.map((signal) => (
                <div key={signal.label} className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">{signal.label}</p>
                    <span className="rounded-full bg-[#13345d] px-2.5 py-1 text-xs font-semibold text-white">Live</span>
                  </div>
                  <p className="mt-2 text-lg font-bold text-white">{signal.value}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{signal.note}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="plan" className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5 lg:grid-cols-[1.05fr_0.95fr] lg:p-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5d300]">Plan your visit</p>
            <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Keep the experience short, clear, and mobile-first.
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              Start with the date, choose the neighborhood, and know what the bracelet unlocks before you arrive.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {visitSteps.map((step, index) => (
              <div key={step.step} className="rounded-[1.25rem] border border-white/10 bg-[#0b1b3a] p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#f5d300] px-2.5 py-1 text-xs font-semibold text-[#071223]">{step.step}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Step {index + 1}
                  </span>
                </div>
                <h4 className="mt-3 text-lg font-bold text-white">{step.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {powerTiles.map((tile) => (
            <div key={tile.title} className="rounded-[1.25rem] border border-white/10 bg-[#13345d] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f5d300]">Pass power</p>
              <h4 className="mt-2 text-lg font-bold text-white">{tile.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-200">{tile.note}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5 lg:grid-cols-[1.05fr_0.95fr] lg:p-6">
          <div id="signup" className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#54b36b]">Email signup</p>
              <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Get launch updates before the ticket system is locked.
              </h3>
              <p className="max-w-2xl text-sm leading-6 text-slate-300">
                Keep it simple and swap in the chosen email service later. This is the launch-ready capture point for visitors, partners, and pickup announcements.
              </p>
            </div>
            <ul className="grid gap-2 text-sm text-slate-300 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {signupHighlights.map((item) => (
                <li key={item} className="flex gap-3 rounded-[1rem] border border-white/10 bg-[#0b1b3a] p-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#f5d300]" />
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

        <section id="tickets" className="grid gap-4 rounded-[2rem] border border-white/10 bg-[#0b1b3a] p-4 sm:p-5 lg:grid-cols-[1.1fr_0.9fr] lg:p-6">
          <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75">
              <span className="rounded-full bg-[#f5d300] px-3 py-1 text-[#071223]">Ticket lane</span>
              <span className="rounded-full border border-[#7fb0ff] bg-[#13345d] px-3 py-1 text-white">Priority CTA</span>
            </div>
            <h3 className="max-w-2xl text-2xl font-black tracking-tight text-white sm:text-3xl">
              Keep ticketing and sponsorship easy to scan.
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              These links stay flexible until the final provider is confirmed.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={ticketLinks[0].href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#f5d300] px-5 text-sm font-semibold text-[#071223] transition hover:bg-[#ffe25c]"
              >
                Open ticket hub
              </a>
              <a
                href="#faq"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#7fb0ff] bg-[#13345d] px-5 text-sm font-semibold text-white transition hover:bg-[#173e6d]"
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
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#f5d300]/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                      {index === 0 ? "Primary ticket path" : index === 1 ? "Fallback" : "Partners"}
                    </p>
                    <h4 className="mt-2 text-xl font-bold tracking-tight text-white">{link.label}</h4>
                  </div>
                  <span className="rounded-full bg-[#13345d] px-3 py-1 text-xs font-semibold text-white">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">{link.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5 lg:grid-cols-[0.9fr_1.1fr] lg:p-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#54b36b]">Pickup plan</p>
            <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Keep pickup messaging simple and close to the action.
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              The final pickup location is still under review, so the page can later swap in the address, hours, map links, and arrival notes without a redesign.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "Current status",
                text: "Pickup location, hours, and flow are still being decided.",
              },
              {
                title: "Recommended path",
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
              <div key={item.title} className="rounded-[1rem] border border-white/10 bg-[#0b1b3a] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f5d300]">{item.title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-200">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-[2rem] border border-white/10 bg-[#0b1b3a] p-4 sm:p-5 lg:grid-cols-[0.8fr_1.2fr] lg:p-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5d300]">
              Sponsor placeholders
            </p>
            <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Reserved space for institutions, venue partners, and community support.
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              The section is ready for logos and links later, but stays clean and simple now.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {sponsorSlots.map((slot) => (
              <div key={slot.name} className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">{slot.name}</p>
                <p className="mt-3 inline-flex rounded-full bg-[#54b36b]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#a7e1b1]">
                  {slot.status}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{slot.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5 lg:p-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#54b36b]">FAQ</p>
            <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Answer the big questions without adding clutter.
            </h3>
          </div>
          <div className="grid gap-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[1.2rem] border border-white/10 bg-[#0b1b3a] p-4 open:bg-[#10264b]"
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
          NYCUP26 prototype · now exploring the NYC Play Pass direction · sample data only.
        </footer>
      </div>
    </main>
  );
}

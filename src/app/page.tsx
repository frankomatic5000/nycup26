import { EmailSignupForm } from "@/components/email-signup-form";
import { VenueDirectory } from "@/components/venue-directory";
import {
  faqItems,
  site,
  signupHighlights,
  sponsorSlots,
  ticketLinks,
} from "@/data/site";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
              {site.name}
            </p>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{site.tagline}</h1>
          </div>
          <nav className="flex flex-wrap gap-2 text-sm text-slate-300">
            <a className="rounded-full border border-white/10 px-3 py-2 hover:bg-white/10" href="#signup">
              Signup
            </a>
            <a className="rounded-full border border-white/10 px-3 py-2 hover:bg-white/10" href="#venues">
              Venues
            </a>
            <a className="rounded-full border border-white/10 px-3 py-2 hover:bg-white/10" href="#tickets">
              Tickets
            </a>
            <a className="rounded-full border border-white/10 px-3 py-2 hover:bg-white/10" href="#faq">
              FAQ
            </a>
          </nav>
        </header>

        <section className="grid gap-6 rounded-3xl bg-gradient-to-br from-emerald-400 via-cyan-300 to-sky-500 p-6 text-slate-950 shadow-2xl shadow-cyan-900/30 sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div className="space-y-4">
            <p className="inline-flex rounded-full bg-slate-950/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]">
              Prototype / sample content only
            </p>
            <div className="space-y-3">
              <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
                A mobile-first launch page for bracelets, passes, venues, and ticket links.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-900/85 sm:text-lg">
                Final domain, event dates, ticket platform, pickup location, confirmed venues, sponsor list, and languages are all still TBD.
                This first-pass build gives you a clean update path and a launch-ready layout for validation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#signup"
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Get email updates
              </a>
              <a
                href="#venues"
                className="rounded-full border border-slate-950/15 bg-white/40 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/55"
              >
                Browse venues
              </a>
            </div>
          </div>

          <aside className="grid gap-3 rounded-3xl bg-slate-950/10 p-4 text-sm">
            <div className="rounded-2xl bg-white/30 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">Status</p>
              <p className="mt-2 font-semibold">Fast prototype ready for validation</p>
            </div>
            <div className="grid gap-2 rounded-2xl bg-white/30 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">Placeholders</p>
              <ul className="grid gap-1 text-slate-900/80">
                <li>{site.domain}</li>
                <li>{site.eventDates}</li>
                <li>{site.ticketPlatform}</li>
                <li>{site.pickupLocation}</li>
                <li>{site.languages}</li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900 p-4 sm:p-6 lg:grid-cols-[1fr_1fr]">
          <div id="signup" className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">Email signup</p>
            <h3 className="text-2xl font-semibold">Collect interest before the final ticket flow is wired up.</h3>
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              Keep this simple and swap in your email service later. For now the form validates the experience and messaging.
            </p>
            <ul className="grid gap-2 text-sm text-slate-300">
              {signupHighlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
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

        <section id="tickets" className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
              External ticket links
            </p>
            <h3 className="text-2xl font-semibold">Swap the provider later without changing the page structure.</h3>
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              These links are intentionally sample placeholders. Once the ticket platform is chosen, replace the URLs in the data file.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {ticketLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-white/10 bg-slate-950 p-4 transition hover:border-emerald-300/40 hover:bg-slate-900"
              >
                <p className="text-lg font-semibold">{link.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{link.note}</p>
                <p className="mt-4 text-sm font-medium text-emerald-300">Open sample link →</p>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900 p-4 sm:p-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">Pickup instructions</p>
            <h3 className="text-2xl font-semibold">Keep pickup messaging visible and easy to update.</h3>
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              The final pickup location is still TBD, so this section is structured to swap in exact hours, map embeds, and support contact details.
            </p>
          </div>
          <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Current status</p>
              <p className="mt-1">Pickup location, hours, and flow are placeholders until operations confirm them.</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Recommended update path</p>
              <p className="mt-1">Replace this block with the final venue address, arrival instructions, and staffing notes.</p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">Sponsor placeholder</p>
            <h3 className="text-2xl font-semibold">Reserved space for confirmed partners.</h3>
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              Sponsor names are still TBD, but the layout is ready for logos, tiers, and partner links.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {sponsorSlots.map((slot) => (
              <div key={slot.name} className="rounded-3xl border border-white/10 bg-slate-950 p-4">
                <p className="text-lg font-semibold">{slot.name}</p>
                <p className="mt-2 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  {slot.status}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{slot.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900 p-4 sm:p-6">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">FAQ</p>
            <h3 className="text-2xl font-semibold">Answer the most common questions without changing the page structure.</h3>
          </div>
          <div className="grid gap-3">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-3xl border border-white/10 bg-white/5 p-4 open:bg-white/[0.07]">
                <summary className="cursor-pointer list-none text-base font-semibold text-white">
                  {item.question}
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="pb-8 text-center text-xs leading-5 text-slate-400">
          NYCUP26 prototype · sample data only · ready for content swaps, not production deployment.
        </footer>
      </div>
    </main>
  );
}

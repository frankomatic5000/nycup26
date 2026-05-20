import Image from "next/image";
import { EmailSignupForm } from "@/components/email-signup-form";
import { VenueDirectory } from "@/components/venue-directory";
import { faqItems, heroHighlights, heroStats, site, signupHighlights, visitSteps } from "@/data/site";

const navItems = [
  { href: "#venues", label: "Venues" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#signup", label: "Waitlist" },
];

const statuePhoto =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Liberty_Island_photo_Don_Ramey_Logan.jpg/3840px-Liberty_Island_photo_Don_Ramey_Logan.jpg";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <TopNav />

        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,24,43,0.98),rgba(5,11,20,0.98))] shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
          <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[1.04fr_0.96fr] lg:gap-6 lg:p-8">
            <div className="relative z-10 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-white/72 sm:text-[11px]">
                  <span className="rounded-full border border-[#f5d300]/25 bg-[#f5d300]/12 px-3 py-1 text-[#f5d300]">
                    World Cup 2026
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">NYC GAME PASS</span>
                  <span className="rounded-full border border-[#54b36b]/25 bg-[#54b36b]/12 px-3 py-1 text-[#c8f4ce]">
                    Bracelet superpowers
                  </span>
                </div>

                <div className="max-w-2xl space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#f5d300]">Poster / hero v4</p>
                  <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Your bracelet unlocks the city.
                  </h1>
                  <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                    {site.tagline}. It unlocks fan perks, restaurant deals, watch parties, sponsor activations, and a
                    clean mobile path to the city.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#signup"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#f5d300] px-5 text-sm font-semibold text-[#071223] transition hover:translate-y-[-1px]"
                  >
                    Join the waitlist
                  </a>
                  <a
                    href="#venues"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    See the perks
                  </a>
                </div>
              </div>

              <ul className="grid gap-2 text-sm text-slate-300 sm:grid-cols-3">
                {heroHighlights.map((item) => (
                  <li key={item} className="rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-3 leading-6">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.1rem] border border-white/10 bg-[#06111f] p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">{stat.label}</p>
                    <p className="mt-2 text-3xl font-black text-white">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{stat.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[28rem] lg:min-h-[42rem]">
              <div className="absolute inset-x-8 top-7 h-28 rounded-full bg-[#f5d300]/14 blur-3xl" aria-hidden="true" />
              <div className="absolute -left-6 top-24 h-20 w-20 rounded-full bg-[#8fc7ff]/10 blur-3xl" aria-hidden="true" />
              <div className="absolute -right-6 bottom-14 h-24 w-24 rounded-full bg-[#54b36b]/12 blur-3xl" aria-hidden="true" />

              <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a1a2e] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                <Image
                  src={statuePhoto}
                  alt="Statue of Liberty under a blue sky"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,18,0.05)_0%,rgba(4,10,18,0.2)_22%,rgba(4,10,18,0.52)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(245,211,0,0.18),transparent_26%),linear-gradient(145deg,rgba(255,255,255,0.06),transparent_24%,transparent_72%,rgba(255,255,255,0.04))]" />

                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/82 backdrop-blur-sm">
                  Real photo hero
                </div>
                <div className="absolute right-4 top-4 rounded-full border border-[#f5d300]/25 bg-[#f5d300]/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#fff4b8] backdrop-blur-sm">
                  Trophy energy
                </div>

                <div className="absolute inset-x-4 bottom-4 grid gap-3 sm:grid-cols-[1fr_1fr]">
                  <div className="rounded-[1rem] border border-white/10 bg-[#071423]/88 p-3 backdrop-blur-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f5d300]">Bracelet</p>
                    <p className="mt-1 text-sm font-semibold text-white">This is the superpower object.</p>
                    <p className="mt-1 text-xs leading-5 text-slate-300">Make it visible in the hero and repeat it in the copy.</p>
                  </div>
                  <div className="rounded-[1rem] border border-white/10 bg-[#071423]/88 p-3 backdrop-blur-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#54b36b]">Mood</p>
                    <p className="mt-1 text-sm font-semibold text-white">NYC + World Cup + nightlife.</p>
                    <p className="mt-1 text-xs leading-5 text-slate-300">Poster-style, premium, and built for mobile conversion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-3">
          {[
            ["Free / discounted entry", "Selected partners can offer reduced or free access for pass holders."],
            ["Food & drink specials", "Match-day pricing and venue perks for fans out in the city."],
            ["Watch-party locations", "Curated places to catch the games with community energy."],
          ].map(([title, note]) => (
            <article key={title} className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">Pass power</p>
              <h2 className="mt-2 text-lg font-bold tracking-tight text-white">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{note}</p>
            </article>
          ))}
        </section>

        <section id="venues" className="scroll-mt-24">
          <VenueDirectory />
        </section>

        <section
          id="how-it-works"
          className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5 lg:grid-cols-[0.92fr_1.08fr] lg:p-6"
        >
          <div className="space-y-3 rounded-[1.5rem] border border-white/10 bg-[#071423] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#f5d300]">How it works</p>
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Choose your dates, collect the bracelet, unlock the city.
            </h2>
            <p className="text-sm leading-6 text-slate-300">
              Keep the flow fast and obvious. The homepage should feel like a poster first and a utility page second.
            </p>
            <ul className="grid gap-2 text-sm text-slate-300">
              {signupHighlights.map((item) => (
                <li key={item} className="flex gap-3 rounded-[1rem] border border-white/10 bg-white/[0.04] p-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#f5d300]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {visitSteps.map((step) => (
              <article key={step.step} className="rounded-[1.25rem] border border-white/10 bg-[#071423] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500">Step {step.step}</p>
                <h3 className="mt-2 text-lg font-bold tracking-tight text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="signup"
          className="grid gap-4 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(245,211,0,0.08),rgba(84,179,107,0.06)),rgba(255,255,255,0.03)] p-4 sm:p-5 lg:grid-cols-[1.02fr_0.98fr] lg:p-6"
        >
          <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-[#071423] p-5">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#54b36b]">Early access</p>
              <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Be first to unlock NYC GAME PASS.
              </h2>
              <p className="max-w-xl text-sm leading-6 text-slate-300">
                Sign up for launch updates, venue drops, and pickup details before the pass goes live.
              </p>
            </div>

            <div className="grid gap-2">
              {heroHighlights.map((item) => (
                <div key={item} className="flex gap-3 rounded-[1rem] border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-300">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#54b36b]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <EmailSignupForm />

            <div className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-[#071423] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#f5d300]">Quick FAQ</p>
              {faqItems.slice(0, 3).map((item) => (
                <details key={item.question} className="group rounded-[1rem] border border-white/10 bg-white/[0.04] p-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-white">{item.question}</summary>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <footer className="pb-6 text-center text-xs leading-5 text-slate-400 sm:pb-8">
          NYC GAME PASS prototype · sample data only · ready for Vercel preview.
        </footer>
      </div>
    </main>
  );
}

function TopNav() {
  return (
    <header className="sticky top-3 z-20 rounded-full border border-white/10 bg-[#071423]/88 px-4 py-3 backdrop-blur-xl sm:px-5">
      <div className="flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3 font-black tracking-tight text-white">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[linear-gradient(135deg,#f5d300,#f7c948)] text-sm font-black text-[#071223] shadow-[0_12px_30px_rgba(245,211,0,0.18)]">
            NYC
          </span>
          <span className="text-sm sm:text-base">GAME PASS</span>
        </a>

        <nav className="hidden items-center gap-5 text-sm text-white/72 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#signup"
          className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
        >
          Waitlist
        </a>
      </div>
    </header>
  );
}

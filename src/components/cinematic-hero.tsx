import { heroHighlights, heroStats, site } from "@/data/site";

export function CinematicHero() {
  return (
    <section className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#071423] px-4 py-5 shadow-[0_24px_100px_rgba(0,0,0,0.34)] sm:px-6 lg:px-8 lg:py-8">
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="hero-grid absolute inset-0 opacity-[0.18]" aria-hidden="true" />

      <div className="relative grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-slate-300 sm:text-[11px]">
            <span className="rounded-full border border-[#f5d300]/25 bg-[#f5d300]/12 px-3 py-1 text-[#f5d300]">
              {site.name}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">NYCUP26</span>
            <span className="hidden text-white/30 sm:inline">·</span>
            <span className="text-white/70">World Cup city pass</span>
          </div>

          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f5d300]">
              Matchday in widescreen
            </p>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Statue of Liberty, trophy raised, New York lit for matchday.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              NYC Play Pass turns the city into a cinematic football night: the Statue of Liberty swaps the torch for the
              World Cup trophy, the bracelet sits on the wrist, and the path to venues, tickets, and pickup stays clean on
              mobile.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#venues"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#f5d300] px-5 text-sm font-semibold text-[#071223] transition hover:translate-y-[-1px]"
            >
              Browse venues
            </a>
            <a
              href="#tickets"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/8"
            >
              See ticket lanes
            </a>
            <a
              href="#faq"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-transparent px-5 text-sm font-semibold text-white/85 transition hover:border-white/20 hover:bg-white/5"
            >
              Quick answers
            </a>
          </div>

          <ul className="hidden gap-2 text-sm text-slate-300 sm:grid sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <li key={item} className="rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-3 leading-6">
                {item}
              </li>
            ))}
          </ul>

          <div className="grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-[1.2rem] border border-white/10 bg-[#06111f] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">{stat.label}</p>
                <p className="mt-2 text-3xl font-black text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-x-6 top-6 h-24 rounded-full bg-[#f5d300]/20 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-4 top-16 h-20 w-20 rounded-full bg-[#54b36b]/20 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-4 bottom-8 h-24 w-24 rounded-full bg-[#8fc7ff]/18 blur-3xl" aria-hidden="true" />

          <div className="scene-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#0a1a2e] via-[#071423] to-[#050d18] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-5">
            <div className="scene-sheen absolute inset-0 opacity-80" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(245,211,0,0.12),transparent_28%),radial-gradient(circle_at_70%_15%,rgba(84,179,107,0.1),transparent_26%),linear-gradient(180deg,#0e2746_0%,#071423_52%,#050b14_100%)]">
              <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent)]" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(0deg,rgba(3,10,18,0.98),transparent)]" aria-hidden="true" />

              <div className="relative aspect-[4/5] min-h-[28rem] lg:min-h-[36rem]">
                <div className="absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(closest-side_at_50%_100%,rgba(255,255,255,0.12),transparent_72%)]" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-14 flex items-end justify-center gap-2 px-6 opacity-80" aria-hidden="true">
                  {[42, 58, 66, 52, 74, 50, 84, 48, 61, 47].map((height, index) => (
                    <span
                      key={index}
                      className="w-8 rounded-t-full bg-white/8"
                      style={{ height: `${height}px` }}
                    />
                  ))}
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
                  <div className="statue-drift relative w-full max-w-[27rem] px-4 pb-2">
                    <div className="absolute -left-4 top-8 h-28 w-28 rounded-full border border-[#f5d300]/30 bg-[#f5d300]/10 blur-[2px]" aria-hidden="true" />
                    <div className="absolute -right-8 top-20 h-24 w-24 rounded-full border border-[#8fc7ff]/20 bg-[#8fc7ff]/10 blur-[2px]" aria-hidden="true" />

                    <svg
                      viewBox="0 0 420 520"
                      className="h-auto w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.4)]"
                      role="img"
                      aria-label="Illustrated Statue of Liberty holding a World Cup trophy with a bracelet on her wrist"
                    >
                      <defs>
                        <linearGradient id="robe" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#1a6aa0" />
                          <stop offset="100%" stopColor="#0e3558" />
                        </linearGradient>
                        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#fff0a5" />
                          <stop offset="40%" stopColor="#f5d300" />
                          <stop offset="100%" stopColor="#c48d16" />
                        </linearGradient>
                        <linearGradient id="skyGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(255,255,255,0.24)" />
                          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                        </linearGradient>
                      </defs>

                      <g opacity="0.95">
                        <ellipse cx="210" cy="468" rx="115" ry="16" fill="rgba(0,0,0,0.42)" />
                        <rect x="124" y="392" width="172" height="88" rx="28" fill="#05111d" opacity="0.82" />
                        <rect x="150" y="340" width="120" height="78" rx="26" fill="url(#robe)" />
                        <path d="M160 360C168 316 186 286 210 286C236 286 255 315 260 360L272 429H148L160 360Z" fill="url(#robe)" />
                        <path d="M193 273C194 246 199 224 210 210C221 224 226 246 227 273" fill="none" stroke="#6db3ef" strokeWidth="10" strokeLinecap="round" opacity="0.34" />
                        <circle cx="210" cy="180" r="28" fill="#b9d2e6" />
                        <path d="M188 175C193 151 202 136 210 136C220 136 229 151 232 175L234 194H186L188 175Z" fill="#cde0eb" />
                        <path d="M180 155L168 130M193 147L187 118M210 143V112M227 147L233 118M240 155L252 130" stroke="#f5d300" strokeWidth="6" strokeLinecap="round" />
                        <path d="M172 162C189 140 198 128 210 128C224 128 236 140 248 162" fill="none" stroke="#94c8f8" strokeWidth="5" strokeLinecap="round" opacity="0.7" />

                        <path d="M267 264C304 246 322 236 334 220C343 208 350 201 361 198" fill="none" stroke="#cde0eb" strokeWidth="20" strokeLinecap="round" />
                        <path d="M266 266C300 255 322 245 336 231C347 220 353 212 366 205" fill="none" stroke="#f0f7ff" strokeWidth="12" strokeLinecap="round" opacity="0.55" />

                        <path d="M267 264L316 220" fill="none" stroke="#cde0eb" strokeWidth="18" strokeLinecap="round" />
                        <circle cx="332" cy="228" r="12" fill="url(#gold)" stroke="#fdf3b0" strokeWidth="4" />
                        <circle cx="332" cy="228" r="20" fill="none" stroke="#f5d300" strokeWidth="5" opacity="0.85" />
                        <circle cx="332" cy="228" r="26" fill="none" stroke="#fff0a5" strokeWidth="2" opacity="0.25" />

                        <path d="M324 142C343 142 359 155 362 174V183H326V142Z" fill="url(#gold)" />
                        <path d="M304 170C304 149 315 138 332 138C349 138 360 149 360 170" fill="none" stroke="#fff5cc" strokeWidth="12" strokeLinecap="round" />
                        <path d="M289 174H375C378 174 381 177 381 180V193H283V180C283 177 286 174 289 174Z" fill="url(#gold)" />
                        <path d="M299 193H365L354 246H310L299 193Z" fill="url(#gold)" />
                        <path d="M313 192V170C313 157 320 151 332 151C344 151 351 157 351 170V192" fill="none" stroke="#fff7d4" strokeWidth="7" strokeLinecap="round" />
                        <path d="M306 206H358" stroke="#fff7d4" strokeWidth="5" strokeLinecap="round" opacity="0.75" />
                        <path d="M315 246L332 271L349 246" fill="none" stroke="#fff7d4" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M329 246H335" stroke="#fff7d4" strokeWidth="7" strokeLinecap="round" />
                        <circle cx="332" cy="136" r="6" fill="#fff8df" />

                        <path d="M134 392C144 362 158 340 176 326C192 314 205 309 219 309C238 309 256 317 272 332C287 346 300 365 310 392" fill="none" stroke="#b7d8f2" strokeWidth="8" strokeLinecap="round" opacity="0.45" />
                        <path d="M154 437H266" stroke="#d3e6f7" strokeWidth="10" strokeLinecap="round" opacity="0.45" />
                      </g>
                    </svg>

                    <div className="absolute left-4 top-5 hidden w-[9.5rem] rounded-[1rem] border border-white/12 bg-[#081624]/90 p-3 shadow-lg backdrop-blur-sm hero-float-slow sm:block sm:w-[11rem]">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f5d300]">Bracelet</p>
                      <p className="mt-1 text-sm font-semibold text-white">On the wrist.</p>
                      <p className="mt-1 text-xs leading-5 text-slate-300">A visual cue for the pass, not a glossy gadget.</p>
                    </div>

                    <div className="absolute right-4 top-28 hidden w-[10.5rem] rounded-[1rem] border border-white/12 bg-[#081624]/90 p-3 shadow-lg backdrop-blur-sm hero-float-fast sm:block sm:w-[12rem]">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#54b36b]">Trophy scene</p>
                      <p className="mt-1 text-sm font-semibold text-white">Liberty trades the torch for the cup.</p>
                      <p className="mt-1 text-xs leading-5 text-slate-300">A premium, playful poster moment built for mobile.</p>
                    </div>

                    <div className="absolute bottom-3 left-1/2 w-[15.5rem] -translate-x-1/2 rounded-[1rem] border border-[#f5d300]/20 bg-[#f5d300]/12 px-4 py-3 text-center shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm hero-sweep sm:w-[17rem]">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-[#f5d300]">Matchday signal</p>
                      <p className="mt-1 text-sm font-semibold text-white">June 11 · July 19 · 34 event days</p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur-sm">
                  Cinematic story mode
                </div>
                <div className="absolute right-4 top-4 rounded-full border border-[#54b36b]/25 bg-[#54b36b]/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c8f4ce] backdrop-blur-sm">
                  Bracelet ready
                </div>
              </div>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.1rem] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">Play Pass story</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  A one-page hero with a little spectacle up front, then the practical path beneath it.
                </p>
              </div>
              <div className="rounded-[1.1rem] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">Mobile rhythm</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Big title, crisp actions, and a visual that still works on a phone-sized screen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { heroHighlights, heroStats, site } from "@/data/site";

export function CinematicHero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,#0a1a2e_0%,#071423_56%,#050b14_100%)] px-4 py-5 shadow-[0_24px_100px_rgba(0,0,0,0.34)] sm:px-6 lg:px-8 lg:py-8">
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="hero-grid absolute inset-0 opacity-[0.15]" aria-hidden="true" />

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
              Campaign poster / v3
            </p>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Liberty swaps the torch for the cup.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              NYC Play Pass turns the city into a cinematic matchday scene: the Statue of Liberty lifts the World Cup
              trophy, the bracelet sits on the wrist, and the path to venues, tickets, and pickup stays easy on mobile.
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
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
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

          <ul className="grid gap-2 text-sm text-slate-300 sm:grid-cols-3">
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
          <div className="pointer-events-none absolute inset-x-6 top-6 h-24 rounded-full bg-[#f5d300]/14 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-4 top-16 h-20 w-20 rounded-full bg-[#8fc7ff]/12 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-4 bottom-8 h-24 w-24 rounded-full bg-[#54b36b]/12 blur-3xl" aria-hidden="true" />

          <div className="scene-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#0a1a2e] via-[#071423] to-[#050b14] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-5">
            <div className="scene-sheen absolute inset-0 opacity-80" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(245,211,0,0.12),transparent_28%),radial-gradient(circle_at_70%_15%,rgba(84,179,107,0.08),transparent_26%),linear-gradient(180deg,#102945_0%,#071423_54%,#050b14_100%)]">
              <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent)]" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(0deg,rgba(3,10,18,0.98),transparent)]" aria-hidden="true" />

              <div className="relative aspect-[4/5] min-h-[28rem] lg:min-h-[36rem]">
                <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(5,11,20,0.95))]" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-16 flex items-end justify-center gap-2 px-6 opacity-70" aria-hidden="true">
                  {[42, 58, 66, 52, 74, 50, 84, 48, 61, 47].map((height, index) => (
                    <span key={index} className="w-8 rounded-t-full bg-white/8" style={{ height: `${height}px` }} />
                  ))}
                </div>
                <div className="absolute inset-x-0 bottom-20 h-16 bg-[radial-gradient(circle_at_50%_100%,rgba(245,211,0,0.14),transparent_70%)]" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
                  <div className="statue-drift relative w-full max-w-[27rem] px-4 pb-2">
                    <div className="absolute -left-2 top-10 h-24 w-24 rounded-full border border-[#f5d300]/25 bg-[#f5d300]/8 blur-[1px]" aria-hidden="true" />
                    <div className="absolute -right-7 top-18 h-24 w-24 rounded-full border border-[#8fc7ff]/18 bg-[#8fc7ff]/8 blur-[1px]" aria-hidden="true" />

                    <svg
                      viewBox="0 0 420 520"
                      className="h-auto w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.4)]"
                      role="img"
                      aria-label="Illustrated Statue of Liberty holding a World Cup trophy with a bracelet on her wrist"
                    >
                      <defs>
                        <linearGradient id="robe" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#1f6fa4" />
                          <stop offset="100%" stopColor="#0b3556" />
                        </linearGradient>
                        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#fff5bf" />
                          <stop offset="40%" stopColor="#f5d300" />
                          <stop offset="100%" stopColor="#b97f0f" />
                        </linearGradient>
                        <linearGradient id="skyGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.24" />
                          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      <g opacity="0.96">
                        <ellipse cx="210" cy="468" rx="114" ry="16" fill="rgba(0,0,0,0.42)" />
                        <rect x="120" y="392" width="180" height="88" rx="28" fill="#05111d" opacity="0.84" />
                        <path d="M130 412H290" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
                        <path d="M140 426H280" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />

                        <path d="M158 346C162 312 179 286 210 286C241 286 258 312 262 346L274 429H146L158 346Z" fill="url(#robe)" />
                        <path d="M198 272C198 248 202 226 210 214C218 226 222 248 222 272" fill="none" stroke="#6db3ef" strokeWidth="10" strokeLinecap="round" opacity="0.3" />
                        <circle cx="210" cy="180" r="28" fill="#c5d9e6" />
                        <path d="M186 175C192 151 201 136 210 136C220 136 228 151 234 175L236 194H184L186 175Z" fill="#d9e6ef" />
                        <path d="M180 155L168 130M193 147L187 118M210 143V112M227 147L233 118M240 155L252 130" stroke="#f5d300" strokeWidth="6" strokeLinecap="round" />
                        <path d="M172 162C188 141 198 130 210 130C224 130 236 141 248 162" fill="none" stroke="#94c8f8" strokeWidth="4.5" strokeLinecap="round" opacity="0.72" />

                        <path d="M267 264C302 247 322 236 334 220C344 208 351 201 362 198" fill="none" stroke="#d7e9f7" strokeWidth="18" strokeLinecap="round" />
                        <path d="M266 266C299 255 321 246 336 232C347 221 353 213 366 205" fill="none" stroke="#f0f7ff" strokeWidth="11" strokeLinecap="round" opacity="0.58" />
                        <circle cx="333" cy="228" r="12" fill="url(#gold)" stroke="#fdf3b0" strokeWidth="4" />
                        <circle cx="333" cy="228" r="26" fill="none" stroke="#fff0a5" strokeWidth="2" opacity="0.24" />

                        <path d="M324 142C343 142 359 155 362 174V183H326V142Z" fill="url(#gold)" />
                        <path d="M304 170C304 149 315 138 332 138C349 138 360 149 360 170" fill="none" stroke="#fff5cc" strokeWidth="12" strokeLinecap="round" />
                        <path d="M289 174H375C378 174 381 177 381 180V193H283V180C283 177 286 174 289 174Z" fill="url(#gold)" />
                        <path d="M299 193H365L354 246H310L299 193Z" fill="url(#gold)" />
                        <path d="M313 192V170C313 157 320 151 332 151C344 151 351 157 351 170V192" fill="none" stroke="#fff7d4" strokeWidth="7" strokeLinecap="round" />
                        <path d="M306 206H358" stroke="#fff7d4" strokeWidth="5" strokeLinecap="round" opacity="0.75" />
                        <path d="M315 246L332 271L349 246" fill="none" stroke="#fff7d4" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M329 246H335" stroke="#fff7d4" strokeWidth="7" strokeLinecap="round" />
                        <circle cx="332" cy="136" r="6" fill="#fff8df" />

                        <path d="M134 392C144 362 158 340 176 326C192 314 205 309 219 309C238 309 256 317 272 332C287 346 300 365 310 392" fill="none" stroke="#b7d8f2" strokeWidth="8" strokeLinecap="round" opacity="0.42" />
                        <path d="M154 437H266" stroke="#d3e6f7" strokeWidth="10" strokeLinecap="round" opacity="0.42" />
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
                      <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-[#f5d300]">
                        Matchday signal
                      </p>
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

export type Venue = {
  id: string;
  name: string;
  city: string;
  country: string;
  date: string;
  time: string;
  neighborhood: string;
  pickupWindow: string;
  ticketHref: string;
  ticketLabel: string;
  note: string;
};

export type TicketLink = {
  label: string;
  href: string;
  note: string;
};

export type SponsorSlot = {
  name: string;
  status: string;
  note: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type HeroStat = {
  label: string;
  value: string;
  note: string;
};

export type LaunchSignal = {
  label: string;
  value: string;
  note: string;
};

export type VisitStep = {
  step: string;
  title: string;
  note: string;
};

export type PowerTile = {
  title: string;
  note: string;
};

export type TickerItem = {
  label: string;
  value: string;
  note: string;
  tone: "blue" | "yellow" | "green";
};

export const site = {
  name: "NYC GAME PASS",
  code: "NYCUP26",
  tagline: "A bold World Cup city pass for NYC visitors",
  description:
    "Turn New York into a matchday scene with one bracelet, a real-city feel, and a mobile path that stays easy to follow.",
  domain: "nycup26.com",
  eventDates: "June 11 – July 19 · 34 event days",
  ticketPlatform: "Camarote Tickets / Eventbrite",
  pickupLocation: "Pickup location TBD",
  languages: "English · Português · Español",
};

export const tickerItems: TickerItem[] = [
  {
    label: "Matchday",
    value: "June 11",
    note: "Opening day on the board.",
    tone: "yellow",
  },
  {
    label: "Route",
    value: site.ticketPlatform,
    note: "Keep both ticket paths ready.",
    tone: "blue",
  },
  {
    label: "Pickup",
    value: site.pickupLocation,
    note: "Final address still under review.",
    tone: "green",
  },
  {
    label: "Language",
    value: "EN · PT · ES",
    note: "Concise mobile copy.",
    tone: "blue",
  },
  {
    label: "Brand",
    value: site.name,
    note: "Current direction for the prototype.",
    tone: "yellow",
  },
  {
    label: "Event window",
    value: site.eventDates,
    note: "Thirty-four event days.",
    tone: "green",
  },
];

export const heroStats: HeroStat[] = [
  {
    label: "Event days",
    value: "34",
    note: "June 11 through July 19.",
  },
  {
    label: "Venues",
    value: "3 featured",
    note: "A tight preview set for the homepage.",
  },
  {
    label: "Languages",
    value: "3",
    note: "English first, with Portuguese and Spanish support.",
  },
];

export const heroHighlights = [
  "Real Statue of Liberty photo treatment",
  "Bracelet = the visible superpower object",
  "Fast mobile route to venues and waitlist",
];

export type CampaignPillar = {
  eyebrow: string;
  title: string;
  note: string;
};

export const campaignPillars: CampaignPillar[] = [
  {
    eyebrow: "Poster moment",
    title: "Liberty becomes the poster image.",
    note: "Use a real photo and push the World Cup energy on top.",
  },
  {
    eyebrow: "Mobile-first",
    title: "Big type, clear CTA, no scavenger hunt.",
    note: "The first screen should sell the pass and invite action.",
  },
  {
    eyebrow: "City access",
    title: "Bracelet, venues, tickets, pickup — one flow.",
    note: "Keep the value obvious before launch details are final.",
  },
  {
    eyebrow: "Launch-safe",
    title: "Built as a lightweight Vercel-ready page.",
    note: "Static content, fast visuals, and a code path that stays easy to ship.",
  },
];

export type JourneyStep = {
  step: string;
  title: string;
  note: string;
};

export const journeySteps: JourneyStep[] = [
  {
    step: "01",
    title: "Pick the matchday",
    note: "Choose your date first so the right venues and ticket lanes show up fast.",
  },
  {
    step: "02",
    title: "Choose the neighborhood",
    note: "Filter for Midtown, Chelsea, Downtown, rooftops, or late-night plans.",
  },
  {
    step: "03",
    title: "Open the ticket lane",
    note: "Use Camarote Tickets or Eventbrite until the final provider is locked.",
  },
  {
    step: "04",
    title: "Confirm pickup",
    note: "Keep the pickup status visible so visitors know where to go next.",
  },
];

export const launchSignals: LaunchSignal[] = [
  {
    label: "Domain",
    value: site.domain,
    note: "Confirmed prototype domain.",
  },
  {
    label: "Pickup",
    value: site.pickupLocation,
    note: "Still deciding the most viable pickup location.",
  },
  {
    label: "Tickets",
    value: site.ticketPlatform,
    note: "Likely using Camarote Tickets and/or Eventbrite.",
  },
];

export const signupHighlights = [
  "Get launch updates and pickup announcements",
  "Swap venues, benefits, and ticket links from one data file",
  "Ready for English, Portuguese, and Spanish",
];

export const visitSteps: VisitStep[] = [
  {
    step: "01",
    title: "Pick the game day",
    note: "Choose your date first so the right venues and ticket lanes show up fast.",
  },
  {
    step: "02",
    title: "Choose the neighborhood",
    note: "Filter for Midtown, Chelsea, Downtown, rooftops, or late-night plans.",
  },
  {
    step: "03",
    title: "Open the ticket lane",
    note: "Use Camarote Tickets or Eventbrite until the final provider is locked.",
  },
  {
    step: "04",
    title: "Confirm pickup",
    note: "Keep the pickup status visible so visitors know where to go next.",
  },
];

export const powerTiles: PowerTile[] = [
  {
    title: "Watch parties",
    note: "Game-day energy with friends and fans.",
  },
  {
    title: "Special access",
    note: "Selected venues and experiences just for pass holders.",
  },
  {
    title: "Venue discounts",
    note: "Food, drinks, and entry perks at participating spots.",
  },
  {
    title: "After-match plans",
    note: "Keep the night going after the final whistle.",
  },
];

export const venues: Venue[] = [
  {
    id: "hard-rock-cafe",
    name: "Hard Rock Cafe",
    city: "New York",
    country: "USA",
    date: "2026-06-11",
    time: "TBD",
    neighborhood: "Midtown",
    pickupWindow: "Benefits setup pending",
    ticketHref: "https://example.com/nycup26/tickets/hard-rock-cafe",
    ticketLabel: "View venue lane",
    note: "World Cup viewing venue. Benefits still being finalized.",
  },
  {
    id: "iron-bar",
    name: "Iron Bar",
    city: "New York",
    country: "USA",
    date: "2026-06-19",
    time: "TBD",
    neighborhood: "Midtown East",
    pickupWindow: "Benefits setup pending",
    ticketHref: "https://example.com/nycup26/tickets/iron-bar",
    ticketLabel: "View venue lane",
    note: "One of the strongest pickup candidates. Benefits still being finalized.",
  },
  {
    id: "fushimi",
    name: "Fushimi",
    city: "New York",
    country: "USA",
    date: "2026-06-23",
    time: "TBD",
    neighborhood: "Chelsea",
    pickupWindow: "Benefits setup pending",
    ticketHref: "https://example.com/nycup26/tickets/fushimi",
    ticketLabel: "View venue lane",
    note: "World Cup viewing venue. Benefits still being finalized.",
  },
];

export const ticketLinks: TicketLink[] = [
  {
    label: "Camarote Tickets",
    href: "https://example.com/nycup26/tickets/camarote",
    note: "Preferred route if Camarote Tickets is confirmed.",
  },
  {
    label: "Eventbrite",
    href: "https://example.com/nycup26/tickets/eventbrite",
    note: "Fallback if Eventbrite becomes the better fit.",
  },
  {
    label: "Become a sponsor",
    href: "https://example.com/nycup26/sponsor",
    note: "Use this lane for institutions, partners, and community sponsors.",
  },
];

export const sponsorSlots: SponsorSlot[] = [
  {
    name: "Institutional sponsor",
    status: "Open",
    note: "Reserved for institutions and major aligned partners.",
  },
  {
    name: "Venue partner",
    status: "Open",
    note: "Use this slot for hospitality, pickup, or neighborhood support.",
  },
  {
    name: "Community sponsor",
    status: "Open",
    note: "Open for organizations and become-a-sponsor outreach.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What is NYC GAME PASS?",
    answer:
      "A World Cup bracelet/pass concept for city access, venue perks, discounts, and matchday plans in New York.",
  },
  {
    question: "When are the event dates?",
    answer: "June 11 through July 19 — 34 event days.",
  },
  {
    question: "Where do people pick up bracelets or passes?",
    answer:
      "Pickup is still being finalized. Keep the location as TBD until the team confirms the best operational option.",
  },
  {
    question: "What languages are supported?",
    answer: "English first, with Portuguese and Spanish support.",
  },
  {
    question: "What is the suggested brand display?",
    answer: "NYC GAME PASS is the recommended brand, with NYCUP26 used as the campaign code.",
  },
];

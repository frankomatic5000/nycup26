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

export const site = {
  name: "NYCUP26",
  brandDisplay: "NYC Play Pass",
  tagline: "Your city superpower for World Cup days",
  description:
    "NYC Play Pass turns the World Cup bracelet into a city experience: watch games with friends, unlock venue perks, and move through NYC with special access and discounts.",
  domain: "nycup26.com",
  eventDates: "June 11 - July 19 · 34 event days",
  ticketPlatform: "Camarote Tickets / Eventbrite",
  pickupLocation: "TBD: Iron Bar / Margaritaville / Planet Hollywood",
  languages: "English · Português · Español",
};

export const heroStats: HeroStat[] = [
  {
    label: "Event days",
    value: "34",
    note: "June 11 through July 19.",
  },
  {
    label: "Venues",
    value: "10+",
    note: "World Cup viewing spots across NYC.",
  },
  {
    label: "Languages",
    value: "3",
    note: "English first, with Portuguese and Spanish support.",
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
    title: "Choose your game day",
    note: "Pick the date you're in town and see what’s active.",
  },
  {
    step: "02",
    title: "Pick your vibe",
    note: "Watch with friends, hit a rooftop, or plan a late-night stop.",
  },
  {
    step: "03",
    title: "Unlock the pass powers",
    note: "Special access, perks, and discounts across the city.",
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
    id: "copacabana",
    name: "Copacabana",
    city: "New York",
    country: "USA",
    date: "2026-06-15",
    time: "TBD",
    neighborhood: "Midtown",
    pickupWindow: "Benefits setup pending",
    ticketHref: "https://example.com/nycup26/tickets/copacabana",
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
  {
    id: "patron",
    name: "Patron",
    city: "New York",
    country: "USA",
    date: "2026-06-27",
    time: "TBD",
    neighborhood: "West Village",
    pickupWindow: "Benefits setup pending",
    ticketHref: "https://example.com/nycup26/tickets/patron",
    ticketLabel: "View venue lane",
    note: "World Cup viewing venue. Benefits still being finalized.",
  },
  {
    id: "sombrero",
    name: "Sombrero",
    city: "New York",
    country: "USA",
    date: "2026-07-01",
    time: "TBD",
    neighborhood: "Midtown East",
    pickupWindow: "Benefits setup pending",
    ticketHref: "https://example.com/nycup26/tickets/sombrero",
    ticketLabel: "View venue lane",
    note: "World Cup viewing venue. Benefits still being finalized.",
  },
  {
    id: "high-key-rooftop",
    name: "High Key Rooftop",
    city: "New York",
    country: "USA",
    date: "2026-07-05",
    time: "TBD",
    neighborhood: "Hell's Kitchen",
    pickupWindow: "Benefits setup pending",
    ticketHref: "https://example.com/nycup26/tickets/high-key-rooftop",
    ticketLabel: "View venue lane",
    note: "World Cup viewing venue. Benefits still being finalized.",
  },
  {
    id: "bliss-rooftop",
    name: "Bliss Rooftop",
    city: "New York",
    country: "USA",
    date: "2026-07-09",
    time: "TBD",
    neighborhood: "Long Island City",
    pickupWindow: "Benefits setup pending",
    ticketHref: "https://example.com/nycup26/tickets/bliss-rooftop",
    ticketLabel: "View venue lane",
    note: "World Cup viewing venue. Benefits still being finalized.",
  },
  {
    id: "vivid-cabaret",
    name: "Vivid Cabaret",
    city: "New York",
    country: "USA",
    date: "2026-07-13",
    time: "TBD",
    neighborhood: "Midtown",
    pickupWindow: "Benefits setup pending",
    ticketHref: "https://example.com/nycup26/tickets/vivid-cabaret",
    ticketLabel: "View venue lane",
    note: "World Cup viewing venue. Benefits still being finalized.",
  },
  {
    id: "planet-hollywood",
    name: "Planet Hollywood",
    city: "New York",
    country: "USA",
    date: "2026-07-19",
    time: "TBD",
    neighborhood: "Times Square",
    pickupWindow: "Benefits setup pending",
    ticketHref: "https://example.com/nycup26/tickets/planet-hollywood",
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
    question: "What is NYC Play Pass?",
    answer:
      "A World Cup bracelet/pass concept for city access, venue perks, discounts, and matchday plans in New York.",
  },
  {
    question: "When are the event dates?",
    answer:
      "June 11 through July 19 — 34 event days.",
  },
  {
    question: "Where do people pick up bracelets or passes?",
    answer:
      "Pickup is still being finalized, with Iron Bar, Margaritaville, and Planet Hollywood under consideration.",
  },
  {
    question: "What languages are supported?",
    answer:
      "English first, with Portuguese and Spanish support.",
  },
  {
    question: "What is the suggested brand display?",
    answer:
      "NYC Play Pass is the recommended direction for now.",
  },
];

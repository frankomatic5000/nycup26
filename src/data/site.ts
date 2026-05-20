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

export const site = {
  name: "NYCUP26",
  tagline: "World Cup bracelet + pass hub",
  description:
    "Prototype homepage for NYCUP26 with signup, venue directory, ticket links, pickup guidance, sponsor placeholders, and FAQ.",
  domain: "Final domain TBD",
  eventDates: "Event dates TBD",
  ticketPlatform: "Ticket platform TBD",
  pickupLocation: "Pickup location TBD",
  languages: "Languages TBD",
};

export const signupHighlights = [
  "Get launch updates and pickup announcements",
  "Sample venue changes can be updated in one file",
  "Prototype-only signup until email provider is chosen",
];

export const venues: Venue[] = [
  {
    id: "nyc-manhattan-1",
    name: "Manhattan matchday pickup",
    city: "New York",
    country: "USA",
    date: "2026-06-14",
    time: "12:00 PM",
    neighborhood: "Midtown",
    pickupWindow: "Prototype pickup window: Jun 12-14",
    ticketHref: "https://example.com/nycup26/tickets/manhattan",
    ticketLabel: "Sample ticket link",
    note: "Sample entry for validation. Confirmed venue list still pending.",
  },
  {
    id: "nyc-queens-1",
    name: "Queens community watch spot",
    city: "New York",
    country: "USA",
    date: "2026-06-21",
    time: "3:00 PM",
    neighborhood: "Long Island City",
    pickupWindow: "Prototype pickup window: Jun 19-21",
    ticketHref: "https://example.com/nycup26/tickets/queens",
    ticketLabel: "Sample ticket link",
    note: "Keeps venue data-driven while business partners are being confirmed.",
  },
  {
    id: "newark-1",
    name: "Newark supporter meetup",
    city: "Newark",
    country: "USA",
    date: "2026-07-05",
    time: "1:00 PM",
    neighborhood: "Downtown",
    pickupWindow: "Prototype pickup window: Jul 3-5",
    ticketHref: "https://example.com/nycup26/tickets/newark",
    ticketLabel: "Sample ticket link",
    note: "External ticket destination remains a placeholder until platform is chosen.",
  },
  {
    id: "jersey-city-1",
    name: "Jersey City fan hub",
    city: "Jersey City",
    country: "USA",
    date: "2026-07-19",
    time: "4:30 PM",
    neighborhood: "Exchange Place",
    pickupWindow: "Prototype pickup window: Jul 17-19",
    ticketHref: "https://example.com/nycup26/tickets/jersey-city",
    ticketLabel: "Sample ticket link",
    note: "Mobile-first card layout is ready for venue swaps.",
  },
  {
    id: "brooklyn-1",
    name: "Brooklyn kickoff meet",
    city: "Brooklyn",
    country: "USA",
    date: "2026-08-02",
    time: "11:00 AM",
    neighborhood: "Downtown Brooklyn",
    pickupWindow: "Prototype pickup window: Jul 31-Aug 2",
    ticketHref: "https://example.com/nycup26/tickets/brooklyn",
    ticketLabel: "Sample ticket link",
    note: "Placeholder record to prove date filtering and content updates.",
  },
];

export const ticketLinks: TicketLink[] = [
  {
    label: "Sample ticket hub",
    href: "https://example.com/nycup26/tickets",
    note: "Replace with the final ticket platform after approval.",
  },
  {
    label: "Venue-by-venue sales",
    href: "https://example.com/nycup26/tickets/venues",
    note: "External link format stays the same even if provider changes.",
  },
  {
    label: "Waitlist / alerts",
    href: "https://example.com/nycup26/waitlist",
    note: "Placeholder for launch communications and release timing.",
  },
];

export const sponsorSlots: SponsorSlot[] = [
  {
    name: "Title sponsor",
    status: "Open",
    note: "Reserved for a confirmed partner once the list is finalized.",
  },
  {
    name: "Local venue partner",
    status: "Open",
    note: "Use this slot for hospitality, pickup, or neighborhood support.",
  },
  {
    name: "Community sponsor",
    status: "Open",
    note: "Placeholder until the sponsor list is approved.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What is NYCUP26?",
    answer:
      "A World Cup-related bracelet/pass site prototype for signups, venue discovery, ticket links, and pickup instructions.",
  },
  {
    question: "When are the final event dates?",
    answer:
      "Dates are still TBD. This prototype uses sample dates to validate design, filtering, and update workflows.",
  },
  {
    question: "Where do people pick up bracelets or passes?",
    answer:
      "Pickup location is still TBD. The current build shows a placeholder section so the final instructions can be dropped in later.",
  },
  {
    question: "What languages are supported?",
    answer:
      "Languages are still TBD. The layout is ready to expand to additional locales without changing the content model.",
  },
];

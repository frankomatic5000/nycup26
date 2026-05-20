# NYCUP26

Prototype Next.js + TypeScript + Tailwind build for a World Cup-related bracelet/pass site.

## What’s in this first pass
- Mobile-first public homepage
- Email signup prototype
- Data-driven venue directory with client-side month filtering
- External ticket link cards
- Pickup instructions placeholder
- Sponsor placeholder section
- FAQ

## Placeholder items still TBD
- Final domain
- Event dates
- Ticket platform
- Pickup location
- Confirmed venues
- Sponsor list
- Languages

## Local development
```bash
npm install
npm run dev
```

## Verification
```bash
npm run lint
npm run build
```

## Notes
- Venue, ticket, sponsor, and FAQ content live in `src/data/site.ts`.
- The current signup form is prototype-only and does not connect to an email service yet.
- Do not deploy to production until business placeholders are confirmed.

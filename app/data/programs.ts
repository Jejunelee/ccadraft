export type Program = {
  title: string;
  kind: string;
  when: string;
  where: string;
  with: string;
  detail?: string;
  past?: boolean;
  image?: string;
  /** Designed posters should use "contain" so the type stays intact. */
  fit?: "cover" | "contain";
  href?: string;
};

export const programs: Program[] = [
  {
    title: "Spirit & Service: An Immersion in Bartending",
    kind: "Training",
    when: "Nov 9–12, 2026 · 11AM–3PM",
    where: "CCA BGC, Taguig",
    with: "Arcadius Rybak, Toma Toma",
    image: "/programs/spirit-service.jpg",
    fit: "contain",
    href: "https://www.eventbrite.com/e/spirit-service-an-immersion-in-bartending-with-arcadius-rybak-4-days-tickets-2002182967152",
  },
  {
    title: "The New Breed of Filipino Hospitality",
    kind: "Guest Experience Bootcamp",
    when: "Oct 28, Nov 4, 11 & 18, 2026 · 9AM–4PM",
    where: "CCA BGC",
    with: "Isabel Lozano, Decorum by MIL",
    image: "/programs/new-breed.jpg",
    fit: "contain",
    href: "https://www.eventbrite.com/e/the-new-breed-of-filipino-hospitality-guest-experience-bootcamp-4-days-tickets-2000256457911",
  },
  {
    title: "The Business Owner HR Blueprint: Scale Without the Chaos",
    kind: "HR for Non-HR Managers Bootcamp",
    when: "Nov 9–10, 2026 · 9AM–5PM",
    where: "Brittany Hotel BGC",
    with: "RL Garcia",
    detail: "Second run",
    image: "/programs/hr-blueprint-scale.jpg",
    fit: "contain",
    href: "https://www.eventbrite.com/e/the-business-owner-hr-blueprint-scale-without-the-chaos-tickets-2003955252104",
  },
  {
    title: "Beyond the Plate: Food Business Profit Bootcamp",
    kind: "Bootcamp",
    when: "Aug 27, 2026 · 9AM–5PM",
    where: "CCA BGC Kitchen Studio",
    with: "Pinky Velez Poe",
    detail: "PHP 12,000",
    past: true,
  },
  {
    title: "The Business Owner HR Blueprint",
    kind: "HR for Non-HR Managers Bootcamp",
    when: "June 25–26, 2026",
    where: "Brittany Hotel BGC",
    with: "RL Garcia",
    detail: "First run",
    past: true,
    image: "/programs/hr-blueprint.jpg",
    href: "https://www.eventbrite.com/e/the-business-owner-hr-blueprint-scale-without-the-chaos-tickets-2003955252104",
  },
  {
    title: "CCA Connect Summit",
    kind: "Summit",
    when: "Recap",
    where: "CCA Connect",
    with: "RL Garcia, Jose “Jomag” Magsaysay Jr., and Prof. Xavier Alpasa",
    past: true,
    image: "/programs/summit.jpg",
    href: "https://www.eventbrite.com/e/from-table-to-business-cca-connect-summit-2026-tickets-1991347842001",
  },
  {
    title: "CCA Connect Bootcamp: Experience is the New Menu",
    kind: "Bootcamp",
    when: "November 27, 2025",
    where: "CCA Connect",
    with: "RL Garcia, Ryan Cruz, Isabel Lozano, and the Hapag and Aya team",
    past: true,
    image: "/programs/experience.jpg",
  },
];

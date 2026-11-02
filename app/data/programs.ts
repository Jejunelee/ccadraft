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
  },
  {
    title: "The New Breed of Filipino Hospitality",
    kind: "Guest Experience Bootcamp",
    when: "Oct 28, Nov 4, 11 & 18, 2026 · 9AM–4PM",
    where: "CCA BGC",
    with: "Isabel Lozano, Decorum by MIL",
  },
  {
    title: "The Business Owner HR Blueprint: Scale Without the Chaos",
    kind: "HR for Non-HR Managers Bootcamp",
    when: "Oct 22–23, 2026",
    where: "Brittany Hotel BGC",
    with: "RL Garcia",
    detail: "Second run",
    past: true,
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
  },
  {
    title: "CCA Connect Summit",
    kind: "Summit",
    when: "Recap",
    where: "CCA Connect",
    with: "RL Garcia, Jose “Jomag” Magsaysay Jr., and Prof. Xavier Alpasa",
    past: true,
  },
  {
    title: "CCA Connect Bootcamp: Experience is the New Menu",
    kind: "Bootcamp",
    when: "November 27, 2025",
    where: "CCA Connect",
    with: "RL Garcia, Ryan Cruz, Isabel Lozano, and the Hapag and Aya team",
    past: true,
  },
];

export function expertName(name: string) {
  return name
    .split(" ")
    .map((word) => (word.length <= 2 ? word.toUpperCase() : word.charAt(0) + word.slice(1).toLowerCase()))
    .join(" ");
}

export const experts = [
  { name: "BEA TRINIDAD", role: "PR AND MARKETING", image: "/experts/team/trinidad.png", slug: "bea-trinidad" },
  { name: "KERWIN FUENTANILLA", role: "MENU DEVELOPMENT", image: "/experts/team/fuentanilla.png", slug: "fuentanilla-lorino-mendoza" },
  { name: "ISABEL LOZANO", role: "SERVICE AND SPACE DESIGN", image: "/experts/team/lozano.png", slug: "isabel-lozano" },
  { name: "CEDRIC MENDOZA", role: "BEVERAGE", image: "/experts/team/mendoza.png", slug: "fuentanilla-lorino-mendoza" },
  { name: "MIGUEL LORINO", role: "MENU DEVELOPMENT", image: "/experts/team/lorino.png", slug: "fuentanilla-lorino-mendoza" },
  { name: "RL GARCIA", role: "TALENT ACQUISITION", image: "/experts/team/garcia.png", slug: "rl-garcia" },
  { name: "XAVIER ALPASA", role: "TRAINING & DEVELOPMENT", image: "/experts/team/alpasa.png", slug: "xavier-alpasa" },
  { name: "WORKS FINE STUDIOS", role: "PR AND MARKETING", image: "/experts/team/worksfine-bb.png", slug: "bea-trinidad" },
];

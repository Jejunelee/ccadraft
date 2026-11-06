export function expertName(name: string) {
  return name
    .split(" ")
    .map((word) => (word.length <= 2 ? word.toUpperCase() : word.charAt(0) + word.slice(1).toLowerCase()))
    .join(" ");
}

export type Expert = {
  name: string;
  role: string;
  image?: string;
  slug?: string;
};

export const experts: Expert[] = [
  { name: "Isabel Lozano", role: "Service Design", image: "/experts/team/lozano.png", slug: "isabel-lozano" },
  { name: "Pinky Velez Poe", role: "Finance", image: "/experts/team/poe.jpg" },
  { name: "Jose Magsaysay Jr.", role: "Entrepreneurship", image: "/experts/team/magsaysay.jpg" },
  { name: "RL Garcia", role: "People Management", image: "/experts/team/garcia.png", slug: "rl-garcia" },
  { name: "Bea Trinidad", role: "PR and Marketing", image: "/experts/team/trinidad.png", slug: "bea-trinidad" },
  { name: "Cedric Mendoza", role: "Beverage", image: "/experts/team/mendoza.png", slug: "fuentanilla-lorino-mendoza" },
  { name: "Xavier Alpasa", role: "Training and Development", image: "/experts/team/alpasa.png", slug: "xavier-alpasa" },
  { name: "Works Fine Studios", role: "PR and Marketing", image: "/experts/team/worksfine-bb.png", slug: "bea-trinidad" },
  { name: "Miguel Lorino", role: "Chef", image: "/experts/team/lorino.png", slug: "fuentanilla-lorino-mendoza" },
  { name: "Kerwin Fuentanilla", role: "Chef", image: "/experts/team/fuentanilla.png", slug: "fuentanilla-lorino-mendoza" },
  { name: "Anne Atanacio", role: "Chef Instructor", image: "/experts/team/atanacio.jpg" },
  { name: "Martin del Prado", role: "Chef", image: "/experts/team/del-prado.jpg" },
];

import Link from "next/link";

const logos: { name: string; src: string; className: string; plate?: boolean }[] = [
  { name: "Department of Tourism", src: "/partners/dot.svg", className: "h-16 w-auto sm:h-[4.5rem]" },
  { name: "CITEM", src: "/partners/citem.png", className: "h-12 w-auto sm:h-14", plate: true },
  { name: "U.S. Department of Agriculture", src: "/partners/usda.svg", className: "h-14 w-auto sm:h-16", plate: true },
  { name: "U.S. Dairy Export Council", src: "/partners/usdec.png", className: "h-12 w-auto sm:h-14" },
  { name: "Korean Food Promotion Institute", src: "/partners/kfpi.png", className: "h-10 w-auto sm:h-12", plate: true },
  { name: "Austrade", src: "/partners/austrade.svg", className: "h-8 w-auto sm:h-10" },
  { name: "New Zealand Trade and Enterprise", src: "/partners/nzte.svg", className: "h-9 w-auto sm:h-11" },
  { name: "RATIONAL", src: "/partners/rational.svg", className: "h-10 w-auto sm:h-12" },
  { name: "Breville", src: "/partners/breville.svg", className: "h-8 w-auto sm:h-10" },
  { name: "NutriAsia", src: "/partners/nutriasia.svg", className: "h-16 w-auto sm:h-[4.5rem]", plate: true },
  { name: "Nestlé", src: "/partners/nestle.svg", className: "h-8 w-auto sm:h-10" },
];

const cards = [
  {
    title: "Sponsored bootcamps & summits",
    text: "Put your brand at the center of the programs food entrepreneurs already come to.",
  },
  {
    title: "Co-branded masterclasses",
    text: "Teach your products in context — a dairy techniques lab, a foodservice menu session.",
  },
  {
    title: "Product-integrated training",
    text: "Get your ingredients and equipment into the hands and recipes of working operators.",
  },
  {
    title: "R&D & menu innovation",
    text: "Develop and test new applications with CCA chefs and a live audience of buyers.",
  },
  {
    title: "Talent pipeline",
    text: "Meet and recruit trained culinary and hospitality professionals from our network.",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="bg-[#0a0a0a] font-jost text-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 lg:px-6 lg:py-20">
        <p className="kicker text-[#AFCFE4] uppercase">For brand partners</p>
        <h2 className="mt-3 max-w-[16ch] font-poppins text-[1.75rem] leading-tight font-semibold tracking-tight lg:text-4xl">
          Connect your brand to the food-business <em className="phrase">community.</em>
        </h2>
        <ul className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5" aria-label="Partner brands">
          {logos.map((logo) => (
            <li key={logo.name} className={logo.plate ? "rounded-2xl bg-white px-3 py-2" : undefined}>
              <img src={logo.src} alt={logo.name} className={logo.className} />
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[54ch] descriptor text-white/65">
          The owners, chefs, and operators who decide what to buy are already in our room. We help food and beverage brands reach, educate, and build loyalty with them — through programs backed by CCA Manila.
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-poppins text-[17px] font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{card.text}</p>
            </article>
          ))}
          <article className="flex flex-col justify-center rounded-2xl border border-dashed border-white/20 p-5">
            <h3 className="font-poppins text-[17px] font-semibold">Something else in mind?</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">Tell us your goal and we&apos;ll design the activation around it.</p>
            <Link href="/JoinUs" className="mt-3 text-sm font-semibold text-[#AFCFE4] hover:underline">
              Let&apos;s talk →
            </Link>
          </article>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/JoinUs" className="inline-flex rounded-full bg-[#AFCFE4] px-5 py-3 text-sm font-semibold text-black hover:bg-[#c5dff0]">
            Explore partnerships
          </Link>
          <Link href="/JoinUs" className="inline-flex rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:border-white">
            Become a partner
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

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
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:py-20">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-[#AFCFE4] uppercase">For brand partners</p>
        <h2 className="mt-3 max-w-[16ch] font-poppins text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
          Connect your brand to the food-business community.
        </h2>
        <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-white/65 sm:text-lg">
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

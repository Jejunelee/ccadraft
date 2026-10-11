import Image from "next/image";
import Link from "next/link";

const ways = [
  {
    num: "01",
    title: "Bootcamps & Events",
    role: "The front door",
    text: "Time-boxed, hands-on programs open to any food-business owner. Learn a specific skill, meet our experts, and leave with something you can use on Monday.",
    points: ["Public bootcamps like Beyond the Plate", "Summits and industry gatherings", "Short workshops and masterclasses"],
    foot: "Best for owners and teams building their skills.",
    href: "https://events.ccaconnect.co",
    external: true,
    image: "/landing/offers2x.jpg",
  },
  {
    num: "02",
    title: "Consultancy",
    role: "When you're ready to go deeper",
    text: "Tailored engagements for a specific challenge in your business. Our core practice and our expert network, brought in to work alongside your team.",
    points: ["Scoped to your operation and goals", "Led by CCA-vetted specialists", "Available whenever you reach out"],
    foot: "Best for businesses ready to fix or scale an operation.",
    href: "/experts",
    external: false,
    image: "/landing/offers1x1.png",
  },
];

export default function Offers() {
  return (
    <section id="work" className="bg-[#f4f7f8] font-jost">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:py-20">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-[#225475] uppercase">How we work with you</p>
        <h2 className="mt-3 max-w-[16ch] font-poppins text-3xl leading-tight font-semibold tracking-tight text-black sm:text-4xl">
          Two ways in — one team behind both.
        </h2>
        <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-[#5c6b73] sm:text-lg">
          Most food businesses meet us in a workshop. When you&apos;re ready to go deeper, the same experts come in to work on your operation directly.
        </p>

        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {ways.map((way) => (
            <article key={way.num} className="relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_1px_2px_rgba(10,10,10,0.04),0_8px_24px_rgba(10,10,10,0.05)] transition-transform hover:-translate-y-0.5">
              <div className="relative h-44 w-full">
                <Image src={way.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="flex flex-1 flex-col p-7">
              <span className="text-sm font-semibold tracking-wide text-[#225475]">{way.num}</span>
              <h3 className="mt-2 font-poppins text-[1.35rem] font-semibold text-black">{way.title}</h3>
              <p className="mt-1 text-xs font-semibold tracking-[0.08em] text-[#5c6b73] uppercase">{way.role}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#5c6b73]">{way.text}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {way.points.map((point) => (
                  <li key={point} className="relative pl-5 text-[15px] text-black">
                    <span className="absolute top-2 left-0 h-1.5 w-1.5 rounded-full bg-[#225475]" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-5 text-sm text-[#5c6b73]">{way.foot}</p>
              {way.external ? (
                <a href={way.href} target="_blank" rel="noopener noreferrer" className="mt-3 text-sm font-semibold text-[#225475] after:absolute after:inset-0 hover:underline">
                  Explore →
                </a>
              ) : (
                <Link href={way.href} className="mt-3 text-sm font-semibold text-[#225475] after:absolute after:inset-0 hover:underline">
                  Explore →
                </Link>
              )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 lg:px-6 lg:py-20">
        <p className="kicker text-[#225475] uppercase">How we work with you</p>
        <p className="mt-4 max-w-[58ch] descriptor text-[#5c6b73]">
          Most food businesses meet us in a workshop. When you&apos;re ready to go deeper, the same experts come in to work on your operation directly.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {ways.map((way) => (
            <article key={way.num} className="lift relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_1px_2px_rgba(10,10,10,0.04),0_8px_24px_rgba(10,10,10,0.05)] lg:flex-row">
              <div className="relative aspect-[2/1] w-full shrink-0 lg:aspect-auto lg:w-[280px]">
                <Image src={way.image} alt="" fill className="object-cover object-[center_22%]" sizes="(max-width: 1024px) 100vw, 280px" />
              </div>
              <div className="flex flex-1 flex-col p-5 lg:p-6">
              <span className="text-sm font-semibold tracking-wide text-[#225475]">{way.num}</span>
              <h3 className="mt-1.5 font-poppins text-[1.35rem] text-black">{way.title}</h3>
              <p className="mt-1 text-sm tracking-[0.08em] text-[#5c6b73] uppercase">{way.role}</p>
              <p className="mt-3 text-base leading-snug text-[#5c6b73]">{way.text}</p>
              <ul className="mt-3 flex flex-col gap-1 lg:flex-row lg:flex-wrap lg:gap-x-6 lg:gap-y-1">
                {way.points.map((point) => (
                  <li key={point} className="relative pl-4 text-base leading-snug text-black">
                    <span className="absolute top-2 left-0 h-1.5 w-1.5 rounded-full bg-[#225475]" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                <p className="text-base leading-snug text-[#5c6b73]">{way.foot}</p>
                {way.external ? (
                  <a href={way.href} target="_blank" rel="noopener noreferrer" className="text-base text-black/70 after:absolute after:inset-0 hover:text-black">
                    Explore →
                  </a>
                ) : (
                  <Link href={way.href} className="text-base text-black/70 after:absolute after:inset-0 hover:text-black">
                    Explore →
                  </Link>
                )}
              </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

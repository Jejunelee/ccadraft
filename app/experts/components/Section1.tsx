import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Food and bar menu development", image: "/experts/section1/1.jpg", slug: "fuentanilla-lorino-mendoza" },
  { title: "Kitchen and bakery training", image: "/experts/section1/2.jpg", slug: null },
  { title: "Culinary, hospitality, and management training", image: "/experts/section1/3.jpg", slug: "xavier-alpasa" },
  { title: "Service design", image: "/experts/section1/4.jpg", slug: "isabel-lozano" },
  { title: "PR and marketing", image: "/experts/section1/5.jpg", slug: "bea-trinidad" },
  { title: "Talent acquisition", image: "/experts/section1/6.jpg", slug: "rl-garcia" },
  { title: "Legal and accounting", image: "/experts/section1/7.jpg", slug: null },
  { title: "Packaging and distribution", image: "/experts/section1/8.jpg", slug: null },
];

export default function Section1() {
  return (
    <section className="bg-white font-jost">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 lg:px-6 lg:py-20">
        <p className="kicker text-[#225475] uppercase">Consultancy</p>
        <h2 className="mt-3 font-poppins text-[1.75rem] leading-tight font-semibold tracking-tight text-black lg:text-4xl">
          Here&apos;s where we <em className="phrase">come in</em>
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {services.map((service) => {
            const card = (
              <article className={`flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-[#f4f7f8] ${service.slug ? "" : "opacity-70"}`}>
                <div className="relative aspect-square w-full shrink-0 bg-[#E7F5F5]">
                  <Image src={service.image} alt={service.title} fill className="object-contain object-center" sizes="(max-width: 1024px) 45vw, 22vw" />
                </div>
                <div className="flex min-h-[5.5rem] flex-1 flex-col p-4">
                  <h3 className="font-poppins text-base leading-snug font-semibold text-black">{service.title}</h3>
                  {!service.slug ? <p className="mt-1 text-sm font-semibold tracking-wide text-[#5c6b73] uppercase">Coming soon</p> : null}
                </div>
              </article>
            );

            return service.slug ? (
              <Link key={service.title} href={`/experts/${service.slug}`} className="lift block h-full">
                {card}
              </Link>
            ) : (
              <div key={service.title} className="h-full">{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

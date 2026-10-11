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
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:py-20">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-[#225475] uppercase">Consultancy</p>
        <h2 className="mt-3 font-poppins text-3xl leading-tight font-semibold tracking-tight text-black sm:text-4xl">
          Here&apos;s where we come in
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {services.map((service) => {
            const card = (
              <article className={`overflow-hidden rounded-2xl border border-black/10 bg-[#f4f7f8] ${service.slug ? "" : "opacity-70"}`}>
                <div className="relative aspect-square w-full">
                  <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 45vw, 22vw" />
                </div>
                <div className="p-3">
                  <h3 className="font-poppins text-sm font-semibold text-black">{service.title}</h3>
                  {!service.slug ? <p className="mt-1 text-[11px] font-semibold tracking-wide text-[#5c6b73] uppercase">Coming soon</p> : null}
                </div>
              </article>
            );

            return service.slug ? (
              <Link key={service.title} href={`/experts/${service.slug}`} className="block transition-transform hover:-translate-y-0.5">
                {card}
              </Link>
            ) : (
              <div key={service.title}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

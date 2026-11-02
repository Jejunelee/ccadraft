import Image from "next/image";
import Link from "next/link";

const team = [
  { name: "Xavier Alpasa", role: "Xavier Associates", image: "/about/team/xavier1.png", slug: "xavier-alpasa" },
  { name: "Isabel Lozano", role: "Decorum by MIL", image: "/about/team/isabel1.png", slug: "isabel-lozano" },
  { name: "RL Garcia", role: "HR Head of Brittany Hotels", image: "/about/team/rl.jpg", slug: "rl-garcia" },
  { name: "Bea Trinidad", role: "PR & Marketing Manager", image: "/about/team/bea.jpg", slug: "bea-trinidad" },
  { name: "Marinela Trinidad", role: "CEO", image: "/about/team/marinela1.png", slug: "" },
];

export default function Team() {
  return (
    <section className="bg-[#f4f7f8] font-jost">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 lg:px-6 lg:py-20">
        <p className="kicker text-[#225475] uppercase">The team</p>
        <h2 className="mt-3 font-poppins text-[1.75rem] leading-tight font-semibold tracking-tight text-black lg:text-4xl">
          The people you&apos;ll <em className="phrase">meet</em> first.
        </h2>
        <div className="mt-8 grid grid-cols-2 items-stretch gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((member) => {
            const card = (
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white">
                <div className="relative aspect-[4/5] w-full shrink-0 bg-[#E7F5F5]">
                  <Image src={member.image} alt={member.name} fill className="object-cover object-center" sizes="(max-width: 1024px) 45vw, 18vw" />
                </div>
                <div className="flex min-h-[8.75rem] flex-1 flex-col p-4">
                  <h3 className="font-poppins text-lg leading-snug font-semibold text-black">{member.name}</h3>
                  <p className="mt-auto pt-2 text-sm font-semibold tracking-wide text-[#5c6b73] uppercase">{member.role}</p>
                </div>
              </article>
            );

            return member.slug ? (
              <Link key={member.name} href={`/experts/${member.slug}`} className="lift block h-full">
                {card}
              </Link>
            ) : (
              <div key={member.name} className="h-full">{card}</div>
            );
          })}
        </div>

        <div className="mt-10 border-t border-black/10 pt-8 lg:mt-14 lg:flex lg:items-end lg:justify-between lg:gap-16">
          <h2 className="max-w-[14ch] font-poppins text-[1.75rem] leading-tight tracking-tight text-black lg:text-4xl">
            We are more than five <em className="phrase">faces.</em>
          </h2>
          <p className="mt-4 max-w-[46ch] descriptor text-[#5c6b73] lg:mt-0">
            CCA Connect is more than a small core team. Behind every engagement is a wide network of trusted industry connections—professionals, mentors, and practitioners who collaborate to deliver well-rounded, relevant solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

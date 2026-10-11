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
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:py-20">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-[#225475] uppercase">The team</p>
        <h2 className="mt-3 font-poppins text-3xl leading-tight font-semibold tracking-tight text-black sm:text-4xl">
          The people you&apos;ll meet first.
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((member) => {
            const card = (
              <article className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                <div className="relative aspect-[3/4] w-full">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 1024px) 45vw, 18vw" />
                </div>
                <div className="p-3">
                  <h3 className="font-poppins text-sm font-semibold text-black sm:text-base">{member.name}</h3>
                  <p className="mt-1 text-[11px] tracking-wide text-[#5c6b73] uppercase">{member.role}</p>
                </div>
              </article>
            );

            return member.slug ? (
              <Link key={member.name} href={`/experts/${member.slug}`} className="block transition-transform hover:-translate-y-0.5">
                {card}
              </Link>
            ) : (
              <div key={member.name}>{card}</div>
            );
          })}
        </div>

        <div className="mt-12 max-w-[46ch]">
          <h2 className="font-poppins text-3xl leading-tight font-semibold tracking-tight text-black sm:text-4xl">
            We are more than five faces.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5c6b73] sm:text-lg">
            CCA Connect is more than a small core team. Behind every engagement is a wide network of trusted industry connections—professionals, mentors, and practitioners who collaborate to deliver well-rounded, relevant solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

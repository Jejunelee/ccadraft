import Image from "next/image";
import Link from "next/link";
import { Venus } from "lucide-react";

const team: { name: string; role?: string; image?: string; slug?: string; symbol?: "woman" }[] = [
  { name: "Marinela Trinidad", role: "CEO", image: "/about/team/marinela1.png" },
  { name: "Bea Trinidad", role: "PR & Marketing", image: "/about/team/bea.jpg", slug: "bea-trinidad" },
  { name: "Pia Trinidad", image: "/about/team/pia.jpg" },
  { name: "Athena Arevalo", role: "Executive Assistant for Business and Marketing", image: "/about/team/athena.jpg" },
  { name: "Chai Januya", symbol: "woman" },
  { name: "Chamen Manalo", role: "Business Development Manager", image: "/about/team/chamen.jpg" },
];

export default function Team() {
  return (
    <section className="bg-[#f4f7f8] font-jost">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 lg:px-6 lg:py-20">
        <p className="kicker text-[#225475] uppercase">The team</p>
        <h2 className="mt-3 font-poppins text-[1.75rem] leading-tight font-semibold tracking-tight text-black lg:text-4xl">
          The people you&apos;ll <em className="phrase">meet</em> first.
        </h2>
        <div className="mt-8 grid grid-cols-2 items-stretch gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {team.map((member) => {
            const card = (
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white">
                <div className="relative aspect-[4/5] w-full shrink-0 bg-[#E7F5F5]">
                  {member.image ? (
                    <Image src={member.image} alt={member.name} fill className="object-cover object-center" sizes="(max-width: 1024px) 45vw, 30vw" />
                  ) : member.symbol === "woman" ? (
                    <span className="flex h-full items-center justify-center text-[#225475]" aria-hidden="true">
                      <Venus size={72} strokeWidth={1.5} />
                    </span>
                  ) : (
                    <span className="flex h-full items-center justify-center font-poppins text-4xl text-[#225475]">
                      {member.name.split(" ").slice(0, 2).map((part) => part[0]).join("")}
                    </span>
                  )}
                </div>
                <div className="flex min-h-[8.75rem] flex-1 flex-col p-4">
                  <h3 className="font-poppins text-lg leading-snug font-semibold text-black">{member.name}</h3>
                  {member.role ? <p className="mt-auto pt-2 text-sm font-semibold tracking-wide text-[#5c6b73] uppercase">{member.role}</p> : null}
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
            We are more than these <em className="phrase">faces.</em>
          </h2>
          <p className="mt-4 max-w-[46ch] descriptor text-[#5c6b73] lg:mt-0">
            CCA Connect is more than a small core team. Behind every engagement is a wide network of trusted industry connections—professionals, mentors, and practitioners who collaborate to deliver well-rounded, relevant solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

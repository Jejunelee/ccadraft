import Image from "next/image";
import Link from "next/link";
import { expertName, experts } from "@/app/experts/experts";

export default function ExpertsTeam() {
  return (
    <section className="bg-[#E7F5F5] font-jost">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 lg:px-6 lg:py-20">
        <p className="kicker text-[#225475] uppercase">The network</p>
        <h2 className="mt-3 font-poppins text-[1.75rem] leading-tight font-semibold tracking-tight text-black lg:text-4xl">
          The people who make it <em className="phrase">happen</em>
        </h2>
        <div className="mobile-rail mt-8 -mx-5 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto px-5 pb-1 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0">
          {experts.map((expert) => (
            <Link key={expert.name} href={`/experts/${expert.slug}`} className="lift flex w-[72%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white lg:w-auto lg:shrink">
              <div className="relative aspect-[4/5] w-full shrink-0 bg-[#E7F5F5]">
                <Image src={expert.image} alt={expertName(expert.name)} fill className="object-contain object-center" sizes="(max-width: 1024px) 72vw, 22vw" />
              </div>
              <div className="flex min-h-[8.25rem] flex-1 flex-col p-4">
                <h3 className="font-poppins text-lg leading-snug font-semibold text-black">{expertName(expert.name)}</h3>
                <p className="mt-auto pt-2 text-sm font-semibold tracking-wide text-[#5c6b73] uppercase">{expert.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

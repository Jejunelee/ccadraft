import Image from "next/image";
import Link from "next/link";
import { expertName, experts } from "@/app/experts/experts";

export default function ExpertsPreview() {
  return (
    <section id="experts" className="bg-[#E7F5F5] font-jost">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 lg:px-6 lg:py-20">
        <p className="kicker text-[#225475] uppercase">Who you&apos;ll learn from</p>
        <h2 className="mt-3 max-w-[16ch] font-poppins text-[1.75rem] leading-tight font-semibold tracking-tight text-black lg:text-4xl">
          Working <em className="phrase">experts,</em> not career lecturers.
        </h2>
        <p className="mt-4 max-w-[58ch] descriptor text-[#5c6b73]">
          Our experts run kitchens, bars, and food businesses of their own. When you join a bootcamp or bring us in, you work with the people actually doing it.
        </p>

        <div className="mobile-rail mt-8 -mx-5 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto px-5 pb-1 lg:mx-0 lg:mt-9 lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0">
          {experts.map((expert) => (
            <Link
              key={expert.name}
              href={`/experts/${expert.slug}`}
              className="lift flex h-full w-[72%] shrink-0 snap-start flex-col rounded-2xl border border-black/10 bg-white p-5 lg:w-auto lg:shrink"
            >
              <div className="relative mb-3 h-11 w-11 overflow-hidden rounded-full bg-[#225475]">
                <Image src={expert.image} alt="" fill className="object-cover object-[center_28%]" sizes="44px" />
              </div>
              <p className="font-poppins text-lg font-semibold text-black">{expertName(expert.name)}</p>
              <p className="mt-auto pt-2 text-base leading-snug text-[#5c6b73]">{expert.role}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

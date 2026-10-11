import Image from "next/image";
import Link from "next/link";
import { expertName, experts } from "@/app/experts/experts";

export default function ExpertsPreview() {
  return (
    <section id="experts" className="bg-[#E7F5F5] font-jost">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:py-20">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-[#225475] uppercase">Who you&apos;ll learn from</p>
        <h2 className="mt-3 max-w-[16ch] font-poppins text-3xl leading-tight font-semibold tracking-tight text-black sm:text-4xl">
          Working experts, not career lecturers.
        </h2>
        <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-[#5c6b73] sm:text-lg">
          Our experts run kitchens, bars, and food businesses of their own. When you join a bootcamp or bring us in, you work with the people actually doing it.
        </p>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {experts.map((expert) => (
            <Link
              key={expert.name}
              href={`/experts/${expert.slug}`}
              className="rounded-2xl border border-black/10 bg-white p-5 transition-transform hover:-translate-y-0.5"
            >
              <div className="relative mb-3 h-11 w-11 overflow-hidden rounded-full bg-[#225475]">
                <Image src={expert.image} alt="" fill className="object-cover" sizes="44px" />
              </div>
              <p className="font-poppins text-[15px] font-semibold text-black">{expertName(expert.name)}</p>
              <p className="mt-1 text-[13px] leading-snug text-[#5c6b73]">{expert.role}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

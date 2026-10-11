import Image from "next/image";
import Link from "next/link";
import { expertName, experts } from "@/app/experts/experts";

export default function ExpertsTeam() {
  return (
    <section className="bg-[#E7F5F5] font-jost">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:py-20">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-[#225475] uppercase">The network</p>
        <h2 className="mt-3 font-poppins text-3xl leading-tight font-semibold tracking-tight text-black sm:text-4xl">
          The people who make it happen
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {experts.map((expert) => (
            <Link key={expert.name} href={`/experts/${expert.slug}`} className="group overflow-hidden rounded-2xl bg-white">
              <div className="relative aspect-[3/4] w-full">
                <Image src={expert.image} alt={expertName(expert.name)} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 45vw, 22vw" />
              </div>
              <div className="p-4">
                <h3 className="font-poppins text-sm font-semibold text-black sm:text-base">{expertName(expert.name)}</h3>
                <p className="mt-1 text-[11px] tracking-wide text-[#5c6b73] uppercase">{expert.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

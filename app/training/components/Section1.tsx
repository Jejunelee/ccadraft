import Image from "next/image";
import Link from "next/link";

export default function Section1() {
  return (
    <section className="bg-white font-jost">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 lg:px-6 lg:py-20">
        <div className="grid items-stretch gap-4 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
          <div className="relative aspect-video overflow-hidden rounded-2xl md:aspect-auto md:h-full">
            <Image src="/training/section1/1.png" alt="Workshop session" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 30vw" priority />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image src="/training/section1/2x.jpg" alt="Team workshop" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 60vw" priority />
          </div>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="kicker text-[#225475] uppercase">Workshop</p>
            <h2 className="mt-3 font-poppins text-[1.75rem] leading-tight font-semibold tracking-tight text-black lg:text-4xl">
              <em className="phrase">Strengths</em> Assessment Workshop
            </h2>
            <p className="mt-4 max-w-[58ch] descriptor text-[#5c6b73]">
              Discover your team&apos;s natural talents with the Gallup CliftonStrengths® assessment. This workshop helps participants leverage their top strengths to improve collaboration, leadership, and performance. Ideal for leaders and growing teams, it builds more engaged, high-performing workplaces.
            </p>
            <Link href="/JoinUs" className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#225475] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1b445e] lg:w-auto lg:min-h-0 lg:justify-start">
              Request this workshop
            </Link>
          </div>
          <div>
            <p className="kicker text-[#5c6b73] uppercase">Powered by</p>
            <div className="mt-4 flex flex-col gap-3">
              <div className="relative h-16 overflow-hidden rounded-xl border border-black/10 bg-white">
                <Image src="/training/section1/p1.png" alt="Xavier & Associates" fill className="object-contain p-3" sizes="240px" />
              </div>
              <div className="relative h-16 overflow-hidden rounded-xl border border-black/10 bg-white">
                <Image src="/training/section1/p2.png" alt="Gallup" fill className="object-contain p-3" sizes="240px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

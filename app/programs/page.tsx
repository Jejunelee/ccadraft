import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/landing/Footer";
import PageIntro from "@/app/components/PageIntro";
import { Fact, ProgramButton, Section } from "./components";

export const metadata: Metadata = {
  title: "Programs | CCA Connect Philippines",
  description:
    "CCA Manila's Center for Food Entrepreneurship pathway: Food Entrepreneurship Masterclass, Food Venture Accelerator Program, and CCA Connect Bootcamps.",
};

const steps = [
  {
    title: "Food Entrepreneurship Masterclass",
    text: "Starting point if you have no business yet or are still deciding",
  },
  {
    title: "Food Venture Accelerator Program",
    text: "Six-month cohort for founders with a food venture or venture idea, ending in Pitch Day",
  },
  {
    title: "CCA Connect Bootcamps",
    text: "Practical modules, also available individually",
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-[#f4f7f8] text-black">
      <PageIntro
        eyebrow="Programs"
        title="Food entrepreneurship pathway"
        emphasis="pathway"
        text="CCA is building a food entrepreneurship pathway for people at every stage — from those still deciding whether to start a food business to founders ready to grow one."
      />

      <section className="bg-[#f4f7f8] font-jost" aria-label="Pathway steps">
        <div className="mx-auto grid w-full max-w-[1280px] gap-4 px-5 pb-4 lg:grid-cols-3 lg:px-6">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-black/10 bg-white p-5">
              <p className="text-sm tracking-[0.14em] text-[#225475] uppercase">0{index + 1}</p>
              <h2 className="mt-2 font-poppins text-xl leading-snug font-semibold">{step.title}</h2>
              <p className="mt-2 text-base text-[#5c6b73]">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Section id="choose" title="Two ways to begin" tone="white">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="flex flex-col rounded-2xl border border-black/10 bg-[#f4f7f8] p-5">
            <h3 className="font-poppins text-2xl leading-snug font-semibold">Food Entrepreneurship Masterclass</h3>
            <p className="mt-3 text-base text-[#5c6b73] italic">
              Thinking about starting a food business? Find out before you commit.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Fact label="Format" value="Online" />
              <Fact label="Dates" value="TBD" />
              <Fact label="Fee" value="Php 25,000" />
            </div>
            <p className="mt-4 text-base text-[#5c6b73]">
              You leave with a clear go or not-yet decision, a shortlist of tested concepts, and a 90-day starter plan.
            </p>
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <Link
                href="/programs/masterclass"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#225475] px-5 text-sm font-semibold text-[#225475] hover:bg-[#E7F5F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#225475]"
              >
                Explore the Masterclass
              </Link>
              <ProgramButton>Reserve a Masterclass slot</ProgramButton>
            </div>
          </article>

          <article className="flex flex-col rounded-2xl border border-black/10 bg-[#f4f7f8] p-5">
            <p className="text-sm tracking-[0.14em] text-[#225475] uppercase">Cohort 1: January to June 2027</p>
            <h3 className="mt-2 font-poppins text-2xl leading-snug font-semibold">Food Venture Accelerator Program</h3>
            <p className="mt-3 text-base text-[#5c6b73] italic">
              A six-month program for founders who want to take a food venture from idea to growth
            </p>
            <p className="mt-3 text-base text-black">with Entrepreneur in Residence Jose Magsaysay Jr.</p>
            <p className="mt-2 text-base text-[#5c6b73]">6 Bootcamps, 4 Founder Clinic sessions, Pitch Day</p>
            <p className="mt-3 text-base text-black">
              Php 80,000 <span className="text-[#225475]">Tentative</span>
            </p>
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <Link
                href="/programs/accelerator"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#225475] px-5 text-sm font-semibold text-[#225475] hover:bg-[#E7F5F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#225475]"
              >
                Explore the Accelerator
              </Link>
              <ProgramButton>Apply for the Food Venture Accelerator Program (January Cohort)</ProgramButton>
            </div>
          </article>
        </div>
      </Section>

      <Section id="bundle" title="Take both and save Php 5,000">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white p-5">
            <p className="text-base text-black">
              Food Entrepreneurship Masterclass (Php 25,000) + Food Venture Accelerator Program (Php 80,000) = Php 105,000, offered at <strong>Php 100,000</strong>.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-5">
            <p className="text-base text-[#5c6b73]">
              Fundamentals of Culinary / Baking (Php 75,000) + Accelerator (Php 80,000) = Php 155,000, offered at <strong className="text-black">Php 140,000</strong>. Fundamentals is a CCA Manila course.
            </p>
          </div>
        </div>
      </Section>

      <Section id="bootcamps" title="CCA Connect Bootcamps" tone="white">
        <p className="max-w-[62ch] text-base text-[#5c6b73]">Individual CCA Connect Bootcamps are Php 15,000 each.</p>
        <Link
          href="/#programs"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#225475] px-5 text-sm font-semibold text-white hover:bg-[#1b445e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#225475]"
        >
          See CCA Connect Bootcamps
        </Link>
      </Section>

      <section className="bg-[#0a0a0a] font-jost text-white" aria-labelledby="apply-title">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-5 py-12 lg:px-6 lg:py-16">
          <h2 id="apply-title" className="font-poppins text-2xl leading-tight font-semibold tracking-tight lg:text-3xl">
            Apply for the January cohort
          </h2>
          <p className="text-base text-white/80">with Entrepreneur in Residence (Jose Magsaysay Jr.)</p>
          <div className="flex flex-wrap gap-3">
            <ProgramButton>Apply for the Food Venture Accelerator Program (January Cohort)</ProgramButton>
            <Link
              href="/JoinUs"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-5 text-center text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Reserve a Masterclass slot
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

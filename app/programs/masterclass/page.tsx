import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/landing/Footer";
import PageIntro from "@/app/components/PageIntro";
import { Fact, ProgramButton, Section } from "../components";

export const metadata: Metadata = {
  title: "Food Entrepreneurship Masterclass | CCA Connect Philippines",
  description: "Online masterclass for aspiring food entrepreneurs still deciding whether to start. Nine modules. Php 25,000.",
};

const outcomes = ["A clear go or not-yet decision", "A shortlist of tested concepts", "A 90-day starter plan"];

const modules = [
  {
    module: "1. Is food entrepreneurship right for you?",
    focus: "Time, capital, risk appetite, and the realities of running a food business",
    leave: "A personal readiness check",
  },
  {
    module: "2. Spot the opportunity",
    focus: "Finding an unmet need, defining your customer, and mapping what already exists",
    leave: "A short list of concepts to test",
  },
  {
    module: "3. Test before you commit",
    focus: "Low-cost validation through tastings, pre-orders, pop-ups, and customer conversations; Food Handling",
    leave: "Evidence on whether people will buy",
  },
  {
    module: "4. Pick a format",
    focus: "Cloud kitchen, kiosk, fast-casual, and full service, compared on cost, staffing, and location needs",
    leave: "A preferred format and the reasons for it",
  },
  {
    module: "5. Run the first numbers",
    focus: "Pricing your product; cost per plate, prime cost, break-even, and a rough startup budget",
    leave: "A simple first financial model",
  },
  {
    module: "6. Customers",
    focus: "Different target market opportunities; how to choose the right one",
    leave: "Target Market Definition",
  },
  {
    module: "7. Team",
    focus: "Deciding what kind of team you need; can you find the right talent?",
    leave: "Staffing plan",
  },
  {
    module: "8. Planning the Financial Aspect",
    focus: "How much money would you need to set up?",
    leave: "CapEx",
  },
  {
    module: "9. Decide and plan",
    focus: "The go or not-yet decision, a 90-day plan, and the next step",
    leave: "A decision and a plan",
  },
];

export default function MasterclassPage() {
  return (
    <div className="min-h-screen bg-[#f4f7f8] text-black">
      <PageIntro
        eyebrow="Programs"
        title="Food Entrepreneurship Masterclass"
        text="Thinking about starting a food business? Find out before you commit."
      />
      <section className="bg-[#f4f7f8] font-jost">
        <div className="mx-auto w-full max-w-[1280px] px-5 pb-12 lg:px-6">
          <div className="grid gap-3 sm:grid-cols-3">
            <Fact label="Format" value="Online" />
            <Fact label="Dates" value="TBD" />
            <Fact label="Fee" value="Php 25,000" />
          </div>
          <div className="mt-6">
            <ProgramButton>Reserve a Masterclass slot</ProgramButton>
          </div>
        </div>
      </section>

      <Section id="who" title="Who it's for" tone="white">
        <p className="max-w-[62ch] text-base text-[#5c6b73]">
          Aspiring food entrepreneurs who have no business yet, or who are still deciding whether to start one.
        </p>
      </Section>

      <Section id="leave" title="What you leave with">
        <ul className="grid gap-3 lg:grid-cols-3">
          {outcomes.map((item) => (
            <li key={item} className="rounded-2xl border border-black/10 bg-white p-5 text-base text-black">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="modules" title="Modules" tone="white">
        <div className="overflow-hidden rounded-2xl border border-black/10">
          <div className="hidden grid-cols-[1.1fr_1.4fr_0.9fr] gap-4 bg-[#E7F5F5] px-5 py-3 text-sm font-semibold tracking-[0.08em] text-[#225475] uppercase lg:grid">
            <p>Module</p>
            <p>Focus</p>
            <p>You leave with</p>
          </div>
          <div className="divide-y divide-black/10 bg-white">
            {modules.map((item) => (
              <div key={item.module} className="grid gap-2 px-5 py-4 lg:grid-cols-[1.1fr_1.4fr_0.9fr] lg:gap-4">
                <h3 className="font-semibold text-black">{item.module}</h3>
                <p className="text-base text-[#5c6b73]">
                  <span className="font-semibold text-[#225475] lg:hidden">Focus: </span>
                  {item.focus}
                </p>
                <p className="text-base text-black">
                  <span className="font-semibold text-[#225475] lg:hidden">You leave with: </span>
                  {item.leave}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="next" title="Decided to go?">
        <p className="max-w-[62ch] text-base text-[#5c6b73]">Continue to the Food Venture Accelerator.</p>
        <p className="mt-3 max-w-[62ch] text-base text-black">
          Take both and save Php 5,000. Masterclass + Accelerator at Php 100,000.
        </p>
        <Link
          href="/programs/accelerator"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-[#225475] px-5 text-sm font-semibold text-[#225475] hover:bg-[#E7F5F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#225475]"
        >
          Food Venture Accelerator
        </Link>
      </Section>

      <Section id="faculty" title="Faculty" tone="white">
        <p className="text-base text-black">TBD</p>
      </Section>

      <section className="bg-[#0a0a0a] font-jost text-white" aria-labelledby="reserve-title">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-5 py-12 lg:px-6 lg:py-16">
          <h2 id="reserve-title" className="font-poppins text-2xl leading-tight font-semibold tracking-tight lg:text-3xl">
            Reserve a Masterclass slot
          </h2>
          <div>
            <ProgramButton>Reserve a Masterclass slot</ProgramButton>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

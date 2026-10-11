import Link from "next/link";

const steps = [
  {
    title: "Share us your vision",
    description: "Tell us about your project goals, unique challenges, and specific requirements. The more we know, the better we can serve you.",
  },
  {
    title: "Meet your perfect match",
    description: "We carefully pair you with a vetted Food, Beverage, or Hospitality expert whose experience aligns perfectly with your needs.",
  },
  {
    title: "Collaborate & create",
    description: "Partner directly with your expert to craft a customized project plan and proposal that brings your vision to life.",
  },
  {
    title: "We'll handle the rest",
    description: "From screening and contracts to payments and project management—we take care of everything behind the scenes.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f4f7f8] font-jost">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:py-20">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-[#225475] uppercase">How it works</p>
        <h2 className="mt-3 font-poppins text-3xl leading-tight font-semibold tracking-tight text-black sm:text-4xl">
          How does it work?
        </h2>
        <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-[#5c6b73] sm:text-lg">
          Your gateway to the Philippines&apos; top Food, Beverage, and Hospitality experts—streamlined for success.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-black/10 bg-white p-6">
              <span className="font-poppins text-sm font-semibold text-[#225475]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-poppins text-xl font-semibold text-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5c6b73]">{step.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-[#5c6b73]">Simple, transparent, and human-first.</p>
        <Link href="/JoinUs" className="mt-5 inline-flex rounded-full bg-[#225475] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1b445e]">
          Start a project
        </Link>
      </div>
    </section>
  );
}

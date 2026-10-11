import Link from "next/link";

const practices = [
  {
    num: "01",
    title: "Kitchen & Bakeshop Operations Systems",
    text: "Set up the workflows, stations, and controls that keep a kitchen running when you're not in it.",
    href: "/training",
  },
  {
    num: "02",
    title: "Standardizing Recipes",
    text: "Lock in consistency and cost control with recipes that hold up across every service and every cook.",
    href: "/experts/fuentanilla-lorino-mendoza",
  },
  {
    num: "03",
    title: "Menu Development",
    text: "Design menus that are profitable to produce, easy to execute, and true to your concept.",
    href: "/experts/fuentanilla-lorino-mendoza",
  },
  {
    num: "04",
    title: "Food & Service Training",
    text: "Bring your kitchen and floor teams up to a standard your guests feel every visit.",
    href: "/training",
  },
  {
    num: "05",
    title: "Culinary Sales Training",
    text: "Turn your team into confident sellers — upselling, storytelling, and driving average spend.",
    href: "/training",
  },
];

export default function Practice() {
  return (
    <section id="practice" className="bg-[#f4f7f8] font-jost">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:py-20">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-[#225475] uppercase">Our core practice</p>
        <h2 className="mt-3 max-w-[18ch] font-poppins text-3xl leading-tight font-semibold tracking-tight text-black sm:text-4xl">
          Where CCA Manila&apos;s expertise runs deepest.
        </h2>
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-[#5c6b73] sm:text-lg">
          These are the disciplines we build most of our bootcamps and consultancy around — the operational foundations every food business needs to get right.
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practices.map((item) => (
            <Link
              key={item.num}
              href={item.href}
              className="rounded-2xl border border-black/10 bg-white p-6 transition-transform hover:-translate-y-0.5 hover:border-[#225475]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E7F5F5] font-poppins text-sm font-semibold text-[#225475]">
                {item.num}
              </span>
              <h3 className="mt-4 font-poppins text-lg font-semibold text-black">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5c6b73]">{item.text}</p>
              <p className="mt-4 text-sm font-semibold text-[#225475]">Learn more →</p>
            </Link>
          ))}

          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-black/15 bg-[#E7F5F5] p-6">
            <h3 className="font-poppins text-lg font-semibold text-black">Need something specific?</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5c6b73]">
              Our expert network covers beverage, PR, service design, and talent, too.
            </p>
            <Link href="/JoinUs" className="mt-4 text-sm font-semibold text-[#225475] hover:underline">
              Talk to us →
            </Link>
          </div>
        </div>

        <p className="mt-6 text-[15px] text-[#5c6b73]">
          Every engagement is delivered by CCA experts and vetted specialists.{" "}
          <Link href="/JoinUs" className="font-semibold text-[#225475] hover:underline">
            Start a conversation →
          </Link>
        </p>
      </div>
    </section>
  );
}

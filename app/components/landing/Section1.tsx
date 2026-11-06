const connections = [
  {
    num: "01",
    word: "knowledge",
    text: "Bootcamps, workshops, and training that teach what running a food business actually takes.",
  },
  {
    num: "02",
    word: "experts",
    text: "Chefs, operators, designers, and specialists that shape the Food and Hospitality industries.",
  },
  {
    num: "03",
    word: "community",
    text: "A growing network of owners and teams who learn, share, and grow alongside each other.",
  },
  {
    num: "04",
    word: "industry",
    text: "Partnerships that link food businesses with the brands and suppliers that serve them.",
  },
];

export default function Section1() {
  return (
    <section className="border-y border-black/10 bg-[#E7F5F5] font-jost">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-10 lg:px-6 lg:py-16">
        <p className="max-w-[28ch] font-poppins text-xl leading-snug font-semibold text-black lg:text-[1.7rem]">
          The name is the model. We <em className="phrase text-[#225475]">connect</em> the food industry — four ways.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {connections.map((item) => (
            <div key={item.num} className="rounded-2xl border border-[#225475]/20 bg-white p-5 shadow-[0_12px_32px_rgba(34,84,117,0.1)]">
              <h2 className="font-poppins text-xl leading-snug font-semibold text-black lg:text-2xl">
                <span className="mr-2 inline-flex rounded-full bg-[#225475] px-2.5 py-1 align-middle text-xs font-bold tracking-wide text-white">{item.num}</span>
                To <em className="phrase">{item.word}</em>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#5c6b73]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

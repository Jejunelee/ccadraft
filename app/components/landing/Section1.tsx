const connections = [
  {
    num: "01",
    title: "To knowledge",
    text: "Bootcamps, workshops, and training that teach what running a food business actually takes.",
  },
  {
    num: "02",
    title: "To experts",
    text: "Working chefs, operators, and specialists — not career lecturers.",
  },
  {
    num: "03",
    title: "To community",
    text: "A growing network of owners and teams who learn, share, and grow alongside each other.",
  },
  {
    num: "04",
    title: "To industry",
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
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {connections.map((item) => (
            <div key={item.num}>
              <h2 className="flex items-baseline gap-2 font-poppins text-base font-semibold text-black">
                <span className="text-xs font-bold text-[#225475]">{item.num}</span>
                {item.title}
              </h2>
              <p className="mt-2 text-lg leading-relaxed text-[#5c6b73]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

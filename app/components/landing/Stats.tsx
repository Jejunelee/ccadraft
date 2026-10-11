const stats = [
  { value: "60%", label: "of guest complaints are people-related, not product-related" },
  { value: "70%", label: "of hospitality employees report emotional exhaustion weekly" },
  { value: "1 in 3", label: "of frontliners feel recognized for great service" },
  { value: "BGC", label: "Professional teaching kitchens and classrooms at CCA Manila" },
];

export default function Stats() {
  return (
    <section id="cca" className="bg-[#0a0a0a] font-jost text-white">
      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-[12px] font-semibold tracking-[0.14em] text-[#AFCFE4] uppercase">Backed by CCA Manila</p>
          <h2 className="mt-3 font-poppins text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            The teaching authority of the country&apos;s leading culinary school.
          </h2>
          <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-white/65 sm:text-lg">
            We&apos;re the industry-engagement arm of CCA Manila. Every bootcamp, workshop, and consultancy is grounded in the same standards that have trained the Philippines&apos; chefs and food entrepreneurs — not a workshop run on the side.
          </p>
        </div>

        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="border border-white/10 bg-[#0a0a0a] p-6">
              <p className="font-poppins text-3xl font-semibold text-[#AFCFE4] sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-[13px] leading-snug text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

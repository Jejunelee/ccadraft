import Image from "next/image";

const practices = [
  "Recipe development and kitchen training",
  "Restaurant manager training and SOP manuals",
  "Food technology",
  "Service training",
];

export default function Section1() {
  return (
    <section className="bg-white font-jost">
      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-[12px] font-semibold tracking-[0.14em] text-[#225475] uppercase">What we do</p>
          <h2 className="mt-3 font-poppins text-3xl leading-tight font-semibold tracking-tight text-black sm:text-4xl">
            What we actually do
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-[#5c6b73] sm:text-lg">
            <p>
              CCA Connect is the industry engagement arm of CCA Manila, created to strengthen the link between education, expertise, and real-world hospitality practice.
            </p>
            <p>We plan events, training, and consultancies.</p>
          </div>
          <ul className="mt-6 flex flex-col gap-2.5">
            {practices.map((item) => (
              <li key={item} className="relative pl-5 text-[15px] text-black">
                <span className="absolute top-2 left-0 h-1.5 w-1.5 rounded-full bg-[#225475]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[320px] overflow-hidden rounded-2xl sm:h-[420px]">
          <Image src="/about/section1/1-1.png" alt="CCA Connect discussion" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
        </div>
      </div>
    </section>
  );
}

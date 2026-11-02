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
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-8 px-5 py-12 lg:grid-cols-2 lg:gap-10 lg:px-6 lg:py-20">
        <div>
          <p className="kicker text-[#225475] uppercase">What we do</p>
          <h2 className="mt-3 font-poppins text-[1.75rem] leading-tight font-semibold tracking-tight text-black lg:text-4xl">
            What we <em className="phrase">actually</em> do
          </h2>
          <div className="mt-5 space-y-4 descriptor text-[#5c6b73]">
            <p>
              CCA Connect is the industry engagement arm of CCA Manila, created to strengthen the link between education, expertise, and real-world hospitality practice.
            </p>
            <p>We plan events, training, and consultancies.</p>
          </div>
          <ul className="mt-6 flex flex-col gap-2.5">
            {practices.map((item) => (
              <li key={item} className="relative pl-5 text-base text-black">
                <span className="absolute top-2 left-0 h-1.5 w-1.5 rounded-full bg-[#225475]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image src="/about/section1/1-1.png" alt="CCA Connect discussion" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 50vw" priority />
        </div>
      </div>
    </section>
  );
}

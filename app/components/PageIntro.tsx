export default function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="border-b border-black/10 bg-[#f4f7f8] font-jost">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-14 sm:py-16">
        {eyebrow ? (
          <p className="text-[12px] font-semibold tracking-[0.14em] text-[#225475] uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-[18ch] font-poppins text-4xl leading-[1.05] font-semibold tracking-tight text-black sm:text-5xl">
          {title}
        </h1>
        {text ? <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-[#5c6b73] sm:text-lg">{text}</p> : null}
      </div>
    </section>
  );
}

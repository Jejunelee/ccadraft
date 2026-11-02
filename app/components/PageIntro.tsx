export default function PageIntro({
  eyebrow,
  title,
  text,
  emphasis,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  emphasis?: string;
}) {
  const mark = emphasis && title.includes(emphasis) ? title.indexOf(emphasis) : -1;

  return (
    <section className="border-b border-black/10 bg-[#f4f7f8] font-jost">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-10 lg:px-6 lg:py-16">
        {eyebrow ? (
          <p className="kicker text-[#225475] uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-[18ch] font-poppins text-3xl leading-[1.05] font-semibold tracking-tight text-black lg:text-5xl">
          {mark === -1 ? (
            title
          ) : (
            <>
              {title.slice(0, mark)}
              <em className="phrase">{emphasis}</em>
              {title.slice(mark + (emphasis?.length ?? 0))}
            </>
          )}
        </h1>
        {text ? <p className="mt-4 max-w-[54ch] descriptor text-[#5c6b73]">{text}</p> : null}
      </div>
    </section>
  );
}

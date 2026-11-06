import Link from "next/link";

export function ProgramButton({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/JoinUs"
      className="inline-flex min-h-12 max-w-full items-center justify-center rounded-full bg-[#225475] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#1b445e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#225475]"
    >
      {children}
    </Link>
  );
}

export function Section({
  id,
  title,
  children,
  tone = "plain",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  tone?: "plain" | "white" | "band";
}) {
  const background = tone === "white" ? "bg-white" : tone === "band" ? "bg-[#0a0a0a] text-white" : "bg-[#f4f7f8]";
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`${background} font-jost`}>
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 lg:px-6 lg:py-16">
        <h2 id={`${id}-title`} className="font-poppins text-2xl leading-tight font-semibold tracking-tight lg:text-3xl">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

export function Fact({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white px-4 py-3">
      <p className="text-xs tracking-[0.14em] text-[#225475] uppercase">{label}</p>
      <p className="mt-1 text-base text-black">{value}</p>
    </div>
  );
}

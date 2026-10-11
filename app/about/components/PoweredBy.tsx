import Image from "next/image";

export default function PoweredBy() {
  return (
    <section className="border-y border-black/10 bg-[#E7F5F5] font-jost">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-start gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-[#225475] uppercase">Powered by</p>
        <Image src="/about/poweredby/1.png" alt="Xavier & Associates" width={280} height={66} className="h-14 w-auto object-contain" />
      </div>
    </section>
  );
}

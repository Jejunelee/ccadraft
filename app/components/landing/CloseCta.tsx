import Link from "next/link";

export default function CloseCta() {
  return (
    <section id="contact" className="bg-[#AFCFE4] font-jost text-black">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 text-center lg:px-6 lg:py-20">
        <h2 className="font-poppins text-[1.85rem] leading-tight font-semibold tracking-tight lg:text-5xl">
          Let&apos;s grow the food industry <em className="phrase">together.</em>
        </h2>
        <p className="mx-auto mt-4 max-w-[46ch] descriptor text-black/75">
          Join an upcoming bootcamp, bring us in for a project, or partner your brand with our community.
        </p>
        <div className="mt-7 flex flex-col items-stretch justify-center gap-3 lg:flex-row lg:flex-wrap lg:items-center">
          <a
            href="#coming-up"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-[#f4f7f8] lg:min-h-0"
          >
            See upcoming bootcamps
          </a>
          <Link
            href="/JoinUs"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/30 px-5 py-3 text-sm font-semibold text-black hover:border-black lg:min-h-0"
          >
            Partner with us
          </Link>
        </div>
      </div>
    </section>
  );
}

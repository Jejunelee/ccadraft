import Link from "next/link";

export default function CloseCta() {
  return (
    <section id="contact" className="bg-[#AFCFE4] font-jost text-black">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 text-center sm:py-20">
        <h2 className="font-poppins text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Let&apos;s grow the food industry together.
        </h2>
        <p className="mx-auto mt-4 max-w-[46ch] text-base leading-relaxed text-black/75 sm:text-lg">
          Join an upcoming bootcamp, bring us in for a project, or partner your brand with our community.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://events.ccaconnect.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-[#f4f7f8]"
          >
            See upcoming bootcamps
          </a>
          <Link
            href="/JoinUs"
            className="inline-flex rounded-full border border-black/30 px-5 py-3 text-sm font-semibold text-black hover:border-black"
          >
            Partner with us
          </Link>
        </div>
      </div>
    </section>
  );
}

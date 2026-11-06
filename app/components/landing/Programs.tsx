"use client";

import Image from "next/image";
import { useState } from "react";
import { programs, type Program } from "@/app/data/programs";

const PAGE_SIZE = 3;
const EVENTS_URL = "https://events.ccaconnect.co";

function pageList(current: number, total: number) {
  if (total <= 5) return Array.from({ length: total }, (_, index) => index);

  const start = Math.max(0, Math.min(current - 2, total - 5));
  return Array.from({ length: 5 }, (_, index) => start + index);
}

function ProgramCard({ program }: { program: Program }) {
  const card = (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_1px_2px_rgba(10,10,10,0.04)]">
      <div className="relative aspect-[2/1] w-full bg-[#E7F5F5]">
        {program.image ? (
          <Image
            src={program.image}
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 360px"
          />
        ) : (
          <div className="h-full bg-[#0a0a0a]" />
        )}
        {program.past ? (
          <span className="absolute top-3 left-3 rounded-full bg-[#AFCFE4] px-3 py-1 text-xs tracking-[0.14em] text-[#0a0a0a] uppercase">
            Past event
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm tracking-[0.14em] text-[#225475] uppercase">{program.kind}</p>
        <h3 className="mt-2 font-poppins text-[1.35rem] leading-snug text-black">{program.title}</h3>
        <p className="mt-3 text-base leading-snug text-[#5c6b73]">
          {program.when}
          {program.where ? (
            <>
              <span className="mx-2 text-[#225475]/40" aria-hidden="true">
                ·
              </span>
              {program.where}
            </>
          ) : null}
        </p>
        <p className="mt-2 text-base leading-snug text-[#5c6b73]">{program.with}</p>
        {program.detail ? <p className="mt-3 text-base text-black">{program.detail}</p> : null}
        <div className="mt-auto pt-5">
          <a
            href={program.href ?? EVENTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#225475] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#1b445e]"
          >
            {program.href && !program.past ? "Save Your Spot" : "Learn More"}
          </a>
        </div>
      </div>
    </article>
  );

  return card;
}

export default function Programs() {
  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(programs.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const start = safePage * PAGE_SIZE;
  const visible = programs.slice(start, start + PAGE_SIZE);
  const pages = pageList(safePage, pageCount);
  const from = programs.length === 0 ? 0 : start + 1;
  const to = start + visible.length;

  const go = (next: number) => {
    setPage(Math.max(0, Math.min(pageCount - 1, next)));
  };

  return (
    <section id="programs" className="scroll-mt-20 bg-[#f4f7f8] font-jost" aria-labelledby="programs-heading">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 lg:px-6 lg:py-20">
        <p className="kicker text-[#225475]">Bootcamps, events &amp; summits</p>
        <h2 id="programs-heading" className="mt-3 font-poppins text-[clamp(1.45rem,2.6vw,2.25rem)] leading-tight font-semibold tracking-tight whitespace-nowrap text-black">
          The rooms you can <em className="phrase">join.</em>
        </h2>
        <p className="descriptor mt-4 max-w-[54ch] text-[#5c6b73]">
          Join us in our upcoming events.
        </p>

        <div className="page-rise mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3 lg:gap-5" key={safePage}>
          {visible.map((program) => (
            <ProgramCard key={`${program.title}-${program.image}`} program={program} />
          ))}
        </div>

        <nav className="mt-8 flex flex-col items-center gap-3" aria-label="Program pages">
          <p className="text-base text-[#5c6b73]" aria-live="polite">
            Showing {from}–{to} of {programs.length}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => go(safePage - 1)}
              disabled={safePage === 0}
              aria-label="Previous programs"
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 bg-white px-4 text-base font-semibold text-black transition-colors hover:border-[#225475] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>
            {pages[0] > 0 ? (
              <>
                <PageButton page={0} current={safePage} onSelect={go} />
                {pages[0] > 1 ? <span className="px-1 text-base text-[#5c6b73]" aria-hidden="true">…</span> : null}
              </>
            ) : null}
            {pages.map((index) => (
              <PageButton key={index} page={index} current={safePage} onSelect={go} />
            ))}
            {pages[pages.length - 1] < pageCount - 1 ? (
              <>
                {pages[pages.length - 1] < pageCount - 2 ? <span className="px-1 text-base text-[#5c6b73]" aria-hidden="true">…</span> : null}
                <PageButton page={pageCount - 1} current={safePage} onSelect={go} />
              </>
            ) : null}
            <button
              type="button"
              onClick={() => go(safePage + 1)}
              disabled={safePage >= pageCount - 1}
              aria-label="Next programs"
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 bg-white px-4 text-base font-semibold text-black transition-colors hover:border-[#225475] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
}

function PageButton({ page, current, onSelect }: { page: number; current: number; onSelect: (page: number) => void }) {
  const selected = page === current;
  return (
    <button
      type="button"
      onClick={() => onSelect(page)}
      aria-label={`Page ${page + 1}`}
      aria-current={selected ? "page" : undefined}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-base font-semibold transition-colors ${
        selected ? "bg-[#225475] text-white" : "border border-black/10 bg-white text-black hover:border-[#225475]"
      }`}
    >
      {page + 1}
    </button>
  );
}

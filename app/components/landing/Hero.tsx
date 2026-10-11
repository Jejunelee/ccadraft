"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Announcement from "@/app/components/landing/Announcement";

const bootcamps = [
  {
    title: "Beyond the Plate: The Profit Bootcamp",
    by: "Food-business finance, with Pinky Velez Poe",
    rows: [
      ["Format", "Full-day, hands-on"],
      ["Venue", "CCA Manila, BGC"],
      ["Next run", "New cohort forming"],
      ["Includes", "Meals, snacks & certificate"],
    ],
    price: "₱12,000",
    note: "per participant · limited seats",
    cta: "Join the waitlist",
  },
  {
    title: "Menu Development & Costing",
    by: "Build profitable, executable menus",
    rows: [
      ["Format", "Two half-days"],
      ["Venue", "CCA Manila, BGC"],
      ["Next run", "New cohort forming"],
      ["Includes", "Templates & certificate"],
    ],
    price: "Pricing on request",
    note: "early-bird rates available",
    cta: "Register interest",
  },
  {
    title: "Kitchen & Bakeshop Operations",
    by: "Systems that run without you",
    rows: [
      ["Format", "Full-day, hands-on"],
      ["Venue", "CCA Manila, BGC"],
      ["Next run", "New cohort forming"],
      ["Includes", "SOP toolkit & certificate"],
    ],
    price: "Pricing on request",
    note: "early-bird rates available",
    cta: "Register interest",
  },
  {
    title: "Culinary Sales Training",
    by: "Turn your team into confident sellers",
    rows: [
      ["Format", "Half-day"],
      ["Venue", "CCA Manila, BGC"],
      ["Next run", "New cohort forming"],
      ["Includes", "Workbook & certificate"],
    ],
    price: "Pricing on request",
    note: "team rates available",
    cta: "Register interest",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (next: number) => {
    setIndex((next + bootcamps.length) % bootcamps.length);
  };

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % bootcamps.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, index]);

  const slide = bootcamps[index];

  return (
    <section id="bootcamps" className="flex min-h-[calc(100dvh-66px)] flex-col bg-[#f4f7f8] font-jost">
      <Announcement />
      <div className="mx-auto grid w-full max-w-[1120px] flex-1 items-center gap-10 px-6 py-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-12 lg:py-8">
        <div>
          <span className="inline-flex rounded-full bg-[#AFCFE4]/50 px-3.5 py-1.5 font-poppins text-[13px] font-semibold text-[#225475]">
            Learn · <span className="mx-1 text-black">Connect</span> · Grow
          </span>
          <h1 className="mt-5 font-poppins text-[2.75rem] leading-[0.98] font-semibold tracking-tight text-black sm:text-6xl lg:text-[4.1rem]">
            Build a food business that lasts.
          </h1>
          <p className="mt-5 max-w-[36ch] text-lg leading-relaxed text-[#5c6b73]">
            CCA Manila&apos;s Center for Food Entrepreneurship — connecting food businesses to the knowledge, experts, and industry that help them grow.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://events.ccaconnect.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-[#225475] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1b445e]"
            >
              See upcoming bootcamps
            </a>
            <a
              href="#work"
              className="inline-flex rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:border-black/40"
            >
              How we work with you
            </a>
          </div>
        </div>

        <aside
          className="flex w-full flex-col justify-self-stretch rounded-[22px] bg-[#0a0a0a] p-6 text-white shadow-[0_8px_24px_rgba(10,10,10,0.12)] sm:p-8"
          aria-roledescription="carousel"
          aria-label="Upcoming bootcamps"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-[#AFCFE4] uppercase">
              Upcoming bootcamps
            </span>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => go(index - 1)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white hover:border-[#AFCFE4] hover:text-[#AFCFE4]"
                aria-label="Previous bootcamp"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white hover:border-[#AFCFE4] hover:text-[#AFCFE4]"
                aria-label="Next bootcamp"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col">
            <h2 className="h-[2.8em] font-poppins text-xl leading-snug font-semibold text-white">{slide.title}</h2>
            <p className="mt-1.5 min-h-[2.5rem] text-sm leading-snug text-white/60">{slide.by}</p>
            <div className="mt-4 flex min-h-[9.25rem] flex-col gap-2.5 border-t border-white/10 pt-4 text-sm">
              {slide.rows.map(([label, value]) => (
                <div key={label} className="flex gap-3">
                  <span className="w-[74px] shrink-0 text-white/50">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 min-h-[3.25rem] font-poppins text-2xl leading-none font-semibold text-white">
              {slide.price}
              <span className="mt-1.5 block font-jost text-xs leading-snug font-normal text-white/50">{slide.note}</span>
            </p>
            <a
              href="https://events.ccaconnect.co"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex h-10 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-black transition-colors hover:bg-[#f4f7f8]"
            >
              {slide.cta}
            </a>
          </div>

          <div className="mt-4 flex justify-center gap-1.5" role="tablist" aria-label="Choose a bootcamp">
            {bootcamps.map((bootcamp, dotIndex) => (
              <button
                key={bootcamp.title}
                type="button"
                role="tab"
                aria-label={`Show bootcamp ${dotIndex + 1}`}
                aria-current={dotIndex === index ? "true" : undefined}
                onClick={() => go(dotIndex)}
                className={`h-1.5 rounded-full transition-all ${
                  dotIndex === index ? "w-5 bg-[#AFCFE4]" : "w-1.5 bg-white/25"
                }`}
              />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

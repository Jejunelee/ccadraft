"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Announcement from "@/app/components/landing/Announcement";

const bootcamps = [
  {
    title: "Spirit & Service: An Immersion in Bartending",
    by: "Arcadius Rybak of Toma Toma",
    image: "/landing/arcadius.png",
    initials: "AR",
    rows: [
      ["Format", "Training"],
      ["When", "Nov 9–12, 2026"],
      ["Hours", "11AM–3PM"],
      ["Venue", "CCA BGC, Taguig"],
    ],
    price: "Nov 9–12, 2026",
    note: "11AM–3PM",
    cta: "Save Your Spot",
    href: "https://www.eventbrite.com/e/spirit-service-an-immersion-in-bartending-with-arcadius-rybak-4-days-tickets-2002182967152",
  },
  {
    title: "The New Breed of Filipino Hospitality",
    by: "Isabel Lozano of Decorum by MIL",
    image: "/experts/team/lozano.png",
    initials: "IL",
    rows: [
      ["Format", "Guest experience"],
      ["When", "Oct 28, Nov 4, 11 & 18, 2026"],
      ["Hours", "9AM–4PM"],
      ["Venue", "CCA BGC"],
    ],
    price: "Oct 28, Nov 4, 11 & 18, 2026",
    note: "9AM–4PM",
    cta: "Save Your Spot",
    href: "https://www.eventbrite.com/e/the-new-breed-of-filipino-hospitality-guest-experience-bootcamp-4-days-tickets-2000256457911",
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
    <section id="bootcamps" className="flex flex-col bg-[#f4f7f8] font-jost lg:min-h-[calc(100dvh-66px)]">
      <Announcement />
      <div className="mx-auto grid w-full max-w-[1280px] flex-1 items-center gap-8 px-5 py-8 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)] lg:gap-14 lg:px-6 lg:py-8">
        <div className="arrive">
          <span className="inline-flex rounded-full bg-[#AFCFE4]/50 px-3.5 py-1.5 font-poppins text-base font-semibold text-[#225475]">
            Learn · <em className="phrase mx-1 text-[#225475]">Connect</em> · Grow
          </span>
          <h1 className="mt-5 font-poppins text-[2.35rem] leading-[1.02] font-semibold tracking-tight text-black lg:text-[4.1rem] lg:leading-[0.98]">
            Build a food business that <em className="phrase">lasts.</em>
          </h1>
          <p className="descriptor mt-4 max-w-[48ch] text-[#5c6b73] lg:mt-5">
            CCA Manila&apos;s Center for Food Entrepreneurship — connecting food businesses to the knowledge, experts, and industry that help them grow.
          </p>
          <div className="mt-6 flex flex-col gap-3 lg:mt-7 lg:flex-row lg:flex-wrap">
            <a
              href="https://events.ccaconnect.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#225475] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1b445e] lg:min-h-0 lg:justify-start"
            >
              See upcoming bootcamps
            </a>
            <a
              href="#work"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:border-black/40 lg:min-h-0 lg:justify-start"
            >
              How we work with you
            </a>
          </div>
        </div>

        <aside
          className="arrive arrive-late flex w-full flex-col justify-self-end rounded-[22px] bg-[#0a0a0a] p-5 text-white shadow-[0_8px_24px_rgba(10,10,10,0.12)] lg:max-w-[440px] lg:p-7"
          aria-roledescription="carousel"
          aria-label="Coming up"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="kicker rounded-full border border-white/15 px-3 py-1 text-[#AFCFE4]">
              Coming up
            </span>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => go(index - 1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white hover:border-[#AFCFE4] hover:text-[#AFCFE4] lg:h-8 lg:w-8"
                aria-label="Previous bootcamp"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white hover:border-[#AFCFE4] hover:text-[#AFCFE4] lg:h-8 lg:w-8"
                aria-label="Next bootcamp"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div key={index} className="slide-in mt-4 flex flex-col">
            <div className="flex items-start gap-3">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#AFCFE4] text-[#0a0a0a]">
                {slide.image ? (
                  <Image src={slide.image} alt="" fill className="object-cover object-[center_18%]" sizes="56px" />
                ) : (
                  <span className="flex h-full items-center justify-center font-poppins text-sm font-semibold">{slide.initials}</span>
                )}
              </div>
              <div className="min-w-0">
                <h2 className="font-poppins text-xl leading-snug text-white lg:h-[4.2em]">{slide.title}</h2>
                <p className="mt-1.5 text-sm leading-snug text-white/60 lg:min-h-[2.5rem]">{slide.by}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2.5 border-t border-white/10 pt-4 text-sm lg:min-h-[9.25rem]">
              {slide.rows.map(([label, value]) => (
                <div key={label} className="flex gap-3">
                  <span className="w-[74px] shrink-0 text-white/50">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 font-poppins text-2xl leading-none font-semibold text-white lg:min-h-[3.25rem]">
              {slide.price}
              <span className="mt-1.5 block font-jost text-sm leading-snug font-normal text-white/50">{slide.note}</span>
            </p>
            <a
              href={slide.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex h-12 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-black transition-colors hover:bg-[#f4f7f8] lg:h-10"
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
                className={`h-1.5 rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
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

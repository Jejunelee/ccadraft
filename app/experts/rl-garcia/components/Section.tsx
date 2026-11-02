// app/components/expert-profile-garcia.tsx
"use client";

import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export default function ExpertProfileGarcia() {
  return (
    <section className="w-full bg-[#f4f7f8] px-6 py-16 font-jost">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left Column - Image */}
        <div className="relative flex justify-center lg:justify-end order-1">
          <div className="relative w-full max-w-[420px] overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(10,10,10,0.12)]">
            <div className="relative aspect-[4/5] w-full bg-[#E7F5F5]">
              <Image
                src="/experts/team/garcia.png"
                alt="RL Garcia"
                fill
                className="object-contain object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
                priority
              />
            </div>

            {/* Social Icons */}
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <a 
                href="#" 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} color="white" className="sm:hidden" />
                <Facebook size={28} color="white" className="hidden sm:block" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} color="white" className="sm:hidden" />
                <Instagram size={28} color="white" className="hidden sm:block" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="max-w-2xl mx-auto lg:mx-0 order-2">
          <h2 className="font-poppins text-3xl font-semibold tracking-tight text-black mb-4 text-center lg:text-left lg:text-5xl">
            RL Garcia
          </h2>

          <p className="tracking-widest text-black mb-5 sm:mb-6 text-base sm:text-lg text-center lg:text-left">
            HR HEAD OF BRITTANY HOTELS
          </p>

          <div className="mb-6 h-1 w-16 bg-[#225475]"></div>

          <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-black/80 leading-relaxed">
            <p>
              RL Garcia is a strategic operations and management consultancy specializing 
              in helping businesses streamline processes, strengthen internal systems, 
              and build sustainable organizational growth. With deep expertise across 
              multiple industries, RL Garcia provides practical, data-informed solutions 
              that address both day-to-day operational challenges and long-term strategic needs.
            </p>

            <p>
              He supports organizations in optimizing workflows, improving team efficiency, 
              and establishing structures that drive consistent performance. Their approach 
              focuses on clarity, accountability, and operational excellence, ensuring that 
              every process contributes to a measurable business impact.
            </p>

            <p>
              From system audits and process redesign to capability building and implementation 
              support, RL Garcia helps organizations establish the strong operational foundations 
              needed to scale with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
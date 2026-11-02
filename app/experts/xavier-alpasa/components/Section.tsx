"use client";

import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export default function ExpertProfile() {
  // Responsive icon sizes using CSS
  const iconSize = "clamp(14px, 4vw, 18px)";
  
  return (
    <section className="w-full bg-[#f4f7f8] px-6 py-16 font-jost">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left Column - Image */}
        <div className="relative flex justify-center lg:justify-end order-1">
          <div className="relative w-full max-w-[420px] overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(10,10,10,0.12)]">
            <div className="relative aspect-[4/5] w-full bg-[#E7F5F5]">
              <Image
                src="/experts/team/alpasa.png"
                alt="Xavier Alpasa"
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
            Xavier Alpasa
          </h2>

          <p className="tracking-widest text-black mb-5 sm:mb-6 text-base sm:text-lg text-center lg:text-left">
            XAVIER ASSOCIATES
          </p>

          <div className="mb-6 h-1 w-16 bg-[#225475]"></div>

          <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-black/80 leading-relaxed">
            <p>
              Xavier & Associates (XAA) is an innovation-driven business
              consulting firm led by serial entrepreneur, formator, and TED
              Fellow Xavier Alpasa (Professor X). As one of our expert partners,
              XAA helps organizations create real, lasting transformation by
              guiding leaders in designing smarter processes and more strategic
              decisions.
            </p>

            <p>
              They specialize in three core areas: Discovering Purpose
              (strategy), Developing People (talent development), and Driving
              Profit (financial planning and management).
            </p>

            <p>
              Through their signature consulting method, Process X, XAA empowers
              clients to deeply understand their challenges and co-create
              transformative, customized solutions—never generic, off-the-shelf
              fixes. Their work spans across industries and organization sizes,
              from multinational corporations and homegrown businesses to
              nonprofits and social enterprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
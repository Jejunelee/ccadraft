"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const videos = [
  { src: "/landing/videos/hapag.mp4", alt: "Chef Nav & Chev Thirdy — Hapag" },
  { src: "/landing/videos/ryan.mp4", alt: "Ryan K. Cruz — Ramen Yushoken" },
  { src: "/landing/videos/isabel.mp4", alt: "Isabel Lozano — Decorum by MIL" },
];

const photos = [
  { src: "/landing/pevents/1.jpg", caption: "CCA Connect Bootcamp · Brittany Hotel" },
  { src: "/landing/pevents/2.jpeg", caption: "Family Succession · Brittany Hotel" },
  { src: "/landing/pevents/9.jpg", caption: "Summit · Brittany Hotel" },
  { src: "/landing/pevents/10.jpg", caption: "Tikim · Brittany Hotel" },
  { src: "/landing/pevents/6.jpg", caption: "CCA Connect Bootcamp" },
  { src: "/landing/pevents/12.jpg", caption: "Tikim" },
];

export default function MediaReel() {
  const [playing, setPlaying] = useState<number | null>(null);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  const toggle = async (index: number) => {
    const video = refs.current[index];
    if (!video) return;

    if (playing === index) {
      video.pause();
      setPlaying(null);
      return;
    }

    refs.current.forEach((item, itemIndex) => {
      if (item && itemIndex !== index) {
        item.pause();
        item.currentTime = 0;
      }
    });

    try {
      await video.play();
      setPlaying(index);
    } catch {
      setPlaying(null);
    }
  };

  return (
    <section id="in-the-room" className="bg-white font-jost">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:py-20">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-[#225475] uppercase">In the room</p>
        <h2 className="mt-3 max-w-[16ch] font-poppins text-3xl leading-tight font-semibold tracking-tight text-black sm:text-4xl">
          The work, the rooms, the people.
        </h2>
        <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-[#5c6b73] sm:text-lg">
          Bootcamps, summits, and conversations with the operators already building food businesses.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {videos.map((video, index) => (
            <figure key={video.src} className="overflow-hidden rounded-2xl bg-[#0a0a0a]">
              <button type="button" onClick={() => toggle(index)} className="relative block aspect-video w-full" aria-label={playing === index ? "Pause video" : "Play video"}>
                <video
                  ref={(element) => {
                    refs.current[index] = element;
                  }}
                  src={video.src}
                  className="h-full w-full object-cover"
                  playsInline
                  preload="metadata"
                  controls={playing === index}
                  onPause={() => setPlaying((current) => (current === index ? null : current))}
                />
                {playing !== index && (
                  <span className="absolute inset-0 m-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#225475]">
                    <svg className="ml-0.5 h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                )}
              </button>
              <figcaption className="px-4 py-3 text-sm text-white/80">{video.alt}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {photos.map((photo) => (
              <figure key={photo.src} className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image src={photo.src} alt={photo.caption} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 45vw, 18vw" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 pt-10 text-xs font-medium text-white">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <a
            href="https://www.events.ccaconnect.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-2xl border border-black/10 bg-[#E7F5F5]"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image src="/landing/events/1.png" alt="Hospitality Summit" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
            <div className="p-5">
              <p className="text-[12px] font-semibold tracking-[0.14em] text-[#225475] uppercase">Don&apos;t miss the next one</p>
              <h3 className="mt-2 font-poppins text-2xl font-semibold text-black">Hospitality Summit</h3>
              <p className="mt-1 text-sm text-[#5c6b73]">June 4, 2026</p>
              <p className="mt-4 text-sm font-semibold text-[#225475]">Learn more →</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

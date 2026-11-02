"use client";

import { useRef, useState } from "react";

const videos = [
  { src: "/landing/videos/hapag.mp4", alt: "Chef Nav & Chev Thirdy — Hapag" },
  { src: "/landing/videos/ryan.mp4", alt: "Ryan K. Cruz — Ramen Yushoken" },
  { src: "/landing/videos/isabel.mp4", alt: "Isabel Lozano — Decorum by MIL" },
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
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 lg:px-6 lg:py-20">
        <p className="kicker text-[#225475]">In the room</p>
        <h2 className="mt-3 max-w-[16ch] font-poppins text-[1.75rem] leading-tight font-semibold tracking-tight text-black lg:text-4xl">
          The work, the rooms, the <em className="phrase">people.</em>
        </h2>
        <p className="descriptor mt-4 max-w-[54ch] text-[#5c6b73]">
          From CCA Connect Bootcamp: Experience is the New Menu — Hapag, Ryan K. Cruz, and Isabel Lozano.
        </p>

        <div className="mobile-rail mt-8 -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0">
          {videos.map((video, index) => (
            <figure key={video.src} className="w-[78%] max-w-[320px] shrink-0 snap-center overflow-hidden rounded-2xl bg-[#0a0a0a] lg:w-auto lg:max-w-none lg:shrink">
              <button type="button" onClick={() => toggle(index)} className="relative block aspect-[3/4] w-full" aria-label={playing === index ? "Pause video" : "Play video"}>
                <video
                  ref={(element) => {
                    refs.current[index] = element;
                  }}
                  src={video.src}
                  className="h-full w-full object-cover object-[center_18%]"
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
              <figcaption className="px-4 py-3 text-base text-white/80">{video.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

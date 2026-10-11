"use client";

import { useState } from "react";
import { X } from "lucide-react";

const message = "Summit tickets are on sale. Get the early bird discount now.";
const linkText = "Get tickets";
const linkUrl = "https://www.events.ccaconnect.co";

const loop = Array.from({ length: 6 }, (_, index) => index);

export default function Announcement() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative flex h-9 items-center bg-[#225475] font-jost text-sm text-white" role="region" aria-label="Announcement">
      <div className="min-w-0 flex-1 overflow-hidden pr-8">
        <div className="ticker-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {loop.map((item) => {
                const primary = copy === 0 && item === 0;
                return (
                  <p key={item} className="flex items-center px-4 whitespace-nowrap" aria-hidden={primary ? undefined : true}>
                    <span>{message}</span>
                    <a
                      href={linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-3 font-semibold text-[#AFCFE4] underline-offset-2 hover:underline"
                      tabIndex={primary ? undefined : -1}
                    >
                      {linkText}
                    </a>
                    <span className="ml-4 h-1 w-1 rounded-full bg-white/50" aria-hidden="true" />
                  </p>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setVisible(false)}
        className="absolute top-0 right-0 flex h-9 w-10 items-center justify-center bg-[#225475] text-white hover:text-[#AFCFE4] focus-visible:outline-white"
        aria-label="Dismiss announcement"
      >
        <X size={14} />
      </button>
    </div>
  );
}

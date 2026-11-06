"use client";

import { useState } from "react";
import { X } from "lucide-react";

const messages = [
  "Apply for the Food Venture Accelerator Program (January Cohort)",
  "Apply for the Food Venture Accelerator Program with Entrepreneur in Residence (Jose Magsaysay Jr.)",
];
const linkText = "Apply";
const linkUrl = "/JoinUs";

const loop = Array.from({ length: 6 }, (_, index) => index);

export default function Announcement() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative flex h-11 items-center bg-[#AFCFE4] font-jost text-base text-[#0a0a0a]" role="region" aria-label="Announcement">
      <div className="min-w-0 flex-1 overflow-hidden pr-8">
        <div className="ticker-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {loop.map((item) => {
                const primary = copy === 0 && item === 0;
                return (
                  <p key={item} className="flex items-center px-4 whitespace-nowrap" aria-hidden={primary ? undefined : true}>
                    <span>{messages[item % messages.length]}</span>
                    <a
                      href={linkUrl}
                      className="ml-3 font-semibold text-[#225475] underline-offset-2 hover:underline"
                      tabIndex={primary ? undefined : -1}
                    >
                      {linkText}
                    </a>
                    <span className="ml-4 h-1 w-1 rounded-full bg-[#225475]/50" aria-hidden="true" />
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
        className="absolute top-0 right-0 flex h-11 w-11 items-center justify-center bg-[#AFCFE4] text-[#0a0a0a] hover:text-[#225475]"
        aria-label="Dismiss announcement"
      >
        <X size={14} />
      </button>
    </div>
  );
}

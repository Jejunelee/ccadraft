"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = [...document.querySelectorAll("main section")].slice(1);

    sections.forEach((section) => {
      section.classList.remove("hold", "released");
    });

    if (reduce) return;

    const waiting = sections.filter((section) => section.getBoundingClientRect().top > window.innerHeight * 0.9);
    waiting.forEach((section) => section.classList.add("hold"));

    const reveal = (section: Element) => {
      section.classList.add("released");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.12 },
    );

    waiting.forEach((section) => observer.observe(section));

    const failsafe = window.setTimeout(() => {
      waiting.forEach(reveal);
    }, 2800);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}

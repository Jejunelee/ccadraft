"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const columns = [
  {
    title: "For food businesses",
    links: [
      { label: "Bootcamps", href: "https://events.ccaconnect.co", external: true },
      { label: "Workshops & Events", href: "https://events.ccaconnect.co", external: true },
      { label: "Consultancy", href: "/#practice" },
      { label: "Experts", href: "/experts" },
    ],
  },
  {
    title: "For brands",
    links: [
      { label: "Brand Partnerships", href: "/#partners" },
      { label: "Sponsorships", href: "/JoinUs" },
      { label: "Become an expert", href: "/JoinUs" },
      { label: "About CCA Manila", href: "/about" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyoykpR2xw0OG-Pa6yB1ypOZxY_1pbpDpXarb4JfDLAk1qJi-_R4prfuPaInl0TIUEJ/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email }).toString(),
      });
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <footer className="border-t border-black/10 bg-[#f4f7f8] font-jost text-black">
      <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/logo.png" alt="CCA Connect" width={120} height={80} className="h-12 w-auto" />
          <p className="mt-4 max-w-[28ch] text-sm leading-relaxed text-[#5c6b73]">
            The Center for Food Entrepreneurship — the industry-engagement arm of CCA Manila.
          </p>
          <form onSubmit={handleSubmit} className="mt-5">
            <label htmlFor="footer-email" className="text-sm font-semibold">
              Join our growing community
            </label>
            <div className="mt-2 flex items-center border-b border-black/30 pb-1">
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                disabled={status === "loading"}
                className="w-full bg-transparent text-sm outline-none placeholder:text-black/40"
              />
              <button type="submit" className="px-2 text-lg" aria-label="Subscribe" disabled={status === "loading"}>
                {status === "loading" ? "…" : "→"}
              </button>
            </div>
            <div className="mt-2 min-h-4 text-xs" aria-live="polite">
              {status === "success" && <span className="text-[#225475]">Thanks for subscribing.</span>}
              {status === "error" && <span className="text-red-700">Something went wrong. Try again.</span>}
            </div>
          </form>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h2 className="text-xs font-semibold tracking-[0.12em] text-[#5c6b73] uppercase">{column.title}</h2>
            <ul className="mt-3 space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#225475]">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm hover:text-[#225475]">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-xs font-semibold tracking-[0.12em] text-[#5c6b73] uppercase">Get in touch</h2>
          <a href="mailto:piagtrinidad@cca-manila.edu.ph" className="mt-3 block text-sm font-semibold hover:text-[#225475]">
            piagtrinidad@cca-manila.edu.ph
          </a>
          <p className="mt-2 text-sm leading-relaxed text-[#5c6b73]">
            CCA Manila Campus
            <br />
            Bonifacio Global City, Taguig
          </p>
          <Link href="/JoinUs" className="mt-3 inline-block text-sm hover:text-[#225475]">
            Schedule a call
          </Link>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto flex w-full max-w-[1120px] flex-wrap items-center justify-between gap-2 px-6 py-4 text-xs text-[#5c6b73]">
          <span>© {currentYear} CCA Connect · Center for Food Entrepreneurship</span>
          <span>Powered by CCA Manila</span>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

type NavigationLink = {
  href: string;
  label: string;
  external?: boolean;
};

const NAVIGATION_LINKS: NavigationLink[] = [
  { href: "/#programs", label: "Bootcamps & Events" },
  { href: "/#work", label: "How We Work" },
  { href: "/experts#practice", label: "Consultancy" },
  { href: "/training", label: "Training" },
  { href: "/experts", label: "Experts" },
  { href: "/#partners", label: "Partner With Us" },
  { href: "/about", label: "About Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isMobileMenuOpen]);

  const isCurrent = (href: string) => {
    if (href.startsWith("/#") || href.startsWith("http")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  if (pathname?.startsWith("/dashboard")) {
    return null;
  }

  const island = scrolled && !isMobileMenuOpen;

  return (
    <header
      className={`sticky top-0 z-50 h-[66px] font-jost transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        island ? "bg-transparent" : "border-b border-black/10 bg-[#f4f7f8]/90 backdrop-blur-md"
      }`}
    >
      <div
        className={`nav-shell mx-auto flex w-full items-center gap-3 px-4 lg:gap-4 lg:px-5 xl:px-6 ${
          island
            ? "h-[64px] max-w-[min(1280px,calc(100%-2rem))] translate-y-3 rounded-full border border-white/10 bg-[#0a0a0a] text-white shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
            : "h-[66px] max-w-[1280px] translate-y-0"
        }`}
      >
        <Link
          href="/"
          className={`mr-auto flex shrink-0 items-center ${island ? "rounded-md bg-white px-2 py-1" : ""}`}
          aria-label="CCA Connect"
        >
          <Image src="/logo.png" alt="CCA Connect" width={614} height={361} className="h-8 w-auto" priority />
        </Link>

        <nav className="hidden shrink-0 items-center gap-3 xl:gap-4 lg:flex" aria-label="Main navigation">
          {NAVIGATION_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-normal whitespace-nowrap transition-colors ${
                  island ? "text-white/75 hover:text-white" : "text-[#5c6b73] hover:text-black"
                }`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                className={`text-sm font-normal whitespace-nowrap transition-colors ${
                  island
                    ? isCurrent(link.href)
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                    : isCurrent(link.href)
                      ? "text-black"
                      : "text-[#5c6b73] hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <Link
          href="/JoinUs"
          aria-current={pathname === "/JoinUs" ? "page" : undefined}
          className={`hidden shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors lg:inline-flex ${
            island ? "bg-[#AFCFE4] text-black hover:bg-white" : "bg-[#225475] text-white hover:bg-[#1b445e]"
          }`}
        >
          Join Us
        </Link>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full lg:hidden ${island ? "text-white" : "text-black"}`}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav
          className="fixed inset-x-0 top-[66px] bottom-0 z-40 overflow-y-auto border-t border-black/10 bg-[#f4f7f8] px-5 pt-2 pb-[max(1.25rem,env(safe-area-inset-bottom))] lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex min-h-full max-w-[1280px] flex-col">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                className={`border-b border-black/10 py-4 text-lg ${
                  isCurrent(link.href) ? "font-semibold text-[#225475]" : "font-medium text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/JoinUs"
              onClick={closeMenu}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#225475] px-4 text-sm font-semibold text-white"
            >
              Join Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

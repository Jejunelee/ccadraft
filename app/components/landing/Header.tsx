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
  { href: "/#bootcamps", label: "Bootcamps & Events" },
  { href: "/#work", label: "How We Work" },
  { href: "/#practice", label: "Consultancy" },
  { href: "/training", label: "Training" },
  { href: "/experts", label: "Experts" },
  { href: "/#partners", label: "Partners" },
  { href: "/about", label: "About CCA" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (pathname?.startsWith("/dashboard")) {
    return null;
  }

  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  const isCurrent = (href: string) => {
    if (href.startsWith("/#") || href.startsWith("http")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f7f8]/90 font-jost backdrop-blur-md">
      <div className="mx-auto flex h-[66px] w-full max-w-[1120px] items-center gap-6 px-6">
        <Link href="/" className="mr-auto flex items-center" aria-label="CCA Connect">
          <Image src="/logo.png" alt="CCA Connect" width={614} height={361} className="h-9 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-4 xl:gap-5 lg:flex" aria-label="Main navigation">
          {NAVIGATION_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#5c6b73] transition-colors hover:text-black"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                className={`text-[13px] font-medium transition-colors hover:text-black xl:text-sm ${
                  isCurrent(link.href) ? "text-black" : "text-[#5c6b73]"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <a
          href="https://events.ccaconnect.co"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[#225475] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1b445e] lg:inline-flex"
        >
          Join a bootcamp
        </a>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-black lg:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="border-t border-black/10 bg-[#f4f7f8] px-6 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-[1120px] flex-col gap-1">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                className={`rounded-lg px-2 py-2.5 text-base ${isCurrent(link.href) ? "font-semibold text-black" : "text-[#5c6b73]"}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://events.ccaconnect.co"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 inline-flex justify-center rounded-full bg-[#225475] px-4 py-2.5 text-sm font-semibold text-white"
            >
              Join a bootcamp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

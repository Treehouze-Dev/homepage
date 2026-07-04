"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Product", href: "/#product" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const BOOKING_HREF = "/book";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF]/75 backdrop-blur-md border-b border-[#E2E2DE]/60">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo-dark.svg"
            alt="Treehouze"
            width={24}
            height={26}
            priority
            className="shrink-0"
          />
          <span className="text-[#0D0D0B] font-bold tracking-tight text-base">
            Treehouze
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm font-medium text-[#6B6863] hover:text-[#0D0D0B] transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href={BOOKING_HREF}
            className="inline-flex items-center h-9 px-5 rounded-full border border-[#0D0D0B] text-[#0D0D0B] text-sm font-semibold hover:bg-[#0D0D0B] hover:text-white transition-colors"
          >
            Book a discovery call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-px w-5 bg-[#0D0D0B] transition-transform origin-center ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-[#0D0D0B] transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-[#0D0D0B] transition-transform origin-center ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-t border-[#E2E2DE] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[#6B6863] hover:text-[#0D0D0B] transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href={BOOKING_HREF}
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center h-10 px-5 rounded-full border border-[#0D0D0B] text-[#0D0D0B] text-sm font-semibold"
          >
            Book a discovery call
          </Link>
        </div>
      )}
    </header>
  );
}

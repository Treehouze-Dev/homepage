import Image from "next/image";
import Link from "next/link";

const PRODUCT_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

const LEGAL_LINKS = [
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Impressum", href: "/impressum" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/treehouze",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Substack",
    href: "https://treehouze.substack.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/treehouze",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E2E2DE] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <Image src="/logo-dark.svg" alt="Treehouze" width={20} height={22} />
              <span className="text-sm font-semibold text-[#0D0D0B] tracking-tight">
                Treehouze
              </span>
            </div>
            <p className="text-sm text-[#6B6863] leading-relaxed max-w-xs">
              Structured social integration for the first 90 days. Helping
              European companies improve new hire retention through belonging.
            </p>
            <a
              href="mailto:hello@treehouze.de"
              className="text-sm text-[#1B3A2B] hover:underline"
            >
              hello@treehouze.de
            </a>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E2E2DE] text-[#6B6863] hover:border-[#1B3A2B] hover:text-[#1B3A2B] transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium tracking-widest uppercase text-[#6B6863] mb-1">
              Company
            </span>
            {PRODUCT_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm text-[#6B6863] hover:text-[#0D0D0B] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium tracking-widest uppercase text-[#6B6863] mb-1">
              Legal
            </span>
            {LEGAL_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm text-[#6B6863] hover:text-[#0D0D0B] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-[#E2E2DE] flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-[#6B6863]">
            © {new Date().getFullYear()} Treehouze. All rights reserved.
          </p>
          <p className="text-xs text-[#6B6863]">
            We enable you to build a Treehouze that lasts.
          </p>
        </div>
      </div>
    </footer>
  );
}

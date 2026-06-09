import Image from "next/image";
import { Export, Whatsapp } from "iconsax-reactjs";

const WA =
  "https://wa.me/628xxxxxxxxxx?text=Hello%20Transdental%2C%20I%20would%20like%20to%20consult%20about%20dental%20equipment.";

const sections = [
  {
    title: "Services",
    items: [
      { label: "Dental units", href: "#services" },
      { label: "Installation", href: "#services" },
      { label: "Service & maintenance", href: "#services" },
      { label: "Warranty", href: "#services" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#about" },
      { label: "Why", href: "#why" },
      { label: "Products", href: "#products" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      aria-label="Footer"
      className="relative border-t border-border-line bg-white/40"
    >
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-10">
          <div className="col-span-12 md:col-span-5">
            <a href="#top" className="inline-block">
              <Image
                src="/logo-full.png"
                alt="Transdental - Dental Equipment Distributor"
                width={220}
                height={60}
                className="h-auto w-[200px] sm:w-[220px]"
                priority
              />
            </a>
            <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-foreground/70">
              Dental equipment distributor for modern clinics. Supply,
              installation, service, and parts, held together by one team.
            </p>

            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-soft-blue px-4 py-2.5 text-[13px] font-medium text-foreground shadow-[0_16px_34px_-20px_rgba(143,215,234,1)] transition-colors duration-200 hover:bg-[#74cde2]"
            >
              <Whatsapp className="h-4 w-4" />
              <span>WhatsApp Transdental</span>
              <Export className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {sections.map((s) => (
            <nav
              key={s.title}
              aria-label={s.title}
              className="col-span-6 md:col-span-2"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/45">
                {s.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {s.items.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      className="text-[14px] text-foreground/80 transition-colors duration-200 hover:text-foreground"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="col-span-12 md:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/45">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-[14px] text-foreground/80">
              <li>
                <a
                  href="mailto:hello@transdental.id"
                  className="transition-colors duration-200 hover:text-foreground"
                >
                  hello@transdental.id
                </a>
              </li>
              <li>+62 8xx xxx xxx</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div aria-hidden="true" className="mt-20 select-none overflow-hidden">
          <p
            className="font-display font-semibold leading-[0.85] tracking-tighter text-foreground"
            style={{ fontSize: "clamp(64px, 16vw, 220px)" }}
          >
            TRANSDENTAL
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border-line pt-6 text-[12px] text-foreground/55 md:flex-row md:items-center">
          <span>
            (C) {new Date().getFullYear()} Transdental. All rights reserved.
          </span>
          <span className="font-mono uppercase tracking-[0.18em]">
            Dental Equipment - ID
          </span>
        </div>
      </div>
    </footer>
  );
}

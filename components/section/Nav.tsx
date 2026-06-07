import Image from "next/image";
import { Export } from "iconsax-reactjs";

const WA = "https://wa.me/628xxxxxxxxxx?text=Hello%20Transdental%2C%20I%20would%20like%20to%20consult%20about%20dental%20equipment.";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why" },
  { href: "#products", label: "Products" },
];

export default function Nav() {
  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border-line bg-white/80 px-3 py-2 backdrop-blur-md"
      >
        <a href="#top" className="flex items-center gap-2 pl-3 pr-4 py-1.5">
          <Image
            src="/logo-mark.png"
            alt="Transdental"
            width={28}
            height={28}
            className="h-7 w-7"
            priority
          />
          <span className="font-display text-[15px] tracking-tight">
            Transdental
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-flex items-center rounded-full px-4 py-1.5 text-[13px] text-foreground/80 hover:text-foreground hover:bg-card transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-soft-blue px-4 py-2 text-[13px] font-medium text-foreground shadow-[0_12px_28px_-18px_rgba(143,215,234,1)] transition-colors duration-200 hover:bg-[#74cde2]"
        >
          <span>WhatsApp</span>
          <Export className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </nav>
    </header>
  );
}

"use client";

import { Export, Whatsapp } from "iconsax-reactjs";
import Image from "next/image";
import FadeUp from "../shared/FadeUp";

const WA =
  "https://wa.me/628xxxxxxxxxx?text=Hello%20Transdental%2C%20I%20would%20like%20to%20consult%20about%20dental%20equipment.";

const micros = [
  "Dental Unit Distributor",
  "Installation Support",
  "Service & Warranty",
  "Clinic Equipment",
  "After-Sales Care",
];

export default function Hero() {
  return (
    <section id="top" aria-label="Hero" className="relative overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-8 px-6 py-8 md:py-10">
        <div className="relative flex min-h-[680px] items-center overflow-hidden rounded-[2.75rem] border border-white/70 bg-[#edf3f7] shadow-[0_28px_80px_-48px_rgba(3,43,99,0.32)] md:min-h-[760px]">
          <Image
            src="/hero-chair-navy.png"
            alt="Modern dental unit and operating chair"
            fill
            priority
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="object-cover object-[center_45%] opacity-30 saturate-[0.88] contrast-[1.02]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 opacity-[0.12] mix-blend-luminosity md:h-96 md:w-96"
          >
            <Image
              src="/bento-tools-flatlay.png"
              alt=""
              fill
              sizes="400px"
              className="object-cover"
            />
          </div>

          <span
            aria-hidden="true"
            className="absolute bottom-5 right-6 z-10 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/45"
          >
            Dental unit - 2026
          </span>

          <span
            aria-hidden="true"
            className="absolute right-6 top-6 z-10 hidden items-center gap-2 rounded-full border border-white/70 bg-white/72 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/65 backdrop-blur-sm md:inline-flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            Vol. 01 - Equipment Catalogue
          </span>

          <FadeUp
            delay={0.1}
            className="relative z-20 w-full px-6 py-16 sm:px-8 md:px-12 lg:px-14"
          >
            <div className="max-w-280">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/55">
                Dental Unit Distributor - Modern Clinics
              </p>

              <h1 className="mt-7 font-display text-[44px] leading-[0.88] tracking-[-0.06em] text-foreground sm:text-[64px] md:text-[88px] lg:text-[108px] xl:text-[118px]">
                Dental equipment,
                <br />
                installed with
                <br className="hidden sm:block" />
                <span className="mt-2 inline-block font-serif text-cyan italic font-normal tracking-[-0.075em]">
                  confidence.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-foreground/62 md:text-[16px]">
                A focused distributor of dental units and supporting clinic
                equipment, with installation, service, and after-sales support
                that modern practices can rely on.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-soft-blue px-5 py-3 text-[14px] font-medium text-foreground shadow-[0_20px_40px_-18px_rgba(143,215,234,0.98)] transition-colors duration-200 hover:bg-[#74cde2]"
                >
                  <Whatsapp className="h-4 w-4" />
                  <span>Consult via WhatsApp</span>
                  <Export className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#why"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/72 px-5 py-3 text-[14px] font-medium text-foreground/85 backdrop-blur-sm transition-colors duration-200 hover:border-foreground/20 hover:bg-white hover:text-foreground"
                >
                  <span>Why Transdental</span>
                </a>
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp
          delay={0.5}
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center"
        >
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] uppercase tracking-[0.16em] text-foreground/65">
            {micros.map((m, i) => (
              <li key={m} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden="true" className="text-cyan">
                    +
                  </span>
                )}
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}

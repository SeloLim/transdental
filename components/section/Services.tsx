import Image from "next/image";
import { ArrowRight } from "iconsax-reactjs";
import FadeUp from "../shared/FadeUp";

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Products and services"
      className="relative"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <FadeUp className="border-y border-border-line">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className="flex min-h-[520px] flex-col justify-between gap-12 border-b border-border-line py-8 lg:border-b-0 lg:border-r lg:pr-10">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/52">
                  (02) Services
                </p>
                <h2 className="mt-8 max-w-[11ch] font-display text-[54px] leading-[0.9] tracking-[-0.06em] text-foreground sm:text-[72px] md:text-[92px]">
                  Your operatory, {""}
                  <span className="font-serif italic text-cyan">ready right.</span>
                </h2>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
                  What we handle
                </p>
                <p className="max-w-[45ch] text-[15px] leading-relaxed text-foreground/60 md:text-[16px]">
                  Kami bantu klinik memilih unit yang tepat, menyiapkan
                  kebutuhan teknis, dan memastikan instalasi berjalan rapi.
                </p>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
              <Image
                src="/hero-clinic-modern.png"
                alt="Modern dental clinic room prepared for equipment setup"
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover object-center saturate-[0.86] contrast-[0.97]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/58 via-background/4 to-white/0" />
            </div>
          </div>

          <div className="grid border-t border-border-line md:grid-cols-4">
            {[
              ["01", "Specify", "Rekomendasi unit sesuai ruang, budget, dan workflow."],
              ["02", "Prepare", "Kebutuhan utility, akses, dan jadwal dibuat clear."],
              ["03", "Install", "Pemasangan, kalibrasi, dan handover sampai siap pakai."],
              ["04", "Care", "Support warranty, parts, dan maintenance setelah install."],
            ].map(([number, title, body]) => (
              <div
                key={number}
                className="group relative border-t border-border-line py-8 pr-12 transition-colors duration-200 md:border-l md:border-t-0 md:px-6 md:pr-14 md:first:border-l-0"
              >
                <div className="flex items-center justify-between gap-5">
                  <span className="font-mono text-[11px] text-foreground/36 transition-colors duration-200 group-hover:text-cyan">
                    {number}
                  </span>
                  <span className="h-px flex-1 bg-border-line transition-colors duration-200 group-hover:bg-cyan" />
                </div>
                <h4 className="mt-8 font-display text-[42px] leading-[0.9] tracking-[-0.06em] text-foreground md:text-[56px]">
                  {title}
                </h4>
                <p className="mt-4 max-w-[24ch] text-[14px] leading-relaxed text-foreground/58">
                  {body}
                </p>
                <ArrowRight className="absolute bottom-10 right-0 h-8 w-8 text-cyan transition-transform duration-200 group-hover:translate-x-1 md:right-6" />
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

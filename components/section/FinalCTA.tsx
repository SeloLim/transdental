import { Export, Whatsapp } from "iconsax-reactjs";
import FadeUp from "../shared/FadeUp";

const WA =
  "https://wa.me/628xxxxxxxxxx?text=Hello%20Transdental%2C%20I%20would%20like%20to%20consult%20about%20dental%20equipment.";

export default function FinalCTA() {
  return (
    <section id="contact" aria-label="Contact" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <FadeUp>
          <div className="relative overflow-hidden rounded-[2rem] border border-border-line bg-card">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/80 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-[280px] w-[280px] rounded-full bg-soft-blue/30 blur-3xl"
            />

            <div className="relative grid grid-cols-12 gap-y-10 p-8 md:gap-x-10 md:p-14 lg:p-20">
              <div className="col-span-12 md:col-span-8">
                <p className="text-[12px] uppercase tracking-[0.22em] text-foreground/55">
                  (07) - Get in touch
                </p>
                <h2 className="mt-6 font-display text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground sm:text-[52px] md:text-[64px]">
                  Looking for the right
                  <br className="hidden sm:block" />
                  <span className="text-foreground/90">dental unit </span>
                  <span className="text-cyan italic">for your clinic?</span>
                </h2>
                <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-foreground/70 md:text-[16px]">
                  Talk to Transdental for product consultation, installation
                  support, and after-sales assistance. We answer in business
                  hours, often in minutes.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-soft-blue px-6 py-3.5 text-[14.5px] font-medium text-foreground shadow-[0_20px_40px_-18px_rgba(143,215,234,0.98)] transition-colors duration-200 hover:bg-[#74cde2]"
                  >
                    <Whatsapp className="h-4 w-4" />
                    <span>Chat on WhatsApp</span>
                    <Export className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="mailto:hello@transdental.id"
                    className="inline-flex items-center gap-2 rounded-full border border-border-line bg-white px-5 py-3.5 text-[14px] font-medium text-foreground/80 transition-colors duration-200 hover:border-foreground/30 hover:text-foreground"
                  >
                    hello@transdental.id
                  </a>
                </div>
              </div>

              <div className="col-span-12 md:col-span-4">
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border-line bg-border-line">
                  <div className="bg-white p-5">
                    <span className="font-mono text-[11px] text-foreground/45">
                      Phone
                    </span>
                    <p className="mt-3 text-[14px] text-foreground/85">
                      +62 8xx xxx xxx
                    </p>
                  </div>
                  <div className="bg-white p-5">
                    <span className="font-mono text-[11px] text-foreground/45">
                      Hours
                    </span>
                    <p className="mt-3 text-[14px] text-foreground/85">
                      Mon-Sat
                      <br />
                      09.00 - 18.00 WIB
                    </p>
                  </div>
                  <div className="col-span-2 bg-white p-5">
                    <span className="font-mono text-[11px] text-foreground/45">
                      Service area
                    </span>
                    <p className="mt-3 text-[14px] text-foreground/85">
                      Java, Bali, and surrounding islands. On-site support by
                      appointment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

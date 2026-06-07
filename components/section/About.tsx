import Image from "next/image";
import { Export } from "iconsax-reactjs";
import FadeUp from "../shared/FadeUp";

const cards = [
  {
    label: "01",
    title: "Right unit",
  },
  {
    label: "02",
    title: "Clean setup",
  },
  {
    label: "03",
    title: "After-care",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Transdental"
      className="relative"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-10">
          <FadeUp className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/52">
              (01) About Transdental
            </p>

            <div className="mt-7 border-y border-border-line py-8 md:py-10">
              <h2 className="font-display text-[42px] leading-[0.98] tracking-[-0.055em] text-foreground sm:text-[58px] md:text-[70px] lg:text-[82px]">
                We help clinics
                <br />
                choose, install,
                <br />
                and keep{" "}
                <span className="font-serif italic text-cyan">running.</span>
              </h2>
            </div>

            <div className="mt-2 max-w-2xl">
              {cards.map((c) => (
                <article
                  key={c.title}
                  className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-border-line py-5 last:border-b-0"
                >
                  <span className="font-mono text-[11px] text-foreground/45">
                    {c.label}
                  </span>
                  <h3 className="font-display text-[26px] leading-[1] tracking-[-0.035em] text-foreground md:text-[32px]">
                    {c.title}
                  </h3>
                  <Export className="h-6 w-6 text-cyan transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </article>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="col-span-12 md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border-line bg-card">
              <Image
                src="/about_clinic.png"
                alt="Modern dental clinic treatment room"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover saturate-[0.9] contrast-[0.98]"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/85 px-4 py-3 text-[12px] uppercase tracking-[0.18em] text-foreground/70 backdrop-blur">
                <span>Siap untuk klinik modern</span>
                <span className="text-cyan">+</span>
              </div>
            </div>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}

import FadeUp from "../shared/FadeUp";

const reasons = [
  {
    n: "01",
    title: "Fewer blind spots",
    body: "Ruang, utility, akses, dan workflow ikut dipikirkan sebelum unit dipilih.",
  },
  {
    n: "02",
    title: "Cleaner decisions",
    body: "Pilihan dibuat lebih pendek, lebih relevan, dan lebih mudah dipertanggungjawabkan.",
  },
  {
    n: "03",
    title: "Support with memory",
    body: "Tim yang membantu setup juga paham konteks ketika warranty, parts, atau maintenance dibutuhkan.",
  },
];

export default function Why() {
  return (
    <section
      id="why"
      aria-label="Why Transdental"
      className="bg-foreground text-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <FadeUp>
          <div className="text-center">
            <div className="flex items-center gap-5">
              <span className="h-px flex-1 bg-background/18" />
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-background/48">
                (03) Why
              </p>
              <span className="h-px flex-1 bg-background/18" />
            </div>
            <h2 className="mx-auto mt-8 mb-16 max-w-6xl font-display text-[54px] leading-[0.9] tracking-[-0.06em] text-background sm:text-[74px] md:text-[104px]">
              Less {""}
              <span className="font-serif italic text-cyan">uncertainty</span>
              <br />
              from purchase to first patient.
            </h2>
          </div>

          <div className="grid border-t border-background/18 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex min-h-[320px] flex-col justify-between border-b border-background/18 py-8 lg:border-b-0 lg:border-r lg:pr-10">
              <p className="max-w-[13ch] font-display text-[42px] leading-[0.92] tracking-[-0.055em] text-background/88 md:text-[66px]">
                Confidence is part of the equipment.
              </p>
              <p className="mt-8 max-w-[38ch] text-[15px] leading-relaxed text-background/58 md:text-[16px]">
                Transdental helps clinics remove the vague parts: what to buy,
                what to prepare, who installs it, and who supports it later.
              </p>
            </div>

            <div>
              {reasons.map((reason) => (
                <div
                  key={reason.n}
                  className="group grid gap-5 border-b border-background/18 py-7 last:border-b-0 md:grid-cols-[0.13fr_0.87fr_1fr] md:gap-7 lg:pl-10"
                >
                  <span className="flex items-center font-mono text-[15px] text-background/36 transition-colors duration-200 group-hover:text-cyan">
                    {reason.n}
                  </span>
                  <h3 className="flex items-center font-display text-[34px] leading-[0.95] tracking-[-0.055em] text-background md:text-[44px]">
                    {reason.title}
                  </h3>
                  <p className="flex items-center max-w-[40ch] text-[14px] leading-relaxed text-background/58 md:text-[15px]">
                    {reason.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

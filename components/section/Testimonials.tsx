import FadeUp from "../shared/FadeUp";

const observations = [
  {
    n: "01",
    quote: "Install day felt organized.",
    body: "The value is not only the chair. It is knowing what needs to happen before the chair arrives.",
  },
  {
    n: "02",
    quote: "The room was ready sooner.",
    body: "Clear utility checks, delivery timing, and handover steps reduce the back-and-forth that slows clinics down.",
  },
  {
    n: "03",
    quote: "Support did not disappear.",
    body: "Warranty, parts, and maintenance stay connected to the same equipment context after installation.",
  },
];

export default function Testimonials() {
  return (
    <section aria-label="Clinic feedback" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <FadeUp className="">
          <div className="grid text-center">
            <div className="flex items-center gap-5">
              <span className="h-px flex-1 bg-border-line" />
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/52">
                (05) Proof
              </p>
              <span className="h-px flex-1 bg-border-line" />
            </div>
            <h2 className="mx-auto max-w-5xl font-display text-[52px] leading-[0.9] tracking-[-0.06em] text-foreground sm:text-[72px] md:text-[92px] mt-8 mb-16">
              What clinics notice {""}
              <span className="font-serif italic text-cyan">after setup.</span>
            </h2>
          </div>

          <div className="grid border-t border-border-line lg:grid-cols-[1fr_1.2fr]">
            <div className="border-b border-border-line py-8 lg:border-b-0 lg:border-r lg:pr-10">
              <p className="max-w-[12ch] font-display text-[44px] leading-[0.92] tracking-[-0.055em] text-foreground md:text-[68px]">
                The quiet parts are usually the proof.
              </p>
              <p className="mt-8 max-w-[40ch] text-[15px] leading-relaxed text-foreground/58 md:text-[16px]">
                Good setup is not always dramatic. It shows up as fewer calls,
                fewer delays, cleaner handover, and a room that starts working
                as expected.
              </p>
            </div>

            <div>
              {observations.map((item) => (
                <div
                  key={item.n}
                  className="group grid gap-5 border-b border-border-line py-7 last:border-b-0 md:grid-cols-[0.18fr_0.9fr_1fr] md:gap-7 lg:pl-10"
                >
                  <span className="font-mono text-[11px] text-foreground/36 transition-colors duration-200 group-hover:text-cyan">
                    {item.n}
                  </span>
                  <p className="font-display text-[34px] leading-[0.95] tracking-[-0.055em] text-foreground md:text-[46px]">
                    {item.quote}
                  </p>
                  <p className="max-w-[40ch] text-[14px] leading-relaxed text-foreground/58 md:text-[15px]">
                    {item.body}
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

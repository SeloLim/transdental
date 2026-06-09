import FadeUp from "../shared/FadeUp";

const faqs = [
  {
    question: "Can you recommend a unit for my room size?",
    answer:
      "Yes. We look at room dimensions, utility points, operator workflow, budget, and future maintenance access before recommending a unit.",
  },
  {
    question: "Do you handle installation?",
    answer:
      "Yes. Delivery, on-site setup, calibration, and handover can be coordinated by the same team so the room is ready to use.",
  },
  {
    question: "What should be prepared before delivery?",
    answer:
      "We clarify access, electricity, water, air, suction, placement, and scheduling needs before the unit arrives.",
  },
  {
    question: "Is after-sales support included?",
    answer:
      "Warranty handling, parts, maintenance, and technical response are part of the support path after installation.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Service coverage depends on location and project scope. Share your clinic location and we will confirm delivery and support options.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="relative"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <FadeUp className="grid gap-10 border-y border-border-line py-8 lg:grid-cols-[0.74fr_1.26fr] lg:py-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/52">
              (06) FAQ
            </p>
            <h2 className="mt-8 max-w-[10ch] font-display text-[54px] leading-[0.9] tracking-[-0.06em] text-foreground sm:text-[72px] md:text-[92px]">
              Before you {""}
              <span className="font-serif italic text-cyan">commit.</span>
            </h2>
          </div>

          <div className="border-t border-border-line lg:border-t-0">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-border-line py-6"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <span className="font-display text-[28px] leading-[0.98] tracking-[-0.045em] text-foreground md:text-[38px]">
                    {faq.question}
                  </span>
                  <span className="mt-1 text-[28px] leading-none text-cyan transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-[58ch] text-[14px] leading-relaxed text-foreground/60 md:text-[15px]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

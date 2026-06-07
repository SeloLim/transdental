import Image from "next/image";
import { ArrowRight } from "iconsax-reactjs";
import FadeUp from "../shared/FadeUp";

const products = [
  {
    n: "01",
    name: "Dental unit",
    body: "Operatories that need a balanced chair, clean delivery system, and dependable daily workflow.",
    image: "/bento_dental_unit.png",
    alt: "Dental unit equipment",
  },
  {
    n: "02",
    name: "Compressor",
    body: "Quiet, stable air supply specified around chair count, room plan, and service access.",
    image: "/product_compressor.png",
    alt: "Dental compressor",
  },
  {
    n: "03",
    name: "Suction system",
    body: "Suction matched to clinical load, installation route, and maintenance expectations.",
    image: "/product_suction.png",
    alt: "Dental suction equipment",
  },
];

export default function Products() {
  return (
    <section id="products" aria-label="Featured products" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <FadeUp className="border-y border-border-line">
          <div className="grid gap-8 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:py-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/52">
                (04) Products
              </p>
              <h2 className="mt-8 max-w-[11ch] font-display text-[54px] leading-[0.9] tracking-[-0.06em] text-foreground sm:text-[72px] md:text-[92px]">
                Equipment we can stand {""}
                <span className="font-serif italic text-cyan">behind.</span>
              </h2>
            </div>

            <p className="max-w-[42ch] text-[16px] leading-relaxed text-foreground/62 md:text-[18px]">
              A tighter product set makes it easier to recommend honestly,
              install properly, and support long after handover.
            </p>
          </div>

          <div className="grid border-t border-border-line lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.n}
                className="group relative border-b border-border-line py-8 pr-12 last:border-b-0 lg:border-b-0 lg:border-l lg:px-6 lg:pr-14 lg:first:border-l-0"
              >
                <div className="flex items-center gap-5">
                  <span className="font-mono text-[11px] text-foreground/36 transition-colors duration-200 group-hover:text-cyan">
                    {product.n}
                  </span>
                  <span className="h-px flex-1 bg-border-line transition-colors duration-200 group-hover:bg-cyan" />
                </div>

                <div className="relative mt-8 aspect-[4/3] overflow-hidden bg-card">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover object-center saturate-[0.84] contrast-[0.96] transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <h3 className="mt-8 font-display text-[42px] leading-[0.9] tracking-[-0.06em] text-foreground md:text-[56px]">
                  {product.name}
                </h3>
                <p className="mt-4 max-w-[30ch] text-[14px] leading-relaxed text-foreground/58">
                  {product.body}
                </p>

                <ArrowRight className="absolute bottom-10 right-0 h-8 w-8 text-cyan transition-transform duration-200 group-hover:translate-x-1 lg:right-6" />
              </article>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

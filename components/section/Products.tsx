"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "iconsax-reactjs";
import { motion, AnimatePresence } from "motion/react";
import FadeUp from "../shared/FadeUp";

const systems = [
  {
    n: "01",
    name: "Treatment Platform",
    tagline: "The Operative Interface",
    class: "OPERATORY PLATFORM",
    description:
      "The tactile center of clinical gravity. A motorized multi-axis chair and instrument delivery platform engineered to balance patient physiology with surgical access.",
    extended:
      "Mengintegrasikan kontrol instrumen dokter, assistant element, lampu operasi sensor-less, dan sistem gerakan elektrik kursi dalam satu sirkuit koordinasi presisi.",
    image: "/bento_dental_unit.png",
    alt: "Treatment Unit Platform",
    caption: "Model setup: Motorized operatory interface.",
    specs: [
      {
        parameter: "Articulation",
        value: "Motorized multi-axis chair movement",
        status: "NOMINAL",
      },
      {
        parameter: "Delivery",
        value: "Whip-arm or hanging instrument options",
        status: "FLEXIBLE",
      },
      {
        parameter: "Illumination",
        value: "Shadowless sensor-less LED operation light",
        status: "OPTIMAL",
      },
    ],
    hotspots: [
      {
        x: 45,
        y: 25,
        label: "LED Light Module",
        description:
          "Shadowless sensor-less operation light simulating natural 5000K daylight.",
      },
      {
        x: 70,
        y: 50,
        label: "Delivery Unit",
        description:
          "Whip-arm balanced system supporting 5 instruments with integrated control panel.",
      },
      {
        x: 30,
        y: 75,
        label: "Motorized Chair",
        description:
          "Multi-axis movement driven by silent brushless motors with automatic safety sensors.",
      },
    ],
    models: [
      {
        name: "TD-INTEGRA",
        code: "INT",
        class: "Premium Operative Unit",
        image: "/bento_dental_unit.png",
        desc: "Sistem dental unit lengkap untuk praktek umum. Mengintegrasikan kursi pasien elektrik dengan gerakan sinkronisasi ergonomis, nampan instrumen whip-arm 5 slot, assistant element yang diperluas, sistem sanitasi otomatis, dan lampu operasi shadowless sensorless berkinerja tinggi untuk visibilitas klinis maksimal.",
        specs: [
          { parameter: "Articulation", value: "750 mm Stroke Dual-Axis" },
          { parameter: "Delivery Unit", value: "Whip-arm 5-Instrument tray" },
          { parameter: "Illumination", value: "30,000 Lux LED sensorless" },
          { parameter: "Water System", value: "Integrated clean water bottle" },
        ],
      },
      {
        name: "TD-ORTHO",
        code: "ORT",
        class: "Dedicated Orthodontic Platform",
        image: "/bento_dental_unit.png",
        desc: "Kursi perawatan gigi khusus ortodonti dengan desain minimalis. Dioptimalkan untuk akses dokter dari berbagai sisi dengan modul asisten yang diperluas.",
        specs: [
          {
            parameter: "Articulation",
            value: "Speed-controlled motorized chair",
          },
          {
            parameter: "Delivery Unit",
            value: "Compact cart or cabinet delivery",
          },
          { parameter: "Illumination", value: "Double-jointed LED light arm" },
          {
            parameter: "Tray Access",
            value: "Dual assistant tray configuration",
          },
        ],
      },
      {
        name: "TD-SURGE",
        code: "SRG",
        class: "Advanced Surgical Station",
        image: "/bento_dental_unit.png",
        desc: "Stasiun bedah dental steril. Memiliki sirkuit kontrol terintegrasi untuk micromotor implan, kursi ergonomis berlapis memory foam higienis, dan panel steril sentuh.",
        specs: [
          {
            parameter: "Articulation",
            value: "Synchronized backrest & legrest",
          },
          {
            parameter: "Delivery Unit",
            value: "Saline pump & implant motor path",
          },
          {
            parameter: "Illumination",
            value: "50,000 Lux shadowless surgery light",
          },
          {
            parameter: "Foot Control",
            value: "Multi-functional wireless foot pedal",
          },
        ],
      },
      {
        name: "TD-MAX",
        code: "MAX",
        class: "Premium Surgical Suite",
        image: "/bento_dental_unit.png",
        desc: "Dental unit ultra-premium dengan spesifikasi bedah tertinggi. Menghadirkan jok memory foam ergonomis, asisten element layar sentuh 7 inci, sirkuit implan terintegrasi, dan double-articulating headrest.",
        specs: [
          { parameter: "Articulation", value: "850 mm Vertical Stroke" },
          { parameter: "Upholstery", value: "Luxury Orthopedic Foam" },
          { parameter: "Illumination", value: "60,000 Lux Shadowless LED" },
          {
            parameter: "Implant Engine",
            value: "Integrated brushless micromotor",
          },
        ],
      },
    ],
  },
  {
    n: "02",
    name: "Compressed Air",
    tagline: "The Kinetic Engine",
    class: "KINETIC PROPULSION",
    description:
      "The pure force of clinical propulsion. A medical-grade compressed air plant delivering 100% oil-free, dry energy to drive high-precision instrumentation.",
    extended:
      "Dilengkapi double-adsorption membrane dryer untuk menjaga pasokan udara tetap kering, bebas hidrokarbon, dan memenuhi standar ISO 8573-1.",
    image: "/product_compressor.png",
    alt: "Medical Air Compressor",
    caption: "Model setup: Oil-free compressed air plant.",
    specs: [
      {
        parameter: "Air Purity",
        value: "Certified 100% oil-free dry delivery",
        status: "100% PUR",
      },
      {
        parameter: "Drying Unit",
        value: "Double-adsorption membrane configuration",
        status: "MEMBRANE",
      },
      {
        parameter: "Acoustics",
        value: "Soundproof silencing cabinet enclosure",
        status: "<48 DB",
      },
    ],
    hotspots: [
      {
        x: 55,
        y: 30,
        label: "Air Dryer",
        description:
          "Double-adsorption membrane drying unit ensuring pressure dew point down to -20°C.",
      },
      {
        x: 35,
        y: 60,
        label: "PTFE Compressor Head",
        description:
          "100% oil-free pump for absolute hygienic compressed air production.",
      },
      {
        x: 65,
        y: 80,
        label: "Silenced Cabinet",
        description:
          "Acoustically decoupled enclosure lowering operational sound under 48 dB(A).",
      },
    ],
    models: [
      {
        name: "TD-AIR 1",
        code: "A-1",
        class: "Compact Oil-Free Compressor",
        image: "/product_compressor.png",
        desc: "Kompresor udara medis portabel untuk 1 unit dental. Menghasilkan udara 100% bebas minyak dengan tangki penyimpanan berpelapis anti-korosi internal.",
        specs: [
          { parameter: "Air Purity", value: "100% Oil-Free Certified" },
          { parameter: "Tank Capacity", value: "30 Liters Internal Coat" },
          { parameter: "Flow Output", value: "70 L/min @ 5 Bar" },
          { parameter: "Noise Level", value: "54 dB(A) Standard" },
        ],
      },
    ],
  },
  {
    n: "03",
    name: "Surgical Evacuation",
    tagline: "The Fluid Vector",
    class: "FLUID DYNAMICS",
    description:
      "The biohazard containment perimeter. A high-velocity vacuum system creating constant negative pressure to capture aerosols and fluids at the source.",
    extended:
      "Memaksimalkan kebersihan bidang pandang operasi sekaligus meminimalisir kontaminasi aerosol patogen di udara operitori.",
    image: "/product_suction.png",
    alt: "Surgical Evacuation Pump",
    caption: "Model setup: Centrifugal high-vacuum suction.",
    specs: [
      {
        parameter: "Vacuum",
        value: "Constant negative pressure down to -180mbar",
        status: "HIGH-VAC",
      },
      {
        parameter: "Separation",
        value: "Integrated centrifugal air-water separation",
        status: "CENTRIFUGAL",
      },
      {
        parameter: "Filtration",
        value: "ISO-certified amalgam sedimentation unit",
        status: "ISO-COMP",
      },
    ],
    hotspots: [
      {
        x: 40,
        y: 35,
        label: "High-Vac Pump",
        description:
          "Centrifugal evacuation motor maintaining constant flow at -180 mbar suction.",
      },
      {
        x: 60,
        y: 55,
        label: "Separation Unit",
        description:
          "High-speed centrifugal separator separating liquid and air at the suction head.",
      },
      {
        x: 48,
        y: 78,
        label: "Amalgam Collector",
        description:
          "ISO-compliant filtration system capturing heavy-metal residues for disposal.",
      },
    ],
    models: [
      {
        name: "TD-VAC 1",
        code: "V-1",
        class: "Wet-Line Evacuation Pump",
        image: "/product_suction.png",
        desc: "Pompa hisap wet-line handal untuk 1 operatori. Menghisap saliva dan air secara konstan dengan impeler kuningan tahan korosi.",
        specs: [
          { parameter: "Suction Type", value: "Wet-line suction pump" },
          { parameter: "Vacuum Level", value: "-120 mbar constant force" },
          { parameter: "Motor Power", value: "0.55 kW single phase" },
          { parameter: "Flow Velocity", value: "250 L/min Air flow" },
        ],
      },
      {
        name: "TD-VAC 2",
        code: "V-2",
        class: "Centrifugal Dry-Line Suction",
        image: "/product_suction.png",
        desc: "Sistem hisap dry-line berkinerja tinggi untuk 2 operatori. Dilengkapi pemisah cairan-udara sentrifugal berkecepatan tinggi dan filter amalgam.",
        specs: [
          {
            parameter: "Suction Type",
            value: "Dry-line suction with separation",
          },
          { parameter: "Vacuum Level", value: "-180 mbar high velocity" },
          { parameter: "Separation", value: "98% Centrifugal Efficiency" },
          { parameter: "Heavy Metals", value: "ISO-compliant amalgam filter" },
        ],
      },
    ],
  },
];

function ModelShowcase({ activeIndex }: { activeIndex: number }) {
  const [activeModelIndex, setActiveModelIndex] = useState<number>(0);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(true);

  useEffect(() => {
    const modelCount = systems[activeIndex]?.models?.length || 0;
    if (!isAutoplay || modelCount <= 1) return;

    const timer = setInterval(() => {
      setActiveModelIndex((prev) => (prev + 1) % modelCount);
    }, 4500);

    return () => clearInterval(timer);
  }, [activeModelIndex, activeIndex, isAutoplay]);

  const activeSystem = systems[activeIndex];
  const activeModel =
    activeSystem.models?.[activeModelIndex] || activeSystem.models?.[0];

  return (
    <div className="hidden lg:block sticky top-24 w-full max-w-[450px] ml-auto text-foreground">
      {/* Main Display Area with Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeIndex}-${activeModelIndex}`}
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -8 }}
          transition={{ duration: 0.18, ease: "easeInOut" }}
          className="flex flex-col"
        >
          {/* Model Header */}
          <div className="flex justify-between items-baseline mb-4">
            <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground leading-none">
              {activeModel?.name}
            </h4>
            <span className="font-mono text-[9px] uppercase tracking-widest text-cyan font-bold">
              {activeModel?.class}
            </span>
          </div>

          {/* Product Image Link (Hover to Reveal Detail Button) */}
          <a
            href="#product-details"
            className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-card border border-border-line/10 group/img shadow-xs block cursor-pointer"
          >
            <Image
              src={activeModel?.image || "/bento_dental_unit.png"}
              alt={activeModel?.name || "Product mockup"}
              fill
              sizes="30vw"
              className="object-cover saturate-[0.88] contrast-[1.02] transition-transform duration-700 ease-out group-hover/img:scale-[1.04]"
            />

            {/* Viewport Center-Drawing Editorial Overlay on hover */}
            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[1px] z-20">
              {/* Top drawing border */}
              <span className="h-px bg-white/20 w-0 group-hover/img:w-[65%] transition-all duration-500 ease-out" />

              {/* Centered label */}
              <span className="font-mono text-[10px] tracking-[0.25em] text-white uppercase py-2.5 opacity-0 translate-y-1 group-hover/img:opacity-100 group-hover/img:translate-y-0 transition-all duration-500 ease-out delay-75">
                View Specifications
              </span>

              {/* Bottom drawing border */}
              <span className="h-px bg-white/20 w-0 group-hover/img:w-[55%] transition-all duration-500 ease-out" />
            </div>
          </a>

          {/* Description */}
          <p className="text-[13px] h-[65px] line-clamp-3 overflow-hidden text-ellipsis leading-relaxed text-foreground/60 mt-5 font-serif italic">
            “{activeModel?.desc}”
          </p>

          {/* Technical Specifications (2x2 Grid, Text columns) */}
          <div className="mt-6 border-t border-border-line/20 pt-5">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {activeModel?.specs?.map((spec, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1 border-b border-border-line/10 pb-2 flex-1 min-w-0"
                >
                  <span className="font-mono text-[8px] uppercase tracking-wider text-foreground/40">
                    {spec.parameter}
                  </span>
                  <span className="text-[12.5px] text-foreground/80 font-bold font-sans truncate">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicator Slider & Play/Pause Controller */}
      {activeSystem.models && activeSystem.models.length > 1 && (
        <div className="mt-6 flex items-center gap-4">
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoplay(!isAutoplay)}
            className="shrink-0 w-6 h-6 rounded-full border border-border-line/30 flex items-center justify-center cursor-pointer text-foreground/45 hover:text-cyan hover:border-cyan/40 transition-colors focus:outline-none"
            title={isAutoplay ? "Pause Autoplay" : "Resume Autoplay"}
          >
            {isAutoplay ? (
              // Pause Icon (||)
              <svg
                className="w-2.5 h-2.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              // Play Icon (▶)
              <svg
                className="w-2.5 h-2.5 ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Progress Tracks */}
          <div className="flex-1 flex gap-3">
            {activeSystem.models?.map((model, idx) => {
              const isActive = activeModelIndex === idx;
              return (
                <button
                  key={model.name}
                  onMouseEnter={() => {
                    if (activeModelIndex !== idx) {
                      setActiveModelIndex(idx);
                    }
                  }}
                  onClick={() => {
                    setActiveModelIndex(idx);
                    setIsAutoplay(false);
                  }}
                  className="flex-1 flex flex-col gap-1.5 cursor-pointer group text-left focus:outline-none"
                >
                  <div className="flex justify-between items-baseline font-mono text-[8px] tracking-wider transition-colors duration-300">
                    <span
                      className={
                        isActive
                          ? isAutoplay
                            ? "text-cyan font-bold"
                            : "text-amber-500 font-bold"
                          : "text-foreground/35 group-hover:text-foreground/50"
                      }
                    >
                      0{idx + 1}
                    </span>
                    <span
                      className={
                        isActive
                          ? "text-foreground/80 font-bold"
                          : "text-foreground/20 group-hover:text-foreground/45"
                      }
                    >
                      {model.code}
                    </span>
                  </div>

                  <div className="h-[2px] w-full bg-foreground/10 rounded-full overflow-hidden relative">
                    {isActive && isAutoplay && (
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4.5, ease: "linear" }}
                        className="absolute left-0 top-0 bottom-0 bg-cyan"
                      />
                    )}
                    {isActive && !isAutoplay && (
                      <div className="absolute inset-0 bg-amber-500" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Products() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const children = Array.from(containerRef.current.children);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.boundingClientRect.height > 0) {
            const idx = children.indexOf(entry.target);
            if (idx !== -1) {
              setActiveIndex(idx);
            }
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );

    children.forEach((child) => observer.observe(child));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="products"
      aria-label="Clinical Catalogue"
      className="relative border-t border-border-line bg-background text-foreground"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <FadeUp>
          {/* Section Header */}
          <div className="flex flex-col gap-6 lg:gap-22 md:flex-row md:items-end pb-6 border-b border-border-line/60">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/52">
                (04) The Catalogue
              </p>
              <h2 className="mt-4 font-display text-[54px] leading-[0.9] tracking-[-0.06em] text-foreground sm:text-[72px] md:text-[96px]">
                The clinical core, <br />
                <span className="font-serif italic text-cyan">engineered.</span>
              </h2>
            </div>
            <p className="max-w-[34ch] text-[15px] leading-relaxed text-foreground/58 italic lg:pb-3">
              “Satu sirkuit terintegrasi untuk kursi perawatan elektrik, pasokan
              udara steril bebas minyak, dan sistem vakum bedah.”
            </p>
          </div>

          {/* Interactive Core: Scroll-Bound Split Layout */}
          <div className="mt-16 grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 items-start relative">
            {/* Left Column: Vertical Scrolling Content Sections with Architectural Guideline */}
            <div
              ref={containerRef}
              className="flex flex-col border-l border-border-line/30 ml-2"
            >
              {systems.map((sys, idx) => {
                const isCurrent = activeIndex === idx;

                return (
                  <div
                    key={sys.n}
                    className={`min-h-[60vh] flex flex-col justify-center transition-colors duration-700 relative ${
                      idx === systems.length - 1 ? "" : "pb-20"
                    }`}
                  >
                    <div className="flex flex-col gap-6">
                      {/* Section Metadata Ticker */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-mono text-[13px] font-bold leading-none tracking-widest uppercase transition-colors duration-500 ${
                              isCurrent ? "text-cyan" : "text-cyan/30"
                            }`}
                          >
                            Cat.{sys.n} {"//"}
                          </span>
                          <p
                            className={`font-mono text-[10.5px] uppercase tracking-wider transition-colors duration-500 ${
                              isCurrent
                                ? "text-foreground/45"
                                : "text-foreground/15"
                            }`}
                          >
                            {sys.tagline}
                          </p>
                        </div>

                        {/* Display Product Name with blinking cursor micro-interaction */}
                        <h3
                          className={`font-display text-[42px] sm:text-[56px] leading-[0.95] tracking-[-0.055em] uppercase font-bold mt-1 transition-colors duration-500 ${
                            isCurrent ? "text-foreground" : "text-foreground/15"
                          }`}
                        >
                          {sys.name}
                          {isCurrent && (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{
                                repeat: Infinity,
                                duration: 1.2,
                                ease: "easeInOut",
                              }}
                              className="text-cyan ml-2.5 inline-block font-sans font-normal"
                            >
                              _
                            </motion.span>
                          )}
                        </h3>
                      </div>

                      {/* Mobile Inline Image (Only Visible on Mobile/Tablet) */}
                      <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-card border border-border-line/70 lg:hidden mt-4 shadow-xs">
                        <Image
                          src={sys.image}
                          alt={sys.alt}
                          fill
                          sizes="100vw"
                          className="object-cover saturate-[0.8] contrast-[1.05]"
                        />
                      </div>

                      {/* Content Descriptions split into dual-column blueprint layout */}
                      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 mt-2 items-start">
                        <p
                          className={`font-serif italic text-[18px] sm:text-[20px] leading-relaxed transition-all duration-500 ${
                            isCurrent
                              ? "text-foreground/85"
                              : "text-foreground/15"
                          }`}
                        >
                          {sys.description}
                        </p>

                        <div
                          className={`relative p-5 border rounded-xl transition-all duration-500 ${
                            isCurrent
                              ? "bg-card/40 text-foreground/75 border-border-line/40"
                              : "bg-transparent text-foreground/15 border-transparent"
                          }`}
                        >
                          {/* Corner bracket accents */}
                          {isCurrent && (
                            <>
                              <span className="absolute top-2 left-2 font-mono text-[8px] text-cyan/60 leading-none select-none">
                                ┌
                              </span>
                              <span className="absolute top-2 right-2 font-mono text-[8px] text-cyan/60 leading-none select-none">
                                ┐
                              </span>
                              <span className="absolute bottom-2 left-2 font-mono text-[8px] text-cyan/60 leading-none select-none">
                                └
                              </span>
                              <span className="absolute bottom-2 right-2 font-mono text-[8px] text-cyan/60 leading-none select-none">
                                ┘
                              </span>
                            </>
                          )}
                          <span
                            className={`font-mono text-[9.5px] uppercase tracking-widest block mb-1.5 transition-colors duration-500 ${
                              isCurrent ? "text-cyan" : "text-cyan/15"
                            }`}
                          >
                            OVERVIEW // ID
                          </span>
                          <p className="text-[13px] leading-relaxed">
                            {sys.extended}
                          </p>
                        </div>
                      </div>

                      {/* Technical Specifications Ledger Table */}
                      <div className="border-t border-border-line/30 pt-6">
                        <div className="flex items-center gap-2 mb-4">
                          <span
                            className={`h-1 w-1 rounded-full transition-colors duration-500 ${isCurrent ? "bg-cyan" : "bg-cyan/25"}`}
                          />
                          <span
                            className={`font-mono text-[9px] tracking-[0.25em] uppercase transition-colors duration-500 ${
                              isCurrent
                                ? "text-foreground/60"
                                : "text-foreground/15"
                            }`}
                          >
                            INTEGRATION PARAMETERS
                          </span>
                        </div>

                        <div className="grid gap-1">
                          {sys.specs.map((spec, i) => (
                            <div
                              key={i}
                              className="grid sm:grid-cols-[160px_1fr_120px] grid-cols-1 gap-1 sm:gap-6 py-2.5 border-b border-dashed border-border-line/20 items-baseline"
                            >
                              <span
                                className={`font-mono text-[10px] tracking-wider uppercase transition-colors duration-500 ${
                                  isCurrent
                                    ? "text-foreground/45"
                                    : "text-foreground/10"
                                }`}
                              >
                                {spec.parameter}
                              </span>
                              <span
                                className={`text-[13.5px] transition-colors duration-500 ${
                                  isCurrent
                                    ? "text-foreground/80"
                                    : "text-foreground/10"
                                }`}
                              >
                                {spec.value}
                              </span>
                              <span
                                className={`hidden sm:inline-block font-mono text-[9px] tracking-widest text-right transition-colors duration-500 ${
                                  isCurrent ? "text-cyan" : "text-cyan/15"
                                }`}
                              >
                                [ {spec.status} ]
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Underline CTA Link with Delayed Sliding Arrow */}
                      <div>
                        <a
                          href="#final-cta"
                          className={`relative inline-flex items-center gap-2 text-[12.5px] font-mono tracking-widest pb-1.5 group/link self-start ${
                            isCurrent
                              ? "text-foreground"
                              : "text-foreground/20 pointer-events-none"
                          }`}
                        >
                          <span
                            className={`uppercase font-bold transition-colors duration-300 ${
                              isCurrent ? "group-hover/link:text-cyan" : ""
                            }`}
                          >
                            LEARN MORE
                          </span>

                          {/* Animated Cyan Underline */}
                          <span
                            className={`absolute bottom-0 left-0 h-px bg-cyan w-0 transition-all duration-300 ease-out z-10 ${
                              isCurrent ? "group-hover/link:w-full" : ""
                            }`}
                          />

                          <ArrowRight
                            className={`h-4.5 w-4.5 transition-all duration-300 ease-out delay-0 ${
                              isCurrent
                                ? "text-foreground/80 group-hover/link:translate-x-1.5 group-hover/link:delay-300 group-hover/link:text-cyan"
                                : ""
                            }`}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Sticky Product Editorial Showcase (Only Visible on Desktop) */}
            <ModelShowcase key={activeIndex} activeIndex={activeIndex} />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

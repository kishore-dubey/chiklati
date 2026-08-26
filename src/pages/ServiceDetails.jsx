import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";

import { servicesData } from "../data/servicesData";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ServiceDetails() {
  const { slug } = useParams();

  const service = servicesData[slug];
  
  

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/30">
            404
          </p>

          <h1 className="mt-4 text-4xl font-semibold">
            Service not found
          </h1>

          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            View all services
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative px-6 pb-24 pt-40 lg:px-8 lg:pb-32">
        
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={item}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-white/40" />

              <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                CHIKLATI / SERVICES
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-tighter md:text-7xl lg:text-8xl"
            >
              {service.title}
            </motion.h1>

            <motion.h2
              variants={item}
              className="mt-7 max-w-2xl text-2xl font-medium leading-tight text-white/35 md:text-3xl"
            >
              {service.subtitle}
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-8 max-w-2xl text-base leading-7 text-white/45 md:text-lg"
            >
              {service.description}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Start a conversation

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-4 text-sm text-white/60 transition hover:border-white/30 hover:text-white"
              >
                Explore service

                <ArrowDown size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              rotate: 3,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative aspect-square overflow-hidden rounded-[40px] border border-white/10 bg-white/2">

              {/* Grid */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />

              {/* Floating Orb */}
              <motion.div
                animate={{
                  x: [0, 30, -20, 0],
                  y: [0, -25, 20, 0],
                  scale: [1, 1.08, 0.95, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl"
              />

              {/* UI */}
              <div className="absolute inset-10 rounded-[30px] border border-white/10 bg-black/40 p-6 backdrop-blur-xl">

                <div className="flex items-center justify-between">
                  <div className="h-2.5 w-24 rounded-full bg-white/20" />

                  <div className="h-8 w-8 rounded-full border border-white/10" />
                </div>

                <div className="mt-8 space-y-4">
                  <div className="h-24 rounded-2xl border border-white/10 bg-white/3" />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 rounded-2xl border border-white/10 bg-white/3" />

                    <div className="h-32 rounded-2xl border border-white/10 bg-white/3" />
                  </div>

                  <div className="h-16 rounded-2xl border border-white/10 bg-white/3" />
                </div>

              </div>

              {/* Corner label */}
              <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/40 backdrop-blur-md">
                Digital systems
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ====================================================== */}

      <section
        id="capabilities"
        className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.5fr_1fr]">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              What we do
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-tight md:text-4xl">
              Capabilities
            </h2>
          </div>

          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {service.points.map((point, index) => (
              <motion.div
                key={point}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.5,
                }}
                className="group bg-[#050505] p-7 transition hover:bg-white/3 md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/20">
                    0{index + 1}
                  </span>

                  <Check
                    size={18}
                    className="text-white/20 transition group-hover:text-white"
                  />
                </div>

                <h3 className="mt-16 text-xl font-medium">
                  {point}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/30">
                  Practical solutions designed around your business
                  objectives and real-world requirements.
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Our approach
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              From problem
              <br />
              <span className="text-white/30">
                to possibility.
              </span>
            </h2>
          </div>

          <div className="mt-20 grid border-l border-t border-white/10 md:grid-cols-4">

            {[
              {
                number: "01",
                title: "Discover",
                text: "Understand your business, users and the problem we're solving.",
              },
              {
                number: "02",
                title: "Define",
                text: "Turn insights into a clear strategy, scope and technical direction.",
              },
              {
                number: "03",
                title: "Build",
                text: "Design and develop the solution with quality and scalability in mind.",
              },
              {
                number: "04",
                title: "Evolve",
                text: "Measure, improve and continuously adapt the product as you grow.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="border-b border-r border-white/10 p-7 md:min-h-75 md:p-9"
              >
                <span className="text-xs tracking-[0.2em] text-white/25">
                  {step.number}
                </span>

                <h3 className="mt-20 text-2xl font-medium">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/35">
                  {step.text}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}

      <section className="border-t border-white/10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.5fr_1fr]">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Technology
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-tight md:text-4xl">
              Tools that
              <br />
              move ideas forward.
            </h2>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {service.technologies.map((technology, index) => (
              <motion.div
                key={technology}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/50 transition hover:border-white/30 hover:bg-white hover:text-black"
              >
                {technology}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden border-t border-white/10 px-6 py-32 lg:px-8">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="relative mx-auto max-w-5xl text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Have a project in mind?
          </p>

          <h2 className="mt-7 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Let's make it
            <br />
            <span className="text-white/30">
              happen.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/40">
            Tell us what you're trying to build. We'll help you
            figure out the right strategy, technology and next step.
          </p>

          <Link
            to="/#contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-black"
          >
            Start a conversation

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>
      </section>

    </main>
  );
}

export default ServiceDetails;
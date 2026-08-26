import { motion } from "framer-motion";
import {
  Target,
  Layers3,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    number: "01",
    title: "Business-first thinking",
    description:
      "We start with the problem, not the technology. Every recommendation is connected to a real business objective.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Strategy before code",
    description:
      "We define what should be built and why before investing time and resources into development.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Design-led development",
    description:
      "Great engineering deserves great experiences. Our design and engineering teams work together from the beginning.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Built to scale",
    description:
      "We build with the future in mind, creating systems that can evolve as your users and business grow.",
  },
];

function WhyUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080808] px-6 py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-white/40" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Why CHIKLATI
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            More than a technology vendor.
            <br />
            <span className="text-white/30">
              A partner for what's next.
            </span>
          </h2>
        </motion.div>

        {/* Reasons */}
        <div className="mt-20 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                initial={{
                  opacity: 0,
                  y: 40,
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
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group relative min-h-90 border-b border-r border-white/10 p-8 transition-colors duration-500 hover:bg-white/3 md:p-10"
              >

                {/* Top */}
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.2em] text-white/25">
                    {reason.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                    <Icon size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-24">

                  <h3 className="text-xl font-medium tracking-tight">
                    {reason.title}
                  </h3>

                  <p className="mt-5 text-sm leading-6 text-white/40 transition-colors duration-500 group-hover:text-white/55">
                    {reason.description}
                  </p>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-24 overflow-hidden rounded-3xl border border-white/10 bg-white/2.5 p-8 md:p-14"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/30">
                Our philosophy
              </p>

              <p className="mt-6 text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                Don't build more technology.
                <br />
                <span className="text-white/35">
                  Build better solutions.
                </span>
              </p>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/40 md:text-base">
              Technology should make businesses simpler, faster and
              more capable. That's the standard we bring to every
              engagement.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyUs;
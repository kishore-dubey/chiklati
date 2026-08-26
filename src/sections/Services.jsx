import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Lightbulb,
  Palette,
  Code2,
  Smartphone,
  Settings2,
  BarChart3,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Technology Consulting",
    description:
      "We help businesses make smarter technology decisions with clear strategy, architecture and actionable roadmaps.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Product Strategy",
    description:
      "From idea validation to MVP planning, we turn business concepts into focused and scalable digital products.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "UI / UX Design",
    description:
      "We design intuitive digital experiences that balance user needs, business goals and visual excellence.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Web Development",
    description:
      "High-performance websites and web applications built for speed, scalability and long-term growth.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile experiences for iOS and Android that users love to engage with.",
    icon: Smartphone,
  },
  {
    number: "06",
    title: "Custom Software",
    description:
      "Powerful software solutions built around your unique workflows, operations and business requirements.",
    icon: Settings2,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2 lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-white/40" />

              <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                What we do
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Technology that
              <br />
              <span className="text-white/35">
                moves business forward.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-lg text-base leading-7 text-white/45 md:text-lg"
          >
            From strategy and product discovery to design and
            engineering, we help companies turn complex problems
            into meaningful digital experiences.
          </motion.p>

        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                variants={cardVariants}
                className="group relative min-h-90 overflow-hidden border-b border-r border-white/10 p-8 transition-colors duration-500 hover:bg-white/[0.035] md:p-10"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                {/* Number */}
                <div className="relative flex items-start justify-between">
                  <span className="text-sm font-medium text-white/25 transition-colors duration-300 group-hover:text-white/60">
                    {service.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                    <Icon size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-24">

                  <h3 className="text-2xl font-medium tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-6 text-white/40 transition-colors duration-500 group-hover:text-white/55">
                    {service.description}
                  </p>

                </div>

                {/* Bottom Arrow */}
                <div className="absolute bottom-8 right-8">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default Services;
import { motion } from "framer-motion";
import {
  Search,
  Route,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, users, challenges and goals before recommending a solution.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We define the right technology approach, product roadmap, architecture and priorities.",
    icon: Route,
  },
  {
    number: "03",
    title: "Design",
    description:
      "We turn ideas into intuitive user experiences, interfaces and prototypes that are built to perform.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Build",
    description:
      "Our engineering team transforms the validated concept into reliable, scalable software.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We test, optimize and deploy your product with a focus on performance, security and reliability.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Scale",
    description:
      "After launch, we help you improve, maintain and scale your technology as your business grows.",
    icon: TrendingUp,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
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

function Process() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-[#080808] px-6 py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-white/40" />

              <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                Our approach
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              From idea to impact.
              <br />
              <span className="text-white/30">
                One step at a time.
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
            Great digital products aren't built by jumping
            straight into code. We follow a structured process
            that connects business strategy, user experience
            and technology.
          </motion.p>

        </div>

        {/* Process Line */}
        <div className="relative mt-24">

          {/* Background Line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/10 lg:block" />

          {/* Animated Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-0 right-0 top-8 hidden h-px origin-left bg-white/30 lg:block"
          />

          {/* Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6"
          >
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="group relative"
                >

                  {/* Number Circle */}
                  <div className="relative z-10 mb-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-[#080808] transition-all duration-500 group-hover:border-white/40 group-hover:bg-white group-hover:text-black">
                    <Icon
                      size={20}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Number */}
                  <div className="mb-4 text-xs font-medium tracking-[0.2em] text-white/25">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-6 text-white/40">
                    {step.description}
                  </p>

                  {/* Arrow */}
                  {step.number !== "06" && (
                    <ArrowRight
                      size={16}
                      className="mt-6 text-white/20 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white/60"
                    />
                  )}

                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-white/10 pt-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <p className="max-w-2xl text-xl leading-relaxed text-white/60 md:text-2xl">
              Whether you need strategic guidance or a complete
              digital product, we can meet you wherever you are.
            </p>

            <a
              href="#contact"
              className="group flex shrink-0 items-center gap-3 text-sm font-medium"
            >
              Start with a conversation

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Process;
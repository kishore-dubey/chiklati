import { motion } from "framer-motion";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "React Native",
  "iOS",
  "Android",
  "AWS",
  "PostgreSQL",
  "MongoDB",
  "AI",
  "APIs",
  "Cloud",
];

function Technologies() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#050505] py-20">

      {/* Heading */}
      <div className="mx-auto mb-12 max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Technology ecosystem
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              The right tools for the job.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/35">
            We choose technology based on your product,
            business requirements and long-term goals — not trends.
          </p>
        </motion.div>

      </div>

      {/* Marquee 1 */}
      <div className="relative flex overflow-hidden border-y border-white/10 py-6">

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex shrink-0 items-center gap-4 whitespace-nowrap"
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex items-center gap-4"
            >
              <span className="text-2xl font-medium tracking-tight text-white/25 transition-colors duration-300 hover:text-white/70 md:text-4xl">
                {tech}
              </span>

              <span className="text-white/15">
                •
              </span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Bottom Text */}
      <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-white/20">
          Strategy · Design · Engineering · Cloud · AI
        </p>
      </div>

    </section>
  );
}

export default Technologies;
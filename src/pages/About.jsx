import { motion } from "framer-motion";

function About() {
  return (
    <main className="bg-[#050505] px-6 pb-32 pt-40 text-white lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/40" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              About CHIKLATI
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
            We believe
            <br />
            <span className="text-white/30">
              technology should work for people.
            </span>
          </h1>
        </motion.div>

        {/* Story */}
        <div className="mt-24 grid gap-12 border-t border-white/10 pt-16 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              Our perspective
            </p>

            <h2 className="mt-6 text-3xl font-medium leading-tight md:text-5xl">
              Technology isn't the destination.
              <br />
              <span className="text-white/30">
                It's the enabler.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="space-y-6 text-sm leading-7 text-white/40 md:text-base"
          >
            <p>
              CHIKLATI works with ambitious businesses to solve
              meaningful problems through technology.
            </p>

            <p>
              We bring together business thinking, product strategy,
              design and engineering to create digital experiences
              that are useful, scalable and built for the long term.
            </p>

            <p>
              Sometimes that means helping a team choose the right
              technology. Sometimes it means designing and building
              an entire product from the ground up.
            </p>
          </motion.div>

        </div>

        {/* Principles */}
        <div className="mt-24 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">

          {[
            ["01", "Think clearly", "Understand the problem before solving it."],
            ["02", "Build deliberately", "Choose technology with purpose."],
            ["03", "Create impact", "Measure success by business outcomes."],
          ].map(([number, title, text]) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#050505] p-8 md:p-10"
            >
              <span className="text-xs text-white/25">
                {number}
              </span>

              <h3 className="mt-16 text-xl font-medium">
                {title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/35">
                {text}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </main>
  );
}

export default About;
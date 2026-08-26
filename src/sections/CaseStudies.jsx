import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "FinTech · Product Design · Development",
    title: "A smarter financial experience.",
    description:
      "A modern digital platform designed to simplify financial management and give users a clearer view of their money.",
    tags: ["Product Strategy", "UI/UX", "Web App"],
    gradient:
      "from-blue-500/30 via-indigo-500/10 to-transparent",
  },
  {
    number: "02",
    category: "Healthcare · Mobile · Technology",
    title: "Healthcare, made more accessible.",
    description:
      "A patient-first mobile experience connecting users with healthcare services through a simple and intuitive digital journey.",
    tags: ["Mobile App", "UX Design", "iOS & Android"],
    gradient:
      "from-emerald-500/25 via-teal-500/10 to-transparent",
  },
  {
    number: "03",
    category: "SaaS · Strategy · Engineering",
    title: "From complex workflow to simple software.",
    description:
      "A scalable SaaS platform that transformed complex operational processes into one streamlined digital workspace.",
    tags: ["Consulting", "SaaS", "Custom Software"],
    gradient:
      "from-violet-500/30 via-purple-500/10 to-transparent",
  },
];

function CaseStudies() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-white/40" />

              <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                Selected work
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Ideas into
              <br />
              <span className="text-white/30">
                real products.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-md text-base leading-7 text-white/40 md:text-lg"
          >
            A glimpse into how strategy, design and engineering
            come together to solve real business problems.
          </motion.p>

        </div>

        {/* Projects */}
        <div className="space-y-8">

          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{
                opacity: 0,
                y: 60,
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
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/2"
            >

              {/* Gradient */}
              <div
                className={`pointer-events-none absolute inset-0 bg-linear-to-br ${project.gradient} opacity-40 transition-opacity duration-700 group-hover:opacity-70`}
              />

              <div className="relative grid min-h-105 lg:grid-cols-2">

                {/* Visual */}
                <div className="relative min-h-75 overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">

                  {/* Abstract Product UI */}
                  <div className="absolute inset-10 overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]">

                    {/* Browser Header */}
                    <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/10" />
                      <span className="h-2 w-2 rounded-full bg-white/10" />
                    </div>

                    {/* Fake Dashboard */}
                    <div className="grid h-[calc(100%-40px)] grid-cols-[80px_1fr]">

                      <div className="border-r border-white/10 p-4">
                        <div className="space-y-4">
                          <div className="h-2 w-8 rounded bg-white/20" />
                          <div className="h-2 w-10 rounded bg-white/10" />
                          <div className="h-2 w-7 rounded bg-white/10" />
                          <div className="h-2 w-9 rounded bg-white/10" />
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="h-3 w-28 rounded bg-white/20" />

                        <div className="mt-6 grid grid-cols-2 gap-3">
                          <div className="h-20 rounded-lg border border-white/10 bg-white/3" />
                          <div className="h-20 rounded-lg border border-white/10 bg-white/3" />
                        </div>

                        <div className="mt-3 h-28 rounded-lg border border-white/10 bg-white/3" />

                        <div className="mt-3 flex gap-3">
                          <div className="h-8 flex-1 rounded bg-white/10" />
                          <div className="h-8 w-20 rounded bg-white/10" />
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Project Number */}
                  <div className="absolute bottom-8 left-8 text-xs tracking-[0.2em] text-white/30">
                    {project.number}
                  </div>

                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-8 md:p-12">

                  <div>

                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                      {project.category}
                    </p>

                    <h3 className="mt-8 max-w-lg text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-6 max-w-lg text-sm leading-7 text-white/40 md:text-base">
                      {project.description}
                    </p>

                  </div>

                  {/* Tags */}
                  <div className="mt-10 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="mt-10 flex justify-end">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight
                        size={19}
                        className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>

                  </div>

                </div>

              </div>
            </motion.article>
          ))}

        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3.5 text-sm text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white hover:text-black"
          >
            View all projects

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default CaseStudies;
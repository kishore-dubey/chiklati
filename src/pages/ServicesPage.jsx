import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Lightbulb,
  BarChart3,
  Palette,
  Code2,
  Smartphone,
  Settings2,
} from "lucide-react";

const services = [
  {
    slug: "technology-consulting",
    number: "01",
    title: "Technology Consulting",
    description:
      "Make confident technology decisions with architecture guidance, technical roadmaps and practical recommendations.",
    icon: Lightbulb,
  },
  {
    slug: "product-strategy",
    number: "02",
    title: "Product Strategy",
    description:
      "Turn ideas into focused product roadmaps with clear priorities, user journeys and business objectives.",
    icon: BarChart3,
  },
  {
    slug: "ui-ux-design",
    number: "03",
    title: "UI / UX Design",
    description:
      "Create digital experiences that are intuitive, engaging and aligned with your users and business.",
    icon: Palette,
  },
  {
    slug: "web-development",
    number: "04",
    title: "Web Development",
    description:
      "Build fast, scalable and reliable websites and web applications using modern technologies.",
    icon: Code2,
  },
  {
    slug: "mobile-app-development",
    number: "05",
    title: "Mobile App Development",
    description:
      "Design and build mobile applications for iOS and Android with a focus on usability and performance.",
    icon: Smartphone,
  },
  {
    slug: "custom-software",
    number: "06",
    title: "Custom Software",
    description:
      "Build software around your specific workflows, operations and business requirements.",
    icon: Settings2,
  },
];

function ServicesPage() {
  return (
    <main className="bg-[#050505] px-6 pb-32 pt-40 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/40" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Services
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
            Technology
            <br />

            <span className="text-white/30">
              with purpose.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/40 md:text-lg">
            From technology strategy to complete digital products,
            we help businesses turn complex challenges into
            simple, scalable solutions.
          </p>
        </motion.div>

        {/* Services */}
        <div className="mt-24 grid border-l border-t border-white/10 md:grid-cols-2">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="border-b border-r border-white/10"
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative block min-h-95 overflow-hidden p-8 transition-colors duration-500 hover:bg-white/3 md:p-12"
                >

                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <span className="text-xs tracking-[0.2em] text-white/25">
                      {service.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-24 max-w-lg">
                    <h2 className="text-3xl font-medium tracking-tight">
                      {service.title}
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-white/40 md:text-base">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-10 right-10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </div>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-700 group-hover:w-full" />

                </Link>
              </motion.div>
            );
          })}

        </div>
      </div>
    </main>
  );
}

export default ServicesPage;
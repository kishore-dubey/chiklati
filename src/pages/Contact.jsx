import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  MapPin,
  PhoneCall
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 lg:px-8"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="border-b border-white/10 pb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Start a project
          </p>

          <h2 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
            Have an idea?
            <br />
            <span className="text-white/30">
              Let's build it.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/40 md:text-lg">
            Whether you need strategic guidance, a new digital
            product or a complete software solution, we'd love
            to hear what you're working on.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid gap-16 pt-20 lg:grid-cols-[0.7fr_1.3fr]">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-medium">
              Let's talk.
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
              Tell us a little about your business and what
              you're trying to build. We'll get back to you
              with the next steps.
            </p>

            {/* Email */}
            <a
              href="mailto:contact@chiklati.com"
              className="group mt-10 flex items-center gap-4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                <Mail size={17} />
              </div>

              <div>
                <p className="text-xs text-white/25">
                  Email
                </p>

                <p className="mt-1 text-sm text-white/60 transition-colors group-hover:text-white">
                  contact@chiklati.com
                </p>
              </div>
              
            </a>
            {/* Mobile */ }
             <a
              href="mailto:contact@chiklati.com"
              className="group mt-10 flex items-center gap-4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                <PhoneCall size={17} />
              </div>

              <div>
                <p className="text-xs text-white/25">
                 Mobile
                </p>

                <p className="mt-1 text-sm text-white/60 transition-colors group-hover:text-white">
                  +971542969786
                </p>
              </div>
              
            </a>
            {/* Location */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10">
                <MapPin size={17} className="text-white/50" />
              </div>

              <div>
                <p className="text-xs text-white/25">
                  Location
                </p>

                <p className="mt-1 text-sm text-white/60">
                  India · Working globally
                </p>
              </div>
            </div>

            {/* Chat */}
            <a
              href="#"
              className="group mt-6 flex items-center gap-4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                <MessageCircle size={17} />
              </div>

              <div>
                <p className="text-xs text-white/25">
                  Let's connect
                </p>

                <p className="mt-1 text-sm text-white/60 transition-colors group-hover:text-white">
                  Start a conversation
                </p>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-8"
          >

            {/* Name + Email */}
            <div className="grid gap-8 md:grid-cols-2">

              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Your name
                </label>

                <input
                  type="text"
                  placeholder="your name"
                  className="mt-4 w-full border-b border-white/10 bg-transparent pb-4 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-white/40"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Work email
                </label>

                <input
                  type="email"
                  placeholder="xyz@company.com"
                  className="mt-4 w-full border-b border-white/10 bg-transparent pb-4 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-white/40"
                />
              </div>

            </div>

            {/* Company */}
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-white/30">
                Company
              </label>

              <input
                type="text"
                placeholder="Your company"
                className="mt-4 w-full border-b border-white/10 bg-transparent pb-4 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-white/40"
              />
            </div>

            {/* Service */}
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-white/30">
                What can we help with?
              </label>

              <select
                defaultValue=""
                className="mt-4 w-full border-b border-white/10 bg-[#050505] pb-4 text-sm text-white/50 outline-none focus:border-white/40"
              >
                <option value="" disabled>
                  Select a service
                </option>

                <option value="consulting">
                  Technology Consulting
                </option>

                <option value="strategy">
                  Product Strategy
                </option>

                <option value="design">
                  UI / UX Design
                </option>

                <option value="web">
                  Web Development
                </option>

                <option value="mobile">
                  Mobile App Development
                </option>

                <option value="software">
                  Custom Software
                </option>

              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-white/30">
                Project budget
              </label>

              <select
                defaultValue=""
                className="mt-4 w-full border-b border-white/10 bg-[#050505] pb-4 text-sm text-white/50 outline-none focus:border-white/40"
              >
                <option value="" disabled>
                  Select budget range
                </option>

                <option value="under-10">
                  Under ₹10 Lakhs
                </option>

                <option value="10-25">
                  ₹10L – ₹25L
                </option>

                <option value="25-50">
                  ₹25L – ₹50L
                </option>

                <option value="50-plus">
                  ₹50L+
                </option>

                <option value="discuss">
                  Let's discuss
                </option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-white/30">
                Tell us about your project
              </label>

              <textarea
                rows="4"
                placeholder="What are you trying to build?"
                className="mt-4 w-full resize-none border-b border-white/10 bg-transparent pb-4 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-white/40"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90"
            >
              Start a conversation

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
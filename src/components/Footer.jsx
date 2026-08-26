import { ArrowUpRight } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Our Approach", href: "#approach" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Technology Consulting", href: "#services" },
    { label: "Product Strategy", href: "#services" },
    { label: "UI / UX Design", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "Mobile Development", href: "#services" },
  ],
};

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 pb-8 pt-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Big CTA */}
        <div className="border-b border-white/10 pb-20">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/25">
                Ready when you are
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Let's build something
                <br />
                <span className="text-white/30">meaningful.</span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="group flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90"
            >
              Start a conversation
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-14 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-semibold tracking-[-0.04em]">
              chiklati<span className="text-white/30">.</span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-6 text-white/35">
              Technology consulting and digital product development for
              ambitious businesses ready to build what's next.
            </p>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
              >
                <FaTwitter size={16} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              Company
            </p>

            <div className="mt-6 space-y-4">
              {footerLinks.company.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block w-fit text-sm text-white/45 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              Services
            </p>

            <div className="mt-6 space-y-4">
              {footerLinks.services.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block w-fit text-sm text-white/45 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/25 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Chiklati. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white/60">
              Privacy Policy
            </a>

            <a href="#" className="transition-colors hover:text-white/60">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

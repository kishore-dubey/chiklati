import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Services",
    to: "/services",
  },
  {
    label: "Approach",
    to: "/#approach",
  },
  {
    label: "Work",
    to: "/#work",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <NavLink
            to="#"
            onClick={closeMenu}
            className="relative z-50 text-xl font-semibold tracking-[-0.04em]"
          >
            chiklati<span className="text-white/30">.</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `${isActive ? " border-b-2 border-blue-500 pb-1" : " "} text-sm text-white/45 transition-colors duration-300 hover:text-white`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          {/* India + UAE */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* India */}
            <div className="flex items-center gap-2">
              <img
                src="/flags/india.png"
                alt="India"
                className="h-4 w-6 rounded-xs object-cover"
              />

              <span className="text-xs text-white/50">India</span>
            </div>

            <span className="text-white/20">·</span>

            {/* UAE */}
            <div className="flex items-center gap-2">
              <img
                src="/flags/UAE.png"
                alt="UAE"
                className="h-4 w-6 rounded-xs object-cover"
              />

              <span className="text-xs text-white/50">UAE</span>
            </div>
          </div>
          {/* Desktop CTA */}
          <NavLink
            to="/contact"
            className="group hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white hover:text-black md:flex"
          >
            Let's talk
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </NavLink>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 z-40 bg-[#050505] px-6 pt-28 md:hidden"
          >
            <nav className="flex flex-col">
              {links.map((link, index) => (
                <motion.NavLink
                  key={link.label}
                  to={link.to}
                  onClick={closeMenu}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="border-b border-white/10 py-5 text-3xl font-medium tracking-tight"
                >
                  {link.label}
                </motion.NavLink>
              ))}

              <motion.NavLink
                to="#contact"
                onClick={closeMenu}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                className="mt-8 flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black"
              >
                Let's talk
                <ArrowUpRight size={16} />
              </motion.NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

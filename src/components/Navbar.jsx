import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "../data/content";
import Button from "./Button";
import logoDark from "../assets/logo-dark.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgb(var(--color-line))]" : ""
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link to="/" className="shrink-0">
          <img src={logoDark} alt="SOPConnect Consultancy" className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `group relative py-1 text-[15px] font-medium transition-colors ${
                  isActive ? "text-primary" : "text-ink-soft hover:text-primary"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute -bottom-[3px] left-0 h-[2px] w-full origin-left bg-secondary transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" variant="dark" withArrow>
            Make an Enquiry
          </Button>
        </div>

        <button
          className="relative flex h-8 w-8 items-center justify-center text-primary lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <Menu
            size={26}
            className={`absolute transition-all duration-200 ease-out ${
              open ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
            }`}
            aria-hidden="true"
          />
          <X
            size={26}
            className={`absolute transition-all duration-200 ease-out ${
              open ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
            }`}
            aria-hidden="true"
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-paper lg:hidden"
          >
            <nav className="flex flex-col px-6 py-4 sm:px-8">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `border-b border-line/70 py-3 text-base font-medium last:border-none ${
                      isActive ? "text-primary" : "text-ink-soft"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button to="/contact" variant="dark" withArrow className="mt-4 justify-center">
                Make an Enquiry
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

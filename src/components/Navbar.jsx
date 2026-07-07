import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import navLinks from "../../data/navLinks";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}

            <NavLink to="/" className="flex items-center gap-3">

              <div className="h-12 w-12 rounded-xl bg-blue-700 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                MC
              </div>

              <div>

                <h2 className="font-bold text-xl text-slate-900 leading-none">
                  Modern Concepts
                </h2>

                <p className="text-xs text-slate-500">
                  Digital Transformation & Media Solutions
                </p>

              </div>

            </NavLink>

            {/* Desktop */}

            <nav className="hidden lg:flex items-center gap-8">

              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium transition ${
                      isActive
                        ? "text-blue-700"
                        : "text-slate-700 hover:text-blue-700"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}

            </nav>

            {/* CTA */}

            <div className="hidden lg:block">

              <button className="rounded-full bg-blue-700 hover:bg-blue-800 px-6 py-3 text-white font-semibold transition">

                Book Consultation

              </button>

            </div>

            {/* Mobile */}

            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={30} />
            </button>

          </div>
        </div>
      </header>

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: .30 }}
            className="fixed inset-0 bg-white z-50"
          >

            <div className="flex justify-between items-center px-6 h-20 border-b">

              <h2 className="font-bold text-xl">
                Modern Concepts
              </h2>

              <button
                onClick={() => setMobileOpen(false)}
              >
                <X size={30} />
              </button>

            </div>

            <div className="flex flex-col p-8 gap-8">

              {navLinks.map((item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `text-xl font-semibold ${
                      isActive
                        ? "text-blue-700"
                        : "text-slate-800"
                    }`
                  }
                >
                  {item.title}
                </NavLink>

              ))}

              <button className="mt-6 bg-blue-700 text-white rounded-full py-4">

                Book Consultation

              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}
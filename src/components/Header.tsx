import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Wallet } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Marketplace", to: "/marketplace" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none"
    >
      <div
        className={`w-full max-w-6xl pointer-events-auto flex items-center justify-between px-4 md:px-6 h-14 md:h-16 rounded-full transition-all duration-500 border ${scrolled
            ? "bg-background/80 backdrop-blur-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] border-border/50 scale-[0.98]"
            : "bg-background/50 backdrop-blur-xl shadow-sm border-border/30"
          }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3 font-heading font-black text-xl md:text-2xl tracking-tighter text-foreground"
        >
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-accent flex items-center justify-center text-accent-foreground shadow-lg shadow-accent/30 group-hover:rotate-[15deg] transition-transform duration-300">
            <Wallet size={20} className="md:w-6 md:h-6" />
          </div>
          <span className="hidden sm:block">
            Aurexon<span className="text-accent">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 p-1 bg-background/40 backdrop-blur-lg rounded-full border border-border/40 shadow-inner">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onMouseEnter={() => setHoveredLink(link.to)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative px-6 py-2.5 text-sm font-heading font-bold transition-colors duration-300 rounded-full ${isActive ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-accent rounded-full shadow-lg shadow-accent/40"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                {hoveredLink === link.to && !isActive && (
                  <motion.div
                    layoutId="hoverNav"
                    className="absolute inset-0 bg-foreground/5 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link
            to="/aurexoniq"
            className="hidden sm:flex items-center px-6 py-2.5 font-heading font-bold bg-accent text-accent-foreground transition-all shadow-[4px_4px_0px_black] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] text-[14px] border-2 border-black rounded-full"
          >
            AurexonIQ Engine
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center bg-accent text-accent-foreground border-2 border-black shadow-[3px_3px_0px_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all rounded-full"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[5.5rem] md:top-[6.5rem] left-4 right-4 z-40 lg:hidden pointer-events-auto"
          >
            <div className="bg-background/95 backdrop-blur-3xl border border-border/50 rounded-[28px] p-4 shadow-2xl overflow-hidden">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`flex items-center justify-between text-base font-heading font-bold p-4 rounded-2xl transition-all ${isActive
                          ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                    >
                      {link.label}
                      {isActive && <motion.div layoutId="activeDot" className="w-2 h-2 rounded-full bg-accent-foreground" />}
                    </Link>
                  );
                })}
                <Link
                  to="/aurexoniq"
                  className="mt-4 flex items-center justify-center py-4 text-base font-heading font-black tracking-wide bg-accent text-accent-foreground border-2 border-black shadow-[5px_5px_0px_black] active:shadow-none active:translate-x-[5px] active:translate-y-[5px] transition-all rounded-full"
                >
                  AurexonIQ Engine
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;


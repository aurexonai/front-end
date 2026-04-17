import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-foreground text-primary-foreground border-t-4 border-black pt-16"
    >
      <div className="container-main px-4 sm:px-6 md:px-8">
        {/* Main footer content */}
        <div className="pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Logo & Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="font-heading font-black text-3xl tracking-tighter">
              Aurexon<span className="text-accent">AI.</span>
            </Link>
            <p className="text-sm md:text-base text-primary-foreground/60 leading-relaxed max-w-sm">
              AI-powered marketplace enabling smarter pricing, trusted valuations, and optimized buying and selling decisions instantly.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border-2 border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-black transition-all shadow-[4px_4px_0px_rgba(255,255,255,0.1)] hover:shadow-[4px_4px_0px_black]"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-black text-xs uppercase tracking-[0.2em] mb-8 text-accent">Product</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Marketplace", to: "/marketplace" },
                { label: "Features", to: "/about" },
                { label: "Pricing", to: "/" },
                { label: "Documentation", to: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-primary-foreground/50 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-black text-xs uppercase tracking-[0.2em] mb-8 text-accent">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
                { label: "Research", to: "#" },
                { label: "Legal", to: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-primary-foreground/50 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6">
            <h4 className="font-heading font-black text-xs uppercase tracking-[0.2em] text-accent">Intelligence Report</h4>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Subscribe to get prioritized market insights and AI development updates before they hit the public.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your terminal email"
                className="w-full px-5 py-4 rounded-xl bg-primary-foreground/5 border-2 border-primary-foreground/10 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-all"
              />
              <button className="w-full px-5 py-4 rounded-xl bg-accent text-accent-foreground font-black text-sm uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_black] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all">
                Access Intelligence
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-10 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="text-xs font-bold text-primary-foreground/20">
              © {new Date().getFullYear()} AUREXONAI SYSTEMS
            </span>
            <div className="flex gap-6 text-[10px] uppercase font-black tracking-widest text-primary-foreground/20">
              <a href="#" className="hover:text-accent transition-colors">Privacy Proto</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Ops</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-accent">All Systems Operational</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    // pt-20 gives room for the image that overflows above the card
    <section className="bg-background font-body pt-20 pb-20">
      <div className="container-main">
        {/* Card — overflow-visible so right image can pop above the top edge */}
        <div className="relative bg-primary rounded-[2.5rem] sm:rounded-[3rem] px-5 sm:px-8 py-10 sm:py-12 md:px-12 md:py-14 lg:px-16 overflow-visible min-h-[220px]">

          {/* Clipped background glows (own overflow-hidden wrapper) */}
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />
          </div>

          {/* ── Left text ── */}
          <div className="relative z-10 lg:w-[56%] text-center md:text-left flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-[10px] font-black tracking-widest uppercase mb-6">
                <Zap size={12} />
                Get Started Today
              </div>

              <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-white leading-[1.1] tracking-tight mb-5 px-2 sm:px-0">
                Ready to Transform Your{" "}
                <span className="text-accent">Marketplace</span>{" "}
                Experience?
              </h2>

              <p className="text-white/50 font-body text-xs sm:text-sm leading-relaxed mb-8 max-w-sm sm:max-w-md">
                Join thousands of sellers and buyers using AI to make smarter decisions every day. Start optimizing your marketplace operations today.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/marketplace"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-accent-foreground font-heading font-black text-xs tracking-widest uppercase border-2 border-black"
                >
                  Schedule a Demo
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-white/20 text-white font-heading font-black text-[10px] sm:text-xs tracking-widest uppercase hover:border-white/40 transition-colors duration-200"
                >
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          </div>

          {/* ── Right image — overflows above the card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block absolute right-14 lg:right-20"
            style={{ top: '-80px', bottom: '0' }}
          >
            {/* Placeholder box — full height of overflow + card */}
            <div className="h-full w-[300px] lg:w-[340px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-accent/30">
                <Zap size={22} className="text-accent" />
              </div>
              <p className="text-white/30 text-xs font-body tracking-widest uppercase">Image Placeholder</p>
              <p className="text-white/20 text-[10px] font-body">Recommended: 600 × 400px</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;

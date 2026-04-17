import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

/**
 * AboutSection using the "Aura reading" style layout:
 * Top: Label and massive right-aligned heading
 * Bottom: Grid of immersive feature cards with images and a final CTA card
 */
const AboutSection = () => {
  return (
    <section className="section-padding bg-background w-full overflow-hidden">
      <div className="container-main">
        
        {/* TOP AREA: Label & Massive Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          <div className="lg:col-span-4 lg:pt-3">
            <div className="font-heading font-black text-xs md:text-sm uppercase tracking-[0.2em] text-foreground/60 flex items-center gap-2">
               <span className="text-accent">/</span> About
            </div>
          </div>
          <div className="lg:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-[2rem] font-heading font-medium text-foreground leading-[1.3] mb-6 tracking-tight"
            >
                Redefining Digital Commerce <span className="bg-gradient-to-r from-accent to-emerald-400 bg-clip-text text-transparent font-semibold">with AI-Driven Intelligence</span>
              </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed tracking-wide opacity-90"
            >
              AurexonAI combines marketplace functionality with AI-powered pricing, valuation, and insights, enabling users to buy and sell smarter with data-driven confidence, transparency, and efficiency.
            </motion.p>
          </div>
        </div>

        {/* BOTTOM AREA: Triple Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-7xl">
          
          {/* Card 1: Rose Glow / Market Glow */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative aspect-[1.1/1] sm:aspect-[1.15/1] overflow-hidden rounded-[2.5rem] bg-rose-100 border-2 border-transparent hover:border-accent/30 transition-all duration-500 shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800" 
              alt="Market Glow" 
              className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-900/20 to-transparent" />
            <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-between text-white">
               <h3 className="text-xl md:text-2xl font-heading font-black tracking-wide">Smart Pricing Intelligence</h3>
               <p className="text-xs md:text-sm opacity-80 max-w-xs leading-relaxed font-medium tracking-wide">
                  AI analyzes demand, trends, and product data to recommend optimal pricing, helping sellers maximize value and buyers avoid overpaying.
               </p>
            </div>
          </motion.div>

          {/* Card 2: Indigo Insight / Strategic Insight */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative aspect-[1.1/1] sm:aspect-[1.15/1] overflow-hidden rounded-[2.5rem] bg-indigo-100 border-2 border-transparent hover:border-accent/30 transition-all duration-500 shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=800" 
              alt="Strategic Insight" 
              className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/20 to-transparent" />
            <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-between text-white">
               <h3 className="text-xl md:text-2xl font-heading font-black tracking-wide">Product Value & Trust Scoring</h3>
               <p className="text-xs md:text-sm opacity-80 max-w-xs leading-relaxed font-medium tracking-wide">
                  Evaluate product quality and market worth with AI-generated trust scores and valuation insights, ensuring reliable and informed purchasing decisions.
               </p>
            </div>
          </motion.div>

          {/* Card 3: Black CTA Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative aspect-[1.1/1] sm:aspect-[1.15/1] bg-[#0A0A0A] p-7 md:p-9 flex flex-col justify-end rounded-[2.5rem] border-2 border-black shadow-[8px_8px_0px_black]"
          >
            <div className="flex flex-col items-start gap-5 md:gap-6 relative z-10">
               <h3 className="text-xl md:text-[1.8rem] font-heading font-black text-white leading-[1.2] tracking-wide mb-1">
                 Market Insights & Decision Support
               </h3>
               <p className="text-xs md:text-sm text-white/70 max-w-xs leading-relaxed font-medium tracking-wide">
                  Leverage real-time data and AI analytics to navigate market complexities and make commerce decisions with absolute certainty.
               </p>
               <button className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-heading font-black text-[10px] uppercase tracking-[0.1em] border-2 border-black shadow-[4px_4px_0px_white] w-full sm:w-auto justify-center">
                  Get Started
                  <ArrowRight size={14} />
               </button>
            </div>
            
            {/* Background sparkle effect */}
            <div className="absolute top-8 right-8 opacity-20">
               <Sparkles size={40} className="text-accent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

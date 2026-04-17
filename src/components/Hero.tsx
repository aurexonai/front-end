import { motion } from "framer-motion";
import { ArrowUpRight, Apple } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-[100dvh] p-2 sm:p-4 lg:p-3 overflow-hidden flex flex-col bg-background">
      {/* Main Hero Card */}
      <div className="relative flex-1 w-full max-w-[1850px] mx-auto rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] border-[3px] border-black bg-white overflow-hidden flex flex-col pt-10 md:pt-16">
        
        {/* Background Illustration - Scaled for all devices */}
        <div className="absolute inset-x-0 top-0 h-[40%] sm:h-[45%] md:h-[55%] z-0 flex items-center justify-center pointer-events-none opacity-60 px-4 sm:px-6">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            src="/hero-illustration.png" 
            alt="Background" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content Container - Flex distribution for screen fit */}
        <div className="relative z-10 flex-1 flex flex-col justify-end p-4 sm:p-8 md:p-10 lg:p-14">
          
          {/* Text Section - Balanced for mobile screens */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-full lg:max-w-[70%]"
            >
              <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[4rem] font-black text-foreground leading-[0.95] tracking-tight">
                AI-Powered Marketplace for Smarter <br /> Buying & Selling Decisions
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:max-w-[280px] lg:pb-1"
            >
              <p className="text-[9px] sm:text-sm md:text-base lg:text-sm text-muted-foreground font-body leading-snug">
              AurexonAI empowers smarter buying and selling with AI-driven pricing, product evaluation, and real-time market insights—helping users make confident, optimized, and transparent commerce decisions.
              </p>
            </motion.div>
          </div>

          {/* CTA Section - Compact but high impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/aurexoniq">
              <button className="group relative w-full flex items-center justify-between bg-accent border-[3px] border-black rounded-[1.5rem] sm:rounded-[2rem] p-3 sm:p-4 md:p-5 transition-all duration-300 shadow-[0_5px_0_black] hover:shadow-none hover:translate-y-1 active:scale-[0.99] overflow-hidden">
                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 px-1 sm:px-2 md:px-4">
                  <div className="flex flex-col items-start leading-none gap-0.5">
                    <span className="font-heading font-black text-sm sm:text-xl md:text-2xl lg:text-3xl text-black tracking-tight uppercase">
                      AurexonIQ Engine
                    </span>
                  </div>
                </div>
                
                <div className="bg-black/5 p-2 sm:p-2.5 md:p-3 rounded-full border border-black/10 group-hover:bg-black group-hover:text-white transition-all duration-500 mr-1 sm:mr-2">
                  <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 transition-transform duration-500 group-hover:rotate-45" />
                </div>
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

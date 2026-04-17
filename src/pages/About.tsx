import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, XCircle, CheckCircle, Sparkles, Target, Eye, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { icon: Users, value: "50K+", label: "Active Users" },
  { icon: Award, value: "99.2%", label: "AI Accuracy" },
  { icon: Target, value: "180+", label: "Countries" },
  { icon: Eye, value: "10M+", label: "Products Analyzed" },
];

const Counter = ({ value, duration = 2.5 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract number and suffix (e.g., "50K+" -> 50, "K+")
  const numericMatch = value.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = value.replace(/[\d.]+/, "");

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        
        // Easing function: outExpo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(easeProgress * numericValue);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {count >= numericValue 
        ? value 
        : (value.includes(".") ? count.toFixed(1) : Math.floor(count)) + suffix}
    </span>
  );
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Header />

      {/* Unified Page Hero */}
      <section className="relative pt-32 pb-12 px-2 sm:px-4 bg-background overflow-hidden">
        <div className="container-main relative z-10">
          <div className="relative w-full rounded-[2.5rem] md:rounded-[3.5rem] border-[3px] border-black bg-white overflow-hidden p-8 md:p-12 lg:p-16 flex flex-col items-center text-center">
            
            {/* Background Illustration / Elements */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border-2 border-black text-black text-[10px] font-black uppercase tracking-widest mb-6"
            >
              <Sparkles size={14} className="text-black" />
              Our Story & Vision
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative z-10 text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6"
            >
              About <span className="text-accent">AurexonAI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body font-medium"
            >
              Building the future of intelligent commerce — where every price is optimized,
              every seller is verified, and every buyer finds exactly what they need.
            </motion.p>
          </div>
        </div>
      </section>      {/* Mission & Vision */}
      <section className="pt-20 pb-10 md:pt-24 md:pb-16 relative overflow-hidden bg-background px-4">
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center p-6 sm:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-accent/5 border-2 border-black shadow-[6px_6px_0px_black] md:shadow-[8px_8px_0px_black]"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-accent flex items-center justify-center mb-6 border-2 border-black">
                <Target size={24} className="text-accent-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-black text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-body">
                To empower global businesses with intuitive AI-driven tools that eliminate market friction, 
                streamline complex trading operations, and unlock unprecedented levels of growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center p-6 sm:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-secondary/10 border-2 border-black shadow-[6px_6px_0px_black] md:shadow-[8px_8px_0px_black]"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-foreground flex items-center justify-center mb-6 border-2 border-black">
                <Eye size={24} className="text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-black text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-body">
                To become the primary bridge between traditional trade and the intelligent marketplace of tomorrow—where 
                every transaction is powered by clarity, fairness, and predictive intelligence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements / Stats - Neubrutalist Bento Style */}
      <section className="pt-8 md:pt-12 pb-20 md:pb-24 relative overflow-hidden bg-background px-4">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-2 border-black bg-white shadow-[4px_4px_0px_black] md:shadow-[6px_6px_0px_black] transition-all`}
              >
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className={`mb-4 p-2.5 md:p-3 rounded-xl border-2 border-black shadow-[2px_2px_0px_black] md:shadow-[3px_3px_0px_black] transition-colors duration-300 ${i % 2 === 0 ? 'bg-accent' : 'bg-white'}`}>
                    <stat.icon size={18} className="text-black" />
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-heading font-black text-foreground tracking-tighter mb-1">
                      <Counter value={stat.value} />
                    </span>
                    <span className="text-[10px] md:text-xs font-heading font-black text-muted-foreground uppercase tracking-[0.2em]">
                      {stat.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - Redesigned */}
      <section className="section-padding relative overflow-hidden bg-background px-4">
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <div className="section-label mx-auto inline-flex items-center gap-2 mb-6">
              <Sparkles size={14} className="text-accent" />
              Intelligence vs Tradition
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
               Evolving the <span className="text-accent underline decoration-black/10">Marketplace</span>
            </h2>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Center "VS" Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex w-20 h-20 bg-white border-4 border-black rounded-full items-center justify-center font-black text-2xl shadow-[4px_4px_0px_black]">
              VS
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 md:border-4 border-black rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[8px_8px_0px_black] md:shadow-[12px_12px_0px_black] bg-white">
              {/* Traditional */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 md:p-10 lg:p-14 border-b-2 md:border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-stone-50"
              >
                <div className="flex items-center gap-3 mb-8 md:mb-10">
                  <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">Traditional Method</h3>
                </div>
                <div className="space-y-4 md:space-y-6">
                  {[
                    { text: "Manual pricing guesswork", desc: "Sellers set prices based on feeling, not data." },
                    { text: "No seller verification", desc: "Trust is hard to earn and easy to break." },
                    { text: "Static product listings", desc: "Manual updates required for every change." },
                    { text: "Reactive to demand", desc: "You only know what's popular after it sells out." },
                    { text: "Limited market insights", desc: "Navigating in the dark with zero visibility." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 md:gap-4 group">
                      <div className="mt-1 shrink-0 w-6 h-6 rounded-full border-2 border-black/10 flex items-center justify-center group-hover:bg-red-50 transition-colors">
                        <XCircle size={12} className="text-red-400" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm md:text-base">{item.text}</p>
                        <p className="text-xs md:text-sm text-muted-foreground opacity-70">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* AurexonAI */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 md:p-10 lg:p-14 bg-white relative overflow-hidden"
              >
                {/* Subtle tech background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8 md:mb-10">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">AurexonAI Edge</h3>
                    </div>
                    <span className="px-2 md:px-3 py-1 bg-accent border-2 border-black text-[8px] md:text-[10px] font-black uppercase rounded-lg shadow-[2px_2px_0px_black]">Recommended</span>
                  </div>
                  
                  <div className="space-y-4 md:space-y-6">
                    {[
                      { text: "AI-optimized dynamic pricing", desc: "Real-time adjustments to maximize your margins." },
                      { text: "Multi-layer trust verification", desc: "Blockchain-backed seller identity and reliability." },
                      { text: "Smart product recommendations", desc: "Personalized discovery powered by neural networks." },
                      { text: "Predictive demand analytics", desc: "See the trends before they become trends." },
                      { text: "Real-time market intelligence", desc: "A 360-degree view of the global marketplace." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 md:gap-4 group">
                        <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-accent/10 border-2 border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                          <CheckCircle size={12} />
                        </div>
                        <div>
                          <p className="font-bold text-foreground text-sm md:text-base">{item.text}</p>
                          <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Premium Sticker-Badge Style */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
          >
            <div className="max-w-2xl">
              <div className="section-label mb-4">
                <Users size={14} className="text-accent" />
                The Core Team
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-foreground leading-[1.1] tracking-tighter">
                Meet the minds <br />
                <span className="text-accent">behind the machine.</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-sm font-medium leading-relaxed">
              A diverse collective of AI researchers, designers, and market strategists united by one mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {[
              {
                name: "Alex Rivera",
                role: "CEO & Founder",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
                accent: "bg-accent",
              },
              {
                name: "Sarah Chen",
                role: "CTO / AI Architect",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
                accent: "bg-emerald-400",
              },
              {
                name: "Marcus Thorne",
                role: "Head of Growth",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
                accent: "bg-sky-400",
              },
              {
                name: "Elena Rodriguez",
                role: "Head of Product",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
                accent: "bg-rose-400",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.21, 0.45, 0.32, 0.9] }}
                className="relative"
              >
                {/* Member Image Card */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border-[3px] border-black shadow-[10px_10px_0px_black] transition-all duration-500 bg-white">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  
                  {/* Floating Name Badge (Sticker Style) */}
                  <div className="absolute bottom-4 right-4 z-20">
                    <div className="bg-white border-[3px] border-black px-4 py-3 shadow-[4px_4px_0px_black] -rotate-1 transition-transform duration-300">
                      <h3 className="font-heading font-black text-base text-foreground whitespace-nowrap">
                        {member.name}
                      </h3>
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </motion.div>
  );
};

export default About;

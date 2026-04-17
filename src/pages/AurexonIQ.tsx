import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Target, TrendingUp, Shield, Zap, Users, Award, CheckCircle, Brain, Cpu, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Target,
    title: "Instant Product Matching",
    description: "AI-powered recommendations that connect buyers with the perfect products based on their preferences and behavior."
  },
  {
    icon: TrendingUp,
    title: "Smart Pricing Engine",
    description: "Dynamic pricing that adapts to market conditions, maximizing profits while staying competitive."
  },
  {
    icon: Shield,
    title: "Trust Verification",
    description: "Advanced algorithms that verify product authenticity and seller credibility for secure transactions."
  },
  {
    icon: Zap,
    title: "Real-Time Analytics",
    description: "Live market insights and predictive analytics to make informed buying and selling decisions."
  }
];

const benefits = [
  "Increase sales conversion by up to 40%",
  "Reduce time-to-market for new products",
  "Build customer trust with verified listings",
  "Optimize pricing strategies automatically",
  "Access global market intelligence",
  "Streamline inventory management"
];

const AurexonIQ = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-2 sm:px-4 bg-background overflow-hidden">
        <div className="container-main relative z-10">
          <div className="relative w-full rounded-[2.5rem] md:rounded-[3.5rem] border-[3px] border-black bg-white overflow-hidden p-8 md:p-12 lg:p-16">
            
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle, hsl(var(--accent)) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border-2 border-black text-black text-[10px] font-black uppercase tracking-widest mb-6">
                  <Sparkles size={14} className="text-black" />
                  AI-Powered Commerce Intelligence
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6">
                  Meet <span className="text-accent underline decoration-black/10">AurexonIQ</span> Engine
                </h1>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  The intelligent core of modern e-commerce. Powered by advanced AI, AurexonIQ Engine transforms how businesses and consumers interact with marketplaces, delivering personalized experiences, optimized pricing, and data-driven insights.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://app.aurexonai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-bold border-2 border-black shadow-[4px_4px_0px_black] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all rounded-full"
                  >
                    Launch AurexonIQ Engine
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[500px] flex items-center justify-center"
              >
                {/* Animated background grid */}
                <div className="absolute inset-0 rounded-2xl opacity-10 pointer-events-none overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="400" height="400" fill="url(#grid)" className="text-accent"/>
                  </svg>
                </div>

                {/* Central pulsing core */}
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.9, 1, 0.9],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-accent via-accent to-accent/70 shadow-2xl shadow-accent/60 z-20"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain className="w-16 h-16 text-accent-foreground" />
                  </div>
                </motion.div>

                {/* Extra glow layer for core */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-32 h-32 rounded-full bg-accent/20 blur-xl"
                />

                {/* Outer glow rings */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 0.2, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-44 h-44 rounded-full border-2 border-accent/50"
                />

                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 0.1, 0.6],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                  className="absolute w-56 h-56 rounded-full border-2 border-accent/30"
                />

                {/* Flowing data streams - curved lines with animated dots */}
                <svg
                  className="absolute w-full h-full z-10"
                  viewBox="0 0 500 500"
                  style={{ filter: "drop-shadow(0 0 10px rgba(var(--accent-rgb), 0.3))" }}
                >
                  <defs>
                    <linearGradient id="streamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                      <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="1" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Animated flowing paths */}
                  <motion.path
                    d="M 250 250 Q 350 150 400 100"
                    stroke="url(#streamGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    animate={{
                      strokeDashoffset: [0, -100],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    strokeDasharray="100 100"
                  />

                  <motion.path
                    d="M 250 250 Q 150 150 100 100"
                    stroke="url(#streamGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    animate={{
                      strokeDashoffset: [0, -100],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    strokeDasharray="100 100"
                  />

                  <motion.path
                    d="M 250 250 Q 350 350 400 400"
                    stroke="url(#streamGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    animate={{
                      strokeDashoffset: [0, -100],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    strokeDasharray="100 100"
                  />

                  <motion.path
                    d="M 250 250 Q 150 350 100 400"
                    stroke="url(#streamGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    animate={{
                      strokeDashoffset: [0, -100],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    strokeDasharray="100 100"
                  />

                  {/* Connection dots on paths */}
                  <motion.circle
                    cx="400"
                    cy="100"
                    r="4"
                    fill="hsl(var(--accent))"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      r: [2, 5, 2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.circle
                    cx="100"
                    cy="100"
                    r="4"
                    fill="hsl(var(--accent))"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      r: [2, 5, 2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />

                  <motion.circle
                    cx="400"
                    cy="400"
                    r="4"
                    fill="hsl(var(--accent))"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      r: [2, 5, 2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />

                  <motion.circle
                    cx="100"
                    cy="400"
                    r="4"
                    fill="hsl(var(--accent))"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      r: [2, 5, 2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                  />
                </svg>

                {/* Animated floating particles with organic motion */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -40 + Math.random() * 20, 0],
                      x: [0, -20 + Math.random() * 40, 0],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: (i * 0.15),
                      ease: "easeInOut",
                    }}
                    className={`absolute rounded-full ${
                      i % 3 === 0 ? "w-1 h-1 bg-accent" : i % 3 === 1 ? "w-2 h-2 bg-accent/70" : "w-1.5 h-1.5 bg-accent/50"
                    }`}
                    style={{
                      left: `${35 + Math.random() * 30}%`,
                      top: `${35 + Math.random() * 30}%`,
                    }}
                  />
                ))}

                {/* Additional micro-pulses around center */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`pulse-${i}`}
                    animate={{
                      scale: [0, 1],
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: (i * 0.5),
                      ease: "easeOut",
                    }}
                    className="absolute w-16 h-16 rounded-full border border-accent"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}

                {/* Interactive floating orbs with labels */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute group cursor-pointer"
                  style={{ left: "15%", top: "15%" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="relative w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/60 shadow-lg shadow-accent/50 flex items-center justify-center"
                  >
                    <Sparkles className="w-6 h-6 text-accent-foreground" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 bg-white border-2 border-black rounded-lg px-3 py-1 text-xs font-bold whitespace-nowrap shadow-md"
                  >
                    Smart AI
                  </motion.div>
                </motion.div>

                {/* Interactive floating orbs - Analytics */}
                <motion.div
                  animate={{
                    y: [0, 25, 0],
                    x: [0, -20, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute group cursor-pointer"
                  style={{ right: "12%", bottom: "15%" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="relative w-12 h-12 rounded-full bg-gradient-to-br from-accent/80 to-accent/40 shadow-lg shadow-accent/40 flex items-center justify-center"
                  >
                    <BarChart3 className="w-6 h-6 text-accent-foreground" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full mb-2 bg-white border-2 border-black rounded-lg px-3 py-1 text-xs font-bold whitespace-nowrap shadow-md"
                  >
                    Real-time Data
                  </motion.div>
                </motion.div>

                {/* Interactive floating orbs - Speed */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 25, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute group cursor-pointer"
                  style={{ right: "8%", top: "20%" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="relative w-12 h-12 rounded-full bg-gradient-to-br from-accent/70 to-accent/30 shadow-lg shadow-accent/30 flex items-center justify-center"
                  >
                    <Zap className="w-6 h-6 text-accent-foreground" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute left-full ml-2 bg-white border-2 border-black rounded-lg px-3 py-1 text-xs font-bold whitespace-nowrap shadow-md"
                  >
                    Lightning Fast
                  </motion.div>
                </motion.div>

                {/* Animated scanning line effect */}
                <motion.div
                  animate={{
                    y: [-200, 200],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
                  style={{
                    left: 0,
                    top: "50%",
                  }}
                />

                {/* Shimmer effect overlay */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl pointer-events-none"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="section-label mx-auto">
              <Sparkles size={14} className="text-accent" />
              Core Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6 leading-tight tracking-tight">
              Intelligent Features for <span className="text-accent underline decoration-black/10">Modern Commerce</span>
            </h2>
            <p className="section-subtitle">
              Discover how AurexonIQ Engine revolutionizes e-commerce with cutting-edge AI technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0px_black] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 border border-black/10">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6 leading-tight tracking-tight">
              Transform Your <span className="text-accent underline decoration-black/10">Business Results</span>
            </h2>
            <p className="section-subtitle">
              See the measurable impact of AI-powered commerce intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-xl bg-background border border-border"
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="font-medium text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Overview Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="section-label mx-auto">
              <Zap size={14} className="text-accent" />
              Technology
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6 leading-tight tracking-tight">
              Built on <span className="text-accent underline decoration-black/10">NVIDIA AI</span> Infrastructure
            </h2>
            <p className="section-subtitle">
              Leveraging the world's most advanced AI frameworks for unparalleled performance.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center p-6 rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0px_black]"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">NVIDIA Merlin</h3>
                <p className="text-sm text-muted-foreground">Deep learning recommender systems for instant product matching</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center p-6 rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0px_black]"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">NVIDIA RAPIDS</h3>
                <p className="text-sm text-muted-foreground">GPU-accelerated analytics for real-time market intelligence</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center p-6 rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0px_black]"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">NVIDIA NeMo</h3>
                <p className="text-sm text-muted-foreground">Custom LLMs for listing optimization and insights generation</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent relative overflow-hidden">
        <div className="container-main relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black text-accent-foreground mb-6 leading-tight tracking-tight">
              Ready to Transform Your <span className="underline decoration-black/20">Commerce?</span>
            </h2>
            <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AurexonIQ Engine to power their e-commerce success.
            </p>

            <a
              href="https://app.aurexonai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-black text-white font-bold border-2 border-black shadow-[4px_4px_0px_black] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all rounded-full"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default AurexonIQ;
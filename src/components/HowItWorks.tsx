import { motion } from "framer-motion";
import { ArrowRight, Settings, Target, Coins, PieChart } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "List Product",
    shortTitle: "Upload product details",
    description: "Add product details, images, and preferences to start selling or enable AI-assisted evaluation.",
    bgClass: "bg-primary",
    isAccent: false,
  },
  {
    icon: Target,
    title: "AI Analyzes Data",
    shortTitle: "Run AI analysis",
    description: "AI evaluates market trends, demand signals, and product condition to generate pricing and value insights.",
    bgClass: "bg-accent",
    isAccent: true,
  },
  {
    icon: PieChart,
    title: "Get Smart Insights",
    shortTitle: "Review insights",
    description: "Receive optimized pricing suggestions, trust scores, and recommendations to improve buying or selling decisions.",
    bgClass: "bg-primary",
    isAccent: false,
  },
  {
    icon: Coins,
    title: "Complete Transaction",
    shortTitle: "Proceed to transact",
    description: "Buy or sell confidently using AI-backed guidance for secure and optimized transactions.",
    bgClass: "bg-accent",
    isAccent: true,
  }
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden font-sans">
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="section-label mx-auto">
            <ArrowRight size={14} className="text-accent" />
            Process
          </div>
          <h2 className="section-title">How AurexonAI Works </h2>
          <p className="section-subtitle">
           AI-driven workflows simplify buying and selling with intelligent pricing, evaluation, and real-time decision support.
          </p>
        </motion.div>

        {/* Medium-Large Neubrutalist Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-[1080px] mx-auto px-4 mt-8 pb-10">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative rounded-[2.5rem] p-8 lg:p-10 flex flex-col h-full border-2 border-black shadow-[6px_6px_0px_black] lg:shadow-[8px_8px_0px_black] bg-white"
            >
              
              {/* Header Section */}
              <div className="flex justify-between items-start mb-8 text-left">
                {/* Icon Blob */}
                <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_black] ${step.bgClass}`}>
                  <step.icon size={28} className={`${step.isAccent ? "text-accent-foreground" : "text-primary-foreground"} w-6 h-6 lg:w-7 lg:h-7`} />
                </div>

                {/* Off-axis Brutalist Sticker Number */}
                <div className={`px-4 py-1.5 border-2 border-black shadow-[3px_3px_0px_black] -rotate-3 mt-1 ${step.bgClass}`}>
                  <span className={`font-heading font-black text-[10px] lg:text-xs tracking-widest uppercase ${step.isAccent ? 'text-accent-foreground' : 'text-primary-foreground'}`}>
                    Step 0{index + 1}
                  </span>
                </div>
              </div>

              {/* Text Container */}
              <div className="text-left flex-1 flex flex-col">
                <h3 className="font-heading font-black text-xl lg:text-2xl mb-3 tracking-tight text-foreground">{step.title}</h3>
                
                <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-6 flex-1">
                  {step.description}
                </p>

                {/* Sub-Feature Highlight Box */}
                <div className="bg-accent/10 rounded-[1.5rem] p-5 border-2 border-black border-dashed mt-auto">
                  <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-1.5">
                    Action Target
                  </span>
                  <span className="text-xs font-bold text-foreground/80">{step.shortTitle}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

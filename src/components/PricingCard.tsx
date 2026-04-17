import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { PricingPlan } from "@/data/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  index?: number;
}

const PricingCard = ({ plan, index = 0 }: PricingCardProps) => {
  const Icon = plan.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`relative rounded-[3rem] p-10 flex flex-col h-full border-2 border-black shadow-[8px_8px_0px_black] transition-all overflow-hidden ${plan.highlighted ? "bg-accent/5 ring-4 ring-black/5" : "bg-white"
        }`}
    >
      {/* Header Section */}
      <div className="flex justify-between items-start mb-10 text-left">
        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_black]">
          <Icon size={28} className="text-accent-foreground" />
        </div>

        {plan.highlighted && (
          <span className="px-4 py-1.5 rounded-full bg-[#1e4465] text-white text-[10px] font-black uppercase tracking-[0.2em] border-2 border-black">
            Most Popular
          </span>
        )}
      </div>

      <div className="text-left mb-8 flex-1">
        <h3 className="font-heading font-black text-2xl mb-3 tracking-tight">{plan.name}</h3>
        <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-6 h-12">
          {plan.description}
        </p>

        <div className="flex flex-col gap-1 mb-8">
          <div className="flex items-baseline gap-2">
            <span className="font-heading font-black text-4xl">
              {typeof plan.price === "number" ? `$${plan.price}` : plan.price}
            </span>
            {typeof plan.price === "number" && (
              <span className="text-xs font-bold text-muted-foreground/60 uppercase">/ per month</span>
            )}
          </div>
        </div>

        {/* Highlight Features Box */}
        <div className="bg-accent/10 rounded-[2rem] p-6 border-2 border-black border-dashed mt-auto">
          <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 mb-5">
            Highlight Features
          </span>
          <ul className="space-y-4">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-xs font-bold">
                <div className="w-5 h-5 rounded-full bg-white border border-black/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Check size={10} className="text-accent" />
                </div>
                <span className="text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <button className={`w-full py-5 rounded-full font-black text-sm uppercase tracking-widest border-2 border-black transition-all ${plan.highlighted
          ? "bg-[#0a2140] text-white shadow-[6px_6px_0px_black] active:shadow-none active:translate-x-[6px] active:translate-y-[6px]"
          : "bg-white text-black shadow-[6px_6px_0px_black] active:shadow-none active:translate-x-[6px] active:translate-y-[6px]"
        }`}>
        {plan.cta}
      </button>
    </motion.div>
  );
};

export default PricingCard;

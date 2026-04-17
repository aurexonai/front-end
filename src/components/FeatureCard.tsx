import { motion } from "framer-motion";
import type { Feature } from "@/data/features";
import { Image as ImageIcon } from "lucide-react";

interface FeatureCardProps {
  feature: Feature;
  index?: number;
}

const FeatureCard = ({ feature, index = 0 }: FeatureCardProps) => {
  const isWide = feature.isWide;
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group bg-white border-2 border-black shadow-[6px_6px_0px_black] rounded-[2rem] overflow-hidden flex flex-col ${isWide ? 'md:col-span-2' : ''}`}
    >
      {/* Image Placeholder Section - No Icons */}
      <div className="h-48 md:h-52 bg-white relative overflow-hidden flex items-center justify-center border-b-2 border-black/5">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}
        />
        <div className="w-full h-full bg-gradient-to-br from-black/[0.02] to-transparent flex items-center justify-center relative z-10">
          <div className="flex flex-col items-center gap-2 opacity-10">
            <span className="text-[10px] uppercase font-black tracking-[0.3em]">Module Visualization</span>
          </div>
        </div>
      </div>

      <div className="p-8">
        <h3 className="font-heading font-black text-xl text-foreground mb-3 tracking-tight">{feature.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed font-medium">{feature.description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;

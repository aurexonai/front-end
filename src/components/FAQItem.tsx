import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import type { FAQ } from "@/data/faqs";

interface FAQItemProps {
  faq: FAQ;
  index?: number;
  defaultOpen?: boolean;
}

const FAQItem = ({ faq, index = 0, defaultOpen = false }: FAQItemProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-4 group"
      >
        <span className="font-heading font-black text-base lg:text-lg text-foreground leading-snug pr-4">
          {faq.question}
        </span>

        {/* Brutalist accent circle toggle */}
        <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black shadow-[2px_2px_0px_black] transition-colors duration-200 ${open ? "bg-accent" : "bg-background"}`}>
          <motion.div animate={{ rotate: open ? 0 : 180 }} transition={{ duration: 0.25 }}>
            <ChevronUp size={16} className={open ? "text-accent-foreground" : "text-foreground"} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm lg:text-base text-muted-foreground font-body leading-relaxed pr-14">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;

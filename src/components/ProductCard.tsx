import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-white border-2 border-black shadow-[6px_6px_0px_black] rounded-[2.5rem] overflow-hidden"
    >
      <div className="relative overflow-hidden aspect-[4/3] border-b-2 border-black group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 hover:grayscale-0"
        />
        <div className="absolute inset-0 border-[12px] border-black/5 pointer-events-none" />
        {product.aiBadge && (
          <span className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-[10px] font-black uppercase tracking-[0.15em] border-2 border-black shadow-[4px_4px_0px_black] z-20">
            {product.aiBadge}
          </span>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.15em]">{product.category}</p>
          <div className="flex items-center gap-1 bg-accent/10 px-2 py-0.5 rounded-full">
            <Star size={10} className="fill-accent text-accent" />
            <span className="text-[10px] font-black text-foreground">{product.rating}</span>
          </div>
        </div>
        <h3 className="font-heading font-black text-foreground line-clamp-1 text-lg leading-tight mb-2 tracking-tight">{product.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed font-medium mb-6">{product.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="font-heading font-black text-xl text-foreground">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through decoration-black/50">${product.originalPrice}</span>
            )}
          </div>
          <Link
            to={`/product/${product.id}`}
            className="text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-full bg-accent text-accent-foreground border-2 border-black shadow-[3px_3px_0px_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
          >
            View
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

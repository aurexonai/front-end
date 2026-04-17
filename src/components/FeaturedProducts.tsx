import { motion } from "framer-motion";
import { Layers, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { useRef } from "react";

const FeaturedProducts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by nearly the full visible width to shift the "set" of cards
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-start text-left"
          >
            <div className="section-label mb-8">
              <Layers size={14} className="text-accent" />
              Marketplace
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-black text-foreground mb-8 leading-[0.95] tracking-tighter">
              Featured <br />
              <span className="text-accent">Innovations.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed font-medium max-w-[400px]">
              The most impactful AI solutions hand-picked for immediate deployment and market success.
            </p>
            
            <div className="flex items-center gap-6 w-full">
              <Link to="/marketplace" className="btn-primary px-10 py-4 w-full sm:w-auto">
                Explore All
                <ArrowRight size={20} />
              </Link>
              
              {/* Navigation buttons: Hidden on LG/XL as requested */}
              <div className="hidden md:flex lg:hidden gap-3">
                <button 
                  onClick={() => scroll("left")}
                  className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center bg-white shadow-[5px_5px_0px_black] active:shadow-none active:translate-x-[5px] active:translate-y-[5px] transition-all hover:bg-accent group"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={() => scroll("right")}
                  className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center bg-white shadow-[5px_5px_0px_black] active:shadow-none active:translate-x-[5px] active:translate-y-[5px] transition-all hover:bg-accent group"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: 2-by-2 Product Slider */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/* The carousel container with extra padding for shadows */}
            <div 
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto pb-12 pt-4 px-4 scroll-smooth scrollbar-hide snap-x snap-mandatory"
            >
              {products.slice(0, 6).map((product, i) => (
                <div 
                  key={product.id} 
                  className="min-w-full md:min-w-[calc(50%-16px)] snap-start"
                >
                  <ProductCard product={product} index={i} />
                </div>
              ))}
              {/* Large buffer to allow the last row of 2 to be fully centered/visible */}
              <div className="min-w-[50px] md:min-w-[10%] shrink-0" />
            </div>

            {/* Mobile/Tablet Controls Area */}
            <div className="flex lg:hidden justify-center gap-4 mt-4">
               <button 
                  onClick={() => scroll("left")}
                  className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-white shadow-[4px_4px_0px_black]"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => scroll("right")}
                  className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-white shadow-[4px_4px_0px_black]"
                >
                  <ChevronRight size={20} />
                </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

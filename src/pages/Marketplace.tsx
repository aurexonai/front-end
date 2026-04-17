import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, ArrowRight, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

import { Cpu, MonitorSmartphone, LayoutGrid, Wifi, Box } from "lucide-react";

const categories = ["All", "Hardware", "Software", "Devices", "IoT"];

/* ─────────────────────────────────────────
   Dual-handle Price Range Slider
───────────────────────────────────────── */
const MIN_PRICE = 0;
const MAX_PRICE = 5000;

function PriceRangeSlider() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(5000);
  const trackRef = useRef<HTMLDivElement>(null);

  const minPct = Math.round((minVal / MAX_PRICE) * 100);
  const maxPct = Math.round((maxVal / MAX_PRICE) * 100);

  const handleMin = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMinVal(Math.min(Number(e.target.value), maxVal - 100));
    },
    [maxVal]
  );

  const handleMax = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMaxVal(Math.max(Number(e.target.value), minVal + 100));
    },
    [minVal]
  );

  return (
    <div>
      {/* Label + live value */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest">
          Price Range
        </h4>
        <span className="text-[11px] font-bold text-accent tabular-nums">
          ${minVal.toLocaleString()} – ${maxVal.toLocaleString()}
        </span>
      </div>

      {/* ── Track ── */}
      <div className="relative h-2 mt-1 mb-7" ref={trackRef}>
        {/* Base rail */}
        <div className="absolute inset-0 rounded-full bg-secondary border border-border/40" />

        {/* Filled segment */}
        <div
          className="absolute top-0 h-full rounded-full bg-accent transition-all"
          style={{ left: `${minPct}%`, width: `${maxPct - minPct}%` }}
        />

        {/* MIN range input (transparent overlay) */}
        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={50}
          value={minVal}
          onChange={handleMin}
          aria-label="Minimum price"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ zIndex: minVal > MAX_PRICE - 200 ? 5 : 3 }}
        />

        {/* MAX range input (transparent overlay) */}
        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={50}
          value={maxVal}
          onChange={handleMax}
          aria-label="Maximum price"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ zIndex: 4 }}
        />

        {/* Visual thumb — MIN */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full bg-accent border-2 border-background shadow-md shadow-accent/40 pointer-events-none transition-all"
          style={{ left: `calc(${minPct}% - 9px)` }}
        />
        {/* Visual thumb — MAX */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full bg-accent border-2 border-background shadow-md shadow-accent/40 pointer-events-none transition-all"
          style={{ left: `calc(${maxPct}% - 9px)` }}
        />
      </div>

      {/* Boundary labels */}
      <div className="flex justify-between text-[10px] font-semibold text-muted-foreground mb-5">
        <span>$0</span>
        <span>$5,000</span>
      </div>

      <button className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-black shadow-lg shadow-primary/10 hover:brightness-110 active:scale-95 transition-all">
        Apply Price
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────
   Marketplace Page
───────────────────────────────────────── */
function useItemsPerPage() {
  const [perPage, setPerPage] = useState(() =>
    window.innerWidth >= 1024 ? 6 : 4
  );
  useEffect(() => {
    const handler = () => setPerPage(window.innerWidth >= 1024 ? 6 : 4);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return perPage;
}

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = useItemsPerPage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Header />

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-12 px-2 sm:px-4 bg-background overflow-hidden">
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
              AI-Curated Marketplace
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative z-10 text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6"
            >
              Explore the <span className="text-accent">Marketplace</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body font-medium"
            >
              Discover the next generation of AI-powered products with verified
              trust scores, dynamic pricing, and real-time demand analytics.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="pb-24 px-4 sm:px-6 md:px-8 bg-background">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* ════════════════════
                SIDEBAR
            ════════════════════ */}
            <aside className="w-full lg:w-72 shrink-0">
              <div className="sticky top-28 space-y-5">

                {/* Search — inside sidebar, NOT separate */}
                <div className="relative">
                  <Search
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                  />
                  <input
                    type="text"
                    placeholder="Search products…"
                    className="w-full pl-11 pr-4 py-3 rounded-2xl bg-secondary/50 border border-border focus:bg-background focus:ring-2 focus:ring-accent transition-all text-sm font-medium outline-none"
                  />
                </div>

                {/* Filters card */}
                <div className="glass-card p-6 !rounded-3xl border border-border/50">
                  <div className="flex items-center gap-2 mb-6 pb-3 border-b border-border/50">
                    <SlidersHorizontal size={15} className="text-accent" />
                    <h3 className="font-heading font-bold text-sm uppercase tracking-wider">
                      Filters
                    </h3>
                  </div>

                  {/* Categories */}
                  <div className="mb-8">
                    <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-3">
                      Categories
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all duration-150 ${
                            activeCategory === cat
                              ? "bg-accent text-accent-foreground border-accent shadow-sm shadow-accent/20"
                              : "bg-secondary/40 text-muted-foreground border-border hover:border-accent/50 hover:text-foreground hover:bg-secondary"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range (progress bar slider) */}
                  <PriceRangeSlider />
                </div>
              </div>
            </aside>

            {/* ════════════════════
                PRODUCT GRID
            ════════════════════ */}
            <div className="flex-1">
              {(() => {
                const totalPages = Math.ceil(products.length / perPage);
                const paginated = products.slice(
                  (currentPage - 1) * perPage,
                  currentPage * perPage
                );
                return (
                  <>
                    <div className="flex items-center justify-between mb-8 px-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <p className="text-sm font-bold text-foreground">
                          {products.length}{" "}
                          <span className="text-muted-foreground font-medium">
                            Products Found
                          </span>
                        </p>
                      </div>
                      <select className="bg-transparent text-sm font-bold text-muted-foreground outline-none focus:text-foreground cursor-pointer">
                        <option>Sort by: Newest</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Most Popular</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                      {paginated.map((product, i) => (
                        <ProductCard key={product.id} product={product} index={i} />
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex items-center justify-center gap-2 mt-10">
                        <button
                          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                          disabled={currentPage === 1}
                          className="px-4 py-2 rounded-xl text-sm font-bold border border-border bg-secondary/40 text-muted-foreground hover:border-accent/50 hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                          ← Prev
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-9 h-9 rounded-xl text-sm font-bold border transition-all ${
                              currentPage === page
                                ? "bg-accent text-accent-foreground border-accent shadow-sm shadow-accent/20"
                                : "bg-secondary/40 text-muted-foreground border-border hover:border-accent/50 hover:text-foreground"
                            }`}
                          >
                            {page}
                          </button>
                        ))}

                        <button
                          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                          disabled={currentPage === totalPages}
                          className="px-4 py-2 rounded-xl text-sm font-bold border border-border bg-secondary/40 text-muted-foreground hover:border-accent/50 hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                          Next →
                        </button>
                      </div>
                    )}
                  </>
                );
              })()}

            </div>

          </div>
        </div>
      </section>


      <Footer />
    </motion.div>
  );
};

export default Marketplace;

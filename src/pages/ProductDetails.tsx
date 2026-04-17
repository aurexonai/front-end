import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrendingUp, Shield, Activity, ArrowLeft,
  Star, Zap, ShoppingCart, Sparkles, ArrowRight,
  Package, Clock, BadgeCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground text-lg">Product not found.</p>
            <Link to="/marketplace" className="btn-primary mt-6 inline-flex">Back to Marketplace</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <Header />

      {/* ── Wide image banner ── */}
      <div className="relative w-full h-[40vh] sm:h-[46vh] md:h-[50vh] overflow-hidden bg-foreground">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center opacity-50"
        />
        {/* layered gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-foreground/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/20 via-transparent to-foreground/20" />

        {/* dot grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />

        {/* back link */}
        <div className="absolute top-0 left-0 right-0 pt-28 px-4 sm:px-8">
          <div className="container-main">
            <Link to="/marketplace" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Marketplace
            </Link>
          </div>
        </div>

        {/* accent glow on banner */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent/20 rounded-full blur-[80px]" />
      </div>

      {/* ── Overlapping content card ── */}
      <div className="relative z-10 -mt-12 sm:-mt-16 px-4 sm:px-6 md:px-8 pb-0">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl shadow-foreground/10 border border-border/60 overflow-hidden"
          >
            {/* accent top bar */}
            <div className="h-1 w-full bg-gradient-to-r from-accent/40 via-accent to-accent/40" />

            <div className="p-5 sm:p-7 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">

                {/* ── LEFT: main info (3 cols) ── */}
                <div className="lg:col-span-3 flex flex-col">

                  {/* badges + title */}
                  <div className="mb-4">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-black text-muted-foreground uppercase tracking-widest border border-border rounded-lg px-2.5 py-1">
                        {product.category}
                      </span>
                      {product.aiBadge && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-accent text-accent-foreground text-xs font-black">
                          <Sparkles size={10} />
                          {product.aiBadge}
                        </span>
                      )}
                      {discount && (
                        <span className="px-3 py-1 rounded-lg bg-foreground text-primary-foreground text-xs font-black">
                          -{discount}% OFF
                        </span>
                      )}
                    </div>

                    <h1 className="font-heading text-3xl sm:text-4xl md:text-[2.6rem] font-extrabold text-foreground tracking-tight leading-tight">
                      {product.name}
                    </h1>

                    {/* stars */}
                    <div className="flex items-center gap-2.5 mt-3 flex-wrap">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={15}
                            className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "fill-border text-border"}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-foreground">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">128 reviews</span>
                      <span className="h-3.5 w-px bg-border" />
                      <span className="text-xs font-bold text-accent-foreground bg-accent/15 px-2.5 py-1 rounded-lg">In Stock</span>
                    </div>
                  </div>

                  {/* description */}
                  <div className="rounded-2xl bg-secondary/50 border border-border/50 p-4 mb-4">
                    <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-2">About</p>
                    <p className="text-[15px] text-foreground leading-relaxed">{product.description}</p>
                  </div>

                  {/* perks row */}
                  <div className="flex flex-col gap-2">
                    {[
                      { icon: <BadgeCheck size={14} />, label: "AI Verified", desc: "Authenticity confirmed by AI" },
                      { icon: <Package size={14} />, label: "Fast Delivery", desc: "Ships within 2–3 business days" },
                      { icon: <Clock size={14} />, label: "30-Day Return", desc: "Hassle-free return policy" },
                    ].map(({ icon, label, desc }) => (
                      <div key={label} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border/50 bg-background">
                        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0 text-accent-foreground">
                          {icon}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground leading-none">{label}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* price + buy — mobile only (shown below lg) */}
                  <div className="lg:hidden mt-4">
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="font-heading text-4xl font-extrabold text-foreground">${product.price}</span>
                      {product.originalPrice && (
                        <>
                          <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                          <span className="px-2 py-0.5 rounded-lg bg-accent text-accent-foreground text-xs font-black">
                            Save ${product.originalPrice - product.price}
                          </span>
                        </>
                      )}
                    </div>
                    <button className="btn-primary glow-accent-sm w-full py-4 text-base font-black rounded-2xl">
                      <ShoppingCart size={18} /> Buy Now
                    </button>
                  </div>
                </div>

                {/* ── RIGHT: price + AI sidebar (2 cols) ── */}
                <div className="lg:col-span-2 flex flex-col gap-4">

                  {/* price card — desktop only */}
                  <div className="hidden lg:block rounded-2xl border border-border/60 bg-secondary/30 p-5">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-heading text-4xl font-extrabold text-foreground">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <p className="text-xs text-muted-foreground mb-4">
                        You save <span className="font-black text-accent-foreground">${product.originalPrice - product.price}</span>
                      </p>
                    )}
                    {!product.originalPrice && <div className="mb-4" />}
                    <button className="btn-primary glow-accent-sm w-full py-4 text-base font-black rounded-2xl">
                      <ShoppingCart size={18} /> Buy Now
                    </button>
                  </div>

                  {/* AI insights card */}
                  <div className="rounded-2xl border border-border/60 bg-foreground overflow-hidden">
                    {/* header */}
                    <div className="px-4 py-3 flex items-center gap-2.5 border-b border-white/8">
                      <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Zap size={13} className="text-accent" />
                      </div>
                      <span className="font-heading font-extrabold text-white text-xs uppercase tracking-widest">AI Insights</span>
                      <div className="ml-auto flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-[10px] font-bold text-white/40">Live</span>
                      </div>
                    </div>

                    <div className="p-4 space-y-4">
                      {/* 3 stats */}
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { label: "Suggested", value: `$${product.suggestedPrice}` },
                          { label: "Demand", value: `${product.demandScore}%` },
                          { label: "Trust", value: `${product.trustScore}%` },
                        ].map(({ label, value }) => (
                          <div key={label} className="rounded-xl bg-white/5 p-2.5 text-center">
                            <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">{label}</p>
                            <p className="font-heading font-extrabold text-white text-base leading-none">{value}</p>
                          </div>
                        ))}
                      </div>

                      {/* progress bars */}
                      {[
                        { label: "Demand Score", icon: <TrendingUp size={10} />, value: product.demandScore, delay: 0.5 },
                        { label: "Trust Score", icon: <Shield size={10} />, value: product.trustScore, delay: 0.7 },
                      ].map(({ label, icon, value, delay }) => (
                        <div key={label}>
                          <div className="flex justify-between mb-1.5">
                            <span className="text-[10px] font-bold text-white/50 flex items-center gap-1">{icon} {label}</span>
                            <span className="text-[10px] font-extrabold text-white/70">{value}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${value}%` }}
                              transition={{ duration: 1.2, delay, ease: "easeOut" }}
                              className="h-full rounded-full bg-gradient-to-r from-accent/60 to-accent"
                            />
                          </div>
                        </div>
                      ))}

                      {/* price status */}
                      <div className="pt-1">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-black px-3 py-2 rounded-xl w-full justify-center ${
                          product.price <= product.suggestedPrice
                            ? "bg-accent/20 text-accent"
                            : "bg-red-500/15 text-red-400"
                        }`}>
                          <Activity size={11} />
                          {product.price <= product.suggestedPrice ? "Fair Price — within AI range ✓" : "Above AI Suggested Price"}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Related Products ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background relative overflow-hidden mt-10">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <div className="section-label">
                <Sparkles size={14} className="text-accent" />
                More Like This
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">Related Products</h2>
            </div>
            <Link to="/marketplace" className="btn-outline hidden sm:inline-flex">
              View All <ArrowRight size={16} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default ProductDetails;

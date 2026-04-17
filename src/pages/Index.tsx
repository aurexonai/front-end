import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import HowItWorks from "@/components/HowItWorks";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import Testimonials from "@/components/Testimonials";
import FAQItem from "@/components/FAQItem";
import CTASection from "@/components/CTASection";
import { products } from "@/data/products";
import { features } from "@/data/features";
import { pricingPlans } from "@/data/pricing";
import { faqs } from "@/data/faqs";
import { Sparkles, Layers, HelpCircle, CreditCard, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Header />
      <Hero />
      <AboutSection />
      <HowItWorks />
      <FeaturedProducts />

      {/* Features */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <div className="section-label mx-auto">
              <Sparkles size={14} className="text-accent" />
              Intelligence
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6 leading-tight tracking-tight">
              Meet <span className="text-accent underline decoration-black/10">AurexonIQ</span> Engine
            </h2>
            <p className="section-subtitle">
              The intelligent core powering AI-driven pricing, product evaluation, and smart commerce decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.slice(0, 5).map((feature, i) => (
              <FeatureCard key={i} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6 leading-tight tracking-tight">
              Scale Your <span className="text-accent underline decoration-black/10">Architecture.</span>
            </h2>
            <p className="section-subtitle mb-8">
              Choose the right tier for your data strategy. Upgrade or downgrade at any time as your needs evolve.
            </p>

            {/* Toggle Area - Compact, Reduced Width, Centered */}
            <div className="relative inline-flex bg-white border border-border/80 rounded-full p-1 shadow-sm mx-auto">
              {/* Sliding Active Pill */}
              <div
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#1e4465] rounded-full transition-all duration-300 shadow-sm"
                style={{ left: isAnnual ? 'calc(50% + 2px)' : '4px' }}
              />

              <button
                onClick={() => setIsAnnual(false)}
                className={`relative z-10 w-24 py-1.5 text-[11px] font-black uppercase tracking-widest transition-colors duration-300 ${!isAnnual ? "text-white" : "text-muted-foreground hover:text-foreground"}`}
              >
                Monthly
              </button>

              <button
                onClick={() => setIsAnnual(true)}
                className={`relative z-10 w-24 py-1.5 text-[11px] font-black uppercase tracking-widest transition-colors duration-300 flex items-center justify-center ${isAnnual ? "text-white" : "text-muted-foreground hover:text-foreground"}`}
              >
                Annually
                {!isAnnual && <span className="absolute -top-2.5 -right-2 px-1.5 py-0.5 rounded-md bg-accent text-accent-foreground text-[8px] font-black tracking-widest uppercase leading-none shadow-sm">-20%</span>}
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <PricingCard key={i} plan={plan} index={i} isAnnual={isAnnual} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="section-padding bg-background font-body">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-20">

            {/* LEFT — Badge + Title + CTA pinned to bottom */}
            <div className="grid grid-rows-[auto_1fr] gap-0">

              {/* Top content */}
              <div>
                <div className="section-label mb-6">
                  <HelpCircle size={14} className="text-accent" />
                  Your Questions, Answered
                </div>

                <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-5xl text-foreground leading-[1.1] tracking-tight mb-6">
                  Frequently<br />
                  Asked{" "}
                  <span className="text-accent underline decoration-black/10">Questions</span>
                </h2>

                <p className="text-muted-foreground font-body text-sm lg:text-base leading-relaxed max-w-sm">
                  Everything you need to know about how AurexonAI helps you buy and sell smarter with AI-powered insights.
                </p>
              </div>

              {/* CTA Box — pinned to bottom */}
              <div className="flex items-end pt-10">
                <div className="rounded-[2rem] border-2 border-black shadow-[4px_4px_0px_black] bg-white p-8 w-full max-w-sm">
                  <h3 className="font-heading font-black text-foreground text-lg mb-3">Still Have Questions?</h3>
                  <p className="text-muted-foreground text-xs font-body leading-relaxed mb-6">
                    Our team is happy to walk you through AurexonAI's features and show you exactly how it fits your workflow.
                  </p>
                  <button className="btn-primary w-full justify-center">
                    Book a Demo
                  </button>
                </div>
              </div>

            </div>

            {/* RIGHT — FAQ Accordion */}
            <div className="w-full">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} defaultOpen={i === 0} />
              ))}
            </div>

          </div>
        </div>
      </section>


      <CTASection />
      <Footer />
    </motion.div>
  );
};

export default Index;

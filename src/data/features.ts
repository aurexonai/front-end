import { Brain, Shield, TrendingUp, Zap, BarChart3, Globe } from "lucide-react";

export interface Feature {
  icon: typeof Brain;
  title: string;
  description: string;
  isWide?: boolean;
}

export const features: Feature[] = [
  {
    icon: Brain,
    title: "Dynamic Price Optimization",
    description: "Continuously adjusts prices using real-time demand, trends, and market insights for maximum value.",
  },
  {
    icon: Shield,
    title: "AI Product Valuation",
    description: "Evaluates product condition and historical data to deliver accurate and reliable market value insights.",
  },
  {
    icon: TrendingUp,
    title: "Trust Score System",
    description: "Generates AI-based trust scores for listings, improving transparency and buyer confidence in every transaction.",
  },
  {
    icon: Zap,
    title: "Market Trend Intelligence",
    description: "Monitors demand patterns and pricing trends to identify the best time for buying or selling.",
    isWide: true,
  },
  {
    icon: BarChart3,
    title: "Smart Decision Assistant",
    description: "Provides real-time recommendations during transactions, helping users make smarter and more confident decisions.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "AI-optimized logistics and currency handling for seamless cross-border transactions.",
  },
];

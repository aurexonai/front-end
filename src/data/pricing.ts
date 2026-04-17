import { Cloud, Server, Cpu } from "lucide-react";

export interface PricingPlan {
  name: string;
  description: string;
  price: number | string;
  period: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  icon: any;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "For individual users getting started",
    price: 15,
    period: "per month",
    icon: Cloud,
    features: [
      "Basic product listing",
      "AI price suggestions (limited)",
      "Standard marketplace access",
      "Basic trust score visibility",
      "Transaction support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    description: "For active sellers and smart buyers",
    price: 28,
    period: "per month",
    icon: Cpu,
    features: [
      "Unlimited product listings",
      "Advanced AI pricing insights",
      "Full product valuation reports",
      "Detailed trust score analytics",
      "Priority transaction support",
    ],
    highlighted: true,
    cta: "Select Pro Plan",
  },
  {
    name: "Enterprise",
    description: "For businesses and power sellers",
    price: "Contact us",
    period: "",
    icon: Server,
    features: [
      "Everything in Pro",
      "Custom AI pricing models",
      "Bulk listing management",
      "Advanced analytics dashboard",
      "Dedicated support & onboarding",
    ],
    highlighted: false,
    cta: "Get a Custom Quote",
  },
];

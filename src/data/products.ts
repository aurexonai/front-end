export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  aiBadge?: string;
  description: string;
  category: string;
  rating: number;
  demandScore: number;
  trustScore: number;
  suggestedPrice: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Neural Processing Unit X1",
    price: 499,
    originalPrice: 599,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    aiBadge: "Best Value",
    description: "Next-gen neural processing unit designed for edge AI workloads. Features 16 TOPS performance with ultra-low power consumption.",
    category: "Hardware",
    rating: 4.8,
    demandScore: 87,
    trustScore: 95,
    suggestedPrice: 479,
  },
  {
    id: "2",
    name: "AI Vision Camera Pro",
    price: 299,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
    aiBadge: "AI Verified",
    description: "Smart camera with built-in AI object detection and real-time analytics. Perfect for surveillance and automation.",
    category: "Devices",
    rating: 4.6,
    demandScore: 72,
    trustScore: 91,
    suggestedPrice: 289,
  },
  {
    id: "3",
    name: "SmartSense IoT Hub",
    price: 199,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    aiBadge: "Trending",
    description: "Central hub for all your IoT devices with AI-powered automation rules and energy optimization.",
    category: "IoT",
    rating: 4.5,
    demandScore: 93,
    trustScore: 88,
    suggestedPrice: 189,
  },
  {
    id: "4",
    name: "DataFlow Analytics Suite",
    price: 799,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    description: "Enterprise-grade analytics platform with ML-driven insights, anomaly detection, and predictive modeling.",
    category: "Software",
    rating: 4.9,
    demandScore: 65,
    trustScore: 97,
    suggestedPrice: 749,
  },
  {
    id: "5",
    name: "Quantum Edge Server",
    price: 2499,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    aiBadge: "Best Value",
    description: "High-performance edge computing server with quantum-ready architecture and AI acceleration capabilities.",
    category: "Hardware",
    rating: 4.7,
    demandScore: 58,
    trustScore: 94,
    suggestedPrice: 2399,
  },
  {
    id: "6",
    name: "AutoML Training Kit",
    price: 149,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop",
    aiBadge: "AI Verified",
    description: "Complete toolkit for training custom ML models without coding. Includes pre-built templates and datasets.",
    category: "Software",
    rating: 4.4,
    demandScore: 81,
    trustScore: 86,
    suggestedPrice: 139,
  },
  {
    id: "7",

    name: "BrainWave Robotics Arm",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    aiBadge: "Trending",
    description: "AI-controlled robotic arm with 6-axis precision, real-time motion planning, and intuitive gesture control.",
    category: "Hardware",
    rating: 4.7,
    demandScore: 76,
    trustScore: 92,
    suggestedPrice: 1249,
  },
  {
    id: "8",
    name: "EcoSense Energy Monitor",
    price: 129,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
    aiBadge: "AI Verified",
    description: "Smart home energy monitor that uses AI to track, forecast, and reduce power usage across all connected devices.",
    category: "IoT",
    rating: 4.5,
    demandScore: 84,
    trustScore: 89,
    suggestedPrice: 119,
  },
  {
    id: "9",
    name: "LinguaAI Language API",
    price: 349,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=300&fit=crop",
    aiBadge: "Best Value",
    description: "High-accuracy NLP API supporting 50+ languages with sentiment analysis, summarization, and entity recognition.",
    category: "Software",
    rating: 4.8,
    demandScore: 90,
    trustScore: 96,
    suggestedPrice: 329,
  },
];

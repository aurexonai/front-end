import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// Types
type TestimonialVariant = 
  | 'quote-mark' 
  | 'standard' 
  | 'multi-avatar' 
  | 'avatar-top' 
  | 'portrait' 
  | 'speech-bubble' 
  | 'avatar-top-small' 
  | 'image-left' 
  | 'standard-right';

interface Testimonial {
  id: string;
  variant: TestimonialVariant;
  name: string;
  role: string;
  content: string;
  content2?: string;
  avatar?: string;
  image?: string;
  avatars?: string[];
  featuredTitle?: string;
  rating?: number;
}

const testimonialsData: Testimonial[] = [
  // COLUMN 1
  {
    id: "1",
    variant: "quote-mark",
    name: "Liam O’Connor",
    role: "E-commerce Seller",
    content: "AurexonAI completely transformed how I price products. The AI insights are accurate, fast, and reliable, helping me increase profits and make smarter selling decisions every single time.",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: "2",
    variant: "standard",
    name: "Kwame Mensah",
    role: "Reseller",
    content: "I rely on AurexonAI for every transaction now. The platform provides clear valuation insights and smart recommendations, making buying and selling more profitable, transparent, and stress-free.",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    id: "3",
    variant: "multi-avatar",
    name: "Elena Petrova",
    role: "Online Retail Analyst",
    featuredTitle: "I was very impressed!",
    content: "The AI valuation system is outstanding. It helps me avoid overpricing mistakes, understand real market value, and make smarter purchasing decisions with confidence and precision every time.",
    avatars: [
      "https://i.pravatar.cc/150?u=3",
    ]
  },
  // COLUMN 2
  {
    id: "5",
    variant: "portrait",
    name: "Fatima Al-Zahra",
    role: "Online Marketplace Buyer",
    content: "This platform gives me complete confidence while buying and selling. The trust scores and AI pricing suggestions make every transaction transparent, safe, and far more efficient than traditional marketplaces.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "6",
    variant: "speech-bubble",
    name: "Isabella Rossi",
    role: "Small Business Owner",
    content: "Selling products has never been this easy. The AI recommendations are extremely helpful, guiding me with accurate pricing and market insights that ensure I always get the right value.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=7",
  },
  {
    id: "7",
    variant: "avatar-top-small",
    name: "Mateo Alvarez",
    role: "Independent Seller",
    featuredTitle: "Good Job!",
    content: "Since using AurexonAI, my selling strategy has improved significantly. The pricing engine and market insights help me identify the best opportunities and maximize returns effortlessly.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=8",
  },
  {
    id: "10",
    variant: "standard",
    name: "Noor Hassan",
    role: "Marketplace User",
    content: "AurexonAI is simple yet powerful. It makes online commerce smarter by giving real-time pricing guidance and trust insights, helping me make better decisions in every transaction.",
    avatar: "https://i.pravatar.cc/150?u=12",
  },
  {
    id: "11",
    variant: "quote-mark",
    name: "Hiroshi Tanaka",
    role: "Digital Trader",
    content: "AurexonAI understands market behavior better than anything I’ve used. Its pricing intelligence and trend analysis help me make precise, data-driven decisions that consistently improve my business outcomes.",
    avatar: "https://i.pravatar.cc/150?u=11",
  }
];

const Stars = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex justify-center gap-1 my-3">
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
    ))}
  </div>
);

const TestimonialCard = ({ item }: { item: Testimonial }) => {
  switch (item.variant) {
    case 'quote-mark':
      return (
        <div className="relative p-6 pt-8 rounded-[2rem] border-2 border-black bg-white shadow-[4px_4px_0px_black] mb-8 inline-block w-full mt-4">
          <div className="absolute -top-5 -left-5 bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center border-2 border-black font-heading font-black text-3xl shadow-[2px_2px_0px_black]">
            "
          </div>
          <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed">"{item.content}"</p>
          <div className="w-12 h-px bg-border my-4" />
          <h4 className="font-heading font-black text-sm text-foreground">{item.name}</h4>
          <p className="text-[9px] text-muted-foreground/60">{item.role}</p>
          <img src={item.avatar} alt={item.name} className="absolute bottom-6 -right-6 w-14 h-14 rounded-full border-2 border-black shadow-[2px_2px_0px_black] object-cover" />
        </div>
      );

    case 'standard':
      return (
        <div className="relative p-8 rounded-[2rem] border-2 border-black bg-white shadow-[4px_4px_0px_black] mb-8 inline-block w-full">
          <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed">"{item.content}"</p>
          <h4 className="font-heading font-black text-sm text-foreground">{item.name}</h4>
          <p className="text-[10px] text-muted-foreground/60">{item.role}</p>
          <img src={item.avatar} alt={item.name} className="absolute -bottom-5 right-8 w-14 h-14 rounded-full border-2 border-black shadow-[2px_2px_0px_black] object-cover" />
        </div>
      );

    case 'multi-avatar':
      return (
        <div className="relative p-8 rounded-[2rem] border-2 border-black bg-white shadow-[4px_4px_0px_black] mb-12 inline-block w-full mt-2">
          <h3 className="font-heading font-black text-lg text-center mb-4 text-foreground">{item.featuredTitle}</h3>
          <p className="text-sm text-center text-muted-foreground leading-relaxed px-4">"{item.content}"</p>
          <div className="text-center mt-4 mb-2">
            <p className="font-heading font-black text-sm text-primary">{item.name}</p>
            <p className="text-[9px] text-muted-foreground/60 uppercase tracking-wide">{item.role}</p>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex -space-x-3">
             {item.avatars?.map((av, i) => (
              <img key={i} src={av} alt="team" className="w-12 h-12 rounded-full border-2 border-black shadow-[2px_2px_0px_black] object-cover" style={{ zIndex: 3 - i }} />
            ))}
          </div>
        </div>
      );

    case 'avatar-top':
      return (
        <div className="relative p-8 pt-12 rounded-[2rem] border-2 border-black bg-white shadow-[4px_4px_0px_black] mb-8 inline-block w-full mt-8 overflow-hidden">
          <img src={item.avatar} alt={item.name} className="absolute -top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-2 border-black shadow-[2px_2px_0px_black] object-cover" />
          <Stars rating={item.rating} />
          <h3 className="font-heading font-black text-xl text-center mb-4 text-foreground">{item.featuredTitle}</h3>
          <p className="text-sm lg:text-base text-center text-muted-foreground mb-6 leading-relaxed relative z-10">"{item.content}"</p>
          <div className="text-center mt-4">
            <h4 className="font-heading font-black text-sm text-foreground">{item.name}</h4>
            <p className="text-[10px] text-muted-foreground/60">{item.role}</p>
          </div>
          <div className="absolute -bottom-8 -right-2 text-[120px] leading-none text-accent/10 font-black font-heading select-none z-0">
            "
          </div>
        </div>
      );

    case 'portrait':
      return (
        <div className="relative p-5 pb-8 rounded-[2rem] border-2 border-black bg-white shadow-[4px_4px_0px_black] mb-8 inline-block w-full">
          <div className="flex flex-col items-center text-center">
            {/* Massive Arched "Window" Brutalist Image Frame */}
            <div className="w-full h-64 sm:h-[340px] rounded-t-[10rem] rounded-b-2xl border-2 border-black shadow-[4px_4px_0px_black] mb-8 overflow-hidden bg-primary/5">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed px-2">
              "{item.content}"
            </p>
            
            <div className="font-heading font-black text-2xl text-primary mt-2">
              {item.name}
            </div>
            <p className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] mt-1 font-black">
              {item.role}
            </p>
          </div>
        </div>
      );

    case 'speech-bubble':
      return (
        <div className="relative p-8 pt-10 rounded-[2rem] border-2 border-black bg-white shadow-[4px_4px_0px_black] mb-8 inline-block w-full mt-6">
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-b-2 border-r-2 border-black rotate-45" />
          <img src={item.avatar} alt={item.name} className="absolute -top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-2 border-black shadow-[2px_2px_0px_black] object-cover" />
          <p className="text-sm text-center text-muted-foreground mt-2 mb-4 leading-relaxed tracking-tight">
            "{item.content}"
          </p>
          <Stars rating={item.rating} />
          <div className="text-center mt-2">
            <h4 className="font-heading font-black text-lg text-primary">{item.name}</h4>
            <p className="text-[10px] text-muted-foreground/60 uppercase">{item.role}</p>
          </div>
        </div>
      );

    case 'avatar-top-small':
      return (
        <div className="relative p-6 pt-10 rounded-[2rem] border-2 border-black bg-white shadow-[4px_4px_0px_black] mb-8 inline-block w-full mt-6 text-center">
          <img src={item.avatar} alt={item.name} className="absolute -top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-2 border-black shadow-[2px_2px_0px_black] object-cover" />
          <h3 className="font-heading font-black text-sm text-foreground mb-1">{item.featuredTitle}</h3>
          <Stars rating={item.rating} />
          <p className="text-xs lg:text-sm text-muted-foreground mt-3 leading-relaxed mb-4">"{item.content}"</p>
          <div className="mt-2 pt-1">
             <h4 className="font-heading font-black text-sm text-foreground">{item.name}</h4>
             <p className="text-[10px] text-muted-foreground/60 uppercase">{item.role}</p>
          </div>
        </div>
      );

    case 'image-left':
      return (
        <div className="relative rounded-[2rem] border-2 border-black bg-white shadow-[4px_4px_0px_black] mb-8 inline-block w-full overflow-hidden flex min-h-[220px]">
          <div className="w-[45%] relative border-r-2 border-black">
            <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="w-[55%] p-6 flex flex-col justify-center">
            <Quote className="w-6 h-6 text-accent mb-3" />
            <p className="text-xs text-foreground mb-3 leading-snug">"{item.content}"</p>
            <p className="text-[9px] text-muted-foreground leading-relaxed mb-4">{item.content2}</p>
            <div className="mt-auto">
               <h4 className="font-heading font-black text-[10px] text-foreground">{item.name}</h4>
               <p className="text-[8px] text-muted-foreground/60">{item.role}</p>
            </div>
          </div>
        </div>
      );

    case 'standard-right':
      return (
        <div className="relative p-8 pr-14 rounded-[2rem] border-2 border-black bg-white shadow-[4px_4px_0px_black] mb-8 inline-block w-full">
          <p className="text-[11px] lg:text-xs text-muted-foreground mb-6 leading-relaxed italic">"{item.content}"</p>
          <div className="w-10 h-px bg-border my-4" />
          <h4 className="font-heading font-black text-sm text-foreground">{item.name}</h4>
          <p className="text-[9px] text-muted-foreground/60">{item.role}</p>
          <img src={item.avatar} alt={item.name} className="absolute top-1/2 -right-5 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-black shadow-[2px_2px_0px_black] object-cover" />
        </div>
      );

    default:
      return null;
  }
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden font-body">
      <div className="container-main relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="section-label mx-auto">
            <Star size={14} className="text-accent" />
            Social Proof
          </div>
          <h2 className="section-title">Loved by Innovators</h2>
          <p className="section-subtitle">
            See how forward-thinking teams are multiplying their outcomes using our engine.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 max-w-[1240px] mx-auto px-4 mt-8 pb-10">
           {testimonialsData.map((item, i) => (
             <motion.div
               key={item.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="break-inside-avoid"
             >
               <TestimonialCard item={item} />
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

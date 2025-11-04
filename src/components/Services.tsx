import { Link } from "react-router-dom";
import { useState } from "react";
import { Sparkles, Gem, Wand2, FlaskConical, Zap, Star, Waves } from "lucide-react";
import facialImage from "@/assets/service-facial.jpg";
import massageImage from "@/assets/service-massage.jpg";
import bodyImage from "@/assets/service-body.jpg";
import categoryFacialImage from "@/assets/category-facial.jpg";
import categoryPremiumImage from "@/assets/category-premium.jpg";

const mainFacials = [
  {
    Icon: Sparkles,
    title: "ROLORA FACIAL GLOW™",
    price: "$235",
    tagline: "Your signature glow, defined by Rolora.",
    link: "/services/facial-glow",
    image: facialImage
  },
  {
    Icon: Gem,
    title: "ROLORA SCULPT",
    price: "$205",
    tagline: "Get snatched by Rolora.",
    link: "/services/sculpt",
    image: massageImage
  },
  {
    Icon: Wand2,
    title: "TIMELESS LIFT",
    price: "$245",
    tagline: "Lift. Firm. Defy time.",
    link: "/services/timeless-lift",
    image: facialImage
  },
  {
    Icon: FlaskConical,
    title: "ROLORA RESET",
    price: "$245",
    tagline: "Peel. Reveal. Reset.",
    link: "/services/reset",
    image: bodyImage
  },
  {
    Icon: Zap,
    title: "EXPRESS SCULPT",
    price: "$145",
    tagline: "Glow + go.",
    link: "/services/express-sculpt",
    image: massageImage
  },
];

const additionalServices = [
  {
    Icon: Star,
    title: "Enhancements",
    tagline: "Perfect your glow",
    description: "Targeted boosters from $50-$100",
    link: "/services/enhancements",
    image: bodyImage
  },
  {
    Icon: Waves,
    title: "Rolora Flow™",
    tagline: "Body Rolling",
    description: "Starting at $27",
    link: "/services/body-rolling",
    image: facialImage
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<"facial" | "premium" | null>(null);

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/20">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            Treatment Menu
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each service is an invitation to pause, breathe, and reconnect with your essence.
          </p>
        </div>

        {/* Category Selector - Image Cards */}
        {!activeCategory && (
          <div className="max-w-7xl mx-auto mb-12 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Facial Category */}
              <button
                onClick={() => setActiveCategory("facial")}
                className="group relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden border-2 border-border hover:border-foreground hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] hover:scale-[1.02] transition-all"
              >
                <img 
                  src={categoryFacialImage}
                  alt="Facial Treatments"
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 transition-smooth group-hover:from-black/85" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-4xl md:text-5xl font-display font-semibold mb-4 transform transition-smooth group-hover:translate-y-[-4px]">
                    Facial
                  </h3>
                  <p className="text-base md:text-lg opacity-90 text-center max-w-sm mb-6">
                    Signature facials crafted to sculpt and illuminate
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium opacity-80 group-hover:opacity-100 transition-smooth">
                    <span>Click to explore</span>
                    <span className="transform transition-smooth group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </button>

              {/* Premium Category */}
              <button
                onClick={() => setActiveCategory("premium")}
                className="group relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden border-2 border-border hover:border-foreground hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] hover:scale-[1.02] transition-all"
              >
                <img 
                  src={categoryPremiumImage}
                  alt="Premium Experiences"
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 transition-smooth group-hover:from-black/85" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-4xl md:text-5xl font-display font-semibold mb-4 transform transition-smooth group-hover:translate-y-[-4px]">
                    Premium
                  </h3>
                  <p className="text-base md:text-lg opacity-90 text-center max-w-sm mb-6">
                    Exclusive enhancements and body rituals
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium opacity-80 group-hover:opacity-100 transition-smooth">
                    <span>Click to explore</span>
                    <span className="transform transition-smooth group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Back Button */}
        {activeCategory && (
          <div className="max-w-6xl mx-auto mb-8 animate-fade-in">
            <button
              onClick={() => setActiveCategory(null)}
              className="px-8 py-4 bg-card border-2 border-border hover:border-foreground text-foreground hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:scale-105 transition-all flex items-center gap-3 group font-bold tracking-wide uppercase"
            >
              <span className="transform transition-all group-hover:translate-x-[-4px] text-xl">←</span>
              <span>Back to Categories</span>
            </button>
          </div>
        )}

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto">
          {activeCategory === "facial" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {mainFacials.map((service, index) => {
                const ServiceIcon = service.Icon;
                return (
                  <Link
                    key={index}
                    to={service.link}
                    className="group block"
                  >
                    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-elegant transition-smooth h-full">
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 right-4">
                          <ServiceIcon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-display font-semibold text-lg leading-tight">
                          {service.title}
                        </h3>
                        <span className="text-accent font-semibold text-lg whitespace-nowrap ml-2">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm italic mb-4">
                        {service.tagline}
                      </p>
                      <div className="text-accent text-sm font-medium group-hover:translate-x-1 transition-smooth inline-flex items-center gap-1">
                        Learn More →
                      </div>
                    </div>
                  </div>
                </Link>
              );
              })}
            </div>
          )}
          
          {activeCategory === "premium" && (
            <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
              {additionalServices.map((service, index) => {
                const ServiceIcon = service.Icon;
                return (
                  <Link
                    key={index}
                    to={service.link}
                    className="group block"
                  >
                    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-elegant transition-smooth h-full">
                      <div className="flex flex-col sm:flex-row h-full">
                        <div className="relative w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20" />
                        </div>
                        
                        <div className="w-full sm:w-3/5 p-6 flex flex-col justify-center">
                          <div className="mb-3">
                            <ServiceIcon className="w-10 h-10 text-accent" />
                          </div>
                          <h3 className="font-display font-semibold text-xl mb-2">
                            {service.title}
                          </h3>
                        <p className="text-muted-foreground italic text-sm mb-2">
                          {service.tagline}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          {service.description}
                        </p>
                        <div className="text-accent text-sm font-medium group-hover:translate-x-1 transition-smooth inline-flex items-center gap-1">
                          Explore Options →
                        </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
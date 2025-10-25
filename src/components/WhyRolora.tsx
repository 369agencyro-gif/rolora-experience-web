import { useEffect, useRef, useState } from "react";
import { Sparkles, Award, Heart, Star } from "lucide-react";

const features = [
  {
    emoji: "✨",
    title: "Expert Artistry",
    description: "Masters of facial sculpting and skin transformation",
    count: "15+",
    label: "Years Experience"
  },
  {
    emoji: "💎",
    title: "Premium Products",
    description: "Only the finest luxury skincare formulations",
    count: "100%",
    label: "Natural Ingredients"
  },
  {
    emoji: "🌟",
    title: "Client Satisfaction",
    description: "Transformative results that speak for themselves",
    count: "1000+",
    label: "Happy Clients"
  },
  {
    emoji: "🪞",
    title: "Signature Techniques",
    description: "Exclusive methods perfected over years",
    count: "12",
    label: "Unique Treatments"
  }
];

const WhyRolora = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<{ [key: number]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    features.forEach((feature, index) => {
      const targetNumber = parseInt(feature.count);
      if (isNaN(targetNumber)) return;

      let current = 0;
      const increment = targetNumber / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setCounts(prev => ({ ...prev, [index]: targetNumber }));
          clearInterval(timer);
        } else {
          setCounts(prev => ({ ...prev, [index]: Math.floor(current) }));
        }
      }, 30);
    });
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6 animate-fade-in">
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            <span className="text-accent font-semibold uppercase tracking-widest text-sm">
              The Rolora Difference
            </span>
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-semibold mb-6 animate-fade-in">
            Where Art Meets Science
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
            Experience the perfect fusion of expert craftsmanship and cutting-edge techniques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 transform ${
                isVisible 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full p-8 rounded-3xl bg-card border border-border hover:border-accent/50 transition-smooth hover:shadow-glow overflow-hidden">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth" />
                
                <div className="relative z-10">
                  {/* Glowing Emoji */}
                  <div className="text-6xl mb-6 transform transition-smooth group-hover:scale-110 group-hover:rotate-12 emoji-glow">
                    {feature.emoji}
                  </div>
                  
                  {/* Animated Counter */}
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-accent mb-1">
                      {feature.count.includes('%') || feature.count.includes('+')
                        ? `${counts[index] || 0}${feature.count.replace(/[0-9]/g, '')}`
                        : counts[index] || feature.count}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      {feature.label}
                    </div>
                  </div>
                  
                  <h3 className="font-display font-semibold text-xl mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent/20 via-transparent to-accent/20 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Star className="w-8 h-8 text-accent/20" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: "1s" }}>
          <Award className="w-10 h-10 text-accent/20" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float" style={{ animationDelay: "2s" }}>
          <Heart className="w-6 h-6 text-accent/20" />
        </div>
      </div>

      <style>{`
        .emoji-glow {
          filter: drop-shadow(0 0 20px rgba(var(--accent-rgb), 0.3));
          transition: filter 0.3s ease;
        }
        
        .group:hover .emoji-glow {
          filter: drop-shadow(0 0 30px rgba(var(--accent-rgb), 0.6));
        }
        
        .shadow-glow {
          box-shadow: 0 0 40px rgba(var(--accent-rgb), 0.2);
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyRolora;
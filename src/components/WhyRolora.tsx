import { Sparkles, Droplet, Leaf, Users, Shield, Heart } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Expert Artistry",
    description: "Masters of facial sculpting and skin transformation with precision and care"
  },
  {
    icon: Droplet,
    title: "Premium Products",
    description: "Only the finest luxury skincare formulations crafted with natural ingredients"
  },
  {
    icon: Leaf,
    title: "Organic Treatments",
    description: "Natural, sustainable approach to beauty that honors your skin and the earth"
  },
  {
    icon: Users,
    title: "Personalized Care",
    description: "Customized treatments designed specifically for your unique skin needs"
  },
  {
    icon: Shield,
    title: "Safe & Certified",
    description: "Professionally trained aestheticians using advanced, proven techniques"
  },
  {
    icon: Heart,
    title: "Holistic Wellness",
    description: "A complete mind-body approach to beauty and relaxation"
  }
];

const WhyRolora = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-muted-foreground uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            The Rolora Difference
          </span>
          
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">
            Where Art Meets Science
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full border-2 border-accent/30 flex items-center justify-center group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-all">
                    <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyRolora;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import facialImage from "@/assets/service-facial.jpg";
import massageImage from "@/assets/service-massage.jpg";
import bodyImage from "@/assets/service-body.jpg";

const mainFacials = [
  {
    icon: "✨",
    title: "ROLORA FACIAL GLOW™",
    price: "$235",
    tagline: "Your signature glow, defined by Rolora.",
    link: "/services/facial-glow",
    image: facialImage
  },
  {
    icon: "💎",
    title: "ROLORA SCULPT",
    price: "$205",
    tagline: "Get snatched by Rolora.",
    link: "/services/sculpt",
    image: massageImage
  },
  {
    icon: "🪄",
    title: "TIMELESS LIFT",
    price: "$245",
    tagline: "Lift. Firm. Defy time.",
    link: "/services/timeless-lift",
    image: facialImage
  },
  {
    icon: "🧪",
    title: "ROLORA RESET",
    price: "$245",
    tagline: "Peel. Reveal. Reset.",
    link: "/services/reset",
    image: bodyImage
  },
  {
    icon: "⚡",
    title: "EXPRESS SCULPT",
    price: "$145",
    tagline: "Glow + go.",
    link: "/services/express-sculpt",
    image: massageImage
  },
];

const additionalServices = [
  {
    icon: "💫",
    title: "Enhancements",
    tagline: "Perfect your glow",
    description: "Targeted boosters from $50-$100",
    link: "/services/enhancements",
    image: bodyImage
  },
  {
    icon: "🌀",
    title: "Rolora Flow™",
    tagline: "Body Rolling",
    description: "Starting at $27",
    link: "/services/body-rolling",
    image: facialImage
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            Rolora Treatment Menu
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each service is an invitation to pause, breathe, and reconnect with your essence. 
            Discover treatments designed not just for results, but for transformation.
          </p>
        </div>

        {/* Main Facials */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainFacials.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group animate-fade-in rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-elegant transition-elegant border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                  <span className="absolute top-4 left-4 text-4xl">{service.icon}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-display font-semibold leading-tight">
                      {service.title}
                    </h3>
                    <span className="text-accent font-semibold whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    {service.tagline}
                  </p>
                  <Button variant="link" className="mt-3 p-0 h-auto text-accent">
                    Learn More →
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group animate-fade-in rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-elegant transition-elegant border border-border"
                style={{ animationDelay: `${(mainFacials.length + index) * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                  <span className="absolute top-4 left-4 text-5xl">{service.icon}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground italic mb-1">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-accent">
                    Explore Options →
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>


        {/* Signature Experience */}
        <div className="max-w-4xl mx-auto text-center animate-fade-in rounded-2xl p-10 bg-gradient-to-br from-secondary/40 to-accent/10 border border-accent/20">
          <h3 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            🪞 Rolora Signature Experience
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
            ROLORA treatments are crafted to sculpt, illuminate, and refine. 
            Start with your signature facial, layer on targeted Intensifiers, or pair with body rolling for a full-face-and-body ritual.
          </p>
          <p className="text-lg font-medium text-accent italic">
            ✨ Luxury is in the details. Glow is the signature.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

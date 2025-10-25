import facialImage from "@/assets/service-facial.jpg";
import massageImage from "@/assets/service-massage.jpg";
import bodyImage from "@/assets/service-body.jpg";

const services = [
  {
    title: "Signature Facial Rituals",
    description: "Bespoke facial treatments combining advanced techniques with luxurious natural ingredients to reveal your skin's luminous potential.",
    image: facialImage,
    experience: "60-90 minutes of pure indulgence"
  },
  {
    title: "Therapeutic Massage",
    description: "Expert touch therapy designed to release tension, restore energy flow, and bring harmony to body and mind.",
    image: massageImage,
    experience: "Customized to your needs"
  },
  {
    title: "Body Transformation",
    description: "Holistic body treatments that nourish, sculpt, and rejuvenate, leaving you feeling renewed from within.",
    image: bodyImage,
    experience: "A complete sensory journey"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            Our Experiences
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each service is an invitation to pause, breathe, and reconnect with your essence. 
            Discover treatments designed not just for results, but for transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group animate-fade-in rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-elegant bg-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-sm text-accent font-medium">
                  {service.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

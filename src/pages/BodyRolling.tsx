import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import bodyImage from "@/assets/service-body.jpg";
import Contact from "@/components/Contact";

const bodyRollingPackages = [
  { name: "First-Time Roll", price: "$40", duration: "40 min", description: "Experience Rolora Flow for the first time" },
  { name: "Single Roll", price: "$80", duration: "40 min", description: "Individual session" },
  { name: "5-Pack", price: "$375", description: "Save with a 5-session package" },
  { name: "10-Pack", price: "$700", description: "Best value with 10 sessions" },
  { name: "Monthly Membership", price: "$399", description: "Unlimited monthly rolling" },
  { name: "Express Roll", price: "$27", duration: "15 min", description: "Quick refresh session" },
  { name: "Express 10-Pack", price: "$235", description: "10 express sessions" },
];

const BodyRolling = () => {
  return (
    <ServiceLayout>
      <section className="py-20 md:py-32">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <span className="text-6xl mb-4 block">🌀</span>
              <h1 className="text-4xl md:text-6xl font-display font-semibold mb-6">
                Rolora Flow™
              </h1>
              <p className="text-2xl text-muted-foreground mb-4">(Body Rolling)</p>
              <p className="text-2xl text-foreground italic mb-8">
                Detox. Sculpt. Energize.
              </p>
            </div>

            <div className="mb-12 animate-fade-in rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={bodyImage} 
                alt="Rolora Flow body rolling treatment"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="max-w-4xl mx-auto mb-12 animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-semibold mb-4">The Experience</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Discover the power of sculpting lymphatic massage with advanced rolling technology paired with built-in red light therapy. 
                  This full-body ritual stimulates circulation, promotes lymphatic drainage, and reduces water retention — leaving you feeling lighter, sculpted, and renewed.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 rounded-xl bg-secondary/30 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Benefits</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Promotes lymphatic drainage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Reduces water retention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Stimulates circulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Body sculpting and contouring</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-secondary/30 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Technology</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Advanced rolling technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Built-in red light therapy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Targeted lymphatic massage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Full-body treatment</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-semibold mb-6 text-center">Packages & Pricing</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {bodyRollingPackages.map((pkg, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start justify-between p-6 rounded-xl bg-card border border-border hover:shadow-soft transition-smooth"
                    >
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-1">{pkg.name}</h4>
                        {pkg.duration && <p className="text-sm text-muted-foreground mb-1">{pkg.duration}</p>}
                        <p className="text-sm text-muted-foreground">{pkg.description}</p>
                      </div>
                      <span className="text-accent font-semibold text-xl ml-4">{pkg.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center py-8 animate-fade-in">
              <Button 
                size="lg" 
                className="px-12 py-6 text-lg shadow-elegant"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Rolora Flow
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default BodyRolling;

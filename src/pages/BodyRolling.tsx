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
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-block mb-6">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-semibold mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                Rolora Flow™
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground/80 mb-6 tracking-wide">(Body Rolling)</p>
              <p className="text-3xl md:text-4xl text-foreground italic font-light tracking-wider">
                Detox. Sculpt. Energize.
              </p>
            </div>

            <div className="mb-16 animate-fade-in rounded-3xl overflow-hidden shadow-elegant ring-1 ring-border/50">
              <img 
                src={bodyImage} 
                alt="Rolora Flow body rolling treatment"
                className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">The Experience</h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Discover the power of sculpting lymphatic massage with advanced rolling technology paired with built-in red light therapy. 
                  This full-body ritual stimulates circulation, promotes lymphatic drainage, and reduces water retention — leaving you feeling lighter, sculpted, and renewed.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-secondary/40 via-secondary/30 to-secondary/20 backdrop-blur-sm border border-border/50 shadow-elegant hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-accent ring-4 ring-accent/20"></div>
                    <h3 className="text-2xl font-display font-semibold">Benefits</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3 group">
                      <span className="text-accent mt-1 group-hover:scale-125 transition-transform">•</span>
                      <span className="leading-relaxed">Promotes lymphatic drainage</span>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <span className="text-accent mt-1 group-hover:scale-125 transition-transform">•</span>
                      <span className="leading-relaxed">Reduces water retention</span>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <span className="text-accent mt-1 group-hover:scale-125 transition-transform">•</span>
                      <span className="leading-relaxed">Stimulates circulation</span>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <span className="text-accent mt-1 group-hover:scale-125 transition-transform">•</span>
                      <span className="leading-relaxed">Body sculpting and contouring</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 rounded-3xl bg-gradient-to-br from-secondary/40 via-secondary/30 to-secondary/20 backdrop-blur-sm border border-border/50 shadow-elegant hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-accent ring-4 ring-accent/20"></div>
                    <h3 className="text-2xl font-display font-semibold">Technology</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3 group">
                      <span className="text-accent mt-1 group-hover:scale-125 transition-transform">•</span>
                      <span className="leading-relaxed">Advanced rolling technology</span>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <span className="text-accent mt-1 group-hover:scale-125 transition-transform">•</span>
                      <span className="leading-relaxed">Built-in red light therapy</span>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <span className="text-accent mt-1 group-hover:scale-125 transition-transform">•</span>
                      <span className="leading-relaxed">Targeted lymphatic massage</span>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <span className="text-accent mt-1 group-hover:scale-125 transition-transform">•</span>
                      <span className="leading-relaxed">Full-body treatment</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="text-center mb-10">
                  <div className="inline-block mb-4">
                    <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-semibold bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">Packages & Pricing</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {bodyRollingPackages.map((pkg, idx) => (
                    <div 
                      key={idx} 
                      className="group relative p-8 rounded-3xl bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border border-border/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 flex flex-col h-full">
                        <h4 className="text-xl md:text-2xl font-display font-semibold mb-3 group-hover:text-accent transition-colors">{pkg.name}</h4>
                        {pkg.duration && <p className="text-sm text-accent/90 mb-3 font-medium tracking-wide">{pkg.duration}</p>}
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{pkg.description}</p>
                        <div className="flex items-center justify-center pt-4 border-t border-border/30">
                          <div className="relative inline-flex items-center">
                            <div className="absolute inset-0 bg-accent/10 blur-lg rounded-full"></div>
                            <span className="relative text-3xl md:text-4xl font-display font-bold bg-gradient-to-br from-accent via-accent to-accent/70 bg-clip-text text-transparent">{pkg.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center py-12 animate-fade-in">
              <Button 
                size="lg" 
                className="px-16 py-7 text-lg shadow-elegant hover:shadow-2xl transition-all duration-300 hover:scale-105"
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

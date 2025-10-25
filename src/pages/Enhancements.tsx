import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-image.jpg";
import Contact from "@/components/Contact";

const enhancements = {
  tier1: [
    { name: "Red Light Therapy", tagline: "Calm. Collagen. Glow.", description: "Boosts collagen, calms inflammation, and enhances radiance." },
    { name: "Extractions", description: "Deep pore cleansing to detoxify and clarify congested skin." },
  ],
  tier2: [
    { name: "Dermaplaning", description: "Refines texture and removes peach fuzz for a smooth, glassy finish." },
    { name: "Oxygen Boost", description: "Brightens and refreshes dull, tired skin." },
    { name: "Microdermabrasion", description: "Gently polishes and smooths for instant luminosity." },
    { name: "PureLift Sculpt", description: "Targets facial contours with lifting stimulation for a snatched finish." },
    { name: "Neck Lifting", description: "Targeted RF / sculpting massage to define and firm the neck jawline and décolletage." },
  ],
  tier3: [
    { name: "Hydra Infusion", description: "Deep hydration infusion that plumps and restores moisture balance." },
    { name: "Radiance Peel", description: "Refines texture and reveals brighter, more even skin tone." },
    { name: "Firming Lift (RF or Ultrasound)", description: "Tightens and firms for lifted, youthful contours." },
  ],
};

const Enhancements = () => {
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
                Rolora Enhancements
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
                Elevate your facial ritual with targeted boosters designed to enhance results, refine texture, and perfect your glow.
              </p>
              <p className="text-lg text-accent/90 font-medium max-w-2xl mx-auto">
                Most clients add 1–2 enhancements for a truly customized Rolora finish.
              </p>
            </div>

            <div className="mb-16 animate-fade-in rounded-3xl overflow-hidden shadow-elegant ring-1 ring-border/50">
              <img 
                src={aboutImage} 
                alt="Rolora enhancement treatments"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="space-y-10 mb-16 animate-fade-in">
              {/* $50 Tier */}
              <div className="rounded-3xl p-10 bg-gradient-to-br from-secondary/40 via-secondary/30 to-secondary/20 backdrop-blur-sm border border-border/50 shadow-elegant">
                <div className="flex flex-col items-center mb-10">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mb-6"></div>
                  <div className="relative inline-flex items-center justify-center">
                    <div className="absolute inset-0 bg-accent/10 blur-2xl rounded-full scale-150"></div>
                    <span className="relative text-5xl md:text-6xl font-display font-bold bg-gradient-to-br from-accent via-accent to-accent/60 bg-clip-text text-transparent tracking-tight">$50</span>
                  </div>
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mt-6"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {enhancements.tier1.map((item, idx) => (
                    <div key={idx} className="group p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-accent transition-colors">{item.name}</h3>
                      {item.tagline && <p className="text-sm italic text-accent/80 mb-3 font-medium">{item.tagline}</p>}
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* $60 Tier */}
              <div className="rounded-3xl p-10 bg-gradient-to-br from-secondary/40 via-secondary/30 to-secondary/20 backdrop-blur-sm border border-border/50 shadow-elegant">
                <div className="flex flex-col items-center mb-10">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mb-6"></div>
                  <div className="relative inline-flex items-center justify-center">
                    <div className="absolute inset-0 bg-accent/10 blur-2xl rounded-full scale-150"></div>
                    <span className="relative text-5xl md:text-6xl font-display font-bold bg-gradient-to-br from-accent via-accent to-accent/60 bg-clip-text text-transparent tracking-tight">$60</span>
                  </div>
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mt-6"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {enhancements.tier2.map((item, idx) => (
                    <div key={idx} className="group p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-accent transition-colors">{item.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* $100 Tier */}
              <div className="rounded-3xl p-10 bg-gradient-to-br from-secondary/40 via-secondary/30 to-secondary/20 backdrop-blur-sm border border-border/50 shadow-elegant">
                <div className="flex flex-col items-center mb-10">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mb-6"></div>
                  <div className="relative inline-flex items-center justify-center">
                    <div className="absolute inset-0 bg-accent/10 blur-2xl rounded-full scale-150"></div>
                    <span className="relative text-5xl md:text-6xl font-display font-bold bg-gradient-to-br from-accent via-accent to-accent/60 bg-clip-text text-transparent tracking-tight">$100</span>
                  </div>
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mt-6"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {enhancements.tier3.map((item, idx) => (
                    <div key={idx} className="group p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-accent transition-colors">{item.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
                Book with Enhancements
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default Enhancements;

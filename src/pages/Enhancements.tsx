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
            <div className="text-center mb-12 animate-fade-in">
              <span className="text-6xl mb-4 block">💫</span>
              <h1 className="text-4xl md:text-6xl font-display font-semibold mb-6">
                Rolora Enhancements
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
                Elevate your facial ritual with targeted boosters designed to enhance results, refine texture, and perfect your glow.
              </p>
              <p className="text-accent font-medium">
                ✨ Most clients add 1–2 enhancements for a truly customized Rolora finish.
              </p>
            </div>

            <div className="mb-12 animate-fade-in rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={aboutImage} 
                alt="Rolora enhancement treatments"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="space-y-8 mb-12 animate-fade-in">
              {/* $50 Tier */}
              <div className="rounded-2xl p-8 bg-secondary/30 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-display font-semibold text-accent">$50</span>
                  <div className="h-px flex-1 bg-border"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {enhancements.tier1.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-card">
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      {item.tagline && <p className="text-sm italic text-foreground mb-2">{item.tagline}</p>}
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* $60 Tier */}
              <div className="rounded-2xl p-8 bg-secondary/30 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-display font-semibold text-accent">$60</span>
                  <div className="h-px flex-1 bg-border"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {enhancements.tier2.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-card">
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* $100 Tier */}
              <div className="rounded-2xl p-8 bg-secondary/30 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-display font-semibold text-accent">$100</span>
                  <div className="h-px flex-1 bg-border"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {enhancements.tier3.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-card">
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
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

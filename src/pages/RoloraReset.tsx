import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import bodyImage from "@/assets/service-body.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import skincareProducts from "@/assets/skincare-products.jpg";
import Contact from "@/components/Contact";
import { Sparkles, RefreshCw, Award, Droplets } from "lucide-react";

const RoloraReset = () => {
  return (
    <ServiceLayout>
      <section className="py-20 md:py-32">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <span className="text-6xl mb-4 block">🧪</span>
              <h1 className="text-4xl md:text-6xl font-display font-semibold mb-4">
                Rolora Reset
              </h1>
              <p className="text-xl text-muted-foreground mb-4">(Chemical Peel)</p>
              <p className="text-2xl md:text-3xl text-accent font-medium mb-6">$245</p>
              <p className="text-xl text-foreground italic mb-8">
                Peel. Reveal. Reset.
              </p>
            </div>

            <div className="mb-12 animate-fade-in rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={bodyImage} 
                alt="Rolora Reset chemical peel treatment"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12 animate-fade-in">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-4">The Experience</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A luxury chemical peel facial that resurfaces texture, refines tone, and reveals clear, radiant skin.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Perfect for dullness, discoloration, and uneven texture with low-downtime for maximum results.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold mb-4">What to Expect</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Professional chemical peel application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Texture resurfacing and refinement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Tone correction and brightening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Low-downtime recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Clear, radiant complexion</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visual Results Section */}
            <div className="mb-12 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <img src={glowingSkin} alt="Clear radiant skin results" className="w-full h-[300px] object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <img src={skincareProducts} alt="Professional chemical peel treatment" className="w-full h-[300px] object-cover" />
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold text-center mb-8">Resurfacing Benefits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <RefreshCw className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Skin Renewal</h3>
                    <p className="text-muted-foreground">Chemical peels reveal fresh, new skin layers for a completely renewed complexion.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Sparkles className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Brightness Boost</h3>
                    <p className="text-muted-foreground">Fade discoloration and dark spots while revealing your skin's natural luminosity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Texture Refinement</h3>
                    <p className="text-muted-foreground">Smooth rough texture, minimize pores, and eliminate surface imperfections.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Droplets className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Low Downtime</h3>
                    <p className="text-muted-foreground">Get dramatic results without extensive recovery—gentle yet effective.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment Journey */}
            <div className="mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold text-center mb-12">The Reset Process</h2>
              
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Skin Preparation & Analysis</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We begin with a thorough consultation to understand your skin concerns and select the perfect peel strength for your needs. Your skin is cleansed and prepped to ensure optimal penetration and results.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Professional Peel Application</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        A customized chemical solution is expertly applied to target dullness, discoloration, and texture concerns. The peel works to dissolve dead skin cells and trigger your skin's natural renewal process, revealing the fresh, radiant skin beneath.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Soothing Recovery & Protection</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We neutralize and remove the peel, then apply calming, hydrating treatments to support your skin's healing. You'll leave with comprehensive aftercare instructions to maximize results and ensure smooth, comfortable recovery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Perfect For Section */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold text-center mb-6">Perfect Reset For</h2>
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🧪</span>
                    <span>Dull, lackluster complexion needing revival</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🧪</span>
                    <span>Hyperpigmentation and uneven skin tone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🧪</span>
                    <span>Rough texture and enlarged pores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🧪</span>
                    <span>Acne scarring and surface imperfections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🧪</span>
                    <span>Preparing for special occasions or events</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-8 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold mb-4">Reset Your Skin's Story</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Transform dull, uneven skin into a clear, radiant canvas. Your reset journey begins now.
              </p>
              <Button 
                size="lg" 
                className="px-12 py-6 text-lg shadow-elegant"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Rolora Reset
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default RoloraReset;

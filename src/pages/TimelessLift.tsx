import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import facialImage from "@/assets/service-facial.jpg";
import facialSculpting from "@/assets/facial-sculpting.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import Contact from "@/components/Contact";
import { Sparkles, Clock, Award, Zap } from "lucide-react";

const TimelessLift = () => {
  return (
    <ServiceLayout>
      <section className="py-20 md:py-32">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <span className="text-6xl mb-4 block">🪄</span>
              <h1 className="text-4xl md:text-6xl font-display font-semibold mb-4">
                Timeless Lift
              </h1>
              <p className="text-2xl md:text-3xl text-accent font-medium mb-6">$245</p>
              <p className="text-xl text-foreground italic mb-8">
                Lift. Firm. Defy time.
              </p>
            </div>

            <div className="mb-12 animate-fade-in rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={facialImage} 
                alt="Timeless Lift treatment"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12 animate-fade-in">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-4">The Experience</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A rejuvenating facial designed to restore elasticity, firm, and smooth the skin using advanced ultrasound, peptide infusion, and cryo lifting.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ideal for those seeking an age-defying, lifted complexion with visible anti-aging results.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold mb-4">What to Expect</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Advanced ultrasound technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Peptide infusion treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Cryo lifting techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Enhanced elasticity and firmness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Visibly lifted, youthful appearance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visual Results Section */}
            <div className="mb-12 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <img src={facialSculpting} alt="Advanced lifting treatment" className="w-full h-[300px] object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <img src={glowingSkin} alt="Youthful lifted results" className="w-full h-[300px] object-cover" />
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold text-center mb-8">Age-Defying Benefits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Sparkles className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Advanced Lifting</h3>
                    <p className="text-muted-foreground">Ultrasound technology penetrates deep to lift and firm from within.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Peptide Power</h3>
                    <p className="text-muted-foreground">Targeted peptides stimulate collagen production for lasting firmness.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cryo Tightening</h3>
                    <p className="text-muted-foreground">Cold therapy tightens and refines for immediate visible lift.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Time-Reversing Results</h3>
                    <p className="text-muted-foreground">Turn back the clock with enhanced elasticity and smooth, youthful skin.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment Journey */}
            <div className="mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold text-center mb-12">Your Lifting Journey</h2>
              
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Deep Ultrasound Therapy</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We begin with advanced ultrasound technology that penetrates deep into your skin's layers. This non-invasive treatment stimulates natural collagen production and targets areas of concern with precision, laying the foundation for visible lifting.
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
                      <h3 className="text-xl font-semibold mb-3">Peptide Infusion</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Powerful age-defying peptides are infused into your skin, delivering targeted ingredients that boost firmness and elasticity. These bio-active compounds work at a cellular level to restore youthful bounce and resilience.
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
                      <h3 className="text-xl font-semibold mb-3">Cryo Lifting Finish</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        The treatment concludes with cryo therapy that instantly tightens and lifts, sealing in all the age-defying benefits. Cold technology reduces any inflammation while creating immediate visible contouring and a smooth, firm finish.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Perfect For Section */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold text-center mb-6">Ideal Candidates</h2>
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🪄</span>
                    <span>Loss of firmness and elasticity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🪄</span>
                    <span>Fine lines and early signs of aging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🪄</span>
                    <span>Sagging or drooping facial contours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🪄</span>
                    <span>Desire for non-invasive lifting alternative</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🪄</span>
                    <span>Preventative anti-aging maintenance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-8 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold mb-4">Defy Time with Timeless Lift</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Experience the power of advanced anti-aging technology. Lift, firm, and turn back time naturally.
              </p>
              <Button 
                size="lg" 
                className="px-12 py-6 text-lg shadow-elegant"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Timeless Lift
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default TimelessLift;

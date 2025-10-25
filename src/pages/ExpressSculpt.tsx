import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import massageImage from "@/assets/service-massage.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import Contact from "@/components/Contact";
import { Clock, Sparkles, Zap, Award } from "lucide-react";

const ExpressSculpt = () => {
  return (
    <ServiceLayout>
      <section className="py-20 md:py-32">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <span className="text-6xl mb-4 block">⚡</span>
              <h1 className="text-4xl md:text-6xl font-display font-semibold mb-4">
                Express Sculpt
              </h1>
              <p className="text-2xl md:text-3xl text-accent font-medium mb-6">$145</p>
              <p className="text-xl text-foreground italic mb-8">
                Glow + go.
              </p>
            </div>

            <div className="mb-12 animate-fade-in rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={massageImage} 
                alt="Express Sculpt treatment"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12 animate-fade-in">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-4">The Experience</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A targeted mini facial that refreshes, hydrates, and contours in under 40 minutes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Perfect pre-event or as a midweek pick-me-up when you need instant radiance without the time commitment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold mb-4">What to Expect</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Quick 40-minute treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Refreshing cleanse and exfoliation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Hydration boost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Facial contouring massage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Instant glow and refresh</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visual Results Section */}
            <div className="mb-12 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <img src={glowingSkin} alt="Instant glow results" className="w-full h-[300px] object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <img src={facialRoom} alt="Quick express treatment" className="w-full h-[300px] object-cover" />
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold text-center mb-8">Express Benefits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Time-Efficient</h3>
                    <p className="text-muted-foreground">Get professional results in just 40 minutes—perfect for busy schedules.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Sparkles className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Instant Radiance</h3>
                    <p className="text-muted-foreground">Walk out with a visible glow that lasts, ready for any occasion.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Deep Hydration</h3>
                    <p className="text-muted-foreground">Intensive moisture infusion plumps and revitalizes tired skin quickly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Contoured Definition</h3>
                    <p className="text-muted-foreground">Targeted massage techniques enhance facial contours for a lifted look.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Perfect For Section */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold text-center mb-6">Perfect For</h2>
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⚡</span>
                    <span>Pre-event glow when you're short on time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⚡</span>
                    <span>Midweek skin refresh and pick-me-up</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⚡</span>
                    <span>Busy professionals who need quick results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⚡</span>
                    <span>First-time facial clients wanting a gentle introduction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⚡</span>
                    <span>Maintenance between longer treatments</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-8 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold mb-4">Ready for Your Quick Glow?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Experience instant radiance in under an hour. Book your Express Sculpt today.
              </p>
              <Button 
                size="lg" 
                className="px-12 py-6 text-lg shadow-elegant"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Express Sculpt
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default ExpressSculpt;

import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import massageImage from "@/assets/service-massage.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import Contact from "@/components/Contact";
import { Clock, Sparkles, Zap, Award, Star } from "lucide-react";

const ExpressSculpt = () => {
  return (
    <ServiceLayout>
      {/* Hero Section - Two Column Layout */}
      <section className="py-12 md:py-20">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Left: Image */}
            <div className="relative rounded-2xl overflow-hidden h-[500px] lg:h-[700px] lg:sticky lg:top-24">
              <img 
                src={massageImage} 
                alt="Express Sculpt treatment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              {/* Title & Rating */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 uppercase tracking-tight">
                  Express Sculpt
                </h1>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">4.9</span>
                </div>
                
                <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
                  <span className="text-sm font-semibold uppercase tracking-wide">Glow + go</span>
                </div>

                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  A targeted mini facial that refreshes, hydrates, and contours in under 40 minutes. Perfect pre-event or as a midweek pick-me-up when you need instant radiance without the time commitment.
                </p>

                <BookingButton 
                  size="lg"
                  className="w-full md:w-auto px-12 py-6 text-lg uppercase font-bold tracking-wide"
                >
                  Book Now
                </BookingButton>
              </div>

              {/* What Makes it Great */}
              <div className="border-t border-border pt-8">
                <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide">What Makes it Great</h2>
                <div className="grid gap-6">
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Time Efficient</h3>
                      <p className="text-muted-foreground">Quick 40-minute treatment that fits your busy schedule.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Sparkles className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Instant Radiance</h3>
                      <p className="text-muted-foreground">Walk out with a visible glow that lasts, ready for any occasion.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Deep Hydration</h3>
                      <p className="text-muted-foreground">Intensive moisture infusion plumps and revitalizes tired skin quickly.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-muted/30 rounded-2xl p-8 grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Duration</div>
                  <div className="text-2xl font-bold">40 minutes</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Price</div>
                  <div className="text-2xl font-bold">$145</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Ideal For</div>
                  <div className="text-base">Pre-event glow & quick refreshers</div>
                </div>
              </div>

              {/* What's Involved */}
              <div className="border-t border-border pt-8">
                <h2 className="text-2xl font-bold mb-8 uppercase tracking-wide">What's Involved</h2>
                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="text-4xl font-bold text-accent/20">01</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Cleanse & Prep</h3>
                      <p className="text-muted-foreground">Deep cleansing removes impurities and prepares skin for treatment.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-4xl font-bold text-accent/20">02</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Exfoliation</h3>
                      <p className="text-muted-foreground">Gentle exfoliation reveals fresh, glowing skin beneath.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-4xl font-bold text-accent/20">03</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Sculpting Massage</h3>
                      <p className="text-muted-foreground">Targeted facial massage techniques lift and contour for defined features.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-4xl font-bold text-accent/20">04</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Hydration Boost</h3>
                      <p className="text-muted-foreground">Intensive serum and moisturizer lock in hydration for plump, dewy skin.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Perfect For */}
              <div className="bg-accent/5 rounded-2xl p-8 border-t border-border">
                <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide">Perfect For</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Pre-event glow when you're short on time</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Midweek refresh to maintain your glow</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Quick pick-me-up for tired, dull skin</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Busy schedules that need instant results</p>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="border-t border-border pt-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4">Ready for Your Glow?</h3>
                  <p className="text-muted-foreground mb-6">
                    Experience instant radiance in under an hour. Book your Express Sculpt today.
                  </p>
                  <BookingButton 
                    size="lg"
                    className="w-full md:w-auto px-12 py-6 text-lg uppercase font-bold tracking-wide"
                  >
                    Book Express Sculpt
                  </BookingButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default ExpressSculpt;

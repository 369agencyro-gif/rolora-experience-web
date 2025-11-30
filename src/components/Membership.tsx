import BookingButton from "@/components/BookingButton";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import glowingFace from "@/assets/glowing-face.jpg";
import bodyRollingImage from "@/assets/body-rolling-hero.webp";

const Membership = () => {

  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 text-primary">
            NEW CLIENT OFFERS
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80">
            Choose Your First Rolora Experience
          </p>
        </div>

        {/* Dual Offer Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* First Glow - $99 */}
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] shadow-xl">
            <div className="relative h-48 overflow-hidden">
              <img src={glowingFace} alt="Rolora Facial Glow" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase">
                Most Popular
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-3xl font-bold mb-2 text-foreground">THE FIRST GLOW</h3>
              <div className="text-5xl font-bold text-primary mb-4">$99</div>
              <p className="text-sm text-foreground/60 line-through mb-6">Regularly $235</p>
              
              <div className="space-y-3 mb-8 text-left">
                {[
                  "Signature glass-skin facial",
                  "Custom serum blends",
                  "Deep cleanse & hydration",
                  "Instant glow, zero downtime",
                  "50 minutes"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground/70">{item}</span>
                  </div>
                ))}
              </div>

              <BookingButton size="lg" className="w-full px-6 py-4 text-xs uppercase font-bold tracking-wide mb-4">
                BOOK FIRST GLOW — $99
              </BookingButton>
              
              <Link to="/special-offer" className="block text-sm text-primary hover:text-primary/80 font-semibold underline">
                Learn More
              </Link>
            </div>
          </div>

          {/* Glow + Flow Duo - $139 */}
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] shadow-xl">
            <div className="relative h-48 overflow-hidden">
              <img src={bodyRollingImage} alt="Glow + Flow Duo" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                Full Reset
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-3xl font-bold mb-2 text-foreground">GLOW + FLOW DUO</h3>
              <div className="text-5xl font-bold text-primary mb-4">$139</div>
              <p className="text-sm text-foreground/60 mb-6">Face + Body Combo</p>
              
              <div className="space-y-3 mb-8 text-left">
                {[
                  "Sculpting facial",
                  "Body rolling session",
                  "Full lymphatic reset",
                  "Enhanced circulation",
                  "75-90 minutes"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground/70">{item}</span>
                  </div>
                ))}
              </div>

              <BookingButton size="lg" className="w-full px-6 py-4 text-xs uppercase font-bold tracking-wide mb-4">
                BOOK THE DUO — $139
              </BookingButton>
              
              <Link to="/glow-flow-offer" className="block text-sm text-primary hover:text-primary/80 font-semibold underline">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <p className="text-xs text-foreground/60 text-center mt-8">
          New clients only. One intro offer per person. Limited availability.
        </p>
      </div>
    </section>
  );
};

export default Membership;

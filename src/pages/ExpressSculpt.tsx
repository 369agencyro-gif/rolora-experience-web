import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import massageImage from "@/assets/service-massage.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import facialSculpting from "@/assets/facial-sculpting.jpg";
import skincareProducts from "@/assets/skincare-products.jpg";
import diverseSkin from "@/assets/diverse-skin.jpg";
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
            <div className="relative rounded-none overflow-hidden h-[500px] lg:h-[700px] lg:sticky lg:top-24">
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
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tighter leading-none">
                  EXPRESS SCULPT
                </h1>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-xl font-bold">4.9</span>
                </div>
                
                <div className="inline-block px-5 py-2 bg-accent text-primary-foreground rounded-none mb-8">
                  <span className="text-sm font-black uppercase tracking-widest">Glow + Go</span>
                </div>

                <p className="text-xl leading-relaxed mb-8">
                  A targeted mini facial that refreshes, hydrates, and contours in under 40 minutes. Perfect pre-event or as a midweek pick-me-up when you need instant radiance without the time commitment.
                </p>

                <BookingButton 
                  size="lg"
                  className="w-full md:w-auto px-16 py-7 text-base uppercase font-black tracking-widest rounded-none"
                >
                  Book Now
                </BookingButton>
              </div>

              {/* What Makes it Great */}
              <div className="border-t-2 border-foreground pt-8">
                <h2 className="text-xl font-black mb-8 uppercase tracking-widest">What Makes it Great</h2>
                <div className="grid gap-8">
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Time Efficient</h3>
                    <p className="text-muted-foreground text-lg">Quick 40-minute treatment that fits your busy schedule.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Instant Radiance</h3>
                    <p className="text-muted-foreground text-lg">Walk out with a visible glow that lasts, ready for any occasion.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Deep Hydration</h3>
                    <p className="text-muted-foreground text-lg">Intensive moisture infusion plumps and revitalizes tired skin quickly.</p>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-muted border-2 border-foreground p-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-xs font-black mb-2 uppercase tracking-widest">Duration</div>
                  <div className="text-2xl font-black">40 min</div>
                </div>
                <div>
                  <div className="text-xs font-black mb-2 uppercase tracking-widest">Price</div>
                  <div className="text-2xl font-black">$145</div>
                </div>
                <div>
                  <div className="text-xs font-black mb-2 uppercase tracking-widest">Ideal For</div>
                  <div className="text-sm font-bold">Pre-event glow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Involved Section */}
      <section className="py-20 bg-background border-t-4 border-foreground">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-black mb-16 uppercase tracking-tighter">
              WHAT'S INVOLVED
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <div className="border-t-2 border-foreground pt-6">
                <div className="text-lg font-black mb-3 uppercase">01. Cleanse & Prep</div>
                <p className="text-muted-foreground">
                  Removes makeup, sweat, and dirt, leaving your skin fresh and ready for treatment.
                </p>
              </div>
              <div className="border-t-2 border-foreground pt-6">
                <div className="text-lg font-black mb-3 uppercase">02. Exfoliation</div>
                <p className="text-muted-foreground">
                  Gently resurfaces skin to reveal a smooth, radiant complexion beneath.
                </p>
              </div>
              <div className="border-t-2 border-foreground pt-6">
                <div className="text-lg font-black mb-3 uppercase">03. Sculpt & Hydrate</div>
                <p className="text-muted-foreground">
                  Targeted massage and intensive hydration for lifted, plump, glowing skin.
                </p>
              </div>
            </div>

            {/* Expert-Curated Techniques */}
            <div className="mb-12">
              <h3 className="text-xs font-black uppercase tracking-widest mb-8">
                Expert-Curated Techniques & Tools
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Technique 1 */}
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden mb-4">
                    <img 
                      src={facialSculpting} 
                      alt="Lymphatic Drainage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-black mb-2 uppercase">Lymphatic Drainage</h4>
                  <p className="text-muted-foreground">
                    Reduces puffiness and promotes detoxification for a sculpted appearance.
                  </p>
                </div>

                {/* Technique 2 */}
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden mb-4">
                    <img 
                      src={skincareProducts} 
                      alt="Gua Sha Massage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-black mb-2 uppercase">Gua Sha Massage</h4>
                  <p className="text-muted-foreground">
                    Ancient technique that lifts, tones, and defines facial contours instantly.
                  </p>
                </div>

                {/* Technique 3 */}
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden mb-4">
                    <img 
                      src={diverseSkin} 
                      alt="Hydration Infusion"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-black mb-2 uppercase">Hydration Infusion</h4>
                  <p className="text-muted-foreground">
                    Deep penetrating serums deliver instant plumpness and lasting glow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image Break */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={glowingSkin} 
          alt="Glowing Results"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="container px-6 pb-12">
            <h3 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Instant Results
            </h3>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 bg-accent text-primary-foreground">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-black mb-12 uppercase tracking-tighter">
              PERFECT FOR
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-lg">
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <div className="w-3 h-3 bg-primary-foreground mt-2 flex-shrink-0"></div>
                <p className="font-medium">Pre-event glow when you're short on time</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <div className="w-3 h-3 bg-primary-foreground mt-2 flex-shrink-0"></div>
                <p className="font-medium">Midweek refresh to maintain your radiance</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <div className="w-3 h-3 bg-primary-foreground mt-2 flex-shrink-0"></div>
                <p className="font-medium">Quick pick-me-up for tired, dull skin</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <div className="w-3 h-3 bg-primary-foreground mt-2 flex-shrink-0"></div>
                <p className="font-medium">Busy schedules that need instant results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Image Section */}
      <section className="grid md:grid-cols-2">
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src={facialRoom} 
            alt="Treatment Room"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-[500px] overflow-hidden bg-muted flex items-center justify-center p-12">
          <div className="max-w-md">
            <h3 className="text-5xl font-black mb-6 uppercase tracking-tighter leading-none">
              READY FOR YOUR GLOW?
            </h3>
            <p className="text-xl mb-8">
              Experience instant radiance in under an hour. Book your Express Sculpt today.
            </p>
            <BookingButton 
              size="lg"
              className="w-full px-12 py-7 text-base uppercase font-black tracking-widest rounded-none"
            >
              Book Express Sculpt
            </BookingButton>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default ExpressSculpt;

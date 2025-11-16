import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import bodyImage from "@/assets/service-body.jpg";
import bodyRollingMachine from "@/assets/body-rolling-machine.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import Contact from "@/components/Contact";
import { Star } from "lucide-react";

const BodyRolling = () => {
  return (
    <ServiceLayout>
      {/* Hero Section - Two Column Layout */}
      <section className="py-12 md:py-20">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Left: Image */}
            <div className="relative rounded-none overflow-hidden h-[500px] lg:h-[700px] lg:sticky lg:top-24">
              <img 
                src={bodyImage} 
                alt="Rolora Flow body rolling"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              {/* Title & Rating */}
              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tighter leading-none">
                  ROLORA FLOW™
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
                  <span className="text-sm font-black uppercase tracking-widest">Body Rolling</span>
                </div>

                <p className="text-xl leading-relaxed mb-8">
                  Discover the power of sculpting lymphatic massage with advanced rolling technology paired with built-in red light therapy. This full-body ritual stimulates circulation, promotes lymphatic drainage, and reduces water retention—leaving you feeling lighter, sculpted, and renewed.
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
                    <h3 className="font-black text-xl mb-2 uppercase">Lymphatic Drainage</h3>
                    <p className="text-muted-foreground text-lg">Promotes detoxification and reduces water retention for a sculpted feel.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Red Light Therapy</h3>
                    <p className="text-muted-foreground text-lg">Built-in red light enhances collagen and accelerates recovery.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Full Body Renewal</h3>
                    <p className="text-muted-foreground text-lg">Energizes circulation and leaves you feeling lighter and refreshed.</p>
                  </div>
                </div>
              </div>

              {/* Pricing Info */}
              <div className="bg-muted border-2 border-foreground p-8">
                <h3 className="text-xs font-black mb-6 uppercase tracking-widest">Pricing Options</h3>
                <div className="grid gap-4">
                  <div className="flex justify-between items-center border-b border-foreground pb-3">
                    <span className="font-bold">First-Time Roll</span>
                    <span className="text-xl font-black">$40</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-foreground pb-3">
                    <span className="font-bold">Single Roll</span>
                    <span className="text-xl font-black">$80</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-foreground pb-3">
                    <span className="font-bold">5-Pack</span>
                    <span className="text-xl font-black">$375</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Monthly Unlimited</span>
                    <span className="text-xl font-black">$399</span>
                  </div>
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
                <div className="text-lg font-black mb-3 uppercase">01. Preparation</div>
                <p className="text-muted-foreground">
                  You'll be guided onto the advanced rolling machine for your session.
                </p>
              </div>
              <div className="border-t-2 border-foreground pt-6">
                <div className="text-lg font-black mb-3 uppercase">02. Rolling Therapy</div>
                <p className="text-muted-foreground">
                  Mechanized rollers with red light therapy massage your full body.
                </p>
              </div>
              <div className="border-t-2 border-foreground pt-6">
                <div className="text-lg font-black mb-3 uppercase">03. Recovery</div>
                <p className="text-muted-foreground">
                  Relax post-session feeling lighter, sculpted, and energized.
                </p>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={bodyRollingMachine} 
                  alt="Body Rolling Machine"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={facialRoom} 
                  alt="Treatment Environment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image Break */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={glowingSkin} 
          alt="Body Rolling Results"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="container px-6 pb-12">
            <h3 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Detox. Sculpt. Energize.
            </h3>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 bg-accent text-primary-foreground">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-black mb-12 uppercase tracking-tighter text-white">
              PERFECT FOR
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-lg">
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <div className="w-3 h-3 bg-primary-foreground mt-2 flex-shrink-0"></div>
                <p className="font-medium">Reducing water retention and bloating</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <div className="w-3 h-3 bg-primary-foreground mt-2 flex-shrink-0"></div>
                <p className="font-medium">Post-workout recovery and muscle relaxation</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <div className="w-3 h-3 bg-primary-foreground mt-2 flex-shrink-0"></div>
                <p className="font-medium">Lymphatic drainage and detoxification</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <div className="w-3 h-3 bg-primary-foreground mt-2 flex-shrink-0"></div>
                <p className="font-medium">Body sculpting and circulation boost</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column CTA Section */}
      <section className="grid md:grid-cols-2">
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src={bodyImage} 
            alt="Body Rolling Experience"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-[500px] overflow-hidden bg-muted flex items-center justify-center p-12">
          <div className="max-w-md">
            <h3 className="text-5xl font-black mb-6 uppercase tracking-tighter leading-none">
              FLOW WITH US
            </h3>
            <p className="text-xl mb-8">
              Experience full-body renewal with Rolora Flow. Book your session today.
            </p>
            <BookingButton 
              size="lg"
              className="w-full px-12 py-7 text-base uppercase font-black tracking-widest rounded-none"
            >
              Book Rolora Flow
            </BookingButton>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default BodyRolling;

import BookingButton from "@/components/BookingButton";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-glow.jpg";
import facialGlowImage from "@/assets/glowing-face.jpg";
import bodyRollingImage from "@/assets/body-rolling-hero.webp";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Check } from "lucide-react";

const Hero = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 7000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {/* Main Hero Slide */}
        <CarouselItem>
          <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-background">
            <div className="absolute inset-0 z-0">
              <img 
                src={heroImage} 
                alt="Glowing skin treatment" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
            
            <div className="container relative z-10 px-6 py-32">
              <div className="max-w-5xl">
                <div className="inline-block mb-6 px-4 py-2 bg-foreground text-background">
                  <p className="text-xs md:text-sm font-bold tracking-widest"> Newport Beach | 4.9★ RATED</p>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tighter text-white drop-shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                    <div className="animate-slide-in-left">GET SCULPTED.</div>
                    <div className="animate-slide-in-right md:order-3">GET GLOWING.</div>
                    <div className="animate-fade-in md:order-2">GET ROLORA.</div>
                  </div>
                </h1>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <BookingButton variant="cta" size="lg" className="text-lg">
                    BOOK YOUR APPOINTMENT
                  </BookingButton>
                </div>
              </div>
            </div>
          </section>
        </CarouselItem>

        {/* First Glow Offer Slide */}
        <CarouselItem>
          <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-background">
            <div className="absolute inset-0 z-0">
              <img 
                src={facialGlowImage} 
                alt="First Glow Offer" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
            
            <div className="container relative z-10 px-6 py-32">
              <div className="max-w-4xl">
                <div className="inline-block mb-6 px-4 py-2 bg-foreground text-background">
                  <p className="text-xs md:text-sm font-bold tracking-widest">NEW CLIENT EXCLUSIVE</p>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight text-white drop-shadow-lg">
                  THE FIRST GLOW™
                </h2>
                
                <div className="text-6xl md:text-7xl font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] mb-6">
                  $99
                </div>
                
                <p className="text-xl md:text-2xl text-white mb-6 drop-shadow-lg font-semibold">
                  Signature glass-skin facial — Regularly $235
                </p>

                <div className="space-y-3 mb-8 max-w-xl">
                  {[
                    "Custom serum blends mixed for your skin",
                    "Deep cleanse, refine & hydrate",
                    "Instant glow with zero downtime"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-base text-white drop-shadow-lg font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/special-offer">
                    <BookingButton variant="cta" size="lg" className="text-lg w-full sm:w-auto">
                      BOOK FIRST GLOW — $99
                    </BookingButton>
                  </Link>
                  <Link to="/special-offer">
                    <BookingButton variant="outline" size="lg" className="text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white w-full sm:w-auto">
                      LEARN MORE
                    </BookingButton>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </CarouselItem>

        {/* Glow + Flow Duo Offer Slide */}
        <CarouselItem>
          <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-background">
            <div className="absolute inset-0 z-0">
              <img 
                src={bodyRollingImage} 
                alt="Glow + Flow Duo Offer" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
            
            <div className="container relative z-10 px-6 py-32">
              <div className="max-w-4xl">
                <div className="inline-block mb-6 px-4 py-2 bg-foreground text-background">
                  <p className="text-xs md:text-sm font-bold tracking-widest">NEW CLIENT EXCLUSIVE</p>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight tracking-tight text-white drop-shadow-lg">
                  GLOW + FLOW DUO™
                </h2>
                
                <div className="text-6xl md:text-7xl font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] mb-6">
                  $139
                </div>
                
                <p className="text-xl md:text-2xl text-white mb-6 drop-shadow-lg font-semibold">
                  Face + Body • One Visit. Full Reset.
                </p>

                <div className="space-y-3 mb-8 max-w-xl">
                  {[
                    "Sculpting facial + body rolling session",
                    "Full lymphatic reset for face & body",
                    "75-90 minutes of transformation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-base text-white drop-shadow-lg font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/glow-flow-offer">
                    <BookingButton variant="cta" size="lg" className="text-lg w-full sm:w-auto">
                      BOOK THE DUO — $139
                    </BookingButton>
                  </Link>
                  <Link to="/glow-flow-offer">
                    <BookingButton variant="outline" size="lg" className="text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white w-full sm:w-auto">
                      LEARN MORE
                    </BookingButton>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Hero;

import BookingButton from "@/components/BookingButton";
import { Link } from "react-router-dom";
import heroImage from "@/assets/glow-closeup-1.jpg";
import facialGlowImage from "@/assets/glow-closeup-2.jpg";
import bodyRollingImage from "@/assets/skin-texture-1.jpg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  
  const plugin = useRef(
    Autoplay({ delay: 7000, stopOnInteraction: false })
  );

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent>
        {/* Main Hero Slide */}
        <CarouselItem>
          <section className="relative h-[95vh] flex items-center overflow-hidden bg-background">
            <div className="absolute inset-0 z-0">
              <img 
                src={heroImage} 
                alt="Glowing skin treatment" 
                className="w-full h-full object-cover object-[50%_50%]"
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
          <section className="relative h-[95vh] flex items-center overflow-hidden bg-background">
            <div className="absolute inset-0 z-0">
              <img 
                src={facialGlowImage} 
                alt="First Glow Offer" 
                className="w-full h-full object-cover object-[50%_50%]"
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
          <section className="relative h-[95vh] flex items-center overflow-hidden bg-background">
            <div className="absolute inset-0 z-0">
              <img 
                src={bodyRollingImage} 
                alt="Glow + Flow Duo Offer" 
                className="w-full h-full object-cover object-[50%_50%]"
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

    {/* Slide Indicators with label below */}
    <div className="absolute bottom-3 left-0 right-0 z-20 flex flex-col items-center gap-3">
      {/* Dots */}
      <div className="flex justify-center items-center gap-3">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className="group relative"
          >
            {/* Outer pulsing ring - only on active slide */}
            {current === index && (
              <span className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 animate-ping">
                <span className="block w-full h-full rounded-full bg-white/30"></span>
              </span>
            )}
            
            {/* Main dot */}
            <span
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-white scale-125 shadow-lg shadow-white/50"
                  : "bg-white/50 hover:bg-white/80 scale-100"
              }`}
            >
              {/* Progress bar for active slide */}
              {current === index && (
                <span className="absolute inset-0 rounded-full overflow-hidden">
                  <span
                    key={`progress-${current}`}
                    className="block h-full bg-primary origin-left"
                    style={{
                      animation: "progress 7s linear forwards"
                    }}
                  ></span>
                </span>
              )}
            </span>
          </button>
        ))}
      </div>
      
      {/* Slide hint text below dots */}
      <div className="flex items-center gap-2 text-white/80 animate-bounce">
        <ChevronLeft className="w-4 h-4 animate-pulse" />
        <span className="text-xs font-bold tracking-wider uppercase">New Offers</span>
        <ChevronRight className="w-4 h-4 animate-pulse" />
      </div>
    </div>
  </div>
  );
};

export default Hero;

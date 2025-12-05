import BookingButton from "@/components/BookingButton";
import diverseSkin from "@/assets/skin-closeup-dark.jpg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const WhatToExpect = () => {
  const benefits = [
    {
      title: "Results You Can See",
      description: "Every technique is intentional, targeted, and designed to lift, sculpt, and illuminate from the first session."
    },
    {
      title: "Sculpting Specialists",
      description: "Rolora estheticians are trained in facial contouring and sculpting work — we know how to shape, lift, and energize the face."
    },
    {
      title: "Modern Techniques Only",
      description: "High-performance formulas, advanced modalities, and sculpting methods that actually move the needle."
    },
    {
      title: "Glow with Energy",
      description: "We activate your skin. Expect lifted features, brighter tone, and that unmistakable Rolora Glow that feels alive."
    },
    {
      title: "Face + Body Connection",
      description: "Rolora's Flow approach treats lymph, energy, and circulation — so your whole appearance looks lighter and more defined."
    }
  ];

  return <section className="py-20 relative overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      
      <div className="container px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9] text-center mb-8 text-primary">
            WHAT MAKES US DIFFERENT
          </h2>
          
          <p className="text-xl leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            Rolora isn't your typical facial studio. We're here for snatched results, sculpted energy, and glow that gets noticed.
          </p>

          {/* Benefits Carousel */}
          <div className="mb-16">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {benefits.map((benefit, i) => (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                    <div className="group relative flex flex-col gap-4 px-8 py-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-sm h-full">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Image with modern overlay */}
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src={diverseSkin} 
              alt="Luxurious facial treatment at Rolora"
              className="w-full h-[500px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-widest mb-3 text-primary font-bold">
                  NEWPORT BEACH
                </p>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 uppercase tracking-tight leading-tight text-white">
                  Where Great Skin Meets Good Vibes
                </h3>
                <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">
                  Our open-concept studio brings your vibe up and helps your skin thrive.
                </p>
                <BookingButton 
                  size="lg"
                  className="px-12 py-6 text-sm uppercase font-bold tracking-wider"
                >
                  BOOK YOUR VISIT
                </BookingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhatToExpect;
import BookingButton from "@/components/BookingButton";
import heroImage from "@/assets/facial-skincare.jpg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const SignatureFacialSection = () => {
  const benefits = [
    "Boosts hydration",
    "Smooths texture",
    "Clears breakouts",
    "Softens fine lines",
    "Strengthens skin",
    "Calms irritation"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      
      <div className="container px-6 relative z-10">
        {/* New Client Offer Banner */}
        <div className="bg-[#3B2414] text-white py-4 px-6 mb-12 rounded-lg max-w-4xl mx-auto">
          <p className="text-center font-medium">
            New Client Offer: First Facial for $99
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-center mb-8 text-primary">
            THE REALLY GOOD FACIAL™
          </h2>

          <p className="text-xl md:text-2xl leading-relaxed mb-16 text-center max-w-4xl mx-auto">
            Our signature 60-minute facial combines expert techniques and clinical products to target your unique skin concerns.
          </p>

          {/* Benefits Carousel */}
          <div className="mb-16">
            <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-center mb-8">BENEFITS YOU'LL SEE</h3>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 1200,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {benefits.map((benefit, i) => (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                    <div className="group relative flex items-center justify-center gap-4 px-8 py-6 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <span className="text-primary text-xs font-bold">✓</span>
                      </div>
                      <span className="text-base text-foreground/80 font-light tracking-wide">{benefit}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Image and CTA */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={heroImage} 
                alt="Facial treatment with specialized tools"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-2xl font-bold">
                  <span className="text-primary">Starting at $99</span>
                  <span className="text-muted-foreground line-through ml-3 text-lg">$140</span>
                </div>
                
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Experience immediate results with our advanced facial technology and expert techniques. Every treatment is customized to your unique skin needs.
                </p>
              </div>

              <BookingButton 
                size="lg"
                className="w-full md:w-auto px-12 py-6 text-sm uppercase font-bold tracking-wider"
              >
                BOOK YOUR FACIAL
              </BookingButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureFacialSection;
import BookingButton from "@/components/BookingButton";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/facial-skincare.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";

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
    <section className="py-20 bg-muted/20">
      <div className="container px-6">
        {/* New Client Offer Banner */}
        <div className="bg-[#3B2414] text-white py-4 px-6 mb-12 rounded-lg text-center">
          <p className="font-medium text-lg">
            New Client Offer: First Facial for $99
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <div className="order-2 lg:order-1">
            <Carousel
              opts={{ loop: true }}
              plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
              className="w-full"
            >
              <CarouselContent>
                {[heroImage, facialRoom, glowingSkin].map((img, idx) => (
                  <CarouselItem key={idx}>
                    <img 
                      src={img} 
                      alt="Facial treatment"
                      className="w-full aspect-[4/3] object-cover rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              THE REALLY GOOD FACIAL™
            </h2>
            
            <div className="text-lg">
              <span className="font-semibold">Starting at $99</span>
              <span className="text-muted-foreground line-through ml-2">$140</span>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Our signature 60-minute facial combines expert techniques and clinical products to target your unique skin concerns.
            </p>

            {/* CTA */}
            <div>
              <BookingButton 
                size="lg"
                className="uppercase font-bold tracking-wide"
              >
                BOOK NOW
              </BookingButton>
            </div>

            {/* Benefits Carousel - Mobile Pill Style */}
            <div className="pt-6">
              <Carousel
                opts={{ loop: true, align: "start" }}
                plugins={[Autoplay({ delay: 1200, stopOnInteraction: false })]}
                className="w-full"
              >
                <CarouselContent className="-ml-2">
                  {benefits.map((benefit, idx) => (
                    <CarouselItem key={idx} className="pl-2 basis-auto">
                      <div className="rounded-full border border-border/50 bg-background/50 backdrop-blur-sm px-6 py-3 hover:scale-105 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                        <p className="text-sm font-medium whitespace-nowrap">{benefit}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureFacialSection;

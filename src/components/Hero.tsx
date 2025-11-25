import BookingButton from "@/components/BookingButton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-glow.jpg";
import heroGlow from "@/assets/hero-image.jpg";
import facialRoom from "@/assets/facial-room.jpg";

const Hero = () => {
  const heroImages = [
    { src: heroImage, name: "Sarah M." },
    { src: heroGlow, name: "Jessica T." },
    { src: facialRoom, name: "Emily R." },
  ];

  return (
    <section className="relative min-h-screen bg-background">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left - Carousel */}
        <div className="relative h-[50vh] lg:h-screen">
          <Carousel
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
            className="h-full w-full"
          >
            <CarouselContent className="h-full">
              {heroImages.map((image, index) => (
                <CarouselItem key={index} className="h-full relative">
                  <img
                    src={image.src}
                    alt={`Hero ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Testimonial Overlay */}
                  <div className="absolute top-6 right-6 bg-background/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                    <div className="flex items-center gap-2 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-xs text-white font-medium">{image.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm" />
            <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm" />
          </Carousel>
        </div>

        {/* Right - Content */}
        <div className="flex flex-col justify-center px-6 lg:px-16 py-12 lg:py-20 bg-background">
          <div className="max-w-2xl">
            <div className="inline-block mb-6 px-4 py-2 bg-primary text-primary-foreground rounded-sm">
              <p className="text-xs md:text-sm font-bold tracking-widest">NEWPORT BEACH | 4.9★ RATED</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tighter">
              GET SCULPTED.<br />
              GET GLOWING.<br />
              GET ROLORA.
            </h1>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="text-5xl font-bold">4.9</div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-lg text-muted-foreground">110,000+ FACIALS & COUNTING</p>
            </div>

            <div className="space-y-4 mb-8">
              <h2 className="text-2xl font-bold">What is Rolora?</h2>
              <p className="text-lg leading-relaxed text-foreground/80">
                Rolora is Newport Beach's premier facial studio specializing in results-driven treatments that sculpt, lift, and rejuvenate. Our expert techniques combine advanced technology with personalized care.
              </p>
            </div>

            <div className="space-y-4 mb-10">
              <h3 className="text-xl font-bold">The Result</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>✓ Visibly lifted and contoured facial structure</li>
                <li>✓ Radiant, glowing complexion</li>
                <li>✓ Reduced fine lines and improved texture</li>
                <li>✓ Long-lasting, natural-looking results</li>
              </ul>
            </div>

            <BookingButton size="lg" className="uppercase font-bold tracking-wide w-full md:w-auto px-12">
              BOOK NOW
            </BookingButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

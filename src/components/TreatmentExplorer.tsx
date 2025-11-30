import { Link } from "react-router-dom";
import BookingButton from "@/components/BookingButton";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import treatment1 from "@/assets/treatment-1.jpg";
import treatment2 from "@/assets/treatment-2.jpg";
import treatment3 from "@/assets/treatment-3.jpg";
import treatment4 from "@/assets/treatment-4.jpg";

const TreatmentExplorer = () => {
  const treatments = [
    "GUA SHA SCULPTING",
    "LED LIGHT THERAPY",
    "MICROCURRENT",
    "LYMPHATIC DRAINAGE",
    "CUSTOM SERUMS",
    "CRYO THERAPY"
  ];

  const exploreCards = [
    {
      image: treatment1,
      title: "ROLORA FACIAL GLOW™",
      link: "/services/facial-glow"
    },
    {
      image: treatment2,
      title: "ROLORA SCULPT™",
      link: "/services/sculpt"
    },
    {
      image: treatment3,
      title: "ROLORA RESET™",
      link: "/services/reset"
    },
    {
      image: treatment4,
      title: "TIMELESS LIFT™",
      link: "/services/timeless-lift"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <div className="container px-6">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] text-center mb-12 text-primary">
          EXPLORE OUR TREATMENTS
        </h2>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {exploreCards.map((card, idx) => (
                <CarouselItem key={idx} className="pl-4 basis-[85%]">
                  <Link to={card.link} className="group block">
                    <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl">
                      <img 
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-display font-bold text-white drop-shadow-lg">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {exploreCards.map((card, idx) => (
            <Link
              key={idx}
              to={card.link}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <img 
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-display font-bold text-white drop-shadow-lg">
                    {card.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Feature Pills */}
        <div className="max-w-5xl mx-auto mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {treatments.map((treatment, idx) => (
                <CarouselItem key={idx} className="pl-4 basis-auto">
                  <div className="group relative flex items-center justify-center gap-4 px-8 py-4 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm whitespace-nowrap">
                    <span className="text-base text-foreground/80 font-medium tracking-wide">{treatment}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Book Now Button */}
        <div className="flex justify-center">
          <BookingButton 
            size="lg"
            className="px-12 py-6 text-sm uppercase font-bold tracking-wider"
          >
            BOOK YOUR TREATMENT
          </BookingButton>
        </div>
      </div>
    </section>
  );
};

export default TreatmentExplorer;
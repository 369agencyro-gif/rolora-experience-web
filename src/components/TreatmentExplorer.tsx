import { Link } from "react-router-dom";
import BookingButton from "@/components/BookingButton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import facialGlowCard from "@/assets/facial-glow-card.jpg";
import glowCloseup2 from "@/assets/glow-closeup-2.jpg";
import glowCloseup3 from "@/assets/glow-closeup-3.jpg";
import timelessLiftTreatment from "@/assets/timeless-lift-treatment.jpg";
import serumCloseup2 from "@/assets/serum-closeup-2.jpg";
import roloraFlowNew from "@/assets/rolora-flow-new.png";
import headSpaOilTreatment from "@/assets/head-spa-oil-treatment.jpg";
import headSpaScalpMassage from "@/assets/head-spa-scalp-massage.jpg";

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
      image: facialGlowCard,
      title: "ROLORA FACIAL GLOW™",
      link: "/services/facial-glow"
    },
    {
      image: glowCloseup2,
      title: "ROLORA SCULPT™",
      link: "/services/sculpt"
    },
    {
      image: glowCloseup3,
      title: "ROLORA RESET™",
      link: "/services/reset"
    },
    {
      image: timelessLiftTreatment,
      title: "TIMELESS LIFT™",
      link: "/services/timeless-lift"
    },
    {
      image: serumCloseup2,
      title: "EXPRESS SCULPT™",
      link: "/services/express-sculpt"
    },
    {
      image: roloraFlowNew,
      title: "ROLORA FLOW™",
      link: "/services/body-rolling",
      cropBottom: true
    },
    {
      image: headSpaOilTreatment,
      title: "ROLORA HEAD SPA™",
      link: "/services/head-spa"
    },
    {
      image: headSpaScalpMassage,
      title: "SCULPT + SCALP RESET™",
      link: "/services/sculpt-scalp-reset"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <div className="container px-6">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] text-center mb-12 text-primary">
          EXPLORE OUR TREATMENTS
        </h2>

        {/* Treatment Cards Carousel - All Screens */}
        <div className="mb-12 relative">
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
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {exploreCards.map((card, idx) => (
                <CarouselItem key={idx} className="pl-4 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Link to={card.link} className="group block">
                    <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl">
                      <img 
                        src={card.image}
                        alt={card.title}
                        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${card.cropBottom ? 'object-top' : ''}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3B2414]/90 via-[#3B2414]/20 to-transparent transition-opacity duration-300 group-hover:opacity-70" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-display font-bold text-white transition-transform duration-300 group-hover:translate-y-[-4px]">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-primary text-primary-foreground border-2 border-primary shadow-lg hover:bg-primary/90 hover:scale-110 transition-all" />
            <CarouselNext className="hidden md:flex -right-12 bg-primary text-primary-foreground border-2 border-primary shadow-lg hover:bg-primary/90 hover:scale-110 transition-all" />
          </Carousel>
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
import glowCloseup1 from "@/assets/glow-closeup-1.jpg";
import glowCloseup2 from "@/assets/glow-closeup-2.jpg";
import glowCloseup3 from "@/assets/glow-closeup-3.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToGallery = () => {
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const transformations = [
    {
      beforeImage: glowCloseup1,
      afterImage: glowCloseup2,
      caption: "Emma after Chemical Peel"
    },
    {
      beforeImage: glowCloseup3,
      afterImage: glowCloseup2,
      caption: "Jennifer after The Really Good Facial™, Radio Frequency"
    },
    {
      beforeImage: glowCloseup1,
      afterImage: glowCloseup3,
      caption: "Thi Thi after The Really Good Facial™"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-sm md:text-base font-medium uppercase tracking-wider mb-16 text-foreground/80">
            REAL SKIN TRANSFORMATIONS
          </h2>

          {/* Before/After Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full mb-12"
          >
            <CarouselContent className="-ml-4">
              {transformations.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group">
                    {/* Before/After Split Image */}
                    <div className="relative overflow-hidden mb-4 aspect-[4/5]">
                      <div className="absolute inset-0 flex">
                        {/* Before Half */}
                        <div className="relative w-1/2 overflow-hidden">
                          <img 
                            src={item.beforeImage}
                            alt="Before treatment"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                            BEFORE
                          </div>
                        </div>
                        
                        {/* After Half */}
                        <div className="relative w-1/2 overflow-hidden">
                          <img 
                            src={item.afterImage}
                            alt="After treatment"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                            AFTER
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Caption */}
                    <p className="text-sm text-foreground/80">
                      {item.caption}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* See More Button */}
          <Button
            onClick={scrollToGallery}
            size="lg"
            className="px-12"
          >
            SEE MORE RESULTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;

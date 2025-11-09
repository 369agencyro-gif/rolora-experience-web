import facialRoom from "@/assets/facial-room.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import facialSculpting from "@/assets/facial-sculpting.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const About = () => {
  const scrollToGallery = () => {
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const transformations = [
    {
      beforeImage: facialRoom,
      afterImage: glowingSkin,
      caption: "Emma after Chemical Peel"
    },
    {
      beforeImage: facialSculpting,
      afterImage: glowingSkin,
      caption: "Jennifer after The Really Good Facial™, Radio Frequency"
    },
    {
      beforeImage: facialRoom,
      afterImage: facialSculpting,
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
          <button
            onClick={scrollToGallery}
            className="bg-[#0000FF] hover:bg-[#0000DD] text-white font-bold uppercase tracking-wider px-12 py-4 transition-all duration-300"
          >
            SEE MORE RESULTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

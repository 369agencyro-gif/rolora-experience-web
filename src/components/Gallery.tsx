import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/hero-image.jpg";
import aboutImage from "@/assets/about-image.jpg";
import facialImage from "@/assets/service-facial.jpg";
import massageImage from "@/assets/service-massage.jpg";
import bodyImage from "@/assets/service-body.jpg";

const galleryImages = [
  { src: heroImage, alt: "Rolora luxury spa interior" },
  { src: aboutImage, alt: "Premium skincare products" },
  { src: facialImage, alt: "Facial treatment experience" },
  { src: massageImage, alt: "Therapeutic massage session" },
  { src: bodyImage, alt: "Body treatment ritual" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            Moments of Serenity
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Step into our world of refined elegance and discover the artistry behind every experience.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="group relative overflow-hidden rounded-xl aspect-square shadow-soft hover:shadow-elegant transition-elegant">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-elegant" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          <div className="flex justify-center mt-12">
            <Link to="/gallery">
              <button className="px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:shadow-elegant transition-smooth hover:scale-105">
                View Full Gallery
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

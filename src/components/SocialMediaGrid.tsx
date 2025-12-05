import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Play, Instagram } from "lucide-react";

const SocialMediaGrid = () => {
  // Placeholder videos - these would be replaced with actual video content
  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=600&fit=crop",
      views: "12.5K",
      caption: "Glowing results ✨"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=600&fit=crop",
      views: "8.2K",
      caption: "Before & After"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=600&fit=crop",
      views: "15.1K",
      caption: "Sculpting magic"
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400&h=600&fit=crop",
      views: "9.7K",
      caption: "Client transformation"
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=600&fit=crop",
      views: "11.3K",
      caption: "Facial glow journey"
    },
    {
      id: 6,
      thumbnail: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=600&fit=crop",
      views: "7.8K",
      caption: "Real results"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-sm md:text-base font-medium uppercase tracking-wider mb-2 text-foreground/80">
                FOLLOW ALONG
              </h2>
              <p className="text-2xl md:text-3xl font-display font-extrabold tracking-wide text-foreground">
                @ROLORASKIN
              </p>
            </div>
            <a 
              href="https://instagram.com/roloraskin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="hidden md:inline font-medium">Follow Us</span>
            </a>
          </div>

          {/* Video Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {videos.map((video) => (
                <CarouselItem key={video.id} className="pl-3 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="group relative cursor-pointer">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-muted">
                      <img 
                        src={video.thumbnail}
                        alt={video.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                        </div>
                      </div>
                      
                      {/* Views Count */}
                      <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                        <Play className="w-3 h-3 text-white fill-white" />
                        <span className="text-xs text-white font-medium">{video.views}</span>
                      </div>
                      
                      {/* Caption */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-sm text-white font-medium line-clamp-2">{video.caption}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-background/80 backdrop-blur-sm border-border hover:bg-background" />
            <CarouselNext className="hidden md:flex -right-4 bg-background/80 backdrop-blur-sm border-border hover:bg-background" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaGrid;

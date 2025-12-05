import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Instagram } from "lucide-react";
import { useRef, useState } from "react";

const SocialMediaGrid = () => {
  const videos = [
    { id: 1, src: "/videos/facial-massage-1.mp4" },
    { id: 2, src: "/videos/facial-massage-2.mp4" },
    { id: 3, src: "/videos/facial-massage-3.mp4" },
    { id: 4, src: "/videos/facial-massage-4.mp4" },
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
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {videos.map((video) => (
                <CarouselItem key={video.id} className="pl-3 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <VideoCard src={video.src} />
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

const VideoCard = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="group relative cursor-pointer" onClick={togglePlay}>
      <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-muted">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          onEnded={() => setIsPlaying(false)}
        />
        
        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialMediaGrid;

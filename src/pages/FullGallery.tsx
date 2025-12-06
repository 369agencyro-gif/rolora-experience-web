import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// New gallery images
import galleryFacialMassage from "@/assets/gallery-facial-massage.jpg";
import galleryBodyRolling1 from "@/assets/gallery-body-rolling-1.png";
import galleryBodyRolling2 from "@/assets/gallery-body-rolling-2.png";
import galleryGlow1 from "@/assets/gallery-glow-1.jpg";
import galleryGlow2 from "@/assets/gallery-glow-2.jpg";
import galleryGlow3 from "@/assets/gallery-glow-3.jpg";

type MediaItem = {
  src: string;
  alt: string;
  category: string;
  type: "image" | "video";
};

const galleryCategories: Record<string, MediaItem[]> = {
  all: [
    { src: "/videos/gallery-facial-1.mp4", alt: "Facial massage technique", category: "Facial", type: "video" },
    { src: galleryFacialMassage, alt: "Expert facial massage", category: "Facial", type: "image" },
    { src: galleryBodyRolling1, alt: "Body rolling session", category: "Body", type: "image" },
    { src: "/videos/gallery-facial-2.mp4", alt: "Face massage transformation", category: "Facial", type: "video" },
    { src: galleryGlow1, alt: "Glowing skin results", category: "Results", type: "image" },
    { src: galleryBodyRolling2, alt: "Rolora Flow treatment", category: "Body", type: "image" },
    { src: galleryGlow2, alt: "Post-treatment glow", category: "Results", type: "image" },
    { src: galleryGlow3, alt: "Radiant skin", category: "Results", type: "image" },
  ],
  facial: [
    { src: "/videos/gallery-facial-1.mp4", alt: "Facial massage technique", category: "Facial", type: "video" },
    { src: galleryFacialMassage, alt: "Expert facial massage", category: "Facial", type: "image" },
    { src: "/videos/gallery-facial-2.mp4", alt: "Face massage transformation", category: "Facial", type: "video" },
  ],
  body: [
    { src: galleryBodyRolling1, alt: "Body rolling session", category: "Body", type: "image" },
    { src: galleryBodyRolling2, alt: "Rolora Flow treatment", category: "Body", type: "image" },
  ],
  results: [
    { src: galleryGlow1, alt: "Glowing skin results", category: "Results", type: "image" },
    { src: galleryGlow2, alt: "Post-treatment glow", category: "Results", type: "image" },
    { src: galleryGlow3, alt: "Radiant skin", category: "Results", type: "image" },
  ],
};

type CategoryKey = keyof typeof galleryCategories;

const VideoCard = ({ src, alt }: { src: string; alt: string }) => {
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
    <div className="relative w-full h-full" onClick={togglePlay}>
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
            <Play className="w-8 h-8 text-foreground ml-1" fill="currentColor" />
          </div>
        </div>
      )}
      {isPlaying && (
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Pause className="w-5 h-5 text-white" fill="currentColor" />
        </div>
      )}
    </div>
  );
};

const FullGallery = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryKey>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentGalleryItems = galleryCategories[activeFilter];

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % currentGalleryItems.length);
    }
  };

  const filters: { key: CategoryKey; label: string }[] = [
    { key: "all", label: "All" },
    { key: "facial", label: "Facial Treatments" },
    { key: "body", label: "Body Treatments" },
    { key: "results", label: "Results" },
  ];

  return (
    <>
      <AnnouncementBar />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-display font-semibold mb-6">
                Our Gallery
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore the beauty and elegance of Rolora through our curated collection of moments and experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-muted/20">
          <div className="container px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`px-6 py-3 rounded-full font-semibold transition-smooth ${
                      activeFilter === filter.key
                        ? "bg-accent text-accent-foreground shadow-md"
                        : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-accent/50"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-background">
          <div className="container px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {currentGalleryItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => item.type === "image" && openLightbox(index)}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/5] animate-fade-in shadow-soft hover:shadow-elegant transition-elegant cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.type === "video" ? (
                    <VideoCard src={item.src} alt={item.alt} />
                  ) : (
                    <>
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-elegant">
                        <p className="text-sm font-semibold uppercase tracking-wider mb-1 text-primary">
                          {item.category}
                        </p>
                        <p className="text-base">{item.alt}</p>
                      </div>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
          <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 bg-black/95 border-none">
            {selectedIndex !== null && currentGalleryItems[selectedIndex]?.type === "image" && (
              <div className="relative w-full h-full flex items-center justify-center">
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-smooth"
                >
                  <X className="w-6 h-6" />
                </button>

                <button
                  onClick={goToPrevious}
                  className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-smooth"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <div className="w-full h-full flex flex-col items-center justify-center p-12">
                  <img
                    src={currentGalleryItems[selectedIndex].src}
                    alt={currentGalleryItems[selectedIndex].alt}
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                  
                  <div className="mt-6 text-center">
                    <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">
                      {currentGalleryItems[selectedIndex].category}
                    </p>
                    <p className="text-white text-lg">
                      {currentGalleryItems[selectedIndex].alt}
                    </p>
                  </div>
                </div>

                <button
                  onClick={goToNext}
                  className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-smooth"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full text-white text-sm">
                  {selectedIndex + 1} / {currentGalleryItems.length}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </>
  );
};

export default FullGallery;

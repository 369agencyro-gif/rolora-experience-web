import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import heroImage from "@/assets/hero-image.jpg";
import aboutImage from "@/assets/about-image.jpg";
import facialImage from "@/assets/service-facial.jpg";
import massageImage from "@/assets/service-massage.jpg";
import bodyImage from "@/assets/service-body.jpg";
import facialRoomImage from "@/assets/facial-room.jpg";
import glowingSkinImage from "@/assets/glowing-skin.jpg";
import facialSculptingImage from "@/assets/facial-sculpting.jpg";
import skincareProductsImage from "@/assets/skincare-products.jpg";

const galleryCategories = {
  all: [
    { src: heroImage, alt: "Rolora luxury spa interior", category: "Spa" },
    { src: facialRoomImage, alt: "Premium facial treatment room", category: "Facial" },
    { src: glowingSkinImage, alt: "Radiant glowing skin results", category: "Results" },
    { src: facialSculptingImage, alt: "Expert facial sculpting technique", category: "Facial" },
    { src: skincareProductsImage, alt: "Luxury skincare products", category: "Products" },
    { src: aboutImage, alt: "Premium skincare products display", category: "Products" },
    { src: facialImage, alt: "Signature facial treatment experience", category: "Facial" },
    { src: massageImage, alt: "Therapeutic massage session", category: "Body" },
    { src: bodyImage, alt: "Body treatment ritual", category: "Body" },
  ],
  facial: [
    { src: facialRoomImage, alt: "Premium facial treatment room", category: "Facial" },
    { src: facialSculptingImage, alt: "Expert facial sculpting technique", category: "Facial" },
    { src: facialImage, alt: "Signature facial treatment experience", category: "Facial" },
  ],
  body: [
    { src: massageImage, alt: "Therapeutic massage session", category: "Body" },
    { src: bodyImage, alt: "Body treatment ritual", category: "Body" },
  ],
  products: [
    { src: skincareProductsImage, alt: "Luxury skincare products", category: "Products" },
    { src: aboutImage, alt: "Premium skincare products display", category: "Products" },
  ],
  spa: [
    { src: heroImage, alt: "Rolora luxury spa interior", category: "Spa" },
    { src: facialRoomImage, alt: "Premium facial treatment room", category: "Spa" },
  ],
  results: [
    { src: glowingSkinImage, alt: "Radiant glowing skin results", category: "Results" },
  ],
};

type CategoryKey = keyof typeof galleryCategories;

const FullGallery = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryKey>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentGalleryImages = galleryCategories[activeFilter];

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % currentGalleryImages.length);
    }
  };

  const filters: { key: CategoryKey; label: string }[] = [
    { key: "all", label: "All" },
    { key: "facial", label: "Facial Treatments" },
    { key: "body", label: "Body Treatments" },
    { key: "products", label: "Products" },
    { key: "spa", label: "Spa Interior" },
    { key: "results", label: "Results" },
  ];

  return (
    <>
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
              {currentGalleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] animate-fade-in shadow-soft hover:shadow-elegant transition-elegant cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-elegant">
                    <p className="text-sm font-semibold uppercase tracking-wider mb-1 text-accent-foreground">
                      {image.category}
                    </p>
                    <p className="text-base">{image.alt}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
          <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 bg-black/95 border-none">
            {selectedImageIndex !== null && (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-smooth"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Previous Button */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-smooth"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                {/* Image */}
                <div className="w-full h-full flex flex-col items-center justify-center p-12">
                  <img
                    src={currentGalleryImages[selectedImageIndex].src}
                    alt={currentGalleryImages[selectedImageIndex].alt}
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                  
                  {/* Image Info */}
                  <div className="mt-6 text-center">
                    <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">
                      {currentGalleryImages[selectedImageIndex].category}
                    </p>
                    <p className="text-white text-lg">
                      {currentGalleryImages[selectedImageIndex].alt}
                    </p>
                  </div>
                </div>

                {/* Next Button */}
                <button
                  onClick={goToNext}
                  className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-smooth"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full text-white text-sm">
                  {selectedImageIndex + 1} / {currentGalleryImages.length}
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
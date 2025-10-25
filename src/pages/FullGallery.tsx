import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
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
              {galleryCategories[activeFilter].map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] animate-fade-in shadow-soft hover:shadow-elegant transition-elegant"
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
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FullGallery;
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
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            Moments of Serenity
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Step into our world of refined elegance and discover the artistry behind every experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square animate-fade-in shadow-soft hover:shadow-elegant transition-elegant"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-elegant group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-elegant" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

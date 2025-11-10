import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroImage from "@/assets/hero-image.jpg";
import aboutImage from "@/assets/about-image.jpg";
import facialImage from "@/assets/service-facial.jpg";
import massageImage from "@/assets/service-massage.jpg";
import bodyImage from "@/assets/service-body.jpg";
const galleryImages = [{
  src: heroImage,
  alt: "Rolora luxury spa interior"
}, {
  src: aboutImage,
  alt: "Premium skincare products"
}, {
  src: facialImage,
  alt: "Facial treatment experience"
}, {
  src: massageImage,
  alt: "Therapeutic massage session"
}, {
  src: bodyImage,
  alt: "Body treatment ritual"
}];
const Gallery = () => {
  return <section id="gallery" className="py-20 md:py-32 bg-secondary/30">
      
    </section>;
};
export default Gallery;
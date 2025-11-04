import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import shrekHead from "@/assets/shrek-head.png";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/40" />
      </div>
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl">
          <p className="text-sm md:text-base mb-4 tracking-wide">
            5,000+ TREATMENTS | 4.9 STARS
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95] tracking-tight flex flex-wrap items-center gap-2">
            <span>GET REALLY GO</span>
            <img 
              src={shrekHead} 
              alt="o" 
              className="inline-block w-[0.9em] h-[0.9em] object-contain"
            />
            <span>D SKIN</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-xl">
            Target acne, wrinkles, dark spots & more with high-tech facials built for your skin.
          </p>
          
          <Button 
            size="lg" 
            className="text-base px-10 py-6 font-semibold uppercase tracking-wide"
            onClick={scrollToBooking}
          >
            BOOK NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-glow.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-background">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/50" />
      </div>
      
      <div className="container relative z-10 px-6 py-32">
        <div className="max-w-5xl">
          <div className="inline-block mb-6 px-4 py-2 bg-foreground text-background">
            <p className="text-xs md:text-sm font-bold tracking-widest">
              5,000+ TREATMENTS | 4.9★ RATED
            </p>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter">
            GET REALLY<br />GOOD SKIN
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-2xl font-light leading-relaxed">
            High-tech facials that target acne, wrinkles, dark spots & more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="cta"
              size="lg" 
              className="text-lg"
              onClick={scrollToBooking}
            >
              BOOK YOUR APPOINTMENT
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToBooking}
            >
              VIEW PRICING
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

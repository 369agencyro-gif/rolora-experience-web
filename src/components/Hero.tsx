import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-glow.jpg";
const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 bg-background/30" />
      </div>
      
      <div className="container relative z-10 px-6 py-32">
        <div className="max-w-5xl">
          <div className="inline-block mb-6 px-4 py-2 bg-foreground text-background">
            <p className="text-xs md:text-sm font-bold tracking-widest"> Newport Beach | 4.9★ RATED</p>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tighter text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
              <div className="animate-slide-in-left">GET SCULPTED.</div>
              <div className="animate-slide-in-right md:order-3">GET GLOWING.</div>
              <div className="animate-fade-in md:order-2">GET ROLORA.</div>
            </div>
          </h1>
          
          
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="cta" size="lg" className="text-lg" onClick={scrollToBooking}>
              BOOK YOUR APPOINTMENT
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToBooking}>
              VIEW PRICING
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
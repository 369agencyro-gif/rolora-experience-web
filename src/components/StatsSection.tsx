import { Button } from "@/components/ui/button";
import diverseSkin from "@/assets/diverse-skin.jpg";

const StatsSection = () => {
  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Card on Left */}
          <div className="bg-background/95 backdrop-blur-sm p-12 rounded-sm shadow-lg border border-border/50 max-w-xl">
            <p className="text-sm uppercase tracking-wider mb-6 text-muted-foreground">
              NOT YOUR AVERAGE FACIAL STUDIO
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              WHERE GREAT SKIN<br />MEETS GOOD VIBES
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-foreground/80">
              Our open-concept studios in Texas, Arizona, Virginia, and D.C. bring your vibe up and help your skin thrive.
            </p>
            <Button 
              size="lg"
              onClick={scrollToBooking}
              className="uppercase font-bold tracking-wide bg-primary hover:bg-primary/90"
            >
              SEE LOCATIONS
            </Button>
          </div>

          {/* Large Image on Right */}
          <div className="relative">
            <img 
              src={diverseSkin} 
              alt="Happy clients with great skin" 
              className="w-full h-[600px] object-cover rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

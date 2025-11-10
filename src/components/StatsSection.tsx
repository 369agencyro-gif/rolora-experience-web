import { Button } from "@/components/ui/button";
import facialRoom from "@/assets/glowing-face.jpg";
import facialSculpting from "@/assets/facial-sculpting.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";

const StatsSection = () => {
  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    {
      value: "4/5",
      label: "members strongly recommend us to their friends"
    },
    {
      value: "82%",
      label: "of members see visible improvements in their skin"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Stats on Left */}
          <div className="space-y-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-3">
                <div className="text-7xl md:text-8xl font-bold tracking-tight leading-none">
                  {stat.value}
                </div>
                <p className="text-lg leading-relaxed text-foreground max-w-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Treatment Images on Right - Three in a Row */}
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-sm cursor-pointer">
                <img 
                  src={facialRoom} 
                  alt="Facial treatment in progress" 
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500" />
              </div>
              <div className="group relative overflow-hidden rounded-sm cursor-pointer">
                <img 
                  src={facialSculpting} 
                  alt="Second cleanse facial treatment" 
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500" />
              </div>
              <div className="group relative overflow-hidden rounded-sm cursor-pointer">
                <img 
                  src={glowingSkin} 
                  alt="Glowing skin results" 
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500" />
              </div>
            </div>
            
            <Button 
              size="lg" 
              onClick={scrollToBooking}
              className="uppercase font-bold tracking-wide w-full md:w-auto md:px-16"
            >
              BOOK NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

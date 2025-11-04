import facialRoom from "@/assets/facial-room.jpg";
import facialSculpting from "@/assets/facial-sculpting.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";

const StatsSection = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Stats on Left - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-16">
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

          {/* Treatment Images on Right - Takes 3 columns */}
          <div className="lg:col-span-3 grid grid-cols-3 gap-3">
            <img 
              src={facialRoom} 
              alt="Facial treatment in progress" 
              className="w-full aspect-[3/4] object-cover rounded-sm border-2 border-border hover:border-foreground hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:scale-105 transition-all cursor-pointer"
            />
            <img 
              src={facialSculpting} 
              alt="Second cleanse facial treatment" 
              className="w-full aspect-[3/4] object-cover rounded-sm border-2 border-border hover:border-foreground hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:scale-105 transition-all cursor-pointer"
            />
            <img 
              src={glowingSkin} 
              alt="Glowing skin results" 
              className="w-full aspect-[3/4] object-cover rounded-sm border-2 border-border hover:border-foreground hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:scale-105 transition-all cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

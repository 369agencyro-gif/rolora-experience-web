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
    <section className="py-20 bg-background">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stats on Left */}
          <div className="space-y-12">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-6xl md:text-7xl font-bold mb-3">
                  {stat.value}
                </div>
                <p className="text-base text-foreground/80 max-w-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Treatment Images on Right */}
          <div className="grid grid-cols-3 gap-4">
            <img 
              src={facialRoom} 
              alt="Facial treatment in progress" 
              className="w-full aspect-[3/4] object-cover rounded-lg"
            />
            <img 
              src={facialSculpting} 
              alt="Second cleanse facial treatment" 
              className="w-full aspect-[3/4] object-cover rounded-lg"
            />
            <img 
              src={glowingSkin} 
              alt="Glowing skin results" 
              className="w-full aspect-[3/4] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

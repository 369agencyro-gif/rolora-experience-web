import studioInterior from "@/assets/why-rolora-mask.jpg";

const WhyRolora = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              WHY ROLORA HITS DIFFERENT
            </h2>
            
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Rolora isn't your typical "relax-and-hope-for-a-glow" facial spot.
              We're here for snatched results, sculpted energy, and glow that gets noticed.
            </p>
          </div>
          
          <div className="w-full">
            <img 
              src={studioInterior} 
              alt="Rolora Studio" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Desktop Layout - Overlay */}
        <div className="hidden lg:block max-w-7xl mx-auto">
          <div className="relative h-[600px]">
            <img 
              src={studioInterior} 
              alt="Rolora Studio" 
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center max-w-4xl px-12">
                <h2 className="text-5xl xl:text-6xl font-black mb-8 tracking-tight uppercase text-white">
                  WHY ROLORA HITS DIFFERENT
                </h2>
                
                <p className="text-xl xl:text-2xl text-white/90 leading-relaxed">
                  Rolora isn't your typical "relax-and-hope-for-a-glow" facial spot.
                  We're here for snatched results, sculpted energy, and glow that gets noticed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRolora;
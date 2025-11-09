const features = [
  {
    title: "SCULPTED",
    description: "Lifted contours and defined facial structure"
  },
  {
    title: "GLOWING",
    description: "Radiant, healthy skin that shines from within"
  },
  {
    title: "HEALTHY",
    description: "Long-lasting skin confidence and reduced tension"
  }
];

const WhyRolora = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">
            THE ROLORA METHOD
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            At ROLORA, we offer advanced facials, facial sculpting, and body rolling treatments that deliver real results: lifted contours, glowing skin, reduced tension, and long-lasting skin confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="group relative text-center p-8 border-2 border-border bg-background transition-all duration-500 hover:border-foreground hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4 text-foreground uppercase tracking-wider transition-transform duration-500 group-hover:scale-110">
                    {feature.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyRolora;
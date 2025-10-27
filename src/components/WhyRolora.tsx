const features = [
  {
    title: "Expert Artistry",
    description: "Masters of facial sculpting and transformation with precision and care"
  },
  {
    title: "Premium Products",
    description: "Finest luxury skincare formulations crafted with natural ingredients"
  },
  {
    title: "Organic Treatments",
    description: "Natural, sustainable approach honoring your skin and the earth"
  },
  {
    title: "Personalized Care",
    description: "Customized treatments designed for your unique skin needs"
  },
  {
    title: "Safe & Certified",
    description: "Professionally trained aestheticians using advanced techniques"
  },
  {
    title: "Holistic Wellness",
    description: "Complete mind-body approach to beauty and relaxation"
  }
];

const WhyRolora = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-serif font-light tracking-wider mb-2 text-muted-foreground/90">
            ROLORA SPA
          </h2>
          <h3 className="text-xs md:text-sm font-serif font-light tracking-widest mb-6 text-muted-foreground/60">
            WHERE ART MEETS SCIENCE
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent"></div>
                </div>
                
                <h3 className="font-serif text-base font-light tracking-wider mb-3 text-muted-foreground uppercase">
                  {feature.title}
                </h3>
                
                <p className="text-xs text-muted-foreground/70 leading-relaxed tracking-wide">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyRolora;
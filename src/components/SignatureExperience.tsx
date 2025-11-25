const SignatureExperience = () => {
  const steps = [
    {
      title: "ASSESS",
      description: "A refined, efficient, and results-focused experience tailored to your skin and goals."
    },
    {
      title: "TREAT",
      description: "Expect expert guidance, elevated care, and visible improvement in how your skin looks and feels."
    },
    {
      title: "RESULTS",
      description: "See results from your very first visit — and even more with each one after."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm md:text-base font-medium uppercase tracking-wider mb-12 text-foreground/60">
            WHAT TO EXPECT AT ROLORA
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm hover:scale-105 hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] transition-all duration-300"
              >
                <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureExperience;

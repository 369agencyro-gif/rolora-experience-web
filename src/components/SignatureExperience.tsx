const SignatureExperience = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-center mb-8 text-primary">
            WHAT TO EXPECT
          </h2>
          
          <p className="text-xl leading-relaxed mb-16 text-center">
            A refined, efficient, and results-focused experience tailored to your skin and goals.
          </p>

          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "ASSESS",
                description: "We start with a thorough skin analysis to understand your unique concerns, goals, and skin type."
              },
              {
                number: "02",
                title: "TREAT",
                description: "Experience expert techniques with advanced modalities designed to lift, sculpt, and illuminate your skin."
              },
              {
                number: "03",
                title: "RESULTS",
                description: "See visible improvement from your very first visit — and even more dramatic results with each session."
              }
            ].map((step, i) => (
              <div key={i} className="group relative flex items-start gap-6 px-8 py-6 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary text-xl font-black">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 text-foreground tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureExperience;

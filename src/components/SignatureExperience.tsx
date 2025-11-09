

const SignatureExperience = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm md:text-base font-medium uppercase tracking-wider mb-12 text-foreground/60">
            WHAT TO EXPECT AT ROLORA
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-muted/30 transition-all duration-300 hover:bg-muted/50">
              <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
                ASSESS
              </h3>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                A refined, efficient, and results-focused experience tailored to your skin and goals.
              </p>
            </div>

            <div className="p-8 bg-muted/30 transition-all duration-300 hover:bg-muted/50">
              <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
                TREAT
              </h3>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Expect expert guidance, elevated care, and visible improvement in how your skin looks and feels.
              </p>
            </div>

            <div className="p-8 bg-muted/30 transition-all duration-300 hover:bg-muted/50">
              <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
                RESULTS
              </h3>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                See results from your very first visit — and even more with each one after.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureExperience;

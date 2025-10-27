

const SignatureExperience = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <div className="h-px w-12 mx-auto mb-4 bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent"></div>
            <h2 className="text-2xl md:text-3xl font-serif font-light tracking-wider mb-1 text-muted-foreground/90">
              The Rolora
            </h2>
            <h2 className="text-xl md:text-2xl font-serif font-normal tracking-widest mb-4 text-muted-foreground">
              SIGNATURE EXPERIENCE
            </h2>
            <div className="h-px w-12 mx-auto bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent"></div>
          </div>
          
          <p className="text-sm md:text-base text-muted-foreground/70 leading-relaxed mb-8 max-w-xl mx-auto font-light tracking-wide">
            ROLORA treatments are meticulously crafted to sculpt, illuminate, and refine. 
            Begin with your signature facial, enhance with targeted intensifiers, or harmonize with body rolling for a comprehensive ritual.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-muted-foreground/30"></div>
            <span className="text-xs md:text-sm font-light italic tracking-wider text-muted-foreground/80 px-2">
              Where precision meets perfection
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-muted-foreground/30"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
            <div className="p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-muted-foreground/10 hover:border-muted-foreground/20 transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent"></div>
              </div>
              <h3 className="font-serif font-light text-lg tracking-wider mb-3 text-muted-foreground">SCULPT</h3>
              <p className="text-xs text-muted-foreground/70 leading-relaxed tracking-wide">Define and contour your natural beauty with precision techniques</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-muted-foreground/10 hover:border-muted-foreground/20 transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent"></div>
              </div>
              <h3 className="font-serif font-light text-lg tracking-wider mb-3 text-muted-foreground">ILLUMINATE</h3>
              <p className="text-xs text-muted-foreground/70 leading-relaxed tracking-wide">Reveal luminous radiance through transformative treatments</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-muted-foreground/10 hover:border-muted-foreground/20 transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent"></div>
              </div>
              <h3 className="font-serif font-light text-lg tracking-wider mb-3 text-muted-foreground">REFINE</h3>
              <p className="text-xs text-muted-foreground/70 leading-relaxed tracking-wide">Perfect your glow with meticulous, luxurious care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureExperience;

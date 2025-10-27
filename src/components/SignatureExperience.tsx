import { Scissors, Lightbulb, Gem } from "lucide-react";

const SignatureExperience = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <div className="h-px w-16 mx-auto mb-6 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            <h2 className="text-4xl md:text-6xl font-display font-light tracking-wide mb-2">
              The Rolora
            </h2>
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight mb-6">
              SIGNATURE EXPERIENCE
            </h2>
            <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed mb-12 max-w-2xl mx-auto font-light tracking-wide">
            ROLORA treatments are meticulously crafted to sculpt, illuminate, and refine. 
            Begin with your signature facial, enhance with targeted intensifiers, or harmonize with body rolling for a comprehensive ritual.
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-2">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-accent/60"></div>
            <span className="text-lg md:text-xl font-light italic tracking-wider text-foreground/90 px-4">
              Where precision meets perfection
            </span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-accent/60"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
            <div className="p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-accent/20 shadow-elegant hover:shadow-soft hover:border-accent/40 transition-elegant hover:scale-105">
              <div className="mb-4">
                <Scissors className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Sculpt</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Define and contour your natural beauty with expert techniques</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-accent/20 shadow-elegant hover:shadow-soft hover:border-accent/40 transition-elegant hover:scale-105">
              <div className="mb-4">
                <Lightbulb className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Illuminate</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Reveal your inner radiance with transformative treatments</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-accent/20 shadow-elegant hover:shadow-soft hover:border-accent/40 transition-elegant hover:scale-105">
              <div className="mb-4">
                <Gem className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Refine</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Perfect your glow with precision and luxury care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureExperience;

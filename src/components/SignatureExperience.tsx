import { Sparkles, Scissors, Lightbulb, Gem } from "lucide-react";

const SignatureExperience = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">
            Rolora Signature Experience
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            ROLORA treatments are crafted to sculpt, illuminate, and refine. 
            Start with your signature facial, layer on targeted Intensifiers, or pair with body rolling for a full-face-and-body ritual.
          </p>
          
          <div className="inline-flex items-center gap-2 text-xl md:text-2xl font-medium text-accent">
            <Sparkles className="w-6 h-6" />
            <span className="italic">Luxury is in the details. Glow is the signature.</span>
            <Sparkles className="w-6 h-6" />
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

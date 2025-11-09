import { Button } from "@/components/ui/button";
import diverseSkin from "@/assets/diverse-skin.jpg";

const WhatToExpect = () => {
  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="py-24 bg-muted/20">
      <div className="container px-6">
      <div className="max-w-7xl mx-auto">
          {/* Feature Image */}
          <div className="mb-16">
            <img 
              src={diverseSkin} 
              alt="Diverse women showing beautiful, glowing skin"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight uppercase text-center">
            Here's what makes us stand out in Newport:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="p-8 bg-muted/30 border border-border/20 transition-all duration-300 hover:bg-muted/50 hover:border-border/40 hover:shadow-lg group">
              <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">
                Results You Can See
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                We don't do fluff. Every technique is intentional, targeted, and designed to lift, sculpt, and illuminate from the first session.
              </p>
            </div>

            <div className="p-8 bg-muted/30 border border-border/20 transition-all duration-300 hover:bg-muted/50 hover:border-border/40 hover:shadow-lg group">
              <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">
                Sculpting Specialists
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                Your skin isn't treated with a "one-size-fits-all" protocol. Rolora estheticians are trained in facial contouring and sculpting work — we know how to shape, lift, and energize the face.
              </p>
            </div>

            <div className="p-8 bg-muted/30 border border-border/20 transition-all duration-300 hover:bg-muted/50 hover:border-border/40 hover:shadow-lg group">
              <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">MODERN TECHNIQUES ONLY</h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                High-performance formulas, advanced modalities, and sculpting methods that actually move the needle — not a basic "relaxing" facial you forget tomorrow.
              </p>
            </div>

            <div className="p-8 bg-muted/30 border border-border/20 transition-all duration-300 hover:bg-muted/50 hover:border-border/40 hover:shadow-lg group">
              <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">
                Glow with Energy
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                We don't just treat the skin — we activate it. Expect lifted features, brighter tone, and that unmistakable Rolora Glow that feels alive, not coated.
              </p>
            </div>

            <div className="p-8 bg-muted/30 border border-border/20 transition-all duration-300 hover:bg-muted/50 hover:border-border/40 hover:shadow-lg group md:col-span-2 lg:col-span-1">
              <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">
                Face + Body Connection
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                Your glow isn't only on your face. Rolora's Flow approach treats lymph, energy, and circulation — so your whole appearance looks lighter, tighter, and more defined.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" onClick={scrollToBooking} className="bg-foreground text-background hover:bg-foreground/90 uppercase font-bold tracking-wide px-10 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              BOOK YOUR APPOINTMENT
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default WhatToExpect;
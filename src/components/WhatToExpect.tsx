import BookingButton from "@/components/BookingButton";
import diverseSkin from "@/assets/facial-mask.jpg";

const WhatToExpect = () => {
  const features = [
    {
      title: "Results You Can See",
      description: "We don't do fluff. Every technique is intentional, targeted, and designed to lift, sculpt, and illuminate from the first session."
    },
    {
      title: "Sculpting Specialists",
      description: "Your skin isn't treated with a \"one-size-fits-all\" protocol. Rolora estheticians are trained in facial contouring and sculpting work — we know how to shape, lift, and energize the face."
    },
    {
      title: "MODERN TECHNIQUES ONLY",
      description: "High-performance formulas, advanced modalities, and sculpting methods that actually move the needle — not a basic \"relaxing\" facial you forget tomorrow."
    },
    {
      title: "Glow with Energy",
      description: "We don't just treat the skin — we activate it. Expect lifted features, brighter tone, and that unmistakable Rolora Glow that feels alive, not coated."
    },
    {
      title: "Face + Body Connection",
      description: "Your glow isn't only on your face. Rolora's Flow approach treats lymph, energy, and circulation — so your whole appearance looks lighter, tighter, and more defined."
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight uppercase text-center">
            Here's what makes us stand out in Newport:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm hover:scale-105 hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] transition-all duration-300"
              >
                <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-base text-foreground/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image with Card Overlay */}
          <div className="relative mt-16 w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
            <img 
              src={diverseSkin} 
              alt="Woman with luxurious facial mask treatment showing glowing skin"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute left-4 right-4 top-4 md:left-0 md:right-auto md:top-0 bg-background/95 backdrop-blur-sm p-6 md:p-10 md:max-w-lg rounded-lg">
              <p className="text-xs uppercase tracking-widest mb-3 text-foreground/60 font-medium">
                NOT YOUR AVERAGE FACIAL STUDIO
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-black mb-4 uppercase tracking-tight leading-none">
                Where Great Skin Meets Good Vibes
              </h3>
              <p className="text-sm md:text-base text-foreground/80 mb-6 leading-relaxed">
                Our open-concept studios in Newport bring your vibe up and help your skin thrive.
              </p>
              <BookingButton 
                size="lg"
                className="uppercase font-bold tracking-wide px-8 w-full md:w-auto"
              >
                BOOK NOW
              </BookingButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;

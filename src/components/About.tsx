import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-background">
      {/* Mobile Layout - Stacked */}
      <div className="lg:hidden">
        {/* Image */}
        <div className="relative h-[60vh] w-full">
          <img 
            src={aboutImage} 
            alt="Rolora luxury spa experience" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-background" />
        </div>
        
        {/* Text Content */}
        <div className="px-6 py-12 bg-background">
          <div className="max-w-xl mx-auto animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent font-semibold uppercase tracking-widest text-xs">
                Our Philosophy
              </span>
            </div>
            
            <h2 className="text-3xl font-display font-semibold mb-6 leading-tight">
              The Rolora Philosophy
            </h2>
            
            <div className="space-y-5 text-base leading-relaxed">
              <p className="text-foreground/90">
                At Rolora, we believe beauty is a journey of self-discovery and wellness. 
                Our approach transcends traditional treatments, creating a sanctuary where 
                science meets artistry, and luxury embraces authenticity.
              </p>
              <p className="text-foreground/90">
                Each experience is thoughtfully crafted to honor your unique essence, 
                combining cutting-edge techniques with timeless rituals. We celebrate 
                natural radiance, nurture inner balance, and cultivate lasting transformation.
              </p>
              <div className="pt-4 border-t border-accent/20">
                <p className="text-accent font-semibold text-lg italic">
                  Experience the art of refined beauty. Embrace the Rolora lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden lg:flex min-h-screen items-center">
        {/* Left side - Image with fade effect */}
        <div className="absolute inset-y-0 left-0 w-1/2">
          <img 
            src={aboutImage} 
            alt="Rolora luxury spa experience" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/80 to-background" />
        </div>
        
        {/* Right side - Text content */}
        <div className="relative z-10 w-full">
          <div className="container px-6">
            <div className="ml-auto max-w-2xl pl-16 py-20">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="text-accent font-semibold uppercase tracking-widest text-sm">
                    Our Philosophy
                  </span>
                </div>
                
                <h2 className="text-5xl xl:text-7xl font-display font-semibold mb-8 text-balance">
                  The Rolora Philosophy
                </h2>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-foreground/90">
                    At Rolora, we believe beauty is a journey of self-discovery and wellness. 
                    Our approach transcends traditional treatments, creating a sanctuary where 
                    science meets artistry, and luxury embraces authenticity.
                  </p>
                  <p className="text-foreground/90">
                    Each experience is thoughtfully crafted to honor your unique essence, 
                    combining cutting-edge techniques with timeless rituals. We celebrate 
                    natural radiance, nurture inner balance, and cultivate lasting transformation.
                  </p>
                  <p className="text-accent font-semibold text-xl italic">
                    Experience the art of refined beauty. Embrace the Rolora lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

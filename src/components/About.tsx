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
            <div className="flex justify-center mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent"></div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-serif font-light tracking-wider text-center mb-2 text-muted-foreground/90">
              ROLORA SPA
            </h2>
            <h3 className="text-xl md:text-2xl font-serif font-normal tracking-widest text-center mb-6 text-muted-foreground">
              PHILOSOPHY
            </h3>
            
            <div className="space-y-4 text-sm leading-relaxed">
              <p className="text-muted-foreground/80 tracking-wide">
                At Rolora, we believe beauty is a journey of self-discovery and wellness. 
                Our approach transcends traditional treatments, creating a sanctuary where 
                science meets artistry, and luxury embraces authenticity.
              </p>
              <p className="text-muted-foreground/80 tracking-wide">
                Each experience is thoughtfully crafted to honor your unique essence, 
                combining cutting-edge techniques with timeless rituals. We celebrate 
                natural radiance, nurture inner balance, and cultivate lasting transformation.
              </p>
              <div className="pt-4 flex flex-col items-center gap-2">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent"></div>
                <p className="text-muted-foreground/90 font-light text-xs italic tracking-wider text-center">
                  Experience the art of refined beauty
                </p>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent"></div>
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
                <div className="flex justify-start mb-6">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent"></div>
                </div>
                
                <h2 className="text-3xl xl:text-4xl font-serif font-light tracking-wider mb-2 text-muted-foreground/90">
                  ROLORA SPA
                </h2>
                <h3 className="text-2xl xl:text-3xl font-serif font-normal tracking-widest mb-8 text-muted-foreground">
                  PHILOSOPHY
                </h3>
                
                <div className="space-y-5 text-base leading-relaxed">
                  <p className="text-muted-foreground/80 tracking-wide">
                    At Rolora, we believe beauty is a journey of self-discovery and wellness. 
                    Our approach transcends traditional treatments, creating a sanctuary where 
                    science meets artistry, and luxury embraces authenticity.
                  </p>
                  <p className="text-muted-foreground/80 tracking-wide">
                    Each experience is thoughtfully crafted to honor your unique essence, 
                    combining cutting-edge techniques with timeless rituals. We celebrate 
                    natural radiance, nurture inner balance, and cultivate lasting transformation.
                  </p>
                  <div className="pt-4 flex items-center gap-3">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-muted-foreground/30"></div>
                    <p className="text-muted-foreground/90 font-light text-sm italic tracking-wider">
                      Experience the art of refined beauty
                    </p>
                  </div>
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

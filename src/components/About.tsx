import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 flex items-center overflow-hidden bg-background">
      {/* Left side - Image with fade effect */}
      <div className="absolute inset-y-0 left-0 w-1/2">
        <img 
          src={aboutImage} 
          alt="Rolora luxury spa experience" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay that fades to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/80 to-background" />
      </div>
      
      {/* Right side - Text content */}
      <div className="relative z-10 w-full">
        <div className="container px-6">
          <div className="ml-auto max-w-2xl pl-8 md:pl-16">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-accent font-semibold uppercase tracking-widest text-sm">
                  Our Philosophy
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-semibold mb-6 text-balance">
                The Rolora Philosophy
              </h2>
              
              <div className="space-y-4 text-base md:text-lg leading-relaxed">
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
                <p className="text-accent font-semibold text-lg italic">
                  Experience the art of refined beauty. Embrace the Rolora lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Image with seamless fade */}
          <div className="relative animate-fade-in order-2 md:order-1">
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Rolora luxury spa experience" 
                className="w-full h-[400px] md:h-[500px] object-cover"
                style={{
                  maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)'
                }}
              />
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="animate-fade-in order-1 md:order-2">
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
    </section>
  );
};

export default About;

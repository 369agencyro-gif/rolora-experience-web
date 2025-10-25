import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          <div className="order-2 md:order-1 animate-fade-in">
            <img 
              src={aboutImage} 
              alt="Rolora luxury spa experience" 
              className="rounded-2xl shadow-elegant w-full h-[500px] object-cover"
            />
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-balance">
              The Rolora Philosophy
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Rolora, we believe beauty is a journey of self-discovery and wellness. 
                Our approach transcends traditional treatments, creating a sanctuary where 
                science meets artistry, and luxury embraces authenticity.
              </p>
              <p>
                Each experience is thoughtfully crafted to honor your unique essence, 
                combining cutting-edge techniques with timeless rituals. We celebrate 
                natural radiance, nurture inner balance, and cultivate lasting transformation.
              </p>
              <p className="text-primary font-medium">
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

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Tranquility";
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (!isDeleting && displayText === fullText) {
      // Pause at full text
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      // Pause at empty, then start typing again
      timeout = setTimeout(() => setIsDeleting(false), 500);
    } else if (isDeleting) {
      // Delete character
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      }, 50);
    } else {
      // Add character
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, 150);
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70" />
      </div>
      
      <div className="container relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold mb-6 text-balance leading-tight">
            Where Luxury Meets
            <span className="block text-accent mt-2">
              {displayText}
              <span className="inline-block w-1 h-[0.8em] bg-accent ml-1 animate-pulse" />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience refined beauty and wellness at Rolora. Personalized treatments designed to reveal your natural radiance and restore inner balance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-base px-8 py-6 shadow-elegant transition-elegant hover:scale-105 animate-glow"
              onClick={scrollToBooking}
            >
              Book Your Experience
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-base px-8 py-6 border-2 transition-elegant hover:scale-105"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover Our Philosophy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

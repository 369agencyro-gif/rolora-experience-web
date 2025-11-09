import { Button } from "@/components/ui/button";

const WhatToExpect = () => {
  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-muted/20">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase">
            WHAT TO EXPECT AT ROLORA
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
            A refined, efficient, and results-focused experience tailored to your skin and goals.
          </p>

          <Button 
            size="lg"
            onClick={scrollToBooking}
            className="bg-foreground text-background hover:bg-foreground/90 uppercase font-bold tracking-wide px-10 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            BOOK YOUR APPOINTMENT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;

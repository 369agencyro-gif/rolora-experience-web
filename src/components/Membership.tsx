import { Button } from "@/components/ui/button";
import studioInterior from "@/assets/studio-interior.jpg";

const Membership = () => {
  const scrollToBooking = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-0 bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left side - Image */}
        <div className="relative h-[400px] lg:h-auto">
          <img 
            src={studioInterior} 
            alt="Luxury spa interior with modern design"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right side - Content */}
        <div className="flex items-center justify-center bg-background p-8 md:p-16 lg:p-20">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4">
              The Really Good Membership
            </h2>
            
            <p className="text-xl md:text-2xl font-bold mb-6">
              Starting at $109/mo
            </p>
            
            <p className="text-base md:text-lg mb-6 text-foreground/90">
              Keep your skin glowing with members-only perks:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="text-sm md:text-base text-foreground/90">
                • One Really Good Facial™ monthly
              </li>
              <li className="text-sm md:text-base text-foreground/90">
                • 10% off all product purchases
              </li>
              <li className="text-sm md:text-base text-foreground/90">
                • $20 off all premium boosters
              </li>
              <li className="text-sm md:text-base text-foreground/90">
                • Discounts on all additional services
              </li>
              <li className="text-sm md:text-base text-foreground/90">
                • Exclusive access to product launches, events & more
              </li>
            </ul>
            
            <Button 
              onClick={scrollToBooking}
              className="bg-[#0000FF] hover:bg-[#0000DD] text-white font-bold uppercase tracking-wide px-8 py-6 text-base mb-4"
            >
              BOOK NOW
            </Button>
            
            <p className="text-sm text-foreground/60">
              Ask about membership during your next visit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;

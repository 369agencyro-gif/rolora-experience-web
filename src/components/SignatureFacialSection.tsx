import { Button } from "@/components/ui/button";
import BookingButton from "@/components/BookingButton";
import heroImage from "@/assets/facial-skincare.jpg";

const SignatureFacialSection = () => {
  const benefits = [
    "Boosts hydration",
    "Smooths texture",
    "Clears breakouts",
    "Softens fine lines",
    "Strengthens skin",
    "Calms irritation"
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container px-6">
        {/* New Client Offer Banner */}
        <div className="bg-[#3B2414] text-white py-4 px-6 mb-12 rounded-lg">
          <p className="text-center font-medium">
            New Client Offer: First Facial for $99
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Large Treatment Image */}
          <div className="order-2 lg:order-1">
            <img 
              src={heroImage} 
              alt="Facial treatment with specialized tools"
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              THE REALLY GOOD FACIAL™
            </h2>
            
            <div className="text-lg">
              <span className="font-semibold">Starting at $99</span>
              <span className="text-muted-foreground line-through ml-2">$140</span>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Our signature 60-minute facial combines expert techniques and clinical products to target your unique skin concerns.
            </p>

            {/* CTAs */}
            <div className="flex gap-4">
              <BookingButton 
                size="default"
                className="uppercase font-bold tracking-wide"
              >
                BOOK NOW
              </BookingButton>
              <Button 
                size="default"
                variant="outline"
                className="uppercase font-bold tracking-wide"
              >
                LEARN MORE
              </Button>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-6">
              {benefits.map((benefit, idx) => (
                <div 
                  key={idx}
                  className="border-t border-border pt-4"
                >
                  <p className="text-base">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureFacialSection;
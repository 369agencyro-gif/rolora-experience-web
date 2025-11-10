import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Geetu",
    treatment: "after The Really Good Facial™, Microdermabrasion",
    text: "They helped me build a plan for fading my dark spots over time. It finally feels like a difference!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Jaycyll",
    treatment: "after The Really Good Facial™",
    text: "Every treatment feels like a reset for my dry, dull skin. My esthetician knows exactly what I need.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop"
  },
  {
    name: "Sarah",
    treatment: "after The Really Good Facial™",
    text: "The personalized approach and luxurious atmosphere make every visit special. My skin has never looked better.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
  },
  {
    name: "Paola",
    treatment: "after The Really Good Facial™",
    text: "My skin used to feel tight and flaky no matter what I used. Now it feels balanced and glowy.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        {/* Rating Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-6xl font-black">4.9</span>
          </div>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
            ))}
          </div>
          <p className="text-sm uppercase tracking-widest font-semibold">
            110,000+ FACIALS & COUNTING
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-none">
              <CardContent className="p-0">
                {/* Customer Image */}
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} after treatment`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Customer Info */}
                <div className="space-y-3">
                  <p className="text-sm font-medium">
                    {testimonial.name} {testimonial.treatment}
                  </p>
                  
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-sm leading-relaxed text-foreground/80">
                    "{testimonial.text}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
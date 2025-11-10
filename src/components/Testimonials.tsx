import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import facialMask from "@/assets/facial-mask.jpg";
import glowingFace from "@/assets/glowing-face.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import diverseSkin from "@/assets/diverse-skin.jpg";

const testimonials = [
  {
    name: "Geetu",
    treatment: "after The Really Good Facial™, Microdermabrasion",
    text: "They helped me build a plan for fading my dark spots over time. It finally feels like a difference!",
    rating: 5,
    image: facialMask
  },
  {
    name: "Jaycyll",
    treatment: "after The Really Good Facial™",
    text: "Every treatment feels like a reset for my dry, dull skin. My esthetician knows exactly what I need.",
    rating: 5,
    image: glowingFace
  },
  {
    name: "Sarah",
    treatment: "after The Really Good Facial™",
    text: "The personalized approach and luxurious atmosphere make every visit special. My skin has never looked better.",
    rating: 5,
    image: glowingSkin
  },
  {
    name: "Paola",
    treatment: "after The Really Good Facial™",
    text: "My skin used to feel tight and flaky no matter what I used. Now it feels balanced and glowy.",
    rating: 5,
    image: diverseSkin
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/20">
      <div className="container px-6 max-w-7xl mx-auto">
        {/* Rating Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-7xl md:text-8xl font-black tracking-tight">4.9</span>
          </div>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-sm md:text-base uppercase tracking-[0.3em] font-bold text-foreground/70">
            110,000+ FACIALS & COUNTING
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group overflow-hidden border-none shadow-none bg-transparent transition-transform duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                {/* Customer Image */}
                <div className="aspect-[3/4] overflow-hidden mb-5 rounded-sm">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} after treatment`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Customer Info */}
                <div className="space-y-4">
                  <p className="text-sm font-bold uppercase tracking-wide">
                    {testimonial.name} <span className="font-normal lowercase tracking-normal">{testimonial.treatment}</span>
                  </p>
                  
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-sm md:text-base leading-relaxed text-foreground/90">
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
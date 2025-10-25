import { useState } from "react";
import { Star } from "lucide-react";
import studioImage from "@/assets/studio-interior.jpg";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Regular Client",
    text: "The Rolora experience is truly transformative. From the moment I walked in, I felt pampered and cared for. The facial sculpting treatment left my skin glowing for weeks. The attention to detail and expertise is unmatched.",
    rating: 5,
  },
  {
    name: "Jessica L.",
    role: "First-Time Visitor",
    text: "I've been to many spas, but Rolora stands out. The personalized approach and luxurious atmosphere make every visit special. My skin has never looked better, and I always leave feeling refreshed and rejuvenated.",
    rating: 5,
  },
  {
    name: "Emily R.",
    role: "Loyal Customer",
    text: "Rolora has become my sanctuary. The treatments are not just about skincare—they're a holistic wellness experience. The staff is incredibly knowledgeable and the results speak for themselves.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={studioImage}
          alt="Rolora Studio Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <span className="text-white/80 uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Testimonials
          </span>
          
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-12">
            What Our Clients Say
          </h2>

          {/* Testimonial Content */}
          <div className="mb-12 animate-fade-in" key={currentIndex}>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90">
              {testimonials[currentIndex].text}
            </p>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>

            {/* Client Info */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent/50 flex items-center justify-center mb-3">
                <span className="text-2xl font-display font-semibold text-accent">
                  {testimonials[currentIndex].name.charAt(0)}
                </span>
              </div>
              <h4 className="font-display text-xl font-semibold uppercase tracking-wider mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-sm text-white/70">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
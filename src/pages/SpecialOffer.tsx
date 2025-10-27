import { Link } from "react-router-dom";
import { Check, Sparkles, Clock, MapPin, Gift } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCountdownTimer } from "@/hooks/use-countdown-timer";

const SpecialOffer = () => {
  const { ref: includedRef, isVisible: includedVisible } = useScrollAnimation({ threshold: 0.2 });
  const timeLeft = useCountdownTimer();

  return (
    <ServiceLayout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero Section with Offer */}
        <section className="pt-24 pb-12 px-6">
          <div className="container max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in">
              <Gift className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">
                Offer Expires in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-display font-bold mb-6 leading-tight animate-fade-in">
              Try Your First<br />
              <span className="text-accent">ROLORA FACIAL GLOW™</span><br />
              For Only
            </h1>

            <div className="mb-4 animate-fade-in">
              <span className="text-4xl md:text-5xl font-bold text-accent">$99</span>
              <div className="text-base text-muted-foreground mt-2">
                (Instead of <span className="line-through">$235</span>)
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <Clock className="w-4 h-4" />
              <span className="text-xs">First-Time Clients Only • Limited Availability</span>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full max-w-lg h-14 text-xs md:text-sm font-bold rounded-full bg-accent hover:bg-accent/90 text-white shadow-elegant hover:shadow-soft btn-soft-pulse hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="#book-now">
                YES! Reserve My Spot Now →
              </a>
            </Button>

            <p className="text-xs text-muted-foreground mt-4 animate-fade-in">
              <MapPin className="w-3 h-3 inline mr-1" />
              Available at All Rolora Locations
            </p>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 px-6 bg-card/50">
          <div className="container max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                What's Included
              </h2>
              <p className="text-muted-foreground text-lg">
                Experience our signature treatment at an exclusive introductory price
              </p>
            </div>

            <div ref={includedRef} className="space-y-4">
              {[
                "60-minute Rolora Facial Glow™ treatment",
                "Deep cleansing and exfoliation",
                "Advanced sculpting massage techniques",
                "Hydrating mask with premium serums",
                "LED light therapy for radiance",
                "Facial rolling and gua sha techniques",
                "Personalized skincare consultation",
                "Take-home skincare recommendations"
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-2xl bg-background border border-border hover:border-accent/30 transition-all duration-500 ${
                    includedVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: includedVisible ? `${index * 100}ms` : '0ms'
                  }}
                >
                  <div className="mt-1 bg-accent/10 rounded-full p-1 flex-shrink-0">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6">
          <div className="container max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Transform Your Skin
            </h2>

            <div className="grid gap-6">
              {[
                {
                  title: "Instant Glow",
                  description: "See visible radiance and luminosity immediately after your first treatment"
                },
                {
                  title: "Sculpted Contours",
                  description: "Experience lifted, defined facial features with our specialized techniques"
                },
                {
                  title: "Deep Hydration",
                  description: "Restore moisture balance and achieve plump, supple skin"
                },
                {
                  title: "Reduced Fine Lines",
                  description: "Smooth away signs of aging with our advanced facial massage"
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-elegant transition-smooth"
                >
                  <h3 className="text-xl font-display font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Offer Section */}
        <section className="py-16 px-6 bg-muted/20">
          <div className="container max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Why This Special Offer?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe everyone deserves to experience the transformative power of our signature Rolora Facial Glow™. 
              This exclusive offer is our way of welcoming you to discover the Rolora difference at an accessible price.
            </p>
            <p className="text-lg font-semibold text-foreground mb-8">
              Join thousands of clients who have transformed their skin with Rolora.
            </p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="book-now" className="py-20 px-6">
          <div className="container max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Ready to Glow?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Book your introductory Rolora Facial Glow™ for only $99
              </p>

              <Button
                size="lg"
                className="w-full max-w-lg h-14 text-xs md:text-sm font-bold rounded-full bg-accent hover:bg-accent/90 text-white shadow-elegant hover:shadow-soft btn-soft-pulse hover:scale-105 transition-all duration-300 mb-6"
                asChild
              >
                <Link to="/contact">
                  Reserve My Spot Now →
                </Link>
              </Button>

              <p className="text-sm text-muted-foreground mb-4">
                First-time clients only • Limited availability
              </p>
              <p className="text-xs text-muted-foreground">
                By booking, you agree to our terms of service and cancellation policy
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-card/30">
          <div className="container max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Common Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Is this offer for new clients only?",
                  answer: "Yes, this exclusive introductory offer is available for first-time Rolora clients only."
                },
                {
                  question: "How long does the treatment take?",
                  answer: "Your full Rolora Facial Glow™ treatment takes 60 minutes, with time for consultation before and after."
                },
                {
                  question: "What should I expect after the treatment?",
                  answer: "You'll notice immediate glow and radiance. Results continue to improve over the next 24-48 hours as skin fully absorbs the treatment benefits."
                },
                {
                  question: "Can I purchase additional treatments?",
                  answer: "Absolutely! After experiencing your first treatment, you can book additional sessions at regular pricing or explore our packages for better value."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-background border border-border"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </ServiceLayout>
  );
};

export default SpecialOffer;

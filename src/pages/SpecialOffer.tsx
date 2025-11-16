import { Link } from "react-router-dom";
import { Check, Sparkles, Clock, MapPin, Gift, Star, ShieldCheck } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCountdownTimer } from "@/hooks/use-countdown-timer";
import facialImage from "@/assets/facial-sculpting.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
import skincareProducts from "@/assets/skincare-products.jpg";

const SpecialOffer = () => {
  const { ref: includedRef, isVisible: includedVisible } = useScrollAnimation({ threshold: 0.2 });
  const timeLeft = useCountdownTimer();

  return (
    <ServiceLayout>
      {/* Hero Section with Offer */}
      <section className="relative">
        <div className="relative h-[80vh] min-h-[700px] overflow-hidden">
          <img 
            src={facialImage}
            alt="Rolora Facial Treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container max-w-3xl mx-auto text-center px-6 animate-fade-in">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 backdrop-blur-md border border-accent/30 mb-8 shadow-elegant">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-foreground">
                  Exclusive Offer Ends: <span className="text-accent font-bold">{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-display font-semibold mb-6 leading-tight tracking-tight">
                Try Your First<br />
                <span className="text-accent">ROLORA FACIAL GLOW™</span><br />
                For Only
              </h1>

              <div className="relative inline-flex flex-col items-center mb-8 py-6 px-4 overflow-visible isolate z-10">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
                <div className="relative px-16 py-6 rounded-2xl bg-card/10 backdrop-blur-md border-2 border-accent/30 shadow-2xl overflow-visible">
                  <p className="text-6xl md:text-7xl leading-[1.2] font-display font-bold bg-gradient-to-br from-accent via-accent to-accent/60 bg-clip-text text-transparent tracking-tight">$99</p>
                  <p className="text-lg text-muted-foreground mt-2">
                    Instead of <span className="line-through">$235</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mb-8">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent font-semibold uppercase tracking-wide">First-Time Clients Only • Limited Availability</span>
              </div>

              <Button
                size="lg"
                className="h-14 text-sm font-bold uppercase tracking-wide bg-accent hover:bg-accent/90 text-white px-12 hover:scale-105 transition-all duration-300 shadow-elegant"
                asChild
              >
                <a href="#book-now">
                  Reserve My Spot Now →
                </a>
              </Button>

              <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                Available at All Rolora Locations
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* Gallery Carousel Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              {/* Signature Divider */}
              <div className="flex items-center justify-center mb-8 animate-fade-in">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-accent"></div>
                <span className="px-6 text-accent text-sm uppercase tracking-widest">Your Journey</span>
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-accent"></div>
              </div>
              
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Experience the Transformation
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  A glimpse into your Rolora journey
                </p>
              </div>

              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full animate-fade-in"
              >
                <CarouselContent>
                  {[
                    { src: facialRoom, alt: "Luxurious Facial Treatment Room" },
                    { src: glowingSkin, alt: "Glowing Skin Results" },
                    { src: studioInterior, alt: "Rolora Studio Interior" },
                    { src: skincareProducts, alt: "Premium Skincare Products" },
                    { src: facialImage, alt: "Facial Sculpting Treatment" }
                  ].map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-2">
                        <div className="overflow-hidden rounded-3xl ring-1 ring-border/50 shadow-elegant">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-80 object-cover hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 md:py-32">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              {/* Signature Divider */}
              <div className="flex items-center justify-center mb-8 animate-fade-in">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-accent"></div>
                <span className="px-6 text-accent text-sm uppercase tracking-widest">Included</span>
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-accent"></div>
              </div>
              
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                  What's Included in Your $99 Experience
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Experience our signature treatment at an exclusive introductory price
                </p>
              </div>

            <div ref={includedRef} className="space-y-4 max-w-4xl mx-auto">
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
                  className={`flex items-start gap-4 p-6 rounded-3xl bg-muted/20 border border-border/50 hover:shadow-elegant transition-all duration-1000 ease-out ${
                    includedVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    transitionDelay: includedVisible ? `${index * 100}ms` : '0ms'
                  }}
                >
                  <div className="mt-1 bg-accent/20 rounded-full p-2 flex-shrink-0">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              {/* Signature Divider */}
              <div className="flex items-center justify-center mb-8 animate-fade-in">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-accent"></div>
                <span className="px-6 text-accent text-sm uppercase tracking-widest">Testimonials</span>
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-accent"></div>
              </div>
              
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Verified Client Reviews
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Real results from real clients
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
                {[
                  {
                    name: "Michelle T.",
                    date: "2 weeks ago",
                    text: "This offer is incredible! I was skeptical at first, but the results after just one treatment were amazing. My skin felt so smooth and the glow lasted for days. Already booked my next session!",
                    rating: 5
                  },
                  {
                    name: "Amanda R.",
                    date: "1 week ago",
                    text: "Best decision ever. The $99 intro offer is such great value. The treatment was relaxing and professional. I noticed my skin looked brighter immediately. Highly recommend for first-timers!",
                    rating: 5
                  },
                  {
                    name: "Jennifer K.",
                    date: "3 days ago",
                    text: "I've tried many facials but Rolora is different. The attention to detail and the quality of products used really shows. My fine lines look smoother and my skin feels rejuvenated. Worth every penny!",
                    rating: 5
                  },
                  {
                    name: "Lisa M.",
                    date: "5 days ago",
                    text: "Absolutely loved my first Rolora experience! The staff was knowledgeable and the treatment exceeded my expectations. My skin has never looked better. Can't wait to come back!",
                    rating: 5
                  }
                ].map((review, index) => (
                  <div
                    key={index}
                    className="bg-muted/20 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:shadow-elegant transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
                          <span className="text-lg font-display font-semibold text-accent">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-foreground">{review.name}</h4>
                            <ShieldCheck className="w-4 h-4 text-accent fill-accent" />
                          </div>
                          <p className="text-xs text-muted-foreground">{review.date}</p>
                        </div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-foreground/90 leading-relaxed">
                      {review.text}
                    </p>

                    {/* Verified Badge */}
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <span className="text-xs text-accent font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        Verified Client
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-32">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-display font-semibold mb-8 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Transform Your Skin
                </h2>
                
                <Button
                  size="lg"
                  className="h-14 text-sm font-bold uppercase tracking-wide bg-accent hover:bg-accent/90 text-white px-12 hover:scale-105 transition-all duration-300 shadow-elegant mb-12"
                  asChild
                >
                  <a href="#book-now">
                    Reserve My Spot Now →
                  </a>
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
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
                    className="p-8 rounded-3xl bg-muted/20 border border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]"
                  >
                    <h3 className="text-2xl font-display font-semibold mb-3 text-accent">{benefit.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why This Offer Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              {/* Signature Divider */}
              <div className="flex items-center justify-center mb-8">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-accent"></div>
                <span className="px-6 text-accent text-sm uppercase tracking-widest">Our Promise</span>
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-accent"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-semibold mb-8 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                Why This Special Offer?
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
                We believe everyone deserves to experience the transformative power of our signature Rolora Facial Glow™. 
                This exclusive offer is our way of welcoming you to discover the Rolora difference at an accessible price.
              </p>
              <p className="text-xl font-semibold mb-8 text-foreground">
                Join thousands of clients who have transformed their skin with Rolora.
              </p>
              
              {/* Star Rating */}
              <div className="flex flex-col items-center gap-3 p-8 rounded-3xl bg-muted/20 border border-border/50 max-w-md mx-auto">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < 4 ? 'fill-accent text-accent' : 'fill-accent/50 text-accent/50'}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-display font-bold text-accent">4.95</span>
                  <span className="text-muted-foreground text-sm">out of 5 stars</span>
                </div>
                <span className="text-sm text-muted-foreground uppercase tracking-wide">Based on 2,847+ verified reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="book-now" className="py-20 md:py-32">
          <div className="container px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent backdrop-blur-sm border-2 border-accent/30 rounded-3xl p-12 md:p-16 text-center shadow-elegant animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 backdrop-blur-md border border-accent/30 mb-8 shadow-elegant">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold">
                    Offer Ends: <span className="text-accent font-bold">{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-display font-semibold mb-6 tracking-tight">
                  Ready to Glow?
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
                  Book your introductory Rolora Facial Glow™ for only $99
                </p>

                <Button
                  size="lg"
                  className="w-full max-w-md h-16 text-sm font-bold uppercase tracking-wide bg-accent hover:bg-accent/90 text-white shadow-elegant hover:scale-105 transition-all duration-300 mb-8"
                  asChild
                >
                  <Link to="/contact">
                    Reserve My Spot Now →
                  </Link>
                </Button>

                <p className="text-sm text-muted-foreground mb-3">
                  First-time clients only • Limited availability
                </p>
                <p className="text-xs text-muted-foreground/70">
                  By booking, you agree to our terms of service and cancellation policy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-6">
            <div className="max-w-5xl mx-auto">
              {/* Signature Divider */}
              <div className="flex items-center justify-center mb-8 animate-fade-in">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-accent"></div>
                <span className="px-6 text-accent text-sm uppercase tracking-widest">Watch</span>
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-accent"></div>
              </div>
              
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                  See The Rolora Difference
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Watch how we transform skin with our signature treatment
                </p>
              </div>

              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-elegant ring-1 ring-border/50 animate-fade-in">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Rolora Facial Glow Treatment"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <p className="text-center text-muted-foreground mt-8 animate-fade-in">
                Experience the luxury and expertise that makes Rolora special
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              {/* Signature Divider */}
              <div className="flex items-center justify-center mb-8 animate-fade-in">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-accent"></div>
                <span className="px-6 text-accent text-sm uppercase tracking-widest">Questions</span>
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-accent"></div>
              </div>
              
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </h2>
              </div>

            <Accordion type="single" collapsible className="w-full">
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
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-2xl px-6 mb-4 bg-background"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            </div>
          </div>
        </section>
    </ServiceLayout>
  );
};

export default SpecialOffer;

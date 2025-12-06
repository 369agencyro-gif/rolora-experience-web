import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import heroImage1 from "@/assets/head-spa-comb.jpg";
import heroImage2 from "@/assets/head-spa-wash.jpg";
import gridImage1 from "@/assets/head-spa-comb.jpg";
import gridImage2 from "@/assets/head-spa-wash.jpg";
import Contact from "@/components/Contact";
import { Star, Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const heroImages = [heroImage1, heroImage2];

const testimonials = [
  { name: "Nicole R.", rating: 5 },
  { name: "Amanda L.", rating: 5 },
];

const SculptScalpReset = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const [benefitsRef, benefitsApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 1200, stopOnInteraction: false })
  ]);

  const benefits = [
    "Defined jawline + cheek contour",
    "Reduced puffiness + tension",
    "Scalp clarity + flow improvement",
    "Visibly refreshed glow",
    "Overall nervous system reset"
  ];

  const howItWorks = [
    { title: "Face sculpting + drainage", description: "Targeted techniques to define and lift facial contours while stimulating lymphatic flow." },
    { title: "Scalp hydro-cleansing + exfoliation", description: "Deep cleansing ritual to remove buildup and refresh the scalp environment." },
    { title: "Tension-release pressure points", description: "Strategic pressure application to release stored tension and restore balance." },
    { title: "Flow activation from scalp → face → collarbone", description: "Complete pathway reset directing energy and circulation from top down." }
  ];

  const enhancements = [
    { name: "Red Light Therapy", price: "$50" },
    { name: "Radio Frequency Lift", price: "$40" },
    { name: "Deep Nourishing Mask", price: "$30" },
    { name: "Hot Stone Ritual", price: "$20" }
  ];

  const addOns = [
    { name: "Cryo Sculpting Boost", description: "For extra lift" },
    { name: "Neck Lift Upgrade", description: "For defined jawline finish" }
  ];

  const faqs = [
    { 
      question: "Will my hair get wet?", 
      answer: "Yes — the scalp is fully cleansed using water-based exfoliation and targeted serums. Your roots will feel fresh and renewed. We finish you neat and polished enough to continue your day — but this is not a blowout service." 
    },
    { 
      question: "Can I come with extensions or color-treated hair?", 
      answer: "Absolutely. We tailor pressure, tools, and product placement around extensions, keratin, and recent color so everything remains protected while your scalp gets the reset it needs." 
    },
    { 
      question: "How often should I book Headspa?", 
      answer: "For best maintenance: every 3–4 weeks. For stress relief or buildup concerns: even one session makes a noticeable difference. For events: book within the week to look and feel refreshed." 
    },
    { 
      question: "Is this the same as a salon hair wash?", 
      answer: "No — this is a treatment-driven ritual, not hairstyling. It targets scalp health, circulation, and nervous system calm, leaving your hair refreshed — but the true transformation happens beneath the surface." 
    },
    { 
      question: "Can it help with flaking, oiliness, or shedding?", 
      answer: "Yes. By clearing buildup, stimulating blood flow, and rebalancing the scalp environment, Headspa supports healthier roots over time." 
    }
  ];

  return (
    <ServiceLayout>
      {/* Hero Section with Carousel */}
      <section className="relative w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {heroImages.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                <div className="relative h-[85vh]">
                  <img
                    src={image}
                    alt={`Sculpt + Scalp Reset Treatment ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                  
                  {/* Testimonial overlay */}
                  <div className="absolute top-6 right-6 bg-background/10 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(testimonials[index]?.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-white/80 text-xs">{testimonials[index]?.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <div className="container px-6">
            <div className="max-w-2xl pointer-events-auto">
              <p className="text-white/80 text-sm uppercase tracking-widest mb-4">
                Head Spa by Rolora™
              </p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-wide">
                THE ROLORA SCULPT + SCALP RESET™
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8 font-light">
                Lift. Stimulate. Reset.
              </p>
              <p className="text-white/70 text-base md:text-lg mb-8 max-w-xl">
                A face-and-scalp ritual designed to elevate definition and energy flow — simultaneously.
              </p>
              <BookingButton size="lg" className="uppercase tracking-wider">
                Book Sculpt + Scalp Reset
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl text-primary mb-8 tracking-wide">
              WHAT IS IT?
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-6 font-light">
              Stagnation in the scalp → puffiness in the face.<br />
              We treat both — together.
            </p>
            <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              This ritual sculpts facial muscles, stimulates circulation, and performs a deep scalp reset for a lifted, refreshed, and harmonized glow.
            </p>
            <p className="text-primary font-semibold text-xl">
              Two systems. One transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Carousel */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-6">
          <h2 className="font-display text-3xl md:text-4xl text-primary text-center mb-4 tracking-wide">
            BENEFITS
          </h2>
          <p className="text-center text-foreground/60 mb-12">
            The result? Lifted face. Refreshed scalp. Elevated energy.
          </p>
          
          <div className="overflow-hidden" ref={benefitsRef}>
            <div className="flex gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex-[0_0_280px] md:flex-[0_0_320px] min-w-0"
                >
                  <div className="bg-background/80 backdrop-blur-sm rounded-full px-8 py-5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 text-center">
                    <p className="text-foreground font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Accordion */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-primary text-center mb-4 tracking-wide">
              HOW IT WORKS
            </h2>
            <p className="text-center text-foreground/60 mb-12">
              A full-pathway reset — from the top down.
            </p>

            <AccordionPrimitive.Root type="single" collapsible className="space-y-4">
              {howItWorks.map((step, index) => (
                <AccordionPrimitive.Item
                  key={index}
                  value={`step-${index}`}
                  className="group"
                >
                  <AccordionPrimitive.Trigger className="flex items-center justify-between w-full py-6 text-left bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 rounded-lg px-6 transition-all duration-300">
                    <span className="font-display text-lg md:text-xl text-foreground tracking-wide">
                      {step.title}
                    </span>
                    <Plus className="w-5 h-5 text-primary transition-transform duration-300 group-data-[state=open]:hidden" />
                    <Minus className="w-5 h-5 text-primary transition-transform duration-300 hidden group-data-[state=open]:block" />
                  </AccordionPrimitive.Trigger>
                  <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-foreground/70">{step.description}</p>
                    </div>
                  </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>
              ))}
            </AccordionPrimitive.Root>
          </div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section className="py-20 md:py-28 bg-accent/10">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-12 tracking-wide">
              PERFECT FOR
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "Jaw clenchers",
                "Stress-holders",
                "Anyone who wants both sculpting + scalp therapy",
                "Event-day prep and mid-week resets"
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-background/10 backdrop-blur-sm rounded-full px-6 py-4 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                >
                  <p className="text-white font-medium">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-white/80 mt-10 text-lg">
              Balanced energy = stronger glow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-12 tracking-wide">
              PRICING
            </h2>
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-primary/20">
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 tracking-wide">
                Rolora Sculpt + Scalp Reset™
              </h3>
              <p className="text-4xl md:text-5xl font-display text-primary mb-4">$225</p>
              <p className="text-foreground/60 mb-2">60 minutes</p>
              <p className="text-foreground/70 mb-8 max-w-md mx-auto">
                Sculpting + scalp therapy combined for the most complete transformation.
              </p>
              <BookingButton size="lg" className="uppercase tracking-wider">
                Book Now
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Enhancements Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-primary text-center mb-4 tracking-wide">
              ENHANCE THE RESET
            </h2>
            <p className="text-center text-foreground/60 mb-12">
              Your glow — fully customized.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {enhancements.map((enhancement, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between bg-background rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <span className="text-foreground font-medium">{enhancement.name}</span>
                  <span className="text-primary font-display text-xl">{enhancement.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-On Recommendations */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-4 tracking-wide">
              ADD-ON RECOMMENDATIONS
            </h2>
            <p className="text-foreground/60 mb-12">For sculpt that stays.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {addOns.map((addon, index) => (
                <div 
                  key={index}
                  className="bg-muted/30 rounded-xl p-6 border border-primary/20"
                >
                  <h3 className="font-display text-xl text-foreground mb-2 tracking-wide">{addon.name}</h3>
                  <p className="text-foreground/60 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img alt="Sculpt + Scalp Reset Treatment" className="w-full h-full object-cover" src={gridImage1} />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img alt="Sculpt + Scalp Reset Experience" className="w-full h-full object-cover" src={gridImage2} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl text-primary mb-6 tracking-wide">
              Sculpted. Stimulated. Reset.
            </h2>
            <p className="text-foreground/70 text-lg mb-10">
              Book The Rolora Sculpt + Scalp Reset™
            </p>
            <BookingButton size="lg" className="uppercase tracking-wider">
              Book Now
            </BookingButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-primary text-center mb-12 tracking-wide">
              FAQ — Headspa by Rolora™
            </h2>

            <AccordionPrimitive.Root type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionPrimitive.Item
                  key={index}
                  value={`faq-${index}`}
                  className="group"
                >
                  <AccordionPrimitive.Trigger className="flex items-center justify-between w-full py-6 text-left bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 rounded-lg px-6 transition-all duration-300">
                    <span className="font-display text-lg md:text-xl text-foreground tracking-wide">
                      {faq.question}
                    </span>
                    <Plus className="w-5 h-5 text-primary transition-transform duration-300 group-data-[state=open]:hidden" />
                    <Minus className="w-5 h-5 text-primary transition-transform duration-300 hidden group-data-[state=open]:block" />
                  </AccordionPrimitive.Trigger>
                  <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-foreground/70">{faq.answer}</p>
                    </div>
                  </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>
              ))}
            </AccordionPrimitive.Root>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default SculptScalpReset;
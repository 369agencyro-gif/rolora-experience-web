import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import glowCloseup1 from "@/assets/glow-closeup-1.jpg";
import glowCloseup2 from "@/assets/glow-closeup-2.jpg";
import glowCloseup3 from "@/assets/glow-closeup-3.jpg";
import serumCloseup1 from "@/assets/serum-closeup-1.jpg";
import serumCloseup2 from "@/assets/serum-closeup-2.jpg";
import Contact from "@/components/Contact";
import { Star, Plus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TimelessLift = () => {
  return (
    <ServiceLayout>
      {/* Hero Section - Full Width Slider */}
      <section className="pb-12 md:pb-20">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Left: Image Slider - Full Width */}
            <div className="relative lg:sticky lg:top-24 -mx-6 lg:mx-0">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="relative overflow-hidden h-[500px] lg:h-[700px]">
                      <img src={glowCloseup1} alt="Timeless Lift treatment" className="w-full h-full object-cover" />
                      <div className="absolute top-6 right-6 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/10 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
                          <span className="text-xs font-medium text-foreground/80 ml-1">Catherine D.</span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative overflow-hidden h-[500px] lg:h-[700px]">
                      <img src={glowCloseup2} alt="Anti-aging results" className="w-full h-full object-cover" />
                      <div className="absolute top-6 right-6 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/10 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
                          <span className="text-xs font-medium text-foreground/80 ml-1">Diana M.</span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
                <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
              </Carousel>
            </div>

            {/* Right: Content */}
            <div className="space-y-12">
              {/* Title & Rating */}
              <div className="space-y-6">
                <div>
                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight leading-[1.1] text-foreground">
                    LIFT RENEW™
                  </h1>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                    </div>
                    <span className="text-sm font-medium text-foreground/70">5.0 / 5.0</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Lift. Firm. Renew.</span>
                </div>

                <div className="space-y-4 pt-4">
                  <p className="text-lg leading-relaxed text-foreground/80 font-light">
                    Rolora's high-performance age-defying treatment designed to restore elasticity, smooth fine lines, and revive tired skin. Powered by advanced active infusions, ultrasound lift, microcurrent toning, cooling sculpting, and red light therapy — this facial delivers a tighter, brighter, more refreshed complexion.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-medium text-foreground border-l-2 border-primary pl-6">
                    Visible results. Elevated energy.
                  </p>
                </div>

                <BookingButton size="lg" className="w-full md:w-auto px-12 py-6 text-sm uppercase font-bold tracking-wider">
                  Book Your Session
                </BookingButton>
              </div>

              {/* Who It's For */}
              <div className="pt-8 border-t border-border/50 space-y-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">WHO IT'S FOR</h2>
                
                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-foreground/70 font-light">
                    LIFT RENEW™ is ideal for clients who want to:
                  </p>
                </div>

                <div className="mt-8 pt-6 space-y-6">
                  <div className="grid gap-4">
                    {[
                      "Firm and tighten laxity",
                      "Lift cheeks, jawline, and facial contours",
                      "Smooth fine lines and early signs of aging",
                      "Brighten dull or fatigued skin",
                      "Support long-term skin health and collagen"
                    ].map((benefit, i) => (
                      <div key={i} className="group relative flex items-center gap-4 px-6 py-4 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <span className="text-primary text-xs font-bold">✓</span>
                        </div>
                        <span className="text-base text-foreground/80 font-light tracking-wide">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-base leading-relaxed text-foreground/70 font-light italic pt-4">
                    If they want youthful definition without downtime — this is it.
                  </p>
                </div>
              </div>

              {/* Pricing Info */}
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background to-muted/30 p-8 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
                <div className="relative">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-foreground mb-8 text-center">LIFT RENEW™ Pricing</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors">
                      <div>
                        <span className="font-medium text-foreground">Single Session</span>
                      </div>
                      <span className="text-2xl font-bold text-primary">$245</span>
                    </div>
                  </div>
                </div>
              </div>

              <BookingButton size="lg" className="w-full px-12 py-6 text-sm uppercase font-bold tracking-wider">
                Book Your Session
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* The Treatment Ritual Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-center mb-8 text-primary">
              WHAT'S INCLUDED
            </h2>
            
            <p className="text-xl leading-relaxed mb-16 text-center">
              A structured, results-driven sequence designed to lift and renew:
            </p>

            <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-6">
              <AccordionItem value="item-1" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Deep double cleanse
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Thorough cleansing to prepare skin for maximum treatment efficacy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Exfoliation tailored to skin condition
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Customized exfoliation to refine texture and enhance treatment penetration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Ultrasound lift to firm + stimulate deeper layers
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Deep penetrating ultrasound stimulates collagen and firms from within.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Microcurrent toning for defined contours
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Targeted microcurrent to tone facial muscles and create lift.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Cooling sculpting to depuff and refine
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Cooling therapy to tighten, depuff, and visibly contour.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Active infusion (peptides or stem cell–based formulations)
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Advanced active serums to restore elasticity and smooth fine lines.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Red light therapy to boost collagen and calm inflammation
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Therapeutic red light to enhance collagen production and reduce inflammation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Finishing hydration + barrier support
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Final hydration and barrier protection to seal in results.
                </AccordionContent>
              </AccordionItem>
            </AccordionPrimitive.Root>

            <div className="relative mt-16 p-8 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent"></div>
              <p className="relative text-xl font-medium text-center leading-relaxed text-foreground">
                Every step works together to restore tightness, clarity, and long-lasting luminosity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12 bg-background">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={serumCloseup1} alt="Ultrasound Treatment" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={serumCloseup2} alt="Anti-aging Serums" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-center mb-16 text-primary">
              EXPECTED RESULTS
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-center text-foreground/80">
                Clients leave with:
              </p>
              <div className="grid gap-4">
                {[
                  "A firmer, more lifted appearance",
                  "Smoother texture and improved elasticity",
                  "Reduced puffiness around jawline + cheeks",
                  "Brighter, more even tone",
                  "A refreshed, youthful glow",
                  "Results that compound with consistency"
                ].map((result, i) => (
                  <div key={i} className="group relative flex items-center gap-4 px-6 py-4 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-primary text-xs font-bold">✓</span>
                    </div>
                    <span className="text-base text-foreground/80 font-light tracking-wide">{result}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <BookingButton variant="cta" size="lg">
                BOOK NOW
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background border-t-4 border-foreground">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] animate-fade-in mb-12 text-primary">
              BENEFITS YOU'LL FEEL IMMEDIATELY
            </h2>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 1200,
                }),
              ]}
              className="w-full mb-12"
            >
              <CarouselContent>
                {["Firmer appearance", "Lifted skin", "Smoother texture", "Improved elasticity", "Reduced puffiness", "Brighter tone", "Youthful glow", "Enhanced radiance", "Contoured jawline"].map((benefit, index) => (
                  <CarouselItem key={benefit} className="md:basis-1/3">
                    <div className="group relative px-8 py-5 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 animate-fade-in" style={{
                      animationDelay: `${index * 0.1}s`
                    }}>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex items-center justify-center gap-3">
                        <span className="text-primary text-lg">✦</span>
                        <span className="font-semibold text-center">{benefit}</span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <p className="text-2xl font-bold text-center animate-fade-in" style={{
              animationDelay: "0.9s"
            }}>
              Your skin lifts — time reverses.
            </p>
          </div>
        </div>
      </section>

      {/* Pair with Boosters Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-center mb-16 text-primary">
              PAIR WITH BOOSTERS
            </h2>
            
            <p className="text-xl leading-relaxed mb-12 text-center text-foreground/80">
              Enhance your Lift Renew results with targeted upgrades:
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-primary">+ To Brighten & Renew</h3>
                <div className="flex justify-between items-center p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors border border-primary/20">
                  <span className="font-medium text-foreground">Glow Peel</span>
                  <span className="text-xl font-bold text-primary">$65</span>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-primary">+ To Smooth & Refine</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors border border-primary/20">
                    <span className="font-medium text-foreground">Dermaplaning</span>
                    <span className="text-xl font-bold text-primary">$55</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors border border-primary/20">
                    <span className="font-medium text-foreground">Microderm Polish</span>
                    <span className="text-xl font-bold text-primary">$55</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-primary">+ To Hydrate & Glow</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors border border-primary/20">
                    <span className="font-medium text-foreground">Oxygen Glow Boost</span>
                    <span className="text-xl font-bold text-primary">$55</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors border border-primary/20">
                    <span className="font-medium text-foreground">Hydra Infusion</span>
                    <span className="text-xl font-bold text-primary">$55</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-primary">+ To Sculpt More</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors border border-primary/20">
                    <span className="font-medium text-foreground">Neck Lifting Upgrade</span>
                    <span className="text-xl font-bold text-primary">$45</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors border border-primary/20">
                    <span className="font-medium text-foreground">Gua Sha Sculpt Boost</span>
                    <span className="text-xl font-bold text-primary">$45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image Break */}
      <section className="relative h-[60vh] overflow-hidden">
        <img alt="Anti-aging Results" className="w-full h-full object-cover" src={glowCloseup2} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="container px-6 pb-12">
            <h3 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.9]">
              Defy Time
            </h3>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 relative overflow-hidden bg-background border-t-4 border-foreground">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-primary mb-8">
              WHO IT'S FOR
            </h2>
            
            <p className="text-xl mb-12 text-foreground/80">LIFT RENEW™ is ideal for clients who want to:</p>
            
            <div className="grid md:grid-cols-2 gap-6 text-lg mb-12">
              {[
                "Firm and tighten laxity",
                "Lift cheeks, jawline, and facial contours",
                "Smooth fine lines and early signs of aging",
                "Brighten dull or fatigued skin",
                "Support long-term skin health and collagen",
                "Youthful definition without downtime"
              ].map((item, index) => (
                <div key={item} className="group relative px-8 py-5 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 animate-fade-in" style={{
                  animationDelay: `${index * 0.1}s`
                }}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center gap-4">
                    <span className="text-primary text-xl flex-shrink-0">✔</span>
                    <p className="font-semibold text-foreground">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="inline-flex items-center gap-3 px-8 py-5 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm">
                <span className="text-primary text-xl">✦</span>
                <p className="text-lg font-medium text-foreground">
                  If they want youthful definition without downtime — this is it.
                </p>
              </div>
              <BookingButton variant="cta" size="lg">
                BOOK NOW
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column CTA Section */}
      <section className="grid md:grid-cols-2">
        <div className="relative h-[300px] md:h-[500px] overflow-hidden">
          <img src={glowCloseup3} alt="Timeless Lift Experience" className="w-full h-full object-cover" />
        </div>
        <div className="relative bg-muted flex items-center justify-center p-6 md:p-12 py-12 md:py-0 md:h-[500px]">
          <div className="max-w-md">
            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-4 md:mb-6 text-primary">
              WHY CLIENTS LOVE IT
            </h3>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              It's the perfect balance of technology and technique — a sculpting-meets-rejuvenation facial that leaves the skin visibly tighter, toned, and renewed.
            </p>
            <p className="text-lg md:text-xl font-bold mb-6 md:mb-8">
              Ready for definition?<br />
              LIFT RENEW™ delivers instant lift, contour, and radiance — all in one elevated session.
            </p>
            <BookingButton size="lg" className="w-full px-8 md:px-12 py-6 md:py-7 text-sm md:text-base uppercase font-black tracking-widest rounded-none">
              Book LIFT RENEW™
            </BookingButton>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default TimelessLift;

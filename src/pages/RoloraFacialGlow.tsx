import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import facialImage from "@/assets/service-facial.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import facialSculpting from "@/assets/facial-sculpting.jpg";
import skincareProducts from "@/assets/skincare-products.jpg";
import diverseSkin from "@/assets/diverse-skin.jpg";
import Contact from "@/components/Contact";
import { Star, Plus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const RoloraFacialGlow = () => {
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
                      <img src={facialImage} alt="Rolora Facial Glow treatment" className="w-full h-full object-cover" />
                      <div className="absolute top-6 right-6 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/10 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
                          <span className="text-xs font-medium text-foreground/80 ml-1">Maria S.</span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative overflow-hidden h-[500px] lg:h-[700px]">
                      <img src={glowingSkin} alt="Glowing skin results" className="w-full h-full object-cover" />
                      <div className="absolute top-6 right-6 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/10 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
                          <span className="text-xs font-medium text-foreground/80 ml-1">Rachel K.</span>
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
                    Rolora Facial Glow™
                  </h1>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                    </div>
                    <span className="text-sm font-medium text-foreground/70">5.0 / 5.0</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Signature Treatment</span>
                </div>

                <div className="space-y-4 pt-4">
                  <p className="text-lg leading-relaxed text-foreground/80 font-light">
                    A couture signature treatment blending dermaplaning, microdermabrasion, and tailored modalities for glowing skin. This ritual refines texture, boosts luminosity, and deeply hydrates for a glass-skin finish that defines the Rolora experience.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-medium text-foreground border-l-2 border-primary pl-6">
                    This isn't just a facial. This is precision artistry, curated technique, and glass-skin perfection — crafted the Rolora way.
                  </p>
                </div>

                <BookingButton size="lg" className="w-full md:w-auto px-12 py-6 text-sm uppercase font-bold tracking-wider">
                  Book Your Session
                </BookingButton>
              </div>

              {/* What Is Rolora Facial Glow */}
              <div className="pt-8 border-t border-border/50 space-y-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">What Is Rolora Facial Glow™?</h2>
                
                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-foreground/70 font-light">
                    Rolora Facial Glow™ combines advanced exfoliation techniques with custom serum infusions to create the signature glass-skin finish that defines our studio.
                  </p>
                  <p className="text-base leading-relaxed text-foreground/70 font-light">
                    Each treatment is tailored to your skin's unique needs, combining dermaplaning, microdermabrasion, and intensive hydration for luminous, radiant results.
                  </p>
                </div>

                <div className="mt-8 pt-6 space-y-6">
                  <p className="font-display text-lg font-semibold text-foreground/90">The Result</p>
                  <div className="grid gap-4">
                    {["Glass-skin luminosity", "Refined texture", "Deep hydration", "Even tone", "Radiant clarity", "Plump, healthy skin"].map((benefit, i) => <div key={i} className="group relative flex items-center gap-4 px-6 py-4 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <span className="text-primary text-xs font-bold">✓</span>
                        </div>
                        <span className="text-base text-foreground/80 font-light tracking-wide">{benefit}</span>
                      </div>)}
                  </div>
                </div>
              </div>

              {/* Pricing Info */}
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background to-muted/30 p-8 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
                <div className="relative">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-foreground mb-8 text-center">Rolora Facial Glow™ Pricing</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors">
                      <div>
                        <span className="font-medium text-foreground">Single Session</span>
                        <span className="text-xs text-foreground/50 ml-2">90 minutes</span>
                      </div>
                      <span className="text-2xl font-bold text-primary">$235</span>
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
              THE GLOW RITUAL
            </h2>
            
            <p className="text-xl leading-relaxed mb-16 text-center">
              Every Rolora Facial Glow™ session follows a carefully structured sequence focused on achieving luminous, glass-skin perfection.
            </p>

            <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-6">
              <AccordionItem value="item-1" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Deep Cleanse & Prep
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Professional cleansing removes impurities and prepares skin for optimal treatment absorption.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Dermaplaning
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Removes peach fuzz and dead skin cells for an ultra-smooth, glowing complexion.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Microdermabrasion
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Polishes skin to reveal refined texture and enhanced radiance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Custom Serum Infusion
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Tailored formulas deliver targeted ingredients for your specific skin needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Hydration & Glow Lock
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Intensive moisture infusion for plump, radiant, healthy skin with lasting luminosity.
                </AccordionContent>
              </AccordionItem>
            </AccordionPrimitive.Root>

            <div className="relative mt-16 p-8 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent"></div>
              <p className="relative text-xl font-medium text-center leading-relaxed text-foreground">
                You'll see the glow after one session — and maintain glass-skin with regular treatments.
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
              <img src={facialSculpting} alt="Facial Treatment" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={skincareProducts} alt="Skincare Products" className="w-full h-full object-cover" />
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
              WHY IT WORKS
            </h2>
            
            <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-6">
              <AccordionItem value="item-1" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Precision Exfoliation
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Combined dermaplaning and microdermabrasion remove dead cells for ultra-smooth texture.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Customized Formulas
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Tailored serum selection addresses your unique skin concerns for targeted results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Deep Hydration
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Intensive moisture infusion plumps and revitalizes for lasting glow.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Multi-Modal Approach
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Layered techniques work synergistically for enhanced, comprehensive results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      The Rolora Method™
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Our signature layering of technique, product, and expertise for glass-skin perfection.
                </AccordionContent>
              </AccordionItem>
            </AccordionPrimitive.Root>
            
            <div className="flex justify-center mt-12">
              <BookingButton variant="cta" size="lg">
                BOOK NOW
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image Break */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={glowingSkin} 
          alt="Glowing Results"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="container px-6 pb-12">
            <h3 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Glass Skin Perfection
            </h3>
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
                {["Luminous glass-skin finish", "Ultra-smooth texture", "Deep hydration", "Refined pores", "Bright, even tone", "Instant glow", "Plump, radiant skin", "Long-lasting luminosity", "Flawless makeup base"].map((benefit, index) => (
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
              Your skin glows — your confidence soars.
            </p>
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
            
            <p className="text-xl mb-12 text-foreground/80">Perfect for anyone who wants to:</p>
            
            <div className="grid md:grid-cols-2 gap-6 text-lg mb-12">
              {["Achieve glass-skin luminosity", "Refine texture and tone", "Deep hydration boost", "Special occasion glow", "Maintain radiant skin", "Ultimate Rolora experience", "Luxury self-care ritual"].map((item, index) => (
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
                  Our most popular treatment — perfect for all skin types
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
          <img src={facialRoom} alt="Facial Glow Experience" className="w-full h-full object-cover" />
        </div>
        <div className="relative bg-muted flex items-center justify-center p-6 md:p-12 py-12 md:py-0 md:h-[500px]">
          <div className="max-w-md">
            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-4 md:mb-6 text-primary">
              THE ROLORA DIFFERENCE
            </h3>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Rolora Facial Glow™ is precision-focused, results-driven, and elevated — combining expert technique with curated products for the ultimate glass-skin finish.
            </p>
            <p className="text-lg md:text-xl font-bold mb-6 md:mb-8">
              This is signature beauty. Glass-skin perfection.<br />
              This is Rolora Facial Glow™.
            </p>
            <BookingButton size="lg" className="w-full px-8 md:px-12 py-6 md:py-7 text-sm md:text-base uppercase font-black tracking-widest rounded-none">
              Book Facial Glow
            </BookingButton>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default RoloraFacialGlow;

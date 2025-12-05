import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import facialGlowTreatment from "@/assets/facial-glow-treatment.jpg";
import facialFoam from "@/assets/facial-foam.jpg";
import skincareApply from "@/assets/skincare-apply-new.jpg";
import skinCloseupDark from "@/assets/skin-closeup-dark.jpg";
import Contact from "@/components/Contact";
import { Star, Plus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const RoloraReset = () => {
  return <ServiceLayout>
      {/* Hero Section - Full Width Slider */}
      <section className="pb-12 md:pb-20">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Left: Image Slider - Full Width */}
            <div className="relative lg:sticky lg:top-24 -mx-6 lg:mx-0">
              <Carousel opts={{
              align: "start",
              loop: true
            }} plugins={[Autoplay({
              delay: 3000
            })]} className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="relative overflow-hidden h-[500px] lg:h-[700px]">
                      <img src="/lovable-uploads/78b4698f-9ca8-4b54-b999-afb10088c2f9.jpg" alt="Rolora Reset chemical peel" className="w-full h-full object-cover" />
                      <div className="absolute top-6 right-6 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/10 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
                          <span className="text-xs font-medium text-foreground/80 ml-1">Melissa P.</span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative overflow-hidden h-[500px] lg:h-[700px]">
                      <img src={facialGlowTreatment} alt="Clear radiant skin" className="w-full h-full object-cover" />
                      <div className="absolute top-6 right-6 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/10 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
                          <span className="text-xs font-medium text-foreground/80 ml-1">Lauren H.</span>
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
                    ROLORA RESET PEEL™
                  </h1>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                    </div>
                    <span className="text-sm font-medium text-foreground/70">4.9 / 5.0</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Brighten. Smooth. Reset.</span>
                </div>

                <div className="space-y-4 pt-4">
                  <p className="text-lg leading-relaxed text-foreground/80 font-light">
                    A low-downtime resurfacing peel that gently smooths texture, brightens uneven tone, and reveals fresh, radiant skin with every session. Designed for clarity, glow, and a clean reset — without harsh peeling or irritation.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-medium text-foreground border-l-2 border-primary pl-6">
                    Best in a series of 3–6 for visible, lasting transformation.
                  </p>
                </div>

                <BookingButton size="lg" className="w-full md:w-auto px-12 py-6 text-sm uppercase font-bold tracking-wider">
                  Book Your Session
                </BookingButton>
              </div>

              {/* What This Treatment Does */}
              <div className="pt-8 border-t border-border/50 space-y-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground"> WHAT THIS TREATMENT DOES</h2>
                
                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-foreground/70 font-light">
                    ROLORA RESET PEEL™ is your targeted solution for:
                  </p>
                </div>

                <div className="mt-8 pt-6 space-y-6">
                  <div className="grid gap-4">
                    {["Dull, tired skin", "Uneven tone + pigmentation", "Texture irregularities", "Congestion", "Post-breakout marks", "Lack of overall radiance"].map((benefit, i) => <div key={i} className="group relative flex items-center gap-4 px-6 py-4 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <span className="text-primary text-xs font-bold">✓</span>
                        </div>
                        <span className="text-base text-foreground/80 font-light tracking-wide">{benefit}</span>
                      </div>)}
                  </div>
                  <p className="text-base leading-relaxed text-foreground/70 font-light italic pt-4">
                    Your complexion appears clearer, brighter, and more refined — immediately and progressively.
                  </p>
                </div>
              </div>

              {/* Pricing Info */}
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background to-muted/30 p-8 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
                <div className="relative">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-foreground mb-8 text-center">ROLORA RESET PEEL™ Pricing</h3>
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
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-center mb-8 text-primary"> WHAT TO EXPECT</h2>
            
            <p className="text-xl leading-relaxed mb-16 text-center">
              A precise, results-first approach:
            </p>

            <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-6">
              <AccordionItem value="item-1" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Deep cleanse to prep the skin
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Thorough cleansing to prepare skin for optimal treatment absorption.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Gentle pre-exfoliation (if needed)
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Customized light exfoliation to enhance peel penetration and effectiveness.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Application of the Reset Peel solution
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Targeted peel application to resurface, brighten, and renew skin safely.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Calm + balance phase to soothe the skin
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Soothing treatment to neutralize and calm skin post-peel.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Hydrating finish for restored glow
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Final hydration and protection to lock in results and restore radiance.
                </AccordionContent>
              </AccordionItem>
            </AccordionPrimitive.Root>

            <div className="relative mt-16 p-8 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent"></div>
              <p className="relative text-xl font-medium text-center leading-relaxed text-foreground">
                Minimal downtime. Maximum clarity.
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
              <img src={facialFoam} alt="Chemical Peel Treatment" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={skincareApply} alt="Calming Treatment Products" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-center mb-16 text-primary">
              BENEFITS
            </h2>
            
            <div className="space-y-6">
              <div className="grid gap-4">
                {["Brighter, more even skin tone", "Smoother, refined texture", "Reduced discoloration", "Clearer, cleaner complexion", "Fresh, radiant glow", "Suitable for ongoing maintenance"].map((benefit, i) => <div key={i} className="group relative flex items-center gap-4 px-6 py-4 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-primary text-xs font-bold">✓</span>
                    </div>
                    <span className="text-base text-foreground/80 font-light tracking-wide">{benefit}</span>
                  </div>)}
              </div>
              <p className="text-base leading-relaxed text-foreground/70 font-light italic pt-4 text-center">
                (Everything below is compatible with a peel and enhances the result.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pair with Boosters Section */}
      <section className="py-20 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Hydrate & Soothe */}
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-primary">+ Hydrate & Soothe (Best Pairings)</h3>
                <p className="text-base text-foreground/70 mb-6 italic">These are the MOST logical for a peel.</p>
                
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-background/50 hover:bg-background/80 transition-colors border border-primary/20">
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-semibold text-lg text-foreground">Hydra Infusion</span>
                      <span className="text-2xl font-bold text-primary">$55</span>
                    </div>
                    <p className="text-foreground/70">Deep hydration replenishes moisture after the peel, leaving skin plump and radiant.</p>
                  </div>

                  <div className="p-6 rounded-xl bg-background/50 hover:bg-background/80 transition-colors border border-primary/20">
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-semibold text-lg text-foreground">Oxygen Glow Boost</span>
                      <span className="text-2xl font-bold text-primary">$55</span>
                    </div>
                    <p className="text-foreground/70">Pure oxygen infusion brightens, calms irritation, and enhances clarity post-peel.</p>
                  </div>

                  <div className="p-6 rounded-xl bg-background/50 hover:bg-background/80 transition-colors border border-primary/20">
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-semibold text-lg text-foreground">Red Light Therapy</span>
                      <span className="text-2xl font-bold text-primary">$50</span>
                    </div>
                    <p className="text-foreground/70">Calms inflammation, speeds healing, boosts collagen — perfect after a peel.</p>
                  </div>
                </div>
              </div>

              {/* Smooth & Perfect */}
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-primary">+ Smooth & Perfect</h3>
                <p className="text-base text-foreground/70 mb-6 italic">These boost the peel WITHOUT damaging the barrier.</p>
                
                <div className="p-6 rounded-xl bg-background/50 hover:bg-background/80 transition-colors border border-primary/20">
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-semibold text-lg text-foreground">Dermaplaning Add-On</span>
                    <span className="text-2xl font-bold text-primary">$55</span>
                  </div>
                  <p className="text-foreground/70 mb-2">Safe + ideal before a peel. Removes dead skin and peach fuzz to help the peel penetrate evenly and reveal a smoother finish.</p>
                  <p className="text-foreground/60 text-sm italic">(Dermaplaning + peel is a classic combo — very popular and safe.)</p>
                </div>
              </div>

              {/* Rolora Signature Touch */}
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-primary">+ Rolora Signature Touch</h3>
                <p className="text-base text-foreground/70 mb-6 italic">Adds experience without irritation.</p>
                
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-background/50 hover:bg-background/80 transition-colors border border-primary/20">
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-semibold text-lg text-foreground">Neck Lifting Upgrade</span>
                      <span className="text-2xl font-bold text-primary">$45</span>
                    </div>
                    <p className="text-foreground/70">A sculpting boost that firms the neck + jawline. Safe because it does not exfoliate or irritate.</p>
                  </div>

                  <div className="p-6 rounded-xl bg-background/50 hover:bg-background/80 transition-colors border border-primary/20">
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-semibold text-lg text-foreground">Gua Sha Sculpt Boost</span>
                      <span className="text-2xl font-bold text-primary">$45</span>
                    </div>
                    <p className="text-foreground/70">Gentle contour refinement that does not interfere with the peel.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image Break */}
      <section className="relative h-[60vh] overflow-hidden">
        <img alt="Clear Radiant Skin" className="w-full h-full object-cover" src={facialGlowTreatment} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="container px-6 pb-12">
            <h3 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.9]">
              Renewed Radiance
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
            
            <p className="text-xl mb-12 text-foreground/80">Perfect for anyone who wants to:</p>
            
            <div className="grid md:grid-cols-2 gap-6 text-lg mb-12">
              {["Brighten dull skin", "Fade hyperpigmentation", "Refine texture", "Clear congestion", "Reduce sun damage", "Even skin tone", "Complete transformation"].map((item, index) => <div key={item} className="group relative px-8 py-5 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center gap-4">
                    <span className="text-primary text-xl flex-shrink-0">✔</span>
                    <p className="font-semibold text-foreground">{item}</p>
                  </div>
                </div>)}
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="inline-flex items-center gap-3 px-8 py-5 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm">
                <span className="text-primary text-xl">✦</span>
                <p className="text-lg font-medium text-foreground">
                  Transformative resurfacing for clear, radiant, renewed skin
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
          <img src={skinCloseupDark} alt="Rolora Reset Experience" className="w-full h-full object-cover" />
        </div>
        <div className="relative bg-muted flex items-center justify-center p-6 md:p-12 py-12 md:py-0 md:h-[500px]">
          <div className="max-w-md">
            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-4 md:mb-6 text-primary">
              READY FOR A RESET?
            </h3>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              ROLORA RESET PEEL™ delivers clarity, brightness, and a clean slate for your skin — with minimal downtime and maximum transformation.
            </p>
            <p className="text-lg md:text-xl font-bold mb-6 md:mb-8">
              Book your Reset today.<br />
              Your clearest skin awaits.
            </p>
            <BookingButton size="lg" className="w-full px-8 md:px-12 py-6 md:py-7 text-sm md:text-base uppercase font-black tracking-widest rounded-none">
              Book ROLORA RESET PEEL™
            </BookingButton>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>;
};
export default RoloraReset;
import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import heroImage1 from "@/assets/head-spa-comb.jpg";
import heroImage2 from "@/assets/head-spa-wash.jpg";
import gridImage1 from "@/assets/head-spa-comb.jpg";
import gridImage2 from "@/assets/head-spa-wash.jpg";
import Contact from "@/components/Contact";
import { Star, Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeadSpa = () => {
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
                      <img src={heroImage1} alt="Headspa by Rolora treatment" className="w-full h-full object-cover" />
                      <div className="absolute top-6 right-6 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/10 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
                          <span className="text-xs font-medium text-foreground/80 ml-1">Emma K.</span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative overflow-hidden h-[500px] lg:h-[700px]">
                      <img src={heroImage2} alt="Head spa tools" className="w-full h-full object-cover" />
                      <div className="absolute top-6 right-6 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/10 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
                          <span className="text-xs font-medium text-foreground/80 ml-1">Sophia L.</span>
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
                    HEADSPA BY ROLORA
                  </h1>
                  <p className="text-xl md:text-2xl font-medium text-primary mb-4">
                    Purify. Stimulate. Rebalance.
                  </p>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                    </div>
                    <span className="text-sm font-medium text-foreground/70">4.9 / 5.0</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Head Spa</span>
                </div>

                <div className="space-y-4 pt-4">
                  <p className="text-lg leading-relaxed text-foreground/80 font-light">
                    Scalp therapy that restores clarity, energy, and visible glow — starting at the root.
                  </p>
                </div>

                <BookingButton size="lg" className="w-full md:w-auto px-12 py-6 text-sm uppercase font-bold tracking-wider">
                  Book Headspa
                </BookingButton>
              </div>

              {/* What Is It */}
              <div className="pt-8 border-t border-border/50 space-y-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">What Is It?</h2>
                
                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-foreground/70 font-light">
                    Your scalp is where circulation begins. Stress, buildup, and tightness can interrupt your skin's glow and your body's energy flow.
                  </p>
                  <p className="text-base leading-relaxed text-foreground/70 font-light">
                    Headspa by Rolora is a structured ritual combining deep scalp exfoliation, clarifying wash, steam infusion, and tension release. Designed to reset: roots, mood, and glow.
                  </p>
                </div>
              </div>

              {/* Pricing Info */}
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background to-muted/30 p-8 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
                <div className="relative">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-foreground mb-4 text-center">Headspa by Rolora</h3>
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold text-primary">$155</span>
                  </div>
                  <p className="text-center text-foreground/70 mb-4">Time: 60 minutes</p>
                  <p className="text-center text-foreground/70 text-sm">
                    Includes steam therapy, exfoliation, serum infusion + deep cleanse
                  </p>
                </div>
              </div>

              <BookingButton size="lg" className="w-full px-12 py-6 text-sm uppercase font-bold tracking-wider">
                Book Now
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-center mb-8 text-primary">
              HOW IT WORKS
            </h2>
            
            <p className="text-xl leading-relaxed mb-16 text-center text-foreground/80">
              Hydro-exfoliation clears the scalp → steam opens pores → cleansing + nourishing serums reset root health. Meanwhile, circulation + pressure points help your entire energy system unwind.
            </p>

            <div className="relative p-8 rounded-2xl overflow-hidden mb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"></div>
              <p className="relative text-xl font-medium text-center leading-relaxed text-foreground">
                Glow starts inside — and starts at the scalp.
              </p>
            </div>

            <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-6">
              <AccordionItem value="item-1" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Hydro-Exfoliation
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Deep cleansing and exfoliation of the scalp to remove buildup and excess oil.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Steam Therapy
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Gentle steam opens pores and prepares the scalp for deep nourishment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Serum Infusion
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Nourishing serums are applied to reset root health and balance scalp environment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Circulation & Pressure Points
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Targeted massage stimulates blood flow and helps your entire energy system unwind.
                </AccordionContent>
              </AccordionItem>
            </AccordionPrimitive.Root>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12 bg-background">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img alt="Head Spa Treatment Room" className="w-full h-full object-cover" src={gridImage1} />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img alt="Head Spa Treatment" className="w-full h-full object-cover" src={gridImage2} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background border-t-4 border-foreground">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] animate-fade-in mb-12 text-primary">
              BENEFITS
            </h2>
            
            <Carousel opts={{
            align: "start",
            loop: true
          }} plugins={[Autoplay({
            delay: 1200
          })]} className="w-full mb-12">
              <CarouselContent>
                {[
                  "Removes buildup + excess oil",
                  "Boosts blood flow to nourish roots",
                  "Relieves scalp tightness + headaches",
                  "Promotes healthier-looking hair growth",
                  "Deep relaxation for the nervous system",
                  "Leaves scalp clean, hair light, mind calm"
                ].map((benefit, index) => <CarouselItem key={benefit} className="md:basis-1/3">
                    <div className="group relative px-8 py-5 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 animate-fade-in" style={{
                  animationDelay: `${index * 0.1}s`
                }}>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex items-center justify-center gap-3">
                        <span className="text-primary text-lg">✦</span>
                        <span className="font-semibold text-center">{benefit}</span>
                      </div>
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Large Image Break */}
      <section className="relative h-[60vh] overflow-hidden">
        <img alt="Head Spa Results" className="w-full h-full object-cover" src="/lovable-uploads/69065a8d-070b-4c42-82e5-781985c72628.jpg" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="container px-6 pb-12">
            <h3 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.9]">
              Reset the scalp. Reset the mind.
            </h3>
          </div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section className="py-20 relative overflow-hidden bg-background border-t-4 border-foreground">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-primary mb-8">
              WHO IS IT FOR?
            </h2>
            
            <p className="text-xl mb-12 text-foreground/80">Anyone who experiences:</p>
            
            <div className="grid md:grid-cols-2 gap-6 text-lg mb-12">
              {[
                "Oiliness or buildup at the scalp",
                "Product residue",
                "Itchiness or flaking",
                "Stress + tension in head/neck",
                "Dull hair lacking vitality"
              ].map((item, index) => <div key={item} className="group relative px-8 py-5 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center gap-4">
                    <span className="text-primary text-xl flex-shrink-0">✔</span>
                    <p className="font-semibold text-foreground">{item}</p>
                  </div>
                </div>)}
            </div>

            <div className="relative p-8 rounded-2xl overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"></div>
              <p className="relative text-xl font-medium text-center leading-relaxed text-foreground">
                If you want cleaner roots and a calmer mind — this is your ritual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhance Your Headspa Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-center mb-8 text-primary">
              ENHANCE YOUR HEADSPA
            </h2>
            
            <p className="text-xl leading-relaxed mb-16 text-center text-foreground/80">
              Upgrade your glow
            </p>

            <div className="space-y-4 mb-12">
              {[
                { name: "Red Light Therapy", price: "$50" },
                { name: "Radio Frequency Lift", price: "$40" },
                { name: "Deep Nourishing Mask", price: "$30" },
                { name: "Hot Stone Ritual", price: "$20" }
              ].map((enhancement, index) => (
                <div key={enhancement.name} className="flex justify-between items-center p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors border border-primary/20">
                  <span className="font-medium text-foreground">{enhancement.name}</span>
                  <span className="text-xl font-bold text-primary">{enhancement.price}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-foreground/70 mb-8">Add any upgrade at checkout.</p>
          </div>
        </div>
      </section>

      {/* Pairs Well With Section */}
      <section className="py-20 bg-background border-t-4 border-foreground">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight leading-[0.9] text-primary mb-8">
              PAIRS WELL WITH
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link to="/services/rolora-facial-glow" className="group relative px-8 py-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Rolora Facial Glow™</h3>
                  <p className="text-foreground/70">Complete face + scalp ritual</p>
                </div>
              </Link>
              <Link to="/services/body-rolling" className="group relative px-8 py-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Rolora Flow™</h3>
                  <p className="text-foreground/70">Body rolling lymphatic reset</p>
                </div>
              </Link>
            </div>

            <p className="text-lg text-foreground/80 mb-8">
              Scalp + face + body → full energy alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Two Column CTA Section */}
      <section className="grid md:grid-cols-2">
        <div className="relative h-[300px] md:h-[500px] overflow-hidden">
          <img alt="Head Spa Experience" className="w-full h-full object-cover" src="/lovable-uploads/24691110-707d-4eb6-8bee-d7f7a64bc241.jpg" />
        </div>
        <div className="relative bg-muted flex items-center justify-center p-6 md:p-12 py-12 md:py-0 md:h-[500px]">
          <div className="max-w-md">
            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-4 md:mb-6 text-primary">
              RESET THE SCALP. RESET THE MIND.
            </h3>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-foreground/80">
              Book your Headspa by Rolora™
            </p>
            <BookingButton size="lg" className="w-full px-8 md:px-12 py-6 md:py-7 text-sm md:text-base uppercase font-black tracking-widest rounded-none">
              Book Headspa
            </BookingButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-center mb-16 text-primary">
              FAQ
            </h2>

            <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-6">
              <AccordionItem value="faq-1" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Will my hair get wet?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Yes — the scalp is fully cleansed using water-based exfoliation and targeted serums. Your roots will feel fresh and renewed. We finish you neat and polished enough to continue your day — but this is not a blowout service.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Can I come with extensions or color-treated hair?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Absolutely. We tailor pressure, tools, and product placement around extensions, keratin, and recent color so everything remains protected while your scalp gets the reset it needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      How often should I book Headspa?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  For best maintenance: every 3–4 weeks. For stress relief or buildup concerns: even one session makes a noticeable difference. For events: book within the week to look and feel refreshed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Is this the same as a salon hair wash?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  No — this is a treatment-driven ritual, not hairstyling. It targets scalp health, circulation, and nervous system calm, leaving your hair refreshed — but the true transformation happens beneath the surface.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Can it help with flaking, oiliness, or shedding?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Yes. By clearing buildup, stimulating blood flow, and rebalancing the scalp environment, Headspa supports healthier roots over time.
                </AccordionContent>
              </AccordionItem>
            </AccordionPrimitive.Root>
          </div>
        </div>
      </section>
      
    </ServiceLayout>;
};

export default HeadSpa;

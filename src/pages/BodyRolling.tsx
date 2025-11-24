import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import bodyImage from "@/assets/service-body.jpg";
import bodyRollingMachine from "@/assets/body-rolling-machine-new.webp";
import glowingSkin from "@/assets/glowing-skin.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import Contact from "@/components/Contact";
import { Star, Plus, Minus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AccordionContent, AccordionItem } from "@/components/ui/accordion";
const BodyRolling = () => {
  return <ServiceLayout>
      {/* Hero Section - Two Column Layout */}
      <section className="py-12 md:py-20">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Left: Image */}
            <div className="relative rounded-none overflow-hidden h-[500px] lg:h-[700px] lg:sticky lg:top-24">
              <img src={bodyImage} alt="Rolora Flow body rolling" className="w-full h-full object-cover" />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              {/* Title & Rating */}
              <div>
                <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tight leading-[0.9] text-primary">
                  ROLORA FLOW™
                </h1>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
                  </div>
                  <span className="text-xl font-bold">4.9</span>
                </div>
                
                <div className="inline-block px-5 py-2 bg-accent text-primary-foreground rounded-none mb-8">
                  <span className="text-sm font-black uppercase tracking-widest">Body Rolling</span>
                </div>

                <p className="text-xl leading-relaxed mb-4">
                  Rolora Flow™ is our signature full-body rolling ritual — a modern, results-driven lymphatic experience designed to reduce bloating, improve circulation, sculpt your curves, and leave your body feeling lighter, tighter, and re-energized.
                </p>
                
                <p className="text-xl leading-relaxed mb-8 font-bold">
                  This isn't a massage.<br />
                  This is circulation technology, intentional movement, and structured sequencing — brought together the Rolora way.
                </p>

                <BookingButton size="lg" className="w-full md:w-auto px-16 py-7 text-base uppercase font-black tracking-widest rounded-none">
                  Book Now
                </BookingButton>
              </div>

              {/* What Is Rolora Flow */}
              <div className="border-t border-primary/30 pt-10 mt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 uppercase tracking-wider text-primary">What Is Rolora Flow™?</h2>
                <p className="font-body text-lg leading-relaxed mb-6 text-foreground/90">
                  Rolora Flow™ uses European rolling technology paired with infrared and red-light therapy to stimulate the lymphatic system, break up stagnation, and encourage natural detox.
                </p>
                <p className="font-body text-lg leading-relaxed mb-6 text-foreground/90">
                  Each roller is engineered with sculpted wooden nodes that mimic the hands of a therapist — but deeper, more consistent, and more effective.
                </p>
                <div className="mt-10 pt-8 border-t border-border">
                  <p className="font-body font-semibold text-lg mb-5 text-foreground">The result:</p>
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-base font-body text-foreground/80">
                    <li className="flex items-start gap-3">
                      <span className="text-primary">—</span>
                      <span>Reduced water retention</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">—</span>
                      <span>Visible contouring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">—</span>
                      <span>Less puffiness and swelling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">—</span>
                      <span>Improved lymph movement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">—</span>
                      <span>A lighter, smoother, energized body</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pricing Info */}
              <div className="bg-muted border-2 border-foreground p-8">
                <h3 className="font-black mb-6 uppercase tracking-widest text-4xl text-center">Rolora Flow™ Menu</h3>
                <div className="grid gap-4">
                  <div className="flex justify-between items-center border-b border-foreground pb-3">
                    <span className="font-bold">Single Roll</span>
                    <span className="text-xl font-black">$80</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-foreground pb-3">
                    <span className="font-bold">5-Pack</span>
                    <span className="text-xl font-black">$375</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">10-Pack</span>
                    <span className="text-xl font-black">$700</span>
                  </div>
                </div>
              </div>

              <BookingButton size="lg" className="w-full px-16 py-7 text-base uppercase font-black tracking-widest rounded-none mt-8">
                Book Now
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* The Flow Sequence Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-center mb-8 text-primary">
              THE FLOW SEQUENCE
            </h2>
            
            <p className="text-xl leading-relaxed mb-16 text-center">
              Every Rolora Flow™ session follows a carefully structured 15-position sequence focused on sculpting, circulation, and lymphatic activation.
            </p>

            <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-6">
              <AccordionItem value="item-1" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Targeted Rolling
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Focused rolling for legs, glutes, stomach, back, arms, and hips to sculpt and contour every area.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Infrared + Red-Light Therapy
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Enhanced detox and smoothing through advanced light therapy technology.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Customized Intensity
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Personalized pace and intensity tailored to your body and comfort level.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Guided Positioning
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Expert guidance through each position to ensure maximum effectiveness and proper form.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Full Rhythmic Flow
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  A complete sequence designed for visible results — releasing trapped fluids, improving lymphatic drainage, increasing circulation, reducing inflammation, enhancing muscle recovery, and revealing smoother contours.
                </AccordionContent>
              </AccordionItem>
            </AccordionPrimitive.Root>

            <p className="text-xl font-bold text-center mt-16">
              You'll feel lighter after one session — and noticeably more sculpted with consistency.
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12 bg-background">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={bodyRollingMachine} alt="Body Rolling Machine" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={facialRoom} alt="Treatment Environment" className="w-full h-full object-cover" />
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
                      Consistent Pressure
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Delivers deeper lymphatic stimulation than hands alone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Structured Positioning
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Every body zone is strategically targeted to move lymph upward and out.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Infrared Technology
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Boosts circulation, smooths texture, and softens muscle tension.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Sculpted Wooden Rollers
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Designed to mimic a therapist's hands for maximum contouring.
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
                  Our signature layering of movement, energy, and technology.
                </AccordionContent>
              </AccordionItem>
            </AccordionPrimitive.Root>
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
            
            <div className="grid md:grid-cols-3 gap-6 text-lg mb-12">
              {["Reduced bloat", "Slimmer waist appearance", "Defined legs + arms", "Smoother skin", "Better digestion", "Boosted energy", "Less swelling + water retention", "Muscle relaxation", "Stress relief"].map((benefit, index) => <div key={benefit} className="group relative px-8 py-5 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(209,178,114,0.25)] animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <span className="text-primary text-lg">✦</span>
                    <span className="font-semibold text-center">{benefit}</span>
                  </div>
                </div>)}
            </div>

            <p className="text-2xl font-bold text-center animate-fade-in" style={{
            animationDelay: "0.9s"
          }}>
              Your body resets — your energy rises.
            </p>
          </div>
        </div>
      </section>

      {/* Large Image Break */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={glowingSkin} alt="Body Rolling Results" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="container px-6 pb-12">
            <h3 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.9]">
              Detox. Sculpt. Energize.
            </h3>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 bg-accent text-primary-foreground">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-white mb-8">
              WHO IT'S FOR
            </h2>
            
            <p className="text-xl mb-12">Perfect for anyone who wants to:</p>
            
            <div className="grid md:grid-cols-2 gap-6 text-lg">
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <span className="text-2xl">✔</span>
                <p className="font-medium">De-bloat</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <span className="text-2xl">✔</span>
                <p className="font-medium">Sculpt + tighten</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <span className="text-2xl">✔</span>
                <p className="font-medium">Improve lymphatic flow</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <span className="text-2xl">✔</span>
                <p className="font-medium">Feel lighter and more energized</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <span className="text-2xl">✔</span>
                <p className="font-medium">Recover from workouts</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <span className="text-2xl">✔</span>
                <p className="font-medium">Smooth the appearance of cellulite</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <span className="text-2xl">✔</span>
                <p className="font-medium">Maintain overall wellness</p>
              </div>
            </div>

            <p className="text-xl mt-12 font-bold">
              It pairs perfectly with facials for that full-body Rolora glow.
            </p>
          </div>
        </div>
      </section>

      {/* Two Column CTA Section */}
      <section className="grid md:grid-cols-2">
        <div className="relative h-[300px] md:h-[500px] overflow-hidden">
          <img src={bodyImage} alt="Body Rolling Experience" className="w-full h-full object-cover" />
        </div>
        <div className="relative bg-muted flex items-center justify-center p-6 md:p-12 py-12 md:py-0 md:h-[500px]">
          <div className="max-w-md">
            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-4 md:mb-6 text-primary">
              THE ROLORA DIFFERENCE
            </h3>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Rolora Flow™ is results-focused, structured, and elevated — blending technology with intentional movement to sculpt your body and rebalance your energy.
            </p>
            <p className="text-lg md:text-xl font-bold mb-6 md:mb-8">
              This is modern beauty. Elevated energy.<br />
              This is Rolora Flow™.
            </p>
            <BookingButton size="lg" className="w-full px-8 md:px-12 py-6 md:py-7 text-sm md:text-base uppercase font-black tracking-widest rounded-none">
              Book Rolora Flow
            </BookingButton>
          </div>
        </div>
      </section>

      
    </ServiceLayout>;
};
export default BodyRolling;
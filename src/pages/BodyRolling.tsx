import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import bodyImage from "@/assets/service-body.jpg";
import bodyRollingMachine from "@/assets/body-rolling-machine.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import Contact from "@/components/Contact";
import { Star, Plus, Minus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AccordionContent, AccordionItem } from "@/components/ui/accordion";

const BodyRolling = () => {
  return (
    <ServiceLayout>
      {/* Hero Section - Two Column Layout */}
      <section className="py-12 md:py-20">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Left: Image */}
            <div className="relative rounded-none overflow-hidden h-[500px] lg:h-[700px] lg:sticky lg:top-24">
              <img 
                src={bodyImage} 
                alt="Rolora Flow body rolling"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              {/* Title & Rating */}
              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tighter leading-none">
                  ROLORA FLOW™
                </h1>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
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

                <BookingButton 
                  size="lg"
                  className="w-full md:w-auto px-16 py-7 text-base uppercase font-black tracking-widest rounded-none"
                >
                  Book Now
                </BookingButton>
              </div>

              {/* What Is Rolora Flow */}
              <div className="border-t-2 border-foreground pt-8">
                <h2 className="text-xl font-black mb-8 uppercase tracking-widest">What Is Rolora Flow™?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Rolora Flow™ uses European rolling technology paired with infrared and red-light therapy to stimulate the lymphatic system, break up stagnation, and encourage natural detox.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Each roller is engineered with sculpted wooden nodes that mimic the hands of a therapist — but deeper, more consistent, and more effective.
                </p>
                <div className="mt-8">
                  <p className="font-bold text-lg mb-4">The result:</p>
                  <ul className="space-y-2 text-muted-foreground text-lg">
                    <li className="flex items-start gap-3">
                      <span className="mt-2">•</span>
                      <span>Reduced water retention</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2">•</span>
                      <span>Visible contouring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2">•</span>
                      <span>Less puffiness and swelling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2">•</span>
                      <span>Improved lymph movement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2">•</span>
                      <span>A lighter, smoother, energized body</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pricing Info */}
              <div className="bg-muted border-2 border-foreground p-8">
                <h3 className="text-xs font-black mb-6 uppercase tracking-widest">Rolora Flow™ Menu</h3>
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

              <BookingButton 
                size="lg"
                className="w-full px-16 py-7 text-base uppercase font-black tracking-widest rounded-none mt-8"
              >
                Book Now
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* The Flow Sequence Section */}
      <section className="py-20 bg-background border-t-4 border-foreground">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-black mb-8 uppercase tracking-tighter">
              THE FLOW SEQUENCE
            </h2>
            
            <p className="text-xl leading-relaxed mb-12 max-w-4xl">
              Every Rolora Flow™ session follows a carefully structured 15-position sequence focused on sculpting, circulation, and lymphatic activation.
            </p>

            <div className="mb-12">
              <h3 className="text-2xl font-black mb-6 uppercase">Your session includes:</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="mt-2">•</span>
                  <span>Targeted rolling for legs, glutes, stomach, back, arms, and hips</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2">•</span>
                  <span>Infrared + red-light therapy for enhanced detox and smoothing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2">•</span>
                  <span>Customized pace + intensity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2">•</span>
                  <span>Guided positions for perfect form</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2">•</span>
                  <span>A full rhythmic flow designed for results</span>
                </li>
              </ul>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-black mb-6 uppercase">The sequence is designed to:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-foreground pl-6">
                  <p className="text-lg font-bold">1. Release trapped fluids</p>
                </div>
                <div className="border-l-4 border-foreground pl-6">
                  <p className="text-lg font-bold">2. Improve lymphatic drainage</p>
                </div>
                <div className="border-l-4 border-foreground pl-6">
                  <p className="text-lg font-bold">3. Increase circulation</p>
                </div>
                <div className="border-l-4 border-foreground pl-6">
                  <p className="text-lg font-bold">4. Reduce inflammation</p>
                </div>
                <div className="border-l-4 border-foreground pl-6">
                  <p className="text-lg font-bold">5. Enhance muscle recovery</p>
                </div>
                <div className="border-l-4 border-foreground pl-6">
                  <p className="text-lg font-bold">6. Reveal smoother contours</p>
                </div>
              </div>
            </div>

            <p className="text-xl font-bold mb-20">
              You'll feel lighter after one session — and noticeably more sculpted with consistency.
            </p>

            {/* Image Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={bodyRollingMachine} 
                  alt="Body Rolling Machine"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={facialRoom} 
                  alt="Treatment Environment"
                  className="w-full h-full object-cover"
                />
              </div>
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
            <h2 className="text-6xl md:text-7xl font-black mb-16 uppercase tracking-tighter text-center">
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
            <h2 className="text-6xl md:text-7xl font-black mb-12 uppercase tracking-tighter">
              BENEFITS YOU'LL FEEL IMMEDIATELY
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-lg mb-12">
              <div className="flex items-start gap-3">
                <span className="mt-2">•</span>
                <span>Reduced bloat</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2">•</span>
                <span>Slimmer waist appearance</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2">•</span>
                <span>Defined legs + arms</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2">•</span>
                <span>Smoother skin</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2">•</span>
                <span>Better digestion</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2">•</span>
                <span>Boosted energy</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2">•</span>
                <span>Less swelling + water retention</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2">•</span>
                <span>Muscle relaxation</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2">•</span>
                <span>Stress relief</span>
              </div>
            </div>

            <p className="text-2xl font-bold">
              Your body resets — your energy rises.
            </p>
          </div>
        </div>
      </section>

      {/* Large Image Break */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={glowingSkin} 
          alt="Body Rolling Results"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="container px-6 pb-12">
            <h3 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Detox. Sculpt. Energize.
            </h3>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 bg-accent text-primary-foreground">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-black mb-8 uppercase tracking-tighter text-white">
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
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src={bodyImage} 
            alt="Body Rolling Experience"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-[500px] overflow-hidden bg-muted flex items-center justify-center p-12">
          <div className="max-w-md">
            <h3 className="text-5xl font-black mb-6 uppercase tracking-tighter leading-none">
              💎 THE ROLORA DIFFERENCE
            </h3>
            <p className="text-xl mb-8">
              Rolora Flow™ is results-focused, structured, and elevated — blending technology with intentional movement to sculpt your body and rebalance your energy.
            </p>
            <p className="text-xl font-bold mb-8">
              This is modern beauty. Elevated energy.<br />
              This is Rolora Flow™.
            </p>
            <BookingButton 
              size="lg"
              className="w-full px-12 py-7 text-base uppercase font-black tracking-widest rounded-none"
            >
              Book Rolora Flow
            </BookingButton>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default BodyRolling;

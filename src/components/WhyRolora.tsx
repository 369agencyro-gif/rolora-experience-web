import studioInterior from "@/assets/why-rolora-mask.jpg";
import BookingButton from "@/components/BookingButton";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const WhyRolora = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-center mb-8 text-primary">
            WHY ROLORA HITS DIFFERENT
          </h2>
          
          <p className="text-xl leading-relaxed mb-16 text-center">
            Rolora isn't your typical "relax-and-hope-for-a-glow" facial spot. We're here for snatched results, sculpted energy, and glow that gets noticed.
          </p>

          <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-6 mb-16">
            <AccordionItem value="item-1" className="border-none">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                  <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                    Results You Can See
                  </h3>
                  <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                Every treatment is designed for visible, immediate results. No guessing, no waiting weeks to see change. You leave glowing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-none">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                  <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                    Expert-Level Techniques
                  </h3>
                  <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                Our team is trained in advanced sculpting, lymphatic drainage, and modern facial technology. We don't just relax your skin—we transform it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-none">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                  <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                    Customized For You
                  </h3>
                  <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                No cookie-cutter treatments here. Every facial is personalized to your skin type, concerns, and goals. Your skin is unique—your treatment should be too.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-none">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                  <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                    Clinical Meets Luxury
                  </h3>
                  <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                We combine medical-grade products with a spa-like experience. Get serious results in an environment that feels indulgent and intentional.
              </AccordionContent>
            </AccordionItem>
          </AccordionPrimitive.Root>

          {/* Studio Image */}
          <div className="relative overflow-hidden rounded-2xl mb-12">
            <img 
              src={studioInterior} 
              alt="Rolora Studio" 
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="text-center">
            <BookingButton 
              size="lg"
              className="px-12 py-6 text-sm uppercase font-bold tracking-wider"
            >
              EXPERIENCE ROLORA
            </BookingButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRolora;
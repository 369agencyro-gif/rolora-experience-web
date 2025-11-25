import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import aboutImage from "@/assets/about-image.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import facialSculpting from "@/assets/facial-sculpting.jpg";
import skincareProducts from "@/assets/skincare-products.jpg";
import Contact from "@/components/Contact";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star, Plus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

const Enhancements = () => {
  return (
    <ServiceLayout>
      {/* Hero Carousel Section */}
      <section className="relative w-full">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 3000 })]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            <CarouselItem className="pl-0">
              <div className="relative h-[70vh] md:h-[80vh] w-full">
                <img 
                  src={aboutImage} 
                  alt="Enhancement Treatment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 bg-background/80 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-xs font-medium">Jessica R.</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-0">
              <div className="relative h-[70vh] md:h-[80vh] w-full">
                <img 
                  src={facialSculpting} 
                  alt="Facial Enhancement"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 bg-background/80 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-xs font-medium">Amanda K.</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-0">
              <div className="relative h-[70vh] md:h-[80vh] w-full">
                <img 
                  src={facialRoom} 
                  alt="Treatment Room"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 bg-background/80 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-xs font-medium">Sarah M.</p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="container px-6">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tighter leading-none text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                ENHANCEMENTS
              </h1>
              <p className="text-xl md:text-2xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] mb-8 max-w-2xl">
                Customize Your Glow
              </p>
              <BookingButton 
                size="lg"
                className="pointer-events-auto px-16 py-7 text-base uppercase font-black tracking-widest"
              >
                Book Now
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Enhancement Menu Accordion */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-6 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              ENHANCEMENT MENU
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Elevate your facial with targeted boosters designed to enhance results and perfect your glow
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="item-1" className="border-none bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between p-8 font-black text-2xl uppercase tracking-wider hover:text-primary transition-colors group">
                  <div className="flex items-center gap-4">
                    <span>$50 Add-Ons</span>
                    <span className="text-primary text-3xl">$50</span>
                  </div>
                  <Plus className="h-6 w-6 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="px-8 pb-8">
                <div className="space-y-6 pt-4">
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Red Light Therapy</h3>
                    <p className="text-muted-foreground">Boosts collagen, calms inflammation, and enhances radiance.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Extractions</h3>
                    <p className="text-muted-foreground">Deep pore cleansing to detoxify and clarify congested skin.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-none bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between p-8 font-black text-2xl uppercase tracking-wider hover:text-primary transition-colors group">
                  <div className="flex items-center gap-4">
                    <span>$60 Add-Ons</span>
                    <span className="text-primary text-3xl">$60</span>
                  </div>
                  <Plus className="h-6 w-6 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="px-8 pb-8">
                <div className="space-y-6 pt-4">
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Dermaplaning</h3>
                    <p className="text-muted-foreground">Refines texture and removes peach fuzz for a smooth, glassy finish.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Oxygen Boost</h3>
                    <p className="text-muted-foreground">Brightens and refreshes dull, tired skin.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Microdermabrasion</h3>
                    <p className="text-muted-foreground">Gently polishes and smooths for instant luminosity.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">PureLift Sculpt</h3>
                    <p className="text-muted-foreground">Targets facial contours with lifting stimulation for a snatched finish.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Neck Lifting</h3>
                    <p className="text-muted-foreground">Targeted RF / sculpting massage to define and firm the neck, jawline, and décolletage.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-none bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between p-8 font-black text-2xl uppercase tracking-wider hover:text-primary transition-colors group">
                  <div className="flex items-center gap-4">
                    <span>$100 Add-Ons</span>
                    <span className="text-primary text-3xl">$100</span>
                  </div>
                  <Plus className="h-6 w-6 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="px-8 pb-8">
                <div className="space-y-6 pt-4">
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Hydra Infusion</h3>
                    <p className="text-muted-foreground">Deep hydration infusion that plumps and restores moisture balance.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Radiance Peel</h3>
                    <p className="text-muted-foreground">Refines texture and reveals brighter, more even skin tone.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Firming Lift (RF or Ultrasound)</h3>
                    <p className="text-muted-foreground">Tightens and firms for lifted, youthful contours.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <BookingButton 
              size="lg"
              className="px-16 py-7 text-base uppercase font-black tracking-widest"
            >
              Book Now
            </BookingButton>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="grid md:grid-cols-2">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src={skincareProducts} 
            alt="Skincare Products"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src={facialSculpting} 
            alt="Facial Treatment"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container px-6 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              WHY IT WORKS
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Science-backed enhancements that amplify your facial results
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="item-1" className="border-none bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between p-8 font-black text-2xl uppercase tracking-wider hover:text-primary transition-colors group">
                  Targeted Results
                  <Plus className="h-6 w-6 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="px-8 pb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each enhancement is designed to address specific skin concerns, from texture refinement to deep hydration, ensuring personalized results for every client.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-none bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between p-8 font-black text-2xl uppercase tracking-wider hover:text-primary transition-colors group">
                  Advanced Technology
                  <Plus className="h-6 w-6 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="px-8 pb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From RF lifting to LED therapy, our enhancements utilize cutting-edge technology to deliver visible, lasting improvements to your skin.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-none bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between p-8 font-black text-2xl uppercase tracking-wider hover:text-primary transition-colors group">
                  Amplified Results
                  <Plus className="h-6 w-6 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="px-8 pb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Enhancements work synergistically with your chosen facial, creating compound benefits that maximize your glow and extend your results.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <BookingButton 
              size="lg"
              className="px-16 py-7 text-base uppercase font-black tracking-widest"
            >
              Book Now
            </BookingButton>
          </div>
        </div>
      </section>

      {/* Benefits Carousel */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              PERFECT FOR
            </h2>
          </div>

          <Carousel
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 1200 })]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {[
                "Anyone wanting to customize their facial experience",
                "Those seeking enhanced texture refinement",
                "Clients looking for deeper hydration",
                "Anyone wanting visible contouring and lifting",
                "Those with specific skin concerns to address",
                "Clients seeking amplified glow and radiance"
              ].map((benefit, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="p-8 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.18)] animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <p className="text-lg font-semibold text-center leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="text-center mt-12">
            <BookingButton 
              size="lg"
              className="px-16 py-7 text-base uppercase font-black tracking-widest"
            >
              Book Enhancements
            </BookingButton>
          </div>
        </div>
      </section>

      {/* Two Column CTA Section */}
      <section className="grid md:grid-cols-2">
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src={facialRoom} 
            alt="Treatment Room"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-[500px] overflow-hidden bg-muted flex items-center justify-center p-12">
          <div className="max-w-md">
            <h3 className="text-5xl font-black mb-6 uppercase tracking-tighter leading-none">
              CUSTOMIZE YOUR GLOW
            </h3>
            <p className="text-xl mb-8">
              Add enhancements to any facial for a personalized Rolora experience.
            </p>
            <BookingButton 
              size="lg"
              className="w-full px-12 py-7 text-base uppercase font-black tracking-widest"
            >
              Book Your Treatment
            </BookingButton>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default Enhancements;

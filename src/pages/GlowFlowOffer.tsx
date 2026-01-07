import { Link } from "react-router-dom";
import { Check, MapPin, Plus, Star } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import { AccordionContent, AccordionItem } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import glowCloseup1 from "@/assets/glow-closeup-1.jpg";
import skinTexture from "@/assets/skin-texture-1.jpg";
import glowCloseup2 from "@/assets/glow-closeup-2.jpg";
import glowCloseup3 from "@/assets/glow-closeup-3.jpg";
import bodyRollingOrange from "@/assets/body-rolling-orange.png";
const GlowFlowOffer = () => {
  return <ServiceLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img alt="Rolora Glow + Flow Duo" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/ffb50ba2-e3bc-407b-ad0d-c3cb95cd7a66.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90"></div>
        
        <div className="relative container max-w-4xl mx-auto text-center px-6 py-20 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1] text-foreground">
            THE ROLORA<br />
            GLOW + FLOW DUO™<br />
            $139
          </h1>

          <p className="text-2xl md:text-3xl mb-6 text-primary font-bold">
            One Visit. Full Reset.
          </p>

          <p className="text-xl md:text-2xl mb-10 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            A sculpting facial + body flow session — the signature Rolora combination treatment. Lift the face. Lighten the body. Reset your entire energy system in one 75–90 min experience.
          </p>

          <div className="mb-10 space-y-3 max-w-xl mx-auto">
            {["Sculpting facial to snatch + brighten", "Detoxifying body rolling session", "Lymphatic contouring for face + body", "Enhanced circulation + reduced puffiness", "The full Rolora \"reset\" effect"].map((item, i) => <div key={i} className="flex items-center justify-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-base text-foreground/70">{item}</span>
              </div>)}
          </div>

          <BookingButton size="lg" className="w-full max-w-md mx-auto md:w-auto px-6 md:px-12 py-4 md:py-6 text-xs md:text-sm uppercase font-bold tracking-wide mb-6">
            BOOK THE DUO — $139
          </BookingButton>

          <p className="text-sm text-foreground/70 italic">
            Perfect for: first-timers, birthday treats, weekend resets, wellness lovers, and clients wanting maximum transformation in a single visit.
          </p>
        </div>
      </section>

      {/* Why You'll Love Rolora */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-primary text-center">
              WHY YOU'LL LOVE ROLORA
            </h2>
            
            <div className="space-y-6">
              {["Results you see and feel instantly", "Modern protocols, no fluff, no shortcuts", "Sculpting techniques inspired by European lymphatic methods", "Facial + body integration for full-system glow", "Clean, elevated, minimal environment designed for clarity + reset"].map((item, i) => <div key={i} className="group relative flex items-center gap-4 px-6 py-4 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary text-xs font-bold">✓</span>
                  </div>
                  <span className="text-base text-foreground/80 font-light tracking-wide">{item}</span>
                </div>)}
            </div>

            <div className="text-center mt-12">
              <BookingButton size="lg" className="w-full max-w-md mx-auto md:w-auto px-6 md:px-10 py-4 md:py-6 text-xs md:text-sm uppercase font-bold tracking-wide">
                BOOK THE DUO
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12 bg-background">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <video src="/videos/glow-flow-video-1.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <video src="/videos/glow-flow-video-2.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect During Your Visit */}
      <section className="py-20 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-primary text-center">
              WHAT TO EXPECT DURING YOUR VISIT
            </h2>
            
            <div className="space-y-6">
              {["A warm welcome + quick intake", "Guided treatment breakdown", "Personalized enhancements available", "Results-focused protocols", "A seamless booking + payment experience", "Post-treatment guidance tailored to your goals"].map((item, i) => <div key={i} className="group relative flex items-center gap-4 px-6 py-4 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary text-xs font-bold">✓</span>
                  </div>
                  <span className="text-base text-foreground/80 font-light tracking-wide">{item}</span>
                </div>)}
            </div>

            <div className="text-center mt-12">
              <BookingButton size="lg" className="w-full max-w-md mx-auto md:w-auto px-6 md:px-10 py-4 md:py-6 text-xs md:text-sm uppercase font-bold tracking-wide">
                BOOK THE DUO
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-[50vh] overflow-hidden">
        <img alt="Body Rolling Studio" className="w-full h-full object-cover" src={bodyRollingOrange} />
      </section>

      {/* Upgrade Your Experience */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-primary text-center">
              UPGRADE YOUR EXPERIENCE
            </h2>
            <p className="text-lg text-foreground/70 mb-12 text-center italic">
              Optional Add-Ons (You can add enhancements at check-in.)
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[{
              title: "Cryo Sculpting",
              desc: "Depuff + define"
            }, {
              title: "Red Light Therapy",
              desc: "Soothe + brighten"
            }, {
              title: "Neck Sculpting",
              desc: "Lift jawline + neck"
            }, {
              title: "Oxygen Glow Boost",
              desc: "Hydration surge"
            }, {
              title: "Microderm Polish",
              desc: "Smooth + refine"
            }].map((item, i) => <div key={i} className="p-6 rounded-xl bg-background/50 border border-primary/20 hover:bg-background/80 transition-colors">
                  <h3 className="font-display text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>)}
            </div>

            <div className="text-center mt-12">
              <BookingButton size="lg" className="w-full max-w-sm mx-auto md:w-auto px-6 md:px-10 py-4 md:py-6 text-xs md:text-sm uppercase font-bold tracking-wide">
                ADD ENHANCEMENTS
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Client Love Section */}
      <section className="py-20 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-primary text-center">
              CLIENT LOVE
            </h2>
            
            <div className="space-y-8">
              {[{
              name: "M.C.",
              text: "Rolora gave me the best facial I've ever had. Sculpted, glowing, and truly lifted."
            }, {
              name: "A.L.",
              text: "The Glow + Flow combo is unreal. I left feeling snatched AND lighter."
            }].map((review, i) => <div key={i} className="p-8 rounded-xl bg-muted/20 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-primary text-primary" />)}
                  </div>
                  <p className="text-lg text-foreground/90 mb-4 leading-relaxed italic">
                    "{review.text}"
                  </p>
                  <p className="text-sm font-semibold text-foreground">— {review.name}</p>
                </div>)}
            </div>

            <div className="text-center mt-12">
              <BookingButton size="lg" className="w-full max-w-md mx-auto md:w-auto px-6 md:px-10 py-4 md:py-6 text-xs md:text-sm uppercase font-bold tracking-wide">
                BOOK MY RESET
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid 2 */}
      <section className="py-12 bg-background">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img alt="Rolora Treatment Room" className="w-full h-full object-cover" src="/lovable-uploads/4c9081bb-58b9-4154-a597-fb6b0d6573cd.jpg" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={glowCloseup3} alt="Rolora Studio" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-primary text-center">
              FAQ
            </h2>
            
            <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-6">
              <AccordionItem value="item-1" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      How long are the intro treatments?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  First Glow: 50 min<br />
                  First Flow: 40 min<br />
                  Glow + Flow Duo: 75–90 min
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Can I upgrade during my appointment?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Yes — add enhancements when you arrive.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Is the $99 facial really results-focused?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Yes. Rolora is a modern results-first spa— no fluff, just glow.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Can first-time clients try more than one offer?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Each new client may redeem one (1) offer.
                </AccordionContent>
              </AccordionItem>
            </AccordionPrimitive.Root>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-background border-t-4 border-foreground">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-8 text-primary">
              YOUR RESET STARTS HERE
            </h2>
            <p className="text-xl mb-12 text-foreground/80">
              Choose your first Rolora experience.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
              {/* First Glow Card */}
              <div className="bg-background/95 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <video src="/videos/first-glow-offer.mp4" className="w-full h-full object-cover" autoPlay loop muted playsInline />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Most Popular
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold mb-2 text-foreground">THE FIRST GLOW</h3>
                  <p className="text-4xl font-bold text-primary mb-4">$99</p>
                  <div className="space-y-2 mb-6 text-left">
                    {["Signature glass-skin facial", "Custom serum blends", "50 minutes"].map((item, i) => <div key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/70">{item}</span>
                      </div>)}
                  </div>
                  <BookingButton size="sm" className="w-full px-4 py-3 text-xs uppercase font-bold">
                    BOOK THE FIRST GLOW
                  </BookingButton>
                </div>
              </div>

              {/* Glow + Flow Card */}
              <div className="bg-background/95 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <video src="/videos/glow-flow-offer.mp4" className="w-full h-full object-cover" autoPlay loop muted playsInline />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Full Reset
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold mb-2 text-foreground">GLOW + FLOW DUO</h3>
                  <p className="text-4xl font-bold text-primary mb-4">$139</p>
                  <div className="space-y-2 mb-6 text-left">
                    {["Sculpting facial + body rolling", "Full lymphatic reset", "75-90 minutes"].map((item, i) => <div key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/70">{item}</span>
                      </div>)}
                  </div>
                  <BookingButton size="sm" className="w-full px-4 py-3 text-xs uppercase font-bold">
                    BOOK THE DUO
                  </BookingButton>
                </div>
              </div>
            </div>

            <p className="text-xs text-foreground/60">
              <MapPin className="w-3 h-3 inline mr-1" />
              Corona del Mar, Newport Beach
            </p>
          </div>
        </div>
      </section>
    </ServiceLayout>;
};
export default GlowFlowOffer;
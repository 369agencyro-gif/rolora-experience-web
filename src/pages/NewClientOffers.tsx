import { Link } from "react-router-dom";
import { Check, MapPin, Plus, Star } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import { AccordionContent, AccordionItem } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import facialImage from "@/assets/facial-sculpting.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import glowingFace from "@/assets/glowing-face.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
const NewClientOffers = () => {
  return <ServiceLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={facialImage} alt="Rolora New Client Offers" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95"></div>
        
        <div className="relative container max-w-5xl mx-auto text-center px-6 py-20 animate-fade-in">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1] text-foreground">
            WELCOME TO ROLORA
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Choose Your First Rolora Experience — Exclusive New Client Offers
          </p>

          {/* Dual Offer Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* First Glow - $99 */}
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <video src="/videos/first-glow-offer.mp4" className="w-full h-full object-cover" autoPlay loop muted playsInline />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase">
                  Most Popular
                </div>
              </div>
              <div className="p-8">
                <h2 className="font-display text-3xl font-bold mb-2 text-foreground">THE FIRST GLOW</h2>
                <div className="text-5xl font-bold text-primary mb-4">$99</div>
                <p className="text-sm text-foreground/60 line-through mb-6">Regularly $235</p>
                
                <div className="space-y-3 mb-8 text-left">
                  {["Signature glass-skin facial", "Custom serum blends", "Deep cleanse & hydration", "Instant glow, zero downtime", "50 minutes"].map((item, i) => <div key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/70">{item}</span>
                    </div>)}
                </div>

                <BookingButton size="lg" className="w-full px-6 py-4 text-xs uppercase font-bold tracking-wide mb-4">
                  BOOK FIRST GLOW — $99
                </BookingButton>
                
                <Link to="/special-offer" className="block text-sm text-primary hover:text-primary/80 font-semibold underline">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Glow + Flow Duo - $139 */}
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <video src="/videos/glow-flow-offer.mp4" className="w-full h-full object-cover" autoPlay loop muted playsInline />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                  Full Reset
                </div>
              </div>
              <div className="p-8">
                <h2 className="font-display text-3xl font-bold mb-2 text-foreground">GLOW + FLOW DUO</h2>
                <div className="text-5xl font-bold text-primary mb-4">$139</div>
                <p className="text-sm text-foreground/60 mb-6">Face + Body Combo</p>
                
                <div className="space-y-3 mb-8 text-left">
                  {["Sculpting facial", "Body rolling session", "Full lymphatic reset", "Enhanced circulation", "75-90 minutes"].map((item, i) => <div key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/70">{item}</span>
                    </div>)}
                </div>

                <BookingButton size="lg" className="w-full px-6 py-4 text-xs uppercase font-bold tracking-wide mb-4">
                  BOOK THE DUO — $139
                </BookingButton>
                
                <Link to="/glow-flow-offer" className="block text-sm text-primary hover:text-primary/80 font-semibold underline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <p className="text-xs text-foreground/60 mt-8">
            New clients only. One intro offer per person. Limited availability.
          </p>
        </div>
      </section>

      {/* Why Rolora */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-primary text-center">
              WHY ROLORA?
            </h2>
            
            <div className="space-y-6">
              {["Results you see and feel instantly", "Modern protocols, no fluff, no shortcuts", "High-end devices + techniques used intentionally", "Glow + flow philosophy – lymphatic focus for face and body", "Founder-led protocols from years with Newport Beach's high-end clientele"].map((item, i) => <div key={i} className="group relative flex items-center gap-4 px-6 py-4 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary text-xs font-bold">✓</span>
                  </div>
                  <span className="text-base text-foreground/80 font-light tracking-wide">{item}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12 bg-background">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img alt="Rolora Treatment Room" className="w-full h-full object-cover" src="/lovable-uploads/f29117f4-c63b-4d9b-8c61-4c4af684d76e.jpg" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img alt="Rolora Studio Interior" className="w-full h-full object-cover" src="/lovable-uploads/eb40fcf0-4bdf-4852-b16a-480b475896e4.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-20 bg-background">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary text-center">
              REAL RESULTS
            </h2>
            
            <p className="text-lg text-foreground/70 mb-12 text-center">
              See the transformation from ROLORA treatments
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <img src={glowingFace} alt="Glowing skin results" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium text-foreground">After 1 session</p>
                </div>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <img src={glowingSkin} alt="Clear radiant skin" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium text-foreground">Series of 3 sessions</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-foreground/60 text-center italic">
              Individual results vary. Photos show real outcomes from consistent treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Client Love */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-primary text-center">
              CLIENT LOVE
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[{
              name: "M.C.",
              text: "Rolora gave me the best facial I've ever had. Sculpted, glowing, and truly lifted."
            }, {
              name: "A.L.",
              text: "The Glow + Flow combo is unreal. I left feeling snatched AND lighter."
            }, {
              name: "S.T.",
              text: "My skin has never looked this good. The custom serum blend made all the difference."
            }, {
              name: "J.R.",
              text: "Worth every penny. The results are immediate and keep getting better."
            }].map((review, i) => <div key={i} className="p-6 rounded-xl bg-background/50 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-primary text-primary" />)}
                  </div>
                  <p className="text-base text-foreground/90 mb-3 leading-relaxed italic">
                    "{review.text}"
                  </p>
                  <p className="text-sm font-semibold text-foreground">— {review.name}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-primary text-center">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            
            <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-6">
              <AccordionItem value="item-1" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Which offer should I choose?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  The First Glow ($99) is perfect if you want to try our signature facial. The Glow + Flow Duo ($139) gives you the full Rolora experience with both facial and body rolling in one visit — ideal for a complete reset.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Are these really the full treatments?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Yes. These are complete, full-length treatments at exclusive new client pricing. No corners cut, no express versions. You get the real Rolora experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      How long do appointments take?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  First Glow: 50 minutes. Glow + Flow Duo: 75-90 minutes. Plan for a few extra minutes before and after for check-in and post-treatment guidance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Can I try both offers?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Each new client may redeem one (1) intro offer. Choose the experience that speaks to you most!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Is there any downtime?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  No downtime. Most clients go straight back to their day with fresh, glowing skin. You may have light redness for a few hours if you have very sensitive skin.
                </AccordionContent>
              </AccordionItem>
            </AccordionPrimitive.Root>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-background border-t-4 border-foreground">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-8 text-primary">
              READY TO EXPERIENCE ROLORA?
            </h2>
            <p className="text-xl mb-12 text-foreground/80">
              Choose your first visit and discover what makes Rolora different.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="p-8 rounded-xl bg-muted/20 border-2 border-primary/30">
                <h3 className="font-display text-3xl font-bold mb-4 text-foreground">THE FIRST GLOW</h3>
                <p className="text-5xl font-bold text-primary mb-6">$99</p>
                <BookingButton size="lg" className="w-full px-6 py-4 text-xs uppercase font-bold tracking-wide">
                  BOOK NOW
                </BookingButton>
              </div>

              <div className="p-8 rounded-xl bg-primary/10 border-2 border-primary">
                <h3 className="font-display text-3xl font-bold mb-4 text-foreground">GLOW + FLOW DUO</h3>
                <p className="text-5xl font-bold text-primary mb-6">$139</p>
                <BookingButton size="lg" className="w-full px-6 py-4 text-xs uppercase font-bold tracking-wide">
                  BOOK NOW
                </BookingButton>
              </div>
            </div>

            <p className="text-xs text-foreground/60 mt-8">
              <MapPin className="w-3 h-3 inline mr-1" />
              Corona del Mar, Newport Beach · New clients only · One offer per person
            </p>
          </div>
        </div>
      </section>
    </ServiceLayout>;
};
export default NewClientOffers;
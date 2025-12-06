import { Link } from "react-router-dom";
import { Check, MapPin, Plus } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import glowCloseup1 from "@/assets/glow-closeup-1.jpg";
import skinTexture from "@/assets/skin-texture-1.jpg";
import glowCloseup2 from "@/assets/glow-closeup-2.jpg";
import glowCloseup3 from "@/assets/glow-closeup-3.jpg";
import serumCloseup1 from "@/assets/serum-closeup-1.jpg";
import serumCloseup2 from "@/assets/serum-closeup-2.jpg";
import skincareApply from "@/assets/skincare-apply-new.jpg";
import SocialMediaGrid from "@/components/SocialMediaGrid";

const SpecialOffer = () => {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img 
          src={glowCloseup1}
          alt="ROLORA Facial Glow Treatment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90"></div>
        
        <div className="relative container max-w-4xl mx-auto text-center px-6 py-20 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1] text-foreground">
            Try Your First<br />
            ROLORA Facial Glow™<br />
            for Only $99
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            New-client exclusive. Our signature glass-skin facial—now $99 (regularly $235).
          </p>

          <div className="mb-10 space-y-3">
            {["Deep cleanse, refine, and hydrate", "Custom serum blends mixed just for your skin", "Instant glow with zero downtime"].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-base text-foreground/70">{item}</span>
              </div>
            ))}
          </div>

          <BookingButton size="lg" className="w-full max-w-md mx-auto md:w-auto px-6 md:px-12 py-4 md:py-6 text-xs md:text-sm uppercase font-bold tracking-wide mb-6">
            YES, I WANT THE GLOW™
          </BookingButton>

          <p className="text-xs text-foreground/60">
            Limited time. New Rolora clients only. One intro offer per person.
          </p>
        </div>
      </section>

      {/* What Is ROLORA Facial Glow™ */}
      <section className="py-20 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-primary text-center">
              What Is the ROLORA Facial Glow™?
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                ROLORA Facial Glow™ is our signature, high-performance glow facial designed for glassy, smooth, camera-ready skin. In one session, we focus on clarity, texture, and hydration using tailored exfoliation, hydrodermabrasion, and precise techniques to soften fine lines and brighten dull tone.
              </p>
              
              <p>
                Each treatment is finished with our custom Rolora serum blend—mixed based on your skin that day—plus oxygen infusion for that unmistakable "Rolora glow."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-[50vh] overflow-hidden">
        <img alt="Glowing Skin" className="w-full h-full object-cover" src={serumCloseup1} />
      </section>

      {/* Why This $99 Intro Glow Is a Big Deal */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-primary text-center">
              Why This $99 Intro Glow Is a Big Deal
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "$235 value for $99", desc: "Full treatment, not a mini express." },
                { title: "Completely customized", desc: "No cookie-cutter protocol; we treat your skin concerns." },
                { title: "New-client only", desc: "Designed to let you experience Rolora before memberships or packages." },
                { title: "Perfect before events", desc: "Photos, trips, or when your skin just needs a reset." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-background/50 border border-primary/20 hover:bg-background/80 transition-colors">
                  <h3 className="font-display text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <BookingButton size="lg" className="w-full max-w-md mx-auto md:w-auto px-6 md:px-10 py-4 md:py-6 text-xs md:text-sm uppercase font-bold tracking-wide">
                BOOK MY FIRST GLOW
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Video Carousel */}
      <SocialMediaGrid />

      {/* What to Expect During Your Visit */}
      <section className="py-20 relative overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] text-primary text-center mb-6">
              What to Expect<br />During Your Visit
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/70 text-center mb-16 max-w-2xl mx-auto">
              Your journey to glowing skin, step by step
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Arrival & Quick Check-In", desc: "You'll be welcomed into Rolora's calm, modern space in Corona del Mar and complete a short skin + lifestyle intake." },
                { title: "Skin Analysis & Plan", desc: "We look at your skin up close, talk about your goals (glow, texture, breakouts, fine lines), and create a targeted plan for today." },
                { title: "Deep Cleanse & Exfoliation", desc: "Gentle double cleanse and refined exfoliation to remove buildup, soften texture, and prep your skin." },
                { title: "Hydrodermabrasion & Treatment Work", desc: "Tailored hydrodermabrasion and treatment steps to address dullness, congestion, or early signs of aging." },
                { title: "Custom Rolora Glow Serum Blend", desc: "We mix serums just for your skin—brightening, hydrating, calming, or firming—and infuse them deeply." },
                { title: "Oxygen Glow Finish", desc: "Oxygen infusion seals everything in for a fresh, glassy, \"I slept 10 hours\" glow." },
                { title: "Post-Treatment Plan", desc: "Before you leave, we walk you through what to use at home and when to come back for best results." }
              ].map((step, i) => (
                <div 
                  key={i} 
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-background via-background to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgb(0,0,0,0.15)] shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-sm overflow-hidden"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Playful glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Number badge */}
                  <div className="relative flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-primary font-bold text-sm">{i + 1}</span>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
            
            {/* Playful bottom CTA */}
            <div className="mt-16 text-center">
              <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 mb-6 animate-pulse">
                <p className="text-sm md:text-base font-semibold text-foreground">
                  Ready for your glow-up?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12 bg-background">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={glowCloseup3} alt="Rolora Treatment Room" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={serumCloseup2} alt="Custom Serum Blends" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 relative overflow-hidden bg-background border-t-4 border-foreground">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9] text-primary mb-8">
              This Offer Is Perfect If…
            </h2>
            
            <div className="space-y-4 mb-8">
              {[
                "Your skin looks dull, tired, or uneven in photos",
                "You want glass-skin glow without fillers or heavy makeup",
                "You're curious about Rolora and want to try us before committing",
                "You have an event, trip, or restart moment coming up",
                "You value results + experience, not quick, rushed facials"
              ].map((item, i) => (
                <div key={i} className="group relative flex items-center gap-4 px-6 py-4 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary text-xs font-bold">✓</span>
                  </div>
                  <span className="text-base text-foreground/80 font-light tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-foreground/60 italic text-center mb-8">
              If you're dealing with active medical skin conditions, we'll adjust the treatment or recommend a different option during your consult.
            </p>

            <div className="text-center">
              <BookingButton size="lg" className="w-full max-w-sm mx-auto md:w-auto px-6 md:px-10 py-4 md:py-6 text-xs md:text-sm uppercase font-bold tracking-wide">
                BOOK MY $99 GLOW
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 bg-background">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary text-center">
              Client Love
            </h2>
            
            <p className="text-lg text-foreground/70 mb-12 text-center">
              Real experiences from our ROLORA community
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <img src={skincareApply} alt="Happy client after facial" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <p className="text-sm text-foreground/80 italic mb-1">"My skin has never looked this glowy!"</p>
                  <p className="text-xs font-semibold text-primary">— Sarah M.</p>
                </div>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <img src={glowCloseup2} alt="Radiant skin client" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <p className="text-sm text-foreground/80 italic mb-1">"Finally found my go-to facial spot."</p>
                  <p className="text-xs font-semibold text-primary">— Jessica T.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Rolora */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-primary text-center">
              Why Rolora?
            </h2>
            
            <div className="space-y-6">
              {[
                "Modern, results-driven facials with a calm, elevated atmosphere.",
                "High-end devices + techniques used intentionally, not just for show.",
                "Glow + flow philosophy – lymphatic focus for face and body so you leave lighter, not just moisturized.",
                "Founder-led protocols created from years of experience with Newport Beach's high-end clientele."
              ].map((item, i) => (
                <div key={i} className="group relative flex items-center gap-4 px-6 py-4 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary text-xs font-bold">✓</span>
                  </div>
                  <span className="text-base text-foreground/80 font-light tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <BookingButton size="lg" className="w-full max-w-sm mx-auto md:w-auto px-6 md:px-10 py-4 md:py-6 text-xs md:text-sm uppercase font-bold tracking-wide">
                CLAIM MY GLOW
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* How to Claim Your $99 Glow */}
      <section className="py-20 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-primary text-center">
              How to Claim This Offer
            </h2>
            
            <div className="space-y-8 mb-12">
              {[
                { step: "1", title: "Tap \"Book My $99 Glow\" on this page." },
                { step: "2", title: "Choose your date and time that works best for you." },
                { step: "3", title: "Show up ready to glow – we'll handle the rest." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">{item.step}</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-lg text-foreground/80">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-foreground/60 text-center mb-8">
              New clients only. One intro offer per person. Cannot be combined with other promotions or membership pricing.
            </p>

            <div className="text-center">
              <BookingButton size="lg" className="w-full max-w-md mx-auto md:w-auto px-6 md:px-12 py-4 md:py-6 text-xs md:text-sm uppercase font-bold tracking-wide">
                BOOK MY $99 GLOW
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Other Offers Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-foreground">
              Or Explore Our Other New Client Offers
            </h2>
            <p className="text-lg text-foreground/70 mb-12 text-center">
              Not sure which offer is right for you? Check out these exclusive new client experiences.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Glow + Flow Duo Card */}
              <div className="bg-background/95 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <video src="/videos/glow-flow-offer.mp4" className="w-full h-full object-cover" autoPlay loop muted playsInline />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Full Reset
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-3xl font-bold mb-2 text-foreground">GLOW + FLOW DUO</h3>
                  <div className="text-5xl font-bold text-primary mb-4">$139</div>
                  <p className="text-sm text-foreground/60 mb-6">Face + Body Combo</p>
                  
                  <div className="space-y-3 mb-8 text-left">
                    {["Sculpting facial", "Body rolling session", "Full lymphatic reset", "Enhanced circulation", "75-90 minutes"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/70">{item}</span>
                      </div>
                    ))}
                  </div>

                  <BookingButton size="lg" className="w-full px-6 py-4 text-xs uppercase font-bold tracking-wide mb-4">
                    BOOK THE DUO — $139
                  </BookingButton>
                  
                  <Link to="/glow-flow-offer" className="block text-sm text-primary hover:text-primary/80 font-semibold underline text-center">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* All Services Card */}
              <div className="bg-background/95 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <video src="/videos/facial-massage-1.mp4" className="w-full h-full object-cover" autoPlay loop muted playsInline />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Full Menu
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-3xl font-bold mb-2 text-foreground">ALL SERVICES</h3>
                  <div className="text-5xl font-bold text-primary mb-4">$115+</div>
                  <p className="text-sm text-foreground/60 mb-6">Explore Our Full Menu</p>
                  
                  <div className="space-y-3 mb-8 text-left">
                    {["Signature facials", "Body rolling treatments", "Premium experiences", "Express services", "Custom packages"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/70">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/">
                    <BookingButton size="lg" className="w-full px-6 py-4 text-xs uppercase font-bold tracking-wide mb-4">
                      VIEW ALL SERVICES
                    </BookingButton>
                  </Link>
                  
                  <Link to="/intro-offers" className="block text-sm text-primary hover:text-primary/80 font-semibold underline text-center">
                    See All Offers
                  </Link>
                </div>
              </div>
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
                      Is this really the full facial, not a mini?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Yes. This is the complete ROLORA Facial Glow™ ($235 value), offered at $99 for first-time clients so you can truly experience the treatment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Is there downtime?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Most clients leave with fresh, glowing skin and can go straight back to work, events, or dinner. If your skin is very sensitive or we do stronger exfoliation, you may have light redness for a few hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      How long does the appointment take?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  Plan for about 60 minutes in the treatment room, plus a few minutes before and after for check-in and post-care.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      Can I combine this with other intro offers?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  No. To keep it fair and sustainable, this is one intro offer per person. After your first visit, we'll walk you through memberships, packages, or other treatments if you'd like to continue.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left group transition-all">
                    <h3 className="font-display font-semibold text-2xl tracking-wide text-primary group-hover:text-primary/80 transition-colors">
                      What if I need to reschedule?
                    </h3>
                    <Plus className="h-6 w-6 text-primary shrink-0 transition-all duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-foreground/70 text-lg pb-6 leading-relaxed">
                  We follow a simple reschedule/cancellation policy to respect everyone's time. You'll see all details when you book, and you can manage your appointment online.
                </AccordionContent>
              </AccordionItem>
            </AccordionPrimitive.Root>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background border-t-4 border-foreground">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-8 text-primary">
              READY TO GLOW?
            </h2>
            <p className="text-xl mb-8 text-foreground/80">
              Book your $99 ROLORA Facial Glow™ today and experience glass-skin results.
            </p>
            <BookingButton size="lg" className="w-full max-w-md mx-auto md:w-auto px-6 md:px-12 py-4 md:py-6 text-xs md:text-sm uppercase font-bold tracking-wide">
              BOOK MY $99 GLOW
            </BookingButton>
            <p className="text-xs text-foreground/60 mt-6">
              <MapPin className="w-3 h-3 inline mr-1" />
              Corona del Mar, Newport Beach
            </p>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default SpecialOffer;

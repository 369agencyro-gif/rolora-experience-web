import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import facialImage from "@/assets/service-facial.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import skincareProducts from "@/assets/skincare-products.jpg";
import Contact from "@/components/Contact";
import { Sparkles, Clock, Users, Award } from "lucide-react";

const RoloraFacialGlow = () => {
  return (
    <ServiceLayout>
      {/* Hero Section with Overlay */}
      <section className="relative">
        <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
          <img 
            src={facialImage} 
            alt="Rolora Facial Glow luxury treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6 animate-fade-in">
              <div className="mb-6">
                <span className="text-7xl md:text-8xl block mb-2">✨</span>
                <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold mb-6 tracking-tight">
                Rolora Facial Glow™
              </h1>
              <p className="text-3xl md:text-4xl text-accent font-medium mb-6">$235</p>
              <p className="text-xl md:text-2xl text-foreground/90 italic font-light max-w-2xl mx-auto">
                Your signature glow, defined by Rolora.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">

            {/* Signature Divider */}
            <div className="flex items-center justify-center mb-16 animate-fade-in">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-accent"></div>
              <span className="px-6 text-accent text-sm uppercase tracking-widest">Signature Treatment</span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-accent"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 mb-20 animate-fade-in">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-display font-semibold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    The Experience
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    A couture signature treatment blending dermaplaning, microdermabrasion, and tailored modalities for glowing skin.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    This ritual refines texture, boosts luminosity, and deeply hydrates for a glass-skin finish that defines the Rolora experience.
                  </p>
                </div>
                <div className="pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground italic">
                    "The ultimate facial experience for those who seek nothing but perfection."
                  </p>
                </div>
              </div>

              <div className="bg-muted/20 rounded-3xl p-8 border border-border/50">
                <h2 className="text-3xl font-display font-semibold mb-6">What to Expect</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 group">
                    <span className="text-accent mt-1 text-xl transition-transform group-hover:scale-110">✦</span>
                    <span className="text-muted-foreground text-lg">Dermaplaning for ultra-smooth texture</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="text-accent mt-1 text-xl transition-transform group-hover:scale-110">✦</span>
                    <span className="text-muted-foreground text-lg">Microdermabrasion to refine and polish</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="text-accent mt-1 text-xl transition-transform group-hover:scale-110">✦</span>
                    <span className="text-muted-foreground text-lg">Deep hydration infusion</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="text-accent mt-1 text-xl transition-transform group-hover:scale-110">✦</span>
                    <span className="text-muted-foreground text-lg">Customized serum application</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="text-accent mt-1 text-xl transition-transform group-hover:scale-110">✦</span>
                    <span className="text-muted-foreground text-lg">Glass-skin luminous finish</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="relative mb-20 animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-3xl"></div>
              <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-10 md:p-16 border border-border/50 shadow-elegant">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">Treatment Benefits</h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Experience transformative results that redefine luxury skincare
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="flex gap-6 group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Sparkles className="w-9 h-9 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-3">Radiant Glass Skin</h3>
                      <p className="text-muted-foreground leading-relaxed">Achieve luminous, dewy skin with a flawless glass-skin finish that glows from within.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Award className="w-9 h-9 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-3">Refined Texture</h3>
                      <p className="text-muted-foreground leading-relaxed">Smooth away imperfections and reveal baby-soft skin through expert exfoliation.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Clock className="w-9 h-9 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-3">Instant Hydration</h3>
                      <p className="text-muted-foreground leading-relaxed">Deep moisture infusion that plumps and revitalizes your complexion immediately.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Users className="w-9 h-9 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-3">Customized Care</h3>
                      <p className="text-muted-foreground leading-relaxed">Tailored modalities selected specifically for your unique skin needs and goals.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Section with Images */}
            <div className="mb-20 animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">Your Journey to Glow</h2>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent"></div>
                  <span className="text-accent">✦</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent"></div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="group relative rounded-3xl overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-500">
                  <img src={skincareProducts} alt="Premium skincare products" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <div className="inline-flex items-center gap-3 mb-2">
                    <span className="text-5xl font-display text-accent/20">01</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-accent to-transparent"></div>
                  </div>
                  <h3 className="text-3xl font-display font-semibold">Consultation & Cleanse</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We begin with a thorough skin analysis to understand your unique needs. A gentle double cleanse prepares your skin for the transformative treatments ahead.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Premium botanical cleansers remove impurities while maintaining your skin's natural moisture barrier.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="flex flex-col justify-center order-2 md:order-1 space-y-6">
                  <div className="inline-flex items-center gap-3 mb-2">
                    <span className="text-5xl font-display text-accent/20">02</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-accent to-transparent"></div>
                  </div>
                  <h3 className="text-3xl font-display font-semibold">Exfoliation & Refinement</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Expert dermaplaning removes vellus hair and dead skin cells, instantly revealing smoother, brighter skin beneath.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Microdermabrasion follows to polish your complexion, refining texture and enhancing product absorption for maximum results.
                  </p>
                </div>
                <div className="group relative rounded-3xl overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-500 order-1 md:order-2">
                  <img src={facialRoom} alt="Luxury treatment room" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="group relative rounded-3xl overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-500">
                  <img src={glowingSkin} alt="Glowing radiant skin results" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <div className="inline-flex items-center gap-3 mb-2">
                    <span className="text-5xl font-display text-accent/20">03</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-accent to-transparent"></div>
                  </div>
                  <h3 className="text-3xl font-display font-semibold">Hydration & Glow Infusion</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Customized serums rich in hyaluronic acid, vitamins, and antioxidants are carefully infused into your skin.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    A luxurious hydrating mask seals in moisture, leaving you with that coveted dewy, glass-skin finish.
                  </p>
                </div>
              </div>
            </div>

            {/* Who Is It For */}
            <div className="relative mb-20 animate-fade-in overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-accent/90 to-primary/95 rounded-3xl"></div>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
              </div>
              <div className="relative text-primary-foreground rounded-3xl p-12 md:p-20">
                <div className="text-center mb-16">
                  <h2 className="text-5xl md:text-6xl font-display font-semibold mb-6 tracking-tight">Perfect For</h2>
                  <div className="flex items-center justify-center gap-6 mt-8">
                    <div className="h-px w-24 bg-primary-foreground/40"></div>
                    <div className="w-2 h-2 rounded-full bg-primary-foreground/60 ring-4 ring-primary-foreground/20"></div>
                    <div className="h-px w-24 bg-primary-foreground/40"></div>
                  </div>
                </div>
                <div className="max-w-5xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="group relative">
                      <div className="absolute inset-0 bg-primary-foreground/5 rounded-3xl blur-xl group-hover:bg-primary-foreground/10 transition-all"></div>
                      <div className="relative flex items-start gap-6 bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-10 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all hover:transform hover:scale-[1.02]">
                        <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary-foreground/60 mt-2"></div>
                        <span className="text-xl leading-relaxed font-light">Anyone seeking the signature Rolora glow and luminous skin</span>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-primary-foreground/5 rounded-3xl blur-xl group-hover:bg-primary-foreground/10 transition-all"></div>
                      <div className="relative flex items-start gap-6 bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-10 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all hover:transform hover:scale-[1.02]">
                        <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary-foreground/60 mt-2"></div>
                        <span className="text-xl leading-relaxed font-light">Dull, tired skin in need of revitalization</span>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-primary-foreground/5 rounded-3xl blur-xl group-hover:bg-primary-foreground/10 transition-all"></div>
                      <div className="relative flex items-start gap-6 bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-10 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all hover:transform hover:scale-[1.02]">
                        <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary-foreground/60 mt-2"></div>
                        <span className="text-xl leading-relaxed font-light">Uneven texture or fine lines requiring smoothing</span>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-primary-foreground/5 rounded-3xl blur-xl group-hover:bg-primary-foreground/10 transition-all"></div>
                      <div className="relative flex items-start gap-6 bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-10 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all hover:transform hover:scale-[1.02]">
                        <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary-foreground/60 mt-2"></div>
                        <span className="text-xl leading-relaxed font-light">Pre-event preparation for camera-ready skin</span>
                      </div>
                    </div>
                    <div className="group relative md:col-span-2">
                      <div className="absolute inset-0 bg-primary-foreground/5 rounded-3xl blur-xl group-hover:bg-primary-foreground/10 transition-all"></div>
                      <div className="relative flex items-start gap-6 bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-10 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all hover:transform hover:scale-[1.02] max-w-3xl mx-auto">
                        <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary-foreground/60 mt-2"></div>
                        <span className="text-xl leading-relaxed font-light">Regular maintenance for sustained radiance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-16 animate-fade-in">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-display font-semibold leading-tight">
                    Ready to Experience<br />Your Signature Glow?
                  </h2>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent"></div>
                    <span className="text-accent text-2xl">✦</span>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
                  </div>
                </div>
                <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">
                  Discover why Rolora Facial Glow™ is our most beloved treatment. Your radiant transformation awaits.
                </p>
                <div className="pt-6">
                  <Button 
                    size="lg" 
                    className="px-16 py-8 text-xl shadow-elegant hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Book Your Facial Glow
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground/60 italic">
                  Limited availability — Reserve your exclusive session today
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default RoloraFacialGlow;

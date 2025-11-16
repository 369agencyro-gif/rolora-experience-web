import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import bodyImage from "@/assets/service-body.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import skincareProducts from "@/assets/skincare-products.jpg";
import Contact from "@/components/Contact";
import { Sparkles, RefreshCw, Award, Droplets } from "lucide-react";

const RoloraReset = () => {
  return (
    <ServiceLayout>
      {/* Hero Section with Overlay */}
      <section className="relative">
        <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
          <img 
            src={bodyImage} 
            alt="Rolora Reset luxury chemical peel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold mb-4 tracking-tight">
                Rolora Reset
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground/80 mb-8 italic">(Chemical Peel)</p>
              <div className="relative inline-flex flex-col items-center mb-8 py-6 px-4 overflow-visible isolate z-10">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
                <div className="relative px-12 py-5 rounded-2xl bg-card/10 backdrop-blur-md border-2 border-accent/30 shadow-2xl overflow-visible">
                  <p className="text-5xl md:text-6xl leading-[1.4] pt-2 pb-1 whitespace-nowrap overflow-visible font-display font-bold bg-gradient-to-br from-accent via-accent to-accent/60 bg-clip-text text-transparent tracking-tight">$245</p>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-foreground/90 italic font-light max-w-2xl mx-auto">
                Peel. Reveal. Reset.
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
              <span className="px-6 text-accent text-sm uppercase tracking-widest">Skin Resurfacing</span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-accent"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 mb-20 animate-fade-in">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-display font-semibold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    The Experience
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    A luxury chemical peel facial that resurfaces texture, refines tone, and reveals clear, radiant skin.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Perfect for dullness, discoloration, and uneven texture with low-downtime for maximum results.
                  </p>
                </div>
                <div className="pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground italic">
                    "A complete skin renewal experience."
                  </p>
                </div>
              </div>

              <div className="bg-muted/20 rounded-3xl p-8 border border-border/50">
                <h2 className="text-3xl font-display font-semibold mb-6">What to Expect</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 group">
                    <span className="text-accent mt-1 text-xl transition-transform group-hover:scale-110">✦</span>
                    <span className="text-muted-foreground text-lg">Professional chemical peel application</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="text-accent mt-1 text-xl transition-transform group-hover:scale-110">✦</span>
                    <span className="text-muted-foreground text-lg">Texture resurfacing and refinement</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="text-accent mt-1 text-xl transition-transform group-hover:scale-110">✦</span>
                    <span className="text-muted-foreground text-lg">Tone correction and brightening</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="text-accent mt-1 text-xl transition-transform group-hover:scale-110">✦</span>
                    <span className="text-muted-foreground text-lg">Low-downtime recovery</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="text-accent mt-1 text-xl transition-transform group-hover:scale-110">✦</span>
                    <span className="text-muted-foreground text-lg">Clear, radiant complexion</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visual Results Section */}
            <div className="mb-20 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group relative rounded-3xl overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-500">
                  <img src={glowingSkin} alt="Clear radiant skin results" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="group relative rounded-3xl overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-500">
                  <img src={skincareProducts} alt="Professional chemical peel treatment" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="relative mb-20 animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-3xl"></div>
              <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-10 md:p-16 border border-border/50 shadow-elegant">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">Resurfacing Benefits</h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Reveal your freshest, most radiant skin
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="flex gap-6 group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <RefreshCw className="w-9 h-9 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-3">Skin Renewal</h3>
                      <p className="text-muted-foreground leading-relaxed">Chemical peels reveal fresh, new skin layers for a completely renewed complexion.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Sparkles className="w-9 h-9 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-3">Brightness Boost</h3>
                      <p className="text-muted-foreground leading-relaxed">Fade discoloration and dark spots while revealing your skin's natural luminosity.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Award className="w-9 h-9 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-3">Texture Refinement</h3>
                      <p className="text-muted-foreground leading-relaxed">Smooth rough texture, minimize pores, and eliminate surface imperfections.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Droplets className="w-9 h-9 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-3">Low Downtime</h3>
                      <p className="text-muted-foreground leading-relaxed">Get dramatic results without extensive recovery—gentle yet effective.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment Journey */}
            <div className="mb-20 animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">The Reset Process</h2>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent"></div>
                  <span className="text-accent">✦</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent"></div>
                </div>
              </div>
              
              <div className="space-y-10">
                <div className="bg-card border border-border rounded-3xl p-10 hover:shadow-elegant transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent font-bold text-2xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-semibold mb-4">Skin Preparation & Analysis</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        We begin with a thorough consultation to understand your skin concerns and select the perfect peel strength for your needs. Your skin is cleansed and prepped to ensure optimal penetration and results.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-3xl p-10 hover:shadow-elegant transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent font-bold text-2xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-semibold mb-4">Professional Peel Application</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        A customized chemical solution is expertly applied to target dullness, discoloration, and texture concerns. The peel works to dissolve dead skin cells and trigger your skin's natural renewal process, revealing the fresh, radiant skin beneath.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-3xl p-10 hover:shadow-elegant transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent font-bold text-2xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-semibold mb-4">Soothing Recovery & Protection</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        We neutralize and remove the peel, then apply calming, hydrating treatments to support your skin's healing. You'll leave with comprehensive aftercare instructions to maximize results and ensure smooth, comfortable recovery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Perfect For Section */}
            <div className="relative mb-20 animate-fade-in overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-accent/90 to-primary/95 rounded-3xl"></div>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
              </div>
              <div className="relative text-primary-foreground rounded-3xl p-12 md:p-20">
                <div className="text-center mb-16">
                  <h2 className="text-5xl md:text-6xl font-display font-semibold mb-6 tracking-tight">Perfect Reset For</h2>
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
                        <span className="text-xl leading-relaxed font-light">Dull, lackluster complexion needing revival</span>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-primary-foreground/5 rounded-3xl blur-xl group-hover:bg-primary-foreground/10 transition-all"></div>
                      <div className="relative flex items-start gap-6 bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-10 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all hover:transform hover:scale-[1.02]">
                        <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary-foreground/60 mt-2"></div>
                        <span className="text-xl leading-relaxed font-light">Hyperpigmentation and uneven skin tone</span>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-primary-foreground/5 rounded-3xl blur-xl group-hover:bg-primary-foreground/10 transition-all"></div>
                      <div className="relative flex items-start gap-6 bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-10 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all hover:transform hover:scale-[1.02]">
                        <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary-foreground/60 mt-2"></div>
                        <span className="text-xl leading-relaxed font-light">Rough texture and enlarged pores</span>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-primary-foreground/5 rounded-3xl blur-xl group-hover:bg-primary-foreground/10 transition-all"></div>
                      <div className="relative flex items-start gap-6 bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-10 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all hover:transform hover:scale-[1.02]">
                        <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary-foreground/60 mt-2"></div>
                        <span className="text-xl leading-relaxed font-light">Acne scarring and surface imperfections</span>
                      </div>
                    </div>
                    <div className="group relative md:col-span-2">
                      <div className="absolute inset-0 bg-primary-foreground/5 rounded-3xl blur-xl group-hover:bg-primary-foreground/10 transition-all"></div>
                      <div className="relative flex items-start gap-6 bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-10 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all hover:transform hover:scale-[1.02] max-w-3xl mx-auto">
                        <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary-foreground/60 mt-2"></div>
                        <span className="text-xl leading-relaxed font-light">Preparing for special occasions or events</span>
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
                    Reset Your<br />Skin's Story
                  </h2>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent"></div>
                    <span className="text-accent text-2xl">✦</span>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
                  </div>
                </div>
                <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">
                  Transform dull, uneven skin into a clear, radiant canvas. Your reset journey begins now.
                </p>
                <div className="pt-6">
                  <BookingButton 
                    size="lg" 
                    className="px-16 py-8 text-xl shadow-elegant hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    Book Rolora Reset
                  </BookingButton>
                </div>
                <p className="text-sm text-muted-foreground/60 italic">
                  Professional skin resurfacing with remarkable results
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

export default RoloraReset;

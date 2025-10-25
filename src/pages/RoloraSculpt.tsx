import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import massageImage from "@/assets/service-massage.jpg";
import facialSculpting from "@/assets/facial-sculpting.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import Contact from "@/components/Contact";
import { Sparkles, Clock, Droplets, Zap } from "lucide-react";

const RoloraSculpt = () => {
  return (
    <ServiceLayout>
      {/* Hero Section with Overlay */}
      <section className="relative">
        <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
          <img 
            src={massageImage} 
            alt="Rolora Sculpt luxury treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6 animate-fade-in">
              <div className="mb-6">
                <span className="text-7xl md:text-8xl block mb-2">💎</span>
                <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold mb-8 tracking-tight">
                Rolora Sculpt
              </h1>
              <div className="relative inline-flex flex-col items-center mb-8">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-150"></div>
                <div className="relative px-12 py-4 rounded-2xl bg-card/10 backdrop-blur-md border-2 border-accent/30">
                  <p className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-br from-accent via-accent to-accent/60 bg-clip-text text-transparent tracking-tight">$205</p>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-foreground/90 italic font-light max-w-2xl mx-auto">
                Get snatched by Rolora.
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
              <span className="px-6 text-accent text-sm uppercase tracking-widest">Facial Sculpting</span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-accent"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 mb-20 animate-fade-in">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-display font-semibold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    The Experience
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    A lifting and contouring facial designed to sculpt, define, and depuff.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Using lymphatic drainage, gua sha, cryo sculpting and a stem cells infused serum, this ritual enhances definition and awakens natural facial contours.
                  </p>
                </div>
                <div className="pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground italic">
                    "Sculpted, defined, undeniably snatched."
                  </p>
                </div>
              </div>

              <div className="bg-muted/20 rounded-3xl p-8 border border-border/50">
                <h2 className="text-3xl font-display font-semibold mb-6">What to Expect</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 group">
                    <span className="text-accent mt-1 text-xl transition-transform group-hover:scale-110">✦</span>
                    <span className="text-muted-foreground text-lg">Lymphatic drainage massage</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="text-accent mt-1 text-xl transition-transform group-hover:scale-110">✦</span>
                    <span className="text-muted-foreground text-lg">Gua sha facial contouring</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="text-accent mt-1 text-xl transition-transform group-hover:scale-110">✦</span>
                    <span className="text-muted-foreground text-lg">Cryo sculpting techniques</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="text-accent mt-1 text-xl transition-transform group-hover:scale-110">✦</span>
                    <span className="text-muted-foreground text-lg">Stem cells infused serum</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="text-accent mt-1 text-xl transition-transform group-hover:scale-110">✦</span>
                    <span className="text-muted-foreground text-lg">Defined, sculpted facial contours</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visual Results Section */}
            <div className="mb-12 animate-fade-in">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <img src={facialSculpting} alt="Gua sha sculpting technique" className="w-full h-[280px] object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <img src={glowingSkin} alt="Sculpted defined features" className="w-full h-[280px] object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <img src={facialRoom} alt="Premium treatment space" className="w-full h-[280px] object-cover" />
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold text-center mb-8">Sculpting Benefits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Sparkles className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Defined Contours</h3>
                    <p className="text-muted-foreground">Enhance your natural bone structure and achieve that coveted snatched appearance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Droplets className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Reduced Puffiness</h3>
                    <p className="text-muted-foreground">Lymphatic drainage techniques eliminate bloating and water retention for a lifted look.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Instant Lifting</h3>
                    <p className="text-muted-foreground">See immediate results with cryo sculpting and targeted massage techniques.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Long-Lasting Definition</h3>
                    <p className="text-muted-foreground">Stem cell serums promote ongoing firmness and maintain your sculpted results.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment Journey */}
            <div className="mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold text-center mb-12">The Sculpting Experience</h2>
              
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Lymphatic Drainage Massage</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We begin with gentle, rhythmic massage techniques that stimulate your lymphatic system, encouraging natural detoxification and reducing facial puffiness. This foundation prepares your skin for optimal contouring.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Gua Sha Sculpting</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Using premium jade or rose quartz tools, we perform expert gua sha techniques along your natural contours. This ancient practice enhances definition, promotes circulation, and creates that lifted, chiseled appearance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Cryo Sculpting & Serum Infusion</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Cool cryo tools tighten and firm while advanced stem cell serums penetrate deeply. This powerful combination locks in your sculpted definition and provides lasting firmness and radiance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ideal Candidates */}
            <div className="relative mb-20 animate-fade-in overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-accent/90 to-primary/95 rounded-3xl"></div>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
              </div>
              <div className="relative text-primary-foreground rounded-3xl p-12 md:p-20">
                <div className="text-center mb-16">
                  <h2 className="text-5xl md:text-6xl font-display font-semibold mb-6 tracking-tight">Get Snatched If You Have</h2>
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
                        <span className="text-xl leading-relaxed font-light">Puffiness or water retention in the face</span>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-primary-foreground/5 rounded-3xl blur-xl group-hover:bg-primary-foreground/10 transition-all"></div>
                      <div className="relative flex items-start gap-6 bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-10 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all hover:transform hover:scale-[1.02]">
                        <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary-foreground/60 mt-2"></div>
                        <span className="text-xl leading-relaxed font-light">Loss of facial definition or sagging</span>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-primary-foreground/5 rounded-3xl blur-xl group-hover:bg-primary-foreground/10 transition-all"></div>
                      <div className="relative flex items-start gap-6 bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-10 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all hover:transform hover:scale-[1.02]">
                        <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary-foreground/60 mt-2"></div>
                        <span className="text-xl leading-relaxed font-light">Desire for a natural, lifted appearance</span>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-primary-foreground/5 rounded-3xl blur-xl group-hover:bg-primary-foreground/10 transition-all"></div>
                      <div className="relative flex items-start gap-6 bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-10 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all hover:transform hover:scale-[1.02]">
                        <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary-foreground/60 mt-2"></div>
                        <span className="text-xl leading-relaxed font-light">Morning puffiness or tired-looking features</span>
                      </div>
                    </div>
                    <div className="group relative md:col-span-2">
                      <div className="absolute inset-0 bg-primary-foreground/5 rounded-3xl blur-xl group-hover:bg-primary-foreground/10 transition-all"></div>
                      <div className="relative flex items-start gap-6 bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-10 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all hover:transform hover:scale-[1.02] max-w-3xl mx-auto">
                        <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary-foreground/60 mt-2"></div>
                        <span className="text-xl leading-relaxed font-light">Special event preparation for defined, camera-ready features</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-8 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold mb-4">Experience the Art of Sculpting</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Reveal your most defined, contoured features with Rolora Sculpt. Your snatched transformation starts here.
              </p>
              <Button 
                size="lg" 
                className="px-12 py-6 text-lg shadow-elegant"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Rolora Sculpt
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default RoloraSculpt;

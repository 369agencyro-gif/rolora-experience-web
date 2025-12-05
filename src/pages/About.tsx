import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
import studioInterior from "@/assets/studio-interior.jpg";
import facialSculpting from "@/assets/facial-sculpting.jpg";
import glowingFace from "@/assets/glowing-face.jpg";
import bodyRollingTreatment from "@/assets/body-rolling-treatment.webp";

const About = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section - INTRO */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={studioInterior}
              alt="Rolora Studio Corona del Mar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
          </div>
          
          <div className="relative z-10 container px-6 py-20">
            <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-6 block">
                About Rolora
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[0.95]">
                Modern Beauty.<br />Elevated Energy.
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80 leading-relaxed mb-8">
                ROLORA is a curated space for advanced facials, body sculpting, and scalp treatments — where precision, technology, and energy converge.
              </p>
              <p className="text-base md:text-lg max-w-2xl mx-auto text-white/70 leading-relaxed mb-12">
                Built on the belief that glow is energy, and energy is beauty, ROLORA redefines the modern treatment experience in Corona del Mar.
              </p>
              <p className="text-primary font-display text-xl md:text-2xl font-bold tracking-wide">
                Results that speak. Energy you feel.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — THE PHILOSOPHY */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className="order-2 md:order-1 animate-fade-in">
                  <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
                    The Philosophy
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-primary leading-[0.95]">
                    Glow is energy.<br />Energy is beauty.
                  </h2>
                  <div className="space-y-6 text-foreground/80 leading-relaxed">
                    <p className="text-lg">
                      We believe radiance begins beneath the surface.
                    </p>
                    <p>
                      Each treatment is a fusion of structure, circulation, and intention — crafted to sculpt the skin, awaken definition, and restore flow.
                    </p>
                    <p className="text-foreground/60 italic">
                      There's no "pampering." No filler words.<br />
                      Only precision, balance, and results that speak before you do.
                    </p>
                    <p className="text-lg font-medium text-foreground">
                      Because when your energy is aligned, your glow becomes unstoppable.
                    </p>
                  </div>
                </div>
                
                <div className="order-1 md:order-2 relative group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={glowingFace}
                      alt="Glowing skin results"
                      className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Image Break */}
        <section className="relative h-[50vh] overflow-hidden">
          <img 
            src={facialSculpting}
            alt="Rolora facial treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </section>

        {/* Section 3 — THE EXPERIENCE */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={bodyRollingTreatment}
                      alt="Body rolling treatment"
                      className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
                </div>
                
                <div className="animate-fade-in">
                  <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
                    The Experience
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-foreground leading-[0.95]">
                    A New Standard in Beauty
                  </h2>
                  <div className="space-y-6 text-foreground/80 leading-relaxed">
                    <p className="text-lg">
                      ROLORA embodies a new standard — where beauty feels powerful, intelligent, and alive.
                    </p>
                    <p>
                      Each session is designed with intention and flow:
                    </p>
                    <div className="space-y-4 py-4">
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p><span className="font-bold text-foreground">Facials</span> contour and energize.</p>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p><span className="font-bold text-foreground">Body Rolling</span> detoxifies and sculpts.</p>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p><span className="font-bold text-foreground">The Headspa</span> restores clarity and calm.</p>
                      </div>
                    </div>
                    <p className="text-foreground/60 italic">
                      It's a curated journey of precision — designed to deliver results that are both seen and felt.
                    </p>
                    <p className="text-lg font-medium text-primary">
                      Not a treatment. A method for the modern glow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
          </div>

          <div className="container px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-primary">
                Ready to Experience Rolora?
              </h2>
              <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
                Discover the modern glow. Book your first treatment today.
              </p>
              <BookingButton size="lg" className="px-12 py-5 text-sm uppercase font-bold tracking-wide">
                Book Your Experience
              </BookingButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;

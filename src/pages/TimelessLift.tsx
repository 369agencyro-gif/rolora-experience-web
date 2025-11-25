import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import facialImage from "@/assets/service-facial.jpg";
import facialSculpting from "@/assets/facial-sculpting.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import skincareProducts from "@/assets/skincare-products.jpg";
import diverseSkin from "@/assets/diverse-skin.jpg";
import Contact from "@/components/Contact";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TimelessLift = () => {
  return (
    <ServiceLayout>
      {/* Hero Section - Two Column Layout */}
      <section className="py-12 md:py-20">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Left: Image */}
            <div className="relative rounded-none overflow-hidden h-[500px] lg:h-[700px] lg:sticky lg:top-24">
              <img 
                src={facialImage} 
                alt="Timeless Lift treatment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              {/* Title & Rating */}
              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tighter leading-none">
                  TIMELESS LIFT
                </h1>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-xl font-bold">5.0</span>
                </div>
                
                <div className="inline-block px-5 py-2 bg-accent text-primary-foreground rounded-none mb-8">
                  <span className="text-sm font-black uppercase tracking-widest">Age-Defying</span>
                </div>

                <p className="text-xl leading-relaxed mb-8">
                  A rejuvenating facial designed to restore elasticity, firm, and smooth the skin using advanced ultrasound, peptide infusion, and cryo lifting. Ideal for those seeking an age-defying, lifted complexion with visible anti-aging results.
                </p>

                <BookingButton 
                  size="lg"
                  className="w-full md:w-auto px-16 py-7 text-base uppercase font-black tracking-widest rounded-none"
                >
                  Book Now
                </BookingButton>
              </div>

              {/* What Makes it Great */}
              <div className="border-t-2 border-foreground pt-8">
                <h2 className="text-xl font-black mb-8 uppercase tracking-widest">What Makes it Great</h2>
                <div className="grid gap-8">
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Ultrasound Technology</h3>
                    <p className="text-muted-foreground text-lg">Advanced ultrasound therapy lifts and firms for visible tightening.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Peptide Infusion</h3>
                    <p className="text-muted-foreground text-lg">Powerful peptides boost collagen and restore youthful elasticity.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Cryo Lifting</h3>
                    <p className="text-muted-foreground text-lg">Cold therapy instantly tightens and firms for lasting lift effect.</p>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-muted border-2 border-foreground p-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-xs font-black mb-2 uppercase tracking-widest">Duration</div>
                  <div className="text-2xl font-black">90 min</div>
                </div>
                <div>
                  <div className="text-xs font-black mb-2 uppercase tracking-widest">Price</div>
                  <div className="text-2xl font-black">$245</div>
                </div>
                <div>
                  <div className="text-xs font-black mb-2 uppercase tracking-widest">Ideal For</div>
                  <div className="text-sm font-bold">Anti-aging</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Involved Section */}
      <section className="py-20 bg-background border-t-4 border-foreground">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-black mb-16 uppercase tracking-tighter">
              WHAT'S INVOLVED
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <div className="border-t-2 border-foreground pt-6">
                <div className="text-lg font-black mb-3 uppercase">01. Ultrasound Therapy</div>
                <p className="text-muted-foreground">
                  Deep penetrating ultrasound stimulates collagen for lifting and firming.
                </p>
              </div>
              <div className="border-t-2 border-foreground pt-6">
                <div className="text-lg font-black mb-3 uppercase">02. Peptide Infusion</div>
                <p className="text-muted-foreground">
                  Advanced peptide serums restore elasticity and smooth fine lines.
                </p>
              </div>
              <div className="border-t-2 border-foreground pt-6">
                <div className="text-lg font-black mb-3 uppercase">03. Cryo Lifting</div>
                <p className="text-muted-foreground">
                  Cold therapy tightens and contours for immediate age-defying results.
                </p>
              </div>
            </div>

            {/* Expert-Curated Techniques */}
            <div className="mb-12">
              <h3 className="text-xs font-black uppercase tracking-widest mb-8">
                Expert-Curated Techniques & Tools
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Technique 1 */}
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden mb-4">
                    <img 
                      src={facialSculpting} 
                      alt="Ultrasound Therapy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-black mb-2 uppercase">Ultrasound Therapy</h4>
                  <p className="text-muted-foreground">
                    Medical-grade ultrasound penetrates deep to stimulate collagen production.
                  </p>
                </div>

                {/* Technique 2 */}
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden mb-4">
                    <img 
                      src={skincareProducts} 
                      alt="Peptide Serums"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-black mb-2 uppercase">Peptide Serums</h4>
                  <p className="text-muted-foreground">
                    Clinical-strength peptides rebuild skin structure and restore firmness.
                  </p>
                </div>

                {/* Technique 3 */}
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden mb-4">
                    <img 
                      src={diverseSkin} 
                      alt="Cryo Technology"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-black mb-2 uppercase">Cryo Technology</h4>
                  <p className="text-muted-foreground">
                    Precision cold therapy instantly tightens and lifts for dramatic results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image Break */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={glowingSkin} 
          alt="Lifted Results"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="container px-6 pb-12">
            <h3 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Defy Time
            </h3>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background border-t-4 border-foreground">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] animate-fade-in mb-12 text-primary">
              BENEFITS YOU'LL FEEL IMMEDIATELY
            </h2>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 1200,
                }),
              ]}
              className="w-full mb-12"
            >
              <CarouselContent>
                {["Firmer, tighter skin", "Reduced fine lines", "Lifted contours", "Improved elasticity", "Smoother texture", "Youthful appearance", "Enhanced collagen", "Diminished wrinkles", "Age-defying results"].map((benefit, index) => (
                  <CarouselItem key={benefit} className="md:basis-1/3">
                    <div className="group relative px-8 py-5 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 animate-fade-in" style={{
                      animationDelay: `${index * 0.1}s`
                    }}>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex items-center justify-center gap-3">
                        <span className="text-primary text-lg">✦</span>
                        <span className="font-semibold text-center">{benefit}</span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <p className="text-2xl font-bold text-center animate-fade-in" style={{
              animationDelay: "0.9s"
            }}>
              Your skin lifts — time reverses.
            </p>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 bg-accent text-primary-foreground">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-black mb-12 uppercase tracking-tighter text-white">
              PERFECT FOR
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-lg">
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <div className="w-3 h-3 bg-primary-foreground mt-2 flex-shrink-0"></div>
                <p className="font-medium">Mature skin seeking visible lifting and firming</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <div className="w-3 h-3 bg-primary-foreground mt-2 flex-shrink-0"></div>
                <p className="font-medium">Loss of elasticity and sagging concerns</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <div className="w-3 h-3 bg-primary-foreground mt-2 flex-shrink-0"></div>
                <p className="font-medium">Fine lines and wrinkle reduction</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <div className="w-3 h-3 bg-primary-foreground mt-2 flex-shrink-0"></div>
                <p className="font-medium">Age-defying, long-term skin investment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Image Section */}
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
              DEFY TIME
            </h3>
            <p className="text-xl mb-8">
              Experience advanced anti-aging technology. Book Timeless Lift today.
            </p>
            <BookingButton 
              size="lg"
              className="w-full px-12 py-7 text-base uppercase font-black tracking-widest rounded-none"
            >
              Book Timeless Lift
            </BookingButton>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default TimelessLift;

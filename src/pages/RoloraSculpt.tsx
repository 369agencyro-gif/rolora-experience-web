import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import massageImage from "@/assets/service-massage.jpg";
import facialSculpting from "@/assets/facial-sculpting.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import skincareProducts from "@/assets/skincare-products.jpg";
import diverseSkin from "@/assets/diverse-skin.jpg";
import Contact from "@/components/Contact";
import { Star } from "lucide-react";

const RoloraSculpt = () => {
  return (
    <ServiceLayout>
      {/* Hero Section - Two Column Layout */}
      <section className="py-12 md:py-20">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Left: Image */}
            <div className="relative rounded-none overflow-hidden h-[500px] lg:h-[700px] lg:sticky lg:top-24">
              <img 
                src={massageImage} 
                alt="Rolora Sculpt treatment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              {/* Title & Rating */}
              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tighter leading-none">
                  ROLORA SCULPT
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
                  <span className="text-sm font-black uppercase tracking-widest">Get Snatched</span>
                </div>

                <p className="text-xl leading-relaxed mb-8">
                  A lifting and contouring facial designed to sculpt, define, and depuff. Using lymphatic drainage, gua sha, cryo sculpting and stem cell infused serum, this ritual enhances definition and awakens natural facial contours.
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
                    <h3 className="font-black text-xl mb-2 uppercase">Defined Contours</h3>
                    <p className="text-muted-foreground text-lg">Sculpts and lifts for visibly sharper, more defined facial structure.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Reduces Puffiness</h3>
                    <p className="text-muted-foreground text-lg">Lymphatic drainage eliminates fluid retention for a snatched look.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase">Instant Lifting</h3>
                    <p className="text-muted-foreground text-lg">Cryo sculpting and gua sha deliver immediate tightening results.</p>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-muted border-2 border-foreground p-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-xs font-black mb-2 uppercase tracking-widest">Duration</div>
                  <div className="text-2xl font-black">75 min</div>
                </div>
                <div>
                  <div className="text-xs font-black mb-2 uppercase tracking-widest">Price</div>
                  <div className="text-2xl font-black">$205</div>
                </div>
                <div>
                  <div className="text-xs font-black mb-2 uppercase tracking-widest">Ideal For</div>
                  <div className="text-sm font-bold">Sculpting & lifting</div>
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
                <div className="text-lg font-black mb-3 uppercase">01. Lymphatic Drainage</div>
                <p className="text-muted-foreground">
                  Gentle massage technique to reduce puffiness and promote detoxification.
                </p>
              </div>
              <div className="border-t-2 border-foreground pt-6">
                <div className="text-lg font-black mb-3 uppercase">02. Gua Sha Sculpting</div>
                <p className="text-muted-foreground">
                  Ancient tool work that lifts, contours, and defines facial structure.
                </p>
              </div>
              <div className="border-t-2 border-foreground pt-6">
                <div className="text-lg font-black mb-3 uppercase">03. Cryo & Serum</div>
                <p className="text-muted-foreground">
                  Cold therapy and stem cells for lifted, sculpted, snatched results.
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
                      alt="Lymphatic Drainage Massage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-black mb-2 uppercase">Lymphatic Drainage</h4>
                  <p className="text-muted-foreground">
                    Specialized massage that eliminates toxins and reduces facial bloating.
                  </p>
                </div>

                {/* Technique 2 */}
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden mb-4">
                    <img 
                      src={skincareProducts} 
                      alt="Gua Sha Tools"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-black mb-2 uppercase">Gua Sha Sculpting</h4>
                  <p className="text-muted-foreground">
                    Traditional technique using jade tools for instant contouring and lift.
                  </p>
                </div>

                {/* Technique 3 */}
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden mb-4">
                    <img 
                      src={diverseSkin} 
                      alt="Cryo Sculpting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-black mb-2 uppercase">Cryo Sculpting</h4>
                  <p className="text-muted-foreground">
                    Cold therapy tightens pores and enhances sculpted definition instantly.
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
          alt="Sculpted Results"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="container px-6 pb-12">
            <h3 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Get Snatched
            </h3>
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
                <p className="font-medium">Anyone wanting defined, sculpted facial contours</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <div className="w-3 h-3 bg-primary-foreground mt-2 flex-shrink-0"></div>
                <p className="font-medium">Reducing puffiness and facial bloating</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <div className="w-3 h-3 bg-primary-foreground mt-2 flex-shrink-0"></div>
                <p className="font-medium">Pre-event sharpening and instant lift</p>
              </div>
              <div className="flex items-start gap-4 border-t-2 border-primary-foreground pt-6">
                <div className="w-3 h-3 bg-primary-foreground mt-2 flex-shrink-0"></div>
                <p className="font-medium">Maintaining youthful facial definition</p>
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
              GET SNATCHED
            </h3>
            <p className="text-xl mb-8">
              Sculpt, define, and contour your features. Book Rolora Sculpt today.
            </p>
            <BookingButton 
              size="lg"
              className="w-full px-12 py-7 text-base uppercase font-black tracking-widest rounded-none"
            >
              Book Rolora Sculpt
            </BookingButton>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default RoloraSculpt;

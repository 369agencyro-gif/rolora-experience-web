import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import massageImage from "@/assets/service-massage.jpg";
import Contact from "@/components/Contact";

const RoloraSculpt = () => {
  return (
    <ServiceLayout>
      <section className="py-20 md:py-32">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <span className="text-6xl mb-4 block">💎</span>
              <h1 className="text-4xl md:text-6xl font-display font-semibold mb-4">
                Rolora Sculpt
              </h1>
              <p className="text-2xl md:text-3xl text-accent font-medium mb-6">$205</p>
              <p className="text-xl text-foreground italic mb-8">
                Get snatched by Rolora.
              </p>
            </div>

            <div className="mb-12 animate-fade-in rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={massageImage} 
                alt="Rolora Sculpt treatment"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12 animate-fade-in">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-4">The Experience</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A lifting and contouring facial designed to sculpt, define, and depuff.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Using lymphatic drainage, gua sha, cryo sculpting and a stem cells infused serum, this ritual enhances definition and awakens natural facial contours.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold mb-4">What to Expect</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Lymphatic drainage massage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Gua sha facial contouring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Cryo sculpting techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Stem cells infused serum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Defined, sculpted facial contours</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center py-8 animate-fade-in">
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

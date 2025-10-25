import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import bodyImage from "@/assets/service-body.jpg";
import Contact from "@/components/Contact";

const RoloraReset = () => {
  return (
    <ServiceLayout>
      <section className="py-20 md:py-32">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <span className="text-6xl mb-4 block">🧪</span>
              <h1 className="text-4xl md:text-6xl font-display font-semibold mb-4">
                Rolora Reset
              </h1>
              <p className="text-xl text-muted-foreground mb-4">(Chemical Peel)</p>
              <p className="text-2xl md:text-3xl text-accent font-medium mb-6">$245</p>
              <p className="text-xl text-foreground italic mb-8">
                Peel. Reveal. Reset.
              </p>
            </div>

            <div className="mb-12 animate-fade-in rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={bodyImage} 
                alt="Rolora Reset chemical peel treatment"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12 animate-fade-in">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-4">The Experience</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A luxury chemical peel facial that resurfaces texture, refines tone, and reveals clear, radiant skin.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Perfect for dullness, discoloration, and uneven texture with low-downtime.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold mb-4">What to Expect</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Professional chemical peel application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Texture resurfacing and refinement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Tone correction and brightening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Low-downtime recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Clear, radiant complexion</span>
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
                Book Rolora Reset
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default RoloraReset;

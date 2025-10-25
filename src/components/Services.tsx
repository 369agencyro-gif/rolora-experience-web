import facialImage from "@/assets/service-facial.jpg";
import massageImage from "@/assets/service-massage.jpg";
import bodyImage from "@/assets/service-body.jpg";

const mainFacials = [
  {
    icon: "✨",
    title: "ROLORA FACIAL GLOW™",
    price: "$235",
    tagline: "Your signature glow, defined by Rolora.",
    description: "A couture signature treatment blending dermaplaning, microdermabrasion, and tailored modalities for glowing skin. This ritual refines texture, boosts luminosity, and deeply hydrates for a glass-skin finish that defines the Rolora experience.",
  },
  {
    icon: "💎",
    title: "ROLORA SCULPT",
    price: "$205",
    tagline: "Get snatched by Rolora.",
    description: "A lifting and contouring facial designed to sculpt, define, and depuff. Using lymphatic drainage, gua sha, cryo sculpting and a stem cells infused serum, this ritual enhances definition and awakens natural facial contours.",
  },
  {
    icon: "🪄",
    title: "TIMELESS LIFT",
    price: "$245",
    tagline: "Lift. Firm. Defy time.",
    description: "A rejuvenating facial designed to restore elasticity, firm, and smooth the skin using advanced ultrasound, peptide infusion, and cryo lifting. Ideal for those seeking an age-defying, lifted complexion.",
  },
  {
    icon: "🧪",
    title: "ROLORA RESET (Chemical Peel)",
    price: "$245",
    tagline: "Peel. Reveal. Reset.",
    description: "A luxury chemical peel facial that resurfaces texture, refines tone, and reveals clear, radiant skin. Perfect for dullness, discoloration, and uneven texture with low-downtime.",
  },
  {
    icon: "⚡",
    title: "EXPRESS SCULPT",
    price: "$145",
    tagline: "Glow + go.",
    description: "A targeted mini facial that refreshes, hydrates, and contours in under 40 minutes. Perfect pre-event or as a midweek pick-me-up.",
  },
];

const enhancements = {
  tier1: [
    { name: "Red Light Therapy", tagline: "Calm. Collagen. Glow.", description: "Boosts collagen, calms inflammation, and enhances radiance." },
    { name: "Extractions", description: "Deep pore cleansing to detoxify and clarify congested skin." },
  ],
  tier2: [
    { name: "Dermaplaning", description: "Refines texture and removes peach fuzz for a smooth, glassy finish." },
    { name: "Oxygen Boost", description: "Brightens and refreshes dull, tired skin." },
    { name: "Microdermabrasion", description: "Gently polishes and smooths for instant luminosity." },
    { name: "PureLift Sculpt", description: "Targets facial contours with lifting stimulation for a snatched finish." },
    { name: "Neck Lifting", description: "Targeted RF / sculpting massage to define and firm the neck jawline and décolletage." },
  ],
  tier3: [
    { name: "Hydra Infusion", description: "Deep hydration infusion that plumps and restores moisture balance." },
    { name: "Radiance Peel", description: "Refines texture and reveals brighter, more even skin tone." },
    { name: "Firming Lift (RF or Ultrasound)", description: "Tightens and firms for lifted, youthful contours." },
  ],
};

const bodyRolling = [
  { name: "First-Time Roll", price: "$40", duration: "40 min" },
  { name: "Single Roll", price: "$80", duration: "40 min" },
  { name: "5-Pack", price: "$375" },
  { name: "10-Pack", price: "$700" },
  { name: "Monthly Membership", price: "$399" },
  { name: "Express Roll", price: "$27", duration: "15 min" },
  { name: "Express 10-Pack", price: "$235" },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            Rolora Treatment Menu
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each service is an invitation to pause, breathe, and reconnect with your essence. 
            Discover treatments designed not just for results, but for transformation.
          </p>
        </div>

        {/* Main Facials */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {mainFacials.map((service, index) => (
              <div 
                key={index}
                className="animate-fade-in rounded-2xl p-8 bg-card shadow-soft hover:shadow-elegant transition-elegant border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-display font-semibold">
                        {service.title}
                      </h3>
                      <span className="text-accent font-semibold text-lg whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground mb-3 italic">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhancements */}
        <div className="max-w-6xl mx-auto mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-semibold mb-4">
              💫 Rolora Enhancements
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Elevate your facial ritual with targeted boosters designed to enhance results, refine texture, and perfect your glow.
            </p>
            <p className="text-sm text-accent font-medium mt-3">
              ✨ Most clients add 1–2 enhancements for a truly customized Rolora finish.
            </p>
          </div>

          <div className="space-y-8">
            {/* $50 Tier */}
            <div className="rounded-2xl p-8 bg-secondary/30 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-display font-semibold text-accent">$50</span>
                <div className="h-px flex-1 bg-border"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {enhancements.tier1.map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold mb-1">{item.name}</h4>
                    {item.tagline && <p className="text-sm italic text-foreground mb-1">{item.tagline}</p>}
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* $60 Tier */}
            <div className="rounded-2xl p-8 bg-secondary/30 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-display font-semibold text-accent">$60</span>
                <div className="h-px flex-1 bg-border"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {enhancements.tier2.map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold mb-1">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* $100 Tier */}
            <div className="rounded-2xl p-8 bg-secondary/30 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-display font-semibold text-accent">$100</span>
                <div className="h-px flex-1 bg-border"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {enhancements.tier3.map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold mb-1">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Body Rolling */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-semibold mb-4">
              🌀 Rolora Flow™ (Body Rolling)
            </h3>
            <p className="text-lg font-medium text-foreground mb-3 italic">
              Detox. Sculpt. Energize.
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover the power of sculpting lymphatic massage with advanced rolling technology paired with built-in red light therapy. 
              This full-body ritual stimulates circulation, promotes lymphatic drainage, and reduces water retention — leaving you feeling lighter, sculpted, and renewed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {bodyRolling.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:shadow-soft transition-smooth"
              >
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  {item.duration && <p className="text-sm text-muted-foreground">{item.duration}</p>}
                </div>
                <span className="text-accent font-semibold text-lg">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Experience */}
        <div className="max-w-4xl mx-auto text-center animate-fade-in rounded-2xl p-10 bg-gradient-to-br from-secondary/40 to-accent/10 border border-accent/20">
          <h3 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            🪞 Rolora Signature Experience
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
            ROLORA treatments are crafted to sculpt, illuminate, and refine. 
            Start with your signature facial, layer on targeted Intensifiers, or pair with body rolling for a full-face-and-body ritual.
          </p>
          <p className="text-lg font-medium text-accent italic">
            ✨ Luxury is in the details. Glow is the signature.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

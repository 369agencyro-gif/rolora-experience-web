import { useState } from "react";
import { Link } from "react-router-dom";
import categoryFacial from "@/assets/category-facial.jpg";
import categoryPremium from "@/assets/category-premium.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceBody from "@/assets/service-body.jpg";

const TreatmentExplorer = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const treatments = [
    "CRYO GLOBES",
    "FACIAL FORM",
    "ENZYME EXFOLIATION",
    "LED LIGHT THERAPY",
    "DEEP CLEANSE",
    "SKIN ANALYSIS"
  ];

  const exploreCards = [
    {
      image: categoryFacial,
      title: "CHEMICAL PEEL",
      link: "/services/reset"
    },
    {
      image: serviceFacial,
      title: "MICRONEEDLING",
      link: "/services/timeless-lift"
    },
    {
      image: categoryPremium,
      title: "FACE FORM",
      link: "/services/sculpt"
    },
    {
      image: serviceBody,
      title: "THE MINI",
      link: "/services/express-sculpt"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        {/* Horizontal Scrolling Treatments */}
        <div className="mb-16 overflow-x-auto scrollbar-hide">
          <div className="flex gap-8 min-w-max pb-8">
            {treatments.map((treatment, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap transition-all px-6 py-3 rounded-full ${
                  idx === activeIndex
                    ? 'bg-[#d4e157] text-foreground'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                {treatment}
              </button>
            ))}
          </div>
        </div>

        {/* Explore Our Treatments */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 uppercase tracking-wide">
            EXPLORE OUR TREATMENTS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exploreCards.map((card, idx) => (
              <Link
                key={idx}
                to={card.link}
                className="group"
              >
                <div className="aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wide">
                  {card.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentExplorer;
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const announcements = [
  { text: "✨ First Glow Treatment — Only $99", link: "/special-offer" },
  { text: "🔥 Limited Spots Left This Week — Book Now", link: "/special-offer" },
  { text: "💎 Sculpt + Scalp Duo — The Ultimate Reset", link: "/glow-flow-offer" },
  { text: "⚡ Glow + Flow Combo — $139 (Save $40)", link: "/glow-flow-offer" },
  { text: "🌟 Join 110,000+ Glowing Clients", link: "/special-offer" },
];

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % announcements.length);
        setIsAnimating(false);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4 relative overflow-hidden">
      <div className="flex items-center justify-center">
        <Link 
          to={announcements[currentIndex].link}
          className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:opacity-80 ${
            isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          {announcements[currentIndex].text}
        </Link>
      </div>
      
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Close announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AnnouncementBar;

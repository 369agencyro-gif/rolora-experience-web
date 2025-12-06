
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const announcements = [
  { text: "✨ First Glow Treatment — $99 (Save $136)", link: "/special-offer" },
  { text: "🔥 Limited Spots Left This Week — Book Now", link: "/special-offer" },
  { text: "💎 Sculpt + Scalp Duo — The Ultimate Reset", link: "/glow-flow-offer" },
  { text: "⚡ Glow + Flow Combo — $139 (Save $176)", link: "/glow-flow-offer" },
  { text: "🌟 Join 110,000+ Glowing Clients", link: "/special-offer" },
];

const AnnouncementBar = () => {
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

  return (
    <div className="bg-[#3B2414] text-white py-2.5 px-4 overflow-hidden">
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
    </div>
  );
};

export default AnnouncementBar;

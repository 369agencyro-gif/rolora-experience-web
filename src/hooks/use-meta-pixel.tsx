import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

const hasConsentedToCookies = (): boolean => {
  const consent = localStorage.getItem("cookie-consent");
  return consent === "accepted";
};

export const useMetaPixel = () => {
  const location = useLocation();

  useEffect(() => {
    // Only track if user has accepted cookies
    if (hasConsentedToCookies() && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [location.pathname]);
};

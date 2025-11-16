import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes, useEffect } from "react";

interface BookingButtonProps extends Omit<ButtonHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'> {
  variant?: "default" | "cta" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
}

const BookingButton = ({ children, variant = "cta", size = "lg", className = "", ...props }: BookingButtonProps) => {
  useEffect(() => {
    // Load Acuity Scheduling button styles
    const linkElement = document.getElementById('acuity-button-styles');
    if (!linkElement) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://embed.acuityscheduling.com/embed/button/37484528.css';
      link.id = 'acuity-button-styles';
      document.head.appendChild(link);
    }

    // Load Acuity Scheduling button script
    const scriptElement = document.querySelector('script[src="https://embed.acuityscheduling.com/embed/button/37484528.js"]');
    if (!scriptElement) {
      const script = document.createElement('script');
      script.src = 'https://embed.acuityscheduling.com/embed/button/37484528.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <a
      href="https://app.acuityscheduling.com/schedule.php?owner=37484528&ref=booking_button"
      target="_blank"
      rel="noopener noreferrer"
      className={`acuity-embed-button inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 ${
        variant === "cta" ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-[1.02]" :
        variant === "outline" ? "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground" :
        variant === "secondary" ? "bg-primary/90 text-primary-foreground hover:bg-primary" :
        variant === "ghost" ? "hover:bg-primary/10 hover:text-primary" :
        variant === "link" ? "text-primary underline-offset-4 hover:underline" :
        "bg-primary text-primary-foreground hover:bg-primary/80 shadow-sm hover:shadow-md"
      } ${
        size === "lg" ? "h-14 px-10 py-4 text-base" :
        size === "sm" ? "h-10 px-4 py-2" :
        size === "icon" ? "h-12 w-12" :
        "h-12 px-6 py-3"
      } ${className}`}
      style={{ 
        textDecoration: 'none', 
        display: 'inline-flex',
        background: 'hsl(var(--primary))',
        color: 'hsl(var(--primary-foreground))',
        border: '0px',
        borderRadius: '0rem'
      }}
      {...props}
    >
      {children}
    </a>
  );
};

export default BookingButton;

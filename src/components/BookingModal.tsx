import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useEffect } from "react";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  useEffect(() => {
    // Load Acuity Scheduling script
    const script = document.createElement('script');
    script.src = 'https://embed.acuityscheduling.com/js/embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] p-0 overflow-hidden">
        <DialogTitle className="sr-only">Schedule Your Appointment</DialogTitle>
        <iframe
          src="https://app.acuityscheduling.com/schedule.php?owner=37484528&ref=embedded_csp"
          title="Schedule Appointment"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="payment"
          className="w-full h-full"
        />
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;

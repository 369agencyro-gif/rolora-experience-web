import { useState, useEffect } from 'react';

interface CountdownTime {
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

const COUNTDOWN_DURATIONS = [
  { hours: 4, minutes: 19 },
  { hours: 6, minutes: 40 },
  { hours: 3, minutes: 25 },
  { hours: 5, minutes: 15 }
];

export const useCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  const getNextDuration = () => {
    const currentIndex = parseInt(localStorage.getItem('offerTimerIndex') || '0');
    const nextIndex = (currentIndex + 1) % COUNTDOWN_DURATIONS.length;
    localStorage.setItem('offerTimerIndex', nextIndex.toString());
    return COUNTDOWN_DURATIONS[nextIndex];
  };

  const initializeTimer = () => {
    const savedExpiration = localStorage.getItem('offerExpiration');
    const now = Date.now();

    if (savedExpiration && parseInt(savedExpiration) > now) {
      // Use existing timer
      return parseInt(savedExpiration);
    } else {
      // Create new timer
      const duration = getNextDuration();
      const expirationTime = now + (duration.hours * 3600000) + (duration.minutes * 60000);
      localStorage.setItem('offerExpiration', expirationTime.toString());
      return expirationTime;
    }
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const expirationTime = initializeTimer();
      const now = Date.now();
      const difference = expirationTime - now;

      if (difference <= 0) {
        // Timer expired, create new one
        const duration = getNextDuration();
        const newExpiration = Date.now() + (duration.hours * 3600000) + (duration.minutes * 60000);
        localStorage.setItem('offerExpiration', newExpiration.toString());
        
        setTimeLeft({
          hours: duration.hours,
          minutes: duration.minutes,
          seconds: 0,
          isExpired: false
        });
      } else {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          hours,
          minutes,
          seconds,
          isExpired: false
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
};

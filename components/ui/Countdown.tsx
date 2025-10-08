'use client';

import { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: Date;
  title?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ targetDate, title = 'Time Remaining' }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, mounted]);

  if (!mounted || !timeLeft) {
    return (
      <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-lg p-6 border border-green-700/50">
        <h2 className="text-2xl font-bold text-center text-white mb-6">{title}</h2>
        <div className="grid grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">--</div>
              <div className="text-sm text-gray-400">Loading</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-lg p-6 border border-green-700/50">
      <h2 className="text-2xl font-bold text-center text-white mb-6">{title}</h2>

      {isExpired ? (
        <div className="text-center">
          <p className="text-2xl font-bold text-red-400">Event Ended</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
              {timeLeft.days}
            </div>
            <div className="text-sm text-gray-400">Days</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-sm text-gray-400">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-sm text-gray-400">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-sm text-gray-400">Seconds</div>
          </div>
        </div>
      )}
    </div>
  );
}

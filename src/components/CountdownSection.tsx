import React, { useState, useEffect } from 'react';

const WEDDING_DATE = '2027-02-05T00:00:00+07:00';

interface TimeRemaining {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isPast: boolean;
}

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: '--',
    hours: '--',
    minutes: '--',
    seconds: '--',
    isPast: false,
  });

  useEffect(() => {
    const target = new Date(WEDDING_DATE).getTime();

    const calculate = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
          isPast: true,
        });
        return;
      }

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(d).padStart(2, '0'),
        hours: String(h).padStart(2, '0'),
        minutes: String(m).padStart(2, '0'),
        seconds: String(s).padStart(2, '0'),
        isPast: false,
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown" id="countdown" aria-labelledby="countdownHeading">
      <div className="wrap">
        <p className="section-label">Counting down to forever</p>
        <h2 className="section-h" id="countdownHeading">
          រាប់ថយក្រោយដល់ថ្ងៃមង្គលការ
        </h2>

        <div className="count-grid" role="timer" aria-live="off">
          <div className="count-item">
            <strong id="days">{timeLeft.days}</strong>
            <span>ថ្ងៃ</span>
          </div>
          <div className="count-item">
            <strong id="hours">{timeLeft.hours}</strong>
            <span>ម៉ោង</span>
          </div>
          <div className="count-item">
            <strong id="minutes">{timeLeft.minutes}</strong>
            <span>នាទី</span>
          </div>
          <div className="count-item">
            <strong id="seconds">{timeLeft.seconds}</strong>
            <span>វិនាទី</span>
          </div>
        </div>

        {timeLeft.isPast && (
          <p
            id="countdownStatus"
            style={{ fontSize: '13px', color: '#796f58', marginTop: '19px' }}
          >
            ថ្ងៃដ៏រីករាយរបស់យើងបានមកដល់ហើយ! ♥
          </p>
        )}
      </div>
    </section>
  );
};

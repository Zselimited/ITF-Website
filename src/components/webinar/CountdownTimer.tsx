"use client";

import { useEffect, useState } from "react";
import { BOOTCAMP_START_ISO } from "@/lib/site-data";

function getTimeLeft() {
  const diff = new Date(BOOTCAMP_START_ISO).getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
    done: diff <= 0,
  };
}

export default function CountdownTimer() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units: { label: string; value: number }[] = time
    ? [
        { label: "Days", value: time.days },
        { label: "Hours", value: time.hours },
        { label: "Minutes", value: time.minutes },
        { label: "Seconds", value: time.seconds },
      ]
    : [
        { label: "Days", value: 0 },
        { label: "Hours", value: 0 },
        { label: "Minutes", value: 0 },
        { label: "Seconds", value: 0 },
      ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4" role="timer" aria-live="polite">
      {units.map((u) => (
        <div
          key={u.label}
          className="flex w-16 flex-col items-center rounded-2xl border border-cream/15 bg-cream/5 py-3 sm:w-20"
        >
          <span className="font-display text-2xl font-semibold text-cream sm:text-3xl tabular-nums">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-widest text-cream/50">{u.label}</span>
        </div>
      ))}
    </div>
  );
}

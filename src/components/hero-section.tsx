"use client";

import { useEffect, useState } from "react";
import { Sparkles, Code2 } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set competition date to January 26, 2026
    const targetDate = new Date("2026-01-26T09:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-60 bg-linear-to-br from-[#000000] via-[#050d14] to-[#000000]" />
        <div className="absolute inset-0 opacity-30 animate-gradient bg-size-[400%_400%] bg-linear-to-br from-[#7DD4E8]/25 via-[#2A7A8C]/25 to-[#FFFFFF]/15" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#2A7A8C]/20 via-transparent to-transparent animate-pulse-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Main Logo/Title */}
        <div className="relative mt-8 mb-6">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
            <span className="text-iridescent">DATATHON</span>
          </h1>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-linear-to-r from-transparent via-[#7DD4E8] to-transparent opacity-60" />
        </div>

        {/* Subtitle */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          BY <span className="text-iridescent">VINTELLIGENCE</span>
        </h2>

        <p className="text-lg sm:text-xl text-[#D1DEE5] max-w-2xl mx-auto mb-8">
          Biến dữ liệu thực thành insights đột phá. Cuộc thi phân tích dữ liệu{" "}
          <span className="text-[#7DD4E8]">hàng đầu</span> tại{" "}
          <span className="text-[#FFFFFF]">VinUniversity</span>.
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-xl mx-auto mb-8">
          {[
            { value: timeLeft.days, label: "Ngày" },
            { value: timeLeft.hours, label: "Giờ" },
            { value: timeLeft.minutes, label: "Phút" },
            { value: timeLeft.seconds, label: "Giây" },
          ].map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-[#7DD4E8]/25 to-[#2A7A8C]/25 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-3 sm:p-6">
                <div className="text-3xl sm:text-5xl md:text-6xl font-mono font-bold text-white mb-1">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-xs sm:text-sm text-[#D1DEE5] uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Analysis Track Button - uses Soft Cyan */}
          <button className="group relative px-8 py-4 rounded-full border border-[#7DD4E8]/50 bg-transparent hover:border-[#7DD4E8] hover:shadow-[0_0_30px_rgba(125,212,232,0.5)] transition-all duration-300 w-full sm:w-auto">
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="w-5 h-5 text-[#7DD4E8] group-hover:animate-pulse" />
              <span className="text-lg font-semibold text-white">
                ANALYSIS TRACK
              </span>
            </div>
            <span className="block text-xs text-[#D1DEE5] mt-1">
              Insights & Visualization
            </span>
          </button>

          {/* Modelling Track Button - uses Pure White */}
          <button className="group relative px-8 py-4 rounded-full border border-[#FFFFFF]/50 bg-transparent hover:border-[#FFFFFF] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 w-full sm:w-auto">
            <div className="flex items-center justify-center gap-3">
              <Code2 className="w-5 h-5 text-[#FFFFFF] group-hover:animate-pulse" />
              <span className="text-lg font-semibold text-white">
                MODELLING TRACK
              </span>
            </div>
            <span className="block text-xs text-[#D1DEE5] mt-1">
              ML/AI & Technical
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

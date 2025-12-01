"use client";

import { Trophy, Medal, Award, Gift, Gem, Crown } from "lucide-react";

const prizes = [
  {
    position: "2nd",
    title: "Á Quân",
    amount: "50,000,000",
    currency: "VNĐ",
    icon: Medal,
    color: "from-slate-300 to-slate-500",
    glowColor: "rgba(148, 163, 184, 0.4)",
    benefits: ["Huy chương bạc", "Giấy chứng nhận"],
    isMain: false,
  },
  {
    position: "1st",
    title: "Quán Quân",
    amount: "100,000,000",
    currency: "VNĐ",
    icon: Crown,
    color: "from-yellow-400 to-amber-600",
    glowColor: "rgba(251, 191, 36, 0.4)",
    benefits: ["Cúp vàng", "Giấy chứng nhận", "Cơ hội thực tập"],
    isMain: true,
  },
  {
    position: "3rd",
    title: "Hạng Ba",
    amount: "30,000,000",
    currency: "VNĐ",
    icon: Award,
    color: "from-amber-600 to-amber-800",
    glowColor: "rgba(217, 119, 6, 0.4)",
    benefits: ["Huy chương đồng", "Giấy chứng nhận"],
    isMain: false,
  },
];

const specialPrizes = [
  {
    title: "Best Innovation",
    amount: "10,000,000",
    icon: Gem,
    description: "Giải pháp sáng tạo nhất",
    track: "dreamer",
  },
  {
    title: "Best Technical",
    amount: "10,000,000",
    icon: Trophy,
    description: "Kỹ thuật xuất sắc nhất",
    track: "builder",
  },
  {
    title: "People's Choice",
    amount: "5,000,000",
    icon: Gift,
    description: "Bình chọn yêu thích nhất",
    track: "both",
  },
];

export function PrizesSection() {
  return (
    <section id="prizes" className="relative py-32 px-4">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#2A7A8C]/15 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7DD4E8]/15 border border-[#7DD4E8]/25 text-[#7DD4E8] text-sm font-medium mb-4">
            Giải thưởng
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            TỔNG GIÁ TRỊ <span className="text-iridescent">200 TRIỆU</span>
          </h2>
          <p className="text-lg text-[#D1DEE5] max-w-2xl mx-auto">
            Cùng với nhiều cơ hội kết nối, học hỏi và phát triển sự nghiệp
          </p>
        </div>

        {/* Main Prizes - keeping existing code */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {prizes.map((prize, index) => {
            const Icon = prize.icon;
            return (
              <div
                key={index}
                className={`relative group ${prize.isMain ? "md:-mt-8" : ""}`}
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ backgroundColor: prize.glowColor }}
                />

                {/* Card */}
                <div className="relative h-full bg-white/3 backdrop-blur-sm border border-white/20 rounded-3xl p-8 overflow-hidden group-hover:border-white/30 transition-all duration-500">
                  {/* Position badge */}
                  <div
                    className={`absolute top-0 right-0 px-6 py-2 rounded-bl-2xl bg-linear-to-r ${prize.color}`}
                  >
                    <span className="text-sm font-bold text-white">
                      {prize.position}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-20 h-20 rounded-2xl bg-linear-to-br ${prize.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {prize.title}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl font-black text-iridescent">
                      {prize.amount}
                    </span>
                    <span className="text-lg text-[#D1DEE5] ml-2">
                      {prize.currency}
                    </span>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-2">
                    {prize.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-[#D1DEE5]"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${prize.color}`}
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {specialPrizes.map((prize, index) => {
            const Icon = prize.icon;
            const trackColors = {
              dreamer: {
                bg: "rgba(125, 212, 232, 0.08)",
                border: "#7DD4E8",
                text: "#7DD4E8",
              },
              builder: {
                bg: "rgba(255, 255, 255, 0.05)",
                border: "#FFFFFF",
                text: "#FFFFFF",
              },
              both: {
                bg: "rgba(42, 122, 140, 0.15)",
                border: "#2A7A8C",
                text: "#7DD4E8",
              },
            };
            const colors = trackColors[prize.track as keyof typeof trackColors];

            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: colors.bg,
                  border: `1px solid ${colors.border}30`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${colors.border}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: colors.text }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{prize.title}</h4>
                    <p className="text-sm text-[#D1DEE5] mb-2">
                      {prize.description}
                    </p>
                    <span
                      className="text-xl font-bold"
                      style={{ color: colors.text }}
                    >
                      {prize.amount} VNĐ
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

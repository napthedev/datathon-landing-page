"use client";

import { Rocket, Flame, Zap, Trophy, Flag } from "lucide-react";

const stages = [
  {
    id: 1,
    title: "Đăng ký",
    subtitle: "Kick-off & Registration",
    date: "22/12/2025 - 26/01/2026",
    description:
      "Mở đơn đăng ký, promotion trên social media. Đội gồm 3 thành viên.",
    icon: Flag,
    status: "active",
  },
  {
    id: 2,
    title: "Round 1",
    subtitle: "Qualification Round",
    date: "26/01 - 27/02/2026",
    description:
      "Nhận đề bài Round 1, hoàn thành bài thi và nộp trước deadline.",
    icon: Flame,
    status: "upcoming",
  },
  {
    id: 3,
    title: "Round 2",
    subtitle: "Final Challenge",
    date: "09/03 - 15/03/2026",
    description:
      "Các đội vượt qua Round 1 nhận đề bài Round 2, chuẩn bị thuyết trình.",
    icon: Zap,
    status: "upcoming",
  },
  {
    id: 4,
    title: "D-Day",
    subtitle: "Final Presentation",
    date: "15/03/2026",
    description:
      "Thuyết trình trực tiếp tại VinUniversity trước Hội đồng Giám khảo.",
    icon: Trophy,
    status: "upcoming",
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M25 0 L25 25 L50 25"
              fill="none"
              stroke="#2A7A8C"
              strokeWidth="0.5"
            />
            <path
              d="M0 25 L25 25 L25 50"
              fill="none"
              stroke="#7DD4E8"
              strokeWidth="0.5"
            />
            <circle cx="25" cy="25" r="2" fill="#FFFFFF" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7DD4E8]/15 border border-[#7DD4E8]/25 text-[#7DD4E8] text-sm font-medium mb-4">
            Lộ trình
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            HÀNH TRÌNH <span className="text-iridescent">CHINH PHỤC</span>
          </h2>
          <p className="text-lg text-[#D1DEE5] max-w-2xl mx-auto">
            4 giai đoạn - Từ ý tưởng đến vinh quang
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <div className="absolute inset-0 bg-linear-to-b from-[#7DD4E8] via-[#2A7A8C] to-[#FFFFFF]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#7DD4E8] animate-pulse shadow-[0_0_20px_rgba(125,212,232,0.8)]" />
          </div>

          {/* Mobile line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5">
            <div className="absolute inset-0 bg-linear-to-b from-[#7DD4E8] via-[#2A7A8C] to-[#FFFFFF]" />
          </div>

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-0">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={stage.id}
                  className={`relative md:flex md:items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`md:w-1/2 ${
                      isLeft ? "md:pr-16" : "md:pl-16"
                    } pl-20 md:pl-0`}
                  >
                    <div
                      className={`group relative p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1 ${
                        stage.status === "active"
                          ? "bg-linear-to-br from-[#7DD4E8]/15 to-[#2A7A8C]/15 border border-[#7DD4E8]/40"
                          : stage.status === "completed"
                          ? "bg-[#2A7A8C]/15 border border-[#2A7A8C]/40"
                          : "bg-white/2 border border-white/20 hover:border-white/30"
                      }`}
                    >
                      {/* Live badge */}
                      {stage.status === "active" && (
                        <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-[#7DD4E8] text-[#000000] text-xs font-bold flex items-center gap-1.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#000000] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#000000]"></span>
                          </span>
                          LIVE NOW
                        </div>
                      )}

                      <div className="flex items-start gap-4">
                        <div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                            stage.status === "active"
                              ? "bg-[#7DD4E8]/25"
                              : stage.status === "completed"
                              ? "bg-[#2A7A8C]/25"
                              : "bg-white/5"
                          }`}
                        >
                          <Icon
                            className={`w-7 h-7 ${
                              stage.status === "active"
                                ? "text-[#7DD4E8]"
                                : stage.status === "completed"
                                ? "text-[#2A7A8C]"
                                : "text-[#94A3B8]"
                            }`}
                          />
                        </div>
                        <div>
                          <div className="text-sm text-[#D1DEE5] mb-1">
                            {stage.date}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {stage.title}
                          </h3>
                          <div className="text-sm text-[#7DD4E8] mb-2">
                            {stage.subtitle}
                          </div>
                          <p className="text-[#D1DEE5]">{stage.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot - Desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full items-center justify-center z-10">
                    <div
                      className={`w-full h-full rounded-full border-2 ${
                        stage.status === "active"
                          ? "border-[#7DD4E8] bg-[#7DD4E8]/25 shadow-[0_0_15px_rgba(125,212,232,0.7)]"
                          : stage.status === "completed"
                          ? "border-[#2A7A8C] bg-[#2A7A8C]"
                          : "border-[#94A3B8]/50 bg-[#000000]"
                      }`}
                    />
                  </div>

                  {/* Side dot - Mobile */}
                  <div className="md:hidden absolute left-[26px] top-8 w-5 h-5 rounded-full flex items-center justify-center z-10">
                    <div
                      className={`w-full h-full rounded-full border-2 ${
                        stage.status === "active"
                          ? "border-[#7DD4E8] bg-[#7DD4E8]/25 shadow-[0_0_15px_rgba(125,212,232,0.7)]"
                          : stage.status === "completed"
                          ? "border-[#2A7A8C] bg-[#2A7A8C]"
                          : "border-[#94A3B8]/50 bg-[#000000]"
                      }`}
                    />
                  </div>

                  {/* Empty space for other side - Desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -bottom-4 w-10 h-10 rounded-full items-center justify-center bg-linear-to-br from-[#7DD4E8] via-[#2A7A8C] to-[#FFFFFF]">
            <Rocket className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}

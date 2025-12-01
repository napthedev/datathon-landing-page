"use client";

import { Building2, Users, Target, Rocket } from "lucide-react";
import Image from "next/image";

const sponsors = [
  { name: "VNPT", logo: "/vnpt-logo-blue-telecom.jpg" },
  { name: "Amdocs", logo: "/amdocs-logo-tech-company.jpg" },
  { name: "NVIDIA", logo: "/nvidia-logo-green.jpg" },
  { name: "VinAI", logo: "/vinai-logo-artificial-intelligence.jpg" },
  { name: "FPT", logo: "/fpt-corporation-logo-orange.jpg" },
  { name: "Viettel", logo: "/viettel-logo-red-telecom.jpg" },
];

const stats = [
  { value: "200+", label: "Thí sinh", icon: Users },
  { value: "50%+", label: "VinUni", icon: Target },
  { value: "200", label: "Khán giả D-Day", icon: Rocket },
  { value: "2", label: "Vòng thi", icon: Building2 },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-4">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7DD4E8]/15 border border-[#7DD4E8]/25 text-[#7DD4E8] text-sm font-medium mb-4">
            Về chúng tôi
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            SỨ MỆNH <span className="text-iridescent">DATATHON</span>
          </h2>
        </div>

        {/* About content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Text */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-[#7DD4E8] via-[#2A7A8C] to-[#FFFFFF] rounded-full" />
              <div className="pl-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Biến dữ liệu thành giá trị thực
                </h3>
                <p className="text-[#D1DEE5] leading-relaxed mb-4">
                  Datathon là cuộc thi phân tích dữ liệu do VinTelligence -
                  VinUni Data Science Hub tổ chức, thách thức sinh viên biến dữ
                  liệu kinh doanh thực thành insights có ý nghĩa thông qua
                  exploratory analysis, visualization, modelling và
                  storytelling.
                </p>
                <p className="text-[#D1DEE5] leading-relaxed">
                  Datathon 2026 mô phỏng môi trường giải quyết vấn đề thực tế,
                  giúp sinh viên củng cố kỹ năng kỹ thuật, phân tích và hiểu sâu
                  về cách dữ liệu định hướng quyết định kinh doanh hiện đại.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/3 border border-white/20 hover:border-white/35 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#7DD4E8]/15 via-transparent to-[#2A7A8C]/15 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <Icon className="w-8 h-8 text-[#7DD4E8] mb-4" />
                    <div className="text-4xl font-black text-iridescent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[#D1DEE5]">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mb-20">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-[#2A7A8C]/40 to-[#7DD4E8]/25 blur-3xl opacity-40" />
          <div className="relative p-8 md:p-12 rounded-3xl bg-white/3 border border-white/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="VinTelligence Logo"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  VinTelligence - VinUni Data Science Hub
                </h3>
                <p className="text-[#D1DEE5] leading-relaxed">
                  VinTelligence là câu lạc bộ do sinh viên thành lập, đam mê
                  Data Science và AI tại VinUniversity. Phù hợp với Nghị quyết
                  57 của Việt Nam về đột phá khoa học công nghệ và chuyển đổi số
                  quốc gia, sứ mệnh của CLB là xây dựng cộng đồng DS/AI vững
                  mạnh trong trường đại học để cạnh tranh với các cộng đồng khác
                  và đóng góp nguồn nhân lực cho sự phát triển quốc gia.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsors */}
        <div>
          <h3 className="text-center text-xl font-bold text-white mb-8">
            Đồng hành cùng chúng tôi
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group relative h-24 rounded-xl bg-white/3 border border-white/20 flex items-center justify-center p-4 hover:border-white/35 transition-all duration-300"
              >
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

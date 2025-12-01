"use client";

import {
  Users,
  Calendar,
  FileCheck,
  AlertCircle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const eligibility = [
  { text: "Sinh viên CBM/CECS VinUniversity", allowed: true },
  { text: "Sinh viên các trường đại học tại Việt Nam", allowed: true },
  { text: "Đội gồm 3 thành viên", allowed: true },
  { text: "Đam mê AI và Data Science", allowed: true },
  { text: "Nhân viên công ty tổ chức", allowed: false },
  { text: "Thành viên BGK và BTC", allowed: false },
];

const requirements = [
  {
    icon: Users,
    title: "Đội thi",
    description: "3 thành viên/đội, đăng ký qua form chính thức",
  },
  {
    icon: Calendar,
    title: "Thời gian",
    description: "Đăng ký từ 22/12/2025 - 26/01/2026",
  },
  {
    icon: FileCheck,
    title: "Vòng loại",
    description: "Hoàn thành bài thi Round 1 để vào vòng thuyết trình",
  },
  {
    icon: AlertCircle,
    title: "Cam kết",
    description: "Tuân thủ quy định về bản quyền và đạo đức",
  },
];

export function RulesSection() {
  return (
    <section id="rules" className="relative py-32 px-4">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2A7A8C]/25 border border-[#2A7A8C]/40 text-[#7DD4E8] text-sm font-medium mb-4">
            Thể lệ
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            THAM GIA <span className="text-iridescent">NHƯ THẾ NÀO?</span>
          </h2>
          <p className="text-lg text-[#D1DEE5] max-w-2xl mx-auto">
            Điều kiện và yêu cầu để tham gia cuộc thi Datathon 2026
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-[#7DD4E8]/25 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity" />
            <div className="relative h-full bg-white/3 backdrop-blur-sm border border-white/20 rounded-3xl p-8 group-hover:border-[#7DD4E8]/40 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#7DD4E8]/25 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#7DD4E8]" />
                </div>
                Điều kiện tham gia
              </h3>

              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-4 rounded-xl transition-colors ${
                      item.allowed
                        ? "bg-[#7DD4E8]/8 border border-[#7DD4E8]/25"
                        : "bg-red-500/5 border border-red-500/20"
                    }`}
                  >
                    {item.allowed ? (
                      <CheckCircle2 className="w-5 h-5 text-[#7DD4E8] shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                    )}
                    <span
                      className={
                        item.allowed ? "text-[#FFFFFF]" : "text-red-300"
                      }
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-[#FFFFFF]/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity" />
            <div className="relative h-full bg-white/3 backdrop-blur-sm border border-white/20 rounded-3xl p-8 group-hover:border-[#FFFFFF]/30 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFFFFF]/10 flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-[#FFFFFF]" />
                </div>
                Yêu cầu bắt buộc
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {requirements.map((req, index) => {
                  const Icon = req.icon;
                  return (
                    <div
                      key={index}
                      className="p-5 rounded-xl bg-white/2 border border-white/15 hover:border-[#7DD4E8]/40 transition-colors"
                    >
                      <Icon className="w-8 h-8 text-[#7DD4E8] mb-3" />
                      <h4 className="font-semibold text-white mb-1">
                        {req.title}
                      </h4>
                      <p className="text-sm text-[#D1DEE5]">
                        {req.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-2xl bg-linear-to-r from-[#2A7A8C]/25 to-[#7DD4E8]/15 border border-[#2A7A8C]/40">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-[#7DD4E8] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-white mb-2">Lưu ý quan trọng</h4>
              <p className="text-[#D1DEE5]">
                Tất cả sản phẩm dự thi phải là nguyên bản, chưa từng tham gia
                cuộc thi nào khác. Ban tổ chức có quyền loại bỏ các đội vi phạm
                quy định mà không cần thông báo trước.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

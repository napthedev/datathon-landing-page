"use client";

import {
  Lightbulb,
  Cpu,
  Presentation,
  TrendingUp,
  Sparkles,
  Code2,
} from "lucide-react";

const dreamerCriteria = [
  {
    icon: Lightbulb,
    title: "Exploratory Analysis",
    weight: "25%",
    description: "Khám phá dữ liệu sâu sắc, tìm ra insights có giá trị",
  },
  {
    icon: TrendingUp,
    title: "Visualization",
    weight: "25%",
    description: "Trực quan hóa dữ liệu rõ ràng, dễ hiểu",
  },
  {
    icon: Presentation,
    title: "Storytelling",
    weight: "25%",
    description: "Kể chuyện bằng dữ liệu thuyết phục, logic",
  },
  {
    icon: Cpu,
    title: "Actionable Insights",
    weight: "25%",
    description: "Khuyến nghị cụ thể, khả thi cho doanh nghiệp",
  },
];

const builderCriteria = [
  {
    icon: Code2,
    title: "Modelling",
    weight: "30%",
    description: "Xây dựng model ML/AI chất lượng, độ chính xác cao",
  },
  {
    icon: Cpu,
    title: "Data Processing",
    weight: "25%",
    description: "Xử lý, làm sạch dữ liệu hiệu quả",
  },
  {
    icon: TrendingUp,
    title: "Trình bày",
    weight: "25%",
    description: "Kỹ năng thuyết trình và trả lời Q&A",
  },
  {
    icon: Lightbulb,
    title: "Business Impact",
    weight: "20%",
    description: "Giá trị thực tiễn cho quyết định kinh doanh",
  },
];

export function CriteriaSection() {
  return (
    <section id="criteria" className="relative py-32 px-4">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-linear-to-r from-[#7DD4E8]/25 to-[#FFFFFF]/15 border border-white/20 text-white text-sm font-medium mb-4">
            Tiêu chí
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            TIÊU CHÍ <span className="text-iridescent">ĐÁNH GIÁ</span>
          </h2>
          <p className="text-lg text-[#D1DEE5] max-w-2xl mx-auto">
            Đánh giá dựa trên kỹ năng phân tích, visualization và storytelling
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#7DD4E8]/40 to-transparent blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700" />

            <div
              className="relative h-full rounded-3xl overflow-hidden"
              style={{ background: "rgba(125, 212, 232, 0.04)" }}
            >
              {/* Header */}
              <div className="relative p-8 border-b border-[#7DD4E8]/25">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#7DD4E8]/25 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-[#7DD4E8]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      ANALYSIS TRACK
                    </h3>
                    <p className="text-[#7DD4E8]">Phân tích & Insights</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#7DD4E8] to-transparent" />
              </div>

              {/* Criteria list */}
              <div className="p-8 space-y-4">
                {dreamerCriteria.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/2 border border-white/15 hover:border-[#7DD4E8]/40 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#7DD4E8]/15 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-[#7DD4E8]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-white">
                            {item.title}
                          </h4>
                          <span className="text-[#7DD4E8] font-bold">
                            {item.weight}
                          </span>
                        </div>
                        <p className="text-sm text-[#D1DEE5]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#FFFFFF]/20 to-transparent blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />

            <div
              className="relative h-full rounded-3xl overflow-hidden"
              style={{ background: "rgba(255, 255, 255, 0.02)" }}
            >
              {/* Header */}
              <div className="relative p-8 border-b border-[#FFFFFF]/20">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#FFFFFF]/10 flex items-center justify-center">
                    <Code2 className="w-8 h-8 text-[#FFFFFF]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      MODELLING TRACK
                    </h3>
                    <p className="text-[#FFFFFF]/80">ML/AI & Technical</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFFFFF] to-transparent" />
              </div>

              {/* Criteria list */}
              <div className="p-8 space-y-4">
                {builderCriteria.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/2 border border-white/15 hover:border-[#FFFFFF]/30 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#FFFFFF]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-[#FFFFFF]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-white">
                            {item.title}
                          </h4>
                          <span className="text-[#FFFFFF] font-bold">
                            {item.weight}
                          </span>
                        </div>
                        <p className="text-sm text-[#D1DEE5]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

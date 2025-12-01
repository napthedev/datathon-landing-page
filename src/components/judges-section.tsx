"use client";

import { Linkedin, Twitter, Globe } from "lucide-react";

const judges = [
  {
    name: "Dr. Lê Duy Dũng",
    title: "Advisor",
    company: "VinUniversity",
    image: "/le-duy-dung.png",
    social: { linkedin: "#", website: "#" },
  },
  {
    name: "Chuyên gia VinAI",
    title: "AI Research Expert",
    company: "VinAI",
    image: "/professional-asian-man-in-suit-ai-researcher.jpg",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Chuyên gia FPT AI",
    title: "Senior Data Scientist",
    company: "FPT AI",
    image: "/asian-woman-data-scientist.png",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Chuyên gia VNPT AI",
    title: "AI Solutions Lead",
    company: "VNPT AI",
    image: "/professional-asian-professor-computer-science.jpg",
    social: { linkedin: "#", website: "#" },
  },
  {
    name: "Giảng viên CECS",
    title: "Professor",
    company: "VinUniversity CECS",
    image: "/professional-asian-woman-tech-executive.jpg",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Giảng viên CBM",
    title: "Professor",
    company: "VinUniversity CBM",
    image: "/professional-asian-man-tech-architect-nvidia.jpg",
    social: { linkedin: "#", website: "#" },
  },
];

export function JudgesSection() {
  return (
    <section id="judges" className="relative py-32 px-4">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#2A7A8C]/15 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2A7A8C]/25 border border-[#2A7A8C]/40 text-[#7DD4E8] text-sm font-medium mb-4">
            Giám khảo
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            HỘI ĐỒNG <span className="text-iridescent">CHUYÊN GIA</span>
          </h2>
          <p className="text-lg text-[#D1DEE5] max-w-2xl mx-auto">
            Chuyên gia từ VinUniversity và các đối tác hàng đầu như VinAI, FPT
            AI, VNPT AI
          </p>
        </div>

        {/* Judges grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {judges.map((judge, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#7DD4E8]/25 via-[#2A7A8C]/25 to-[#FFFFFF]/15 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative bg-white/3 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden group-hover:border-white/30 transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={judge.image || "/placeholder.svg"}
                    alt={judge.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#000000] via-[#000000]/50 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {judge.social.linkedin && (
                      <a
                        href={judge.social.linkedin}
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#2A7A8C] transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {judge.social.twitter && (
                      <a
                        href={judge.social.twitter}
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#7DD4E8] transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {judge.social.website && (
                      <a
                        href={judge.social.website}
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {judge.name}
                  </h3>
                  <p className="text-[#7DD4E8] text-sm mb-1">{judge.title}</p>
                  <p className="text-[#D1DEE5] text-sm">{judge.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

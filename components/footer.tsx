"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-4 border-t border-white/20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-[#000000] via-[#000000] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Datathon Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="text-iridescent font-bold text-xl block">
                  DATATHON
                </span>
                <span className="text-xs text-[#D1DEE5]">by VinTelligence</span>
              </div>
            </div>
            <p className="text-[#D1DEE5] text-sm leading-relaxed mb-6">
              Cuộc thi phân tích dữ liệu do VinTelligence - VinUni Data Science
              Hub tổ chức, nơi tìm kiếm và phát triển tài năng trẻ trong lĩnh
              vực Data Science và AI.
            </p>
            <div className="flex gap-3">
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/vintelligencevinuni",
                },
                { icon: Youtube, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-[#D1DEE5] hover:text-white hover:border-[#7DD4E8] hover:bg-[#7DD4E8]/25 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {[
                { name: "Giới thiệu", href: "#hero" },
                { name: "Giải thưởng", href: "#prizes" },
                { name: "Thể lệ", href: "#rules" },
                { name: "Lộ trình", href: "#timeline" },
                { name: "Tiêu chí", href: "#criteria" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#D1DEE5] hover:text-[#7DD4E8] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-6">Tài nguyên</h4>
            <ul className="space-y-3">
              {[
                { name: "FAQ", href: "#" },
                { name: "Hướng dẫn đăng ký", href: "#" },
                { name: "Tài liệu học tập", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Liên hệ", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#D1DEE5] hover:text-[#7DD4E8] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6">Liên hệ</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:24chuong.ta@vinuni.edu.vn"
                  className="flex items-start gap-3 text-[#D1DEE5] hover:text-[#7DD4E8] transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>24chuong.ta@vinuni.edu.vn</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+84354976720"
                  className="flex items-start gap-3 text-[#D1DEE5] hover:text-[#7DD4E8] transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>0354 976 720</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#D1DEE5]">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>
                    VinUniversity, Vinhomes Ocean Park, Gia Lâm, Hà Nội
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#D1DEE5]">
              © 2026 Datathon by VinTelligence - VinUniversity. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-[#D1DEE5] hover:text-white transition-colors"
              >
                Điều khoản sử dụng
              </a>
              <a
                href="#"
                className="text-[#D1DEE5] hover:text-white transition-colors"
              >
                Chính sách bảo mật
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Giới thiệu", href: "#hero" },
  { name: "Giải thưởng", href: "#prizes" },
  { name: "Thể lệ", href: "#rules" },
  { name: "Lộ trình", href: "#timeline" },
  { name: "Tiêu chí", href: "#criteria" },
  { name: "Giám khảo", href: "#judges" },
  { name: "Về chúng tôi", href: "#about" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#000000]/90 backdrop-blur-xl border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Datathon Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="text-iridescent font-bold text-xl hidden sm:block">
              DATATHON
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm text-[#D1DEE5] hover:text-[#FFFFFF] transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#2A7A8C] to-[#7DD4E8] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-unicorn px-6 py-2.5 rounded-full text-sm font-semibold text-white hover:shadow-[0_0_30px_rgba(125,212,232,0.5)] transition-all duration-300">
              Đăng ký ngay
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#D1DEE5] hover:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#000000]/95 backdrop-blur-xl border-t border-white/20">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-[#D1DEE5] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button className="w-full btn-unicorn px-6 py-3 rounded-full text-sm font-semibold text-white mt-4">
              Đăng ký ngay
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

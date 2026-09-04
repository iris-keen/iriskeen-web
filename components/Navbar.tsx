"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-6 lg:mt-5 lg:px-8 lg:py-4 ${
            scrolled
              ? "border border-black/5 bg-white/85 shadow-xl"
              : "border border-white/10 bg-white/5"
          }`}
        >
          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(true)}
            className={`order-1 flex h-10 w-10 items-center justify-center rounded-full text-2xl transition lg:hidden ${
              scrolled ? "text-[#0F3D3E]" : "text-white"
            }`}
          >
            ☰
          </button>

          {/* Language */}

          <button
            className={`order-1 hidden rounded-full border px-6 py-3 transition-all duration-300 lg:block ${
              scrolled
                ? "border-[#0F3D3E]/15 bg-white text-[#0F3D3E] hover:border-[#E8A87C] hover:text-[#E8A87C]"
                : "border-white/20 bg-white/5 text-white hover:border-[#E8A87C]/60 hover:bg-white/10 hover:text-[#E8A87C]"
            }`}
          >
            العربية
          </button>

          {/* Navigation */}

          <nav
            className={`order-2 hidden items-center gap-10 text-[17px] transition-colors duration-300 lg:flex ${
              scrolled ? "text-[#0F3D3E]" : "text-white"
            }`}
          >
            <a href="#home" className="transition hover:text-[#E8A87C]">
              الرئيسية
            </a>

            <a href="#hotels" className="transition hover:text-[#E8A87C]">
              الفنادق
            </a>

            <a href="#offers" className="transition hover:text-[#E8A87C]">
              العروض
            </a>

            <a href="#about" className="transition hover:text-[#E8A87C]">
              من نحن
            </a>

            <a href="#contact" className="transition hover:text-[#E8A87C]">
              تواصل معنا
            </a>
          </nav>

          {/* Brand */}

          <div className="order-3 flex items-center gap-2">
            <div className="text-right leading-[1.05]">
              <h1
                className={`mr-2 font-english text-lg font-normal tracking-[0.04em] transition-colors duration-300 lg:mr-3 lg:text-[1.4rem] ${
                  scrolled ? "text-[#0F3D3E]" : "text-white"
                }`}
              >
                Iris Keen
              </h1>

              <p
                className={`text-sm tracking-wide transition-colors duration-300 lg:text-[17px] ${
                  scrolled ? "text-[#0F3D3E]/70" : "text-white/70"
                }`}
              >
                بصيرتك في الاختيار
              </p>
            </div>

            <div className="relative h-10 w-10 flex-shrink-0 lg:h-14 lg:w-14">
              <Image
                src={scrolled ? "/iris-logo.png" : "/logo-white.png"}
                alt="Iris Keen"
                fill
                priority
                className="object-contain scale-125"
              />
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
import Image from "next/image";
import {
  Mail,
  MessageCircle,
  Music2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0F3D3E] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        {/* Top */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="relative mx-auto h-32 w-32">
            <Image
              src="/iris-logo.png"
              alt="Iris Keen"
              fill
              className="object-contain"
            />
          </div>

          <h2 className="mt-4 font-english text-5xl tracking-wide">
            Iris Keen
          </h2>

          <p className="mt-2 text-lg text-white/70">
            بصيرتك في الاختيار
          </p>

          <p className="mx-auto mt-7 max-w-2xl leading-9 text-white/70">
            نرافق رحلتك منذ لحظة الاختيار وحتى العودة،
            لنقدم لك أفضل الفنادق والخدمات المختارة بعناية.
          </p>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-white/10" />

        {/* Columns */}

        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">

          {/* Navigation */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-[#D4AF37]">
              استكشف
            </h3>

            <div className="space-y-4">

              <a
                href="#home"
                className="block transition-all duration-300 hover:text-[#E8A87C]"
              >
                الرئيسية
              </a>

              <a
                href="#hotels"
                className="block transition-all duration-300 hover:text-[#E8A87C]"
              >
                الفنادق
              </a>

              <a
                href="#offers"
                className="block transition-all duration-300 hover:text-[#E8A87C]"
              >
                العروض
              </a>

              <a
                href="#about"
                className="block transition-all duration-300 hover:text-[#E8A87C]"
              >
                من نحن
              </a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-[#D4AF37]">
              تواصل معنا
            </h3>

            <div className="space-y-4">

              <a
                href="https://wa.me/966590202129"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 transition-all duration-300 hover:text-[#E8A87C]"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>

              <a
                href="mailto:info@iriskeen.com"
                className="flex items-center justify-center gap-2 transition-all duration-300 hover:text-[#E8A87C]"
              >
                <Mail size={18} />
                <span>info@iriskeen.com</span>
              </a>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-[#D4AF37]">
              Social Media
            </h3>

            <div className="space-y-4">

              <a
                href="#"
                className="flex items-center justify-center gap-2 transition-all duration-300 hover:text-[#E8A87C]"
              >
                <span>📷</span>
                <span>Instagram</span>
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-2 transition-all duration-300 hover:text-[#E8A87C]"
              >
                <Music2 size={18} />
                <span>TikTok</span>
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-2 transition-all duration-300 hover:text-[#E8A87C]"
              >
                <span className="text-lg font-bold">𝕏</span>
                <span>X</span>
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-2 transition-all duration-300 hover:text-[#E8A87C]"
              >
                <span>💼</span>
                <span>LinkedIn</span>
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © 2026 Iris Keen. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
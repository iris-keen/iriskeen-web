"use client";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#ECE9E3] p-6">
          <h2 className="font-english text-2xl text-[#0F3D3E]">
            Iris Keen
          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-[#0F3D3E]"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col p-6">

          <a href="#" className="py-4 text-lg text-[#0F3D3E]">
            الرئيسية
          </a>

          <a href="#" className="py-4 text-lg text-[#0F3D3E]">
            الفنادق
          </a>

          <a href="#" className="py-4 text-lg text-[#0F3D3E]">
            العروض
          </a>

          <a href="#" className="py-4 text-lg text-[#0F3D3E]">
            من نحن
          </a>

          <a href="#" className="py-4 text-lg text-[#0F3D3E]">
            تواصل معنا
          </a>

        </nav>
      </div>
    </>
  );
}
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Desktop Background */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/hero.png"
          alt="Iris Keen Hero"
          fill
          priority
          className="-scale-x-100 object-cover"
        />
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/hero-mobile.png"
          alt="Iris Keen Hero Mobile"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F3D3E]/25" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto flex w-full max-w-7xl justify-start px-20">
          <div className="max-w-[560px] pt-32">

            <h1
              dir="rtl"
              className="text-right leading-[0.92]"
            >
              <span className="block text-[3.6rem] font-semibold tracking-tight text-[#E8A87C] [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
                رحلتك تبدأ
              </span>

              <span className="mt-4 block text-[4.8rem] font-bold tracking-[-0.04em] text-white">
                <span>من&nbsp;</span>
                <span>الاختيار&nbsp;</span>
                <span>الصحيح</span>
              </span>
            </h1>

            <p className="mt-5 text-right text-[1.35rem] leading-9 text-white/85">
              تجارب سفر مصممة بعناية
              <br />
              بأفضل الأسعار وخدمة شخصية راقية.
            </p>

            <div className="mt-6 flex gap-5">

              <a
                href="#hotels"
                className="rounded-full bg-[#E8A87C] px-10 py-4 text-lg font-semibold text-[#0F3D3E] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                ابدأ رحلتك
              </a>

              <a
                href="#hotels"
                className="rounded-full border border-white/30 bg-white/5 px-10 py-4 text-lg text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/10"
              >
                استكشف الفنادق
              </a>

            </div>

            <p className="mt-6 text-right text-sm tracking-[0.08em] text-white/60">
              بداية رحلتك تستحق تجربة استثنائية.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
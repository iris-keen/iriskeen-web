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
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#0F3D3E]/20 to-[#0F3D3E]/35" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto flex w-full max-w-7xl justify-center md:justify-start px-6 md:px-20">

          <div className="w-full max-w-[560px] pt-16 md:pt-32">

            {/* Glass Card */}
            <div className="flex justify-center md:justify-start">

              <div
                className="
                  inline-block
                  rounded-[34px]
                  bg-gradient-to-br
                  from-[#0F3D3E]/40
                  via-[#0F3D3E]/25
                  to-white/5
                  backdrop-blur-2xl
                  border border-white/10
                  shadow-[0_20px_60px_rgba(0,0,0,.35)]
                  px-7
                  py-6
                "
              >

                <h1
                  dir="rtl"
                  className="text-center md:text-right leading-[1.05]"
                >
                  <span className="block text-[1.8rem] sm:text-[2.1rem] md:text-[3.6rem] font-semibold tracking-tight text-[#E8A87C]">
                    رحلتك تبدأ
                  </span>

                  <span className="mt-4 block text-[2.5rem] sm:text-[2.9rem] md:text-[4.8rem] font-bold tracking-[-0.04em] text-white leading-none">
                    <span>من </span>
                    <span>الاختيار </span>
                    <span>الصحيح</span>
                  </span>
                </h1>

                <p className="mt-5 text-center md:text-right text-base md:text-[1.35rem] leading-7 md:leading-9 text-white/95">
                  تجارب سفر مصممة بعناية
                  <br />
                  بأفضل الأسعار وخدمة شخصية راقية.
                </p>

              </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col md:flex-row gap-4 w-[85%] md:w-auto mx-auto md:mx-0">

              <a
                href="#hotels"
                className="rounded-full bg-gradient-to-b from-[#145254] to-[#0F3D3E] px-7 md:px-10 py-3.5 md:py-4 text-base md:text-lg font-semibold text-white text-center shadow-[0_15px_35px_rgba(15,61,62,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,61,62,.45)]"
              >
                ابدأ رحلتك
              </a>

              <a
                href="#hotels"
                className="rounded-full border border-white/20 bg-white/10 px-7 md:px-10 py-3.5 md:py-4 text-base md:text-lg text-white text-center backdrop-blur-xl transition-all duration-300 hover:bg-white/15"
              >
                استكشف الفنادق
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
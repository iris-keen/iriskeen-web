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
      <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-[#0F3D3E]/18 to-[#0F3D3E]/42" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto flex w-full max-w-7xl justify-center md:justify-start px-8 md:px-20">

          <div className="w-full max-w-[620px] pt-14 md:pt-24">

            <h1
              dir="rtl"
              className="text-center md:text-right leading-[1.05]"
            >
              {/* رحلتك تبدأ */}
              <span
                className="
                  block
                  text-[2rem]
                  sm:text-[2.2rem]
                  md:text-[3.4rem]
                  font-semibold
                  tracking-tight
                  text-white
                  drop-shadow-[0_6px_16px_rgba(0,0,0,.85)]
                "
              >
                رحلتك تبدأ
              </span>

              {/* من الاختيار الصحيح */}
              <span
                className="
                  mt-1
                  block
                  text-[2rem]
                  sm:text-[2.35rem]
                  md:text-[3.8rem]
                  font-bold
                  tracking-[-0.03em]
                  leading-none
                  text-[#E8A87C]
                  drop-shadow-[0_8px_22px_rgba(0,0,0,.9)]
                "
              >
                من الاختيار الصحيح
              </span>
            </h1>

            {/* الوصف */}
            <p
              className="
                mt-12
                md:mt-12
                text-center
                md:text-right
                text-[1rem]
                md:text-[1.15rem]
                leading-8
                md:leading-8
                font-medium
                text-white
                drop-shadow-[0_5px_12px_rgba(0,0,0,.9)]
              "
            >
              تجارب سفر مصممة بعناية
              <br />
              بأفضل الأسعار وخدمة شخصية راقية.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-col md:flex-row gap-4 w-[85%] md:w-auto mx-auto md:mx-0">

              <a
                href="#hotels"
                className="
                  rounded-full
                  bg-gradient-to-b
                  from-[#145254]
                  to-[#0F3D3E]
                  px-7
                  md:px-10
                  py-4
                  md:py-4
                  text-base
                  md:text-lg
                  font-semibold
                  text-white
                  text-center
                  shadow-[0_15px_35px_rgba(15,61,62,.45)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_45px_rgba(15,61,62,.55)]
                "
              >
                ابدأ رحلتك
              </a>

              <a
                href="#hotels"
                className="
                  rounded-full
                  border
                  border-white/30
                  bg-white/12
                  backdrop-blur-md
                  px-7
                  md:px-10
                  py-4
                  md:py-4
                  text-base
                  md:text-lg
                  text-white
                  text-center
                  transition-all
                  duration-300
                  hover:bg-white/18
                "
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
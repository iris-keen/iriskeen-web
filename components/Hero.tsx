import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
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
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto flex w-full max-w-7xl justify-center md:justify-start px-8 md:px-20">

          <div className="w-full max-w-[620px] pt-3 md:pt-20">

            {/* Mobile Glass Only */}
            <div className="inline-block rounded-[30px] bg-white/8 backdrop-blur-md px-5 py-4 md:bg-transparent md:backdrop-blur-none md:p-0">

              <h1
                dir="rtl"
                className="
                  text-center
                  md:text-right
                  leading-[0.98]
                "
              >
                {/* رحلتك تبدأ */}
                <span
                  className="
                    block
                    text-[1.7rem]
                    sm:text-[1.9rem]
                    md:text-[3.1rem]
                    font-extrabold
                    md:font-bold
                    tracking-tight
                    text-white
                    drop-shadow-[0_10px_28px_rgba(0,0,0,1)]
                    [@media(max-width:767px)]:[-webkit-text-stroke:0.15px_rgba(0,0,0,.18)]
                  "
                >
                  رحلتك تبدأ
                </span>

                {/* من الاختيار الصحيح */}
                <span
                  className="
                    mt-1
                    block
                    text-[1.8rem]
                    sm:text-[2.1rem]
                    md:text-[3.5rem]
                    font-black
                    md:font-extrabold
                    tracking-[-0.02em]
                    leading-none
                    text-[#E8A87C]
                    drop-shadow-[0_10px_30px_rgba(0,0,0,1)]
                    [@media(max-width:767px)]:[-webkit-text-stroke:0.15px_rgba(0,0,0,.16)]
                  "
                >
                  من الاختيار الصحيح
                </span>

              </h1>

            </div>

            {/* Button */}
            <div className="mt-36 md:mt-24 flex justify-center md:justify-start">
              <a
                href="#hotels"
                className="
                  w-[62%]
                  md:w-auto
                  rounded-full
                  bg-gradient-to-b
                  from-[#145254]
                  to-[#0F3D3E]
                  px-6
                  md:px-8
                  py-4
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
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
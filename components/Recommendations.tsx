export default function Recommendations() {
  return (
    <section className="bg-[#F8F7F3] pt-14 pb-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-medium tracking-[0.35em] text-[#D4AF37]">
            TRAVEL SERVICES
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#0F3D3E]">
            خدمات تساعدك في رحلتك
          </h2>

          <p className="mt-6 text-lg leading-9 text-[#0F3D3E]/70">
            نوفر لك وصولًا مباشرًا إلى الخدمات الرسمية
            <br />
            لتبدأ رحلتك بكل سهولة.
          </p>

        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {/* قطار الحرمين */}

          <div className="overflow-hidden rounded-[36px] border border-[#ECE9E3] bg-white shadow-[0_20px_60px_rgba(15,61,62,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-2xl">

            <img
              src="/images/train-banner.webp"
              alt="قطار الحرمين"
              className="h-56 w-full object-cover object-top"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold text-[#0F3D3E]">
                احجز قطارك
              </h3>

              <p className="mt-4 leading-8 text-[#0F3D3E]/70">
                انتقل مباشرة إلى الموقع الرسمي
                لقطار الحرمين السريع
                لإتمام الحجز.
              </p>

              <a
                href="https://sar.hhr.sa/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center rounded-full bg-[#0F3D3E] px-8 py-4 font-semibold text-white transition hover:bg-[#165154]"
              >
                الانتقال للموقع الرسمي ↗
              </a>

            </div>

          </div>

          {/* الطيران */}

          <div className="overflow-hidden rounded-[36px] border border-[#ECE9E3] bg-white shadow-[0_20px_60px_rgba(15,61,62,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-2xl">

            <img
              src="/images/flight-banner.webp"
              alt="حجز الطيران"
              className="h-56 w-full object-cover object-top"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold text-[#0F3D3E]">
                احجز طيرانك
              </h3>

              <p className="mt-4 leading-8 text-[#0F3D3E]/70">
                انتقل مباشرة إلى الموقع الرسمي
                للخطوط السعودية
                لإتمام الحجز.
              </p>

              <a
                href="https://www.saudia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center rounded-full bg-[#0F3D3E] px-8 py-4 font-semibold text-white transition hover:bg-[#165154]"
              >
                الانتقال للموقع الرسمي ↗
              </a>

            </div>

          </div>

        </div>

        <p className="mt-8 text-center text-sm leading-7 text-[#0F3D3E]/55">
          يتم تحويلك مباشرة إلى المواقع الرسمية لمقدمي الخدمة لإتمام الحجز.
        </p>

      </div>
    </section>
  );
}
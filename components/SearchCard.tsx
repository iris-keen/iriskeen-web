import SearchForm from "./SearchForm";

export default function SearchCard() {
  return (
    <section
      id="hotels"
      className="bg-[#F8F7F3] py-24 scroll-mt-28"
    >
      <div className="mx-auto max-w-6xl px-8">

        <div className="mb-10 text-center">
          <span className="text-sm font-medium tracking-[0.35em] text-[#D4AF37]">
            START YOUR JOURNEY
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#0F3D3E]">
            ابدأ رحلتك
          </h2>

          <p className="mt-5 text-lg text-[#0F3D3E]/70">
            أخبرنا بتفاصيل رحلتك وسنساعدك في اختيار الأنسب.
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-[36px] bg-white p-12 shadow-[0_25px_70px_rgba(15,61,62,0.08)]">

          <SearchForm />

          <div className="mt-10 border-t border-[#ECE9E3] pt-8">

            <p className="text-center text-lg text-[#0F3D3E]/70">
              إذا لم يتوفر الفندق الذي تريده، سنقترح عليك أفضل البدائل بنفس مستوى الجودة والموقع.
            </p>

            <div className="mt-8 flex justify-center">

              <a
                href="#hotels"
                className="rounded-full bg-[#0F3D3E] px-12 py-4 text-lg font-semibold text-white transition hover:bg-[#165154]"
              >
                اعرف التوفر
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
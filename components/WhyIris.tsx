export default function WhyIris() {
  const steps = [
    {
      number: "01",
      title: "أخبرنا برحلتك",
      description: "المدينة، التاريخ، وعدد الضيوف.",
    },
    {
      number: "02",
      title: "نحلل الخيارات",
      description: "نختار الفنادق المناسبة وفق احتياجاتك.",
    },
    {
      number: "03",
      title: "نقارن التفاصيل",
      description: "الموقع، الإطلالة، والخدمة الحقيقية.",
    },
    {
      number: "04",
      title: "نرسل الترشيحات",
      description: "خيارات مرتبة مع سبب كل ترشيح.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-medium tracking-[0.35em] text-[#D4AF37]">
            THE IRIS KEEN PROCESS
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#0F3D3E]">
            كيف نختار الفندق المناسب لك؟
          </h2>

          <p className="mt-6 text-lg leading-9 text-[#0F3D3E]/70">
            رحلتك تبدأ بخطوة بسيطة...
            <br />
            ثم نتولى نحن الباقي.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Line */}

          <div className="absolute inset-x-0 top-7 hidden justify-center lg:flex">
            <div className="flex w-[72%] items-center">

              <div className="h-[2px] flex-1 bg-[#E8D8A5]" />

              <div className="ml-4 text-lg">
                ✨
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-4">

            {steps.map((step) => (
              <div
                key={step.number}
                className="relative text-center"
              >

                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#D4AF37] text-lg font-bold text-white shadow-xl">
                  {step.number}
                </div>

                <h3 className="mt-12 text-2xl font-bold text-[#0F3D3E]">
                  {step.title}
                </h3>

                <p className="mt-5 text-base leading-7 text-[#0F3D3E]/70">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Final Message */}

        <div className="mx-auto mt-24 max-w-2xl rounded-[30px] bg-[#0F3D3E] px-12 py-12 text-center shadow-2xl">

          <h3 className="text-4xl font-bold leading-relaxed text-white">
            لا نبحث لك عن أي فندق...
            <br />
            بل نبحث لك عن الفندق المناسب.
          </h3>

          <p className="mt-8 text-lg text-white/75">
            وهذا هو معنى شعارنا:
          </p>

          <p className="mt-3 text-3xl font-semibold text-white">
            بصيرتك في الاختيار
          </p>

        </div>

      </div>
    </section>
  );
}
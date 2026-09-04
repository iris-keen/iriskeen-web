export default function Choices() {
  const cards = [
    {
      title: "إقامة فاخرة",
      description: "تجارب راقية في أفضل الفنادق المختارة.",
      image: "/choice-luxury.jpg",
    },
    {
      title: "أفضل قيمة",
      description: "أفضل توازن بين الجودة والسعر.",
      image: "/choice-value.jpg",
    },
    {
      title: "ذكريات لا تُنسى",
      description: "رحلات تعيش معك حتى بعد العودة.",
      image: "/choice-family.jpg",
    },
  ];

  return (
    <section
      id="offers"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-14 text-center">

          <span className="text-sm font-medium tracking-[0.35em] text-[#D4AF37]">
            OUR COLLECTION
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#0F3D3E]">
            اختر رحلتك
          </h2>

          <p className="mt-5 text-lg text-[#0F3D3E]/70">
            لأن كل رحلة تستحق اختيارًا يناسبها.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {cards.map((card) => (

            <div
              key={card.title}
              className="group relative h-[460px] overflow-hidden rounded-[32px]"
            >

              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D3E]/75 via-[#0F3D3E]/20 to-transparent transition-all duration-500 group-hover:from-[#0F3D3E]/65" />

              <div className="absolute bottom-0 w-full p-7 text-white">

                <h3 className="text-3xl font-semibold">
                  {card.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-white/85">
                  {card.description}
                </p>

                <a
                  href="#hotels"
                  className="mt-6 inline-block rounded-full border border-white/50 px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-[#0F3D3E]"
                >
                  استكشف
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import HotelDropdown from "./HotelDropdown";
import CityDropdown from "./CityDropdown";
import DatePicker from "./DatePicker";

export default function SearchForm() {
  const [hotel, setHotel] = useState("✨ رشحوا لي الأنسب");
  const [city, setCity] = useState("مكة");
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [guests, setGuests] = useState(2);
  const [notes, setNotes] = useState("");

  const sendWhatsApp = () => {
    const message = `السلام عليكم،

أرغب في معرفة أفضل الخيارات المتاحة حسب البيانات التالية:

🏨 الفندق: ${hotel}
📍 المدينة: ${city}
📅 الوصول: ${
      checkIn ? checkIn.toLocaleDateString("ar-SA") : "-"
    }
📅 المغادرة: ${
      checkOut ? checkOut.toLocaleDateString("ar-SA") : "-"
    }
👥 عدد الضيوف: ${guests}

📝 ملاحظات:
${notes || "لا يوجد"}

شاكر لكم.`;

    window.open(
      `https://wa.me/966590202129?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-14">

        {/* المدينة */}
        <div className="col-span-1 md:col-span-2">
          <CityDropdown
            value={city}
            onChange={(selectedCity) => {
              setCity(selectedCity);
              setHotel("✨ رشحوا لي الأنسب");
            }}
          />
        </div>

        {/* الفندق */}
        <div className="col-span-1 md:col-span-4">
          <HotelDropdown
            city={city}
            value={hotel}
            onChange={setHotel}
          />
        </div>

        {/* الوصول */}
        <div className="col-span-1 md:col-span-3">
          <DatePicker
            label="الوصول"
            value={checkIn}
            onChange={setCheckIn}
          />
        </div>

        {/* المغادرة */}
        <div className="col-span-1 md:col-span-3">
          <DatePicker
            label="المغادرة"
            value={checkOut}
            onChange={setCheckOut}
          />
        </div>

        {/* الضيوف */}
        <div className="col-span-2 md:col-span-2 rounded-2xl border border-[#ECE9E3] bg-white px-5 py-4 transition-all duration-300 hover:border-[#D4AF37] hover:shadow-md">

          <p className="text-xs font-medium tracking-wide text-[#8C7A4A] text-right">
            الضيوف
          </p>

          <div className="mt-3 flex items-center justify-center gap-2">

            <button
              type="button"
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              className="w-5 text-center text-[18px] leading-none text-[#0F3D3E] transition hover:text-[#D4AF37]"
            >
              −
            </button>

            <span className="min-w-[20px] text-center text-[15px] font-semibold leading-none text-[#0F3D3E]">
              {guests}
            </span>

            <button
              type="button"
              onClick={() => setGuests((g) => g + 1)}
              className="w-5 text-center text-[18px] leading-none text-[#0F3D3E] transition hover:text-[#D4AF37]"
            >
              +
            </button>

          </div>

        </div>

      </div>

      {/* الملاحظات */}
      <div className="mt-5 rounded-2xl border border-[#ECE9E3] px-6 py-4 transition-all duration-300 hover:border-[#D4AF37]">

        <p className="text-sm font-medium text-[#8C7A4A]">
          ملاحظات إضافية (اختياري)
        </p>

        <textarea
          rows={2}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="أي طلبات خاصة..."
          className="mt-2 w-full resize-none bg-transparent text-[#0F3D3E] outline-none placeholder:text-[#0F3D3E]/40"
        />

      </div>

      <div className="mt-7 flex justify-center">

        <button
          onClick={sendWhatsApp}
          className="rounded-full bg-[#0F3D3E] px-12 py-4 text-lg font-semibold text-white transition hover:bg-[#165154]"
        >
          ارسل الطلب
        </button>

      </div>
    </>
  );
}
"use client";

import { useState } from "react";
import { hotels } from "./data/hotels";

type HotelDropdownProps = {
  city: string;
  value: string;
  onChange: (hotel: string) => void;
};

export default function HotelDropdown({
  city,
  value,
  onChange,
}: HotelDropdownProps) {
  const [open, setOpen] = useState(false);

  const hotelList =
    city === "مكة"
      ? hotels.makkah
      : hotels.madinah;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full rounded-2xl border border-[#ECE9E3] bg-white px-5 py-4 text-right transition-all duration-300 hover:border-[#D4AF37] hover:shadow-md"
      >
        <p className="text-xs font-medium text-[#8C7A4A]">
          الفندق
        </p>

        <div className="mt-2 flex items-center justify-between">
          <span className="truncate text-lg font-semibold text-[#0F3D3E]">
            {value}
          </span>

          <span
            className={`text-base text-[#D4AF37] transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-3 w-full overflow-hidden rounded-2xl border border-[#ECE9E3] bg-white shadow-2xl">
          {hotelList.map((hotel) => (
            <button
              key={hotel}
              type="button"
              onClick={() => {
                onChange(hotel);
                setOpen(false);
              }}
              className={`block w-full border-b border-[#F5F5F5] px-5 py-3 text-right text-base font-medium transition last:border-0 ${
                value === hotel
                  ? "bg-[#F8F7F3] text-[#0F3D3E]"
                  : "text-[#0F3D3E] hover:bg-[#F8F7F3]"
              }`}
            >
              {hotel}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
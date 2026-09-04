"use client";

import { useState } from "react";

const cities = [
  "مكة",
  "المدينة",
];

type CityDropdownProps = {
  value: string;
  onChange: (city: string) => void;
};

export default function CityDropdown({
  value,
  onChange,
}: CityDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full rounded-2xl border border-[#ECE9E3] bg-white px-5 py-4 text-right transition-all duration-300 hover:border-[#D4AF37] hover:shadow-md"
      >

        <p className="text-xs font-medium text-[#8C7A4A]">
          المدينة
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

          {cities.map((city) => (

            <button
              key={city}
              type="button"
              onClick={() => {
                onChange(city);
                setOpen(false);
              }}
              className={`block w-full border-b border-[#F5F5F5] px-5 py-3 text-right text-base font-medium transition last:border-0 ${
                value === city
                  ? "bg-[#F8F7F3] text-[#0F3D3E]"
                  : "text-[#0F3D3E] hover:bg-[#F8F7F3]"
              }`}
            >
              {city}
            </button>

          ))}

        </div>

      )}

    </div>
  );
}
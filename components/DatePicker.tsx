"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

type Props = {
  label: string;
  value?: Date;
  onChange: (date: Date | undefined) => void;
};

export default function DatePicker({
  label,
  value,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("en-GB", { month: "short" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full rounded-2xl border border-[#ECE9E3] bg-white px-5 py-4 transition-all duration-300 hover:border-[#D4AF37] hover:shadow-md"
      >
        {/* العنوان + السهم */}
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium tracking-wide text-[#8C7A4A]">
            {label}
          </p>

          <span
            className={`text-[11px] text-[#D4AF37] transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>

        {/* التاريخ */}
        <div className="mt-3">
          <span
            dir="ltr"
            className="
              block
              w-full
              truncate
              text-center
              text-[13px]
              md:text-[14px]
              font-semibold
              tracking-tight
              text-[#0F3D3E]
            "
          >
            {value ? formatDate(value) : "اختر التاريخ"}
          </span>
        </div>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-3 rounded-2xl border border-[#ECE9E3] bg-white p-4 shadow-2xl">
          <DayPicker
            mode="single"
            selected={value}
            onSelect={(day) => {
              onChange(day);
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
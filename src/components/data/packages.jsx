import React from "react";
import { Users, User, Star, Crown } from "lucide-react";

export const packages = [
  {
    id: "A",
    name: "VIP COUPLE",
    price: 1000000,
    type: "couple",
    features: ["Untuk Pasangan Suami - Istri (2 Org)", "Buku Marriage Undercover", "2 Chemistry Card", "Tempat Duduk VIP (Front Row)", "Foto Eksklusif bareng Setia Furqon Kholid"],
    // TEMA EMAS (GOLD) UNTUK VIP
    theme: "bg-utama",
    bg: "bg-amber-50",
    buttonColor: "bg-utama text-white",
    icon: <Crown className="w-8 h-8 text-white drop-shadow-md" />, // Icon Mahkota
    isPopular: true,
  },
  {
    id: "B",
    name: "REGULER COUPLE",
    price: 475000,
    type: "couple",
    features: ["Untuk Pasangan Suami - Istri (2 Org)", "2 Chemistry Card", "Tempat Duduk Reguler"],
    // TEMA HITAM (BLACK) UNTUK COUPLE
    theme: "bg-dua",
    bg: "bg-gray-50",
    buttonColor: "bg-dua text-white",
    icon: <Users className="w-6 h-6 text-gray-200" />,
    isPopular: false,
  },
  {
    id: "C",
    name: "SINGLE REGULER",
    price: 250000,
    type: "single",
    features: ["Untuk Satu Orang", "2 Kartu Cinta", "Tempat Duduk Single Reguler"],
    // TEMA SILVER/ABU UNTUK SINGLE
    theme: "bg-tiga",
    bg: "bg-gray-50",
    buttonColor: "bg-tiga text-white",
    icon: <User className="w-6 h-6 text-white" />,
    isPopular: false,
  },
];

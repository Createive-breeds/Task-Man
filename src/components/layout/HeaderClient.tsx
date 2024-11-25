"use client";

import { themeData } from "@/lib/constants";
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname();
    const name = pathname.replace("/","");
  return (
    <header
      style={{ background: themeData.colors.primary }}
      className={`p-4 flex justify-between items-center text-white`}
    >
      <h1 className="text-xl font-semibold capitalize">{name}</h1>
      <div className="text-xl font-semibold">₦ 2,000.00</div>
    </header>
  );
}

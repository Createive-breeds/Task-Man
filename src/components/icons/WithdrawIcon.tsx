"use client"
import { IconProp } from "@/global";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const WithdrawIcon = ({ path }: IconProp) => {
  const [color, setColor] = useState("#696969");
  const pathname = usePathname();
  const isCurrent = pathname.startsWith(path);

  useEffect(() => {
    if (isCurrent) {
      setColor("#4CAF50");
    } else {
      setColor("#696969");
    }
  }, [isCurrent,pathname]);
  return (
    <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
      <path
        d="M25.6724 8.16642H26.8391V19.8331H25.6724V23.3331C25.6724 23.9774 25.1501 24.4998 24.5057 24.4998H3.50572C2.86139 24.4998 2.33905 23.9774 2.33905 23.3331V4.66642C2.33905 4.02208 2.86139 3.49976 3.50572 3.49976H24.5057C25.1501 3.49976 25.6724 4.02208 25.6724 4.66642V8.16642ZM23.3391 19.8331H16.3391C13.1174 19.8331 10.5057 17.2214 10.5057 13.9998C10.5057 10.7781 13.1174 8.16642 16.3391 8.16642H23.3391V5.83309H4.67238V22.1664H23.3391V19.8331ZM24.5057 17.4998V10.4998H16.3391C14.406 10.4998 12.8391 12.0667 12.8391 13.9998C12.8391 15.9327 14.406 17.4998 16.3391 17.4998H24.5057ZM16.3391 12.8331H19.8391V15.1664H16.3391V12.8331Z"
        fill={color}
      />
    </svg>
  );
};

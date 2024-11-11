"use client";
import { IconProp } from "@/global";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const NotificationIcon = ({ path }: IconProp) => {
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
    <svg
      width="16"
      height="18"
      viewBox="0 0 20 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9167 9.79167C16.9167 5.92567 13.7826 2.79167 9.91667 2.79167C6.05067 2.79167 2.91667 5.92567 2.91667 9.79167V19.125H16.9167V9.79167ZM19.25 19.9028L19.7167 20.525C19.91 20.7827 19.8577 21.1484 19.6 21.3417C19.4991 21.4174 19.3762 21.4583 19.25 21.4583H0.583333C0.26117 21.4583 0 21.1971 0 20.875C0 20.7488 0.0409382 20.6259 0.116667 20.525L0.583333 19.9028V9.79167C0.583333 4.63701 4.76201 0.458336 9.91667 0.458336C15.0714 0.458336 19.25 4.63701 19.25 9.79167V19.9028ZM7 22.625H12.8333C12.8333 24.2358 11.5275 25.5417 9.91667 25.5417C8.30585 25.5417 7 24.2358 7 22.625Z"
        fill={color}
      />
    </svg>
  );
};

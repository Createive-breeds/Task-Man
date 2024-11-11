"use client";
import { IconProp } from "@/global";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const SurveyIcon = ({ path }: IconProp) => {
  const [color, setColor] = useState("#696969");
  const pathname = usePathname();
  const isCurrent = pathname.startsWith(path);

  useEffect(() => {
    if (isCurrent) {
      setColor("#4CAF50");
    } else {
      setColor("#696969");
    }
  }, [pathname,isCurrent]);

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 22 24"
      fill="none"
    >
      <path
        d="M16.8333 0.333344V2.66668H20.341C20.9811 2.66668 21.5 3.18579 21.5 3.82564V22.5077C21.5 23.1477 20.9809 23.6667 20.341 23.6667H1.65897C1.01889 23.6667 0.5 23.1476 0.5 22.5077V3.82564C0.5 3.18556 1.01911 2.66668 1.65897 2.66668H5.16667V0.333344H16.8333ZM5.16667 5.00001H2.83333V21.3333H19.1667V5.00001H16.8333V7.33334H5.16667V5.00001ZM7.5 16.6667V19H5.16667V16.6667H7.5ZM7.5 13.1667V15.5H5.16667V13.1667H7.5ZM7.5 9.66668V12H5.16667V9.66668H7.5ZM14.5 2.66668H7.5V5.00001H14.5V2.66668Z"
        fill={color}
      />
    </svg>
  );
};

"use client";

import { usePathname } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { themeData } from "@/lib/constants";

export const NavComponent = ({
  label,
  path,
  icon,
}: {
  label: string;
  path: string;
  icon: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isCurrent = pathname.startsWith(path);
  const [color, setColor] = useState("#696969");

  useEffect(() => {
    if (isCurrent) {
      setColor(themeData.colors.primary);
    } else if (label.toLowerCase() === "logout") {
      setColor("red");
    } else {
      setColor("#696969");
    }
  }, [isCurrent, label]);

  return (
    <div className=" flex items-center text-white w-[100%] gap-x-2 font-medium text-[16px]">
      <div className=" flex items-center ">
        {isCurrent && (
          <div
            className="h-[30px] w-[5px] mr-1 rounded "
            style={{ background: themeData.colors.primary }}
          ></div>
        )}
        {icon}
      </div>
      <Link
        href={path}
        style={{
          color,
        }}
      >
        {label}
      </Link>
    </div>
  );
};

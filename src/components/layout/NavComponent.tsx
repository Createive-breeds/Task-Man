"use client";

import { usePathname } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

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
        setColor("#4CAF50");
      }else if(label.toLowerCase() === "logout"){
        setColor("red");
      } else {
        setColor("#696969");
      }
    }, [isCurrent,label]);
  
    return (
      <div className=" flex items-center text-white w-[100%] gap-x-5 font-semibold text-[18px]">
        <div className=" flex gap-x-2 items-center ">
          {isCurrent && (
            <div className="h-[30px] w-[5px] rounded bg-[#4CAF50]"></div>
          )}
          {icon}
        </div>
        <Link href={path} style={{
          color
        }}>{label}</Link>
      </div>
    );
  };
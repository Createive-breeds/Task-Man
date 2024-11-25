import DashSideBar from "./SideBar";
import { ReactNode } from "react";
import Header from "./HeaderClient";
import { defaultFont } from "@/lib/constants";

type LayoutProp = {
  children: ReactNode;
};

export default function DashbaordLayout({ children }: LayoutProp) {
  return (
    <div
      className={` h-[100dvh] grid grid-cols-[200px,_1fr] ${defaultFont.className}`}
    >
      <div></div>
      {/* Side bar */}
      <DashSideBar />
      <div className=" pt-[50px] p-[20px]">
        <Header />
        {children}
      </div>
    </div>
  );
}

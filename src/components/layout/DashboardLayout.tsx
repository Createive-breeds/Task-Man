import { Work_Sans } from "next/font/google";
import DashSideBar from "./SideBar";
import { ReactNode } from "react";
const workSans = Work_Sans({ subsets: ["latin"] });

type LayoutProp = {
  children: ReactNode;
};

export default function DashbaordLayout({ children }: LayoutProp) {
  return (
    <div
      className={` h-[100dvh] grid grid-cols-[200px,_1fr] ${workSans.className}`}
    >
      <div></div>
      {/* Side bar */}
      <DashSideBar />
      <div className=" p-[20px]">
        <header className="bg-green-500 p-4 flex justify-between items-center text-white">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="text-xl font-semibold">₦ 2,000.00</div>
        </header>
        {children}
      </div>
    </div>
  );
}

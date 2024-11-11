import { SideBarItems } from "@/lib/constants";
import { NavComponent } from "./NavComponent";
import NavLogout from "./Logout";

export default function DashSideBar() {
  return (
    <div className=" shadow-inner fixed w-[200px] max-h-[100dvh] top-0 bottom-0 left-0 flex flex-col justify-between items-center py-[20px]">
      <div className="  h-[50dvh] flex flex-col justify-between items-center gap-y-10 w-[80%]">
        {SideBarItems.map((item, index) => (
          <NavComponent
            key={index}
            path={item.path}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>

      <NavLogout />
    </div>
  );
}

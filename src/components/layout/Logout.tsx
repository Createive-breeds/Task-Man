"use client";
import axios from "axios";
import { toast } from "react-toastify";
import { LogoutIcon } from "../icons/LogoutIcon";
import { NavComponent } from "./NavComponent";
import { useRouter } from "next/navigation";
import { PAGES } from "@/lib/constants";

export default function NavLogout() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios({
        url: "/api/logout",
        method: "POST",
      });
      router.push(PAGES.SIGN_IN)
    } catch (e) {
      console.log(e);
      toast.error("An Error Occured");
    }
  };

  return (
    <div
      className="flex flex-col justify-between items-center gap-y-10 w-[80%]"
      onClick={logout}
    >
      <NavComponent path={"#"} label="Logout" icon={<LogoutIcon />} />
    </div>
  );
}

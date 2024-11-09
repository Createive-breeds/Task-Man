/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Work_Sans } from "next/font/google";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./SignIn.module.css"; // Assuming this is where you put your CSS
import SideBar from "@/components/SideBar";
import Errors from "@/components/forms/Errors";
import Link from "next/link";
import { PAGES } from "@/lib/constants";
import axios from "axios";
import { findMessage } from "@/lib/helper";
import { useRouter } from "next/navigation";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function SignIn() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [userError, setUserError] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  function validateUser() {
    const { email, password } = userData;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errors: any = {};

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      errors["email"] = "Email not valid";
    }
    if (password.length < 6) {
      errors["password"] = "Password Cannot Be less than 6";
    }

    setUserError({ ...errors });
    return Object.values(errors).some((val) => val != "");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isValid = validateUser();
    if (isValid || isLoading) {
      return;
    }
    setIsLoading(true);
    // Logic for creating a user

    let response;
    try {
      response = await axios({
        url: "/signin/api",
        data: JSON.stringify(userData),
        method: "POST",
      });

      console.log("response: ", response);
      console.log("data: ", response?.data);
      router.push(PAGES.DASHBOARD);
      alert(findMessage(response?.data?.message)); //todo react-toast
    } catch (e: any) {
      console.log(e);
      alert(findMessage(e?.response?.data?.message) || "An Error Occured"); // todo react-toast
    }finally {
      setIsLoading(false);
    }
  }

  function updateUserData(e: ChangeEvent<HTMLInputElement>) {
    setUserData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div className={styles.page}>
      <form
        className={`${styles.form} ${workSans.className}`}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className=" flex py-0 px-[30px] flex-col justify-evenly items-start">
          <span className=" flex justify-center items-center w-full">
            <h1 className="text-black">Sign In</h1>
          </span>

          <input
            type="text"
            placeholder="Email"
            className="custom-input form-input"
            name="email"
            onChange={updateUserData}
          />
          <Errors message={userError.email} />

          <input
            type="password"
            placeholder="Create Password"
            className="custom-input form-input"
            name="password"
            onChange={updateUserData}
          />
          <Errors message={userError.password} />
          <div className=" flex items-center whitespace-nowrap justify-between w-full mt-4 text-[14px] font-medium">
            <div className=" flex-1 flex justify-start items-center gap-x-1">
              <input type="checkbox" name="remember_me" className=" p-0 mt-0" />{" "}
              <p>Remember Me</p>
            </div>
            <div>
              <Link href="reset_password" className=" flex-1 ">
                Forgotten Password ?
              </Link>
            </div>
          </div>

          <div className=" flex justify-center items-center w-full">
            <button
              disabled={isLoading}
              className={` w-[165px] h-[38px] rounded-[3px] bg-[#4caf50] mt-[30px] text-[white] ${
                isLoading && "opacity-50"
              }`}
            >
              Sign In
            </button>
          </div>
        </div>
      </form>
      <SideBar
        showButton
        buttonText="Sign Up"
        subHeading="Welcome to Taskman where you earn just by answering questions."
        heading="Hey Friend!"
        buttonLink={PAGES.SIGN_UP}
      />
    </div>
  );
}

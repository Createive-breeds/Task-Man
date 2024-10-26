/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Wave from "@/components/icons/Wave";
import { Work_Sans } from "next/font/google";
import { ChangeEvent, FormEvent, useState } from "react";
import { UsersDto } from "@/global";
import styles from "./SignUp.module.css"; // Assuming this is where you put your CSS
import SideBar from "@/components/SideBar";
const workSans = Work_Sans({ subsets: ["latin"] });
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import Errors from "@/components/forms/Errors";
import { findMessage } from "@/lib/helper";

export default function SignUp() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userError, setUserError] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function validateUser() {
    const { fullName, email, password, confirmPassword } = userData;
    const errors: any = {};

    if (fullName.trim() === "") {
      errors["fullName"] = "Fullname Is Required";
    } else if (fullName.split(" ").length < 2) {
      errors["fullName"] = "Both First & Last Name are required";
    } else {
      const names: string[] = fullName.split(" ");
      const firstName = names[0];
      const lastName = names[1];

      if (firstName == "" || lastName == "") {
        errors["fullName"] = "Both First & Last Name are required";
      }
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      errors["email"] = "Email not valid";
    }
    if (password.length < 6) {
      errors["password"] = "Password Cannot Be less than 6";
    }

    if (confirmPassword !== password) {
      errors["confirmPassword"] = "Must Be The Same With Password";
    }

    setUserError({ ...errors });
    return Object.values(errors).some((val) => val != "");
  }

  function updateUserData(e: ChangeEvent<HTMLInputElement>) {
    setUserData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isNotValid = validateUser();

    if (isNotValid) {
      return;
    }

    let response: AxiosResponse | undefined;
    try {
      response = await axios({
        url: "/signup/api",
        data: JSON.stringify(userData),
        method: "POST",
      });

      console.log("response: ", response);
      console.log("data: ", response?.data);
    } catch (e: any) {
      console.log(e);
      alert(findMessage(e?.response?.data?.message) || "An Error Occured"); // todo react-toast
      return;
    }
    alert(findMessage(response?.data?.message) || "Registration Successful"); //todo react-toast
  }

  return (
    <div className={styles.page}>
      <SideBar
        showButton
        buttonText="Sign In"
        subHeading="Please fill out your details to start earning"
        heading="Welcome Back!"
      />
      <form
        className={`${styles.form} ${workSans.className}`}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className=" flex  py-0 px-[30px] flex-col justify-evenly items-start">
          <span>
            <h1 className="text-black text-center">Create Account</h1>
          </span>

          <input
            type="text"
            placeholder="Name"
            className="custom-input"
            name="fullName"
            onChange={updateUserData}
          />
          <Errors message={userError.fullName} />
          <input
            type="text"
            placeholder="Email"
            className="custom-input"
            name="email"
            onChange={updateUserData}
          />
          <Errors message={userError.email} />

          <input
            type="password"
            placeholder="Create Password"
            className="custom-input"
            name="password"
            onChange={updateUserData}
          />
          <Errors message={userError.password} />

          <input
            type="password"
            placeholder="Confirm Password"
            className="custom-input"
            name="confirmPassword"
            onChange={updateUserData}
          />
          <Errors message={userError.confirmPassword} />

          <button className=" w-[165px] h-[38px] rounded-[3px] bg-[#4caf50] mt-[30px] text-[white]">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

"use client";

import { Work_Sans } from "next/font/google";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./SignIn.module.css"; // Assuming this is where you put your CSS
import SideBar from "@/components/SideBar";
import Errors from "@/components/forms/Errors";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function SignUp() {
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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    validateUser()
    // Logic for creating a user
  }

  function updateUserData(e: ChangeEvent<HTMLInputElement>) {
    setUserData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  }

  return  (
    <div className={styles.page}>
      <SideBar
        showButton
        buttonText="Sign Up"
        subHeading="Welcome to Taskman where you earn just by answering questions."
        heading="Hey Friend!"
      />
      <form
        className={`${styles.form} ${workSans.className}`}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className=" flex  py-0 px-[30px] flex-col justify-evenly items-start">
          <span>
            <h1 className="text-black text-center">Sign In</h1>
          </span>

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

          <button className=" w-[165px] h-[38px] rounded-[3px] bg-[#4caf50] mt-[30px] text-[white]">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

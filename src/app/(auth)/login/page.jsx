"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogInPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFun = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, 
      password: data.password, 
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 ">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center">Login your account</h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFun)}>
          <fieldset className="fieldset">
            <label className="text-l font-bold">Email</label>
            <input
              type="email"
              {...register("email", { required: "email field is required" })}
              className="input"
              placeholder="Type your Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset relative">
            <label className="text-l font-bold">Password</label>
            <input
              type={isShowPassword ? "text" : "password"}
              {...register("password", {
                required: "password field is required",
              })}
              className="input"
              placeholder="Type your password"
            />
            <span className="absolute top-10.5 right-2 cursor-pointer" onClick={()=> setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>
        <p className="pt-4">
          Don't have an accoutn ?{" "}
          <Link className="text-green-500 underline " href={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;

"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegisterFun = async (data) => {
    const { name, email, password, photo } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
    });
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("SignUp successful");
      router.push("/login");
    }
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 ">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center">
          Register your account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFun)}>
          <fieldset className="fieldset">
            <label className="text-l font-bold">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name field is required" })}
              className="input"
              placeholder="Type your Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <label className="text-l font-bold">Photo URL</label>
            <input
              type="text"
              {...register("photo", { required: "Photo URL is required" })}
              className="input"
              placeholder="Photo URL field is required"
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>
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
            <span
              className="absolute top-10.5 right-9 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}>
              {isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">
            Register{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

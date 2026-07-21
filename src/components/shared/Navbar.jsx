"use client";
import avater from "@/assets/user.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;
  return (
    <div className="container mx-auto flex justify-between mt-3">
      <div></div>
      <ul className="flex gap-3 items-center">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"} className="">
            Career
          </NavLink>
        </li>
      </ul>
      {isPending ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : user ? (
        <div className="flex gap-3 items-center">
          <h2>Hello, {user.name} </h2>
          <Image
            src={user.image || avater}
            alt="User-Avater-Image"
            width={50}
            height={50}></Image>

          <button
            className="btn bg-purple-500 text-white"
            onClick={async () => await authClient.signOut()}>
            Logout
          </button>
        </div>
      ) : (
        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;

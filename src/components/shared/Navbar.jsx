import avater from "@/assets/user.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../NavLink";

const Navbar = () => {
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
          <NavLink href={"/career"} className="">Career</NavLink>
        </li>
      </ul>
      <div className="flex gap-3 items-center">
        <Image
          src={avater}
          alt="User-Avater-Image"
          width={50}
          height={50}></Image>

        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

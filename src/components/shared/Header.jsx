import logo from "@/assets/logo.png";
import { format } from "date-fns";
import Image from "next/image";

const Header = () => {
  return (
    <div className="text-center py-8 space-y-2">
      <Image className="mx-auto" src={logo} alt="Logo-Image" width={300} height={200}></Image>
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "eeee , MMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;

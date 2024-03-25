import Image from "next/image";
import moment from "moment";
import logo from "../../../public/images/logo.png";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-blue-100 px-6 py-2">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <Image src={logo} width={200} height={200} alt="logo" />
        </div>

        <div className="flex gap-4 lg:mr-40">
          <p className="mr-10">
            {moment().format("LT")} {moment().format("ddd, MMM Do")}
          </p>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 mb-3 leading-none border rounded text-black border-black hover:bg-blue-200 lg:mt-0"
          >
            Login
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

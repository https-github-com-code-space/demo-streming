import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className=" sticky top-0 z-50 bg-[#4b69bd] text-white py-4 select-none">
      <nav className="w-[95%] md:w-[90%] mx-auto flex justify-between items-center">
        {/* logo */}
        <div className="grow">
          <h3 className="font-bold">Compamy Logo</h3>
        </div>
        {/* nav items */}
        <div
          className={
            mobileMenuOpen
              ? "block"
              : "hidden lg:block grow"
          }
        >
          <div className="absolute top-[50px] left-0 w-full lg:static lg:flex justify-between items-center">
            <div>
              <ul className="lg:flex justify-between items-center bg-[#4b69bd] font-bold text-white">
                <li className="px-5 py-2 me-2">
                  <Link to="/home">Home</Link>
                </li>
                <li className="px-5 py-2 me-2">
                  <Link to="/">About</Link>
                </li>
                <li className="px-5 py-2 me-2">
                  <Link to="/">My Classes</Link>
                </li>
                <li className="px-5 py-2 me-2">
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="lg:flex justify-between items-center bg-[#4b69bd] font-bold text-white">
                <li className="px-4 py-2 me-2 lg:bg-white lg:text-[#4b69bd] rounded">
                  <Link to="/">Login</Link>
                </li>
                <li className="px-4 py-2 me-2 lg:bg-white lg:text-[#4b69bd] rounded">
                  <Link to="/">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-2xl lg:hidden font-bold">
          {mobileMenuOpen ? (
            <div
              className="cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MdClose></MdClose>
            </div>
          ) : (
            <div
              className="cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <HiMenuAlt2></HiMenuAlt2>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

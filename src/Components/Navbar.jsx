import { ArrowRight, MenuIcon } from "lucide-react";
import logo from "../assets/raygolablogo.png";
import { useState } from "react";
const Navbar = () => {
  const [open, isOpen] = useState(false);
  const navigation = [
    "home",
    "services",
    "projects",
    "pricing",
    "blogs",
    "contact",
    "faq",
  ];
  return (
    <>
      <nav className="flex items-center justify-between px-5 ">
        {/* logo div */}
        <div>
          <img src={logo} alt="Raygo Labs" className="w-20" />
        </div>
        {/* nav div */}
        <div className="hidden">
          <ul className="flex ">
            {navigation.map((navs) => {
              return (
                <li key={navs} className="text-white ">
                  {navs}
                </li>
              );
            })}
          </ul>
        </div>
        {/* contact div */}
        <div className="hidden">
          <button className="text-white border-white/40 border px-5 py-2 rounded-lg">
            Book a call
          </button>
        </div>

        <div onClick={() => isOpen(!open)}>
          <i>
            <MenuIcon size={20} className="text-white" />
          </i>
        </div>
      </nav>
      <div className="text-left relative">
        <div
          onClick={() => isOpen(false)}
          className={`fixed h-screen bg-black/5 backdrop-blur-2xl duration-700 transition-transfrom border w-full  transition-opacity dura ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        ></div>
        <ul
          className={`text-white absolute bg-black flex flex-col capitalize gap-y-2  px-6 py-4 h-screen w-50 duration-500 transition-transform transform ease-in-out overflow-hidden  z-50  right-0 group ${open ? "translate-x-0 " : "translate-x-full"}`}
        >
          {navigation.map((navs, index) => (
            <li
              key={index}
              className="flex items-center text-lg justify-between px-2 border-b border-b-text py-4 "
            >
              {navs}
              <ArrowRight
                className="group-hover:translate-x-20 duration-300 transition-transform transform ease-in"
                size={20}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

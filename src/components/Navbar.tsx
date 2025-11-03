import { useState } from "react";
import logo from "@/assets/logo.png";
import { navItems } from "@/data";
import { FaBars, FaTimes } from "react-icons/fa";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-700/80 backdrop-blur-md transition-all duration-300 py-3">

      <div className="container px-6 flex justify-between items-center text-sm">
        <a href="#" className="flex justify-center items-center">
          <img src={logo} alt="" className="h-10 w-10 mr-2 " />
          <span className="text-xl tracking-tight">VirtualR</span>
        </a>
        
        <ul className="hidden md:flex space-x-12 items-center ml-14 ">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex justify-center items-center space-x-12">
          <a href="#" className="px-3 py-2 border rounded-md">
            Sign In
          </a>
          <a
            href="#"
            className=" bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md text-white"
          >
            Create an account
          </a>
          <ModeToggle />
        </div>

        {/* Mobile Button */}
        <div className="md:hidden cursor-pointer space-x-4 ">
          <ModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl cursor-pointer "
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center space-y-6 py-4 md:hidden ">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="block"
              onClick={() => setIsOpen(false)}
            >
              <a href={item.href}>{item.label}</a>
            </div>
          ))}
          <div className="flex space-x-6 " onClick={() => setIsOpen(false)}>
            <a href="#" className="px-3 py-2 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className=" bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md text-white"
            >
              Create an account
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

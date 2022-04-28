import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-transparent flex justify-between items-center bg-white">
        <div className="font-bold ml-4">PORTFOLIO</div>
        <ul className="px-4 py-4 flex ml-8 space-x-11 mr-9">
          <li className="cursor-pointer hover:text-white active:border-l-purple-700">
            Home
          </li>
          <li className="cursor-pointer hover:text-white active:border-l-purple-700">
            About Us
          </li>
          <li className="cursor-pointer hover:text-white active:border-l-purple-700">
            Contact Us
          </li>
          <li className="cursor-pointer hover:text-white active:border-l-purple-700">
            My projects
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

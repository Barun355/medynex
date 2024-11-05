import React from "react";
import BookADemo from "./BookADemo";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-[8rem] px-4 flex flex-col">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 px-8 gap-10 md:gap-0">
          <div>
            <h3 className="text-lg font-semibold">Medynex</h3>
            <p className="mt-2">Your trusted AI healthcare partner.</p>
          </div>

          <nav className="flex flex-col md:flex-row md:space-x-8 w-full md:justify-center">
            <a href="#hero" className="hover:underline">
              Home
            </a>
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#roadmap" className="hover:underline">
              Roadmap
            </a>
            <a href="#teams" className="hover:underline">
              Team
            </a>
            <a href="#contact" className="hover:underline">
              Contact Us
            </a>
          </nav>

          <BookADemo />
        </div>
      </footer>
      <p className="text-sm w-full bg-slate-200 text-center py-2">
        &copy; {new Date().getFullYear()} Medynex. All rights reserved.
      </p>
    </>
  );
};

export default Footer;

import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/logo.svg';

const Navbar: React.FC = () => {
  return (
    <header
      data-testid="navbar"
      className="container mx-auto md:max-w-[1140px] pt-3 bg-white"
    >
      <div className="flex items-center justify-between py-2 px-4 md:hidden">
        <img src={logo} alt="Logo" className="h-4" />
        <button className="text-black text-2xl">
          <AiOutlineMenu />
        </button>
      </div>

      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center cursor-pointer hidden md:flex">
          <img src={logo} alt="Logo" className="h-4" />
        </div>

        <div className="flex items-center space-x-10 hidden md:flex">
          <nav className="flex items-center space-x-10">
            {['Fitur', 'Trading', 'Edukasi', 'Lainnya'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-black hover:text-blue-500"
              >
                {item}
              </a>
            ))}
          </nav>
          <button
            data-testid="download-btn"
            className="px-4 py-2 border border-black text-black rounded-full font-semibold hover:bg-gray-100"
          >
            Download App
          </button>

          <div className="flex items-center space-x-1 cursor-pointer">
            <FaGlobe className="text-black" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

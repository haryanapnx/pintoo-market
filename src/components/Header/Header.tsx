import React from "react";
import { FiSearch } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <div className="lg:flex justify-between items-start mb-10 px-4 sm:px-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold lg:mb-0 mb-10">
        Harga Crypto dalam Rupiah Hari Ini
      </h1>
      {/* Search Bar */}
      <div className="flex mt-0 bg-gray-100 rounded-lg">
        <span className="p-2 px-3 border-t border-b border-l border-gray bg-gray/60 rounded-tl-lg rounded-bl-lg">
          <FiSearch className="text-gray-400 mt-1" />
        </span>
        <input
          type="text"
          placeholder="Cari aset di Pintu"
          className=" bg-gray-100 text-gray-600 placeholder-gray-400 w-80 border-t border-b border-r border-gray bg-gray/60 rounded-tr-lg rounded-br-lg p-2 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Header;

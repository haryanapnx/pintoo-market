import React from 'react';
import { FiSearch } from 'react-icons/fi';

interface HeaderProps {
  onSearch: (query: string) => void;
  value: string;
}

const Header: React.FC<HeaderProps> = ({ onSearch, value }) => (
  <div className="lg:flex justify-between items-start mb-6 md:mb-10 px-4 sm:px-0">
    <h1 className="text-[20px] lg:text-[28px] font-bold lg:mb-0 mb-4 md:mb-10">
      Harga Crypto dalam Rupiah Hari Ini
    </h1>

    <div className="flex mt-0 bg-gray-100 rounded-lg">
      <span className="p-2 px-3 border-t border-b border-l border-gray bg-gray/60 rounded-tl-lg rounded-bl-lg">
        <FiSearch className="text-gray-400 mt-1 text-2xl" />
      </span>
      <input
        onChange={(event) => onSearch(event.target.value)}
        type="text"
        value={value}
        placeholder="Cari aset di Pintu"
        className=" bg-gray-100 text-gray-600 placeholder-gray-400 w-80 border-t border-b border-r border-gray bg-gray/60 rounded-tr-lg rounded-br-lg p-2 focus:outline-none"
      />
    </div>
  </div>
);

export default Header;

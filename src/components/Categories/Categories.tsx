import React from "react";
import {
  FaStar,
  FaUniversity,
  FaGamepad,
  FaChartLine,
  FaExchangeAlt,
} from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { MdOutlineLayers } from "react-icons/md";
import { BsCurrencyExchange, BsRobot, BsLayersHalf } from "react-icons/bs";

const Categories: React.FC = () => {
  const categories = [
    { label: "Terbaru", icon: <FaStar className="text-blue-600" /> },
    { label: "DeFi", icon: <FaUniversity className="text-blue-600" /> },
    { label: "NFT/Gaming", icon: <FaGamepad className="text-blue-600" /> },
    { label: "CEX", icon: <FaChartLine className="text-blue-600" /> },
    { label: "DEX", icon: <FaExchangeAlt className="text-blue-600" /> },
    { label: "Layer-1", icon: <BsLayersHalf className="text-blue-600" /> },
    { label: "DePIN", icon: <RiBankFill className="text-blue-600" /> },
    { label: "Lending", icon: <FaUniversity className="text-blue-600" /> },
    { label: "Layer-2", icon: <MdOutlineLayers className="text-blue-600" /> },
    {
      label: "Ekosistem Stablecoin",
      icon: <BsCurrencyExchange className="text-blue-600" />,
    },
    { label: "Artificial", icon: <BsRobot className="text-blue-600" /> },
  ];

  return (
    <div className="mt-6 px-4 overflow-x-auto whitespace-nowrap flex gap-3">
      {categories.map((category, index) => (
        <button
          key={index}
          className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg shadow-sm hover:bg-blue-100 text-sm font-medium"
        >
          {category.icon}
          <span>{category.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Categories;

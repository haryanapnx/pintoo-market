import React from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface PercentageChangeProps {
  value: string;
}

const PercentageChange: React.FC<PercentageChangeProps> = ({ value }) => {
  const isPositive = parseFloat(value) > 0;

  return (
    <span
      className={`flex items-center justify-end md:justify-start gap-1 font-semibold ${
        isPositive ? "text-green-600" : "text-red-500"
      }`}
    >
      {isPositive ? (
        <TiArrowSortedUp className="text-green-600" />
      ) : (
        <TiArrowSortedDown className="text-red-500" />
      )}
      {value}%
    </span>
  );
};

export default PercentageChange;

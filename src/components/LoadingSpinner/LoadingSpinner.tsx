import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  fixed?: boolean;
  label?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  fixed = false,
  label = "",
  ...props
}) => {
  return (
    <div
      data-testid="loading-spinner"
      className={`flex items-center justify-center h-full w-full ${fixed ? " fixed inset-0  bg-white bg-opacity-50 z-10" : ""}`}
      {...props}
    >
      <AiOutlineLoading3Quarters className="animate-spin inline-block text-2xl text-blue-500 rounded-full" />
      {label && <span className="ml-2">{label}</span>}
    </div>
  );
};

export default LoadingSpinner;

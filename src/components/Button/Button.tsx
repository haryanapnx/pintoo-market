import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  type?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'primary',
  ...props
}) => (
  <button
    className={`px-4 py-2 rounded-lg font-medium ${
      type === 'primary'
        ? 'bg-blue-500 text-white hover:bg-blue-600'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`}
    onClick={onClick}
    {...props}
  >
    {label}
  </button>
);

export default Button;

import React from 'react';

interface TopMover {
  name: string;
  price: string;
  percentage: string;
  positive?: boolean;
}

interface TopMoversProps {
  data: TopMover[];
}

const TopMovers: React.FC<TopMoversProps> = ({ data }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-4">🔥 Top Movers (24 Hours)</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {data.map((mover, index) => (
          <div
            key={index}
            className="flex-shrink-0 p-4 border rounded-lg shadow-md w-48 text-center bg-white"
          >
            <h3 className="text-base font-medium">{mover.name}</h3>
            <p className="text-sm text-gray-600">{mover.price}</p>
            <p
              className={`text-sm font-semibold ${
                mover.positive ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {mover.percentage}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMovers;
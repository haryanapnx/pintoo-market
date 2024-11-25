import React from 'react';
import { TiArrowSortedUp } from 'react-icons/ti';
import { ITokenList } from '../../interfaces/token.model';
import { convertToRp } from '../../utils';
import CoinLogo from '../CoinLogo/CoinLogo';

interface TopMoversProps {
  data: ITokenList[];
}

const TopMovers: React.FC<TopMoversProps> = ({ data }) => (
  <div className="mt-4 px-4 md:px-0">
    <h2 className="text-xl font-bold mb-3">🔥 Top Movers (24 Jam)</h2>
    <div
      className="flex space-x-4 overflow-x-auto"
      style={{ scrollbarWidth: 'none' }}
    >
      {data.length > 0 &&
        data.map((mover, index) => (
          <div
            key={index}
            className="p-4 w-48 border-0 rounded-lg bg-white cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in-out"
          >
            <div className="flex items-center space-x-2 mb-2">
              <CoinLogo logoSrc={mover.logo} backgroundColor={mover.color} />
              <h3 className="text-xl font-bold leading-7 truncate">
                {mover.name}
              </h3>
            </div>

            <p className="text-sm text-gray-500 mb-2">
              {convertToRp(mover.latestPrice || 0, mover.decimal_point)}
            </p>

            <div className="flex items-center mt-2 text-xl font-bold text-green-600">
              <TiArrowSortedUp className="mr-1" />
              {mover.day}%
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default TopMovers;

import React, { useState, useEffect } from 'react';
import { TableHeaderProps } from '../../interfaces/table.model';
import { filterOptions } from '../../constant';

const TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  sortKey,
  sortOrder,
  onSort,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('day');

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = event.target.value;
    setSelectedFilter(filterValue);
    onSort?.(filterValue);
  };

  const handleScroll = () => {
    setIsVisible(window.scrollY > 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (sortKey) {
      setSelectedFilter(sortKey);
    }
  }, [sortKey]);

  return (
    <>
      {/* Desktop */}
      <thead className="hidden md:table-header-group">
        <tr>
          {columns.map((col, i) => {
            const isActive = col.key === sortKey;
            return (
              <th
                key={col.key}
                onClick={() => col.sortable && onSort?.(col.key)}
                className={`p-5 border-b-0 border-gray-200 text-left font-semibold ${
                  col.sortable ? 'cursor-pointer' : ''
                } ${i === 0 && 'p-5 pl-[75px]'}`}
              >
                <div className="flex items-center space-x-2">
                  <span
                    className={`font-semibold text-sm leading-5 uppercase items-center ${
                      isActive ? 'text-gray-800' : 'text-gray-500'
                    }`}
                  >
                    {col.title}
                  </span>
                  {col.sortable && (
                    <div className="flex flex-col">
                      <span
                        className={`h-2 w-2 border-t-2 border-l-2 transform rotate-45 mt-0.5 ${
                          isActive && sortOrder === 'asc'
                            ? 'border-gray-800'
                            : 'border-gray-400'
                        }`}
                      />
                      <span
                        className={`h-2 w-2 border-b-2 border-r-2 transform rotate-45 ${
                          isActive && sortOrder === 'desc'
                            ? 'border-gray-800'
                            : 'border-gray-400'
                        }`}
                      />
                    </div>
                  )}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>

      {/* Mobile */}
      <thead className="md:hidden">
        <tr>
          <th className="text-left p-4 border-b-0">
            <h2 className="text-sm font-bold text-black uppercase">Crypto</h2>
          </th>

          <th className="p-4 border-b-0 flex items-center justify-end">
            <div
              className={`transition-all duration-300 ${
                isVisible
                  ? 'fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50'
                  : ''
              }`}
            >
              <select
                value={selectedFilter}
                onChange={handleFilterChange}
                className="border border-gray-200 rounded-lg text-sm py-1"
              >
                {filterOptions.map((option, i) => (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </th>
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;

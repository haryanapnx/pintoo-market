import React from 'react';
import { ColumnConfig, TableRowProps } from '../../interfaces/table.model';

const TableRow = <T extends Record<string, any>>({
  row,
  columns,
  rowIndex,
  sortKey = 'day',
}: TableRowProps<T>) => {
  const renderColumn = (index: number, col?: ColumnConfig<T>) => {
    const column = col ? col : columns[index];
    if (column?.render)
      return column.render(row[column.dataIndex as keyof T], row, rowIndex);

    return row[column?.dataIndex as keyof T] || '-';
  };

  const findColumnByKey = columns.find((col) => col.key === (sortKey || 'day'));

  return (
    <>
      {/* Desktop */}
      <tr className="hover:bg-gray-50 cursor-pointer hidden md:table-row">
        {columns.map((col, colIndex) => (
          <td
            key={col.key}
            className={`py-5 px-5 border-t border-gray-200 text-base text-black font-semibold ${
              colIndex >= 2 ? 'hidden md:table-cell' : ''
            }`}
          >
            {col.render
              ? col.render(row[col.dataIndex as keyof T], row, rowIndex)
              : row[col.dataIndex as keyof T] || '-'}
          </td>
        ))}
      </tr>

      {/* Mobile */}
      <tr className="hover:bg-gray-50 cursor-pointer md:hidden table-row">
        <td className="w-1/2 py-5 px-5 border-t border-gray-200 text-base text-black font-semibold md:hidden">
          {renderColumn(0)}
        </td>
        <td className="py-5 px-5 border-t border-gray-200 text-base text-black font-semibold md:hidden text-right">
          {renderColumn(1)}
          {renderColumn(0, findColumnByKey)}
        </td>
      </tr>
    </>
  );
};

export default TableRow;

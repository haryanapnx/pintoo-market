import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { TableProps } from '../../interfaces/table.model';

const Table = <T extends Record<string, any>>({
  columns,
  data,
  sortKey,
  sortOrder,
  onSort,
}: TableProps<T>) => {
  return (
    <div className="overflow-x-auto w-full mt-4">
      <table
        data-testid="table"
        cellSpacing="0"
        cellPadding="0"
        className="table-auto border-separate w-full border rounded-lg overflow-hidden"
      >
        <TableHeader
          columns={columns}
          sortKey={sortKey}
          sortOrder={sortOrder}
          onSort={onSort}
        />
        <TableBody columns={columns} data={data} sortKey={sortKey} />
      </table>
    </div>
  );
};

export default Table;

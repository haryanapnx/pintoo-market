import React from "react";
import TableRow from "./TableRow";
import { TableBodyProps } from "../../interfaces/table.model";

const TableBody = <T extends Record<string, any>>({
  columns,
  data,
  sortKey,
}: TableBodyProps<T>) => {
  return (
    <tbody>
      {data.length > 0 &&
        data.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            row={row}
            columns={columns}
            rowIndex={rowIndex}
            sortKey={sortKey}
          />
        ))}
    </tbody>
  );
};

export default TableBody;

import React, { useState } from "react";
import SortableHeader from "./SortableHeader";

interface TableProps {
  headers: {
    title: string;
    key: string;
  }[];
  data: {
    logo: string;
    name: string;
    symbol: string;
    price: string;
    change24h: string;
    change1w: string;
    change1m: string;
    change1y: string;
    marketCap: string;
  }[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  const [sortKey, setSortKey] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(
        sortOrder === "asc" ? "desc" : sortOrder === "desc" ? null : "asc"
      );
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortOrder) return 0;

    const valueA = a[sortKey as keyof typeof a] || "";
    const valueB = b[sortKey as keyof typeof b] || "";

    if (sortOrder === "asc") {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });

  return (
    <div className="overflow-x-auto w-full mt-4">
      <table
        cellSpacing="0"
        cellPadding="0"
        className="table-auto border-separate w-full border rounded-lg overflow-hidden"
      >
        <thead>
          <tr>
            {headers.map((header, index) => (
              <SortableHeader
                key={index}
                title={header.title}
                sortKey={header.key}
                currentSortKey={sortKey}
                currentSortOrder={sortOrder}
                onSort={handleSort}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-5 border-t border-gray-200 flex items-center space-x-2">
                <img src={row.logo} alt={row.name} className="w-6 h-6" />
                <div>
                  <p className="text-sm font-semibold">{row.name}</p>
                  <p className="text-xs text-gray-500">{row.symbol}</p>
                </div>
              </td>
              <td className="py-3 px-4 border-t border-gray-200">
                {row.price}
              </td>
              <td
                className={`py-3 px-4 border-t border-gray-200 font-semibold ${
                  row.change24h.startsWith("-")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {row.change24h}
              </td>
              <td
                className={`py-3 px-4 border-t border-gray-200 font-semibold ${
                  row.change1w.startsWith("-")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {row.change1w}
              </td>
              <td
                className={`py-3 px-4 border-t border-gray-200 font-semibold ${
                  row.change1m.startsWith("-")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {row.change1m}
              </td>
              <td
                className={`py-3 px-4 border-t border-gray-200 font-semibold ${
                  row.change1y.startsWith("-")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {row.change1y}
              </td>
              <td className="py-3 px-4 border-t border-gray-200">
                {row.marketCap}
              </td>
              <td className="py-3 px-4 border-t border-gray-200">
                <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                  Beli
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

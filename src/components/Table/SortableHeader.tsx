import React from "react";

interface SortableHeaderProps {
  title: string;
  sortKey: string;
  currentSortKey: string;
  currentSortOrder: "asc" | "desc" | null;
  onSort: (key: string) => void;
}

const SortableHeader: React.FC<SortableHeaderProps> = ({
  title,
  sortKey,
  currentSortKey,
  currentSortOrder,
  onSort,
}) => {
  const isActive = currentSortKey === sortKey;

  const handleSort = () => {
    onSort(sortKey);
  };

  return (
    <th
      onClick={handleSort}
      className="p-[1.25rem] border-b border-gray-200 text-left text-sm font-medium text-gray-600 cursor-pointer"
    >
      <div className="flex items-center space-x-3">
        <span className="font-bold uppercase">{title}</span>
        {title && (
          <div className="flex flex-col">
            <span
              className={`h-2 w-2 border-t-2 border-l-2 transform rotate-45 mt-0.5 ${
                isActive && currentSortOrder === "asc"
                  ? "border-gray-800"
                  : "border-gray-400"
              }`}
            ></span>
            <span
              className={`h-2 w-2 border-b-2 border-r-2 transform rotate-45 ${
                isActive && currentSortOrder === "desc"
                  ? "border-gray-800"
                  : "border-gray-400"
              }`}
            ></span>
          </div>
        )}
      </div>
    </th>
  );
};

export default SortableHeader;

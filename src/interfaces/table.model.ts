import React from 'react';

export interface ColumnConfig<T> {
  title: string;
  dataIndex?: keyof T;
  key: string;
  render?: (value: any, record: T, index: number) => React.ReactNode;
  sortable?: boolean;
}

export interface TableProps<T> {
  columns: ColumnConfig<T>[];
  data: T[];
  sortKey?: string;
  sortOrder?: 'asc' | 'desc' | null;
  onSort?: (key: string) => void;
}

export interface TableBodyProps<T> {
  columns: ColumnConfig<T>[];
  sortKey?: string;
  data: T[];
}

export interface TableHeaderProps {
  columns: {
    title: string;
    key: string;
    sortable?: boolean;
  }[];
  sortKey?: string;
  sortOrder?: 'asc' | 'desc' | null;
  onSort?: (key: string) => void;
}

export interface TableRowProps<T> {
  row: T;
  columns: ColumnConfig<T>[];
  rowIndex: number;
  sortKey?: string;
}

import { render, screen } from '@testing-library/react';
import Table from './Table';
import { ColumnConfig } from '../../interfaces/table.model';

describe('Table component', () => {
  const mockColumns: ColumnConfig<Record<string, any>>[] = [
    { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
    { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
    { key: 'email', title: 'Email', dataIndex: 'email', sortable: false },
  ];

  const mockData = [
    { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
    { name: 'Alice Johnson', age: 35, email: 'alice.johnson@example.com' },
  ];

  const mockOnSort = jest.fn();

  test('should render the table component', () => {
    render(
      <Table
        columns={mockColumns}
        data={mockData}
        sortKey={''}
        sortOrder={null}
        onSort={mockOnSort}
      />
    );

    const table = screen.getByTestId('table');
    expect(table).toBeInTheDocument();
  });
});

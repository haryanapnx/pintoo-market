import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  test('should render the header component', () => {
    render(<Header onSearch={() => {}} value="" />);
    const header = screen.getByText('Harga Crypto dalam Rupiah Hari Ini');
    expect(header).toBeInTheDocument();
  });

  test('should render correct input value', () => {
    const onSearch = jest.fn();
    render(<Header onSearch={onSearch} value="test" />);
    const input = screen.getByPlaceholderText('Cari aset di Pintu');
    expect(input).toHaveValue('test');
  });

  test('should call onSearch when input value changes', () => {
    const onSearch = jest.fn();
    render(<Header onSearch={onSearch} value="" />);
    const input = screen.getByPlaceholderText('Cari aset di Pintu');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onSearch).toHaveBeenCalledWith('test');
  });
});

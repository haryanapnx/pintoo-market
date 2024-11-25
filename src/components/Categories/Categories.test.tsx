import { render, screen } from '@testing-library/react';
import Categories from './Categories';

describe('Categories Component', () => {
  test('should render the categories', () => {
    render(<Categories />);
    const categories = screen.getByTestId('categories');
    expect(categories).toBeInTheDocument();
  });

  test('should render the correct number of button categories', () => {
    render(<Categories />);
    const button = screen.getAllByRole('button');
    expect(button.length).toBe(11);
  });

  test('render categories with correct label', () => {
    const categories = [
      'Terbaru',
      'DeFi',
      'NFT/Gaming',
      'CEX',
      'DEX',
      'Layer-1',
      'DePIN',
      'Lending',
      'Layer-2',
      'Ekosistem Stablecoin',
      'Artificial',
    ];
    render(<Categories />);
    categories.map((item) => {
      const label = screen.getByText(item);
      expect(label).toBeInTheDocument();
    });
  });
});

import { render, screen } from '@testing-library/react';
import PercentageChange from './PercentageChange';

describe('PercentageChange Component', () => {
  test('should render the percentage change component', () => {
    render(<PercentageChange value="10%" />);
    const percentageChange = screen.getByTestId('percentage-change');
    expect(percentageChange).toBeInTheDocument();
  });

  test('renders positive percentage change with the correct styles and icon', () => {
    render(<PercentageChange value="5.25" />);

    const percentageElement = screen.getByTestId('percentage-change');

    expect(percentageElement).toHaveTextContent('5.25%');
    expect(percentageElement).toHaveClass('text-green-600');
    expect(percentageElement.querySelector('svg')).toBeInTheDocument();
  });

  test('renders negative percentage change with the correct styles and icon', () => {
    render(<PercentageChange value="-3.14" />);

    const percentageElement = screen.getByTestId('percentage-change');

    expect(percentageElement).toHaveTextContent('-3.14%');
    expect(percentageElement).toHaveClass('text-red-500');
    expect(percentageElement.querySelector('svg')).toBeInTheDocument();
  });
});

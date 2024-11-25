import { render, screen } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

describe('Loading Spinner', () => {
  test('should render the loading spinner', () => {
    render(<LoadingSpinner />);
    const loadingSpinner = screen.getByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });

  test('should render the loading spinner with label', () => {
    render(<LoadingSpinner label="Loading..." />);
    const loadingSpinner = screen.getByText('Loading...');
    expect(loadingSpinner).toBeInTheDocument();
  });

  test('should render the loading spinner with fixed position', () => {
    render(<LoadingSpinner fixed={true} />);
    const loadingSpinner = screen.getByTestId('loading-spinner');
    expect(loadingSpinner).toHaveClass('fixed');
  });
});

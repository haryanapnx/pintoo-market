import { render, screen } from '@testing-library/react';
import loadable from './Loadable';

jest.mock('./mock/MockComponent', () => {
  return function MockComponent() {
    return <div data-testid="mock-component">Mock Component Loaded</div>;
  };
});

jest.mock('../LoadingSpinner/LoadingSpinner', () => {
  return function MockSpinner() {
    return <div data-testid="spinner">Loading...</div>;
  };
});

describe('Loadable Component', () => {
  test('should display the fallback while loading', async () => {
    const LazyLoadComponent = loadable(() => import('./mock/MockComponent'));
    render(<LazyLoadComponent />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();

    const mockComponent = await screen.findByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });

  test('should display the lazyload component', async () => {
    const LazyLoadComponent = loadable(() => import('./mock/MockComponent'));
    render(<LazyLoadComponent />);
    const mockComponent = await screen.findByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });
});

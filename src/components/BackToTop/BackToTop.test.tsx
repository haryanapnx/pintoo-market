import { fireEvent, render, screen } from '@testing-library/react';
import BackToTopButton from './BackToTop';

describe('BackToTopButton component', () => {
  test('should render the back to top button', () => {
    render(<BackToTopButton />);
    const backToTopButton = screen.getByTestId('back-to-top-button');
    expect(backToTopButton).toBeInTheDocument();
  });

  test('should scroll to the top when the button is clicked', () => {
    const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation();
    render(<BackToTopButton />);
    const backToTopButton = screen.getByTestId('back-to-top-button');
    fireEvent.scroll(window, { target: { scrollY: 300 } });
    fireEvent.click(backToTopButton);

    expect(scrollToSpy).toHaveBeenCalledTimes(1);
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });

    scrollToSpy.mockRestore();
  });
});

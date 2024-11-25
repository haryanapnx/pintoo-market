import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('should render the footer component', () => {
    render(<Footer />);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  test('should render the logo', () => {
    render(<Footer />);
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
  });

  test('should render menu links', () => {
    render(<Footer />);
    const menuLinks = screen.getAllByTestId('menu-link');
    expect(menuLinks.length).toBe(4);
    expect(menuLinks[0]).toHaveTextContent('About');
    expect(menuLinks[1]).toHaveTextContent('Contact');
    expect(menuLinks[2]).toHaveTextContent('Privacy Policy');
    expect(menuLinks[3]).toHaveTextContent('Terms of Service');
  });
});

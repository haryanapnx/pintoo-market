import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('should render the navbar component', () => {
    render(<Navbar />);
    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
  });

  test('should render the logo', () => {
    render(<Navbar />);
    const logo = screen.getAllByAltText('Logo');
    expect(logo.length).toBe(2);
  });

  test('should render menu links', () => {
    const menuLink = ['Fitur', 'Trading', 'Edukasi', 'Lainnya'];
    render(<Navbar />);

    menuLink.map((item) => {
      const link = screen.getByText(item);
      expect(link).toBeInTheDocument();
    });
  });

  test('should render button download', () => {
    render(<Navbar />);
    const button = screen.getByTestId('download-btn');
    expect(button).toBeInTheDocument();
  });
});

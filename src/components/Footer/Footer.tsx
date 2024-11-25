import React from 'react';
import logo from '../../assets/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-4">
              <img src={logo} alt="Logo" className="h-4" />
            </div>
            <p className="text-gray-600 text-center lg:text-left">
              © {new Date().getFullYear()} PT Pintu Kemana Saja. All rights
              reserved.
            </p>
          </div>

          <div className="flex space-x-8">
            {['About', 'Contact', 'Privacy Policy', 'Terms of Service'].map(
              (link) => (
                <span
                  data-testid="menu-link"
                  key={link}
                  className="cursor-pointer text-sm text-gray-600 hover:text-gray-900"
                >
                  {link}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

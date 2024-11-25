import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      data-testid="back-to-top-button"
      onClick={scrollToTop}
      className={`fixed bottom-7 right-7 bg-blue-300 hover:bg-blue-400 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
      aria-label="Back to top"
    >
      <MdKeyboardDoubleArrowUp className="text-2xl" />
    </button>
  );
};

export default BackToTopButton;

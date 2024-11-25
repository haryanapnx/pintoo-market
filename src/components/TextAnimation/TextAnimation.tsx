import React, { useEffect, useState } from 'react';

interface TextAnimationProps {
  value: string;
  price: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ value, price }) => {
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [animationClass, setAnimationClass] = useState<string>('');

  useEffect(() => {
    if (previousValue !== null && price !== previousValue) {
      if (Number(price) > Number(previousValue)) {
        setAnimationClass('text-green-500');
      } else if (Number(price) < Number(previousValue)) {
        setAnimationClass('text-red-500');
      }

      const timeout = setTimeout(() => setAnimationClass('text-black'), 1000);
      return () => clearTimeout(timeout);
    }

    setPreviousValue(price);
  }, [price, previousValue]);

  return (
    <div
      className={`transition-colors text-base font-semibold duration-2500 ease-in-out py-1 rounded ${animationClass}`}
    >
      {value}
    </div>
  );
};

export default TextAnimation;

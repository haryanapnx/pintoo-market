import React from 'react';

interface CoinLogoProps {
  logoSrc: string;
  backgroundColor: string;
  size?: number;
}

const CoinLogo: React.FC<CoinLogoProps> = ({
  logoSrc,
  backgroundColor,
  size = 32,
}) => (
  <div
    data-testid="coin-logo"
    style={{
      maskImage: `url(${logoSrc})`,
      WebkitMaskImage: `url(${logoSrc})`,
      maskPosition: '50% 50%',
      WebkitMaskPosition: '50% 50%',
      maskRepeat: 'no-repeat',
      WebkitMaskRepeat: 'no-repeat',
      maskSize: 'cover',
      WebkitMaskSize: 'cover',
      backgroundImage: `url(${logoSrc})`,
      backgroundColor,
      backgroundSize: 'cover',
      width: size,
      height: size,
      backgroundBlendMode: 'screen',
    }}
  />
);

export default CoinLogo;

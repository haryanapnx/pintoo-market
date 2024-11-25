import { useMemo } from 'react';
import { ITokenList } from '../interfaces/token.model';

export const useTopMovers = (tokens: ITokenList[]) => {
  return useMemo(() => {
    const validData = tokens.filter(
      (token) => token.day && !isNaN(parseFloat(token.day))
    );

    return [...validData]
      .filter((token) => parseFloat(token.day ?? '0') > 0)
      .sort((a, b) => parseFloat(b.day ?? '0') - parseFloat(a.day ?? '0'))
      .slice(0, 6);
  }, [tokens]);
};

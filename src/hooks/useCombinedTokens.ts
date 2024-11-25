import { useMemo } from 'react';
import { ICurencyTokenData } from '../interfaces/currency.model';
import { IPriceData } from '../interfaces/price.model';

export const useCombinedTokens = (
  currencies: ICurencyTokenData[],
  priceChanges: IPriceData[]
) => {
  return useMemo(() => {
    return currencies
      .filter((currency) => currency.currencyGroup !== 'IDR')
      .map((currency) => {
        const priceChange = priceChanges.find(
          (price) =>
            price.pair === `${currency.currencySymbol.toLowerCase()}/idr`
        );
        return { ...currency, ...priceChange };
      });
  }, [currencies, priceChanges]);
};

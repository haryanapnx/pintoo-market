import { renderHook } from '@testing-library/react';
import { useCombinedTokens } from './useCombinedTokens';
import { IPriceData } from '../interfaces/price.model';
import { ICurencyTokenData } from '../interfaces/currency.model';

describe('useCombinedTokens', () => {
  const mockCurrencies: ICurencyTokenData[] = [
    {
      currency_id: 13,
      currencyGroup: 'BTC',
      color: '#B13932',
      currencySymbol: 'BTC',
      name: 'Bitcoin',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_IDRT.svg',
      decimal_point: 0,
      listingDate: '2020-09-15T09:43:42Z',
      wallets: [],
      is_limit_order_enabled: false,
      is_upcoming: false,
    },
  ];

  const mockPriceChanges: IPriceData[] = [
    {
      pair: 'btc/idr',
      latestPrice: '50000',
      day: '2.5',
      week: '5.0',
      month: '4.0',
      year: '3.0',
    },
  ];

  test("filters out 'IDR' currency group and combines currencies with price changes", () => {
    const { result } = renderHook(() =>
      useCombinedTokens(mockCurrencies, mockPriceChanges)
    );

    expect(result.current).toEqual([
      {
        currency_id: 13,
        currencyGroup: 'BTC',
        color: '#B13932',
        currencySymbol: 'BTC',
        name: 'Bitcoin',
        logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_IDRT.svg',
        decimal_point: 0,
        listingDate: '2020-09-15T09:43:42Z',
        wallets: [],
        is_limit_order_enabled: false,
        is_upcoming: false,
        pair: 'btc/idr',
        latestPrice: '50000',
        day: '2.5',
        week: '5.0',
        month: '4.0',
        year: '3.0',
      },
    ]);
  });

  test('returns an empty array when no currencies are provided', () => {
    const { result } = renderHook(() =>
      useCombinedTokens([], mockPriceChanges)
    );
    expect(result.current).toEqual([]);
  });
});

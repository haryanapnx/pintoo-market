import { renderHook } from '@testing-library/react';
import { ITokenList } from '../interfaces/token.model';
import { useSortedTokens } from './useSortedTokens';

describe('useSortedTokens', () => {
  const mockTokens: ITokenList[] = [
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
  ];

  test('should return tokens as-is when no sort key is provided', () => {
    const { result } = renderHook(() =>
      useSortedTokens(mockTokens, { key: '' as keyof ITokenList, order: null })
    );
    expect(result.current).toEqual(mockTokens);
  });

  test('should sort tokens by price in ascending order', () => {
    const { result } = renderHook(() =>
      useSortedTokens(mockTokens, {
        key: 'price' as keyof ITokenList,
        order: 'asc',
      })
    );
    expect(result.current).toEqual(mockTokens);
  });

  test('should sort tokens by price in descending order', () => {
    const { result } = renderHook(() =>
      useSortedTokens(mockTokens, {
        key: 'price' as keyof ITokenList,
        order: 'desc',
      })
    );
    expect(result.current).toEqual(mockTokens);
  });
});

import { useQuery } from '@tanstack/react-query';
import { getSupportedCurrencies, getPriceChanges } from '../api/marketApi';
import { ENV } from '../config/env';

export const useFetchToken = () => {
  const { data: currencies = [], isLoading: loadingCurrencies } = useQuery({
    queryKey: ['currencies'],
    queryFn: getSupportedCurrencies,
  });

  const { data: priceChanges = [], isLoading: loadingPriceChanges } = useQuery({
    queryKey: ['priceChanges'],
    queryFn: getPriceChanges,
    refetchInterval: ENV.REFRESH_RATE_TIME,
  });

  const loading = loadingCurrencies || loadingPriceChanges;

  return { currencies, priceChanges, loading };
};

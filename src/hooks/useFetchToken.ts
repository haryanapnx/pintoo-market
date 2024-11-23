import { useQuery } from '@tanstack/react-query';
import { getSupportedCurrencies, getPriceChanges } from '../api/marketApi';

export const useFetchToken = () => {
  const { data: currencies = [], isLoading: loadingCurrencies } = useQuery({
    queryKey: ['currencies'],
    queryFn: getSupportedCurrencies,
  });

  const { data: priceChanges = [], isLoading: loadingPriceChanges } = useQuery({
    queryKey: ['priceChanges'],
    queryFn: getPriceChanges,
    refetchInterval: 1000,
  });

  const loading = loadingCurrencies || loadingPriceChanges;

  return { currencies, priceChanges, loading };
};
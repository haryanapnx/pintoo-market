import { apiClient } from './client';

export const getSupportedCurrencies = async () => {
  const { data } = await apiClient.get('/wallet/supportedCurrencies');
  return data.payload;
};

export const getPriceChanges = async () => {
  const { data } = await apiClient.get('/trade/price-changes');
  return data.payload;
};

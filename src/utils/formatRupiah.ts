export const convertToRp = (
  value: string | number,
  decimals: number = 8
): string => {
  if (typeof value === 'string') {
    value = parseFloat(value);
  }

  if (isNaN(value)) return 'Rp 0';

  const formattedValue = new Intl.NumberFormat('id-ID', {
    maximumFractionDigits: decimals,
  }).format(value);

  return `Rp ${formattedValue}`;
};

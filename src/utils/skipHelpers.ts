import type { Skip } from '../types/Skip';

export const calculateTotalPrice = (skip: Skip): number => {
  return skip.price_before_vat + (skip.price_before_vat * skip.vat / 100);
};

export const calculateVatAmount = (skip: Skip): number => {
  return skip.price_before_vat * skip.vat / 100;
};

export const getSkipDescription = (size: number): string => {
  if (size <= 4) return 'Perfect for small home projects';
  if (size <= 8) return 'Ideal for kitchen & bathroom refits';
  if (size <= 12) return 'Great for house clearances';
  return 'Perfect for large construction projects';
};

export const getCapacityDescription = (size: number): string => {
  const bags = Math.round(size * 10);
  const wheelieBins = Math.round(size * 2);
  return `~${bags} bin bags or ${wheelieBins} wheelie bins`;
};

export const formatPrice = (price: number): string => {
  return `£${price.toFixed(2)}`;
}; 
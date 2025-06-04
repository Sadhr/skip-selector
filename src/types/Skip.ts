export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

export type SortField = 'size' | 'price';
export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  field: SortField;
  direction: SortDirection;
}

export interface SkipSelectorProps {
  postcode?: string;
  area?: string;
}

export interface SkipCardProps {
  skip: Skip;
  onSelect: (skip: Skip) => void;
  isSelected: boolean;
} 
import { useMemo } from 'react';
import type { Skip, SortConfig } from '../types/Skip';
import { calculateTotalPrice } from '../utils/skipHelpers';

interface UseSortAndFilterProps {
  skips: Skip[];
  sortConfig: SortConfig;
  filterByRoad: boolean | null;
}

export const useSortAndFilter = ({ skips, sortConfig, filterByRoad }: UseSortAndFilterProps) => {
  const sortedAndFilteredSkips = useMemo(() => {
    let filtered = [...skips];
    
    if (filterByRoad !== null) {
      filtered = filtered.filter(skip => skip.allowed_on_road === filterByRoad);
    }
    
    const sorted = filtered.sort((a, b) => {
      let comparison = 0;
      
      if (sortConfig.field === 'size') {
        comparison = a.size - b.size;
      } else {
        const priceA = calculateTotalPrice(a);
        const priceB = calculateTotalPrice(b);
        comparison = priceA - priceB;
      }
      
      return sortConfig.direction === 'desc' ? -comparison : comparison;
    });
    
    return sorted;
  }, [skips, sortConfig, filterByRoad]);

  return {
    sortedAndFilteredSkips,
    totalCount: skips.length,
    filteredCount: sortedAndFilteredSkips.length
  };
}; 
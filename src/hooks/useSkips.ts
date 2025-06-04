import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Skip } from '../types/Skip';

interface UseSkipsReturn {
  skips: Skip[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useSkips = (postcode: string = 'NR32', area: string = 'Lowestoft'): UseSkipsReturn => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSkips = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get<Skip[]>(
        `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
      );
      setSkips(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch skips');
      console.error('Error fetching skips:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkips();
  }, [postcode, area]);

  const refetch = () => {
    fetchSkips();
  };

  return { skips, loading, error, refetch };
}; 
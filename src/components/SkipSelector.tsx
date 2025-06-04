import { useState } from 'react';
import { Container, Box } from '@mui/material';
import { useSkips } from '../hooks/useSkips';
import { useSortAndFilter } from '../hooks/useSortAndFilter';
import type { Skip, SortConfig } from '../types/Skip';
import Header from './Header';
import ControlPanel from './ControlPanel';
import SkipGrid from './SkipGrid';
import SelectionSummary from './SelectionSummary';
import PlacementSelector from './PlacementSelector';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';
import EmptyState from './EmptyState';

const SkipSelector = () => {
  const { skips, loading, error, refetch } = useSkips('NR32', 'Lowestoft');
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [showPlacement, setShowPlacement] = useState(false);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ 
    field: 'size', 
    direction: 'asc' 
  });
  const [filterByRoad, setFilterByRoad] = useState<boolean | null>(null);

  const { sortedAndFilteredSkips } = useSortAndFilter({
    skips,
    sortConfig,
    filterByRoad,
  });

  const handleSkipSelect = (skip: Skip) => {
    if (selectedSkip?.id === skip.id) {
      setSelectedSkip(null);
    } else {
      setSelectedSkip(skip);
    }
  };

  const handleContinueToPlacement = () => {
    if (selectedSkip) {
      setShowPlacement(true);
    }
  };

  const handleBackFromPlacement = () => {
    setShowPlacement(false);
  };

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} onRetry={refetch} />;
  if (skips.length === 0) return <EmptyState />;

  if (showPlacement && selectedSkip) {
    return (
      <PlacementSelector
        selectedSkip={selectedSkip}
        onBack={handleBackFromPlacement}
        onContinue={handleContinueToPlacement}
      />
    );
  }

  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: '#fafafa',
      py: { xs: 2, sm: 4 }
    }}>
      <Container 
        maxWidth="xl" 
        sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          minHeight: '100vh'
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto'
        }}>
          <Header />
          
          <ControlPanel
            sortConfig={sortConfig}
            setSortConfig={setSortConfig}
            filterByRoad={filterByRoad}
            setFilterByRoad={setFilterByRoad}
            onRefresh={refetch}
          />

          <SkipGrid 
            skips={sortedAndFilteredSkips}
            selectedSkips={selectedSkip ? [selectedSkip] : []}
            onSkipSelect={handleSkipSelect}
          />

          {selectedSkip && (
            <SelectionSummary 
              selectedSkips={[selectedSkip]} 
              onContinue={handleContinueToPlacement}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default SkipSelector; 